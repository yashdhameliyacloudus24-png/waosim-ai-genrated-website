import type { Metadata } from "next";
import { Globe, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About WaoSim - Global eSIM Provider | Our Story",
  description:
    "Learn about WaoSim's mission to connect travelers worldwide with reliable, affordable eSIM solutions. Trusted by 500K+ customers globally.",
};

const values = [
  {
    icon: <Globe className="h-8 w-8 text-cyan-600" />,
    title: "Global Connectivity",
    description:
      "We believe everyone should stay connected, no matter where their journey takes them.",
  },
  {
    icon: <Users className="h-8 w-8 text-cyan-600" />,
    title: "Customer First",
    description:
      "Our customers are at the heart of everything we do. Their success is our success.",
  },
  {
    icon: <Award className="h-8 w-8 text-cyan-600" />,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, from technology to support.",
  },
  {
    icon: <Target className="h-8 w-8 text-cyan-600" />,
    title: "Innovation",
    description:
      "We continuously innovate to provide the best eSIM solutions for modern travelers.",
  },
];

const stats = [
  { number: "500K+", label: "Happy Customers" },
  { number: "200+", label: "Countries Covered" },
  { number: "99.9%", label: "Network Uptime" },
  { number: "24/7", label: "Customer Support" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Connecting the World, One eSIM at a Time
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-center">
            {" "}
            At WaoSim, we're passionate about making global connectivity simple,
            affordable, and reliable. Our mission is to eliminate the hassle of
            international roaming and keep you connected wherever you go.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-slate-600">
            <p>
              Founded in 2020, WaoSim was born from a simple frustration: the
              complexity and cost of staying connected while traveling
              internationally. Our founders, frequent business travelers
              themselves, experienced firsthand the pain of expensive roaming
              charges and unreliable connectivity.
            </p>

            <p>
              We saw the potential of eSIM technology to revolutionize how
              people connect globally. By partnering with leading mobile network
              operators worldwide, we've built a platform that makes
              international connectivity as simple as scanning a QR code.
            </p>

            <p>
              Today, we're proud to serve over 500,000 customers across 200+
              countries, from digital nomads and business travelers to families
              on vacation. Our commitment remains the same: providing reliable,
              affordable connectivity that keeps you connected to what matters
              most.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 mx-auto">
              These core values guide everything we do and shape how we serve
              our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="text-center border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We're always looking for passionate individuals who share our vision
            of connecting the world. If you're interested in joining our team,
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
