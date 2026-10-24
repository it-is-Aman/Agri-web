"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { phoneDisplay, telLink } from "@/config/site"
import type { NavItem } from "./HeaderNav"

export function MobileNav({ items, labels }: { items: NavItem[]; labels: { menu: string; callUs: string } }) {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={labels.menu}
        className="inline-flex size-11 items-center justify-center rounded-md bg-ink text-bone lg:hidden"
      >
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="grid-paper-dark w-full max-w-sm gap-0 border-0 bg-ink p-0 text-bone">
        <SheetTitle className="spec-label px-6 pt-6 text-bone/50">{labels.menu}</SheetTitle>
        <nav className="mt-6 flex flex-col">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-bone/10 px-6 py-4 font-display text-4xl uppercase leading-none hover:text-signal"
            >
              <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        {phoneDisplay() && (
          <a href={telLink()} className="mt-auto flex items-center gap-3 bg-signal px-6 py-5 text-ink">
            <Phone className="size-5" />
            <span className="font-display text-2xl uppercase leading-none pt-1">{labels.callUs}</span>
            <span className="ml-auto font-mono text-sm">{phoneDisplay()}</span>
          </a>
        )}
      </SheetContent>
    </Sheet>
  )
}
