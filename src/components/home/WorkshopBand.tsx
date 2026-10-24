import Link from "next/link"
import { Bike, Store, Truck } from "lucide-react"
import { siteConfig, whatsappLink } from "@/config/site"
import { fmt, localePath, type Dictionary, type Locale } from "@/i18n"
import { Button } from "@/components/ui/button"
import { SectionHead } from "@/components/shared/SectionHead"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { ChainsawIcon } from "@/components/illustrations/PartIcons"

export function WorkshopBand({ lang, t }: { lang: Locale; t: Dictionary }) {
  const city = siteConfig.address.city
  const modes = [
    { Icon: Store, ...t.workshop.modes.shop },
    { Icon: Truck, ...t.workshop.modes.pickup },
    { Icon: Bike, ...t.workshop.modes.visit },
  ]

  return (
    <section className="grid-paper-dark relative overflow-hidden bg-ink text-bone">
      <ChainsawIcon
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 size-[32rem] text-signal/[0.07]"
        strokeWidth={0.6}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <SectionHead index="03" label={t.workshop.label} title={t.workshop.title} tone="light" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="max-w-lg text-lg leading-relaxed text-bone/75">{fmt(t.workshop.body, { city })}</p>
            <p className="spec-label mt-10 text-signal">{t.workshop.machinesLabel}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {t.workshop.machines.map((m) => (
                <li key={m} className="rounded-sm border border-bone/25 px-3 py-1.5 text-sm">
                  {m}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="signal" size="lg">
                <Link href={localePath(lang, "/repair")}>{t.workshop.cta}</Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <a href={whatsappLink(t.repair.messageIntro)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" /> {t.common.whatsapp}
                </a>
              </Button>
            </div>
          </div>

          <ol className="grid gap-px self-start overflow-hidden rounded-md border-2 border-bone/20 bg-bone/20">
            {modes.map(({ Icon, title, desc }, i) => (
              <li key={title} className="flex gap-5 bg-ink p-6">
                <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <p className="font-display text-4xl uppercase leading-none pt-1">{title}</p>
                  <p className="mt-2 text-bone/70">{fmt(desc, { city })}</p>
                </div>
                <Icon className="size-8 shrink-0 text-signal" strokeWidth={1.5} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
