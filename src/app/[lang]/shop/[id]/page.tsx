import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Info, Truck } from "lucide-react"
import { siteConfig, whatsappLink } from "@/config/site"
import { fmt, getDictionary, isLocale, localePath } from "@/i18n"
import { getProduct, getProducts, productDescription, productName, relatedProducts } from "@/lib/catalog"
import { alternates } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Price } from "@/components/catalog/Price"
import { StockLabel } from "@/components/catalog/StockLabel"
import { ModelTag } from "@/components/catalog/ModelTag"
import { PartCard } from "@/components/catalog/PartCard"
import { SectionHead } from "@/components/shared/SectionHead"
import { AddToEnquiry } from "@/components/enquiry/AddToEnquiry"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"

type Params = { lang: string; id: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang, id } = await params
  const product = await getProduct(id)
  if (!isLocale(lang) || !product) return {}
  const name = productName(product, lang)
  return {
    title: name,
    description: productDescription(product, lang) || name,
    alternates: alternates(lang, `/shop/${id}`),
    openGraph: { images: [product.image] },
  }
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { lang, id } = await params
  if (!isLocale(lang)) notFound()
  const product = await getProduct(id)
  if (!product) notFound()

  const t = getDictionary(lang)
  const name = productName(product, lang)
  const description = productDescription(product, lang)
  const shop = localePath(lang, "/shop")
  const related = relatedProducts(await getProducts(), product)

  const specs = [
    { k: t.common.partId, v: product.id, mono: true },
    { k: t.product.category, v: t.categories[product.category].title },
    product.subcategory && { k: t.product.type, v: product.subcategory },
  ].filter(Boolean) as { k: string; v: string; mono?: boolean }[]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.id,
    description: product.description || undefined,
    image: new URL(product.image, siteConfig.url).toString(),
    category: product.subcategory || product.category,
    ...(product.price !== null && {
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: product.price,
        availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        seller: { "@type": "Organization", name: siteConfig.name },
      },
    }),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="border-b-2 border-ink bg-paper">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm">
          <Link href={shop} className="inline-flex items-center gap-1.5 font-medium hover:underline">
            <ArrowLeft className="size-4" /> {t.product.back}
          </Link>
          <span className="text-steel">/</span>
          <Link href={`${shop}?category=${product.category}`} className="text-steel hover:text-ink">
            {t.categories[product.category].title}
          </Link>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-16">
        {/* Photo on grid paper with registration marks */}
        <div className="crop-marks self-start p-2">
          <div className="grid-paper relative aspect-square overflow-hidden rounded-md border-2 border-ink bg-bone">
            <Image
              src={product.image}
              alt={name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover mix-blend-multiply"
            />
            <span className="spec-label absolute left-3 top-3 rounded-sm bg-ink px-2 py-1 text-bone">{product.id}</span>
          </div>
        </div>

        <div>
          <StockLabel inStock={product.inStock} labels={t.common} />
          <h1 className="mt-3 text-5xl normal-case sm:text-6xl">{name}</h1>
          {lang === "en" && product.nameHindi && <p className="mt-2 text-lg text-steel">{product.nameHindi}</p>}

          <Price price={product.price} mrp={product.mrp} labels={t.common} size="lg" className="mt-6" />

          {description && <p className="mt-6 max-w-prose text-lg leading-relaxed text-graphite">{description}</p>}

          <div className="mt-8 space-y-3">
            <AddToEnquiry
              item={{ id: product.id, name, price: product.price }}
              labels={{ add: t.common.addToEnquiry, added: t.common.added, qty: t.product.qty }}
              withQty
            />
            <Button asChild variant="signal" size="lg" className="w-full">
              <a
                href={whatsappLink(fmt(t.product.whatsappMessage, { name: product.name, id: product.id }))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-6" /> {t.product.whatsappNow}
              </a>
            </Button>
          </div>

          <dl className="mt-10 rounded-md border-2 border-ink bg-paper">
            {specs.map((row, i) => (
              <div key={row.k} className={`grid grid-cols-[9rem_1fr] gap-4 px-5 py-3.5 ${i > 0 ? "border-t border-dashed border-ink/30" : ""}`}>
                <dt className="spec-label pt-0.5 text-steel">{row.k}</dt>
                <dd className={row.mono ? "font-mono font-semibold" : "font-semibold"}>{row.v}</dd>
              </div>
            ))}
            {product.compatibleWith.length > 0 && (
              <div className="grid grid-cols-[9rem_1fr] gap-4 border-t border-dashed border-ink/30 px-5 py-3.5">
                <dt className="spec-label pt-1.5 text-steel">{t.product.fits}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {product.compatibleWith.map((m) => (
                    <ModelTag key={m} model={m} href={`${shop}?model=${encodeURIComponent(m)}`} />
                  ))}
                </dd>
              </div>
            )}
          </dl>

          <div className="mt-6 flex gap-3 rounded-md bg-ink p-5 text-bone">
            <Truck className="mt-0.5 size-5 shrink-0 text-signal" />
            <div>
              <p className="spec-label text-signal">{t.product.deliveryTitle}</p>
              <p className="mt-1 text-bone/80">{fmt(t.product.delivery, { city: siteConfig.address.city })}</p>
            </div>
          </div>

          {product.compatibleWith.length > 0 && (
            <div className="mt-4 flex gap-3 text-sm text-steel">
              <Info className="mt-0.5 size-4 shrink-0" />
              <p>
                <span className="font-semibold text-ink">{t.product.disclaimerTitle}: </span>
                {siteConfig.brandDisclaimer}
              </p>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t-2 border-ink bg-paper">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
            <SectionHead label={t.product.related} title={t.product.related} />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <PartCard key={p.id} product={p} lang={lang} t={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
