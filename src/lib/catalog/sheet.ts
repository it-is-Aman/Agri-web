import { CATEGORIES, type CategorySlug, type Product } from "./types"

// Minimal RFC 4180 CSV parser (handles quoted fields, commas and newlines inside quotes).
export function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ""
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"'
        i++
      } else if (c === '"') {
        inQuotes = false
      } else {
        field += c
      }
    } else if (c === '"' && field === "") {
      // Quotes only open at the start of a field, so 18" inside a value stays literal.
      inQuotes = true
    } else if (c === ",") {
      row.push(field)
      field = ""
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++
      row.push(field)
      rows.push(row)
      row = []
      field = ""
    } else {
      field += c
    }
  }
  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""))
}

const toNumber = (value: string) => {
  const n = Number(value.replace(/[₹,\s]/g, ""))
  return value.trim() && Number.isFinite(n) && n > 0 ? n : null
}

const toBool = (value: string) => ["yes", "y", "true", "1", "हाँ"].includes(value.trim().toLowerCase())

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

const categorySlugs = CATEGORIES.map((c) => c.slug) as string[]

// Column names in the sheet's first row (case-insensitive). See docs/PRICE_SHEET.md
export function rowsToProducts(rows: string[][]): Product[] {
  const [header, ...body] = rows
  if (!header) return []
  const col = Object.fromEntries(header.map((h, i) => [h.trim().toLowerCase(), i]))
  const get = (row: string[], key: string) => (row[col[key]] ?? "").trim()

  return body
    .filter((row) => get(row, "name") && !toBool(get(row, "hidden")))
    .map((row) => {
      const category = slugify(get(row, "category"))
      return {
        id: get(row, "id") || slugify(get(row, "name")),
        name: get(row, "name"),
        nameHindi: get(row, "name_hindi"),
        category: (categorySlugs.includes(category) ? category : "spare-parts") as CategorySlug,
        subcategory: get(row, "subcategory"),
        price: toNumber(get(row, "price")),
        mrp: toNumber(get(row, "mrp")),
        inStock: toBool(get(row, "in_stock")),
        compatibleWith: get(row, "compatible_with")
          .split(/[,;|]/)
          .map((m) => m.trim())
          .filter(Boolean),
        description: get(row, "description"),
        descriptionHindi: get(row, "description_hindi"),
        image: get(row, "image") || "/img/placeholder.jpg",
        featured: toBool(get(row, "featured")),
      }
    })
}
