"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { trackPhoneCall } from "@/lib/gtag";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { Divider } from "@/components/ui/Layout";
import { organizationSchema, websiteSchema } from "@/lib/schema";

// ─── Social SVG icons (brand icons removed from lucide v1) ───────
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function IconYoutube() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ─── Footer data ──────────────────────────────────────────────────

const footerServices = [
  { label: "Rodent Control", href: "/services/rodent-control/" },
  { label: "Termite Treatment", href: "/services/termite-treatment/" },
  { label: "Bed Bug Treatment", href: "/services/bed-bug-treatment/" },
  { label: "Cockroach Control", href: "/services/cockroach-control/" },
  { label: "Wasp & Bee Removal", href: "/services/wasp-bee-removal/" },
  { label: "Raccoon Removal", href: "/services/raccoon-removal/" },
  { label: "Bat Removal", href: "/services/bat-removal/" },
  { label: "Mosquito Control", href: "/services/mosquito-control/" },
  { label: "Commercial Pest Control", href: "/commercial/" },
  { label: "View All Services →", href: "/services/" },
];

const footerLocations = [
  { label: "Texas", href: "/locations/texas/" },
  { label: "Florida", href: "/locations/florida/" },
  { label: "California", href: "/locations/california/" },
  { label: "New York", href: "/locations/new-york/" },
  { label: "Illinois", href: "/locations/illinois/" },
  { label: "Georgia", href: "/locations/georgia/" },
  { label: "North Carolina", href: "/locations/north-carolina/" },
  { label: "Ohio", href: "/locations/ohio/" },
  { label: "Arizona", href: "/locations/arizona/" },
  { label: "View All Locations →", href: "/locations/" },
];

const footerCompany = [
  { label: "About Us", href: "/about/" },
  { label: "Our Reviews", href: "/reviews/" },
  { label: "Careers", href: "/careers/" },
  { label: "Financing Options", href: "/financing/" },
  { label: "Commercial Services", href: "/commercial/" },
  { label: "Residential Services", href: "/residential/" },
  { label: "Emergency Service", href: "/emergency/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact Us", href: "/contact/" },
];

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, Icon: IconFacebook },
  { label: "Twitter / X", href: siteConfig.social.twitter, Icon: IconTwitter },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: IconInstagram },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: IconYoutube },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: IconLinkedin },
];

// ─── Organization Schema ──────────────────────────────────────────
// Centralized in src/lib/schema.ts. No logo/image (the referenced files did
// not exist, a 404 risk), no address (the business has no public storefront,
// see decision log 2026-07-02), no aggregateRating (not backed by real,
// auditable reviews, see the same decision log).

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema()],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Footer ───────────────────────────────────────────────────────

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-white" role="contentinfo">
      <OrganizationSchema />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: About */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 bg-[var(--color-red)] rounded-lg">
                <Shield size={20} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <span
                  className="block text-xl font-black tracking-tight"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  PestRemoval<span className="text-[var(--color-red)]">USA</span>
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-widest text-white/50 leading-none mt-0.5">
                  Licensed · Insured · Nationwide
                </span>
              </div>
            </div>

            <p className="text-sm text-white/65 leading-relaxed mb-5">
              {siteConfig.tagline}. Serving homeowners and businesses across all 50 states and Washington, DC since 2010.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 text-white/70 hover:bg-[var(--color-red)] hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {footerServices.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)] mb-4">
              Service Locations
            </h3>
            <ul className="space-y-2">
              {footerLocations.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company + Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-red)] mb-4">
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {footerCompany.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact block */}
            <div className="space-y-2.5">
              <a
                href={siteConfig.phoneTel}
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-[var(--color-red)] transition-colors"
                aria-label={`Call ${siteConfig.phoneDisplay}`}
                onClick={() => trackPhoneCall("footer")}
              >
                <Phone size={14} className="text-[var(--color-red)] shrink-0" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[var(--color-red)] shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-white/65">
                <MapPin size={14} className="text-[var(--color-red)] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Nationwide service, no walk-in office</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges strip */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            {siteConfig.trustSignals.map((signal) => (
              <span key={signal} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-red)]" aria-hidden="true" />
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stars divider */}
      <div className="max-w-7xl mx-auto px-4">
        <Divider variant="stars" className="opacity-30" />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {year} {siteConfig.fullName}. All rights reserved. Licensed Pest Control &amp; Wildlife Removal.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
