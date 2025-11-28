import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/home/Header"
import Footer from "@/components/home/Footer"

export const metadata: Metadata = {
  title: {
    default: "AgriTools India - Quality Agriculture Equipment & Services",
    template: "%s | AgriTools India",
  },
  description:
    "Leading provider of agriculture tools, equipment, and maintenance services across India. Brush cutters, power tillers, sprayers, and expert repair services for farmers.",
  keywords: [
    "agriculture tools India",
    "farming equipment",
    "brush cutter",
    "power tiller",
    "agriculture sprayer",
    "farm equipment repair",
    "agriculture maintenance services",
    "farming tools online",
    "agriculture equipment dealer",
    "farm machinery India",
  ],
  authors: [{ name: "AgriTools India" }],
  creator: "AgriTools India",
  publisher: "AgriTools India",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://agritools-india.vercel.app",
    siteName: "AgriTools India",
    title: "AgriTools India - Quality Agriculture Equipment & Services",
    description:
      "Leading provider of agriculture tools, equipment, and maintenance services across India. Brush cutters, power tillers, sprayers, and expert repair services for farmers.",
    images: [
      {
        url: "/farmer-using-brush-cutter-in-green-agricultural-fi.jpg",
        width: 1200,
        height: 630,
        alt: "AgriTools India - Agriculture Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriTools India - Quality Agriculture Equipment & Services",
    description: "Leading provider of agriculture tools, equipment, and maintenance services across India.",
    images: ["/farmer-using-brush-cutter-in-green-agricultural-fi.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://agritools-india.vercel.app",
  },
  category: "Agriculture",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4caf50" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          {children}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
