import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - WaoSim | Data Protection & Privacy",
  description:
    "Learn how WaoSim protects your personal information and respects your privacy. Read our comprehensive privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-slate-600">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, purchase an eSIM, or contact us for support. This
            may include your name, email address, phone number, and payment
            information.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, process transactions, send you technical notices and
            support messages, and communicate with you about products, services,
            and promotional offers.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy. We may share your information with service
            providers who assist us in operating our platform.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction. We use industry-standard encryption and security
            protocols.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. You may also opt out of certain communications from us.
            To exercise these rights, please contact us at privacy@waosim.com.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <ul>
            <li>Email: privacy@waosim.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Tech Street, San Francisco, CA 94105</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
