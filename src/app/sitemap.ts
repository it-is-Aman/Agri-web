import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { localePath, locales } from "@/i18n/config"
import { getProducts } from "@/lib/catalog"

const pages = ["/", "/shop", "/repair", "/dealers", "/about", "/contact"]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts()
  const paths = [...pages, ...products.map((p) => `/shop/${p.id}`)]

  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${siteConfig.url}${localePath(lang, path)}`,
      lastModified: new Date(),
      changeFrequency: path.startsWith("/shop") ? ("daily" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/shop" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}${localePath(l, path)}`])),
      },
    })),
  )
}
