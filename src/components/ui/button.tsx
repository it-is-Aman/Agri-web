import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

// Square, heavy, label set in Teko caps — like a machine control panel.
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-display font-medium uppercase tracking-wide leading-none transition-[background-color,border-color,color,transform] active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40",
  {
    variants: {
      variant: {
        // The primary action. One per view where possible.
        signal: "bg-signal text-ink hover:bg-signal-deep",
        ink: "bg-ink text-bone hover:bg-graphite",
        outline: "border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-bone",
        "outline-light": "border-2 border-bone/40 bg-transparent text-bone hover:border-signal hover:text-signal",
        ghost: "text-ink hover:bg-muted",
        link: "h-auto px-0 text-ink underline decoration-signal decoration-2 underline-offset-4 hover:decoration-ink",
      },
      // 44px default keeps every button a comfortable tap target.
      size: {
        default: "h-11 px-5 pt-1 text-xl",
        sm: "h-9 px-3 pt-0.5 text-lg",
        lg: "h-14 px-7 pt-1 text-2xl [&_svg:not([class*='size-'])]:size-6",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "ink",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
