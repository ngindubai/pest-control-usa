"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, ArrowRight, CheckCircle2, Shield, Star, Clock, Leaf, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackFormSubmit, trackPhoneCall } from "@/lib/gtag";

const pestTypes = [
  { value: "", label: "Select pest type..." },
  { value: "rodents", label: "Rodents (mice / rats)" },
  { value: "termites", label: "Termites" },
  { value: "bed-bugs", label: "Bed Bugs" },
  { value: "cockroaches", label: "Cockroaches" },
  { value: "ants", label: "Ants" },
  { value: "wasps-bees", label: "Wasps / Bees" },
  { value: "wildlife", label: "Wildlife (raccoon, bat, squirrel)" },
  { value: "mosquitoes", label: "Mosquitoes" },
  { value: "spiders", label: "Spiders" },
  { value: "fleas-ticks", label: "Fleas / Ticks" },
  { value: "other", label: "Other / Not Sure" },
];

const trustPills = [
  { icon: CheckCircle2, text: "Licensed & Insured" },
  { icon: Star, text: "4.9\u2605 Google Rating" },
  { icon: Clock, text: "Same-Day Service" },
  { icon: Leaf, text: "Eco-Safe Treatments" },
];

const heroStats = [
  { value: siteConfig.stats.homesTreated, label: "Homes Treated" },
  { value: `${siteConfig.stats.statesCovered} States`, label: "Nationwide Coverage" },
  { value: siteConfig.stats.rating + "\u2605", label: "Average Rating" },
  { value: siteConfig.stats.yearsInBusiness, label: "Years Experience" },
];

export function HomepageHero() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const fd = new FormData(e.currentTarget);
    const zip = (fd.get("zip") || "").toString().trim();
    const pestValue = (fd.get("pestType") || "").toString();
    const pestLabel =
      pestTypes.find((p) => p.value === pestValue)?.label || pestValue;
    const name = (fd.get("name") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();

    const qs =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();

    // 1. CRM (system of record) — retried, it can cold-start.
    const sendToCrm = async (): Promise<boolean> => {
      const payload = {
        company: "pest-control",
        name: name || "Website enquiry",
        phone: phone || undefined,
        source: "PestRemoval website — hero form",
        landing_page:
          typeof window !== "undefined" ? window.location.href : undefined,
        utm_source: qs.get("utm_source") ?? undefined,
        utm_medium: qs.get("utm_medium") ?? undefined,
        utm_campaign: qs.get("utm_campaign") ?? undefined,
        message: [`Pest: ${pestLabel}`, `ZIP: ${zip}`]
          .filter(Boolean)
          .join(", "),
        fields: { zip, pestType: pestLabel },
      };
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const res = await fetch(
            "https://logistics-crm-tcu4.onrender.com/api/public/leads",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": "uRc1IHymlMUnYfAB9i79iA3NUARQKFJdRCdo+4VDY/A=",
              },
              keepalive: true,
              body: JSON.stringify(payload),
            }
          );
          if (res.ok) return true;
        } catch {
          // network error — retry
        }
        if (attempt < 2)
          await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
      }
      return false;
    };

    // 2. Email — FormSubmit AJAX (same address as the other forms).
    const sendToEmail = async (): Promise<boolean> => {
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
              _subject: `New pest enquiry (hero) — ${name}`,
              _template: "table",
              _captcha: "false",
              Name: name,
              Phone: phone,
              ZIP: zip,
              "Pest type": pestLabel,
              "Landing page":
                typeof window !== "undefined" ? window.location.href : "",
            }),
          }
        );
        return res.ok;
      } catch {
        return false;
      }
    };

    const [crmOk, emailOk] = await Promise.all([sendToCrm(), sendToEmail()]);
    setLoading(false);
    if (crmOk || emailOk) {
      // ✅ Fire GA4 lead event on success
      trackFormSubmit("hero_form", pestLabel);
      setSubmitted(true);
    } else {
      setError(true);
    }
  };

  return (
    <section
      className="relative bg-[var(--color-navy)] overflow-hidden"
      style={{ minHeight: "91vh" }}
      aria-label="Hero — Get a free pest control quote"
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy)] to-[#1a2f5e]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#162347] to-transparent" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[var(--color-red)] opacity-[0.04] rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-[var(--color-red)] opacity-[0.04] rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(var(--color-cream) 1px,transparent 1px),linear-gradient(90deg,var(--color-cream) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ──────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-red)]/20 border border-[var(--color-red)]/30 text-[var(--color-red)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <Shield size={12} aria-hidden="true" />
              America&apos;s Most Trusted Pest Control
            </div>

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Pest &amp; Wildlife
              <br />
              Removal That
              <br />
              <span className="text-[var(--color-red)]">Actually Works.</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              Licensed exterminators available{" "}
              <strong className="text-white font-semibold">same-day</strong> across
              48 states. Rodents, termites, wildlife, bed bugs — eliminated with a
              <strong className="text-white font-semibold"> 100% satisfaction guarantee</strong>.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Trust signals">
              {trustPills.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  role="listitem"
                  className="inline-flex items-center gap-1.5 bg-white/8 text-white/80 text-sm px-3 py-1.5 rounded-full border border-white/10"
                >
                  <Icon size={13} className="text-[var(--color-red)]" aria-hidden="true" />
                  {text}
                </span>
              ))}
            </div>

            {/* CTA cluster */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-2.5 bg-[var(--color-red)] hover:bg-[var(--color-red-light)] text-white font-black text-lg px-6 py-4 rounded-[var(--radius-btn)] shadow-[var(--shadow-cta)] transition-colors"
                aria-label={`Call ${siteConfig.phoneDisplay} for emergency pest removal`}
                onClick={() => trackPhoneCall("hero_cta")}
              >
                <Phone size={20} aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
              <div className="text-sm leading-snug">
                <span className="block font-bold text-white">24/7 Emergency Line</span>
                <span className="text-white/50">Technician answers immediately</span>
              </div>
            </div>

            <p className="mt-5 text-xs text-white/35 flex items-center gap-1.5">
              <AlertTriangle size={11} aria-hidden="true" />
              Pest emergency? We dispatch in under 60 minutes.
            </p>
          </div>

          {/* ── Right: Quote form ────────────────────────────── */}
          <div>
            <div className="bg-white rounded-[var(--radius-card)] shadow-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    aria-hidden="true"
                  >
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h2
                    className="text-2xl font-black text-[var(--color-navy)] mb-2"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    Quote Request Received!
                  </h2>
                  <p className="text-[var(--color-slate-custom)] text-sm mb-5">
                    A local certified technician will call you within{" "}
                    <strong>10 minutes</strong>.
                  </p>
                  <a
                    href={siteConfig.phoneTel}
                    className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-5 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors text-sm"
                    onClick={() => trackPhoneCall("hero_form_success_cta")}
                  >
                    <Phone size={14} aria-hidden="true" />
                    Call Now Instead: {siteConfig.phoneDisplay}
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)] mb-1">
                      Free Inspection &amp; Quote
                    </p>
                    <h2
                      className="text-2xl font-black text-[var(--color-navy)] leading-snug"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      Get Your Free Quote
                      <br />
                      in 60 Seconds
                    </h2>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="mb-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-700"
                    >
                      Something went wrong submitting your request. Please call us
                      at{" "}
                      <a
                        href={siteConfig.phoneTel}
                        className="font-bold underline"
                        onClick={() => trackPhoneCall("hero_form_error_fallback")}
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      .
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Free pest control quote request form"
                  >
                    <div className="space-y-3.5">
                      <div className="grid grid-cols-2 gap-3">
                        {/* ZIP */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="hero-zip"
                            className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wide"
                          >
                            ZIP Code <span className="text-[var(--color-red)]">*</span>
                          </label>
                          <input
                            id="hero-zip" name="zip"
                            type="text"
                            inputMode="numeric"
                            maxLength={5}
                            pattern="[0-9]{5}"
                            placeholder="e.g. 77001"
                            required
                            className="px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20 text-[var(--color-navy)] placeholder:text-gray-400"
                          />
                        </div>
                        {/* Pest type */}
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="hero-pest"
                            className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wide"
                          >
                            Pest Type <span className="text-[var(--color-red)]">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="hero-pest" name="pestType"
                              required
                              defaultValue=""
                              className="w-full appearance-none px-3 py-2.5 pr-8 rounded-lg border border-gray-200 text-sm focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20 text-[var(--color-navy)] bg-white cursor-pointer"
                            >
                              {pestTypes.map((o) => (
                                <option
                                  key={o.value}
                                  value={o.value}
                                  disabled={o.value === ""}
                                >
                                  {o.label}
                                </option>
                              ))}
                            </select>
                            <svg
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Name */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="hero-name"
                          className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wide"
                        >
                          Full Name <span className="text-[var(--color-red)]">*</span>
                        </label>
                        <input
                          id="hero-name" name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="First and last name"
                          required
                          className="px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20 text-[var(--color-navy)] placeholder:text-gray-400"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="hero-phone"
                          className="text-xs font-bold text-[var(--color-navy)] uppercase tracking-wide"
                        >
                          Phone Number <span className="text-[var(--color-red)]">*</span>
                        </label>
                        <input
                          id="hero-phone" name="phone"
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          placeholder="(555) 000-0000"
                          required
                          className="px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20 text-[var(--color-navy)] placeholder:text-gray-400"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className={cn(
                          "w-full flex items-center justify-center gap-2 bg-[var(--color-red)] text-white font-black text-base py-3.5 rounded-[var(--radius-btn)] transition-all duration-200 shadow-[var(--shadow-cta)] cursor-pointer",
                          loading
                            ? "opacity-75 cursor-wait"
                            : "hover:bg-[var(--color-red-light)] hover:shadow-xl"
                        )}
                      >
                        {loading ? (
                          <>
                            <span
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                              aria-hidden="true"
                            />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Get My Free Quote
                            <ArrowRight size={18} aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  <p className="text-center text-xs text-[var(--color-slate-custom)] mt-3">
                    No obligation &middot; Local tech calls within 10 min &middot; Free inspection
                  </p>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="flex" aria-label="4.9 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-[var(--color-slate-custom)]">
                      {siteConfig.stats.rating}/5 from {siteConfig.stats.reviewCount} reviews
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Social proof below form */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "BBB Accredited", sub: "A+ Rating" },
                { label: "Google Verified", sub: "4.9★ Avg" },
                { label: "Satisfaction", sub: "Guaranteed" },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-center"
                >
                  <p className="text-xs font-bold text-white leading-snug">{label}</p>
                  <p className="text-[10px] text-white/50 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom stats bar ─────────────────────────────── */}
        <div
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6"
          aria-label="Company statistics"
        >
          {heroStats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-3xl lg:text-4xl font-black text-white mb-1"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {value}
              </p>
              <p className="text-sm text-white/50">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
