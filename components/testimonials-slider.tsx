"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Digital Nomad",
    rating: 5,
    comment:
      "WaoSim saved me hundreds on roaming charges during my Europe trip. Setup was incredibly easy and the connection was reliable everywhere I went!",
    avatar: "SJ",
    country: "🇺🇸",
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Business Traveler",
    rating: 5,
    comment:
      "As someone who travels frequently for work, WaoSim has been a game-changer. Instant activation and excellent customer support make it my go-to choice.",
    avatar: "MC",
    country: "🇨🇦",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Travel Blogger",
    rating: 5,
    comment:
      "Perfect for content creators who need consistent internet. I've used WaoSim in 15+ countries and it never disappoints. Highly recommend!",
    avatar: "ER",
    country: "🇪🇸",
  },
  {
    id: 4,
    name: "David Kim",
    location: "Startup Founder",
    rating: 5,
    comment:
      "Running a remote business means I need reliable connectivity everywhere. WaoSim delivers on that promise with competitive pricing and great coverage.",
    avatar: "DK",
    country: "🇰🇷",
  },
  {
    id: 5,
    name: "Lisa Wang",
    location: "Travel Photographer",
    rating: 5,
    comment:
      "Being able to upload photos and stay connected with clients while traveling is crucial for my business. WaoSim makes it seamless and affordable.",
    avatar: "LW",
    country: "🇦🇺",
  },
  {
    id: 6,
    name: "James Liu",
    location: "Remote Developer",
    rating: 5,
    comment:
      "The data speeds are impressive and the coverage is extensive. I can work from anywhere without worrying about connectivity issues.",
    avatar: "JL",
    country: "🇸🇬",
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="mx-auto border-0 shadow-xl bg-white">
                <CardContent className="p-8 lg:p-12 text-center">
                  <Quote className="h-12 w-12 text-cyan-600 mx-auto mb-6 opacity-50" />

                  <div className="flex items-center justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed mx-auto">
                    "{testimonial.comment}"
                  </blockquote>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-slate-900">{testimonial.name}</p>
                        <span className="text-lg">{testimonial.country}</span>
                      </div>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={prevTestimonial}
          className="w-10 h-10 rounded-full p-0 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-cyan-600 w-8" : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextTestimonial}
          className="w-10 h-10 rounded-full p-0 bg-transparent"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
