"use client";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Phone, X, AlertTriangle } from "lucide-react";
import { useState } from "react";

// ─── Emergency Banner (sticky / inline) ──────────────────────────

export interface EmergencyBannerProps {
  variant?: "inline" | "sticky-top";
  className?: string;
}

export function EmergencyBanner({
  variant = "inline",
  className,
}: EmergencyBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Emergency pest removal available"
      className={cn(
        "bg-[var(--color-red)] text-white",
        variant === "sticky-top" && "fixed top-0 left-0 right-0 z-50 shadow-md",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <AlertTriangle size={16} className="shrink-0 animate-bounce" aria-hidden="true" />
          <p className="text-sm font-semibold truncate">
            <span className="font-black">24/7 Emergency Pest Removal</span>
            {" — "}
            <span className="hidden sm:inline">We respond in under 60 minutes. </span>
            <a
              href={siteConfig.phoneTel}
              className="underline underline-offset-2 hover:no-underline font-black"
              aria-label={`Call emergency line ${siteConfig.phoneDisplay}`}
            >
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={siteConfig.phoneTel}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white text-[var(--color-red)] font-bold text-xs px-3 py-1.5 rounded-full hover:bg-red-50 transition-colors"
            aria-label="Call now for emergency pest removal"
          >
            <Phone size={12} aria-hidden="true" />
            Call Now
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss emergency banner"
            className="text-white/80 hover:text-white transition-colors p-0.5 rounded"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Offer Banner (promotional strip) ────────────────────────────

export interface OfferBannerProps {
  message?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export function OfferBanner({
  message = "🎉 New customer special: $50 OFF your first treatment",
  ctaText = "Claim Offer",
  ctaHref = "/contact",
  className,
}: OfferBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className={cn(
        "bg-[var(--color-navy)] text-white py-2.5 px-4",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{message}</p>
          {ctaHref && (
            <a
              href={ctaHref}
              className="shrink-0 text-xs font-bold text-[var(--color-red)] underline underline-offset-2 hover:no-underline"
            >
              {ctaText}
            </a>
          )}
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss offer"
          className="text-white/60 hover:text-white transition-colors p-0.5 rounded shrink-0"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
