"use client"

import { ClipboardList } from "lucide-react"
import { useEnquiry } from "@/lib/enquiry/store"
import { cn } from "@/lib/utils"

export function EnquiryButton({ label, className }: { label: string; className?: string }) {
  const { count, setOpen } = useEnquiry()
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label={`${label} (${count})`}
      className={cn(
        "relative inline-flex size-11 items-center justify-center rounded-md border-2 border-ink/15 transition-colors hover:border-ink",
        className,
      )}
    >
      <ClipboardList className="size-5" />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 grid min-w-6 place-items-center rounded-full bg-signal px-1 font-mono text-xs font-bold text-ink ring-2 ring-bone">
          {count}
        </span>
      )}
    </button>
  )
}
