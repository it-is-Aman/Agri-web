import React from 'react'
import Link from 'next/link'
import { Leaf } from 'lucide-react'

const Footer = () => {
    return (
        <>
            {/* Footer */}
            < footer className="bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-800 text-white py-12 border-t-4 border-amber-400" >
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Leaf className="h-6 w-6 text-amber-400" />
                                <span className="text-lg font-bold">{process.env.NEXT_PUBLIC_NAME_HINDI}</span>
                            </div>
                            <p className="text-emerald-100 text-sm leading-relaxed">
                                12+ सालों से भारतीय किसानों का विश्वसनीय साथी।
                                <br />
                                <em>Your trusted agriculture partner for over 12 years across India.</em>
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-amber-200">उत्पाद | Products</h3>
                            <ul className="space-y-2 text-sm text-emerald-100">
                                <li>
                                    <Link href="#" className="hover:text-amber-200 transition-colors">
                                        Brush Cutters (ब्रश कटर)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-amber-200 transition-colors">
                                        Power Tillers (पावर टिलर)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-amber-200 transition-colors">
                                        Sprayers (स्प्रेयर)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-amber-200 transition-colors">
                                        Spare Parts (स्पेयर पार्ट्स)
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-amber-200">सेवाएं | Services</h3>
                            <ul className="space-y-2 text-sm text-emerald-100">
                                <li>
                                    <Link href="#" className="hover:text-amber-200 transition-colors">
                                        Equipment Repair (मरम्मत)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-amber-200 transition-colors">
                                        Maintenance (रखरखाव)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-amber-200 transition-colors">
                                        Installation (स्थापना)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-amber-200 transition-colors">
                                        24x7 Support (सहायता)
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-amber-200">संपर्क | Contact</h3>
                            <ul className="space-y-2 text-sm text-emerald-100">
                                <li>Phone: +91 98765 43210</li>
                                <li>Email: info@bharatiyakisansahayak.in</li>
                                <li>WhatsApp: +91 98765 43210</li>
                                <li>Address: Mumbai, Maharashtra, India</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-sm text-emerald-200">
                        <p>&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME_HINDI} | {process.env.NEXT_PUBLIC_NAME_ENGLISH}. सभी अधिकार सुरक्षित | All rights reserved.</p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer