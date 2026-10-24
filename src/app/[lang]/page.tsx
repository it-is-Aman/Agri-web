import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import { getDictionary, isLocale, localePath } from "@/i18n"
import { getFeaturedProducts, getPopularModels, getProducts } from "@/lib/catalog"
import { Button } from "@/components/ui/button"
import { SectionHead } from "@/components/shared/SectionHead"
import { ShopFacts } from "@/components/shared/ShopFacts"
import { PartCard } from "@/components/catalog/PartCard"
import { Hero } from "@/components/home/Hero"
import { ModelTicker } from "@/components/home/ModelTicker"
import { CategoryIndex } from "@/components/home/CategoryIndex"
import { WorkshopBand } from "@/components/home/WorkshopBand"
import { ProcessSteps } from "@/components/home/ProcessSteps"
import { DealerBand } from "@/components/home/DealerBand"

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  const [products, featured, popularModels, tickerModels] = await Promise.all([
    getProducts(),
    getFeaturedProducts(8),
    getPopularModels(6),
    getPopularModels(14),
  ])
  const featuredInStock = featured.filter((p) => p.inStock).slice(0, 4)

  return (
    <>
      <Hero lang={lang} t={t} popularModels={popularModels} />
      <ModelTicker label={t.ticker} items={tickerModels.length >= 4 ? tickerModels : t.workshop.machines} />
      <CategoryIndex lang={lang} t={t} products={products} />

      {featuredInStock.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 lg:pb-28">
          <SectionHead
            index="02"
            label={t.featured.label}
            title={t.featured.title}
            action={
              <Button asChild variant="outline">
                <Link href={localePath(lang, "/shop")}>
                  {t.featured.cta} <ArrowRight />
                </Link>
              </Button>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredInStock.map((p) => (
              <PartCard key={p.id} product={p} lang={lang} t={t} />
            ))}
          </div>
        </section>
      )}

      <WorkshopBand lang={lang} t={t} />
      <ProcessSteps t={t} />
      <DealerBand lang={lang} t={t} />
      <ShopFacts t={t} />
    </>
  )
}
