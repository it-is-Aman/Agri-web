"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export type NavItem = { href: string; label: string }

const isActive = (pathname: string, href: string) =>
  href === "/" || href === "/hi" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

export function HeaderNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname()
  return (
    <nav aria-label="Main" className="hidden items-stretch lg:flex">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={isActive(pathname, item.href) ? "page" : undefined}
          className={cn(
            "relative flex items-center px-3.5 pt-1.5 font-display text-[1.35rem] uppercase tracking-wide text-ink/75 transition-colors hover:text-ink",
            "after:absolute after:inset-x-3.5 after:bottom-0 after:h-1 after:origin-left after:scale-x-0 after:bg-signal after:transition-transform hover:after:scale-x-100",
            "aria-[current=page]:text-ink aria-[current=page]:after:scale-x-100",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
