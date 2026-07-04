export const siteConfig = {
  name: "PestRemovalUSA",
  fullName: "PestRemovalUSA.com",
  domain: "pestremovalusa.com",
  url: "https://pestremovalusa.com",
  phone: "1-800-737-8872",
  phoneDisplay: "1-800-PEST-USA",
  phoneTel: "tel:+18007378872",
  email: "info@pestremovalusa.com",
  tagline: "America's Most Trusted Pest & Wildlife Removal Service",
  description:
    "Nationwide pest control and wildlife removal. Licensed, insured, and available 24/7. Same-day service for rodents, termites, bed bugs, raccoons, bats, and more.",
  hours: {
    weekdays: "6:00 AM to 10:00 PM",
    weekends: "7:00 AM to 9:00 PM",
    emergency: "24/7",
  },
  // Verifiable facts only. Rating, review count, homes-treated, technician-count,
  // and years-in-business figures were removed in the 2026-07-04 trust-claims
  // pass: they were placeholder numbers with no auditable source, which is an
  // FTC and E-E-A-T risk for a safety-adjacent service. They can return as real,
  // sourced figures (a live Google Business Profile, internal records) later.
  // Social profiles were removed for the same reason: the pages were not live,
  // so telling Google about them via sameAs was a false signal.
  stats: {
    statesCovered: "50",
    statesCoveredFull: "all 50 states and Washington, DC",
  },
  // Defensible signals only: coverage, licensing/insurance posture, service
  // offering, and safety. No rating, no review count, no third-party
  // accreditation badge until one is real and verifiable.
  trustSignals: [
    "Licensed & Insured",
    "50 States + DC Covered",
    "24/7 Emergency Service",
    "Same-Day Service",
    "Family & Pet Safe Treatments",
    "Free Inspections & Quotes",
    "Satisfaction Guarantee",
  ],
  serviceAreas: {
    nationwide: true,
    statesCount: 50,
    citiesCount: 500,
  },
} as const;

export type SiteConfig = typeof siteConfig;
