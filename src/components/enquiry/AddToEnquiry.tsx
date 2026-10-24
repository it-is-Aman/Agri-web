"use client"

import { useState } from "react"
import { Check, Minus, Plus } from "lucide-react"
import { useEnquiry } from "@/lib/enquiry/store"
import type { EnquiryItem } from "@/lib/enquiry/message"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Labels = { add: string; added: string; qty?: string }

// Compact (card) or with quantity stepper (product page).
export function AddToEnquiry({
  item,
  labels,
  withQty = false,
  className,
}: {
  item: Omit<EnquiryItem, "qty">
  labels: Labels
  withQty?: boolean
  className?: string
}) {
  const { add, setOpen } = useEnquiry()
  const [qty, setQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)

  const onAdd = () => {
    add(item, qty)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1600)
    if (withQty) setOpen(true)
  }

  return (
    <div className={cn("flex gap-2", className)}>
      {withQty && (
        <div className="flex h-14 items-center rounded-md border-2 border-ink" role="group" aria-label={labels.qty}>
          <button
            type="button"
            className="grid size-12 place-items-center"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="−"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-10 text-center font-mono text-lg font-bold tabular" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            className="grid size-12 place-items-center"
            onClick={() => setQty((q) => Math.min(999, q + 1))}
            aria-label="+"
          >
            <Plus className="size-4" />
          </button>
        </div>
      )}
      <Button
        type="button"
        variant={withQty ? "ink" : "outline"}
        size={withQty ? "lg" : "default"}
        onClick={onAdd}
        className="flex-1"
      >
        {justAdded ? <Check /> : <Plus />}
        {justAdded ? labels.added : labels.add}
      </Button>
    </div>
  )
}
