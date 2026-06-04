import Link from "next/link";
import { Phone, Clock, ArrowRight, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function HomepageEmergency() {
  return (
    <section
      className="relative bg-[var(--color-red)] py-20 md:py-24 overflow-hidden"
      aria-label="24/7 emergency pest removal"
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-[0.04] rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white opacity-[0.04] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-white rounded-full animate-ping" aria-hidden="true" />
          Available Right Now
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Pest Emergency?
          <br />
          We&apos;re Ready 24/7/365.
        </h2>

        <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Don&apos;t wait with a pest or wildlife infestation. Our emergency technicians
          respond in under <strong className="text-white">60 minutes</strong> — nights,
          weekends, and holidays included.
        </p>

        {/* Feature pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          aria-label="Emergency service features"
        >
          {[
            { icon: Clock, text: "60-Minute Response Time" },
            { icon: AlertTriangle, text: "Nights & Weekends" },
            { icon: Phone, text: "Live Technician Answers" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full"
            >
              <Icon size={14} aria-hidden="true" />
              {text}
            </div>
          ))}
        </div>

        {/* Big phone CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.phoneTel}
            className="group inline-flex items-center gap-3 bg-white text-[var(--color-red)] font-black text-xl md:text-2xl px-8 py-5 rounded-[var(--radius-btn)] shadow-xl hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]"
            aria-label={`Call emergency pest removal line: ${siteConfig.phoneDisplay}`}
          >
            <Phone
              size={24}
              className="group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/emergency"
            className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-4 rounded-[var(--radius-btn)] hover:bg-white/25 transition-colors text-base"
          >
            Learn About Emergency Services
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-6 text-white/60 text-sm">
          {siteConfig.hours.emergency} &middot; All 48 service states &middot; No emergency surcharge
        </p>
      </div>
    </section>
  );
}
