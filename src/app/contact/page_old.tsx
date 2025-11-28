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
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: `${process.env.NEXT_PUBLIC_PHONE}`,
      action: "Call Now",
      available: "Mon-Sat, 9 AM - 6 PM",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Quick responses via WhatsApp",
      contact: `${process.env.NEXT_PUBLIC_PHONE}`,
      action: "Message Us",
      available: "24/7 Available",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Detailed inquiries and quotes",
      contact: "info@agritools.in",
      action: "Send Email",
      available: "Response within 24 hours",
    },
  ]

  const offices = [
    {
      city: "Mumbai",
      address: "Shop No. 15, Agriculture Market, Andheri East, Mumbai - 400069",
      phone: `${process.env.NEXT_PUBLIC_PHONE}`,
      timing: "Mon-Sat: 9 AM - 6 PM",
    },
    {
      city: "Pune",
      address: "Plot No. 25, Krishi Bazaar, Hadapsar, Pune - 411028",
      phone: "+91 98765 43211",
      timing: "Mon-Sat: 9 AM - 6 PM",
    },
    {
      city: "Nashik",
      address: "Gala No. 8, Farmers Market, College Road, Nashik - 422005",
      phone: "+91 98765 43212",
      timing: "Mon-Sat: 9 AM - 6 PM",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our agriculture equipment experts. We&apos;re here to help you find the right tools and
            services for your farming needs.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <div className="text-primary">{method.icon}</div>
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground">{method.contact}</p>
                  <p className="text-sm text-muted-foreground">{method.available}</p>
                </div>
                <Button className="w-full">{method.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

            {isSubmitted ? (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 text-green-700">
                    <CheckCircle className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Message Sent Successfully!</h3>
                      <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">City *</label>
                    <Input
                      placeholder="Your city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Requirement Type *</label>
                  <Select
                    value={formData.requirement}
                    onValueChange={(value) => handleInputChange("requirement", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your requirement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                      <SelectItem value="service-request">Service Request</SelectItem>
                      <SelectItem value="spare-parts">Spare Parts</SelectItem>
                      <SelectItem value="bulk-order">Bulk Order</SelectItem>
                      <SelectItem value="dealership">Dealership Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea
                    placeholder="Please describe your requirement in detail..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Map & Office Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Visit Our Offices</h3>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Google Maps integration would go here</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{office.city} Office</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">{office.timing}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your service areas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide services across Maharashtra, Madhya Pradesh, and Gujarat. For other states, please contact
                  us for availability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide warranty on products?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes, all our products come with manufacturer warranty ranging from 1-3 years depending on the product
                  type.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I get on-site service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer on-site service within 50km of our office locations. Additional charges may apply for
                  distant locations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer bulk discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer attractive discounts for bulk orders. Contact us with your requirements for a custom
                  quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 opacity-90">
            Contact our agriculture equipment experts today for personalized recommendations and quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call: {process.env.NEXT_PUBLIC_PHONE}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Now
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