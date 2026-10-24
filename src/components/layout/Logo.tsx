import Link from "next/link"
import { siteConfig } from "@/config/site"
import { TrimmerHeadIcon } from "@/components/illustrations/PartIcons"
import { cn } from "@/lib/utils"

// Placeholder mark until the real logo arrives — swap the yellow block for <Image src="/logo.svg" />.
export function Logo({ href, tone = "dark", className }: { href: string; tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href={href} className={cn("group inline-flex items-center gap-3", className)} aria-label={siteConfig.name}>
      <span className="grid size-11 place-items-center rounded-md bg-signal text-ink transition-transform group-hover:-rotate-6">
        <TrimmerHeadIcon className="size-8" strokeWidth={2.25} />
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-[1.9rem] font-semibold uppercase leading-[0.8] pt-1",
            tone === "dark" ? "text-ink" : "text-bone",
          )}
        >
          {siteConfig.name}
        </span>
        <span className={cn("spec-label mt-1 text-[0.65rem]", tone === "dark" ? "text-steel" : "text-bone/60")}>
          {siteConfig.address.city} · Est. {siteConfig.yearEstablished}
        </span>
      </span>
    </Link>
  )
}
