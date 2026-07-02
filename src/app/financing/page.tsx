import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, CreditCard, DollarSign, Shield, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pest Control Financing | PestRemovalUSA — 0% Interest Plans",
  description:
    "Don't let cost prevent you from protecting your home. PestRemovalUSA offers flexible financing plans including 0% interest options. Apply in minutes — no hard credit pull.",
  alternates: { canonical: "https://pestremovalusa.com/financing/" },
  openGraph: {
    title: "Pest Control Financing | 0% Interest Available",
    description: "Flexible payment plans for pest control. Apply in minutes with no hard credit pull.",
    url: "https://pestremovalusa.com/financing/",
  },
};

const plans = [
  {
    name: "0% Interest — 12 Months",
    badge: "Most Popular",
    badgeColor: "bg-[var(--color-red)] text-white",
    highlight: true,
    features: [
      "0% APR for 12 months",
      "No hard credit inquiry to apply",
      "Approval in minutes",
      "Available on orders $300+",
      "Auto-pay or monthly invoice",
    ],
    note: "Regular APR of 19.99% applies after promotional period. Subject to credit approval.",
  },
  {
    name: "Extended 24-Month Plan",
    badge: "Low Monthly Payments",
    badgeColor: "bg-blue-600 text-white",
    highlight: false,
    features: [
      "Low fixed monthly payments",
      "24-month term available",
      "9.99% APR fixed rate",
      "Available on orders $500+",
      "No prepayment penalty",
    ],
    note: "9.99% APR for qualified applicants. Subject to credit approval.",
  },
  {
    name: "Service Now, Pay Later",
    badge: "No Upfront Cost",
    badgeColor: "bg-green-600 text-white",
    highlight: false,
    features: [
      "Service completed first",
      "Invoice due within 30 days",
      "No interest if paid in 30 days",
      "Available for all service types",
      "No application required",
    ],
    note: "Available for accounts with prior service history or approved credit.",
  },
];

const faqs = [
  {
    q: "Does applying affect my credit score?",
    a: "No. We perform a soft credit inquiry only, which does not affect your credit score. A hard inquiry is only performed if you accept a financing offer.",
  },
  {
    q: "What is the minimum treatment amount for financing?",
    a: "Our 0% interest plan is available on services of $300 or more. Extended plans are available for $500+. Monthly subscription plans do not require financing.",
  },
  {
    q: "How quickly am I approved?",
    a: "Most applicants receive a decision in 2–5 minutes after submitting the short application. You can proceed with scheduling your service immediately upon approval.",
  },
  {
    q: "Can I pay off my balance early?",
    a: "Yes, absolutely. There are no prepayment penalties on any of our financing plans. Paying early saves you from any interest that would have accrued.",
  },
  {
    q: "Is financing available for ongoing service plans?",
    a: "Ongoing monthly and quarterly service plans are billed on a per-visit or monthly basis and do not require separate financing — they are already structured as low monthly payments.",
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <CreditCard className="w-4 h-4" />
            Flexible Financing Available
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Protect Your Home
            <br />
            <span className="text-[var(--color-red-light)]">On Your Terms</span>
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Don&apos;t let a pest infestation grow because of cost concerns. We offer
            0% interest financing, extended payment plans, and a &ldquo;service now, pay later&rdquo;
            option to get your home protected today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-red)] text-white font-bold px-10 py-5 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors text-lg"
            >
              Apply for Financing
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-5 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 px-4 bg-[var(--color-muted)] border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            { icon: Shield, label: "No Hard Credit Pull", sub: "Soft inquiry only to apply" },
            { icon: DollarSign, label: "0% Interest Options", sub: "For qualified applicants" },
            { icon: Star, label: "Approval in Minutes", sub: "Fast, easy application" },
            { icon: CheckCircle, label: "No Prepayment Fees", sub: "Pay off anytime" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <item.icon className="w-6 h-6 text-[var(--color-red)] mb-1" />
              <div className="font-bold text-[var(--color-navy)] text-sm">{item.label}</div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Choose Your Payment Plan
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Three flexible options to get your pest problem solved without financial stress.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[var(--radius-card)] p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-[var(--color-navy)] text-white shadow-[var(--shadow-cta)] ring-2 ring-[var(--color-red)]"
                    : "bg-[var(--color-muted)] shadow-[var(--shadow-card)]"
                }`}
              >
                <div className={`text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block self-start ${plan.badgeColor}`}>
                  {plan.badge}
                </div>
                <h3
                  className={`text-xl font-bold mb-6 ${plan.highlight ? "text-white" : "text-[var(--color-navy)]"}`}
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {plan.name}
                </h3>
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-green-400" : "text-green-500"}`} />
                      <span className={plan.highlight ? "text-blue-100" : "text-gray-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs mb-6 leading-relaxed ${plan.highlight ? "text-blue-300" : "text-gray-500"}`}>
                  {plan.note}
                </p>
                <Link
                  href="/contact"
                  className={`block text-center font-bold py-3 rounded-[var(--radius-btn)] transition-colors ${
                    plan.highlight
                      ? "bg-[var(--color-red)] text-white hover:bg-[var(--color-red-light)]"
                      : "bg-[var(--color-navy)] text-white hover:opacity-90"
                  }`}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              How Financing Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Get a Quote", desc: "Request a free inspection and receive your service quote online or by phone." },
              { num: "2", title: "Apply Online", desc: "Complete our short financing application. Decision in under 5 minutes with no hard credit pull." },
              { num: "3", title: "Get Approved", desc: "Receive your approved plan details and choose your preferred payment schedule." },
              { num: "4", title: "Service Today", desc: "Schedule your service immediately — we start protecting your home right away." },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] text-center">
                <div
                  className="w-12 h-12 bg-[var(--color-navy)] rounded-full flex items-center justify-center text-white text-xl font-black mx-auto mb-4"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {step.num}
                </div>
                <h3 className="font-bold text-[var(--color-navy)] mb-2" style={{ fontFamily: "var(--font-barlow)" }}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold text-[var(--color-navy)] mb-10 text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Financing FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-[var(--color-navy)] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[var(--color-navy)] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <CreditCard className="w-12 h-12 text-[var(--color-red-light)] mx-auto mb-4" />
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 mb-8">
            Apply for financing today and get your home protected without delay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              Apply for Financing
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
