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
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WhatsAppWidget } from "@/components/interactive/WhatsAppWidget"

export default function AboutPage() {
  const stats = [
    { number: "12+", label: "Years Experience", labelHindi: "वर्षों का अनुभव", icon: <Award className="h-6 w-6" /> },
    { number: "15,000+", label: "Happy Farmers", labelHindi: "खुश किसान", icon: <Users className="h-6 w-6" /> },
    { number: "28", label: "States Served", labelHindi: "राज्य कवर", icon: <MapPin className="h-6 w-6" /> },
    { number: "85+", label: "Product Varieties", labelHindi: "उत्पाद विविधता", icon: <Wrench className="h-6 w-6" /> },
  ]

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "विश्वसनीयता",
      titleEnglish: "Reliability",
      description: "हम ऐसे उपकरण और सेवाएं प्रदान करते हैं जिन पर किसान अपने महत्वपूर्ण कार्यों के लिए भरोसा कर सकते हैं।",
      descriptionEnglish: "We provide dependable equipment farmers can trust for their critical operations.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "किफायती मूल्य",
      titleEnglish: "Affordability",
      description: "प्रतिस्पर्धी दरों पर गुणवत्तापूर्ण कृषि उपकरण, जो आधुनिक खेती को सभी के लिए सुलभ बनाते हैं।",
      descriptionEnglish: "Quality agriculture tools at competitive prices, making modern farming accessible to all.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "पूरे भारत में पहुंच",
      titleEnglish: "Pan-India Reach",
      description: "भारत के प्रमुख कृषि क्षेत्रों में व्यापक सेवा नेटवर्क।",
      descriptionEnglish: "Extensive service network covering major agricultural regions across India.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "दशकों की उत्कृष्टता",
      titleEnglish: "Decade of Excellence",
      description: "कृषि उपकरण उद्योग में 12+ वर्षों का अनुभव",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "विशेषज्ञ टीम",
      titleEnglish: "Expert Team",
      description: "प्रमाणित तकनीशियन और कृषि उपकरण विशेषज्ञ",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "असली उत्पाद",
      titleEnglish: "Genuine Products",
      description: "निर्माता वारंटी के साथ 100% प्रामाणिक उत्पाद",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "तेज़ सेवा",
      titleEnglish: "Fast Service",
      description: "त्वरित डिलीवरी और तत्काल ग्राहक सहायता",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "संपूर्ण समाधान",
      titleEnglish: "Complete Solutions",
      description: "बिक्री से सेवा तक, आपकी सभी उपकरण आवश्यकताएं",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "ग्राहक संतुष्टि",
      titleEnglish: "Customer Satisfaction",
      description: "हजारों खुश ग्राहकों के साथ 5-स्टार रेटेड सेवा",
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 animate-fade-in">
          <div className="space-y-6 animate-slide-in-left">
            <Badge className="bg-gradient-to-r from-saffron to-amber-500 text-white border-none shadow-lg hover-lift">
              <Award className="h-4 w-4 mr-1" />
              2012 से स्थापित | Established Since 2012
            </Badge>
            <h1 className="text-responsive-xl font-bold text-foreground leading-tight text-balance">
              <span className="text-emerald-700">
                भारतीय किसानों को सशक्त बनाना
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Empowering Indian Farmers</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              कृषि उपकरण व्यवसाय में 12+ वर्षों के साथ, हम किसानों को स्मार्ट तरीके से काम करने में मदद करते हैं।
              हमारा मिशन विश्वसनीय, किफायती उपकरण और विशेषज्ञ सेवाएं प्रदान करना है जो पूरे भारत में कृषि उत्पादकता बढ़ाते हैं।
              <br />
              <em className="text-emerald-700">With 12+ years in agriculture tools business, we help farmers work smarter.
                Our mission is to provide reliable, affordable equipment and expert services.</em>
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <CheckCircle className="h-5 w-5" />, text: "15,000+ किसानों का भरोसा" },
                { icon: <MapPin className="h-5 w-5" />, text: "28 राज्यों में सेवा" },
                { icon: <Star className="h-5 w-5" />, text: "5-Star रेटिंग" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                  <div className="text-emerald-600">{item.icon}</div>
                  <span className="text-sm font-medium text-emerald-900">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover-scale">
              <Image
                src="/img/farmer-using-brush-cutter-in-green-agricultural-fi.jpg"
                alt="AgriWeb team with agriculture equipment in Indian farm"
                className="w-full h-auto"
                width={600}
                height={400}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">भारत का भरोसेमंद साथी</p>
                    <p className="text-xs text-muted-foreground">India's Trusted Partner</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-lift border-2 border-emerald-200 hover:border-emerald-400 rounded-2xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full w-fit border-2 border-emerald-300">
                  <div className="text-emerald-700">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-emerald-700 mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.labelHindi}</div>
                <div className="text-xs text-emerald-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-lg font-bold text-foreground mb-4">
              <span className="text-emerald-700">हमारे मूल्य</span> | Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              वे सिद्धांत जो कृषि समुदाय के लिए हमारे सभी कार्यों का मार्गदर्शन करते हैं
              <br />
              <em className="text-emerald-600">The principles that guide everything we do for the farming community</em>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full w-fit border-2 border-emerald-300 shadow-lg hover-glow">
                    <div className="text-emerald-700">{value.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <p className="text-sm text-emerald-600 font-medium">{value.titleEnglish}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-emerald-900 mb-2">{value.description}</CardDescription>
                  <p className="text-xs text-muted-foreground">{value.descriptionEnglish}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-lg font-bold text-foreground mb-4">
              <span className="text-emerald-700">हमें क्यों चुनें?</span> | Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              क्या हमें पूरे भारत में हजारों किसानों की पसंदीदा पसंद बनाता है
              <br />
              <em className="text-emerald-600">What makes us the preferred choice for thousands of farmers across India</em>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover-lift border-2 border-emerald-200 hover:border-emerald-400 rounded-2xl bg-white/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg border border-emerald-300">
                      <div className="text-emerald-700">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-xs text-emerald-600 font-medium mb-2">{item.titleEnglish}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 hover-lift animate-fade-in">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl border-2 border-emerald-300">
                  <Target className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-emerald-700">हमारा मिशन</CardTitle>
                  <p className="text-sm text-emerald-600">Our Mission</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-3">
                भारतीय किसानों को उच्च गुणवत्ता, किफायती कृषि उपकरण और विशेषज्ञ सेवाओं के साथ सशक्त बनाना जो उत्पादकता बढ़ाते हैं, मैनुअल श्रम को कम करते हैं, और पूरे देश में टिकाऊ खेती प्रथाओं में योगदान करते हैं।
              </p>
              <p className="text-sm text-emerald-700 italic">
                To empower Indian farmers with high-quality, affordable agriculture equipment and expert services that enhance productivity, reduce manual labor, and contribute to sustainable farming practices across the nation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl border-2 border-emerald-300">
                  <Lightbulb className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-emerald-700">हमारी दृष्टि</CardTitle>
                  <p className="text-sm text-emerald-600">Our Vision</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-3">
                भारत का सबसे विश्वसनीय कृषि उपकरण साझेदार बनना, नवीन उपकरणों, असाधारण सेवा, और किसान सफलता के प्रति अटूट प्रतिबद्धता के माध्यम से खेती के आधुनिकीकरण को बढ़ावा देना।
              </p>
              <p className="text-sm text-emerald-700 italic">
                To become India's most trusted agriculture equipment partner, driving the modernization of farming through innovative tools, exceptional service, and unwavering commitment to farmer success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800 text-white rounded-2xl p-8 text-center shadow-xl animate-fade-in pattern-dots">
          <h2 className="text-responsive-md font-bold mb-4">
            हमारे बढ़ते परिवार में शामिल होने के लिए तैयार हैं? | Ready to Join Our Growing Family?
          </h2>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            AgriWeb के अंतर का अनुभव करें। गुणवत्ता उपकरण और विशेषज्ञ सेवा के लिए आज ही हमसे संपर्क करें।
            <br />
            <em className="text-amber-200">Experience the AgriWeb difference. Contact us today for quality equipment and expert service.</em>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-amber-50 border-2 border-amber-300 shadow-lg hover-lift">
                <Users className="mr-2 h-5 w-5" />
                Contact Our Team
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 shadow-lg hover-lift"
              >
                <Wrench className="mr-2 h-5 w-5" />
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  )
}
