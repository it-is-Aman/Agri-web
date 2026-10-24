"use client"

import Link from "next/link"
import { useState } from "react"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { whatsappLink } from "@/config/site"
import { fmt } from "@/i18n/config"
import { formatPrice } from "@/lib/catalog/format"
import { buildEnquiryMessage } from "@/lib/enquiry/message"
import { useEnquiry } from "@/lib/enquiry/store"
import { FieldInput } from "@/components/forms/Field"

export type EnquiryDrawerLabels = {
  title: string
  empty: string
  emptyBody: string
  browse: string
  remove: string
  name: string
  pincode: string
  send: string
  clear: string
  note: string
  messageIntro: string
  messageName: string
  messagePincode: string
  itemCount: string
  askPrice: string
}

export function EnquiryDrawer({ labels, shopHref }: { labels: EnquiryDrawerLabels; shopHref: string }) {
  const { items, count, open, setOpen, setQty, remove, clear } = useEnquiry()
  const [name, setName] = useState("")
  const [pincode, setPincode] = useState("")

  const message = buildEnquiryMessage(items, labels, { name, pincode })

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full gap-0 border-l-2 border-ink bg-bone p-0 sm:max-w-md">
        <div className="border-b-2 border-ink bg-signal px-5 pb-3 pt-5">
          <SheetTitle className="font-display text-4xl font-semibold uppercase leading-none">{labels.title}</SheetTitle>
          <SheetDescription className="spec-label mt-1 text-ink/70">
            {fmt(labels.itemCount, { n: count })}
          </SheetDescription>
        </div>

        {items.length === 0 ? (
          <div className="grid-paper flex flex-1 flex-col items-start justify-center gap-3 p-6">
            <p className="font-display text-3xl uppercase leading-none">{labels.empty}</p>
            <p className="text-steel">{labels.emptyBody}</p>
            <Button asChild variant="ink" className="mt-2" onClick={() => setOpen(false)}>
              <Link href={shopHref}>{labels.browse}</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 px-5 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold leading-snug">{item.name}</p>
                    <p className="spec-label mt-0.5 text-steel">{item.id}</p>
                    <p className="mt-1 font-mono text-sm font-bold">
                      {item.price !== null ? formatPrice(item.price) : labels.askPrice}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center rounded-md border-2 border-ink">
                      <button
                        type="button"
                        className="grid size-9 place-items-center"
                        aria-label="−"
                        onClick={() => setQty(item.id, item.qty - 1)}
                      >
                        <Minus className="size-3.5" />
                      </button>
                      <span className="w-8 text-center font-mono font-bold tabular">{item.qty}</span>
                      <button
                        type="button"
                        className="grid size-9 place-items-center"
                        aria-label="+"
                        onClick={() => setQty(item.id, item.qty + 1)}
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(item.id)}
                      className="inline-flex items-center gap-1 text-sm text-steel hover:text-stop"
                    >
                      <Trash2 className="size-3.5" /> {labels.remove}
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-3 border-t-2 border-ink bg-paper p-5">
              <div className="grid grid-cols-[1.4fr_1fr] items-end gap-2">
                <FieldInput label={labels.name} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                <FieldInput
                  label={labels.pincode}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  inputMode="numeric"
                  autoComplete="postal-code"
                />
              </div>
              <Button asChild variant="signal" size="lg" className="w-full">
                <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-6" /> {labels.send}
                </a>
              </Button>
              <p className="text-sm text-steel">{labels.note}</p>
              <button type="button" onClick={clear} className="text-sm text-steel underline hover:text-stop">
                {labels.clear}
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
