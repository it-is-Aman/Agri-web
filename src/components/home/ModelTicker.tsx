import { TrimmerHeadIcon } from "@/components/illustrations/PartIcons"

// Scrolling strip of machine models / types on signal yellow. Pauses for reduced-motion users.
export function ModelTicker({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null
  // Repeat so the strip is always wider than the screen, then duplicate for a seamless loop.
  const row = Array.from({ length: Math.ceil(12 / items.length) }, () => items).flat()

  return (
    <div className="flex items-stretch overflow-hidden border-b-2 border-ink bg-signal text-ink">
      <p className="spec-label relative z-10 flex shrink-0 items-center border-r-2 border-ink bg-ink px-4 text-signal">
        {label}
      </p>
      <div className="flex-1 overflow-hidden" aria-label={items.join(", ")}>
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]" aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {row.map((item, i) => (
                <li key={`${copy}-${i}`} className="flex items-center gap-6 px-6 py-3">
                  <span className="whitespace-nowrap font-display text-3xl uppercase leading-none pt-1">{item}</span>
                  <TrimmerHeadIcon className="size-5" strokeWidth={2.5} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
