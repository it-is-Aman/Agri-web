import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  Leaf,
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  BookOpen,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "How to Maintain a Brush Cutter for 5+ Years",
    excerpt:
      "Essential maintenance tips to extend your brush cutter's lifespan and ensure optimal performance throughout farming seasons.",
    content: `
# How to Maintain a Brush Cutter for 5+ Years

A well-maintained brush cutter can serve you faithfully for over 5 years, providing reliable performance season after season. Here's your complete guide to keeping your brush cutter in top condition.

## Daily Maintenance (After Each Use)

### 1. Clean the Equipment
- Remove grass, debris, and dirt from the cutting head
- Wipe down the engine housing with a clean cloth
- Check for any visible damage or loose parts

### 2. Inspect the Cutting Blade
- Look for chips, cracks, or excessive wear
- Ensure the blade is properly secured
- Replace if damaged to prevent accidents

### 3. Check Fuel and Oil Levels
- Top up fuel if needed (use fresh fuel only)
- Check 2-stroke oil levels in mixed fuel systems
- Inspect for fuel leaks around the tank

## Weekly Maintenance

### 1. Air Filter Cleaning
- Remove and clean the air filter with compressed air
- Replace if excessively dirty or damaged
- A clean filter improves engine performance and fuel efficiency

### 2. Spark Plug Inspection
- Check spark plug condition monthly
- Clean carbon deposits with a wire brush
- Replace annually or as needed

### 3. Cutting Head Maintenance
- Inspect the cutting head for wear
- Lubricate moving parts as specified in manual
- Ensure proper blade alignment

## Monthly Deep Maintenance

### 1. Engine Servicing
- Check engine compression
- Inspect exhaust port for carbon buildup
- Clean cooling fins to prevent overheating

### 2. Handle and Controls
- Check throttle cable operation
- Inspect safety switches and guards
- Tighten all bolts and connections

### 3. Fuel System
- Replace fuel filter if equipped
- Clean fuel tank if contaminated
- Check fuel lines for cracks or leaks

## Seasonal Storage Tips

### Before Storage (End of Season)
1. **Fuel System**: Either drain completely or use fuel stabilizer
2. **Engine**: Run engine until fuel is consumed
3. **Cleaning**: Thoroughly clean entire unit
4. **Lubrication**: Apply light oil to metal surfaces
5. **Storage**: Store in dry, covered area

### Before First Use (Start of Season)
1. **Inspection**: Complete visual inspection
2. **Fresh Fuel**: Use only fresh fuel mixture
3. **Test Run**: Start and let engine warm up
4. **Safety Check**: Verify all safety features work

## Common Issues and Solutions

### Engine Won't Start
- Check fuel quality and mixture ratio
- Inspect spark plug condition
- Verify air filter cleanliness
- Check for flooded engine

### Poor Cutting Performance
- Sharpen or replace blade
- Check engine RPM at full throttle
- Inspect for damaged cutting head
- Verify proper blade installation

### Excessive Vibration
- Check blade balance and condition
- Inspect engine mounts
- Look for loose bolts or connections
- Verify proper blade installation

## Professional Service Schedule

While regular maintenance can be done by the operator, certain services require professional attention:

- **Annual Service**: Complete engine tune-up
- **Blade Sharpening**: Professional sharpening every 25-30 hours
- **Major Repairs**: Any engine internal work
- **Warranty Service**: Always use authorized service centers

## Cost-Saving Maintenance Tips

1. **Buy Quality Parts**: Genuine parts last longer
2. **Preventive Care**: Regular maintenance prevents costly repairs
3. **Proper Storage**: Extends equipment life significantly
4. **Operator Training**: Proper use reduces wear and damage

## Conclusion

Regular maintenance is the key to getting 5+ years of reliable service from your brush cutter. Follow this schedule, use quality parts, and don't skip the small details. A well-maintained brush cutter not only lasts longer but also performs better, uses less fuel, and operates more safely.

Remember: When in doubt, consult your owner's manual or contact a qualified service technician. Proper maintenance is an investment in your equipment's longevity and your farming success.
    `,
    category: "Maintenance",
    author: "Rajesh Sharma",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/blog-brush-cutter-maintenance-guide.jpg",
    tags: ["Brush Cutter", "Maintenance", "Equipment Care", "Farming Tips"],
    featured: true,
  },
  {
    id: 2,
    title: "Top 5 Agriculture Tools Every Farmer Needs",
    excerpt:
      "Discover the essential agriculture tools that can transform your farming efficiency and productivity in Indian conditions.",
    content: `
# Top 5 Agriculture Tools Every Farmer Needs

Modern farming requires the right tools to maximize efficiency and productivity. Here are the 5 essential agriculture tools that every farmer should consider for their operations.

## 1. Power Tiller - The Versatile Workhorse

### Why You Need It
A power tiller is perhaps the most versatile tool for small to medium farms. It can handle multiple tasks that would otherwise require different machines or extensive manual labor.

### Key Benefits
- **Soil Preparation**: Breaks up hard soil and prepares seedbeds
- **Weed Control**: Cultivates between crop rows
- **Multiple Attachments**: Can be fitted with various implements
- **Fuel Efficient**: More economical than larger tractors for small farms

### Choosing the Right Power Tiller
- **5-7 HP**: Suitable for farms up to 2 acres
- **7-10 HP**: Ideal for 2-5 acre farms
- **10+ HP**: Best for larger operations

## 2. Brush Cutter - Essential for Land Management

### Applications
- Clearing overgrown areas
- Maintaining field boundaries
- Cutting grass and weeds
- Preparing land for cultivation

### Types Available
- **Handheld Models**: Lightweight, easy to maneuver
- **Backpack Models**: More power, longer operation time
- **Walk-Behind Models**: Heavy-duty for large areas

### Selection Criteria
- Engine size (25cc to 52cc)
- Cutting width requirements
- Terrain type and vegetation density

## 3. Agricultural Sprayer - Crop Protection Essential

### Why It's Crucial
Proper application of pesticides, herbicides, and fertilizers is critical for crop health and yield. A good sprayer ensures uniform coverage and efficient use of chemicals.

### Types of Sprayers
- **Manual Sprayers**: 8-16L capacity, cost-effective
- **Battery Sprayers**: Consistent pressure, less fatigue
- **Engine Sprayers**: High capacity, suitable for large areas

### Key Features to Look For
- Adjustable nozzles for different spray patterns
- Comfortable straps and ergonomic design
- Chemical-resistant materials
- Easy maintenance and cleaning

## 4. Irrigation System - Water Management

### Importance of Proper Irrigation
Water is the lifeline of agriculture. Efficient irrigation systems can:
- Reduce water wastage by up to 50%
- Improve crop yields significantly
- Allow farming in water-scarce areas
- Reduce labor costs

### Modern Irrigation Options
- **Drip Irrigation**: Most water-efficient, suitable for all crops
- **Sprinkler Systems**: Good for field crops and orchards
- **Micro-Sprinklers**: Ideal for fruit trees and vegetables

## 5. Soil Testing Kit - Foundation of Good Farming

### Why Soil Testing Matters
Understanding your soil is crucial for:
- Determining nutrient requirements
- Optimizing fertilizer use
- Preventing over-fertilization
- Improving crop yields

### What to Test For
- **pH Levels**: Affects nutrient availability
- **Nitrogen, Phosphorus, Potassium**: Primary nutrients
- **Organic Matter**: Soil health indicator
- **Micronutrients**: Iron, zinc, manganese, etc.

### Testing Options
- **Basic Kits**: pH and NPK testing
- **Advanced Kits**: Include micronutrients
- **Professional Testing**: Laboratory analysis for comprehensive results

## Investment Priorities for New Farmers

### Phase 1: Essential Start (₹50,000 - ₹1,00,000)
1. Manual sprayer (₹3,000 - ₹8,000)
2. Basic soil testing kit (₹2,000 - ₹5,000)
3. Hand tools and small implements (₹10,000 - ₹20,000)
4. Small brush cutter (₹12,000 - ₹25,000)

### Phase 2: Mechanization (₹1,00,000 - ₹3,00,000)
1. Power tiller 7HP (₹45,000 - ₹80,000)
2. Battery sprayer (₹8,000 - ₹15,000)
3. Drip irrigation system (₹20,000 - ₹50,000 per acre)

### Phase 3: Advanced Systems (₹3,00,000+)
1. Larger power tiller or compact tractor
2. Advanced irrigation systems
3. Specialized equipment for specific crops

## Maintenance and Care Tips

### Regular Maintenance Schedule
- **Daily**: Clean after use, check for damage
- **Weekly**: Lubricate moving parts, check fluid levels
- **Monthly**: Detailed inspection, replace worn parts
- **Seasonally**: Professional servicing, major repairs

### Cost-Effective Maintenance
- Use genuine spare parts
- Follow manufacturer guidelines
- Train operators properly
- Keep detailed maintenance records

## Return on Investment

### Calculating ROI
Consider these factors when evaluating equipment purchases:
- **Labor Savings**: Reduced manual work costs
- **Time Efficiency**: Faster completion of tasks
- **Yield Improvement**: Better crop management results
- **Operating Costs**: Fuel, maintenance, and repairs

### Typical ROI Timeline
- **Power Tiller**: 2-3 years
- **Irrigation System**: 3-5 years
- **Sprayers**: 1-2 years
- **Brush Cutter**: 2-4 years

## Conclusion

Investing in the right agriculture tools is crucial for modern farming success. Start with the basics and gradually build your equipment inventory based on your farm's specific needs and growth. Remember, quality equipment with proper maintenance will serve you for many years and significantly improve your farming efficiency and profitability.

Choose tools that match your farm size, crop types, and budget. When in doubt, consult with agriculture equipment experts who can provide personalized recommendations based on your specific requirements.
    `,
    category: "Equipment Guide",
    author: "Priya Patel",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    image: "/blog-essential-agriculture-tools-india.jpg",
    tags: ["Agriculture Tools", "Farming Equipment", "Productivity", "India"],
    featured: true,
  },
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    return {
      title: "Post Not Found - AgriTools India Blog",
    }
  }

  return {
    title: `${post.title} - AgriTools India Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="mb-6">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6 text-pretty">{post.excerpt}</p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover"
              width={640}
              height={360} />
          </div>
        </div>

        {/* Article Content */}
        <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-line">{post.content}</div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 p-6 bg-card rounded-lg border">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{post.author}</h3>
                  <p className="text-muted-foreground text-sm mb-2">Agriculture Equipment Expert</p>
                  <p className="text-sm">
                    {post.author} has over 10 years of experience in agriculture equipment and farming practices. He
                    regularly shares insights on equipment maintenance, farming techniques, and agricultural
                    innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Table of Contents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>In This Article</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2 text-sm">
                  <a
                    href="#daily-maintenance"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Daily Maintenance
                  </a>
                  <a
                    href="#weekly-maintenance"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Weekly Maintenance
                  </a>
                  <a
                    href="#monthly-maintenance"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Monthly Deep Maintenance
                  </a>
                  <a
                    href="#seasonal-storage"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Seasonal Storage Tips
                  </a>
                  <a href="#common-issues" className="block text-muted-foreground hover:text-primary transition-colors">
                    Common Issues
                  </a>
                </nav>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card>
              <CardHeader>
                <CardTitle>Related Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="flex space-x-3">
                    <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                        width={640}
                        height={360}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/blog/${relatedPost.id}`}>
                        <h4 className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1">{relatedPost.readTime}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardHeader>
                <CardTitle>Need Equipment Service?</CardTitle>
                <CardDescription>
                  Our experts can help maintain your agriculture equipment for optimal performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Our Experts
                </Button>
                <Link href="/services">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Our Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      width={640}
                      height={360}
                    />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit">{relatedPost.category}</Badge>
                    <CardTitle className="text-lg line-clamp-2">{relatedPost.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{relatedPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
