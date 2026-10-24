import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"
import { siteConfig } from "@/config/site"
import { fmt, getDictionary, isLocale } from "@/i18n"
import { alternates } from "@/lib/seo"
import { PageIntro } from "@/components/shared/PageIntro"
import { ShopFacts } from "@/components/shared/ShopFacts"
import { WhatsAppForm } from "@/components/forms/WhatsAppForm"
import { WorkshopBand } from "@/components/home/WorkshopBand"

type Params = { lang: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  return {
    title: t.repair.metaTitle,
    description: fmt(t.repair.metaDescription, { city: siteConfig.address.city }),
    alternates: alternates(lang, "/repair"),
  }
}

export default async function RepairPage({ params }: { params: Promise<Params> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)
  const f = t.repair.fields

  return (
    <>
      <PageIntro label={t.repair.label} title={t.repair.title} intro={t.repair.intro} />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1fr_1.2fr] lg:py-24">
        <div>
          <p className="spec-label text-steel">— {t.repair.jobsLabel}</p>
          <ul className="mt-4 border-t-2 border-ink">
            {t.repair.jobs.map((job, i) => (
              <li key={job} className="flex items-center gap-4 border-b border-dashed border-ink/30 py-3.5">
                <span className="font-mono text-xs text-steel">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-lg font-medium">{job}</span>
                <Check className="size-5 text-go" />
              </li>
            ))}
          </ul>
          <p className="mt-6 text-graphite">{t.repair.other}</p>
        </div>

        <div className="rounded-md border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_var(--ink)] sm:p-8">
          <h2 className="text-5xl">{t.repair.formTitle}</h2>
          <p className="mb-6 mt-2 text-steel">{t.repair.formIntro}</p>
          <WhatsAppForm
            intro={t.repair.messageIntro}
            submit={t.repair.submit}
            fields={[
              { kind: "text", name: "machine", label: f.machine, placeholder: f.machinePlaceholder, required: true },
              { kind: "text", name: "model", label: f.model, placeholder: f.modelPlaceholder },
              { kind: "textarea", name: "problem", label: f.problem, placeholder: f.problemPlaceholder, required: true },
              {
                kind: "choice",
                name: "mode",
                label: f.mode,
                defaultValue: "shop",
                options: [
                  { value: "shop", label: t.repair.modeOptions.shop },
                  { value: "pickup", label: t.repair.modeOptions.pickup },
                  { value: "visit", label: t.repair.modeOptions.visit },
                ],
              },
              { kind: "text", name: "name", label: f.name, autoComplete: "name" },
              { kind: "text", name: "pincode", label: f.pincode, inputMode: "numeric", autoComplete: "postal-code" },
            ]}
          />
        </div>
      </section>

      <WorkshopBand lang={lang} t={t} />
      <ShopFacts t={t} index="04" />
    </>
  )
}
