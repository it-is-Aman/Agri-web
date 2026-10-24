import type { Locale } from "@/i18n/config"
import { CATEGORIES, type CategorySlug, type Product } from "./types"

// "FS-120", "fs120", "FS 120" all compare equal.
export const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9ऀ-ॿ]+/g, "")

export const productName = (p: Product, lang: Locale) => (lang === "hi" && p.nameHindi) || p.name
export const productDescription = (p: Product, lang: Locale) => (lang === "hi" && p.descriptionHindi) || p.description

export const isCategory = (value: string | undefined): value is CategorySlug =>
  CATEGORIES.some((c) => c.slug === value)

export type ShopQuery = {
  q?: string
  model?: string
  category?: CategorySlug
  sub?: string
  stock?: boolean
  sort?: "price-asc" | "price-desc"
}

export function filterProducts(products: Product[], query: ShopQuery) {
  const q = query.q ? normalize(query.q) : ""
  const model = query.model ? normalize(query.model) : ""

  const result = products.filter((p) => {
    if (query.category && p.category !== query.category) return false
    if (query.sub && p.subcategory !== query.sub) return false
    if (query.stock && !p.inStock) return false
    if (model && !p.compatibleWith.some((m) => normalize(m) === model)) return false
    if (q) {
      const haystack = normalize(
        [p.id, p.name, p.nameHindi, p.subcategory, p.description, ...p.compatibleWith].join(" "),
      )
      if (!haystack.includes(q)) return false
    }
    return true
  })

  if (query.sort) {
    // Products without a price sink to the end either way.
    const dir = query.sort === "price-asc" ? 1 : -1
    result.sort((a, b) => {
      if (a.price === null) return 1
      if (b.price === null) return -1
      return (a.price - b.price) * dir
    })
  } else {
    result.sort((a, b) => Number(b.inStock) - Number(a.inStock))
  }
  return result
}

// Same subcategory first, then anything sharing a compatible model.
export function relatedProducts(products: Product[], product: Product, limit = 4) {
  const models = new Set(product.compatibleWith.map(normalize))
  const score = (p: Product) =>
    (p.subcategory === product.subcategory ? 2 : 0) + (p.compatibleWith.some((m) => models.has(normalize(m))) ? 1 : 0)
  return products
    .filter((p) => p.id !== product.id && score(p) > 0)
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit)
}
