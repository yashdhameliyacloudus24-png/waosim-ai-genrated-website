"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "What is an eSIM and how does it work?",
    answer:
      "An eSIM (embedded SIM) is a digital SIM card that's built into your device. Instead of inserting a physical SIM card, you can download and activate an eSIM profile digitally. Simply scan a QR code or enter activation details to get connected instantly.",
  },
  {
    question: "Which devices support eSIM?",
    answer:
      "Most modern smartphones, tablets, and smartwatches support eSIM, including iPhone XS and newer, Google Pixel 3 and newer, Samsung Galaxy S20 and newer, and many others. Check our device compatibility page for a complete list.",
  },
  {
    question: "Can I use my eSIM in multiple countries?",
    answer:
      "Yes! Our regional and global eSIM plans work across multiple countries. You can also purchase country-specific plans for better rates if you're staying in one location.",
  },
  {
    question: "How long does it take to activate my eSIM?",
    answer:
      "eSIM activation is instant! Once you complete your purchase, you'll receive a QR code via email immediately. Scan it with your device and you'll be connected within seconds.",
  },
  {
    question: "What happens if I run out of data?",
    answer:
      "You can easily top up your existing eSIM or purchase a new plan through our website or mobile app. Your eSIM remains active, so you can add more data anytime.",
  },
  {
    question: "Do you offer customer support while traveling?",
    answer:
      "Our 24/7 customer support team is available via chat, email, or phone to help you with any issues, no matter where you are in the world.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Everything you need to know about eSIM and our service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 hover:bg-slate-50 transition-colors duration-200 flex items-center justify-between cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
