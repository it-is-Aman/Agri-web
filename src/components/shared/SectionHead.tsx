import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

// Manual-style section heading: "[03] — REPAIR WORKSHOP" over a big Teko title.
export function SectionHead({
  index,
  label,
  title,
  tone = "dark",
  action,
  className,
}: {
  index?: string
  label: string
  title: ReactNode
  tone?: "dark" | "light"
  action?: ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-6", className)}>
      <div className="max-w-4xl">
        <p className={cn("spec-label flex items-center gap-2", tone === "dark" ? "text-ink" : "text-bone")}>
          {index && <span className="bg-signal px-1.5 py-0.5 text-ink">[{index}]</span>}
          <span className={tone === "dark" ? "text-steel" : "text-bone/60"}>— {label}</span>
        </p>
        <h2 className={cn("mt-3 text-5xl sm:text-6xl lg:text-7xl", tone === "light" && "text-bone")}>{title}</h2>
      </div>
      {action}
    </div>
  )
}
