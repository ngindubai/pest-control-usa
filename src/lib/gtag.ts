// ─── Google Analytics 4, G-TH7MHNJB97 ─────────────────────────

export const GA_MEASUREMENT_ID = "G-TH7MHNJB97";

// Extend the Window type so TypeScript is happy everywhere.
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

// Safe wrapper, no-ops if gtag isn't loaded yet (SSR / pre-hydration).
export function gtag(...args: Parameters<typeof window.gtag>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

// ─── Typed event helpers ──────────────────────────────────────────

/** Fire a GA4 custom event. */
export function gtagEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  gtag("event", eventName, params);
}

/** User clicked a phone number link. */
export function trackPhoneCall(location?: string) {
  gtagEvent("phone_call", {
    event_category: "engagement",
    event_label: location ?? "unknown",
  });
}

/** User clicked a WhatsApp button/link. */
export function trackWhatsAppClick(location?: string) {
  gtagEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: location ?? "unknown",
  });
}

/** User successfully submitted any lead / quote / contact form. */
export function trackFormSubmit(formId: string, pestType?: string) {
  // GA4 recommended event
  gtagEvent("generate_lead", {
    event_category: "lead",
    event_label: formId,
    pest_type: pestType,
  });
}
