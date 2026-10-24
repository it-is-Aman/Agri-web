import { siWhatsapp } from "simple-icons"
import type { SVGProps } from "react"

// Recognisable WhatsApp glyph — customers look for this logo, not a generic chat bubble.
export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d={siWhatsapp.path} />
    </svg>
  )
}
