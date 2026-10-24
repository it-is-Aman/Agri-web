"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Languages } from "lucide-react"
import { localePath, type Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

// Swaps the /hi prefix on the current path. English has no prefix.
export function LanguageSwitch({
  lang,
  label,
  ariaLabel,
  className,
}: {
  lang: Locale
  label: string
  ariaLabel: string
  className?: string
}) {
  const pathname = usePathname()
  const basePath = lang === "hi" ? pathname.replace(/^\/hi(?=\/|$)/, "") || "/" : pathname
  const target: Locale = lang === "hi" ? "en" : "hi"

  return (
    <Link
      href={localePath(target, basePath)}
      hrefLang={target}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-11 items-center gap-1.5 rounded-md border-2 border-ink/15 px-3 text-sm font-semibold transition-colors hover:border-ink",
        className,
      )}
    >
      <Languages className="size-4" />
      {label}
    </Link>
  )
}
