import { MapPin } from "lucide-react"
import { directionsUrl, fullAddress, siteConfig, yearsInBusiness } from "@/config/site"
import { fmt, type Dictionary } from "@/i18n"
import { SectionHead } from "./SectionHead"

// Spec table of verifiable facts + map. Registration rows appear only when set in env.
export function ShopFacts({ t, index = "05" }: { t: Dictionary; index?: string }) {
  const { registration, yearEstablished, shopHours, mapEmbedUrl } = siteConfig
  const rows = [
    { k: t.facts.established, v: `${yearEstablished} · ${fmt(t.common.years, { n: yearsInBusiness() })}` },
    { k: t.facts.location, v: fullAddress() },
    shopHours && { k: t.facts.hours, v: shopHours },
    { k: t.facts.shipping, v: t.facts.shippingValue },
    { k: t.facts.repair, v: t.facts.repairValue },
    registration.gstin && { k: t.facts.gstin, v: registration.gstin, mono: true },
    registration.udyam && { k: t.facts.udyam, v: registration.udyam, mono: true },
    registration.iec && { k: t.facts.iec, v: registration.iec, mono: true },
  ].filter(Boolean) as { k: string; v: string; mono?: boolean }[]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <SectionHead index={index} label={t.facts.label} title={t.facts.title} />
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <dl className="self-start rounded-md border-2 border-ink bg-paper">
          {rows.map((row, i) => (
            <div
              key={row.k}
              className={`grid grid-cols-[8.5rem_1fr] gap-4 px-5 py-4 sm:grid-cols-[11rem_1fr] ${i > 0 ? "border-t border-dashed border-ink/30" : ""}`}
            >
              <dt className="spec-label pt-0.5 text-steel">{row.k}</dt>
              <dd className={row.mono ? "font-mono font-semibold" : "font-semibold"}>{row.v}</dd>
            </div>
          ))}
        </dl>

        <div className="relative min-h-80 overflow-hidden rounded-md border-2 border-ink bg-ink shadow-[8px_8px_0_var(--signal)]">
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              title={t.facts.visit}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full grayscale-[40%]"
            />
          ) : (
            <div className="grid-paper-dark absolute inset-0 flex flex-col items-start justify-end gap-3 p-6 text-bone">
              <MapPin className="size-10 text-signal" />
              <p className="font-display text-4xl uppercase leading-none">{t.facts.visit}</p>
              <p className="text-bone/75">{fullAddress()}</p>
            </div>
          )}
          <a
            href={directionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-3 top-3 inline-flex h-10 items-center gap-2 rounded-md border-2 border-ink bg-signal px-3 font-display text-lg uppercase leading-none pt-1 text-ink"
          >
            <MapPin className="size-4" /> {t.facts.directions}
          </a>
        </div>
      </div>
    </section>
  )
}
