"use client";

import Link from "next/link";
import { Phone, RotateCcw, Home } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-[var(--color-muted)] flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <div
          className="text-7xl font-black text-[var(--color-red)] mb-4"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Oops
        </div>
        <h1
          className="text-3xl font-bold text-[var(--color-navy)] mb-4"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Something went wrong
        </h1>
        <p className="text-[var(--color-slate-custom)] mb-8 leading-relaxed">
          An unexpected error occurred. Please try refreshing the page or
          return to the homepage. If the problem persists, call us directly —
          we&apos;re always available.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-navy)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
            Homepage
          </Link>
          <Link
            href={siteConfig.phoneTel}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phoneDisplay}
          </Link>
        </div>
        {error.digest && (
          <p className="text-gray-400 text-xs mt-6">Error ID: {error.digest}</p>
        )}
      </div>
    </main>
  );
}
