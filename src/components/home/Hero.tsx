import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig, yearsInBusiness } from "@/config/site"
import { fmt, localePath, type Dictionary, type Locale } from "@/i18n"
import { ModelSearch } from "@/components/catalog/ModelSearch"

// Rotating badge text around the years stamp.
function YearsStamp({ years, label }: { years: number; label: string }) {
  const ring = `${label} • ${label} • `
  return (
    <div className="absolute -right-2 -top-6 z-10 grid size-32 place-items-center rounded-full border-2 border-ink bg-signal text-ink sm:size-36">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-[spin_24s_linear_infinite] motion-reduce:animate-none" aria-hidden="true">
        <defs>
          <path id="stamp-ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink font-mono text-[8.5px] font-semibold uppercase tracking-[0.18em]">
          <textPath href="#stamp-ring">{ring}</textPath>
        </text>
      </svg>
      <p className="text-center leading-none">
        <span className="block font-display text-5xl font-semibold">{years}+</span>
      </p>
    </div>
  )
}

export function Hero({ lang, t, popularModels }: { lang: Locale; t: Dictionary; popularModels: string[] }) {
  const { city } = siteConfig.address
  const year = siteConfig.yearEstablished

  return (
    <section className="grid-paper relative overflow-hidden border-b-2 border-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 pt-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:pb-20 lg:pt-16">
        <div className="flex flex-col">
          <p className="spec-label flex items-center gap-2 text-ink">
            <span className="inline-block h-3 w-6 bg-signal" />
            {fmt(t.hero.eyebrow, { city, year })}
          </p>

          <h1 className="mt-6 text-[3.6rem] leading-[0.9] sm:text-7xl lg:text-[6.4rem]">
            <span className="block">{t.hero.titleA}</span>
            <span className="block text-steel">{t.hero.titleB}</span>
            {/* inline-block keeps the yellow slab to its own line instead of covering the line above */}
            <span className="my-[0.08em] inline-block bg-signal px-[0.12em] pt-[0.1em] leading-[0.82]">{t.hero.titleC}</span>
            <span className="block">{t.hero.titleD}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-graphite">{fmt(t.hero.body, { city })}</p>

          <div className="mt-8 max-w-xl">
            <ModelSearch lang={lang} t={t} popularModels={popularModels} />
          </div>

          <Link
            href={localePath(lang, "/repair")}
            className="group mt-8 inline-flex items-center gap-2 self-start font-display text-2xl uppercase leading-none"
          >
            <span className="border-b-4 border-signal pt-1 transition-colors group-hover:border-ink">{t.hero.ctaRepair}</span>
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Photo plate with registration marks and a spec plate */}
        <div className="relative mx-auto w-full max-w-md self-center lg:max-w-none">
          <YearsStamp years={yearsInBusiness()} label={fmt(t.common.since, { year })} />
          <div className="crop-marks p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border-2 border-ink bg-ink shadow-[10px_10px_0_var(--ink)]">
              <Image
                src="/img/farmer-using-brush-cutter-in-green-agricultural-fi.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover grayscale-[35%] contrast-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />
              <dl className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-px overflow-hidden rounded-md border-2 border-ink bg-ink font-mono text-xs">
                <div className="col-span-2 bg-signal px-3 py-2">
                  <dt className="sr-only">{t.hero.plate}</dt>
                  <dd className="font-display text-2xl uppercase leading-none pt-1">{siteConfig.name}</dd>
                </div>
                <div className="bg-paper px-3 py-2">
                  <dt className="text-steel">{t.facts.location}</dt>
                  <dd className="font-bold">{city}</dd>
                </div>
                <div className="bg-paper px-3 py-2">
                  <dt className="text-steel">{t.facts.established}</dt>
                  <dd className="font-bold">{year}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
