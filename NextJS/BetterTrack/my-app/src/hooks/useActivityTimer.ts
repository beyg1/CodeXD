"use client"

import { useState, useEffect, useRef } from 'react'
import { Activity } from '@/types/activity'
import { toast } from 'react-toastify'
import { formatTime } from '@/lib/utils'
import { categoryColors } from '@/constants/categories'

export function useActivityTimer(initialActivities: Activity[]) {
  const [activities, setActivities] = useState<Activity[]>(initialActivities)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const updateTimers = (timestamp: number) => {
      setActivities(prevActivities =>
        prevActivities.map(activity => {
          if (activity.isRunning) {
            const elapsed = timestamp - activity.lastUpdate
            const newTime = activity.time + elapsed / 1000

            if (activity.alertEnabled && newTime >= activity.alertTime) {
              toast.info(`Alert: You've been ${activity.name} for ${formatTime(activity.alertTime)}!`)
              return { ...activity, time: newTime, alertEnabled: false, lastUpdate: timestamp }
            }

            return { ...activity, time: newTime, lastUpdate: timestamp }
          }
          return activity
        })
      )

      animationFrameRef.current = requestAnimationFrame(updateTimers)
    }

    animationFrameRef.current = requestAnimationFrame(updateTimers)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const toggleTimer = (id: number) => {
    const now = performance.now()
    setActivities(prevActivities =>
      prevActivities.map(activity => {
        if (activity.id === id) {
          if (!activity.isRunning) {
            return { ...activity, isRunning: true, lastUpdate: now }
          } else {
            return { ...activity, isRunning: false }
          }
        } else if (activity.isRunning) {
          return { ...activity, isRunning: false }
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

  const renameActivity = (id: number, newName: string) => {
    setActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === id ? { 
          ...activity, 
          name: newName, 
          color: categoryColors[newName] || categoryColors.default 
        } : activity
      )
    )
  }

  const addNewActivity = () => {
    const newId = Math.max(...activities.map(a => a.id)) + 1
    setActivities([...activities, { 
      id: newId, 
      name: "New Activity", 
      time: 0, 
      isRunning: false, 
      color: categoryColors.default, 
      alertEnabled: false, 
      alertTime: 15 * 60, 
      lastUpdate: 0 
    }])
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
    renameActivity,
    addNewActivity,
    toggleAlert
  }
}
