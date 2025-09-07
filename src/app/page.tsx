import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Wrench, Cog, Leaf, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AgriTools India - Quality Agriculture Equipment & Services",
  description:
    "Leading provider of agriculture tools, equipment, and maintenance services across India. Brush cutters, power tillers, sprayers, and expert repair services for farmers.",
  keywords: [
    "agriculture tools India",
    "farming equipment",
    "brush cutter India",
    "power tiller price",
    "agriculture sprayer",
    "farm equipment repair",
    "agriculture maintenance services",
  ],
  openGraph: {
    title: "AgriTools India - Quality Agriculture Equipment & Services",
    description: "Leading provider of agriculture tools, equipment, and maintenance services across India.",
    images: ["/farmer-using-brush-cutter-in-green-agricultural-fi.jpg"],
  },
}

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Professional Brush Cutter",
      description: "Heavy-duty brush cutter for clearing thick vegetation and maintaining farmland",
      image: "/professional-brush-cutter-in-agricultural-field.jpg",
      price: "Contact for Price",
      features: ["52cc Engine", "Anti-vibration", "Easy Start"],
    },
    {
      id: 2,
      name: "Power Tiller Machine",
      description: "Efficient tiller for soil preparation and cultivation in small to medium farms",
      image: "/power-tiller-machine-working-in-farm-soil.jpg",
      price: "Contact for Price",
      features: ["7HP Engine", "Adjustable Width", "Fuel Efficient"],
    },
    {
      id: 3,
      name: "Agricultural Sprayer",
      description: "High-capacity sprayer for pesticides and fertilizers with uniform coverage",
      image: "/agricultural-sprayer-equipment-for-farming.jpg",
      price: "Contact for Price",
      features: ["16L Capacity", "Adjustable Nozzle", "Lightweight"],
    },
  ]

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Equipment Repair",
      description: "Professional repair services for all agriculture tools",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Maintenance",
      description: "Regular maintenance to keep your equipment running smoothly",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Spare Parts",
      description: "Genuine spare parts for all major agriculture equipment brands",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">AgriTools India</span>
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
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">Trusted Across India</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                High-Quality Agriculture Tools & Services
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Empowering farmers with reliable equipment, genuine spare parts, and expert maintenance services. Your
                trusted partner for all agriculture tool needs across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Tools
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Get Maintenance Help
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">10+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Pan-India Service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/farmer-using-brush-cutter-in-green-agricultural-fi.jpg"
                alt="Agriculture tools in action"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for all your agriculture equipment needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our top-quality agriculture tools designed for Indian farming conditions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{product.price}</span>
                    <Button size="sm">Enquire Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help? We're Here for You</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert advice, quick quotes, or schedule maintenance for your agriculture equipment. Our team is ready
            to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">AgriTools India</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your trusted partner for agriculture tools and services across India.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Brush Cutters
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Power Tillers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Sprayers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Spare Parts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Equipment Repair
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Phone: +91 98765 43210</li>
                <li>Email: info@agritools.in</li>
                <li>Address: Mumbai, Maharashtra</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AgriTools India. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
