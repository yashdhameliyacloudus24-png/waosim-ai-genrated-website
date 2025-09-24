import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - WaoSim | Terms & Conditions",
  description:
    "Read WaoSim's terms of service and conditions for using our eSIM platform and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-slate-600">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using WaoSim's services, you accept and agree to be
            bound by the terms and provision of this agreement. If you do not
            agree to abide by the above, please do not use this service.
          </p>

          <h2>2. Service Description</h2>
          <p>
            WaoSim provides eSIM connectivity services for international travel.
            Our services include the sale of digital SIM cards (eSIMs) that
            provide data connectivity in various countries and regions
            worldwide.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            You are responsible for ensuring your device is compatible with eSIM
            technology and that you follow the installation instructions
            provided. You must provide accurate information when creating an
            account and making purchases.
          </p>

          <h2>4. Payment and Refunds</h2>
          <p>
            All purchases are processed securely through our payment partners.
            Refunds are available within 30 days of purchase for unused eSIMs,
            subject to our refund policy terms.
          </p>

          <h2>5. Service Availability</h2>
          <p>
            While we strive to provide reliable service, we cannot guarantee
            uninterrupted access to our platform or mobile networks. Service
            availability may vary by location and network conditions.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            WaoSim shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of our
            services.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <ul>
            <li>Email: legal@waosim.com</li>
            <li>Phone: +1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
