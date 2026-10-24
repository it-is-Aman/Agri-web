import type { Dictionary } from "@/i18n"
import { SectionHead } from "@/components/shared/SectionHead"

// Outlined giant step numbers joined by a rule — like an assembly sequence in a manual.
export function ProcessSteps({ t }: { t: Dictionary }) {
  return (
    <section className="border-y-2 border-ink bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <SectionHead index="04" label={t.process.label} title={t.process.title} />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {t.process.steps.map((step, i) => (
            <li key={step.title} className="relative lg:pr-8">
              <div className="flex items-center gap-4">
                <span className="font-display text-8xl font-semibold leading-[0.75] text-transparent [-webkit-text-stroke:2px_var(--ink)]">
                  {i + 1}
                </span>
                <span className="hidden h-0.5 flex-1 bg-ink lg:block" aria-hidden="true" />
                {i < t.process.steps.length - 1 && (
                  <span className="hidden size-3 rotate-45 border-r-2 border-t-2 border-ink lg:block" aria-hidden="true" />
                )}
              </div>
              <p className="mt-5 font-display text-3xl uppercase leading-none">{step.title}</p>
              <p className="mt-2 max-w-xs text-graphite">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
