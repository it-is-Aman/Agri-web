"use client"

import { ClipboardList, Phone } from "lucide-react"
import { telLink, whatsappLink } from "@/config/site"
import { useEnquiry } from "@/lib/enquiry/store"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"

// Thumb-reach actions on phones. Pages add bottom padding (pb-20 on <main>) so content isn't hidden.
export function MobileActionBar({ labels }: { labels: { call: string; whatsapp: string; enquiry: string } }) {
  const { count, setOpen } = useEnquiry()
  const item = "flex h-16 flex-col items-center justify-center gap-1 font-display text-lg uppercase leading-none"

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t-2 border-ink bg-bone pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a href={telLink()} className={item}>
        <Phone className="size-5" /> {labels.call}
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${item} bg-signal text-ink`}>
        <WhatsAppIcon className="size-5" /> {labels.whatsapp}
      </a>
      <button type="button" onClick={() => setOpen(true)} className={`${item} relative`}>
        <ClipboardList className="size-5" /> {labels.enquiry}
        {count > 0 && (
          <span className="absolute right-[22%] top-2 grid min-w-5 place-items-center rounded-full bg-ink px-1 font-mono text-[0.65rem] font-bold text-bone">
            {count}
          </span>
        )}
      </button>
    </nav>
  )
}
