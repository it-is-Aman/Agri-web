import { discountPercent, formatAmount } from "@/lib/catalog/format"
import { fmt } from "@/i18n/config"
import { cn } from "@/lib/utils"

// Big Teko numerals with a small mono ₹ — reads like a price stencilled on a parts bin.
export function Price({
  price,
  mrp,
  labels,
  size = "md",
  className,
}: {
  price: number | null
  mrp?: number | null
  labels: { askPrice: string; mrp: string; off: string }
  size?: "md" | "lg"
  className?: string
}) {
  if (price === null) {
    return (
      <p className={cn("font-display uppercase leading-none text-steel", size === "lg" ? "text-4xl" : "text-2xl", className)}>
        {labels.askPrice}
      </p>
    )
  }

  const off = discountPercent(price, mrp ?? null)
  return (
    <div className={cn("flex flex-wrap items-end gap-x-3 gap-y-1", className)}>
      <p className="flex items-start leading-none">
        <span className={cn("font-mono font-bold", size === "lg" ? "mt-1.5 text-xl" : "mt-1 text-sm")}>₹</span>
        <span className={cn("font-display font-semibold tabular", size === "lg" ? "text-7xl" : "text-[2.6rem]")}>
          {formatAmount(price)}
        </span>
      </p>
      {mrp && off && (
        <p className={cn("pb-1.5 font-mono text-steel", size === "lg" ? "text-sm" : "text-xs")}>
          {labels.mrp} <s>₹{formatAmount(mrp)}</s>
          <span className="ml-1.5 bg-signal px-1 font-bold text-ink">{fmt(labels.off, { n: off })}</span>
        </p>
      )}
    </div>
  )
}
