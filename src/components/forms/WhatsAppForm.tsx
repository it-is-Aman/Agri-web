"use client"

import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { whatsappLink } from "@/config/site"
import { buildFormMessage } from "@/lib/enquiry/message"
import { FieldChoice, FieldInput, FieldTextarea } from "./Field"

export type FormField =
  | { kind: "text"; name: string; label: string; placeholder?: string; required?: boolean; wide?: boolean; inputMode?: "numeric" | "text"; autoComplete?: string }
  | { kind: "textarea"; name: string; label: string; placeholder?: string; required?: boolean }
  | { kind: "choice"; name: string; label: string; options: { value: string; label: string }[]; defaultValue?: string }

// No backend: turns the filled form into a WhatsApp message and opens the chat.
export function WhatsAppForm({ fields, intro, submit }: { fields: FormField[]; intro: string; submit: string }) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const message = buildFormMessage(
      intro,
      fields.map((f) => {
        const raw = String(data.get(f.name) ?? "")
        const value = f.kind === "choice" ? (f.options.find((o) => o.value === raw)?.label ?? raw) : raw
        return { label: f.label, value }
      }),
    )
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => {
        if (f.kind === "textarea")
          return (
            <FieldTextarea key={f.name} name={f.name} label={f.label} placeholder={f.placeholder} required={f.required} className="sm:col-span-2" />
          )
        if (f.kind === "choice")
          return (
            <FieldChoice key={f.name} name={f.name} label={f.label} options={f.options} defaultValue={f.defaultValue} className="sm:col-span-2" />
          )
        return (
          <FieldInput
            key={f.name}
            name={f.name}
            label={f.label}
            placeholder={f.placeholder}
            required={f.required}
            inputMode={f.inputMode}
            autoComplete={f.autoComplete}
            className={f.wide ? "sm:col-span-2" : undefined}
          />
        )
      })}
      <Button type="submit" variant="signal" size="lg" className="sm:col-span-2">
        <WhatsAppIcon className="size-6" /> {submit}
      </Button>
    </form>
  )
}
