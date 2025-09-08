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
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { number: "12+", label: "सालों का अनुभव | Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "15,000+", label: "खुश किसान | Happy Farmers", icon: <Users className="h-6 w-6" /> },
    { number: "28", label: "राज्यों में सेवा | States Served", icon: <MapPin className="h-6 w-6" /> },
    { number: "85+", label: "उत्पादों की विविधता | Product Varieties", icon: <Wrench className="h-6 w-6" /> },
  ]

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "विश्वसनीयता | Reliability",
      description: "हम ऐसे उपकरण और सेवाएं प्रदान करते हैं जिन पर किसान अपने महत्वपूर्ण कार्यों के लिए भरोसा कर सकते हैं। We provide dependable equipment farmers can trust for their critical operations.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "किफायती मूल्य | Affordability",
      description: "प्रतिस्पर्धी दरों पर गुणवत्तापूर्ण कृषि उपकरण, जो आधुनिक खेती को सभी के लिए सुलभ बनाते हैं। Quality agriculture tools at competitive prices, making modern farming accessible to all.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "पूरे भारत में पहुंच | Pan-India Reach",
      description: "भारत के प्रमुख कृषि क्षेत्रों में व्यापक सेवा नेटवर्क। Extensive service network covering major agricultural regions across India.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "दशकों की उत्कृष्टता | Decade of Excellence",
      description: "कृषि उपकरण उद्योग में 12+ वर्षों का अनुभव | Over 12 years of experience in agriculture equipment industry",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "विशेषज्ञ टीम | Expert Team",
      description: "प्रमाणित तकनीशियन और कृषि उपकरण विशेषज्ञ | Certified technicians and agriculture equipment specialists",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "असली उत्पाद | Genuine Products",
      description: "निर्माता वारंटी के साथ 100% प्रामाणिक उत्पाद | 100% authentic products with manufacturer warranties",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "तेज़ सेवा | Fast Service",
      description: "त्वरित डिलीवरी और तत्काल ग्राहक सहायता | Quick delivery and responsive customer support",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "संपूर्ण समाधान | Complete Solutions",
      description: "बिक्री से सेवा तक, आपकी सभी उपकरण आवश्यकताएं | From sales to service, we handle all your equipment needs",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "ग्राहक संतुष्टि | Customer Satisfaction",
      description: "हजारों खुश ग्राहकों के साथ 5-स्टार रेटेड सेवा | 5-star rated service with thousands of happy customers",
    },
  ]

  const team = [
    {
      name: "राजेश शर्मा | Rajesh Sharma",
      position: "संस्थापक और सीईओ | Founder & CEO",
      experience: "कृषि उद्योग में 15+ वर्ष | 15+ years in agriculture industry",
      image: "/placeholder-user.jpg",
      description: `गुजरात के किसान परिवार से आने वाले राजेश जी ने भारतीय खेती को आधुनिक बनाने के विज़न के साथ ${process.env.NEXT_PUBLIC_NAME_HINDI} की शुरुआत की। Rajesh, from a Gujarat farming family, started ${process.env.NEXT_PUBLIC_NAME_ENGLISH} with a vision to modernize Indian farming.`,
    },
    {
      name: "प्रिया पटेल | Priya Patel",
      position: "सेवा प्रबंधक | Service Manager",
      experience: "उपकरण सेवा में 8+ वर्ष | 8+ years in equipment service",
      image: "/placeholder-user.jpg",
      description: "पूरे भारत में त्वरित और विश्वसनीय उपकरण रखरखाव सुनिश्चित करने वाली हमारी सेवा टीम का नेतृत्व करती हैं। Leads our service team ensuring quick and reliable equipment maintenance across India.",
    },
    {
      name: "अमित कुमार | Amit Kumar",
      position: "तकनीकी प्रमुख | Technical Head",
      experience: "उपकरण मरम्मत में 12+ वर्ष | 12+ years in equipment repair",
      image: "/placeholder-user.jpg",
      description: "कृषि उपकरण मरम्मत और रखरखाव में विशेषज्ञता रखने वाले विशेषज्ञ तकनीशियन। Expert technician specializing in agriculture equipment repair and maintenance.",
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
                <Leaf className="h-8 w-8 text-emerald-600" />
                <span className="text-xl font-bold text-foreground">{process.env.NEXT_PUBLIC_NAME_HINDI}</span>
              </Link>
            </div>

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

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 border-emerald-300 shadow-sm">
              2012 से स्थापित | Established Since 2012
            </Badge>
            <h1 className="text-4xl font-bold text-foreground leading-tight text-balance">
              <span className="bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent">
                भारतीय किसानों को सशक्त बनाना
              </span>
              <br />
              <span className="text-amber-700">Empowering Indian Farmers</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              कृषि उपकरण व्यवसाय में 12+ वर्षों के साथ, हम किसानों को स्मार्ट तरीके से काम करने में मदद करते हैं। 
              हमारा मिशन विश्वसनीय, किफायती उपकरण और विशेषज्ञ सेवाएं प्रदान करना है जो पूरे भारत में कृषि उत्पादकता बढ़ाते हैं।
              <br />
              <em className="text-emerald-700">With 12+ years in agriculture tools business, we help farmers work smarter. 
              Our mission is to provide reliable, affordable equipment and expert services.</em>
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-muted-foreground">15,000+ किसानों का भरोसा</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span className="text-sm text-muted-foreground">28 राज्यों में सेवा</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-2xl blur-xl opacity-20"></div>
            <Image
              src="/img/placeholder.jpg"
              alt={`${process.env.NEXT_PUBLIC_NAME_ENGLISH} team with agriculture equipment in Indian farm`}
              className="relative rounded-2xl shadow-2xl border-4 border-white"
              layout="fill"
              objectFit="cover"
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
              From a small shop to a trusted name across India - here&apos;s how we grew with our farming community
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
              <Image
                src="/agriculture-equipment-shop-history.jpg"
                alt="AgriTools India shop evolution"
                className="rounded-lg shadow-lg"
                width={500}
                height={300}
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
              The dedicated professionals behind AgriTools India&apos;s success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-green-700 border-2 rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={"/img/" + member.image.replace("/", "")}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl border border-green-200"
                    layout="fill"
                    objectFit="cover"
                  />
                  <Leaf className="absolute top-2 left-2 h-7 w-7 text-green-600 bg-white rounded-full p-1 shadow-md" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    {member.name}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary">{member.position}</CardDescription>
                  <Badge variant="secondary" className="w-fit bg-green-100 text-green-800 border-green-300">
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
                To become India&apos;s most trusted agriculture equipment partner, driving the modernization of farming
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
