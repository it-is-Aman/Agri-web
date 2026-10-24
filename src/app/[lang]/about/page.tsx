import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { siteConfig } from "@/config/site"
import { fmt, getDictionary, isLocale } from "@/i18n"
import { alternates } from "@/lib/seo"
import { PageIntro } from "@/components/shared/PageIntro"
import { ShopFacts } from "@/components/shared/ShopFacts"

type Params = { lang: string }

const vars = () => ({ name: siteConfig.name, city: siteConfig.address.city, year: siteConfig.yearEstablished })

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  return {
    title: t.about.metaTitle,
    description: fmt(t.about.metaDescription, vars()),
    alternates: alternates(lang, "/about"),
  }
}

export default async function AboutPage({ params }: { params: Promise<Params> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  return (
    <>
      <PageIntro label={t.about.label} title={fmt(t.about.title, vars())} />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1fr_1fr] lg:py-24">
        <div className="space-y-5 text-lg leading-relaxed text-graphite">
          {t.about.body.map((para, i) => (
            <p key={i} className={i === 0 ? "text-2xl leading-snug text-ink" : undefined}>
              {fmt(para, vars())}
            </p>
          ))}
        </div>
        {/* Replace with a real shop photo — see docs/CONTENT.md */}
        <div className="crop-marks self-start p-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border-2 border-ink shadow-[8px_8px_0_var(--ink)]">
            <Image
              src="/img/brush-cutter-close-up-details.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover grayscale-[30%]"
            />
          </div>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-ink text-bone">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="spec-label text-signal">— {t.about.principlesLabel}</p>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-md border-2 border-bone/20 bg-bone/20 md:grid-cols-3">
            {t.about.principles.map((p, i) => (
              <li key={p.title} className="bg-ink p-6">
                <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-display text-4xl uppercase leading-none">{p.title}</p>
                <p className="mt-2 text-bone/70">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ShopFacts t={t} index="01" />
    </>
  )
}
