"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How quickly can you respond to a pest problem?",
    answer:
      "We offer same-day service in most areas, and for true emergencies we dispatch within 60 minutes 24/7. After you call or submit a quote request, a local certified technician will contact you within 10 minutes to confirm your appointment.",
  },
  {
    question: "Are your pest control treatments safe for children and pets?",
    answer:
      "Absolutely. We offer eco-friendly, low-toxicity treatment options that are safe for families and pets once dry (typically 1-2 hours). Our technicians will provide specific re-entry instructions for your situation, and we always use EPA-registered products applied by licensed professionals.",
  },
  {
    question: "Do you offer a guarantee on your services?",
    answer:
      "Yes, all of our treatments come with a 100% satisfaction guarantee. If pests return between scheduled visits, we will re-treat your property at no additional charge. We stand behind our work completely.",
  },
  {
    question: "What areas of the US do you service?",
    answer:
      "PestRemovalUSA operates in 48 states with over 500 cities covered by local technician teams. Enter your ZIP code on our contact page to confirm same-day availability in your specific area.",
  },
  {
    question: "How much does pest control cost?",
    answer:
      "Pricing varies by pest type, property size, and treatment method. Most residential treatments range from $150 to $450 for a one-time visit, with ongoing plans starting lower. We provide a free, no-obligation inspection and transparent upfront quote before any work begins, no surprise charges.",
  },
  {
    question: "Do I need to leave my home during treatment?",
    answer:
      "For most treatments, you can stay home. Some treatments (such as fumigation or certain chemical applications) require a temporary exit of 2-4 hours. Your technician will advise you specifically on what to expect before treatment begins.",
  },
  {
    question: "What is included in a free inspection?",
    answer:
      "Our certified technicians will inspect your entire property, interior and exterior, to identify pest entry points, nesting areas, activity signs, and contributing conditions. You receive a full written assessment and customized treatment recommendation with pricing, completely free of charge.",
  },
  {
    question: "How do I know if I have termites?",
    answer:
      "Common signs include discarded wings near windows, mud tubes on exterior walls or foundations, hollow-sounding wood, and small piles of frass (wood shavings). If you notice any of these signs, call us immediately, termite damage worsens rapidly and early detection is critical to limiting costly structural damage.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={cn(
        "border border-gray-200 rounded-[var(--radius-btn)] overflow-hidden transition-shadow duration-200",
        isOpen && "shadow-[var(--shadow-card)] border-[var(--color-navy-100)]"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[var(--color-cream)] transition-colors duration-200 cursor-pointer"
      >
        <span className="font-semibold text-[var(--color-navy)] text-sm md:text-base leading-snug">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-[var(--color-red)] shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5 pt-1 bg-white border-t border-gray-100">
          <p className="text-sm md:text-base text-[var(--color-slate-custom)] leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[var(--color-muted)] py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: FAQ list */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--color-slate-custom)] text-base mb-8">
              Everything you need to know about our pest control services. Don&apos;t see
              your question?{" "}
              <Link
                href="/faq"
                className="text-[var(--color-red)] font-semibold hover:underline"
              >
                Visit our full FAQ page
              </Link>
              .
            </p>

            <div
              className="space-y-3"
              role="list"
              aria-label="Frequently asked questions"
            >
              {faqs.map((faq, i) => (
                <div key={i} role="listitem">
                  <AccordionItem
                    faq={faq}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Final CTA card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-[var(--color-navy)] rounded-[var(--radius-card)] p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)] mb-3">
                Ready to Get Started?
              </p>
              <h3
                className="text-3xl font-black text-white mb-4"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Get a Free Quote in Under 60 Seconds
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-7">
                No obligation. No pressure. A certified local technician will review your
                pest problem and provide a transparent, upfront quote.
              </p>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-[var(--color-red)] text-white font-black text-base py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors shadow-[var(--shadow-cta)]"
                >
                  Get My Free Quote
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href={siteConfig.phoneTel}
                  className="flex items-center justify-center gap-2 w-full bg-white/10 border border-white/20 text-white font-bold text-base py-4 rounded-[var(--radius-btn)] hover:bg-white/20 transition-colors"
                  aria-label={`Call ${siteConfig.phoneDisplay}`}
                >
                  <Phone size={18} aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "Free", label: "Inspection" },
                  { value: "10 min", label: "Callback" },
                  { value: "100%", label: "Guaranteed" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p
                      className="text-2xl font-black text-[var(--color-red)]"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {value}
                    </p>
                    <p className="text-xs text-white/50 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.answer,
                    },
                  })),
                }),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
