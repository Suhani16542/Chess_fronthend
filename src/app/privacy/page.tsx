import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Sada's Chess Academy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[100dvh] bg-hero-gradient pt-32 pb-20">
        {/* Background decorations matching main page */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle chess pattern */}
        <div className="absolute inset-0 chess-pattern opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-navy mb-4">
              Privacy Policy
            </h1>
            <p className="text-navy/60 text-sm">Last Updated: July 22, 2026</p>
          </div>

          {/* Privacy Content in Premium glassmorphic card */}
          <div className="glass-white rounded-3xl p-6 sm:p-10 shadow-card border border-gold/15 flex flex-col gap-8 text-navy/80 leading-relaxed">
            <p>
              At <strong>Sada&apos;s Chess Academy</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or participate in our coaching programs.
            </p>
            
            <hr className="border-navy/10" />

            {/* Sections */}
            <section className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-2xl text-navy">1. Information We Collect</h2>
              <p>
                We collect personal information that you provide to us voluntarily when booking a free demo, enrolling in our classes, or contacting us. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Personal details: Name, email address, phone number, and age.</li>
                <li>Chess details: Skill level, goals, and chess profile links (e.g., Chess.com or Lichess).</li>
                <li>Payment details: Billing details required for subscription plans.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-2xl text-navy">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to deliver and improve our training services, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Scheduling and conducting live coaching sessions.</li>
                <li>Customizing learning curriculums for students.</li>
                <li>Sending progress updates, reports, and administrative notifications.</li>
                <li>Processing payments and managing account subscriptions.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-2xl text-navy">3. Data Protection</h2>
              <p>
                We implement strict security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. Access to student details is restricted to assigned coaches and academy administrators.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-2xl text-navy">4. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience, analyze site traffic, and remember your preferences. You can manage or disable cookies through your browser settings, though some site features may not function properly without them.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-2xl text-navy">5. Third-Party Services</h2>
              <p>
                We may share necessary data with trusted third-party providers to facilitate our services (e.g., payment gateways, scheduling platforms, and analytical services). These providers are obligated to protect your data and are not authorized to use it for marketing.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-2xl text-navy">6. Contact Information</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us:
              </p>
              <div className="bg-navy/5 p-5 rounded-2xl border border-navy/10 flex flex-col gap-2 mt-2">
                <p><strong>Email:</strong> <a href="mailto:Sadasivam.maker@gmail.com" className="text-gold hover:text-gold-dark transition-colors font-medium">Sadasivam.maker@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+917358328783" className="text-gold hover:text-gold-dark transition-colors font-medium">+91 7358328783</a></p>
                <p><strong>Location:</strong> Andhra Pradesh, India</p>
              </div>
            </section>
          </div>
          
          {/* Back Button */}
          <div className="text-center mt-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-navy text-white hover:bg-gold hover:text-navy font-bold text-sm transition-all duration-300 shadow-card"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
