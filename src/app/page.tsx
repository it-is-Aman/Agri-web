import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Wrench, Cog, Leaf, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_NAME_HINDI} - Authentic Agriculture Tools & Services | भारत का भरोसेमंद साथी`,
  description:
    "With 12+ years of serving Indian farmers, we provide genuine agriculture tools, quality spare parts, and trusted maintenance services. From Punjab's wheat fields to Kerala's coconut groves - we understand your farming needs.",
  keywords: [
    "authentic agriculture tools India",
    "genuine farming equipment",
    "brush cutter for Indian farmers",
    "power tiller price India",
    "agriculture sprayer Indian market",
    "farm equipment repair India",
    "agriculture maintenance services",
    "किसान उपकरण",
    "भारतीय कृषि उपकरण",
  ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_NAME_HINDI} - Trusted Agriculture Tools for Indian Farmers`,
    description: "Serving Indian farmers for over 12 years with genuine tools and expert services.",
    images: ["/img/farmer-using-brush-cutter-in-green-agricultural-fi.jpg"],
  },
}

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Professional Brush Cutter - Heavy Duty Series",
      description: "Engineered for Indian terrains - from Punjab's paddy fields to Maharashtra's sugarcane farms. Built to handle thick vegetation and monsoon challenges.",
      image: "/professional-brush-cutter-in-agricultural-field.jpg",
      price: "₹18,500 - ₹25,000",
      features: ["52cc Japanese Engine", "Monsoon-Resistant", "Indian Warranty"],
      origin: "Designed for Indian Farming",
    },
    {
      id: 2,
      name: "Bharat Power Tiller - Compact Series",
      description: "Perfect for small to medium Indian farms. From Gujarat's cotton fields to West Bengal's rice paddies - your reliable farming companion.",
      image: "/power-tiller-machine-working-in-farm-soil.jpg",
      price: "₹85,000 - ₹1,20,000",
      features: ["7HP Diesel Engine", "Multi-Crop Ready", "Service in 500+ Towns"],
      origin: "Made for Indian Soil",
    },
    {
      id: 3,
      name: "Kisan Sprayer Pro - Advanced Series",
      description: "Trusted by farmers from Haryana to Tamil Nadu. Uniform coverage for pesticides, fertilizers, and organic solutions across diverse Indian crops.",
      image: "/agricultural-sprayer-equipment-for-farming.jpg",
      price: "₹3,500 - ₹8,500",
      features: ["16L High Capacity", "Rust-Proof Build", "Easy Maintenance"],
      origin: "Tested Across India",
    },
  ]

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "गाँव तक मरम्मत सेवा (Village-Level Repair)",
      description: "Our trained technicians reach your farm within 24 hours. From engine troubles to blade sharpening - we fix it where you work.",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "मानसून रेडी मेंटेनेंस (Monsoon-Ready Maintenance)",
      description: "Pre-monsoon and post-harvest maintenance packages. Keep your equipment running through India's diverse seasonal challenges.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "असली पुर्जे गारंटी (Genuine Parts Guarantee)",
      description: "100% authentic spare parts with manufacturing warranty. No duplicate parts - because we understand the value of your hard work.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-foreground">{process.env.NEXT_PUBLIC_NAME_HINDI}</span>
              <span className="text-sm text-muted-foreground hidden sm:inline">| {process.env.NEXT_PUBLIC_NAME_ENGLISH}</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/products" className="text-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2 bg-transparent">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white border border-amber-300">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp करें
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-amber-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-amber-600/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 border-emerald-300 shadow-sm">
                12+ सालों से किसानों का भरोसा | Trusted Since 2012
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                <span className="bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent">
                  भारतीय किसानों के लिए
                </span>
                <br />
                <span className="text-amber-700">Authentic Agriculture Tools</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                From Kashmir's apple orchards to Kerala's spice gardens - we've been supporting Indian farmers with 
                <strong className="text-emerald-700"> genuine equipment, honest prices, and expert guidance</strong>. 
                Because we believe every farmer deserves tools that work as hard as they do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg border border-amber-300">
                  उपकरण देखें | Explore Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                  मरम्मत की सहायता | Get Repair Help
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-muted-foreground">500+ गाँवों में सेवा</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-muted-foreground">सभी राज्यों में डिलीवरी</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-muted-foreground">24x7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-2xl blur-xl opacity-20"></div>
              <img
                src="/img/farmer-using-brush-cutter-in-green-agricultural-fi.jpg"
                alt="Indian farmer using professional agriculture tools in field"
                className="relative rounded-2xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-emerald-200">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">15,000+ खुश किसान</p>
                    <p className="text-xs text-muted-foreground">Happy Farmers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-emerald-700">हमारी सेवाएं</span> | Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              गांव से गांव तक, खेत से खेत तक - आपके कृषि उपकरणों की संपूर्ण देखभाल
              <br />
              <em className="text-emerald-600">Complete care for your agriculture equipment, village to village</em>
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full w-fit border-2 border-emerald-300 shadow-lg">
                    <div className="text-emerald-700 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-emerald-600 mr-2" />
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl flex items-center gap-2 justify-center">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-emerald-900 leading-relaxed">{service.description}</CardDescription>
                  <div className="mt-6 flex justify-center">
                    <div className="relative group">
                      <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-full border border-amber-300 shadow-md">
                        <MessageCircle className="h-4 w-4 mr-1" /> सहायता लें | Get Help
                      </Button>
                      <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-2 text-xs bg-emerald-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        तुरंत सहायता - 24 घंटे में सेवा | Immediate help - Service within 24 hours
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-emerald-700">प्रमुख उत्पाद</span> | Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              भारतीय खेती की परिस्थितियों के लिए विशेष रूप से डिज़ाइन किए गए उपकरण
              <br />
              <em className="text-emerald-600">Tools specially designed for Indian farming conditions</em>
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 hover:scale-105">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={"/img/" + product.image.replace("/", "")}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 rounded-2xl border-2 border-emerald-200"
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {product.origin}
                  </div>
                  <Leaf className="absolute top-3 right-3 h-8 w-8 text-emerald-600 bg-white/90 rounded-full p-1.5 shadow-lg border border-emerald-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-emerald-900 leading-relaxed">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 border-emerald-300 shadow-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-700 bg-gradient-to-r from-emerald-100 to-amber-100 px-3 py-1 rounded-full">
                      {product.price}
                    </span>
                    <div className="relative group">
                      <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-full border border-amber-300 shadow-md">
                        <MessageCircle className="h-4 w-4 mr-1" /> जानकारी लें | Enquire
                      </Button>
                      <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-2 text-xs bg-emerald-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        विशेषज्ञ सलाह और तुरंत कोटेशन | Expert advice & instant quote
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 shadow-md">
                सभी उत्पाद देखें | View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-4">
            मदद चाहिए? हम यहाँ हैं | Need Help? We're Here for You
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            चाहे आपको विशेषज्ञ सलाह चाहिए, तुरंत कोटेशन चाहिए, या अपने कृषि उपकरणों की मरम्मत करवानी हो - 
            हमारी टीम आपकी सहायता के लिए तैयार है।
            <br />
            <em className="text-amber-200">Expert advice, instant quotes, or equipment maintenance - our team is ready to help.</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-amber-50 border-2 border-amber-300 shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              अभी कॉल करें | Call Now: +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp पर संपर्क करें | WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-800 text-white py-12 border-t-4 border-amber-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-amber-400" />
                <span className="text-lg font-bold">{process.env.NEXT_PUBLIC_NAME_HINDI}</span>
              </div>
              <p className="text-emerald-100 text-sm leading-relaxed">
                12+ सालों से भारतीय किसानों का विश्वसनीय साथी। 
                <br />
                <em>Your trusted agriculture partner for over 12 years across India.</em>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-amber-200">उत्पाद | Products</h3>
              <ul className="space-y-2 text-sm text-emerald-100">
                <li>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    Brush Cutters (ब्रश कटर)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    Power Tillers (पावर टिलर)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    Sprayers (स्प्रेयर)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    Spare Parts (स्पेयर पार्ट्स)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-amber-200">सेवाएं | Services</h3>
              <ul className="space-y-2 text-sm text-emerald-100">
                <li>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    Equipment Repair (मरम्मत)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    Maintenance (रखरखाव)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    Installation (स्थापना)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-200 transition-colors">
                    24x7 Support (सहायता)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-amber-200">संपर्क | Contact</h3>
              <ul className="space-y-2 text-sm text-emerald-100">
                <li>Phone: +91 98765 43210</li>
                <li>Email: info@bharatiyakisansahayak.in</li>
                <li>WhatsApp: +91 98765 43210</li>
                <li>Address: Mumbai, Maharashtra, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-sm text-emerald-200">
            <p>&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME_HINDI} | {process.env.NEXT_PUBLIC_NAME_ENGLISH}. सभी अधिकार सुरक्षित | All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <Button size="lg" className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl border-2 border-amber-300 animate-pulse">
            <MessageCircle className="h-6 w-6" />
          </Button>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 text-sm bg-emerald-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            तुरंत संपर्क करें | Contact Now
          </span>
        </div>
      </div>
    </div>
  )
}
