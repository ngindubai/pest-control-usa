import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const regions = [
  {
    name: "Northeast",
    states: [
      { name: "New York", slug: "new-york", cities: "NYC, Buffalo, Albany" },
      { name: "New Jersey", slug: "new-jersey", cities: "Newark, Trenton, Jersey City" },
      { name: "Pennsylvania", slug: "pennsylvania", cities: "Philadelphia, Pittsburgh, Harrisburg" },
      { name: "Massachusetts", slug: "massachusetts", cities: "Boston, Worcester, Springfield" },
      { name: "Connecticut", slug: "connecticut", cities: "Hartford, New Haven, Bridgeport" },
      { name: "Virginia", slug: "virginia", cities: "Richmond, Norfolk, Arlington" },
    ],
  },
  {
    name: "Southeast",
    states: [
      { name: "Florida", slug: "florida", cities: "Miami, Orlando, Tampa, Jacksonville" },
      { name: "Georgia", slug: "georgia", cities: "Atlanta, Savannah, Augusta" },
      { name: "North Carolina", slug: "north-carolina", cities: "Charlotte, Raleigh, Durham" },
      { name: "South Carolina", slug: "south-carolina", cities: "Columbia, Charleston, Greenville" },
      { name: "Tennessee", slug: "tennessee", cities: "Nashville, Memphis, Knoxville" },
      { name: "Alabama", slug: "alabama", cities: "Birmingham, Montgomery, Huntsville" },
    ],
  },
  {
    name: "Midwest",
    states: [
      { name: "Illinois", slug: "illinois", cities: "Chicago, Springfield, Rockford" },
      { name: "Ohio", slug: "ohio", cities: "Columbus, Cleveland, Cincinnati" },
      { name: "Michigan", slug: "michigan", cities: "Detroit, Grand Rapids, Lansing" },
      { name: "Indiana", slug: "indiana", cities: "Indianapolis, Fort Wayne, Evansville" },
      { name: "Missouri", slug: "missouri", cities: "Kansas City, St. Louis, Springfield" },
      { name: "Wisconsin", slug: "wisconsin", cities: "Milwaukee, Madison, Green Bay" },
    ],
  },
  {
    name: "Southwest",
    states: [
      { name: "Texas", slug: "texas", cities: "Houston, Dallas, Austin, San Antonio" },
      { name: "Arizona", slug: "arizona", cities: "Phoenix, Tucson, Scottsdale" },
      { name: "Nevada", slug: "nevada", cities: "Las Vegas, Henderson, Reno" },
      { name: "New Mexico", slug: "new-mexico", cities: "Albuquerque, Santa Fe, Las Cruces" },
      { name: "Oklahoma", slug: "oklahoma", cities: "Oklahoma City, Tulsa, Norman" },
      { name: "Colorado", slug: "colorado", cities: "Denver, Colorado Springs, Aurora" },
    ],
  },
  {
    name: "West & Pacific",
    states: [
      { name: "California", slug: "california", cities: "Los Angeles, San Francisco, San Diego" },
      { name: "Washington", slug: "washington", cities: "Seattle, Spokane, Tacoma" },
      { name: "Oregon", slug: "oregon", cities: "Portland, Salem, Eugene" },
      { name: "Utah", slug: "utah", cities: "Salt Lake City, Provo, Ogden" },
      { name: "Idaho", slug: "idaho", cities: "Boise, Nampa, Meridian" },
      { name: "Montana", slug: "montana", cities: "Billings, Missoula, Great Falls" },
    ],
  },
];

export function HomepageLocations() {
  return (
    <section
      id="locations"
      className="bg-[var(--color-muted)] py-20 md:py-28"
      aria-labelledby="locations-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
            Service Areas
          </p>
          <h2
            id="locations-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-navy)] mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Serving All{" "}
            <span className="text-[var(--color-red)]">
              {siteConfig.serviceAreas.statesCount} States
            </span>{" "}
            Nationwide
          </h2>
          <p className="text-[var(--color-slate-custom)] text-lg max-w-2xl mx-auto">
            With local technicians in {siteConfig.serviceAreas.citiesCount}+ cities, we&apos;re
            never far away. Same-day service available in most areas.
          </p>
        </div>

        {/* Region grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          role="navigation"
          aria-label="Service areas by region"
        >
          {regions.map(({ name, states }) => (
            <div key={name} className="bg-white rounded-[var(--radius-card)] p-5 shadow-[var(--shadow-card)]">
              <h3
                className="text-sm font-black text-[var(--color-navy)] uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center gap-1.5"
              >
                <MapPin size={13} className="text-[var(--color-red)]" aria-hidden="true" />
                {name}
              </h3>
              <ul className="space-y-2.5">
                {states.map(({ name: state, slug, cities }) => (
                  <li key={slug}>
                    <Link
                      href={`/locations/${slug}`}
                      className="group block"
                      aria-label={`Pest control in ${state} — serving ${cities}`}
                    >
                      <span className="block text-sm font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-red)] transition-colors">
                        {state}
                      </span>
                      <span className="block text-xs text-[var(--color-slate-custom)] leading-snug truncate">
                        {cities}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[var(--color-slate-custom)] mb-4 text-sm">
            Not seeing your city? We likely serve it &mdash; check our full coverage map.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-navy-light)] transition-colors"
            >
              <MapPin size={16} aria-hidden="true" />
              View All Locations
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors shadow-[var(--shadow-cta)]"
            >
              Check Your ZIP Code
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
