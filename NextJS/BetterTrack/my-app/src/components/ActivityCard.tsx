"use client"

import { AlertTriangle, ArrowLeftRight, Bell, BellOff, Minus, Pause, Play, Plus, RotateCcw, Trash2 } from 'lucide-react'
import { Activity } from '@/types/activity'
import { formatTime } from '@/lib/utils'

const activitySkins: Record<string, {
  card: string
  activeCard: string
  rail: string
  play: string
  progressTrack: string
  kindIntentional: string
  kindOpen: string
}> = {
  "Entertainment": {
    card: "border-[#E8B8C0] bg-[#FFF0F2] hover:border-[#DC8F9D] hover:bg-[#FFE7EC]",
    activeCard: "border-[#D97486] bg-[#FFE9EE] shadow-[0_18px_48px_rgba(190,83,104,0.18)]",
    rail: "bg-[#C94F68]",
    play: "border-[#E7A9B4] bg-[#F8C7D0] text-[#52252F] hover:border-[#C94F68] hover:bg-[#F1AEBB]",
    progressTrack: "bg-[#F5CDD5]",
    kindIntentional: "bg-[#F3D8DD] text-[#6E3440] hover:bg-[#EDC3CC]",
    kindOpen: "bg-[#FFE0E6] text-[#7B3846] hover:bg-[#F8C7D0]",
  },
  "Learning": {
    card: "border-[#AAD4E0] bg-[#ECF8FB] hover:border-[#76B7C8] hover:bg-[#DFF3F8]",
    activeCard: "border-[#5EA9BD] bg-[#E2F5FA] shadow-[0_18px_48px_rgba(76,145,164,0.18)]",
    rail: "bg-[#3F9DB4]",
    play: "border-[#9BCCD8] bg-[#C9EAF1] text-[#143E49] hover:border-[#5EA9BD] hover:bg-[#B4DFE9]",
    progressTrack: "bg-[#CBE7EE]",
    kindIntentional: "bg-[#D8F0F5] text-[#276678] hover:bg-[#C3E7EF]",
    kindOpen: "bg-[#EDF6D9] text-[#617434] hover:bg-[#E1EDBD]",
  },
  "Working": {
    card: "border-[#A9D7B6] bg-[#EFFAEC] hover:border-[#79BD8D] hover:bg-[#E2F5E3]",
    activeCard: "border-[#62A978] bg-[#E5F6E5] shadow-[0_18px_48px_rgba(72,142,91,0.19)]",
    rail: "bg-[#3F955E]",
    play: "border-[#9BCFA9] bg-[#C8ECCC] text-[#173E25] hover:border-[#62A978] hover:bg-[#B4E0BC]",
    progressTrack: "bg-[#CAE6CF]",
    kindIntentional: "bg-[#D9F1DD] text-[#2D6B3F] hover:bg-[#C8E8CF]",
    kindOpen: "bg-[#F4E9CA] text-[#735F2E] hover:bg-[#EBDDAD]",
  },
  "Social Media": {
    card: "border-[#E4C66D] bg-[#FFF7DC] hover:border-[#C9A633] hover:bg-[#FFF0BB]",
    activeCard: "border-[#BE9B2F] bg-[#FFF0BB] shadow-[0_18px_48px_rgba(180,139,31,0.18)]",
    rail: "bg-[#B99023]",
    play: "border-[#DFC15E] bg-[#F3D878] text-[#473910] hover:border-[#BE9B2F] hover:bg-[#E8C64E]",
    progressTrack: "bg-[#EFE0A7]",
    kindIntentional: "bg-[#E8F0D1] text-[#526E38] hover:bg-[#D9E8B8]",
    kindOpen: "bg-[#F6E4A6] text-[#6B5618] hover:bg-[#EED47B]",
  },
  default: {
    card: "border-[#B9C8EA] bg-[#F0F4FF] hover:border-[#8EA7DC] hover:bg-[#E8EEFF]",
    activeCard: "border-[#7F98D2] bg-[#E9EFFF] shadow-[0_18px_48px_rgba(94,119,180,0.18)]",
    rail: "bg-[#6E88C8]",
    play: "border-[#AEBFE9] bg-[#D7E0FA] text-[#26375E] hover:border-[#7F98D2] hover:bg-[#C5D2F4]",
    progressTrack: "bg-[#D9E2F6]",
    kindIntentional: "bg-[#E1E9FF] text-[#385184] hover:bg-[#D1DCF9]",
    kindOpen: "bg-[#F4E9CA] text-[#735F2E] hover:bg-[#EBDDAD]",
  },
}

const activityColorSkins: typeof activitySkins = {
  "bg-[#C993A5]": {
    card: "border-[#DDB5C4] bg-[#FFF0F5] hover:border-[#C993A5] hover:bg-[#FCE5EF]",
    activeCard: "border-[#B8788D] bg-[#FBE8F0] shadow-[0_18px_48px_rgba(175,100,126,0.18)]",
    rail: "bg-[#B8788D]",
    play: "border-[#D9AAB9] bg-[#F0C8D5] text-[#542A39] hover:border-[#B8788D] hover:bg-[#E8B5C7]",
    progressTrack: "bg-[#F0CEDA]",
    kindIntentional: "bg-[#F2D9E2] text-[#704157] hover:bg-[#EBC6D3]",
    kindOpen: "bg-[#F8DFD4] text-[#744431] hover:bg-[#EEC7B8]",
  },
  "bg-[#72B7AE]": {
    card: "border-[#A7D7D1] bg-[#EAF9F7] hover:border-[#72B7AE] hover:bg-[#DDF4F1]",
    activeCard: "border-[#58A69B] bg-[#DFF5F2] shadow-[0_18px_48px_rgba(74,149,140,0.18)]",
    rail: "bg-[#42998F]",
    play: "border-[#91CBC4] bg-[#BFE6E1] text-[#173F3B] hover:border-[#58A69B] hover:bg-[#A9DBD5]",
    progressTrack: "bg-[#C9E8E4]",
    kindIntentional: "bg-[#D8F1EE] text-[#276B65] hover:bg-[#C3E8E3]",
    kindOpen: "bg-[#E7EDC8] text-[#637135] hover:bg-[#DCE5B1]",
  },
  "bg-[#A8A0D6]": {
    card: "border-[#C8C2EA] bg-[#F3F1FF] hover:border-[#A8A0D6] hover:bg-[#ECE8FF]",
    activeCard: "border-[#8D83C8] bg-[#ECE9FF] shadow-[0_18px_48px_rgba(117,105,182,0.18)]",
    rail: "bg-[#7D72BF]",
    play: "border-[#BBB4E4] bg-[#DAD5F4] text-[#312A61] hover:border-[#8D83C8] hover:bg-[#CAC3EE]",
    progressTrack: "bg-[#DDD8F1]",
    kindIntentional: "bg-[#E4E0FA] text-[#4C4381] hover:bg-[#D6D0F3]",
    kindOpen: "bg-[#F0E2C7] text-[#725B2E] hover:bg-[#E6D2AB]",
  },
  "bg-[#D99A7A]": {
    card: "border-[#ECC0AA] bg-[#FFF2EB] hover:border-[#D99A7A] hover:bg-[#FFE8DD]",
    activeCard: "border-[#C87F5D] bg-[#FFE9DF] shadow-[0_18px_48px_rgba(190,105,70,0.18)]",
    rail: "bg-[#BE6B49]",
    play: "border-[#E4AF95] bg-[#F2CBB9] text-[#542D1F] hover:border-[#C87F5D] hover:bg-[#EBB89F]",
    progressTrack: "bg-[#F2D3C4]",
    kindIntentional: "bg-[#E4ECD4] text-[#526D39] hover:bg-[#D8E5BF]",
    kindOpen: "bg-[#F7DDCF] text-[#75432F] hover:bg-[#EFC8B8]",
  },
}

interface ActivityCardProps {
  activity: Activity
  onRename: (id: number, newName: string) => void
  onToggleTimer: (id: number) => void
  onReset: (id: number) => void
  onDelete: (id: number) => void
  onToggleAlert: (id: number) => void
  onAdjustGoal: (id: number, change: number) => void
  onToggleKind: (id: number) => void
}

export function ActivityCard({
  activity,
  onRename,
  onToggleTimer,
  onReset,
  onDelete,
  onToggleAlert,
  onAdjustGoal,
  onToggleKind,
}: ActivityCardProps) {
  const skin = activitySkins[activity.name] ?? activityColorSkins[activity.color] ?? activitySkins.default
  const budgetSeconds = activity.goalMinutes * 60
  const isBudgetExceeded = activity.time > budgetSeconds
  const shouldAnimateBudgetExceeded = isBudgetExceeded && activity.isRunning
  const overBudgetSeconds = Math.max(0, activity.time - budgetSeconds)
  const progress = Math.min(100, (activity.time / (activity.goalMinutes * 60)) * 100)
  const progressWidth = progress === 0 ? 'w-0' : progress < 15 ? 'w-[12%]' : progress < 30 ? 'w-1/4' : progress < 50 ? 'w-2/5' : progress < 70 ? 'w-3/5' : progress < 90 ? 'w-4/5' : 'w-full'

  return (
    <article className={`group relative overflow-hidden rounded-[1.35rem] border px-4 py-4 transition duration-300 sm:px-5 ${isBudgetExceeded ? `${shouldAnimateBudgetExceeded ? 'animate-budget-glow' : ''} border-[#DCA243] bg-[#FFF5D7] shadow-[0_20px_52px_rgba(189,128,27,0.2)]` : activity.isRunning ? skin.activeCard : skin.card}`}>
      <span className={`absolute inset-y-0 left-0 w-2 ${isBudgetExceeded ? `${shouldAnimateBudgetExceeded ? 'animate-budget-pulse' : ''} bg-[#D99A2B]` : skin.rail} ${activity.isRunning || isBudgetExceeded ? 'opacity-100' : 'opacity-80'}`} aria-hidden="true" />
      <span className={`pointer-events-none absolute -right-10 -top-16 size-40 rounded-full ${isBudgetExceeded ? 'bg-[#E2A641] opacity-20' : `${skin.rail} opacity-10`} blur-3xl transition duration-500 group-hover:opacity-20`} aria-hidden="true" />
      <div className="flex items-start gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => onToggleTimer(activity.id)}
          aria-label={activity.isRunning ? `Pause ${activity.name}` : `Start ${activity.name}`}
          className={`mt-0.5 grid size-11 shrink-0 place-items-center rounded-[0.9rem] border transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315C43] focus-visible:ring-offset-2 active:scale-95 ${activity.isRunning ? 'border-[#203B2B] bg-[#203B2B] text-white shadow-[0_8px_18px_rgba(32,59,43,0.24)]' : skin.play}`}
        >
          {activity.isRunning ? <Pause className="size-4" fill="currentColor" /> : <Play className="ml-0.5 size-4" fill="currentColor" />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <label className="sr-only" htmlFor={`activity-${activity.id}`}>Activity name</label>
              <input
                id={`activity-${activity.id}`}
                value={activity.name}
                onChange={(event) => onRename(activity.id, event.target.value)}
                className="w-full truncate bg-transparent text-base font-semibold tracking-[-0.02em] text-[#1F3027] outline-none placeholder:text-[#84988B] focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#527A65] sm:max-w-52"
              />
              <button
                type="button"
                role="switch"
                aria-checked={activity.kind === 'intentional'}
                onClick={() => onToggleKind(activity.id)}
                title="Switch between Intentional time and Open time"
                className="mt-2 inline-grid min-w-[13.5rem] grid-cols-2 items-center rounded-full border border-black/10 bg-white/55 p-1 text-[0.64rem] font-semibold uppercase tracking-[0.11em] shadow-inner shadow-white/60 transition hover:bg-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527A65]"
              >
                <span className={`flex items-center justify-center gap-1 rounded-full px-2 py-1.5 transition ${activity.kind === 'intentional' ? skin.kindIntentional + ' shadow-sm' : 'text-[#6E7A72]'}`}>
                  Intentional
                </span>
                <span className={`flex items-center justify-center gap-1 rounded-full px-2 py-1.5 transition ${activity.kind === 'leisure' ? skin.kindOpen + ' shadow-sm' : 'text-[#6E7A72]'}`}>
                  <ArrowLeftRight className="size-3" aria-hidden="true" />
                  Open
                </span>
              </button>
            </div>
            <time className={`font-mono text-2xl font-medium tabular-nums tracking-[-0.05em] sm:text-right ${isBudgetExceeded ? 'text-[#8B5513]' : activity.isRunning ? 'text-[#315C43]' : 'text-[#263A2F]'}`}>
              {formatTime(activity.time)}
            </time>
          </div>

          <div className={`mt-4 h-2 overflow-hidden rounded-full ${isBudgetExceeded ? 'bg-[#F1D58B]' : skin.progressTrack}`} aria-label={`${Math.round(progress)}% of budget used`}>
            <div className={`h-full rounded-full transition-[width] duration-500 ${isBudgetExceeded ? `${shouldAnimateBudgetExceeded ? 'animate-budget-pulse' : ''} bg-[#C77C18]` : skin.rail} ${progressWidth}`} />
          </div>

          {isBudgetExceeded && (
            <div className="mt-3 flex items-start gap-2 rounded-xl border border-[#E6BE68] bg-[#FFF9E8] px-3 py-2 text-[#7A4B12] shadow-inner shadow-white/60" role="status" aria-live="polite">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <p className="text-sm font-semibold leading-snug">
                {activity.name}&apos;s allocated budget surpassed by <span className="font-mono tabular-nums">{formatTime(overBudgetSeconds)}</span>.
              </p>
            </div>
          )}

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1 text-xs font-medium text-[#607568]">
              <span>Budget</span>
              <button type="button" onClick={() => onAdjustGoal(activity.id, -5)} aria-label={`Reduce ${activity.name} budget by 5 minutes`} className="grid size-6 place-items-center rounded-md hover:bg-[#E0ECDF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527A65]"><Minus className="size-3" /></button>
              <span className="min-w-11 text-center font-mono font-semibold tabular-nums text-[#354E40]">{activity.goalMinutes}m</span>
              <button type="button" onClick={() => onAdjustGoal(activity.id, 5)} aria-label={`Increase ${activity.name} budget by 5 minutes`} className="grid size-6 place-items-center rounded-md hover:bg-[#E0ECDF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527A65]"><Plus className="size-3" /></button>
            </div>

            <div className="flex items-center gap-1">
              <button type="button" onClick={() => onToggleAlert(activity.id)} aria-label={`${activity.alertEnabled ? 'Disable' : 'Enable'} budget nudge for ${activity.name}`} title="Toggle budget nudge" className="grid size-8 place-items-center rounded-lg text-[#63786B] transition hover:bg-[#E0ECDF] hover:text-[#294437] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527A65]">
                {activity.alertEnabled ? <Bell className="size-3.5" /> : <BellOff className="size-3.5" />}
              </button>
              <button type="button" onClick={() => onReset(activity.id)} aria-label={`Reset ${activity.name}`} title="Reset timer" className="grid size-8 place-items-center rounded-lg text-[#63786B] transition hover:bg-[#E0ECDF] hover:text-[#294437] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527A65]">
                <RotateCcw className="size-3.5" />
              </button>
              <button type="button" onClick={() => onDelete(activity.id)} aria-label={`Delete ${activity.name}`} title="Delete activity" className="grid size-8 place-items-center rounded-lg text-[#7B6C64] transition hover:bg-[#F1E1DC] hover:text-[#8A3F32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66355]">
                <Trash2 className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
