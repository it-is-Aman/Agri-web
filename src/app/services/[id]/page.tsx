import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Phone, MessageCircle, Leaf, ArrowLeft, CheckCircle, Clock, Star, Wrench, Cog } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const services = [
  {
    id: 1,
    title: "Equipment Repair",
    description: "Professional repair services for all types of agriculture equipment",
    longDescription:
      "Our expert technicians provide comprehensive repair services for brush cutters, power tillers, sprayers, and other farming equipment. We use genuine parts and follow manufacturer guidelines to ensure your equipment performs at its best. With over 10 years of experience, our team can diagnose and fix issues quickly, minimizing downtime during critical farming seasons.",
    icon: <Wrench className="h-8 w-8" />,
    features: [
      "Expert Technicians",
      "Genuine Parts",
      "Quick Turnaround",
      "Warranty on Repairs",
      "Free Diagnosis",
      "Pick-up Service",
    ],
    pricing: "Starting from ₹500",
    duration: "1-3 days",
    image: "/agriculture-equipment-repair-service.jpg",
    process: [
      "Equipment diagnosis and assessment",
      "Detailed repair estimate provided",
      "Genuine parts procurement",
      "Professional repair execution",
      "Quality testing and validation",
      "Delivery with warranty",
    ],
    warranty: "6 months on repairs",
    includes: ["Free diagnosis", "Genuine parts", "Labor charges", "Quality testing", "Warranty certificate"],
  },
  {
    id: 2,
    title: "Preventive Maintenance",
    description: "Regular maintenance to keep your equipment running smoothly",
    longDescription:
      "Scheduled maintenance services to prevent breakdowns and extend equipment life. Our maintenance packages include cleaning, lubrication, part inspection, and performance optimization to ensure maximum efficiency. Regular maintenance can extend equipment life by up to 50% and reduce fuel consumption significantly.",
    icon: <Cog className="h-8 w-8" />,
    features: ["Scheduled Service", "Performance Check", "Oil Change", "Filter Replacement", "Cleaning", "Lubrication"],
    pricing: "Starting from ₹300",
    duration: "2-4 hours",
    image: "/agriculture-equipment-maintenance-service.jpg",
    process: [
      "Equipment inspection checklist",
      "Cleaning and lubrication",
      "Oil and filter replacement",
      "Performance optimization",
      "Safety checks and testing",
      "Maintenance report delivery",
    ],
    warranty: "3 months service warranty",
    includes: [
      "Complete inspection",
      "Oil change",
      "Filter replacement",
      "Cleaning",
      "Lubrication",
      "Performance report",
    ],
  },
]

interface ServicePageProps {
  params: {
    id: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === Number.parseInt(params.id))

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/services" className="flex items-center space-x-2">
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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Image */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{service.title}</h1>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>

            {/* Pricing & Duration */}
            <div className="flex items-center space-x-6 py-4 border-y border-border">
              <div>
                <span className="text-2xl font-bold text-primary">{service.pricing}</span>
                <p className="text-sm text-muted-foreground">Starting price</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <span className="font-medium">{service.duration}</span>
                  <p className="text-sm text-muted-foreground">Typical duration</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="font-semibold mb-3">Service Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Service via WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                <Phone className="mr-2 h-5 w-5" />
                Call for Quote: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {/* Description & Process */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Service Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What&apos;s Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {service.includes.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Warranty</span>
                  <p className="font-medium">{service.warranty}</p>
                </div>
                <Separator />
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Service Area</span>
                  <p className="font-medium">Pan-India</p>
                </div>
                <Separator />
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Emergency Service</span>
                  <p className="font-medium">Available 24/7</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm">10+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Certified Technicians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Genuine Parts Only</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Competitive Pricing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== service.id)
              .map((relatedService) => (
                <Card key={relatedService.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedService.image || "/placeholder.svg"}
                      alt={relatedService.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      width={500}
                      height={300}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{relatedService.title}</CardTitle>
                    <CardDescription>{relatedService.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{relatedService.pricing}</span>
                      <Link href={`/services/${relatedService.id}`}>
                        <Button size="sm">View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
