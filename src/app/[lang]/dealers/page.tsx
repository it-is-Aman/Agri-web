import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { siteConfig } from "@/config/site"
import { fmt, getDictionary, isLocale } from "@/i18n"
import { alternates } from "@/lib/seo"
import { PageIntro } from "@/components/shared/PageIntro"
import { WhatsAppForm } from "@/components/forms/WhatsAppForm"
import { ProcessSteps } from "@/components/home/ProcessSteps"
import { BladeIcon, SawChainIcon, SparkPlugIcon, TrimmerHeadIcon } from "@/components/illustrations/PartIcons"

type Params = { lang: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  return {
    title: t.dealers.metaTitle,
    description: fmt(t.dealers.metaDescription, { city: siteConfig.address.city }),
    alternates: alternates(lang, "/dealers"),
  }
}

const offerIcons = [SparkPlugIcon, TrimmerHeadIcon, BladeIcon, SawChainIcon]

export default async function DealersPage({ params }: { params: Promise<Params> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)
  const f = t.dealers.fields

  return (
    <>
      <PageIntro label={t.dealers.label} title={t.dealers.title} intro={t.dealers.intro} />

      <section className="border-b-2 border-ink bg-signal">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <p className="spec-label text-ink/70">— {t.dealers.offerLabel}</p>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-md border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {t.dealers.offer.map((o, i) => {
              const Icon = offerIcons[i % offerIcons.length]
              return (
                <li key={o.title} className="bg-signal p-6">
                  <Icon className="size-12" strokeWidth={1.5} />
                  <p className="mt-4 font-display text-3xl uppercase leading-none">{o.title}</p>
                  <p className="mt-2">{o.desc}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <div className="rounded-md border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_var(--ink)] sm:p-8">
          <h2 className="text-5xl">{t.dealers.formTitle}</h2>
          <p className="mb-6 mt-2 text-steel">{t.dealers.formIntro}</p>
          <WhatsAppForm
            intro={t.dealers.messageIntro}
            submit={t.dealers.submit}
            fields={[
              { kind: "text", name: "shop", label: f.shop, required: true, autoComplete: "organization" },
              { kind: "text", name: "city", label: f.city, required: true },
              { kind: "textarea", name: "items", label: f.items, placeholder: f.itemsPlaceholder, required: true },
              { kind: "text", name: "name", label: f.name, wide: true, autoComplete: "name" },
            ]}
          />
        </div>
      </section>

      <ProcessSteps t={t} />
    </>
  )
}
