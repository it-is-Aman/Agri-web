import Link from "next/link"
import { cn } from "@/lib/utils"

// Machine model number, e.g. "FS 120". Links to parts that fit when href is given.
export function ModelTag({ model, href, className }: { model: string; href?: string; className?: string }) {
  const classes = cn(
    "inline-flex h-7 items-center rounded-sm border border-ink/25 bg-bone px-2 font-mono text-xs font-medium text-ink",
    href && "transition-colors hover:border-ink hover:bg-signal",
    className,
  )
  return href ? (
    <Link href={href} className={classes}>
      {model}
    </Link>
  ) : (
    <span className={classes}>{model}</span>
  )
}
