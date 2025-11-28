'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Wrench, Cog, Leaf, ArrowRight, CheckCircle, Play, TrendingUp, MapPin, Clock, Shield, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { TrustBadges } from "@/components/interactive/TrustBadges"
import { WhatsAppWidget } from "@/components/interactive/WhatsAppWidget"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const featuredProducts = [
    {
      id: 1,
      name: "Professional Brush Cutter - Heavy Duty Series",
      nameHindi: "प्रोफेशनल ब्रश कटर - हेवी ड्यूटी सीरीज",
      description: "Engineered for Indian terrains - from Punjab's paddy fields to Maharashtra's sugarcane farms. Built to handle thick vegetation and monsoon challenges.",
      descriptionHindi: "भारतीय इलाकों के लिए इंजीनियर किया गया - पंजाब के धान के खेतों से लेकर महाराष्ट्र के गन्ने के खेतों तक।",
      image: "/professional-brush-cutter-in-agricultural-field.jpg",
      price: "₹18,500",
      originalPrice: "₹22,000",
      features: ["52cc Japanese Engine", "Monsoon-Resistant", "Indian Warranty"],
      origin: "Designed for Indian Farming",
      badge: "Bestseller",
      discount: "16% OFF"
    },
    {
      id: 2,
      name: "Bharat Power Tiller - Compact Series",
      nameHindi: "भारत पावर टिलर - कॉम्पैक्ट सीरीज",
      description: "Perfect for small to medium Indian farms. From Gujarat's cotton fields to West Bengal's rice paddies - your reliable farming companion.",
      descriptionHindi: "छोटे से मध्यम भारतीय खेतों के लिए एकदम सही। गुजरात के कपास के खेतों से लेकर पश्चिम बंगाल के धान के खेतों तक।",
      image: "/power-tiller-machine-working-in-farm-soil.jpg",
      price: "₹85,000",
      originalPrice: "₹95,000",
      features: ["7HP Diesel Engine", "Multi-Crop Ready", "Service in 500+ Towns"],
      origin: "Made for Indian Soil",
      badge: "Most Popular",
      discount: "11% OFF"
    },
    {
      id: 3,
      name: "Kisan Sprayer Pro - Advanced Series",
      nameHindi: "किसान स्प्रेयर प्रो - एडवांस्ड सीरीज",
      description: "Trusted by farmers from Haryana to Tamil Nadu. Uniform coverage for pesticides, fertilizers, and organic solutions across diverse Indian crops.",
      descriptionHindi: "हरियाणा से तमिलनाडु तक किसानों द्वारा विश्वसनीय। विविध भारतीय फसलों में कीटनाशकों, उर्वरकों के लिए समान कवरेज।",
      image: "/agricultural-sprayer-equipment-for-farming.jpg",
      price: "₹3,500",
      originalPrice: "₹4,500",
      features: ["16L High Capacity", "Rust-Proof Build", "Easy Maintenance"],
      origin: "Tested Across India",
      badge: "Value Pick",
      discount: "22% OFF"
    },
  ]

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "गाँव तक मरम्मत सेवा",
      titleEnglish: "Village-Level Repair",
      description: "Our trained technicians reach your farm within 24 hours. From engine troubles to blade sharpening - we fix it where you work.",
      descriptionHindi: "हमारे प्रशिक्षित तकनीशियन 24 घंटे के भीतर आपके खेत तक पहुंचते हैं। इंजन की समस्याओं से लेकर ब्लेड शार्पनिंग तक।",
      highlight: "24-Hour Response"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "मानसून रेडी मेंटेनेंस",
      titleEnglish: "Monsoon-Ready Maintenance",
      description: "Pre-monsoon and post-harvest maintenance packages. Keep your equipment running through India's diverse seasonal challenges.",
      descriptionHindi: "मानसून-पूर्व और फसल-पश्चात रखरखाव पैकेज। भारत की विविध मौसमी चुनौतियों के दौरान अपने उपकरण चालू रखें।",
      highlight: "Seasonal Packages"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "असली पुर्जे गारंटी",
      titleEnglish: "Genuine Parts Guarantee",
      description: "100% authentic spare parts with manufacturing warranty. No duplicate parts - because we understand the value of your hard work.",
      descriptionHindi: "निर्माण वारंटी के साथ 100% प्रामाणिक स्पेयर पार्ट्स। कोई डुप्लीकेट पार्ट्स नहीं।",
      highlight: "100% Authentic"
    },
  ]

  const stats = [
    { number: "15,000+", label: "Happy Farmers", labelHindi: "खुश किसान", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "28", label: "States Covered", labelHindi: "राज्य कवर", icon: <MapPin className="h-6 w-6" /> },
    { number: "12+", label: "Years Experience", labelHindi: "वर्षों का अनुभव", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", labelHindi: "सहायता उपलब्ध", icon: <Clock className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-amber-50 py-20 overflow-hidden pattern-diagonal">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-amber-600/5"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <Badge className="bg-gradient-to-r from-saffron to-amber-500 text-white border-none shadow-lg hover-lift">
                <Shield className="h-4 w-4 mr-1" />
                12+ सालों से किसानों का भरोसा | Trusted Since 2012
              </Badge>

              <h1 className="text-responsive-xl font-bold text-foreground leading-tight text-balance">
                <span className="text-emerald-700">
                  भारतीय किसानों के लिए
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Authentic Agriculture Tools
                </span>
              </h1>

              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                From Kashmir's apple orchards to Kerala's spice gardens - we've been supporting Indian farmers with
                <strong className="text-emerald-700"> genuine equipment, honest prices, and expert guidance</strong>.
                Because we believe every farmer deserves tools that work as hard as they do.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg border border-amber-300 hover-lift w-full sm:w-auto">
                    उपकरण देखें | Explore Tools
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 hover-lift w-full sm:w-auto">
                    मरम्मत की सहायता | Get Repair Help
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-200 hover-lift">
                    <div className="text-emerald-600 mb-1 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-emerald-700">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.labelHindi}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-2xl blur-xl opacity-30"></div>
              <div className="relative">
                <Image
                  src="/img/farmer-using-brush-cutter-in-green-agricultural-fi.jpg"
                  alt="Indian farmer using professional agriculture tools in field"
                  className="relative rounded-2xl shadow-2xl border-4 border-white hover-scale"
                  width={600}
                  height={400}
                />

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl border-2 border-emerald-300 animate-bounce-subtle">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                    <div>
                      <p className="text-sm font-semibold text-emerald-700">15,000+ खुश किसान</p>
                      <p className="text-xs text-muted-foreground">Happy Farmers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 animate-fade-in">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-lg font-bold text-foreground mb-4">
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
              <Card
                key={index}
                className="text-center hover-lift border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full w-fit border-2 border-emerald-300 shadow-lg hover-glow">
                    <div className="text-emerald-700">
                      {service.icon}
                    </div>
                  </div>
                  <Badge className="mx-auto mb-2 bg-saffron text-white">{service.highlight}</Badge>
                  <CardTitle className="text-xl">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-emerald-600 font-medium">{service.titleEnglish}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-emerald-900 leading-relaxed mb-4">
                    {service.descriptionHindi}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground mb-4">{service.description}</p>
                  <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-full border border-amber-300 shadow-md hover-lift">
                    <MessageCircle className="h-4 w-4 mr-1" /> सहायता लें | Get Help
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gradient-to-br from-emerald-50/50 via-white to-amber-50/50 pattern-grid">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-lg font-bold text-foreground mb-4">
              <span className="text-emerald-700">प्रमुख उत्पाद</span> | Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              भारतीय खेती की परिस्थितियों के लिए विशेष रूप से डिज़ाइन किए गए उपकरण
              <br />
              <em className="text-emerald-600">Tools specially designed for Indian farming conditions</em>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover-lift border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={"/img/" + product.image.replace("/", "")}
                    alt={product.name}
                    className="w-full h-full object-cover hover-scale"
                    width={500}
                    height={300}
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
                      {product.discount}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg">
                      {product.badge}
                    </Badge>
                  </div>

                  <Leaf className="absolute top-3 right-3 h-8 w-8 text-emerald-600 bg-white/90 rounded-full p-1.5 shadow-lg border border-emerald-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">
                    {product.nameHindi}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{product.name}</p>
                  <CardDescription className="text-emerald-900 leading-relaxed mt-2">
                    {product.descriptionHindi}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 border-emerald-300 shadow-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-emerald-700">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/products/${product.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                        View Details
                      </Button>
                    </Link>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-full border border-amber-300 shadow-md hover-lift">
                      <MessageCircle className="h-4 w-4 mr-1" /> जानकारी लें
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Link href="/products">
              <Button variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 shadow-md hover-lift">
                सभी उत्पाद देखें | View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent"></div>
        <div className="absolute inset-0 pattern-dots opacity-10"></div>

        <div className="container mx-auto px-4 text-center relative animate-fade-in">
          <h2 className="text-responsive-lg font-bold mb-4">
            मदद चाहिए? हम यहाँ हैं | Need Help? We're Here for You
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            चाहे आपको विशेषज्ञ सलाह चाहिए, तुरंत कोटेशन चाहिए, या अपने कृषि उपकरणों की मरम्मत करवानी हो -
            हमारी टीम आपकी सहायता के लिए तैयार है।
            <br />
            <em className="text-amber-200">Expert advice, instant quotes, or equipment maintenance - our team is ready to help.</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-amber-50 border-2 border-amber-300 shadow-lg hover-lift">
              <Phone className="mr-2 h-5 w-5" />
              अभी कॉल करें | Call Now: {process.env.NEXT_PUBLIC_PHONE}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 shadow-lg hover-lift"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp पर संपर्क करें | WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  )
}
