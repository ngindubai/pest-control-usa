"use client";

import { useState } from "react";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackFormSubmit, trackPhoneCall } from "@/lib/gtag";
import type { CityLocation } from "@/types";

// Compact 3-field lead form for city pages. Same CRM and email submission
// targets as the contact page and the homepage hero form, just shorter,
// since city pages are a first-touch page for most visitors.
export function CityLeadForm({ city }: { city: CityLocation }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const zip = (fd.get("zip") || "").toString().trim();

    const qs =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();

    const sendToCrm = async (): Promise<boolean> => {
      const payload = {
        company: "pest-control",
        name: name || "Website enquiry",
        phone: phone || undefined,
        source: `PestRemoval website, city page (${city.name}, ${city.stateAbbr})`,
        landing_page:
          typeof window !== "undefined" ? window.location.href : undefined,
        utm_source: qs.get("utm_source") ?? undefined,
        utm_medium: qs.get("utm_medium") ?? undefined,
        utm_campaign: qs.get("utm_campaign") ?? undefined,
        message: [`City: ${city.name}, ${city.stateAbbr}`, `ZIP: ${zip}`]
          .filter(Boolean)
          .join(", "),
        fields: { zip, city: city.name, state: city.state },
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
          // network error, retry
        }
        if (attempt < 2)
          await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
      }
      return false;
    };

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
              _subject: `New pest enquiry (${city.name}, ${city.stateAbbr})`,
              _template: "table",
              _captcha: "false",
              Name: name,
              Phone: phone,
              ZIP: zip,
              City: `${city.name}, ${city.stateAbbr}`,
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
      trackFormSubmit("city_page_form", city.name);
      setSubmitted(true);
    } else {
      setError(true);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-card)] border border-gray-200 bg-white p-5 text-center">
        <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-green-600" aria-hidden="true" />
        <p className="font-bold text-[var(--color-navy)]">Request received.</p>
        <p className="mt-1 text-sm text-[var(--color-slate-custom)]">
          A local technician will call you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-gray-200 bg-white p-5">
      <p className="mb-3 font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-navy)]">
        Get a free local quote
      </p>
      <form onSubmit={handleSubmit} noValidate aria-label={`Get a free quote in ${city.name}`}>
        <div className="space-y-2">
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20"
          />
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Phone number"
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20"
          />
          <input
            name="zip"
            type="text"
            inputMode="numeric"
            maxLength={5}
            pattern="[0-9]{5}"
            placeholder="ZIP code"
            required
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--color-red)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red)]/20"
          />
          {error && (
            <p role="alert" className="text-xs text-red-700">
              Something went wrong. Please call us instead.
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-red)] py-2.5 text-sm font-bold text-white shadow-[var(--shadow-cta)] transition-colors",
              loading ? "cursor-wait opacity-75" : "hover:bg-[var(--color-red-light)]"
            )}
          >
            {loading ? "Submitting..." : (
              <>
                Get my free quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </form>
      <a
        href={siteConfig.phoneTel}
        onClick={() => trackPhoneCall("city_page_form_alt")}
        className="mt-3 flex items-center justify-center gap-1.5 text-sm font-semibold text-[var(--color-navy)] hover:underline"
      >
        <Phone className="h-3.5 w-3.5" aria-hidden="true" />
        Or call {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}
