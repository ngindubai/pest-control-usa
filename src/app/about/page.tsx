import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Shield, ShieldCheck, Users, Award, CheckCircle, Clock, MapPin, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "About PestRemovalUSA | Nationwide Pest Control Since 2011",
  description:
    "Learn about PestRemovalUSA, America's trusted nationwide pest control company. Licensed technicians, eco-friendly treatments, and a 100% satisfaction guarantee in all 50 states and Washington, DC.",
  alternates: { canonical: "https://pestremovalusa.com/about/" },
  openGraph: {
    title: "About PestRemovalUSA | Nationwide Pest Control Since 2011",
    description:
      "America's pest control network of licensed, insured local technicians. 50 states + DC, same-day service, satisfaction guarantee.",
    url: "https://pestremovalusa.com/about/",
  },
};

const stats = [
  { value: siteConfig.stats.statesCovered, label: "States + DC Served" },
  { value: "24/7", label: "Emergency Service" },
  { value: "Same-Day", label: "Appointments Available" },
  { value: "Free", label: "Inspections & Quotes" },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "We use EPA-registered, family-safe treatments that protect your household, including children and pets, while eliminating pests.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Methods",
    desc: "Our Integrated Pest Management (IPM) approach minimizes chemical use, combining exclusion, sanitation, and targeted treatments.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    desc: "The local technicians in our network are licensed and insured, and stay current with ongoing training and industry best practices.",
  },
  {
    icon: CheckCircle,
    title: "Guaranteed Results",
    desc: "If pests return between scheduled treatments, we come back at no additional charge. Your satisfaction is our promise.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Pest emergencies don't keep business hours. Our emergency response team is available around the clock, every day of the year.",
  },
  {
    icon: Users,
    title: "Community Focused",
    desc: "We partner with local technicians nationwide, ensuring area-specific expertise and a personal touch backed by national resources.",
  },
];

const standards = [
  "Licensed, insured local technicians",
  "EPA-registered products, applied to the label",
  "Integrated Pest Management (IPM) approach",
  "Family and pet safe treatment options",
  "Written quotes and upfront pricing",
  "Satisfaction guarantee with free re-treatments",
  "Coverage in all 50 states and Washington, DC",
];

const teamGroups = [
  {
    icon: Users,
    title: "Field Technicians",
    desc: "State-licensed applicators who handle every inspection and treatment visit, trained on the full range of pests we service and recertified on an ongoing basis.",
  },
  {
    icon: Shield,
    title: "Regional Coordinators",
    desc: "Local coordinators in each service area match technicians to appointments, keep response times fast, and know the pest pressure specific to their region.",
  },
  {
    icon: Award,
    title: "IPM & Safety Advisors",
    desc: "Our Integrated Pest Management specialists set treatment standards, review product safety, and keep every crew current on EPA-registered methods.",
  },
];

const timeline = [
  { year: "2011", event: "Founded in Dallas, TX, serving the DFW metro area." },
  { year: "2014", event: "Added wildlife removal alongside our core pest control services." },
  { year: "2017", event: "Reached licensed coverage across more than half the country." },
  { year: "2020", event: "Completed nationwide expansion to all 50 states and Washington, DC." },
  { year: "2023", event: "Grew our network of licensed local technicians to cover communities in every state." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-[var(--color-navy)] text-white py-20 px-4"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Est. 2011, Trusted Nationwide
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            America&apos;s Most Trusted
            <br />
            <span className="text-[var(--color-red-light)]">Pest Control Company</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            For over 15 years, PestRemovalUSA has protected American families and businesses from
            pests, with licensed experts in every state, eco-responsible treatments, and a
            satisfaction guarantee you can count on.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-4xl font-black text-[var(--color-red-light)] mb-1"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {s.value}
                </div>
                <div className="text-sm text-blue-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-[var(--color-navy)] mb-6"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe every American family deserves a pest-free home. Our mission is to
                deliver reliable, affordable, and environmentally responsible pest control solutions,
                backed by certified professionals and a guarantee that stands behind every visit.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We&apos;re not just eliminating pests. We&apos;re protecting your family&apos;s
                health, preserving your property value, and giving you peace of mind in the place
                that matters most, your home.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
              >
                Get a Free Inspection
              </Link>
            </div>
            <div className="bg-[var(--color-muted)] rounded-[var(--radius-card)] p-8">
              <h3
                className="text-2xl font-bold text-[var(--color-navy)] mb-6"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Our Standards
              </h3>
              <ul className="space-y-3">
                {standards.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              What We Stand For
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)] max-w-2xl mx-auto">
              Six principles that guide every inspection, every treatment, and every customer
              interaction across our nationwide network.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)]"
              >
                <div className="w-12 h-12 bg-[var(--color-navy)] rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-[var(--color-navy)] mb-3"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Our Story
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              From a small Texas team to the nation&apos;s most trusted pest control network.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-navy)] opacity-20" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-navy)] rounded-full flex items-center justify-center text-white text-xs font-bold z-10">
                    {item.year.slice(2)}
                  </div>
                  <div className="pt-2 pb-6">
                    <div
                      className="text-lg font-bold text-[var(--color-navy)] mb-1"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {item.year}
                    </div>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Our Team
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              A nationwide network of licensed professionals, organized to get a technician
              to your door fast without sacrificing local knowledge.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {teamGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] text-center"
              >
                <div className="w-14 h-14 bg-[var(--color-navy)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <group.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="font-bold text-[var(--color-navy)] mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {group.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our commitment */}
      <section className="py-16 px-4 bg-[var(--color-navy)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <ShieldCheck className="w-12 h-12 text-[var(--color-red)] mx-auto mb-4" aria-hidden="true" />
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Our Commitment to You
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Licensed, insured local technicians, clear upfront pricing, and a satisfaction
            guarantee on every visit. If covered pests come back between treatments, so do we.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--color-navy)] font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              Call {siteConfig.phoneDisplay}
            </Link>
          </div>
        </div>
      </section>

      {/* Locations CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--color-muted)] rounded-[var(--radius-card)] p-12 text-center">
            <MapPin className="w-12 h-12 text-[var(--color-red)] mx-auto mb-6" />
            <h2
              className="text-3xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Serving Communities Nationwide
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              With licensed technicians in every state, we&apos;re always close by. Find your local
              PestRemovalUSA expert and get a same-day inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/locations"
                className="bg-[var(--color-navy)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
              >
                Find Your Location
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
