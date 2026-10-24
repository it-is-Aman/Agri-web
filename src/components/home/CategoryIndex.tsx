import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { fmt, localePath, type Dictionary, type Locale } from "@/i18n"
import type { CategorySlug, Product } from "@/lib/catalog/types"
import { SectionHead } from "@/components/shared/SectionHead"
import { BrushCutterIcon, ChainsawIcon, SparkPlugIcon, TrimmerHeadIcon } from "@/components/illustrations/PartIcons"

// Table-of-contents style index — the manual's chapter list.
export function CategoryIndex({ lang, t, products }: { lang: Locale; t: Dictionary; products: Product[] }) {
  const count = (slug: CategorySlug) => products.filter((p) => p.category === slug).length

  const rows = [
    { key: "spare-parts" as const, href: localePath(lang, "/shop?category=spare-parts"), Icon: SparkPlugIcon, n: count("spare-parts") },
    { key: "accessories" as const, href: localePath(lang, "/shop?category=accessories"), Icon: TrimmerHeadIcon, n: count("accessories") },
    { key: "machines" as const, href: localePath(lang, "/shop?category=machines"), Icon: BrushCutterIcon, n: count("machines") },
    { key: "repair" as const, href: localePath(lang, "/repair"), Icon: ChainsawIcon, n: 0 },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
      <SectionHead index="01" label={t.categories.label} title={t.categories.title} />
      <ol className="mt-12 border-b-2 border-ink">
        {rows.map(({ key, href, Icon, n }, i) => (
          <li key={key}>
            <Link
              href={href}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 border-t-2 border-ink py-6 transition-colors hover:bg-signal sm:gap-x-8 sm:px-4 md:grid-cols-[4rem_1.1fr_1.4fr_auto]"
            >
              <span className="self-start pt-2 font-mono text-sm font-medium text-steel group-hover:text-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex items-baseline gap-3">
                <span className="font-display text-5xl uppercase leading-none pt-1 sm:text-6xl">{t.categories[key].title}</span>
                {n > 0 && <span className="spec-label text-steel group-hover:text-ink">{fmt(t.shop.results, { n })}</span>}
              </span>
              <span className="col-span-2 col-start-2 max-w-md text-graphite md:col-span-1 md:col-start-auto">
                {t.categories[key].desc}
              </span>
              <span className="row-start-1 col-start-3 flex items-center gap-4 md:col-start-auto md:row-start-auto">
                <Icon className="hidden size-14 text-ink/70 transition-transform group-hover:-rotate-12 sm:block" />
                <span className="grid size-12 place-items-center rounded-full border-2 border-ink transition-colors group-hover:bg-ink group-hover:text-signal">
                  <ArrowUpRight className="size-5" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
