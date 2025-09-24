import type { Metadata } from "next";
import { CheckCircle, XCircle, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Refund Policy - WaoSim | Money-Back Guarantee",
  description:
    "Learn about WaoSim's 30-day money-back guarantee and refund policy for eSIM purchases.",
};

const refundConditions = [
  {
    icon: <CheckCircle className="h-6 w-6 text-green-600" />,
    title: "Eligible for Refund",
    items: [
      "Unused eSIM plans within 30 days",
      "Technical issues preventing activation",
      "Service not available in purchased region",
      "Duplicate purchases",
    ],
  },
  {
    icon: <XCircle className="h-6 w-6 text-red-600" />,
    title: "Not Eligible for Refund",
    items: [
      "eSIMs that have been activated and used",
      "Plans purchased more than 30 days ago",
      "Partial usage refunds",
      "Change of travel plans",
    ],
  },
];

export default function RefundsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Refund Policy
          </h1>
          <p className="text-lg text-slate-600 mx-auto">
            We stand behind our service with a 30-day money-back guarantee.
            Here's everything you need to know about our refund policy.
          </p>
        </div>

        {/* Money-Back Guarantee */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-slate-600">
            If you're not satisfied with your eSIM purchase, we'll refund your
            money within 30 days - no questions asked.
          </p>
        </div>

        {/* Refund Conditions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {refundConditions.map((condition) => (
            <Card key={condition.title} className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {condition.icon}
                  <h3 className="text-xl font-semibold text-slate-900 ml-3">
                    {condition.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {condition.items.map((item) => (
                    <li key={item} className="text-slate-600 flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Refund Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            How to Request a Refund
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4">
                <Mail className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                1. Contact Support
              </h3>
              <p className="text-sm text-slate-600">
                Email us at support@waosim.com with your order details
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4">
                <Clock className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                2. Review Process
              </h3>
              <p className="text-sm text-slate-600">
                We'll review your request within 24 hours
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                3. Refund Processed
              </h3>
              <p className="text-sm text-slate-600">
                Approved refunds are processed within 3-5 business days
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-slate-50 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Need Help with a Refund?
          </h2>
          <p className="text-slate-600 mb-6">
            Our customer support team is here to help you with any refund
            questions or requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@waosim.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Support
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-white transition-colors"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
