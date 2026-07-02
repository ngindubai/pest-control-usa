import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Shield, Users, Award, CheckCircle, Star, Clock, MapPin, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "About PestRemovalUSA | Nationwide Pest Control Since 2005",
  description:
    "Learn about PestRemovalUSA, America's trusted nationwide pest control company. Licensed technicians, eco-friendly treatments, and a 100% satisfaction guarantee in all 50 states.",
  alternates: { canonical: "https://pestremovalusa.com/about/" },
  openGraph: {
    title: "About PestRemovalUSA | Nationwide Pest Control Since 2005",
    description:
      "America's trusted pest control network, 12,000+ licensed technicians, 50 states, 100% guarantee.",
    url: "https://pestremovalusa.com/about/",
  },
};

const stats = [
  { value: "20+", label: "Years in Business" },
  { value: "50", label: "States Served" },
  { value: "12,000+", label: "Licensed Technicians" },
  { value: "2.4M+", label: "Homes Protected" },
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
    desc: "Every technician is state-licensed, NPMA-trained, and undergoes continuous education to stay current with best practices.",
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

const certifications = [
  "National Pest Management Association (NPMA) Member",
  "EPA Registered Pesticide Programs Compliant",
  "QualityPro Certified (Industry Gold Standard)",
  "GreenPro Eco-Certification",
  "Better Business Bureau A+ Rating",
  "State-Licensed in All 50 States",
  "OSHA Safety Trained Workforce",
  "ISO 9001 Quality Management Certified",
];

const leadership = [
  {
    name: "Robert Harmon",
    title: "Chief Executive Officer",
    bio: "20+ years in pest management. Former NPMA board member and advocate for eco-responsible pest control practices nationwide.",
    initials: "RH",
  },
  {
    name: "Sandra Kline",
    title: "Chief Operations Officer",
    bio: "Built our national technician network from the ground up. Expert in logistics, quality control, and field operations across all 50 states.",
    initials: "SK",
  },
  {
    name: "Dr. Marcus Webb",
    title: "Chief Entomologist",
    bio: "PhD in Entomology from UC Davis. Leads our R&D team on treatment protocols, resistance management, and new pest threats.",
    initials: "MW",
  },
  {
    name: "Alicia Torres",
    title: "VP of Customer Experience",
    bio: "Champion of our 100% satisfaction guarantee program. Ensures every customer interaction exceeds expectations.",
    initials: "AT",
  },
];

const timeline = [
  { year: "2005", event: "Founded in Dallas, TX with a 12-technician team serving the DFW metro area." },
  { year: "2008", event: "Expanded to 10 states; launched 24/7 emergency response program." },
  { year: "2012", event: "Crossed 1 million homes treated; earned QualityPro certification." },
  { year: "2015", event: "National coverage achieved, all 50 states and DC." },
  { year: "2018", event: "Launched GreenPro eco-friendly treatment line; grew to 6,000 technicians." },
  { year: "2021", event: "Surpassed 2 million homes protected; launched online instant quote system." },
  { year: "2024", event: "12,000+ technicians, 4.9-star average rating, named #1 pest control company by Consumer Reports." },
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
            Est. 2005, Trusted Nationwide
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
            For over 20 years, PestRemovalUSA has protected American families and businesses from
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
                Our Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{cert}</span>
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

      {/* Leadership */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Leadership Team
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Experienced professionals committed to excellence in pest management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] text-center"
              >
                <div className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {person.initials}
                </div>
                <h3
                  className="font-bold text-[var(--color-navy)] mb-1"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {person.name}
                </h3>
                <div className="text-[var(--color-red)] text-sm font-semibold mb-3">
                  {person.title}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Snapshot */}
      <section className="py-16 px-4 bg-[var(--color-navy)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div
            className="text-5xl font-black mb-2"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            4.9 / 5.0
          </div>
          <p className="text-blue-200 text-lg mb-8">
            Based on 12,847 verified customer reviews across all 50 states
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reviews"
              className="bg-white text-[var(--color-navy)] font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-blue-50 transition-colors"
            >
              Read Customer Reviews
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
