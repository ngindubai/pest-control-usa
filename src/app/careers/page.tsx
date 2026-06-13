"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Briefcase, MapPin, DollarSign, Clock, CheckCircle, Users, TrendingUp, Heart } from "lucide-react";

const applicationSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  position: z.string().min(1, "Please select a position"),
  location: z.string().min(2, "City/State required"),
  experience: z.string().min(1, "Please select experience level"),
  message: z.string().optional(),
});

type ApplicationData = z.infer<typeof applicationSchema>;

const openings = [
  {
    title: "Pest Control Technician",
    type: "Full-time",
    locations: ["Nationwide — All States"],
    pay: "$45,000 – $75,000/yr",
    desc: "Join our field team as a licensed pest control technician. No prior experience required — we provide full training and licensing support.",
    requirements: ["Valid driver's license", "Ability to pass background check", "Physical work in various conditions", "Excellent customer communication"],
    highlight: true,
  },
  {
    title: "Senior Pest Control Specialist",
    type: "Full-time",
    locations: ["TX, FL, CA, NY, IL"],
    pay: "$65,000 – $95,000/yr",
    desc: "Lead complex treatment projects including termite, bed bug, and wildlife cases. Mentor junior technicians.",
    requirements: ["3+ years pest control experience", "State pesticide applicator license", "Experience with Termidor, Sentricon, heat treatment"],
    highlight: false,
  },
  {
    title: "Branch Manager",
    type: "Full-time",
    locations: ["Multiple Metro Areas"],
    pay: "$75,000 – $110,000/yr",
    desc: "Manage a team of 10–20 technicians, drive revenue growth, and ensure customer satisfaction in your territory.",
    requirements: ["5+ years in pest control", "Management experience", "Strong P&L understanding", "Licensed or able to obtain license"],
    highlight: false,
  },
  {
    title: "Customer Service Representative",
    type: "Full-time / Part-time",
    locations: ["Remote — USA Only"],
    pay: "$38,000 – $55,000/yr",
    desc: "Handle inbound calls, schedule appointments, and support customers through their service experience.",
    requirements: ["Excellent phone communication", "CRM experience a plus", "Ability to work evenings/weekends", "Reliable internet connection"],
    highlight: false,
  },
  {
    title: "Sales Representative — Residential",
    type: "Full-time",
    locations: ["Nationwide"],
    pay: "$55,000 – $100,000/yr + commission",
    desc: "Generate new residential accounts through door-to-door, digital leads, and referral channels.",
    requirements: ["Sales experience preferred", "Self-motivated", "Valid driver's license", "Territory management skills"],
    highlight: false,
  },
];

const benefits = [
  { icon: DollarSign, label: "Competitive Pay", desc: "Above-market wages + performance bonuses and commission structures" },
  { icon: Heart, label: "Full Benefits", desc: "Medical, dental, vision, and life insurance for you and your family" },
  { icon: TrendingUp, label: "Career Growth", desc: "Clear advancement paths from tech to senior specialist to manager" },
  { icon: Users, label: "Team Culture", desc: "A supportive, safety-first team environment at every branch" },
  { icon: Briefcase, label: "Training Provided", desc: "Paid licensing, NPMA training, and ongoing education" },
  { icon: Clock, label: "Flexible Schedules", desc: "Various shift options available including weekday and weekend routes" },
];

export default function CareersPage() {
  const [applied, setApplied] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationData>({ resolver: zodResolver(applicationSchema) });

  async function onSubmit(data: ApplicationData) {
    setError(false);
    // Job applications go to the inbox via FormSubmit (NOT the sales CRM,
    // which is reserved for customer leads).
    let ok = false;
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/garethsomers@outlook.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          keepalive: true,
          body: JSON.stringify({
            _subject: `Job application — ${data.position} — ${data.name}`,
            _template: "table",
            _captcha: "false",
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
            "City & State": data.location,
            Position: data.position,
            Experience: data.experience,
            Message: data.message || "(none)",
          }),
        }
      );
      ok = res.ok;
    } catch {
      ok = false;
    }
    if (ok) setApplied(true);
    else setError(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Briefcase className="w-4 h-4" />
            We&apos;re Hiring Nationwide
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Build a Career in
            <br />
            <span className="text-[var(--color-red-light)]">Pest Control</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10">
            Join America&apos;s fastest-growing pest control company. We offer competitive pay,
            full benefits, and real career advancement — with positions available in all 50 states.
          </p>
          <a
            href="#openings"
            className="inline-block bg-[var(--color-red)] text-white font-bold px-10 py-5 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors text-lg"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Why Work at PestRemovalUSA?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.label} className="flex items-start gap-4 p-6 bg-[var(--color-muted)] rounded-[var(--radius-card)]">
                <div className="w-12 h-12 bg-[var(--color-navy)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-navy)] mb-1" style={{ fontFamily: "var(--font-barlow)" }}>
                    {b.label}
                  </h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Open Positions
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Positions available immediately across the country.
            </p>
          </div>
          <div className="space-y-5">
            {openings.map((job) => (
              <div
                key={job.title}
                className={`bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] ${job.highlight ? "ring-2 ring-[var(--color-red)]" : ""}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="text-xl font-bold text-[var(--color-navy)]"
                        style={{ fontFamily: "var(--font-barlow)" }}
                      >
                        {job.title}
                      </h3>
                      {job.highlight && (
                        <span className="bg-[var(--color-red)] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          Hiring Now
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.locations.join(", ")}
                      </span>
                      <span className="flex items-center gap-1 text-green-600 font-semibold">
                        <DollarSign className="w-3.5 h-3.5" />
                        {job.pay}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className="bg-[var(--color-navy)] text-white text-sm font-bold px-5 py-2.5 rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity flex-shrink-0"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="text-gray-600 text-sm mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req) => (
                    <span
                      key={req}
                      className="text-xs bg-[var(--color-muted)] text-gray-600 px-2 py-1 rounded"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Apply Today
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Complete the form below and our HR team will reach out within 24 hours.
            </p>
          </div>

          {applied ? (
            <div className="bg-green-50 border border-green-200 rounded-[var(--radius-card)] p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2" style={{ fontFamily: "var(--font-barlow)" }}>
                Application Submitted!
              </h3>
              <p className="text-green-700">Our HR team will contact you within 24 hours. Thank you for your interest in joining PestRemovalUSA!</p>
            </div>
          ) : (
            {error && (
              <div
                role="alert"
                className="mb-5 rounded-[var(--radius-btn)] bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
              >
                Something went wrong submitting your application. Please try again
                in a moment, or email us directly.
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-[var(--color-muted)] p-8 rounded-[var(--radius-card)]" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    {...register("name")}
                    placeholder="Jane Smith"
                    className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)]"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)]"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone *</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)]"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">City & State *</label>
                  <input
                    {...register("location")}
                    placeholder="Dallas, TX"
                    className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)]"
                  />
                  {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Position Applying For *</label>
                  <select
                    {...register("position")}
                    className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)]"
                  >
                    <option value="">Select a position</option>
                    {openings.map((o) => (
                      <option key={o.title} value={o.title}>{o.title}</option>
                    ))}
                  </select>
                  {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Experience Level *</label>
                  <select
                    {...register("experience")}
                    className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)]"
                  >
                    <option value="">Select experience</option>
                    <option value="none">No experience (willing to train)</option>
                    <option value="1-2">1–2 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                  {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Why do you want to join PestRemovalUSA? (Optional)</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us a bit about yourself..."
                  className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--color-red)] text-white font-bold py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors disabled:opacity-60 text-lg"
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
