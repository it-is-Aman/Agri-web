import type { ReactNode } from "react"

// Top band for inner pages: grid paper, manual label, oversized title.
export function PageIntro({
  label,
  title,
  intro,
  children,
}: {
  label: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section className="grid-paper border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-12 lg:pb-16 lg:pt-16">
        <p className="spec-label flex items-center gap-2">
          <span className="inline-block h-3 w-6 bg-signal" />
          <span className="text-steel">{label}</span>
        </p>
        <h1 className="mt-4 max-w-5xl text-6xl sm:text-7xl lg:text-8xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
