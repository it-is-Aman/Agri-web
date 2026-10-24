import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import type { ReactNode } from "react"
import { directionsUrl, fullAddress, phoneDisplay, siteConfig, telLink, whatsappLink } from "@/config/site"
import { fmt, getDictionary, isLocale } from "@/i18n"
import { alternates } from "@/lib/seo"
import { PageIntro } from "@/components/shared/PageIntro"
import { ShopFacts } from "@/components/shared/ShopFacts"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"

type Params = { lang: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  return {
    title: t.contact.metaTitle,
    description: fmt(t.contact.metaDescription, { name: siteConfig.name, city: siteConfig.address.city }),
    alternates: alternates(lang, "/contact"),
  }
}

function ContactTile({
  href,
  icon,
  label,
  value,
  highlight,
  external,
}: {
  href?: string
  icon: ReactNode
  label: string
  value: string
  highlight?: boolean
  external?: boolean
}) {
  const body = (
    <>
      <span className="flex items-center justify-between">
        <span className="spec-label">{label}</span>
        {icon}
      </span>
      <span className="mt-6 block break-words font-display text-3xl uppercase leading-none sm:text-4xl">{value}</span>
    </>
  )
  const classes = `block rounded-md border-2 border-ink p-6 transition-[transform,box-shadow] ${
    highlight ? "bg-signal" : "bg-paper"
  } ${href ? "hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--ink)]" : ""}`
  return href ? (
    <a href={href} className={classes} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
      {body}
    </a>
  ) : (
    <div className={classes}>{body}</div>
  )
}

export default async function ContactPage({ params }: { params: Promise<Params> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  return (
    <>
      <PageIntro label={t.contact.label} title={t.contact.title} intro={t.contact.intro} />

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <ContactTile
          href={whatsappLink()}
          external
          highlight
          icon={<WhatsAppIcon className="size-7" />}
          label={t.contact.whatsapp}
          value={phoneDisplay() || t.common.whatsapp}
        />
        {phoneDisplay() && (
          <ContactTile href={telLink()} icon={<Phone className="size-7" />} label={t.contact.phone} value={phoneDisplay()} />
        )}
        {siteConfig.email && (
          <ContactTile
            href={`mailto:${siteConfig.email}`}
            icon={<Mail className="size-7" />}
            label={t.contact.email}
            value={siteConfig.email}
          />
        )}
        <ContactTile
          href={directionsUrl()}
          external
          icon={<MapPin className="size-7" />}
          label={t.contact.address}
          value={fullAddress()}
        />
        {siteConfig.shopHours && (
          <ContactTile icon={<Clock className="size-7" />} label={t.contact.hours} value={siteConfig.shopHours} />
        )}
      </section>

      <ShopFacts t={t} index="01" />
    </>
  )
}
