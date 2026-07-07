'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, Clock3, Focus, Leaf, PieChart, Quote } from 'lucide-react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ActivityCard } from '@/components/ActivityCard'
import { AddActivityCard } from '@/components/AddActivityCard'
import { Header } from '@/components/Header'
import { useActivityTimer } from '@/hooks/useActivityTimer'
import { defaultActivities } from '@/constants/categories'
import { intentionQuotes, usefulRules } from '@/constants/reflections'
import { formatTime } from '@/lib/utils'

const chartPalette = [
  { stroke: '#C94F68', dot: 'bg-[#C94F68]' },
  { stroke: '#3F9DB4', dot: 'bg-[#3F9DB4]' },
  { stroke: '#3F955E', dot: 'bg-[#3F955E]' },
  { stroke: '#B99023', dot: 'bg-[#B99023]' },
  { stroke: '#B8788D', dot: 'bg-[#B8788D]' },
  { stroke: '#42998F', dot: 'bg-[#42998F]' },
  { stroke: '#7D72BF', dot: 'bg-[#7D72BF]' },
  { stroke: '#BE6B49', dot: 'bg-[#BE6B49]' },
]

const pickSessionItem = (key: string, items: string[]) => {
  const saved = window.sessionStorage.getItem(key)
  if (saved && items.includes(saved)) return saved

  const selected = items[Math.floor(Math.random() * items.length)]
  window.sessionStorage.setItem(key, selected)
  return selected
}

export default function TimeTracker() {
  const {
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
  } = useActivityTimer(defaultActivities)
  const [intention, setIntention] = useState(intentionQuotes[0])
  const [usefulRule, setUsefulRule] = useState(usefulRules[0])

  useEffect(() => {
    setIntention(pickSessionItem('better-track.session-intention', intentionQuotes))
    setUsefulRule(pickSessionItem('better-track.session-rule', usefulRules))
  }, [])

  const metrics = useMemo(() => {
    const total = activities.reduce((sum, activity) => sum + activity.time, 0)
    const intentional = activities
      .filter(activity => activity.kind === 'intentional')
      .reduce((sum, activity) => sum + activity.time, 0)
    const leisure = total - intentional
    const balance = total > 0 ? Math.round((intentional / total) * 100) : 0
    return { total, intentional, leisure, balance }
  }, [activities])

  const activityShares = useMemo(() => {
    const recordedActivities = activities.filter(activity => activity.time > 0)

    return recordedActivities.map((activity, index) => {
      const palette = chartPalette[index % chartPalette.length]

      return {
        id: activity.id,
        name: activity.name,
        time: activity.time,
        percentage: metrics.total > 0 ? (activity.time / metrics.total) * 100 : 0,
        stroke: palette.stroke,
        dot: palette.dot,
        offset: recordedActivities
          .slice(0, index)
          .reduce((sum, previous) => sum + (metrics.total > 0 ? (previous.time / metrics.total) * 100 : 0), 0),
      }
    })
  }, [activities, metrics.total])

  const shouldShowActivityShares = activityShares.length >= 2
  const activeActivity = activities.find(activity => activity.isRunning)

  return (
    <div className="min-h-dvh overflow-x-hidden bg-[radial-gradient(circle_at_12%_8%,#F9D8DF_0%,transparent_24%),radial-gradient(circle_at_88%_4%,#CBEAF2_0%,transparent_28%),radial-gradient(circle_at_78%_82%,#F6E3A3_0%,transparent_25%),linear-gradient(135deg,#F6FAEE_0%,#E3F2E5_48%,#E5F3F8_100%)] text-[#17241D] selection:bg-[#9BBCA7] selection:text-[#17211B]">
      <a href="#main-content" className="sr-only z-50 rounded-md bg-[#315C43] px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>

      <div className="mx-auto max-w-[90rem] px-4 py-5 sm:px-7 lg:px-10 lg:py-7">
        <Header totalTime={formatTime(metrics.total)} />

        <main id="main-content" className="grid gap-7 pt-7 lg:grid-cols-[minmax(0,1fr)_22rem] xl:gap-10">
          <section aria-labelledby="day-heading" className="min-w-0">
            <div className="mb-7 grid gap-5 xl:grid-cols-[minmax(0,1fr)_15rem]">
              <div>
                <p className="mb-3 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#60776A]">
                  <span className={`size-2 rounded-full ${activeActivity ? 'animate-pulse bg-[#5D946C]' : 'bg-[#9FB8A7]'}`} />
                  {activeActivity ? `${activeActivity.name} is running` : 'Ready when you are'}
                </p>
                <h1 id="day-heading" className="max-w-3xl text-balance text-[clamp(2.6rem,6vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#173123]">
                  Where did your attention go?
                </h1>
              </div>

              <div className="self-end rounded-2xl border border-[#98C5A3] bg-[#DFF2DE]/90 p-4 shadow-[0_16px_40px_rgba(73,129,86,0.16)] xl:mb-1">
                <p className="font-mono text-4xl font-medium tabular-nums tracking-[-0.06em] text-[#315C43]">{metrics.balance}%</p>
                <p className="mt-1 text-sm leading-snug text-[#60776A]">of recorded time was tagged intentional today.</p>
              </div>
            </div>

            <div className="mb-6 overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_85%_20%,rgba(249,216,223,0.28),transparent_28%),linear-gradient(135deg,#244C35_0%,#2F7050_58%,#3F8A9A_100%)] p-5 text-[#F6FBF2] shadow-[0_22px_55px_rgba(49,92,67,0.22)] sm:p-6">
              <div className="flex gap-3">
                <Quote className="mt-1 size-4 shrink-0 text-[#CDE6D2]" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <label htmlFor="daily-intention" className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#CDE6D2]">Today&apos;s intention</label>
                  <textarea
                    id="daily-intention"
                    rows={2}
                    value={intention}
                    onChange={event => setIntention(event.target.value)}
                    className="mt-2 w-full resize-none bg-transparent text-pretty text-xl font-medium leading-snug tracking-[-0.025em] text-[#F8FCF4] outline-none placeholder:text-[#A4BDAA] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-[#CDE6D2] sm:text-2xl"
                    placeholder="What deserves your best attention today?"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3 flex items-end justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.035em]">Activity ledger</h2>
                <p className="mt-1 text-sm text-[#60776A]">Start one timer. The last one pauses automatically.</p>
              </div>
              <span className="hidden rounded-full bg-[#E2F0E3] px-3 py-1 font-mono text-xs font-medium tabular-nums text-[#4C705B] sm:inline">{activities.length} categories</span>
            </div>

            <div className={`space-y-3 transition-opacity duration-300 ${isHydrated ? 'opacity-100' : 'opacity-50'}`}>
              {activities.map(activity => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  onToggleTimer={toggleTimer}
                  onReset={resetTimer}
                  onDelete={deleteActivity}
                  onRename={renameActivity}
                  onToggleAlert={toggleAlert}
                  onAdjustGoal={adjustGoal}
                  onToggleKind={toggleKind}
                />
              ))}
              <AddActivityCard onClick={addNewActivity} />
            </div>
          </section>

          <aside className="space-y-5 lg:sticky lg:top-7 lg:self-start" aria-label="Today at a glance">
            <section className="overflow-hidden rounded-[1.6rem] border border-[#9BC6A6] bg-[linear-gradient(180deg,#F9FFF3_0%,#EAF7E8_52%,#E3F4F8_100%)] p-5 shadow-[0_18px_45px_rgba(67,96,74,0.12)] sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#66806F]">Attention balance</p>
                  <h2 className="mt-1 text-xl font-semibold tracking-[-0.035em]">Today at a glance</h2>
                </div>
                <span className="grid size-9 place-items-center rounded-xl bg-[#BFE4C6] text-[#234B35] shadow-[0_10px_22px_rgba(58,120,76,0.18)]"><Focus className="size-4" /></span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[#5C7466]">
                Intentional is the share of recorded time spent on activities marked for focused work or learning.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="mb-2 flex justify-between text-xs font-semibold text-[#4F6A5B]"><span>Intentional</span><span className="font-mono tabular-nums">{formatTime(metrics.intentional)}</span></div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#DCE9DD]">
                    <div className={`h-full rounded-full bg-[#6EA47B] transition-all duration-500 ${metrics.total === 0 ? 'w-0' : metrics.balance < 25 ? 'w-1/4' : metrics.balance < 50 ? 'w-2/5' : metrics.balance < 75 ? 'w-3/5' : metrics.balance < 90 ? 'w-4/5' : 'w-full'}`} />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-xs font-semibold text-[#6D633A]"><span>Open time</span><span className="font-mono tabular-nums">{formatTime(metrics.leisure)}</span></div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#EEE6CB]">
                    <div className={`h-full rounded-full bg-[#D9BE72] transition-all duration-500 ${metrics.total === 0 ? 'w-0' : metrics.balance > 75 ? 'w-1/4' : metrics.balance > 50 ? 'w-2/5' : metrics.balance > 25 ? 'w-3/5' : metrics.balance > 10 ? 'w-4/5' : 'w-full'}`} />
                  </div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-2 overflow-hidden rounded-xl">
                <div className="rounded-xl bg-[#DFF3DD] p-3 shadow-inner shadow-white/50">
                  <Clock3 className="mb-3 size-4 text-[#60776A]" />
                  <p className="font-mono text-lg font-semibold tabular-nums">{formatTime(metrics.total)}</p>
                  <p className="mt-0.5 text-[0.68rem] font-medium text-[#6B8072]">total recorded</p>
                </div>
                <div className="rounded-xl bg-[#DDF1F7] p-3 shadow-inner shadow-white/50">
                  <Leaf className="mb-3 size-4 text-[#3D7380]" />
                  <p className="font-mono text-lg font-semibold tabular-nums">{metrics.balance}%</p>
                  <p className="mt-0.5 text-[0.68rem] font-medium text-[#668087]">tagged focus</p>
                </div>
              </div>
            </section>

            <section className="rounded-[1.4rem] border border-[#E6C76F] bg-[#FFF3C8]/90 p-5 shadow-[0_16px_38px_rgba(166,133,39,0.12)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#66806F]">A useful rule</p>
              <p className="mt-3 text-pretty text-base font-medium leading-relaxed text-[#334139]">{usefulRule}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#3D7350]">Make the invisible visible <ArrowUpRight className="size-3.5" /></div>
            </section>

            {shouldShowActivityShares && (
              <section className="rounded-[1.4rem] border border-[#A7CDB1] bg-[#F7FFF3]/90 p-4 shadow-[0_16px_38px_rgba(70,103,77,0.12)] sm:p-5" aria-labelledby="activity-share-heading">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#66806F]">Time share</p>
                    <h2 id="activity-share-heading" className="mt-1 text-lg font-semibold tracking-[-0.03em] text-[#263A2F]">Activity mix</h2>
                  </div>
                  <span className="grid size-9 place-items-center rounded-xl bg-[#DDF1F7] text-[#3D7380] shadow-[0_10px_22px_rgba(61,115,128,0.16)]">
                    <PieChart className="size-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="grid gap-4 min-[380px]:grid-cols-[8.5rem_minmax(0,1fr)] min-[380px]:items-center">
                  <div className="relative mx-auto size-36">
                    <svg viewBox="0 0 44 44" className="size-36 -rotate-90" role="img" aria-label="Recorded time split by activity">
                      <circle cx="22" cy="22" r="15.915" fill="none" stroke="#DCE9DD" strokeWidth="7" />
                      {activityShares.map(share => (
                        <circle
                          key={share.id}
                          cx="22"
                          cy="22"
                          r="15.915"
                          fill="none"
                          stroke={share.stroke}
                          strokeWidth="7"
                          strokeDasharray={`${share.percentage} ${100 - share.percentage}`}
                          strokeDashoffset={-share.offset}
                          strokeLinecap="butt"
                          className="transition-all duration-500"
                        />
                      ))}
                    </svg>
                    <div className="absolute inset-0 grid place-items-center text-center">
                      <div>
                        <p className="font-mono text-lg font-semibold tabular-nums text-[#263A2F]">{activityShares.length}</p>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#66806F]">active</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {activityShares.map(share => (
                      <div key={share.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-xl bg-white/60 px-3 py-2 shadow-inner shadow-white/60">
                        <span className={`size-2.5 rounded-full ${share.dot}`} aria-hidden="true" />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-[#334139]">{share.name}</p>
                          <p className="font-mono text-[0.68rem] tabular-nums text-[#6B8072]">{formatTime(share.time)}</p>
                        </div>
                        <span className="font-mono text-xs font-semibold tabular-nums text-[#315C43]">{Math.round(share.percentage)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </aside>
        </main>

        <footer className="mt-12 flex flex-col gap-2 border-t border-[#C7D8CB] py-5 text-xs font-medium text-[#60776A] sm:flex-row sm:items-center sm:justify-between">
          <p>Your data stays in this browser and resets to a fresh ledger each day.</p>
          <p>Better Track · built for attention, not surveillance</p>
        </footer>
      </div>

      <ToastContainer position="bottom-right" autoClose={4200} hideProgressBar closeButton={false} />
    </div>
  )
}
