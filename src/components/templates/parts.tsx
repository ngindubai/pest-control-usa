import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { CityLocation } from "@/types";

// Small shared building blocks. Templates compose these in DIFFERENT orders and
// layouts. The visual signature (skeleton, hero, FAQ format) is owned by each
// template; these helpers only carry brand-consistent logic that should not drift.

export function Breadcrumb({ city }: { city: CityLocation }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs opacity-80">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <ChevronRight className="w-3 h-3" />
      <Link href="/locations" className="hover:underline">
        Service Areas
      </Link>
      <ChevronRight className="w-3 h-3" />
      <Link href={`/locations/${city.stateSlug}`} className="hover:underline">
        {city.state}
      </Link>
      <ChevronRight className="w-3 h-3" />
      <span>{city.name}</span>
    </nav>
  );
}

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={siteConfig.phoneTel}
      className={`inline-flex items-center gap-2 rounded-[var(--radius-btn)] bg-[var(--color-red)] px-5 py-3 font-semibold text-white shadow-[var(--shadow-cta)] transition-colors hover:bg-[var(--color-red-light)] ${className}`}
    >
      <Phone className="h-4 w-4" />
      {siteConfig.phoneDisplay}
    </a>
  );
}

export function ServiceLinks({ city }: { city: CityLocation }) {
  const links = city.pestProfile
    .filter((p) => p.serviceSlug)
    .slice(0, 6);
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((p) => (
        <li key={p.serviceSlug}>
          <Link
            href={`/services/${p.serviceSlug}`}
            className="inline-block rounded-full border border-[var(--color-navy-100)] bg-white px-3 py-1 text-sm text-[var(--color-navy)] hover:border-[var(--color-navy-light)]"
          >
            {p.name} control
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function NearbyCities({ city }: { city: CityLocation }) {
  if (city.nearbyCities.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
      {city.nearbyCities.map((n) => (
        <li key={n.slug}>
          <Link
            href={`/locations/${city.stateSlug}/${n.slug}`}
            className="text-[var(--color-navy-light)] hover:underline"
          >
            Pest control in {n.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function authorByline(city: CityLocation) {
  return `Reviewed by ${city.author}, PestRemovalUSA`;
}
