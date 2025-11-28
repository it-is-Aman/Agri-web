"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageCircle, Leaf, ArrowLeft, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    requirement: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        requirement: "",
        message: "",
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "फोन कॉल | Phone Call",
      subtitle: "तुरंत बात करें | Talk Immediately",
      value: "+91 98765 43210",
      description: "सुबह 8 बजे से रात 9 बजे तक | 8 AM to 9 PM daily",
      action: "कॉल करें | Call Now",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp चैट | WhatsApp Chat",
      subtitle: "त्वरित उत्तर | Quick Response",
      value: "+91 98765 43210",
      description: "24x7 उपलब्ध | Available 24x7",
      action: "मैसेज भेजें | Send Message",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "ईमेल | Email",
      subtitle: "विस्तृत जानकारी | Detailed Information",
      value: "info@bharatiyakisansahayak.in",
      description: "24 घंटे में जवाब | Response within 24 hours",
      action: "ईमेल भेजें | Send Email",
    },
  ]

  const officeLocations = [
    {
      city: "मुंबई मुख्यालय | Mumbai Headquarters",
      address: "Shop No. 15, Agriculture Equipment Market,\nAndheri West, Mumbai - 400058",
      phone: "+91 98765 43210",
      hours: "सुबह 9 - शाम 7 | 9 AM - 7 PM",
      services: ["मुख्य गोदाम", "मरम्मत केंद्र", "स्पेयर पार्ट्स"],
    },
    {
      city: "पुणे शाखा | Pune Branch",
      address: "Plot No. 8, Krishi Bhavan,\nKothrud, Pune - 411038",
      phone: "+91 97654 32100",
      hours: "सुबह 9 - शाम 6 | 9 AM - 6 PM",
      services: ["सेवा केंद्र", "प्रदर्शन कक्ष", "तकनीकी सहायता"],
    },
    {
      city: "नासिक केंद्र | Nashik Center",
      address: "Near Krishi Market,\nGangapur Road, Nashik - 422013",
      phone: "+91 96543 21000",
      hours: "सुबह 10 - शाम 6 | 10 AM - 6 PM",
      services: ["मोबाइल सर्विस", "डेमो सेंटर", "ट्रेनिंग"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-amber-50/30 pattern-diagonal">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-responsive-lg font-bold text-foreground mb-4">
            <span className="text-emerald-700">
              संपर्क करें
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Contact Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            हमसे संपर्क करें और अपनी कृषि उपकरण की जरूरतों के बारे में बात करें
            <br />
            <em className="text-emerald-600">Connect with us to discuss your agriculture equipment needs</em>
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover-lift border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full w-fit border-2 border-emerald-300 shadow-lg hover-glow">
                  <div className="text-emerald-700">{method.icon}</div>
                </div>
                <CardTitle className="text-xl">
                  {method.title}
                </CardTitle>
                <CardDescription className="text-emerald-800 font-medium">{method.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-lg font-bold text-emerald-700 bg-gradient-to-r from-emerald-100 to-amber-100 px-4 py-2 rounded-full">
                  {method.value}
                </div>
                <p className="text-sm text-emerald-900">{method.description}</p>
                <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-full border border-amber-300 shadow-md hover-lift">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form & Office Locations */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-2 border-emerald-200 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Leaf className="h-6 w-6 text-emerald-600" />
                संपर्क फॉर्म | Contact Form
              </CardTitle>
              <CardDescription>
                अपनी आवश्यकताओं के बारे में बताएं और हम 24 घंटे में संपर्क करेंगे
                <br />
                <em className="text-emerald-600">Tell us your requirements and we&apos;ll contact within 24 hours</em>
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-emerald-700 mb-2">
                    धन्यवाद! | Thank You!
                  </h3>
                  <p className="text-emerald-600">
                    हमें आपका संदेश मिल गया है। हम जल्दी ही संपर्क करेंगे।
                    <br />
                    <em>We received your message. We&apos;ll contact you soon.</em>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-emerald-800 mb-2">
                        नाम | Name *
                      </label>
                      <Input
                        placeholder="आपका नाम | Your Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="border-emerald-300 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-emerald-800 mb-2">
                        फोन | Phone *
                      </label>
                      <Input
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="border-emerald-300 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-emerald-800 mb-2">
                        ईमेल | Email
                      </label>
                      <Input
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-emerald-300 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-emerald-800 mb-2">
                        शहर | City *
                      </label>
                      <Input
                        placeholder="आपका शहर | Your City"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                        className="border-emerald-300 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-2">
                      आवश्यकता | Requirement *
                    </label>
                    <Select onValueChange={(value) => handleInputChange("requirement", value)}>
                      <SelectTrigger className="border-emerald-300 focus:border-emerald-500">
                        <SelectValue placeholder="अपनी आवश्यकता चुनें | Select your requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brush-cutter">Brush Cutter (ब्रश कटर)</SelectItem>
                        <SelectItem value="power-tiller">Power Tiller (पावर टिलर)</SelectItem>
                        <SelectItem value="sprayer">Sprayer (स्प्रेयर)</SelectItem>
                        <SelectItem value="spare-parts">Spare Parts (स्पेयर पार्ट्स)</SelectItem>
                        <SelectItem value="repair">Repair Service (मरम्मत सेवा)</SelectItem>
                        <SelectItem value="maintenance">Maintenance (रखरखाव)</SelectItem>
                        <SelectItem value="other">Other (अन्य)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-2">
                      संदेश | Message
                    </label>
                    <Textarea
                      placeholder="अपनी आवश्यकताओं के बारे में विस्तार से बताएं | Describe your requirements in detail"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="border-emerald-300 focus:border-emerald-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border border-amber-300 shadow-md"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    संदेश भेजें | Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Office Locations */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              हमारे कार्यालय | Our Offices
            </h2>
            {officeLocations.map((location, index) => (
              <Card key={index} className="border-2 border-emerald-200 rounded-2xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-700 flex items-center gap-2">
                    <Leaf className="h-5 w-5" />
                    {location.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-emerald-900 whitespace-pre-line">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-emerald-600" />
                    <p className="text-sm text-emerald-900">{location.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <p className="text-sm text-emerald-900">{location.hours}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {location.services.map((service, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section Placeholder */}
        <Card className="border-2 border-emerald-200 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MapPin className="h-6 w-6 text-emerald-600" />
              हमारा स्थान | Our Location
            </CardTitle>
            <CardDescription>
              मुंबई मुख्यालय का स्थान | Mumbai Headquarters Location
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-2xl p-8 text-center border-2 border-emerald-200">
              <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-emerald-700 mb-2">Google Maps</h3>
              <p className="text-emerald-600 mb-4">
                व्यावस्थिक मानचित्र यहाँ एम्बेड होगा | Interactive map will be embedded here
              </p>
              <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                मानचित्र में देखें | View on Maps
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <Button size="lg" className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl border-2 border-amber-300 animate-bounce-subtle hover-glow">
            <MessageCircle className="h-6 w-6" />
          </Button>
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 text-sm bg-emerald-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            तुरंत WhatsApp करें | WhatsApp Now
          </span>
        </div>
      </div>
    </div>
  )
}
