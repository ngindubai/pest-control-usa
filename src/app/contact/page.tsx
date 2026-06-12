"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, Clock, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  zip: z.string().min(5, "Please enter a valid ZIP code").max(5, "ZIP code must be 5 digits"),
  serviceType: z.enum(["residential", "commercial", "industrial"], {
    message: "Please select a service type",
  }),
  pestType: z.string().min(1, "Please select a pest type"),
  urgency: z.enum(["emergency", "within24", "thisWeek", "flexible"], {
    message: "Please select urgency",
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const pestTypes = [
  "Ants", "Bed Bugs", "Bees / Wasps", "Cockroaches", "Fleas & Ticks",
  "Mosquitoes", "Moths", "Mice / Rats", "Silverfish", "Spiders",
  "Termites", "Wildlife Removal", "Other",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    sub: "Available 24/7 for emergencies",
    href: siteConfig.phoneTel,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    sub: "We reply within 2 hours",
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 7am–8pm",
    sub: "Emergency line available 24/7",
    href: null,
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Dallas, TX",
    sub: "Serving all 50 states",
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError("");
    try {
      await fetch("https://logistics-crm.onrender.com/api/public/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "uRc1IHymlMUnYfAB9i79iA3NUARQKFJdRCdo+4VDY/A=",
        },
        body: JSON.stringify({
          company: "pest-control",
          name: data.name,
          email: data.email,
          phone: data.phone,
          source: "PestRemoval website",
          landing_page: typeof window !== "undefined" ? window.location.href : undefined,
          utm_source: typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("utm_source") ?? undefined
            : undefined,
          utm_medium: typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("utm_medium") ?? undefined
            : undefined,
          utm_campaign: typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("utm_campaign") ?? undefined
            : undefined,
          message: [
            `Service: ${data.serviceType}`,
            `Pest: ${data.pestType}`,
            `Urgency: ${data.urgency}`,
            `ZIP: ${data.zip}`,
            data.message ?? "",
          ]
            .filter(Boolean)
            .join(", "),
          fields: {
            zip: data.zip,
            propertyType:
              data.serviceType.charAt(0).toUpperCase() + data.serviceType.slice(1),
            pestType: data.pestType,
            severity:
              data.urgency === "emergency"
                ? "Severe"
                : data.urgency === "within24"
                ? "Moderate"
                : "Light",
            sameDay: data.urgency === "emergency" ? "true" : "false",
          },
        }),
      });
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try calling us directly.");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Contact PestRemovalUSA
          </h1>
          <p className="text-xl text-blue-200">
            Get a free inspection quote, ask a question, or request emergency service.
            We respond fast — usually within minutes.
          </p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-[var(--color-muted)] py-8 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[var(--color-red)] rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                  {item.label}
                </div>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-bold text-[var(--color-navy)] hover:text-[var(--color-red)] transition-colors text-sm"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <div className="font-bold text-[var(--color-navy)] text-sm">{item.value}</div>
                )}
                <div className="text-xs text-gray-500">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2
              className="text-3xl font-bold text-[var(--color-navy)] mb-2"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Request a Free Inspection
            </h2>
            <p className="text-gray-500 mb-8">
              Fill out the form below and a local specialist will contact you within 30 minutes
              during business hours.
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-[var(--radius-card)] p-10 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3
                  className="text-2xl font-bold text-green-800 mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Request Received!
                </h3>
                <p className="text-green-700 mb-6">
                  A local specialist will contact you shortly. For immediate help, call us now.
                </p>
                <Link
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)]"
                >
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phoneDisplay}
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="John Smith"
                      className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone + ZIP */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      ZIP Code *
                    </label>
                    <input
                      {...register("zip")}
                      placeholder="75001"
                      maxLength={5}
                      className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent"
                    />
                    {errors.zip && (
                      <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Type + Pest Type */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Service Type *
                    </label>
                    <select
                      {...register("serviceType")}
                      className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent"
                    >
                      <option value="">Select service type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                    </select>
                    {errors.serviceType && (
                      <p className="text-red-500 text-xs mt-1">{errors.serviceType.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Type of Pest *
                    </label>
                    <select
                      {...register("pestType")}
                      className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent"
                    >
                      <option value="">Select pest type</option>
                      {pestTypes.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    {errors.pestType && (
                      <p className="text-red-500 text-xs mt-1">{errors.pestType.message}</p>
                    )}
                  </div>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    How Soon Do You Need Service? *
                  </label>
                  <select
                    {...register("urgency")}
                    className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent"
                  >
                    <option value="">Select urgency</option>
                    <option value="emergency">Emergency — ASAP</option>
                    <option value="within24">Within 24 hours</option>
                    <option value="thisWeek">This week</option>
                    <option value="flexible">Flexible / Just getting a quote</option>
                  </select>
                  {errors.urgency && (
                    <p className="text-red-500 text-xs mt-1">{errors.urgency.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us more about your pest problem..."
                    className="w-full border border-gray-300 rounded-[var(--radius-btn)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent resize-none"
                  />
                </div>

                {serverError && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{serverError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-red)] text-white font-bold py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? "Sending Request..." : "Request Free Inspection"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to receive communications from PestRemovalUSA.
                  We never share your information with third parties.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Emergency CTA */}
            <div className="bg-[var(--color-red)] text-white rounded-[var(--radius-card)] p-6">
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Pest Emergency?
              </h3>
              <p className="text-red-100 text-sm mb-4">
                Don&apos;t wait. Our emergency team is available 24/7.
              </p>
              <Link
                href={siteConfig.phoneTel}
                className="flex items-center gap-2 bg-white text-[var(--color-red)] font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-red-50 transition-colors w-full justify-center"
              >
                <Phone className="w-5 h-5" />
                Call Now: {siteConfig.phoneDisplay}
              </Link>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[var(--color-muted)] rounded-[var(--radius-card)] p-6">
              <h3
                className="text-lg font-bold text-[var(--color-navy)] mb-4"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Why Choose PestRemovalUSA?
              </h3>
              <ul className="space-y-3">
                {[
                  "Free inspection & quote",
                  "Same-day service available",
                  "100% satisfaction guarantee",
                  "Licensed & insured technicians",
                  "Eco-friendly treatment options",
                  "No hidden fees — ever",
                  "Serving all 50 states",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-[var(--radius-card)] overflow-hidden aspect-[4/3] flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-400">
                <MapPin className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-medium">Coverage Map</p>
                <p className="text-xs">All 50 states</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
