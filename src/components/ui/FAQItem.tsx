"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FAQ } from "@/types";

// ─── FAQ Item (accordion) ─────────────────────────────────────────

export interface FAQItemProps {
  faq: FAQ;
  defaultOpen?: boolean;
  className?: string;
}

export function FAQItem({ faq, defaultOpen = false, className }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "border border-[var(--color-navy-100)] rounded-[var(--radius-btn)] overflow-hidden transition-shadow duration-200",
        open && "shadow-[var(--shadow-card)]",
        className
      )}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[var(--color-cream)] transition-colors duration-200 cursor-pointer"
      >
        <span className="font-semibold text-[var(--color-navy)] text-sm md:text-base leading-snug">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-[var(--color-red)] shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="px-5 pb-5 pt-1 bg-white border-t border-[var(--color-navy-100)]">
          <p className="text-sm md:text-base text-[var(--color-slate-custom)] leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ List ─────────────────────────────────────────────────────

export interface FAQListProps {
  faqs: FAQ[];
  className?: string;
  openFirst?: boolean;
}

export function FAQList({ faqs, className, openFirst = true }: FAQListProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)} role="list">
      {faqs.map((faq, i) => (
        <div key={i} role="listitem">
          <FAQItem faq={faq} defaultOpen={openFirst && i === 0} />
        </div>
      ))}
    </div>
  );
}
