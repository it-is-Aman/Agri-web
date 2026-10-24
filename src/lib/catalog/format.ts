// Safe to import from client components (index.ts is server-only).
export const formatPrice = (rupees: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(rupees)

// Digits only, Indian grouping: 12500 → "12,500"
export const formatAmount = (rupees: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(rupees)

export const discountPercent = (price: number | null, mrp: number | null) =>
  price && mrp && mrp > price ? Math.round(((mrp - price) / mrp) * 100) : null
