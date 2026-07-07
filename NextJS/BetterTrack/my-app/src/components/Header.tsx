import { CircleDot, RotateCcw } from 'lucide-react'

interface HeaderProps {
  totalTime: string
  onResetTracking: () => void
}

export function Header({ totalTime, onResetTracking }: HeaderProps) {
  const today = new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date())

  return (
    <header className="flex flex-col gap-5 rounded-[1.4rem] border border-[#B8D5BD] bg-[#F8FFF2]/80 px-4 py-4 shadow-[0_16px_42px_rgba(65,105,76,0.10)] backdrop-blur sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-[0.9rem] bg-[linear-gradient(135deg,#315C43,#4A9B68)] text-[#F6FBF2] shadow-[0_10px_24px_rgba(49,92,67,0.24)]">
          <CircleDot className="size-5" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div>
          <p className="text-xl font-semibold tracking-[-0.04em] text-[#17241D]">Better Track</p>
          <p className="text-xs font-medium tracking-wide text-[#60776A]">A ledger for your attention</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-end sm:gap-8">
        <button
          type="button"
          onClick={onResetTracking}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-[#D2B69A] bg-[#FFF4E8] px-3 text-xs font-semibold text-[#74452B] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:border-[#B9825F] hover:bg-[#FFE8D8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A66544] focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          <RotateCcw className="size-3.5" aria-hidden="true" />
          Reset Tracking
        </button>
        <div className="text-left sm:text-right">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#66806F]">Today</p>
          <p className="mt-1 text-sm font-medium text-[#2F4438]">{today}</p>
        </div>
        <div className="text-right">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#66806F]">Recorded</p>
          <p className="mt-1 font-mono text-sm font-semibold tabular-nums text-[#2F4438]">{totalTime}</p>
        </div>
      </div>
    </header>
  )
}
