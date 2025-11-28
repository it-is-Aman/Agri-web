'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

interface Testimonial {
    id: number
    name: string
    nameHindi: string
    location: string
    rating: number
    text: string
    textHindi: string
    image?: string
    verified: boolean
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Ramesh Patel",
        nameHindi: "रमेश पटेल",
        location: "Gujarat",
        rating: 5,
        text: "Excellent quality brush cutter! Works perfectly in my 10-acre farm. The service team is very helpful.",
        textHindi: "उत्कृष्ट गुणवत्ता का ब्रश कटर! मेरे 10 एकड़ के खेत में बिल्कुल सही काम करता है। सेवा टीम बहुत मददगार है।",
        image: "/img/placeholder-user.jpg",
        verified: true
    },
    {
        id: 2,
        name: "Suresh Kumar",
        nameHindi: "सुरेश कुमार",
        location: "Punjab",
        rating: 5,
        text: "Best prices and genuine products. I bought a power tiller last year, still running smoothly!",
        textHindi: "सर्वोत्तम कीमतें और असली उत्पाद। मैंने पिछले साल एक पावर टिलर खरीदा था, अभी भी सुचारू रूप से चल रहा है!",
        image: "/img/placeholder-user.jpg",
        verified: true
    },
    {
        id: 3,
        name: "Lakshmi Devi",
        nameHindi: "लक्ष्मी देवी",
        location: "Karnataka",
        rating: 5,
        text: "Very satisfied with the sprayer quality. The maintenance service is prompt and professional.",
        textHindi: "स्प्रेयर की गुणवत्ता से बहुत संतुष्ट हूं। रखरखाव सेवा त्वरित और पेशेवर है।",
        image: "/img/placeholder-user.jpg",
        verified: true
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-16 bg-gradient-to-br from-white via-emerald-50/30 to-amber-50/30 pattern-dots">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-responsive-lg font-bold text-foreground mb-4">
                        <span className="text-emerald-700">किसानों की आवाज़</span> | Farmers' Voice
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        हजारों संतुष्ट किसानों का भरोसा | Trusted by thousands of satisfied farmers
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.id}
                            className="hover-lift border-2 border-emerald-200 hover:border-emerald-400 rounded-2xl bg-white/80 backdrop-blur-sm animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <Avatar className="h-12 w-12 border-2 border-emerald-300">
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                            <AvatarFallback className="bg-emerald-100 text-emerald-700">
                                                {testimonial.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                                            <p className="text-sm text-emerald-600">{testimonial.nameHindi}</p>
                                            <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                                        </div>
                                    </div>
                                    <Quote className="h-8 w-8 text-emerald-200" />
                                </div>

                                <div className="flex mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground italic">"{testimonial.textHindi}"</p>
                                    <p className="text-xs text-muted-foreground">"{testimonial.text}"</p>
                                </div>

                                {testimonial.verified && (
                                    <div className="mt-4 flex items-center space-x-1 text-emerald-600">
                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs font-medium">Verified Purchase</span>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
