import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Building2, Shield, BarChart3, Clock, Award } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Commercial Pest Control | PestRemovalUSA — Business & Property Solutions",
  description:
    "Professional commercial pest control for restaurants, offices, warehouses, hotels, and more. FDA/USDA compliant, discreet service, and custom treatment plans for any business size.",
  alternates: { canonical: "https://pestremovalusa.com/commercial" },
  openGraph: {
    title: "Commercial Pest Control | PestRemovalUSA",
    description: "Custom pest control solutions for businesses of all sizes. Discreet, compliant, guaranteed.",
    url: "https://pestremovalusa.com/commercial",
  },
};

const industries = [
  { icon: "🍽️", name: "Restaurants & Food Service", desc: "FDA/USDA-compliant programs that protect your health inspection rating and keep kitchens pest-free." },
  { icon: "🏨", name: "Hotels & Hospitality", desc: "Bed bug prevention programs and discreet ongoing service to protect your guest experience and reviews." },
  { icon: "🏢", name: "Office Buildings", desc: "After-hours treatment schedules and ongoing prevention so your employees work in a pest-free environment." },
  { icon: "🏥", name: "Healthcare Facilities", desc: "HIPAA-sensitive, patient-safe treatment protocols compliant with healthcare regulations." },
  { icon: "🏭", name: "Warehouses & Industrial", desc: "Rodent exclusion, stored product pest programs, and perimeter protection for large facilities." },
  { icon: "🏫", name: "Schools & Universities", desc: "Low-toxicity, student-safe IPM programs meeting all educational facility requirements." },
  { icon: "🛒", name: "Retail & Grocery", desc: "Discreet service, non-disruptive schedules, and flying insect programs to protect merchandise and shoppers." },
  { icon: "🏗️", name: "Property Management", desc: "Multi-unit programs for apartment complexes, HOAs, and commercial property portfolios." },
];

const benefits = [
  "Dedicated commercial account manager",
  "Custom Integrated Pest Management (IPM) plan",
  "Flexible scheduling — nights, weekends, before opening",
  "Detailed service reports for compliance documentation",
  "OSHA, FDA, USDA, and HACCP compliant protocols",
  "Emergency response within hours",
  "Staff training and pest awareness programs",
  "100% satisfaction guarantee",
];

const plans = [
  {
    name: "Essential",
    freq: "Monthly",
    price: "From $149",
    per: "/month",
    features: [
      "Monthly inspection & treatment",
      "Interior + exterior perimeter",
      "Rodent monitoring stations",
      "Digital service reports",
      "Free re-service guarantee",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    freq: "Bi-weekly",
    price: "From $299",
    per: "/month",
    features: [
      "Bi-weekly service visits",
      "Everything in Essential",
      "Flying insect control",
      "Stored product pest monitoring",
      "Compliance documentation package",
      "Dedicated account manager",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    freq: "Custom",
    price: "Custom",
    per: "pricing",
    features: [
      "Custom service frequency",
      "Everything in Professional",
      "Multi-location portfolio pricing",
      "24/7 priority emergency response",
      "Staff pest awareness training",
      "Annual third-party audit support",
    ],
    highlight: false,
  },
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                Commercial Pest Control
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Protect Your Business.
                <br />
                <span className="text-[var(--color-red-light)]">Protect Your Reputation.</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                A single pest sighting can cost you customers, health inspection failures, and
                online reputation damage. PestRemovalUSA&apos;s commercial programs are designed
                to prevent that — not just react to it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
                >
                  Get a Commercial Quote
                </Link>
                <Link
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-navy)] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, label: "24/7 Emergency", sub: "Rapid commercial response" },
                { icon: Shield, label: "Compliance Ready", sub: "FDA, USDA, HACCP compliant" },
                { icon: Award, label: "Certified Staff", sub: "Licensed commercial technicians" },
                { icon: BarChart3, label: "Detailed Reports", sub: "Digital service documentation" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 rounded-[var(--radius-card)] p-4 text-center"
                >
                  <item.icon className="w-8 h-8 text-[var(--color-red-light)] mx-auto mb-2" />
                  <div className="font-bold text-sm">{item.label}</div>
                  <div className="text-blue-300 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Industries We Serve
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Custom commercial pest control programs for every type of business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-[var(--color-muted)] rounded-[var(--radius-card)] p-5 hover:shadow-[var(--shadow-card)] transition-shadow"
              >
                <div className="text-3xl mb-3">{ind.icon}</div>
                <h3
                  className="font-bold text-[var(--color-navy)] mb-2 text-sm"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {ind.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Commercial Service Plans
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Choose the plan that fits your business size and compliance needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[var(--radius-card)] p-8 ${
                  plan.highlight
                    ? "bg-[var(--color-navy)] text-white shadow-[var(--shadow-cta)] ring-2 ring-[var(--color-red)]"
                    : "bg-white shadow-[var(--shadow-card)]"
                }`}
              >
                {plan.highlight && (
                  <div className="bg-[var(--color-red)] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <div
                  className={`text-2xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-[var(--color-navy)]"}`}
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {plan.name}
                </div>
                <div className={`text-sm mb-4 ${plan.highlight ? "text-blue-300" : "text-gray-500"}`}>
                  {plan.freq} Service
                </div>
                <div className="mb-6">
                  <span
                    className={`text-3xl font-black ${plan.highlight ? "text-white" : "text-[var(--color-navy)]"}`}
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? "text-blue-300" : "text-gray-500"}`}>
                    {" "}{plan.per}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-green-400" : "text-green-500"}`}
                      />
                      <span className={plan.highlight ? "text-blue-100" : "text-gray-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center font-bold py-3 rounded-[var(--radius-btn)] transition-colors ${
                    plan.highlight
                      ? "bg-[var(--color-red)] text-white hover:bg-[var(--color-red-light)]"
                      : "bg-[var(--color-navy)] text-white hover:opacity-90"
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              What Every Commercial Client Gets
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--color-navy)] text-white rounded-[var(--radius-card)] p-8 text-center">
            <Building2 className="w-16 h-16 text-[var(--color-red-light)] mx-auto mb-6" />
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Ready to Protect Your Business?
            </h3>
            <p className="text-blue-200 mb-6">
              Speak with a commercial pest control specialist today. Free site assessment for all
              new commercial accounts.
            </p>
            <Link
              href="/contact"
              className="block bg-[var(--color-red)] text-white font-bold py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors mb-3"
            >
              Request Free Assessment
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="block border-2 border-white text-white font-bold py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              Call {siteConfig.phoneDisplay}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
