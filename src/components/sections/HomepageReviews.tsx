import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  DollarSign,
  Clock,
  Award,
} from "lucide-react";

// This section used to display fabricated customer testimonials and an
// invented aggregate rating. Both were removed on 2026-07-04 (no real,
// auditable reviews exist yet, which is an FTC and trust risk). It now shows
// honest service commitments. Bring real, consented reviews back here once
// they are collected.

const promises = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured Pros",
    text: "You are matched with licensed, insured local pest control technicians who work to your state's requirements.",
  },
  {
    icon: DollarSign,
    title: "Clear, Upfront Pricing",
    text: "You get a written quote before any work begins. No hidden fees, no pressure, no surprises on the invoice.",
  },
  {
    icon: Clock,
    title: "Fast, Same-Day Service",
    text: "Same-day and 24/7 emergency appointments are available when a pest problem cannot wait.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    text: "If pests come back between scheduled visits, so do we. Re-treatments are included on covered plans.",
  },
];

export function HomepageReviews() {
  return (
    <section
      id="reviews"
      className="bg-white py-20 md:py-28"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
            Our Promise
          </p>
          <h2
            id="reviews-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-navy)] mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What You Can Count On
          </h2>
          <p className="text-[var(--color-slate-custom)] text-lg max-w-2xl mx-auto">
            We are building our reputation one home at a time. Here is what every
            homeowner and business gets when they call PestRemovalUSA.
          </p>
        </div>

        {/* Promise cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Our service commitments"
        >
          {promises.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              role="listitem"
              className="bg-[var(--color-muted)] rounded-[var(--radius-card)] p-6 flex flex-col shadow-[var(--shadow-card)]"
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

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--color-slate-custom)] mb-4">
            Ready to deal with your pest problem? Get a free, no-obligation quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-navy-light)] transition-colors"
            >
              About Our Company
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors shadow-[var(--shadow-cta)]"
            >
              Get My Free Quote
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
