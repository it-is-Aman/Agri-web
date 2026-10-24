import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { localePath, type Dictionary, type Locale } from "@/i18n"
import { Button } from "@/components/ui/button"
import { SawChainIcon } from "@/components/illustrations/PartIcons"

export function DealerBand({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-signal">
      <SawChainIcon
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-10 size-[26rem] text-ink/10"
        strokeWidth={0.8}
      />
      <div className="relative mx-auto grid max-w-7xl items-end gap-8 px-4 py-16 lg:grid-cols-[1.3fr_1fr] lg:py-20">
        <div>
          <p className="spec-label text-ink/70">— {t.dealerBand.label}</p>
          <h2 className="mt-3 text-6xl sm:text-7xl lg:text-8xl">{t.dealerBand.title}</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed">{t.dealerBand.body}</p>
          <Button asChild variant="ink" size="lg" className="mt-6">
            <Link href={localePath(lang, "/dealers")}>
              {t.dealerBand.cta} <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
