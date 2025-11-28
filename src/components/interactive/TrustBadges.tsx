import React from 'react'
import { Shield, Award, Truck, Users, CheckCircle, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface TrustBadge {
    icon: React.ReactNode
    title: string
    subtitle: string
}

const trustBadges: TrustBadge[] = [
    {
        icon: <Shield className="h-5 w-5" />,
        title: "100% Authentic",
        subtitle: "असली उत्पाद"
    },
    {
        icon: <Award className="h-5 w-5" />,
        title: "12+ Years",
        subtitle: "अनुभव"
    },
    {
        icon: <Truck className="h-5 w-5" />,
        title: "Pan-India",
        subtitle: "डिलीवरी"
    },
    {
        icon: <Users className="h-5 w-5" />,
        title: "15,000+",
        subtitle: "खुश किसान"
    },
    {
        icon: <Star className="h-5 w-5" />,
        title: "5-Star",
        subtitle: "रेटिंग"
    },
    {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Warranty",
        subtitle: "गारंटी"
    }
]

export function TrustBadges() {
    return (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {trustBadges.map((badge, index) => (
                <Badge
                    key={index}
                    className="trust-badge hover-lift cursor-default"
                >
                    {badge.icon}
                    <div className="flex flex-col items-start">
                        <span className="text-xs font-bold">{badge.title}</span>
                        <span className="text-[10px] opacity-90">{badge.subtitle}</span>
                    </div>
                </Badge>
            ))}
        </div>
    )
}
