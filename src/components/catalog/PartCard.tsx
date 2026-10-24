import Image from "next/image"
import Link from "next/link"
import { fmt, localePath, type Dictionary, type Locale } from "@/i18n"
import { productName } from "@/lib/catalog/query"
import type { Product } from "@/lib/catalog/types"
import { AddToEnquiry } from "@/components/enquiry/AddToEnquiry"
import { ModelTag } from "./ModelTag"
import { Price } from "./Price"
import { StockLabel } from "./StockLabel"

const MAX_MODELS = 3

// Spec-sheet card: label strip, photo on grid paper, fits-models, stencilled price.
export function PartCard({ product, lang, t }: { product: Product; lang: Locale; t: Dictionary }) {
  const href = localePath(lang, `/shop/${product.id}`)
  const name = productName(product, lang)
  const extra = product.compatibleWith.length - MAX_MODELS

  return (
    <article className="group relative flex flex-col rounded-md border-2 border-ink bg-paper transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--ink)]">
      <div className="flex items-center justify-between gap-2 border-b-2 border-ink px-3 py-2">
        <span className="spec-label truncate text-steel">{product.subcategory || t.categories[product.category].title}</span>
        <StockLabel inStock={product.inStock} labels={t.common} className="shrink-0" />
      </div>

      <Link href={href} className="grid-paper relative block aspect-[4/3] overflow-hidden bg-bone" tabIndex={-1}>
        <Image
          src={product.image}
          alt={name}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 33vw, (min-width: 480px) 50vw, 100vw"
          className="object-cover mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 border-t-2 border-ink p-4">
        <h3 className="font-sans text-lg font-semibold normal-case leading-snug">
          <Link href={href} className="after:absolute after:inset-0 after:content-[''] hover:underline hover:decoration-signal hover:decoration-2 hover:underline-offset-4">
            {name}
          </Link>
        </h3>

        {product.compatibleWith.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="spec-label text-steel">{t.common.fits}</span>
            {product.compatibleWith.slice(0, MAX_MODELS).map((m) => (
              <ModelTag key={m} model={m} />
            ))}
            {extra > 0 && <span className="text-xs text-steel">{fmt(t.common.more, { n: extra })}</span>}
          </div>
        )}

        <Price price={product.price} mrp={product.mrp} labels={t.common} className="mt-auto pt-1" />

        {/* Above the stretched link so it stays clickable */}
        <AddToEnquiry
          item={{ id: product.id, name, price: product.price }}
          labels={{ add: t.common.addToEnquiry, added: t.common.added }}
          className="relative z-10"
        />
      </div>
    </article>
  )
}
