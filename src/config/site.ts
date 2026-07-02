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
  address: {
    street: "1 Pest Control Plaza",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    country: "US",
  },
  hours: {
    weekdays: "6:00 AM to 10:00 PM",
    weekends: "7:00 AM to 9:00 PM",
    emergency: "24/7",
  },
  social: {
    facebook: "https://facebook.com/pestremovalusa",
    twitter: "https://twitter.com/pestremovalusa",
    instagram: "https://instagram.com/pestremovalusa",
    youtube: "https://youtube.com/@pestremovalusa",
    linkedin: "https://linkedin.com/company/pestremovalusa",
  },
  stats: {
    homesTreated: "50,000+",
    statesCovered: "48",
    rating: "4.9",
    reviewCount: "12,400+",
    yearsInBusiness: "15+",
    technicianCount: "500+",
  },
  trustSignals: [
    "Licensed & Insured",
    "BBB Accredited",
    "4.9★ Google Reviews",
    "Eco-Friendly Treatments",
    "Family & Pet Safe",
    "Same-Day Service",
    "Satisfaction Guaranteed",
  ],
  serviceAreas: {
    nationwide: true,
    statesCount: 48,
    citiesCount: 500,
  },
} as const;

export type SiteConfig = typeof siteConfig;
