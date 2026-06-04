import Link from "next/link";
import { Phone, CalendarCheck, ClipboardList, ShieldCheck, ArrowRight } from "lucide-react";
import type { ElementType } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: ElementType;
  detail: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Call or Book Online",
    description:
      "Contact us 24/7 by phone or fill out our 60-second quote form. Tell us about your pest problem and location.",
    icon: Phone,
    detail: "Takes under 2 minutes",
  },
  {
    number: "02",
    title: "Same-Day Inspection",
    description:
      "A certified local technician arrives same-day to inspect your property and identify the extent of the infestation.",
    icon: CalendarCheck,
    detail: "No-charge inspection",
  },
  {
    number: "03",
    title: "Custom Treatment Plan",
    description:
      "We create a targeted treatment plan using the safest and most effective methods for your specific pest problem.",
    icon: ClipboardList,
    detail: "Eco-safe options available",
  },
  {
    number: "04",
    title: "Follow-Up & Guarantee",
    description:
      "We follow up to confirm results and re-treat at no charge if pests return. Your satisfaction is 100% guaranteed.",
    icon: ShieldCheck,
    detail: "100% satisfaction guarantee",
  },
];

export function HomepageProcess() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-20 md:py-28"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
            How It Works
          </p>
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-navy)] mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Pest-Free in 4 Simple Steps
          </h2>
          <p className="text-[var(--color-slate-custom)] text-lg max-w-2xl mx-auto">
            From your first call to a pest-free home, our streamlined process gets results
            fast&mdash;usually same day.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--color-red)]/20 via-[var(--color-red)]/40 to-[var(--color-red)]/20"
            aria-hidden="true"
          />

          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            aria-label="4-step pest removal process"
          >
            {steps.map(({ number, title, description, icon: Icon, detail }, i) => (
              <li key={number} className="relative flex flex-col items-center text-center">
                {/* Number circle */}
                <div className="relative mb-5">
                  <div className="w-[56px] h-[56px] bg-[var(--color-red)] rounded-full flex items-center justify-center shadow-[var(--shadow-cta)] z-10 relative">
                    <Icon size={24} className="text-white" aria-hidden="true" />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--color-navy)] text-white text-[10px] font-black rounded-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </div>

                <h3
                  className="text-lg font-black text-[var(--color-navy)] mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-slate-custom)] leading-relaxed mb-3">
                  {description}
                </p>
                <span className="inline-block text-xs font-bold text-[var(--color-red)] bg-red-50 px-3 py-1 rounded-full border border-[var(--color-red)]/20">
                  {detail}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-black text-lg px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors shadow-[var(--shadow-cta)]"
          >
            Start Step 1 Now&mdash;It&apos;s Free
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <p className="mt-3 text-sm text-[var(--color-slate-custom)]">
            No credit card required &middot; No obligation &middot; Same-day appointments available
          </p>
        </div>
      </div>
    </section>
  );
}
