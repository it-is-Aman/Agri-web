import { useId, type ComponentProps } from "react"
import { cn } from "@/lib/utils"

const control =
  "w-full rounded-md border-2 border-input bg-paper px-3 text-base text-ink outline-none transition-colors placeholder:text-steel/70 focus:border-ink focus:ring-4 focus:ring-signal/40"

// Spec-label above a heavy-bordered input, like a form in a service manual.
export function FieldInput({ label, className, ...props }: ComponentProps<"input"> & { label: string }) {
  const id = useId()
  return (
    <div className={className}>
      <label htmlFor={id} className="spec-label mb-1.5 block text-steel">
        {label}
      </label>
      <input id={id} className={cn(control, "h-12")} {...props} />
    </div>
  )
}

export function FieldTextarea({ label, className, ...props }: ComponentProps<"textarea"> & { label: string }) {
  const id = useId()
  return (
    <div className={className}>
      <label htmlFor={id} className="spec-label mb-1.5 block text-steel">
        {label}
      </label>
      <textarea id={id} rows={3} className={cn(control, "py-2.5 leading-relaxed")} {...props} />
    </div>
  )
}

export function FieldChoice({
  label,
  name,
  options,
  defaultValue,
  className,
}: {
  label: string
  name: string
  options: { value: string; label: string }[]
  defaultValue?: string
  className?: string
}) {
  return (
    <fieldset className={className}>
      <legend className="spec-label mb-1.5 block text-steel">{label}</legend>
      <div className="grid gap-2 sm:grid-cols-3">
        {options.map((o) => (
          <label
            key={o.value}
            className="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-md border-2 border-input bg-paper px-3 py-2 text-sm font-medium has-[:checked]:border-ink has-[:checked]:bg-signal"
          >
            <input type="radio" name={name} value={o.value} defaultChecked={o.value === defaultValue} className="accent-ink" />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
