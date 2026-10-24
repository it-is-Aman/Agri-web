import { cn } from "@/lib/utils"

export function StockLabel({
  inStock,
  labels,
  className,
}: {
  inStock: boolean
  labels: { inStock: string; outOfStock: string }
  className?: string
}) {
  return (
    <span className={cn("spec-label inline-flex items-center gap-1.5", inStock ? "text-go" : "text-stop", className)}>
      <span
        aria-hidden="true"
        className={cn("size-2 rounded-full", inStock ? "bg-go shadow-[0_0_0_3px_rgb(43_110_46/0.18)]" : "border-2 border-stop")}
      />
      {inStock ? labels.inStock : labels.outOfStock}
    </span>
  )
}
