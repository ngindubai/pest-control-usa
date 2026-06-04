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
export type ContentTemplate = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";

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
  contentTemplate: "A" | "B" | "C" | "D" | "E" | "F";
  metaTitle: string;
  metaDescription: string;
}

export interface CityRef {
  name: string;
  slug: string;
}

export interface CityLocation {
  slug: string;
  name: string;
  state: string;
  stateSlug: string;
  stateAbbr: string;
  population: string;
  county: string;
  climate: "hot-humid" | "hot-arid" | "temperate" | "cold" | "tropical";
  topPests: string[];
  localLandmarks: string[];
  neighbourhoods: string[];
  housingType: string;
  contentTemplate: ContentTemplate;
  emergencyNote: string;
  nearbyCities: string[];
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
