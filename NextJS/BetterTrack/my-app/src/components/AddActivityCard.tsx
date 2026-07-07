"use client"

import { Plus } from 'lucide-react'

interface AddActivityCardProps {
  onClick: () => void
}

export function AddActivityCard({ onClick }: AddActivityCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-h-20 w-full items-center justify-center gap-2 rounded-[1.35rem] border border-dashed border-[#82B58F] bg-[#E7F7E5]/85 text-sm font-semibold text-[#315C43] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition duration-200 hover:border-[#4F9B65] hover:bg-[#D7EFD9] hover:text-[#1E3E2C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527A65] focus-visible:ring-offset-2 active:scale-[0.99]"
    >
      <span className="grid size-7 place-items-center rounded-lg bg-[#D7EADC] text-[#315C43] transition group-hover:bg-[#C5E1CE]">
        <Plus className="size-3.5" />
      </span>
      Track another activity
    </button>
  )
}
