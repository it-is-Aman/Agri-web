"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Phone,
  MessageCircle,
  Leaf,
  ArrowLeft,
  Wrench,
  Cog,
  Settings,
  Truck,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "गाँव तक उपकरण मरम्मत | Village-Level Equipment Repair",
    description: "सभी प्रकार के कृषि उपकरणों के लिए पेशेवर मरम्मत सेवाएं। Professional repair services for all types of agriculture equipment.",
    longDescription:
      "हमारे विशेषज्ञ तकनीशियन ब्रश कटर, पावर टिलर, स्प्रेयर और अन्य कृषि उपकरणों की व्यापक मरम्मत सेवाएं प्रदान करते हैं। 24 घंटे में आपके खेत तक पहुंचकर सेवा। Our expert technicians provide comprehensive repair services. We reach your farm within 24 hours using genuine parts.",
    icon: <Wrench className="h-8 w-8" />,
    features: ["विशेषज्ञ तकनीशियन", "असली पुर्जे", "तुरंत सेवा", "मरम्मत पर वारंटी"],
    pricing: "₹500 से शुरुआत | Starting from ₹500",
    duration: "1-3 दिन | 1-3 days",
    image: "/agriculture-equipment-repair-service.jpg",
    region: "500+ गाँवों में सेवा | Serving 500+ Villages",
  },
  {
    id: 2,
    title: "मानसून रेडी रखरखाव | Monsoon-Ready Maintenance",
    description: "आपके उपकरणों को सुचारू रूप से चलाने के लिए नियमित रखरखाव। Regular maintenance to keep equipment running smoothly.",
    longDescription:
      "टूटने से बचने और उपकरण जीवन बढ़ाने के लिए निर्धारित रखरखाव सेवाएं। मानसून पूर्व और फसल के बाद विशेष पैकेज। Scheduled maintenance services to prevent breakdowns. Pre-monsoon and post-harvest special packages.",
    icon: <Cog className="h-8 w-8" />,
    features: ["निर्धारित सेवा", "प्रदर्शन जांच", "तेल परिवर्तन", "फिल्टर बदलाव"],
    pricing: "₹300 से शुरुआत | Starting from ₹300",
    duration: "2-4 घंटे | 2-4 hours",
    image: "/agriculture-equipment-maintenance-service.jpg",
  },
  {
    id: 3,
    title: "Blade Sharpening",
    description: "Professional blade sharpening for optimal cutting performance",
    longDescription:
      "Precision blade sharpening service for brush cutters and other cutting equipment. We restore blade sharpness to factory specifications, ensuring clean cuts and reduced fuel consumption.",
    icon: <Settings className="h-8 w-8" />,
    features: ["Precision Sharpening", "Balance Check", "Edge Restoration", "Same Day Service"],
    pricing: "₹150 per blade",
    duration: "Same day",
    image: "/blade-sharpening-agriculture-service.jpg",
  },
  {
    id: 4,
    title: "On-Site Service",
    description: "Convenient on-site repair and maintenance at your location",
    longDescription:
      "We bring our expertise to your farm or location. Our mobile service units are equipped with tools and common spare parts to handle most repairs and maintenance tasks on-site.",
    icon: <Truck className="h-8 w-8" />,
    features: ["Mobile Service", "Equipped Van", "Emergency Repairs", "Flexible Timing"],
    pricing: "₹200 + service charges",
    duration: "As per requirement",
    image: "/on-site-agriculture-equipment-service.jpg",
  },
  {
    id: 5,
    title: "Engine Servicing",
    description: "Complete engine overhaul and performance optimization",
    longDescription:
      "Comprehensive engine servicing including carburetor cleaning, spark plug replacement, air filter service, and performance tuning. We ensure your engine runs efficiently and reliably.",
    icon: <Cog className="h-8 w-8" />,
    features: ["Engine Tuning", "Carburetor Service", "Spark Plug Replacement", "Performance Test"],
    pricing: "Starting from ₹800",
    duration: "1-2 days",
    image: "/engine-servicing-agriculture-equipment.jpg",
  },
  {
    id: 6,
    title: "Spare Parts Supply",
    description: "Genuine spare parts for all major agriculture equipment brands",
    longDescription:
      "We stock and supply genuine spare parts for all major agriculture equipment brands. Fast delivery and competitive pricing ensure minimal downtime for your farming operations.",
    icon: <Settings className="h-8 w-8" />,
    features: ["Genuine Parts", "Fast Delivery", "Competitive Pricing", "Wide Inventory"],
    pricing: "As per parts",
    duration: "1-3 days delivery",
    image: "/agriculture-equipment-spare-parts.jpg",
  },
]

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Pune, Maharashtra",
    rating: 5,
    comment:
      "Excellent service! They repaired my brush cutter quickly and it's working like new. Very professional team.",
    service: "Equipment Repair",
  },
  {
    name: "Suresh Patil",
    location: "Nashik, Maharashtra",
    rating: 5,
    comment: "Regular maintenance service is outstanding. My power tiller has been running smoothly for 3 years now.",
    service: "Preventive Maintenance",
  },
  {
    name: "Amit Singh",
    location: "Indore, Madhya Pradesh",
    rating: 5,
    comment: "On-site service saved my harvest season. They came to my farm and fixed the issue immediately.",
    service: "On-Site Service",
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    equipment: "",
    issue: "",
    preferredDate: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Service request:", { ...formData, service: selectedService })
  }

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
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive maintenance and repair services to keep your agriculture equipment running at peak performance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow border-green-700 border-2 rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={"/img/" + service.image.replace("/", "")}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-xl border border-green-200"
                  width={500}
                  height={300}
                />
                <Leaf className="absolute top-2 left-2 h-7 w-7 text-green-600 bg-white rounded-full p-1 shadow-md" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 mt-1">
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 border-green-300">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.duration}
                      </Badge>
                      <span className="text-sm font-medium text-primary">{service.pricing}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-green-900">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Link href={`/services/${service.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                      Learn More
                    </Button>
                  </Link>
                  <div className="relative group flex-1">
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                      Book Service
                    </Button>
                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-green-700 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Fast, certified agriculture service
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Request Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Book a Service</h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and our team will contact you to schedule your service appointment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name *</label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone *</label>
                  <Input
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Location *</label>
                <Input
                  placeholder="City, State"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Required *</label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Equipment Type</label>
                  <Input
                    placeholder="e.g., Brush Cutter, Power Tiller"
                    value={formData.equipment}
                    onChange={(e) => handleInputChange("equipment", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Issue Description</label>
                <Textarea
                  placeholder="Describe the issue or service requirement"
                  value={formData.issue}
                  onChange={(e) => handleInputChange("issue", e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Preferred Date</label>
                <Input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Calendar className="mr-2 h-5 w-5" />
                Request Service
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Service Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Emergency Only</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Service Areas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">We provide services across major cities in India:</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Mumbai</div>
                  <div>• Pune</div>
                  <div>• Nashik</div>
                  <div>• Aurangabad</div>
                  <div>• Nagpur</div>
                  <div>• Indore</div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  *Additional charges may apply for locations beyond 50km
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Need urgent repair during harvest season? We offer 24/7 emergency service.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: +91 98765 43210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{testimonial.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">&quot;{testimonial.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Service Your Equipment?</h2>
          <p className="mb-6 opacity-90">
            Get professional service from certified technicians. Contact us today for a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp for Quick Quote
            </Button>
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
