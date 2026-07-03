"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackPhoneCall } from "@/lib/gtag";

// Sticky bottom CTA bar, mobile only. Every other phone CTA on the page can be
// scrolled past, this one stays in the thumb zone the whole visit.
export function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 flex md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={siteConfig.phoneTel}
        onClick={() => trackPhoneCall("mobile_sticky_bar")}
        className="flex flex-[2] items-center justify-center gap-2 bg-[var(--color-red)] py-3.5 text-base font-bold text-white active:bg-[var(--color-red-light)]"
        aria-label={`Call ${siteConfig.phoneDisplay}`}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center border-l border-white/20 bg-[var(--color-navy)] py-3.5 text-sm font-bold text-white active:bg-[var(--color-navy-light)]"
      >
        Free quote
      </Link>
    </div>
  );
}
