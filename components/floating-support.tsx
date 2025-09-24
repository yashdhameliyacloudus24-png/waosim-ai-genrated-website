"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Phone, Mail, Clock } from "lucide-react"

export function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Support Card */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 animate-slide-up">
          <Card className="w-80 border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">24/7 Customer Support</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="p-1">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm text-slate-600 mb-4">
                Need help with your eSIM? Our support team is here to assist you.
              </p>

              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/contact">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Live Chat
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="mailto:support@waosim.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <a href="tel:+15551234567">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </a>
                </Button>
              </div>

              <div className="flex items-center text-xs text-slate-500 mt-4 pt-4 border-t">
                <Clock className="h-3 w-3 mr-1" />
                <span>Available 24/7 worldwide</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </>
  )
}
