// Single source for business details. Values come from env so they can change without code edits.
const env = (value: string | undefined, fallback = "") => value?.trim() || fallback

// Accept any format in env ("+91 98765 43210", "09876543210", "919876543210") → "919876543210".
// wa.me and tel: links break on spaces or a leading +.
const toIntlDigits = (value: string) => {
  const digits = value.replace(/\D/g, "").replace(/^0+/, "")
  return digits.length === 10 ? `91${digits}` : digits
}

const phone = toIntlDigits(env(process.env.NEXT_PUBLIC_PHONE))
const whatsapp = toIntlDigits(env(process.env.NEXT_PUBLIC_WHATSAPP)) || phone

export const siteConfig = {
  name: env(process.env.NEXT_PUBLIC_NAME_ENGLISH, "AgriTools"),
  nameHindi: env(process.env.NEXT_PUBLIC_NAME_HINDI, "एग्रीटूल्स"),
  // Falls back to the Vercel production domain (set automatically by Vercel) before localhost,
  // so sitemap/canonical URLs are never "localhost" on a live deploy.
  url: env(
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000",
  ),
  yearEstablished: Number(env(process.env.NEXT_PUBLIC_YEAR_ESTABLISHED, "2014")),
  phone,
  whatsapp,
  email: env(process.env.NEXT_PUBLIC_EMAIL),
  address: {
    line: env(process.env.NEXT_PUBLIC_ADDRESS_LINE),
    city: env(process.env.NEXT_PUBLIC_CITY, "Noida"),
    state: env(process.env.NEXT_PUBLIC_STATE, "Uttar Pradesh"),
    pincode: env(process.env.NEXT_PUBLIC_PINCODE),
  },
  mapEmbedUrl: env(process.env.NEXT_PUBLIC_MAP_EMBED_URL),
  shopHours: env(process.env.NEXT_PUBLIC_SHOP_HOURS),
  registration: {
    gstin: env(process.env.NEXT_PUBLIC_GSTIN),
    udyam: env(process.env.NEXT_PUBLIC_UDYAM_NUMBER),
    iec: env(process.env.NEXT_PUBLIC_IEC_CODE),
  },
  // Shown wherever brand names appear next to compatible parts.
  brandDisclaimer:
    "We are an independent dealer and are not affiliated with or authorised by STIHL or any other brand. Brand names and model numbers are used only to indicate compatibility.",
} as const

export const fullAddress = () => {
  const { line, city, state, pincode } = siteConfig.address
  return [line, city, state, pincode].filter(Boolean).join(", ")
}

export const directionsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.name}, ${fullAddress()}`)}`

export const yearsInBusiness = () => new Date().getFullYear() - siteConfig.yearEstablished

// "919876543210" → "+91 98765 43210"
export const phoneDisplay = () => {
  const p = siteConfig.phone
  return p.length === 12 && p.startsWith("91") ? `+91 ${p.slice(2, 7)} ${p.slice(7)}` : p
}

export const telLink = () => `tel:+${siteConfig.phone}`

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`
