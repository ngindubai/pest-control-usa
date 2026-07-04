import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ShieldCheck, DollarSign, Clock, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { organizationSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Reviews | PestRemovalUSA",
  description:
    "PestRemovalUSA is building a library of verified customer reviews. Here is what every homeowner and business can expect: licensed local pros, upfront pricing, and a satisfaction guarantee.",
  alternates: { canonical: "https://pestremovalusa.com/reviews/" },
  openGraph: {
    title: "Customer Reviews | PestRemovalUSA",
    description:
      "What you can expect from PestRemovalUSA: licensed, insured local technicians, clear pricing, and a satisfaction guarantee on every visit.",
    url: "https://pestremovalusa.com/reviews/",
  },
};

// This page previously displayed fabricated testimonials and an invented
// aggregate rating. Both were removed on 2026-07-04 because there are no real,
// auditable reviews yet, which is an FTC and trust risk. It now sets honest
// expectations and invites real reviews. Add a verified-review feed here once
// genuine, consented reviews are collected (and only then re-introduce
// aggregateRating/Review schema, with the ratings visible on the page).

const promises = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured Pros",
    text: "Every job is handled by a licensed, insured local technician who works to your state's requirements.",
  },
  {
    icon: DollarSign,
    title: "Upfront, Written Pricing",
    text: "You get a written quote before any work starts. No hidden fees and no pressure.",
  },
  {
    icon: Clock,
    title: "Fast, Same-Day Service",
    text: "Same-day and 24/7 emergency appointments are available when a pest problem cannot wait.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    text: "If covered pests return between scheduled visits, we come back and re-treat at no extra charge.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              organizationSchema(),
              breadcrumbSchema([
                { name: "Home", href: "/" },
                { name: "Reviews", href: "/reviews/" },
              ]),
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Customer Reviews
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            We are a growing pest control network, and we are collecting verified
            customer reviews as we go. Here is what you can count on in the meantime.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-[var(--color-navy)] mb-10 text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What Every Customer Can Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] flex flex-col"
              >
                <div className="text-[var(--color-red)] mb-4" aria-hidden="true">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-navy)] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-slate-custom)] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" aria-hidden="true" />
          <h2
            className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Recently used PestRemovalUSA?
          </h2>
          <p className="text-gray-600 mb-6">
            We would like to hear how it went. Real feedback from real customers helps other
            homeowners choose with confidence, and helps us keep improving.
          </p>
          <Link
            href={`mailto:${siteConfig.email}?subject=My%20PestRemovalUSA%20review`}
            className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-navy-light)] transition-colors"
          >
            Share Your Experience
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[var(--color-navy)] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ready to Solve Your Pest Problem?
          </h2>
          <p className="text-blue-200 mb-8">
            Get a free, no-obligation quote from a licensed local pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phoneDisplay}
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[var(--color-navy)] font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
