import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, CheckCircle, ChevronRight } from "lucide-react";
import { services, Service } from "@/data/services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pest Control Services | PestRemovalUSA: All 23 Services Nationwide",
  description:
    "Browse all 23 professional pest control services from PestRemovalUSA. Ants, bed bugs, termites, rodents, wildlife, and more, licensed technicians in all 50 states.",
  alternates: { canonical: "https://pestremovalusa.com/services/" },
  openGraph: {
    title: "Pest Control Services | PestRemovalUSA",
    description:
      "23 professional pest control services. Licensed & insured nationwide. Free inspection, 100% satisfaction guarantee.",
    url: "https://pestremovalusa.com/services/",
  },
};

const urgencyConfig = {
  low: { label: "Routine", color: "bg-blue-100 text-blue-700" },
  medium: { label: "Moderate", color: "bg-yellow-100 text-yellow-800" },
  high: { label: "High", color: "bg-orange-100 text-orange-800" },
  critical: { label: "Emergency", color: "bg-red-100 text-red-800" },
};

const categoryConfig = {
  insects: { label: "Insects", color: "border-blue-400", accent: "bg-blue-50" },
  rodents: { label: "Rodents", color: "border-orange-400", accent: "bg-orange-50" },
  wildlife: { label: "Wildlife", color: "border-green-400", accent: "bg-green-50" },
};

const categoryOrder: Service["category"][] = ["insects", "rodents", "wildlife"];

const categoryMeta: Record<Service["category"], { title: string; desc: string; icon: string }> = {
  insects: {
    title: "Insect Control Services",
    desc: "From ants and bed bugs to termites and scorpions, comprehensive insect elimination for homes and businesses.",
    icon: "🐜",
  },
  rodents: {
    title: "Rodent Control Services",
    desc: "Mice, rats, and all rodent species, trapping, exclusion, and long-term prevention programs.",
    icon: "🐭",
  },
  wildlife: {
    title: "Wildlife Removal Services",
    desc: "Humane, licensed removal of raccoons, squirrels, bats, birds, and all wildlife species from your property.",
    icon: "🦝",
  },
};

export default function ServicesPage() {
  const grouped = categoryOrder.reduce(
    (acc, cat) => {
      acc[cat] = services.filter((s) => s.category === cat);
      return acc;
    },
    {} as Record<Service["category"], Service[]>
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[var(--color-red-light)] font-semibold uppercase tracking-widest text-sm mb-4">
            Complete Pest Control
          </p>
          <h1
            className="text-5xl font-black mb-5"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            All Pest Control Services
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            23 specialized pest control services for homes and businesses across all 50 states.
            Licensed technicians, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              Free Inspection Request
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-gray-200 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-[var(--color-navy)] font-medium">
          {[
            "✅ Licensed & Insured",
            "✅ All 50 States",
            "✅ 100% Satisfaction Guarantee",
            "✅ Free Inspection",
            "✅ Same-Day Service",
            "✅ 4.9★ · 12,847 Reviews",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* Category Sections */}
      {categoryOrder.map((category) => {
        const meta = categoryMeta[category];
        const catServices = grouped[category];
        const cfg = categoryConfig[category];

        return (
          <section key={category} className={`py-20 px-4 ${cfg.accent}`}>
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <div className="text-center mb-14">
                <span className="text-5xl mb-3 block">{meta.icon}</span>
                <h2
                  className="text-4xl font-bold text-[var(--color-navy)] mb-3"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {meta.title}
                </h2>
                <p className="text-lg text-[var(--color-slate-custom)] max-w-2xl mx-auto">
                  {meta.desc}
                </p>
              </div>

              {/* Service Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => {
                  const urgency = urgencyConfig[service.urgency];
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      className={`group bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-cta)] transition-all border-t-4 ${cfg.color} flex flex-col`}
                    >
                      {/* Emoji + Urgency */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.emoji}</span>
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full ${urgency.color}`}
                        >
                          {urgency.label}
                        </span>
                      </div>

                      {/* Name */}
                      <h3
                        className="text-xl font-bold text-[var(--color-navy)] group-hover:text-[var(--color-red)] transition-colors mb-2"
                        style={{ fontFamily: "var(--font-barlow)" }}
                      >
                        {service.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                        {service.tagline}
                      </p>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm font-bold text-[var(--color-navy)]">
                          {service.priceRange}
                        </span>
                        <span className="flex items-center gap-1 text-[var(--color-red)] text-sm font-semibold group-hover:gap-2 transition-all">
                          Details <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Why PestRemovalUSA */}
      <section className="py-20 px-4 bg-[var(--color-navy)] text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Shield className="w-10 h-10 text-[var(--color-red-light)] mb-4" />
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              The PestRemovalUSA Difference
            </h2>
            <ul className="space-y-4">
              {[
                "Specialized technicians, matched to your exact pest type",
                "Licensed in all 50 states, one company, consistent standards",
                "Written quote before work, no surprise charges",
                "Family, pet & environment-safe EPA-registered products",
                "100% satisfaction guarantee with free re-service",
                "Digital inspection reports after every visit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { value: "23+", label: "Pest Species Covered" },
              { value: "50", label: "States Served" },
              { value: "250K+", label: "Homes Protected" },
              { value: "4.9★", label: "12,847 Reviews" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 rounded-[var(--radius-card)] p-6"
              >
                <div
                  className="text-3xl font-black mb-1"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {stat.value}
                </div>
                <div className="text-blue-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-[var(--color-red)] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Not Sure Which Service You Need?
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Call us now, our specialist will identify your pest and recommend the right
            treatment. Free inspection, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-red)] font-bold px-10 py-4 rounded-[var(--radius-btn)] hover:bg-red-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-red)] transition-colors"
            >
              Free Quote Request
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
