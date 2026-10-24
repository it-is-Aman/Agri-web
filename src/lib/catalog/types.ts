export const CATEGORIES = [
  { slug: "spare-parts", name: "Spare Parts", nameHindi: "स्पेयर पार्ट्स" },
  { slug: "accessories", name: "Accessories", nameHindi: "एक्सेसरीज़" },
  { slug: "machines", name: "Machines", nameHindi: "मशीनें" },
] as const

export type CategorySlug = (typeof CATEGORIES)[number]["slug"]

export type Product = {
  id: string // URL slug, e.g. "trimmer-head-universal"
  name: string
  nameHindi: string
  category: CategorySlug
  subcategory: string // e.g. "Trimmer Head", "Brush Cutter"
  price: number | null // rupees; null = "Ask for price"
  mrp: number | null
  inStock: boolean
  compatibleWith: string[] // model numbers, e.g. ["FS 120", "FS 250"]
  description: string
  descriptionHindi: string
  image: string // path under /public or full URL
  featured: boolean
}
