"use client"

import { useState, useEffect } from 'react'
import { Activity } from '@/types/activity'
import { toast } from 'react-toastify'
import { categoryColors, newActivityColors } from '@/constants/categories'

const getTodayKey = () => {
  const now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
}

const requestSessionNotifications = () => {
  if (!('Notification' in window) || Notification.permission !== 'default') return

  const sessionKey = 'better-track.notification-prompted'
  if (window.sessionStorage.getItem(sessionKey) === 'true') return

  window.sessionStorage.setItem(sessionKey, 'true')
  Notification.requestPermission().catch(() => undefined)
}

const playBudgetChime = () => {
  const AudioContextClass =
    window.AudioContext ||
    (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AudioContextClass) return

  const audioContext = new AudioContextClass()
  const now = audioContext.currentTime
  const gain = audioContext.createGain()

  gain.gain.setValueAtTime(0, now)
  gain.gain.linearRampToValueAtTime(0.045, now + 0.03)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 1.05)
  gain.connect(audioContext.destination)

  ;[523.25, 659.25, 783.99].forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator()
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(frequency, now + index * 0.08)
    oscillator.connect(gain)
    oscillator.start(now + index * 0.08)
    oscillator.stop(now + 0.55 + index * 0.08)
  })

  window.setTimeout(() => void audioContext.close(), 1300)
}

const announceBudgetExceeded = (activity: Activity) => {
  const title = `${activity.name} budget exceeded`
  const body = `${activity.name} has passed its ${activity.goalMinutes}-minute budget.`

  toast.warn(body)
  playBudgetChime()

  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, {
      body,
      tag: `better-track-budget-${activity.id}`,
      silent: true,
    })
  }
}

export function useActivityTimer(initialActivities: Activity[]) {
  const [activities, setActivities] = useState<Activity[]>(initialActivities)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('better-track.activities')
    const savedDate = window.localStorage.getItem('better-track.date')
    const today = getTodayKey()

    if (saved && savedDate === today) {
      try {
        const parsed = JSON.parse(saved) as Activity[]
        setActivities(parsed.map(activity => ({
          ...activity,
          isRunning: false,
          lastUpdate: 0,
          goalMinutes: activity.goalMinutes ?? 30,
          kind: activity.kind ?? 'leisure',
        })))
      } catch {
        window.localStorage.removeItem('better-track.activities')
      }
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return
    requestSessionNotifications()
  }, [isHydrated])

  useEffect(() => {
    if (!isHydrated) return
    window.localStorage.setItem('better-track.activities', JSON.stringify(activities))
    window.localStorage.setItem('better-track.date', getTodayKey())
  }, [activities, isHydrated])

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = Date.now()
      setActivities(previous => previous.map(activity => {
        if (!activity.isRunning) return activity
        const elapsed = Math.max(0, (now - activity.lastUpdate) / 1000)
        const newTime = activity.time + elapsed
        const reachedGoal = activity.alertEnabled && activity.time < activity.alertTime && newTime >= activity.alertTime

        if (reachedGoal) {
          announceBudgetExceeded(activity)
        }

        return { ...activity, time: newTime, lastUpdate: now }
      }))
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  const toggleTimer = (id: number) => {
    const now = Date.now()
    setActivities(prevActivities =>
      prevActivities.map(activity => {
        if (activity.id === id) {
          if (!activity.isRunning) {
            return { ...activity, isRunning: true, lastUpdate: now }
          } else {
            const elapsed = Math.max(0, (now - activity.lastUpdate) / 1000)
            return { ...activity, time: activity.time + elapsed, isRunning: false, lastUpdate: 0 }
          }
        } else if (activity.isRunning) {
          const elapsed = Math.max(0, (now - activity.lastUpdate) / 1000)
          return { ...activity, time: activity.time + elapsed, isRunning: false, lastUpdate: 0 }
        }
        return activity
      })
    )
  }

  const resetTimer = (id: number) => {
    setActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === id ? { ...activity, time: 0, isRunning: false, lastUpdate: 0 } : activity
      )
    )
  }

  const deleteActivity = (id: number) => {
    setActivities(prevActivities => prevActivities.filter(activity => activity.id !== id))
  }

  const renameActivity = (id: number, newName: string) => {
    setActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === id ? { 
          ...activity, 
          name: newName, 
          color: categoryColors[newName] || activity.color
        } : activity
      )
    )
  }

  const addNewActivity = () => {
    const newId = activities.length ? Math.max(...activities.map(a => a.id)) + 1 : 1
    const color = newActivityColors[(newId - 1) % newActivityColors.length]
    setActivities(previous => [...previous, {
      id: newId,
      name: "New Activity",
      time: 0,
      isRunning: false,
      color,
      alertEnabled: false,
      alertTime: 30 * 60,
      goalMinutes: 30,
      kind: 'leisure',
      lastUpdate: 0
    }])
  }

  const adjustGoal = (id: number, change: number) => {
    setActivities(previous => previous.map(activity => {
      if (activity.id !== id) return activity
      const goalMinutes = Math.min(240, Math.max(5, activity.goalMinutes + change))
      return { ...activity, goalMinutes, alertTime: goalMinutes * 60 }
    }))
  }

  const toggleKind = (id: number) => {
    setActivities(previous => previous.map(activity =>
      activity.id === id
        ? { ...activity, kind: activity.kind === 'intentional' ? 'leisure' : 'intentional' }
        : activity
    ))
  }

  const toggleAlert = (id: number) => {
    setActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === id ? { ...activity, alertEnabled: !activity.alertEnabled } : activity
      )
    )
  }

  return {
    activities,
    toggleTimer,
    resetTimer,
    deleteActivity,
    renameActivity,
    addNewActivity,
    toggleAlert,
    adjustGoal,
    toggleKind,
    isHydrated,
  }
}
