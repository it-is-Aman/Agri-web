import "server-only"
import { cache } from "react"
import { rowsToProducts, parseCsv } from "./sheet"
import { sampleProducts } from "./sample"
import type { CategorySlug, Product } from "./types"

export * from "./types"
export * from "./format"
export * from "./query"

const revalidate = Number(process.env.CATALOG_REVALIDATE_SECONDS) || 300

// The only place the site reads catalogue data from. Swap this function's body
// (e.g. to a database) later without touching any page.
export const getProducts = cache(async (): Promise<Product[]> => {
  const url = process.env.PRODUCTS_SHEET_CSV_URL
  if (!url) return sampleProducts

  try {
    const res = await fetch(url, { next: { revalidate, tags: ["catalog"] } })
    if (!res.ok) throw new Error(`Sheet responded ${res.status}`)
    const products = rowsToProducts(parseCsv(await res.text()))
    if (products.length === 0) throw new Error("Sheet has no product rows")
    return products
  } catch (error) {
    // Keep the site up if the sheet is unreachable or malformed.
    console.error("[catalog] Falling back to sample data:", error)
    return sampleProducts
  }
})

export async function getProduct(id: string) {
  return (await getProducts()).find((p) => p.id === id)
}

export async function getProductsByCategory(category: CategorySlug) {
  return (await getProducts()).filter((p) => p.category === category)
}

export async function getFeaturedProducts(limit = 6) {
  return (await getProducts()).filter((p) => p.featured).slice(0, limit)
}

// Distinct machine models across the catalogue, most-referenced first (for model search suggestions).
export async function getPopularModels(limit = 8) {
  const counts = new Map<string, number>()
  for (const p of await getProducts()) for (const m of p.compatibleWith) counts.set(m, (counts.get(m) ?? 0) + 1)
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit).map(([model]) => model)
}
