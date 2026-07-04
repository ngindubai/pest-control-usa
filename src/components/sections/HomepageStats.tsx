import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const stats = [
  { value: `${siteConfig.stats.statesCovered}`, label: "States + DC Covered", color: "text-[var(--color-red)]" },
  { value: "24/7", label: "Emergency Service Available", color: "text-amber-400" },
  { value: "Same-Day", label: "Appointments Available", color: "text-[var(--color-red)]" },
  { value: "Free", label: "Inspections & Quotes", color: "text-[var(--color-red)]" },
];

const reasons = [
  "Licensed and insured local pest control technicians",
  "Trained professionals who explain the plan before they treat",
  "Same-day and emergency service available 24/7/365",
  "Eco-friendly and pet-safe treatment options",
  "Transparent, upfront pricing, no hidden fees",
  "Satisfaction guarantee with free re-treatments",
  "Local pros who know the pests in your region",
  "Follow-up inspections included at no extra charge",
];

export function HomepageStats() {
  return (
    <section
      id="why-us"
      className="bg-[var(--color-navy)] py-20 md:py-28"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Stats */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
              What You Get
            </p>
            <h2
              id="stats-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Local Pest Control,
              <br />
              <span className="text-[var(--color-red)]">Nationwide Coverage</span>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg">
              PestRemovalUSA connects homeowners and businesses with licensed, insured pest
              and wildlife pros across the country. Fast scheduling, clear pricing, and local
              expertise where you live.
            </p>

            <div className="grid grid-cols-2 gap-6" aria-label="Company statistics">
              {stats.map(({ value, label, color }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-[var(--radius-card)] p-5 hover:bg-white/8 transition-colors"
                >
                  <p
                    className={`text-4xl lg:text-5xl font-black ${color} mb-1`}
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {value}
                  </p>
                  <p className="text-sm text-white/60 leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Reasons */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
              Why Choose Us
            </p>
            <h3
              className="text-2xl md:text-3xl font-black text-white mb-8"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              The PestRemovalUSA Difference
            </h3>

            <ul className="space-y-4" aria-label="Reasons to choose PestRemovalUSA">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[var(--color-red)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-white/80 text-sm leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-[var(--color-navy)] font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-gray-100 transition-colors"
              >
                About Our Company
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors shadow-[var(--shadow-cta)]"
              >
                Get Free Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
