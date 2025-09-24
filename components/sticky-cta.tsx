"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isDismissed || !isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-slide-up">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl p-4 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="font-semibold text-sm mb-1">Get Your eSIM Now</p>
            <p className="text-xs opacity-90">Instant activation • 190+ countries</p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="bg-white text-cyan-600 hover:bg-slate-50 text-xs px-3 py-2"
            >
              <Link href="/buy-esim">
                Browse Plans
                <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDismissed(true)}
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
