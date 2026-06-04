// ─── Service Types ───────────────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  icon: string;
  category: ServiceCategory;
  process: ProcessStep[];
  benefits: string[];
  faqs: FAQ[];
  relatedServices: string[];
  emergencyAvailable: boolean;
  averageCost: string;
  warningSignsList: string[];
  preventionTips: string[];
  metaTitle: string;
  metaDescription: string;
}

export type ServiceCategory =
  | "insects"
  | "rodents"
  | "wildlife"
  | "termites"
  | "cleanup";

// ─── Location Types ───────────────────────────────────────────────
// Template rotation is fixed at 5 variants (A to E). See TEMPLATE-DIVERSIFICATION-GUIDE.md.
// This is a deliberate hard rule: more variants dilute the design system without indexation benefit.
export type ContentTemplate = "A" | "B" | "C" | "D" | "E";
export type ContentSoul = "operator" | "neighbour" | "comparison" | "qa" | "brief";

export interface SeasonalPests {
  spring: string[];
  summer: string[];
  fall: string[];
  winter: string[];
}

export interface StateLocation {
  slug: string;
  name: string;
  abbreviation: string;
  capital: string;
  largestCity: string;
  climate: string;
  topPests: string[];
  pestFacts: string;
  seasonalPatterns: SeasonalPests;
  housingNotes: string;
  topCities: CityRef[];
  emergencyAvailable: boolean;
  contentTemplate: ContentTemplate;
  metaTitle: string;
  metaDescription: string;
}

export interface CityRef {
  name: string;
  slug: string;
}

export type CityTier = "T1" | "T2" | "T3";

export type ClimateZone =
  | "hot-humid"
  | "hot-arid"
  | "desert"
  | "mediterranean"
  | "semi-arid"
  | "cold-humid"
  | "temperate"
  | "cold"
  | "tropical";

// A single pest's local profile on a city page. The uniqueness backbone.
export interface CityPest {
  name: string;
  serviceSlug?: string; // links to a service page
  activeSeason: string; // e.g. "Year-round", "Peaks May to September"
  note: string; // one place-specific sentence about this pest here
}

// A written body section. The template decides how to arrange and present these.
export interface CitySection {
  heading: string;
  body: string;
}

export interface CityLocation {
  slug: string;
  name: string;
  state: string;
  stateSlug: string;
  stateAbbr: string;
  tier: CityTier;
  population: string;
  county: string;
  climate: ClimateZone;
  climateDriver: string; // why this place has the pest pressure it has
  topPests: string[]; // names, ordered by local prevalence
  pestProfile: CityPest[]; // the structured per-pest local data (from The Geographer)
  localHook: string; // one true, specific fact used as the page opener
  intro: string; // lead paragraph(s), written by The Wordsmith
  sections: CitySection[]; // body sections, arranged by the template
  prevention: string[];
  costNote: string;
  faqs: FAQ[]; // city-specific, from The Interrogator
  author: string; // persona name (see CLAUDE.md)
  nearbyCities: CityRef[]; // for internal links
  contentTemplate: ContentTemplate; // slug-hash derived, overridable
  contentSoul: ContentSoul;
  metaTitle: string;
  metaDescription: string;
}

// ─── Blog Types ───────────────────────────────────────────────────
export type BlogCategory =
  | "prevention"
  | "wildlife"
  | "insects"
  | "termites"
  | "rodents"
  | "seasonal"
  | "commercial"
  | "diy-vs-pro"
  | "health-risks"
  | "guides";

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  publishDate: string;
  updatedDate?: string;
  readTime: number;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  content: string;
  faqs: FAQ[];
  relatedPosts: string[];
  relatedServices: string[];
  author: Author;
  metaTitle: string;
  metaDescription: string;
}

export interface Author {
  name: string;
  title: string;
  credentials: string;
}

// ─── Review / Testimonial Types ───────────────────────────────────
export interface Review {
  id: string;
  author: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  body: string;
  service: string;
  date: string;
  verified: boolean;
  source: "google" | "yelp" | "bbb" | "internal";
}

// ─── Schema / SEO Types ───────────────────────────────────────────
export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface SchemaOrganization {
  name: string;
  url: string;
  logo: string;
  telephone: string;
  email: string;
  address: SchemaAddress;
  sameAs: string[];
  areaServed: string;
}

export interface SchemaAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

// ─── Form Types ───────────────────────────────────────────────────
export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  zip: string;
  serviceType: string;
  propertyType: "residential" | "commercial";
  message?: string;
  preferredTime?: string;
  hearAbout?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  zip: string;
  serviceType: string;
  message: string;
  hearAbout?: string;
}

// ─── Navigation Types ─────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
