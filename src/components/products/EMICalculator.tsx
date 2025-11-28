'use client'

import React from 'react'
import { Calculator, IndianRupee } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export function EMICalculator({ productPrice = 0 }: { productPrice?: number }) {
    const [price, setPrice] = React.useState(productPrice)
    const [downPayment, setDownPayment] = React.useState(0)
    const [tenure, setTenure] = React.useState(12)
    const [interestRate, setInterestRate] = React.useState(12)

    const calculateEMI = () => {
        const principal = price - downPayment
        const monthlyRate = interestRate / 12 / 100
        const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenure) / (Math.pow(1 + monthlyRate, tenure) - 1)
        return isNaN(emi) ? 0 : emi
    }

    const emi = calculateEMI()
    const totalAmount = emi * tenure + downPayment
    const totalInterest = totalAmount - price

    return (
        <Card className="border-2 border-emerald-200 hover:border-emerald-400 rounded-2xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 hover-lift">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                    <Calculator className="h-5 w-5" />
                    EMI Calculator | ईएमआई कैलकुलेटर
                </CardTitle>
                <CardDescription>
                    Calculate your monthly installment | अपनी मासिक किस्त की गणना करें
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="price">Product Price | उत्पाद मूल्य (₹)</Label>
                    <Input
                        id="price"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder="Enter price"
                        className="border-emerald-300"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="downPayment">Down Payment | डाउन पेमेंट (₹)</Label>
                    <Input
                        id="downPayment"
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        placeholder="Enter down payment"
                        className="border-emerald-300"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="tenure">Tenure | अवधि (Months)</Label>
                    <Select value={tenure.toString()} onValueChange={(v) => setTenure(Number(v))}>
                        <SelectTrigger className="border-emerald-300">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="6">6 Months</SelectItem>
                            <SelectItem value="12">12 Months</SelectItem>
                            <SelectItem value="18">18 Months</SelectItem>
                            <SelectItem value="24">24 Months</SelectItem>
                            <SelectItem value="36">36 Months</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="interest">Interest Rate | ब्याज दर (%)</Label>
                    <Input
                        id="interest"
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        placeholder="Enter interest rate"
                        className="border-emerald-300"
                    />
                </div>

                <div className="divider-indian"></div>

                <div className="space-y-3 bg-emerald-50 p-4 rounded-xl border-2 border-emerald-200">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Monthly EMI | मासिक ईएमआई:</span>
                        <span className="text-2xl font-bold text-emerald-700 flex items-center">
                            <IndianRupee className="h-5 w-5" />
                            {emi.toFixed(2)}
                        </span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span>Total Amount | कुल राशि:</span>
                        <span className="font-semibold">₹{totalAmount.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span>Total Interest | कुल ब्याज:</span>
                        <span className="font-semibold text-amber-600">₹{totalInterest.toFixed(2)}</span>
                    </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                    Apply for Finance | वित्त के लिए आवेदन करें
                </Button>
            </CardContent>
        </Card>
    )
}
