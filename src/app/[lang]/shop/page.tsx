import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PackageSearch, X } from "lucide-react"
import { siteConfig, whatsappLink } from "@/config/site"
import { fmt, getDictionary, isLocale, localePath } from "@/i18n"
import { CATEGORIES, filterProducts, getProducts, isCategory, type ShopQuery } from "@/lib/catalog"
import { alternates } from "@/lib/seo"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PageIntro } from "@/components/shared/PageIntro"
import { PartCard } from "@/components/catalog/PartCard"
import { ModelSearch } from "@/components/catalog/ModelSearch"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"

type Params = { lang: string }
type Search = Record<string, string | string[] | undefined>

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  return {
    title: t.shop.metaTitle,
    description: fmt(t.shop.metaDescription, { city: siteConfig.address.city }),
    alternates: alternates(lang, "/shop"),
  }
}

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)?.trim() || undefined

export default async function ShopPage({ params, searchParams }: { params: Promise<Params>; searchParams: Promise<Search> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)
  const sp = await searchParams

  const category = first(sp.category)
  const sort = first(sp.sort)
  const query: ShopQuery = {
    q: first(sp.q),
    model: first(sp.model),
    category: isCategory(category) ? category : undefined,
    sub: first(sp.sub),
    stock: first(sp.stock) === "1",
    sort: sort === "price-asc" || sort === "price-desc" ? sort : undefined,
  }

  const all = await getProducts()
  const results = filterProducts(all, query)
  const subcategories = [
    ...new Set(all.filter((p) => !query.category || p.category === query.category).map((p) => p.subcategory).filter(Boolean)),
  ].sort()

  // Build a /shop URL from the current filters with some changed. undefined removes a key.
  const shopHref = (changes: Partial<Record<keyof ShopQuery, string | undefined>>) => {
    const current: Record<string, string | undefined> = {
      q: query.q,
      model: query.model,
      category: query.category,
      sub: query.sub,
      stock: query.stock ? "1" : undefined,
      sort: query.sort,
    }
    const next = new URLSearchParams()
    for (const [k, v] of Object.entries({ ...current, ...changes })) if (v) next.set(k, v)
    const qs = next.toString()
    return localePath(lang, `/shop${qs ? `?${qs}` : ""}`)
  }

  const hasFilters = Boolean(query.q || query.model || query.category || query.sub || query.stock || query.sort)
  const searchTerm = query.model ?? query.q
  const pill = "inline-flex h-10 items-center rounded-md border-2 px-3.5 font-display text-xl uppercase leading-none pt-1 transition-colors"

  return (
    <>
      <PageIntro label={t.shop.label} title={t.shop.title} intro={t.shop.intro}>
        <div className="mt-8 max-w-2xl">
          <ModelSearch lang={lang} t={t} defaultValue={query.q} />
        </div>
      </PageIntro>

      {/* Filter rail */}
      <div className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-7xl space-y-4 px-4 py-5">
          <nav aria-label={t.shop.label} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            <Link
              href={shopHref({ category: undefined, sub: undefined })}
              className={cn(pill, !query.category ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink")}
            >
              {t.shop.all}
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={shopHref({ category: c.slug, sub: undefined })}
                className={cn(
                  pill,
                  "shrink-0",
                  query.category === c.slug ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink",
                )}
              >
                {t.categories[c.slug].title}
              </Link>
            ))}
          </nav>

          {subcategories.length > 1 && (
            <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1">
              {subcategories.map((s) => (
                <Link
                  key={s}
                  href={shopHref({ sub: query.sub === s ? undefined : s })}
                  className={cn(
                    "inline-flex h-8 shrink-0 items-center rounded-sm border px-2.5 text-sm transition-colors",
                    query.sub === s ? "border-ink bg-signal font-semibold" : "border-ink/20 hover:border-ink",
                  )}
                >
                  {s}
                </Link>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link
              href={shopHref({ stock: query.stock ? undefined : "1" })}
              className="inline-flex items-center gap-2 font-medium"
              aria-pressed={query.stock}
            >
              <span
                className={cn(
                  "relative h-6 w-10 rounded-full border-2 border-ink transition-colors",
                  query.stock ? "bg-go" : "bg-bone",
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 size-4 rounded-full border-2 border-ink bg-paper transition-all",
                    query.stock ? "left-[1.1rem]" : "left-0.5",
                  )}
                />
              </span>
              {t.shop.inStockOnly}
            </Link>

            <div className="flex flex-wrap items-center gap-1">
              <span className="spec-label mr-1 text-steel">{t.shop.sort}</span>
              {(
                [
                  [undefined, t.shop.sortRelevance],
                  ["price-asc", t.shop.sortPriceLow],
                  ["price-desc", t.shop.sortPriceHigh],
                ] as const
              ).map(([value, label]) => (
                <Link
                  key={label}
                  href={shopHref({ sort: value })}
                  className={cn(
                    "rounded-sm px-2 py-1",
                    query.sort === value ? "bg-ink text-bone" : "hover:bg-muted",
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>

            {hasFilters && (
              <Link href={localePath(lang, "/shop")} className="ml-auto inline-flex items-center gap-1 text-steel hover:text-ink">
                <X className="size-4" /> {t.shop.clear}
              </Link>
            )}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:py-14">
        <p className="spec-label mb-6 text-steel" aria-live="polite">
          {searchTerm
            ? fmt(t.shop.resultsFor, { n: results.length, q: searchTerm })
            : fmt(t.shop.results, { n: results.length })}
        </p>

        {results.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((p) => (
              <PartCard key={p.id} product={p} lang={lang} t={t} />
            ))}
          </div>
        ) : (
          <div className="grid-paper flex flex-col items-start gap-4 rounded-md border-2 border-dashed border-ink p-8 sm:p-12">
            <PackageSearch className="size-12" strokeWidth={1.5} />
            <h2 className="text-5xl">{t.shop.emptyTitle}</h2>
            <p className="max-w-lg text-lg text-graphite">{t.shop.emptyBody}</p>
            <Button asChild variant="signal" size="lg">
              <a
                href={whatsappLink(fmt(t.shop.askPartMessage, { q: searchTerm ?? "" }))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-5" /> {t.shop.emptyCta}
              </a>
            </Button>
          </div>
        )}

        <p className="mt-12 max-w-3xl text-sm text-steel">{siteConfig.brandDisclaimer}</p>
      </section>
    </>
  )
}
