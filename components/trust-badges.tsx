"use client"

import { Shield, Clock, Award, Users, Zap, Globe } from "lucide-react"

const badges = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Checkout",
    description: "256-bit SSL encryption",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Delivery",
    description: "eSIM delivered in seconds",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "500K+ Customers",
    description: "Trusted worldwide",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Money-back Guarantee",
    description: "30-day refund policy",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "190+ countries",
    description: "Global coverage",
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Why Travelers Trust WaoSim</h2>
          <p className="text-slate-600 mx-auto">
            Join hundreds of thousands of satisfied customers who rely on our secure, fast, and reliable eSIM service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-600 rounded-lg mb-3">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-slate-500">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
