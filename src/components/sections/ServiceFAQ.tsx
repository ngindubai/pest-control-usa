"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ServiceFAQItem } from "@/data/services";

export default function ServiceFAQ({ faqs }: { faqs: ServiceFAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-[var(--radius-card)] overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[var(--color-muted)] transition-colors"
          >
            <span className="font-semibold text-[var(--color-navy)] pr-4">{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 text-[var(--color-red)] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 pt-2 bg-white border-t border-gray-100">
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
