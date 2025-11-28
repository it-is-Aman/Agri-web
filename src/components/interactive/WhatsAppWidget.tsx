'use client'

import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WhatsAppWidgetProps {
    phoneNumber?: string
    defaultMessage?: string
    position?: 'bottom-right' | 'bottom-left'
}

export function WhatsAppWidget({
    phoneNumber = '+919876543210',
    defaultMessage = 'नमस्ते! मुझे आपके उत्पादों के बारे में जानकारी चाहिए। Hello! I would like to know more about your products.',
    position = 'bottom-right'
}: WhatsAppWidgetProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(defaultMessage)
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    const positionClasses = position === 'bottom-right'
        ? 'bottom-6 right-6'
        : 'bottom-6 left-6'

    return (
        <div className={`fixed ${positionClasses} z-50`}>
            <div className="relative group">
                <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl border-2 border-amber-300 animate-bounce-subtle hover-glow"
                >
                    <MessageCircle className="h-6 w-6" />
                </Button>

                {/* Tooltip */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 text-sm bg-emerald-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    तुरंत संपर्क करें | Contact Now
                </span>

                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
            </div>
        </div>
    )
}
