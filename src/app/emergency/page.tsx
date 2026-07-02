import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, Zap, CheckCircle, AlertTriangle, Bug } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "24/7 Emergency Pest Control | PestRemovalUSA: Same-Day Response",
  description:
    "Emergency pest control available 24 hours a day, 7 days a week. Call 1-800-PEST-USA for same-day response to bee swarms, rodent invasions, bed bug outbreaks, and more.",
  alternates: { canonical: "https://pestremovalusa.com/emergency/" },
  openGraph: {
    title: "24/7 Emergency Pest Control | Call Now: 1-800-PEST-USA",
    description: "Same-day emergency pest removal. Call anytime, our technicians are standing by.",
    url: "https://pestremovalusa.com/emergency/",
  },
};

const emergencyPests = [
  { icon: Bug, name: "Wasps & Bee Swarms", desc: "Active nests near living areas, immediate health risk. Same-hour response available." },
  { icon: Bug, name: "Bed Bug Outbreak", desc: "Rapid infestation spread if untreated. Contain and treat within 24 hours." },
  { icon: Bug, name: "Rodent Invasion", desc: "Mice or rats in living areas, kitchen, or near food. Health code emergency." },
  { icon: Bug, name: "Cockroach Infestation", desc: "Large infestations in kitchens or commercial food areas require immediate action." },
  { icon: Bug, name: "Wildlife in Home", desc: "Raccoons, bats, squirrels, or snakes inside your home, call immediately." },
  { icon: Bug, name: "Termite Swarm", desc: "Active termite swarm inside the home indicates severe structural infestation." },
];

const guarantees = [
  { label: "Response Time", value: "Under 1 Hour", sub: "In most metro areas" },
  { label: "Available", value: "24/7/365", sub: "Nights, weekends, holidays" },
  { label: "Technicians", value: "12,000+", sub: "Nationwide coverage" },
  { label: "Guarantee", value: "100%", sub: "Satisfaction or free re-service" },
];

const steps = [
  { num: "01", title: "Call or Text Us", desc: "Call 1-800-PEST-USA or text your ZIP + pest issue. Our dispatcher answers immediately." },
  { num: "02", title: "We Dispatch Locally", desc: "We identify the nearest available certified technician to your location and dispatch immediately." },
  { num: "03", title: "Technician Arrives", desc: "A licensed professional arrives at your door, typically within 30 to 60 minutes in metro areas." },
  { num: "04", title: "Fast, Safe Treatment", desc: "Using the appropriate emergency treatment protocol, we eliminate the immediate threat and secure your home." },
];

export default function EmergencyPage() {
  return (
    <>
      {/* Emergency Hero */}
      <section className="bg-[var(--color-red)] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
            <span className="text-red-100 text-sm font-semibold uppercase tracking-widest">
              Emergency Line Active, Responding Now
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Pest Emergency?
            <br />
            We&apos;re Here Now.
          </h1>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            Our 24/7 emergency pest control team is standing by. Technicians available in all 50
            states, typically arriving within 30 to 60 minutes in metro areas.
          </p>
          <Link
            href={siteConfig.phoneTel}
            className="inline-flex items-center gap-3 bg-white text-[var(--color-red)] font-black text-2xl md:text-3xl px-10 py-6 rounded-[var(--radius-btn)] hover:bg-red-50 transition-colors shadow-2xl"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            <Phone className="w-8 h-8" />
            {siteConfig.phoneDisplay}
          </Link>
          <p className="text-red-200 mt-4 text-sm">
            Or text your ZIP code + pest problem to {siteConfig.phone}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[var(--color-navy)] py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {guarantees.map((g) => (
            <div key={g.label} className="text-center">
              <div
                className="text-3xl font-black text-white mb-1"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {g.value}
              </div>
              <div className="text-red-300 text-xs font-semibold uppercase tracking-wide">
                {g.label}
              </div>
              <div className="text-blue-300 text-xs">{g.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What Qualifies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-10 h-10 text-[var(--color-red)] mx-auto mb-4" />
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Pest Emergencies We Handle
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              These situations require immediate action, don&apos;t wait until morning.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {emergencyPests.map((p) => (
              <div
                key={p.name}
                className="border-l-4 border-[var(--color-red)] bg-red-50 rounded-r-[var(--radius-card)] p-5"
              >
                <h3
                  className="font-bold text-[var(--color-navy)] mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              How Emergency Response Works
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Fast, simple, and effective, from your first call to the pest being gone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] text-center"
              >
                <div
                  className="text-5xl font-black text-[var(--color-red)] opacity-20 mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-bold text-[var(--color-navy)] mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 px-4 bg-[var(--color-navy)] text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Zap className="w-10 h-10 text-[var(--color-red-light)] mb-4" />
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Why Call PestRemovalUSA for Emergencies?
            </h2>
            <ul className="space-y-4">
              {[
                "Fastest response time in the industry, under 60 minutes in most cities",
                "All emergency technicians are fully licensed and insured",
                "We carry emergency-grade treatment products in every truck",
                "No extra charge for after-hours or weekend emergency calls",
                "Satisfaction guaranteed, if pests return, we come back free",
                "Available in all 50 states, rural and urban coverage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <Clock className="w-24 h-24 text-[var(--color-red-light)] mx-auto mb-6 opacity-80" />
            <div
              className="text-6xl font-black mb-2"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              &lt;60 min
            </div>
            <p className="text-blue-200 text-lg">Average emergency response time in metro areas</p>
            <Link
              href={siteConfig.phoneTel}
              className="mt-8 inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now: {siteConfig.phoneDisplay}
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-12 px-4 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <Shield className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-amber-900 mb-1">Safety First</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              While waiting for our technician, stay away from pest areas. For bee or wasp swarms,
              keep all family members and pets indoors. For rodents, avoid touching droppings or dead
              rodents without gloves. Our technician will handle everything safely upon arrival.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
