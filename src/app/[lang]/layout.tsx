import type React from "react"
import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { Archivo, IBM_Plex_Mono, Noto_Sans_Devanagari, Teko } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import { siteConfig } from "@/config/site"
import { fmt, getDictionary, isLocale, localePath, locales } from "@/i18n"
import { alternates } from "@/lib/seo"
import { EnquiryProvider } from "@/lib/enquiry/store"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { MobileActionBar } from "@/components/layout/MobileActionBar"
import { EnquiryDrawer } from "@/components/enquiry/EnquiryDrawer"

// Display: Teko (condensed, Latin + Devanagari). Body: Archivo, with Noto Sans Devanagari for Hindi glyphs.
// Labels, part IDs, model numbers: IBM Plex Mono.
const teko = Teko({ subsets: ["latin", "devanagari"], variable: "--font-teko", display: "swap" })
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" })
const notoDeva = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-deva", display: "swap" })
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex-mono", display: "swap" })

export const generateStaticParams = () => locales.map((lang) => ({ lang }))

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  const vars = { name: siteConfig.name, city: siteConfig.address.city }
  const title = fmt(t.meta.title, vars)
  const description = fmt(t.meta.description, vars)

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s | ${siteConfig.name}` },
    description,
    alternates: alternates(lang, "/"),
    openGraph: {
      type: "website",
      locale: lang === "hi" ? "hi_IN" : "en_IN",
      siteName: siteConfig.name,
      title,
      description,
      images: ["/img/farmer-using-brush-cutter-in-green-agricultural-fi.jpg"],
    },
    twitter: { card: "summary_large_image", title, description },
    category: "Agriculture",
  }
}

export const viewport: Viewport = { themeColor: "#121210" }

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone ? `+${siteConfig.phone}` : undefined,
    email: siteConfig.email || undefined,
    foundingDate: String(siteConfig.yearEstablished),
    openingHours: siteConfig.shopHours || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line || undefined,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode || undefined,
      addressCountry: "IN",
    },
    areaServed: "IN",
  }

  return (
    <html lang={lang} className={`${teko.variable} ${archivo.variable} ${notoDeva.variable} ${plexMono.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-signal focus:px-4 focus:py-2"
        >
          {t.common.skip}
        </a>
        <EnquiryProvider>
          <SiteHeader lang={lang} t={t} />
          <main id="main">{children}</main>
          <SiteFooter lang={lang} t={t} />
          <MobileActionBar labels={{ call: t.common.call, whatsapp: t.common.whatsapp, enquiry: t.common.enquiry }} />
          <EnquiryDrawer
            shopHref={localePath(lang, "/shop")}
            labels={{ ...t.enquiry, askPrice: t.common.askPrice }}
          />
        </EnquiryProvider>
        <Analytics />
      </body>
    </html>
  )
}
