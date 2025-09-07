import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  Leaf,
  ArrowLeft,
  Users,
  Award,
  MapPin,
  CheckCircle,
  Star,
  Truck,
  Shield,
  Wrench,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "5000+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "15+", label: "Cities Served", icon: <MapPin className="h-6 w-6" /> },
    { number: "50+", label: "Product Varieties", icon: <Wrench className="h-6 w-6" /> },
  ]

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description: "We provide dependable equipment and services that farmers can trust for their critical operations.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Affordability",
      description: "Quality agriculture tools at competitive prices, making modern farming accessible to all.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Pan-India Reach",
      description: "Extensive service network covering major agricultural regions across India.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Decade of Excellence",
      description: "Over 10 years of experience in agriculture equipment industry",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Certified technicians and agriculture equipment specialists",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Genuine Products",
      description: "100% authentic products with manufacturer warranties",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast Service",
      description: "Quick delivery and responsive customer support",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Complete Solutions",
      description: "From sales to service, we handle all your equipment needs",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Customer Satisfaction",
      description: "5-star rated service with thousands of happy customers",
    },
  ]

  const team = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      experience: "15+ years in agriculture industry",
      image: "/team-founder-agriculture-expert.jpg",
      description: "Started AgriTools India with a vision to modernize Indian farming through quality equipment.",
    },
    {
      name: "Priya Patel",
      position: "Service Manager",
      experience: "8+ years in equipment service",
      image: "/team-service-manager-agriculture.jpg",
      description: "Leads our service team ensuring quick and reliable equipment maintenance across India.",
    },
    {
      name: "Amit Kumar",
      position: "Technical Head",
      experience: "12+ years in equipment repair",
      image: "/team-technical-head-agriculture.jpg",
      description: "Expert technician specializing in agriculture equipment repair and maintenance.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5" />
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">AgriTools India</span>
              </Link>
            </div>

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

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">Established 2014</Badge>
            <h1 className="text-4xl font-bold text-foreground leading-tight text-balance">
              Empowering Indian Farmers with Quality Agriculture Tools
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              With over 10 years in the agriculture tools business, we help farmers work smarter, not harder. Our
              mission is to provide reliable, affordable equipment and expert services that boost farming productivity
              across India.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Trusted by 5000+ Farmers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Pan-India Service</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/about-us-agriculture-team-india.jpg"
              alt="AgriTools India team with agriculture equipment"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small shop to a trusted name across India - here's how we grew with our farming community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">The Beginning (2014)</h3>
                <p className="text-muted-foreground">
                  Started as a small agriculture equipment shop in Mumbai with a simple goal: provide farmers with
                  reliable tools at fair prices. Our founder, Rajesh Sharma, came from a farming family and understood
                  the challenges farmers face daily.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Growth & Expansion (2017-2020)</h3>
                <p className="text-muted-foreground">
                  As word spread about our quality products and honest service, we expanded to Pune and Nashik. We
                  started offering repair and maintenance services, becoming a one-stop solution for agriculture
                  equipment needs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Digital Transformation (2021-Present)</h3>
                <p className="text-muted-foreground">
                  Embracing technology to serve farmers better, we launched our online platform and mobile service
                  units. Today, we serve over 5000 farmers across 15+ cities with the same commitment to quality and
                  service.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/agriculture-equipment-shop-history.jpg"
                alt="AgriTools India shop evolution"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do for the farming community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose AgriTools India?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What makes us the preferred choice for thousands of farmers across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The dedicated professionals behind AgriTools India's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.position}</CardDescription>
                  <Badge variant="secondary" className="w-fit">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To empower Indian farmers with high-quality, affordable agriculture equipment and expert services that
                enhance productivity, reduce manual labor, and contribute to sustainable farming practices across the
                nation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted agriculture equipment partner, driving the modernization of farming
                through innovative tools, exceptional service, and unwavering commitment to farmer success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Growing Family?</h2>
          <p className="mb-6 opacity-90">
            Experience the AgriTools India difference. Contact us today for quality equipment and expert service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                <Users className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Wrench className="mr-2 h-5 w-5" />
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
