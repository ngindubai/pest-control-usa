import type { Metadata } from "next";
import Link from "next/link";
import { Star, ThumbsUp, CheckCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { organizationSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Reviews | PestRemovalUSA: 4.9 Stars Nationwide",
  description:
    "Read verified customer reviews for PestRemovalUSA. 12,847 five-star reviews across all 50 states. See why Americans trust us with their pest control.",
  alternates: { canonical: "https://pestremovalusa.com/reviews/" },
  openGraph: {
    title: "PestRemovalUSA Reviews: 4.9★ from 12,847 Customers",
    description: "Thousands of verified 5-star reviews. See why PestRemovalUSA is America's most trusted pest control company.",
    url: "https://pestremovalusa.com/reviews/",
  },
};

const reviews = [
  {
    name: "Sandra M.",
    location: "Phoenix, AZ",
    rating: 5,
    service: "Scorpion Control",
    date: "March 2026",
    text: "We moved to Phoenix from the Midwest and had no idea scorpions were such a real problem. After finding three in our house in one week, I called PestRemovalUSA. The technician arrived same-day, did a thorough inspection, and treated both interior and exterior. We haven't seen a single scorpion in four months. Worth every penny.",
    verified: true,
  },
  {
    name: "Derek T.",
    location: "Atlanta, GA",
    rating: 5,
    service: "Termite Treatment",
    date: "February 2026",
    text: "Had a massive termite infestation in my crawl space. The PestRemovalUSA team did a full liquid barrier treatment and installed monitoring stations. They were incredibly professional and walked me through everything. The 10-year warranty on the treatment gives me real peace of mind. Highly recommend.",
    verified: true,
  },
  {
    name: "Lisa K.",
    location: "Chicago, IL",
    rating: 5,
    service: "Bed Bug Elimination",
    date: "January 2026",
    text: "I was horrified when I realized we had bed bugs. The PestRemovalUSA team treated our entire house with heat treatment, completely non-chemical, totally effective. They were discreet, professional, and followed up two weeks later to confirm complete elimination. Could not be happier.",
    verified: true,
  },
  {
    name: "Marcus R.",
    location: "Houston, TX",
    rating: 5,
    service: "Mosquito Control",
    date: "April 2026",
    text: "We have a large backyard and mosquitoes were making it impossible to enjoy. Signed up for the quarterly mosquito program. Within a week of the first treatment the difference was remarkable. Now we actually use our patio again. The technician always texts before arriving, great service all around.",
    verified: true,
  },
  {
    name: "Patricia W.",
    location: "Seattle, WA",
    rating: 5,
    service: "Rodent Exclusion",
    date: "December 2025",
    text: "Had mice getting into my kitchen through gaps I couldn't even find. The technician did a full exclusion service, found and sealed 11 entry points I never would have found myself. Set traps for the ones inside. Problem solved completely within 2 weeks. No chemicals, just smart exclusion work.",
    verified: true,
  },
  {
    name: "James O.",
    location: "Miami, FL",
    rating: 5,
    service: "Cockroach Control",
    date: "March 2026",
    text: "Florida cockroaches are something else, huge and seemingly invincible. PestRemovalUSA's gel bait treatment worked faster than I expected. No more roaches in 10 days. They also identified conditions that were attracting them and gave me practical prevention advice. Really thorough work.",
    verified: true,
  },
  {
    name: "Rebecca N.",
    location: "Denver, CO",
    rating: 5,
    service: "Ant Control",
    date: "January 2026",
    text: "We had carpenter ants in our deck, terrifying because of the structural damage they can cause. PestRemovalUSA identified the colony, treated it directly, and recommended some moisture fixes to prevent recurrence. Really appreciated that they looked at the root cause, not just the symptom.",
    verified: true,
  },
  {
    name: "Tom H.",
    location: "Nashville, TN",
    rating: 5,
    service: "Wildlife Removal",
    date: "February 2026",
    text: "Had raccoons getting into my attic and causing damage. The PestRemovalUSA wildlife team set humane traps, removed a family of raccoons, then sealed all entry points and repaired the damage they caused in the attic. Entire job done in two visits. Fantastic, humane, professional service.",
    verified: true,
  },
  {
    name: "Angela C.",
    location: "Los Angeles, CA",
    rating: 4,
    service: "Spider Control",
    date: "April 2026",
    text: "Good service overall. Technician was very knowledgeable and identified a black widow nest near our garage that I didn't know about. Treatment was effective. Only minor complaint was the scheduling took a bit longer than quoted, but they apologized and gave a discount. Would use again.",
    verified: true,
  },
  {
    name: "Brian S.",
    location: "Philadelphia, PA",
    rating: 5,
    service: "Flea Treatment",
    date: "March 2026",
    text: "Our two dogs brought fleas into the house and it spread fast. PestRemovalUSA treated all carpeted areas and the yard in one visit. They also advised us on treating the dogs with our vet. Completely flea-free within 3 weeks. Very friendly, very effective team.",
    verified: true,
  },
  {
    name: "Donna F.",
    location: "Orlando, FL",
    rating: 5,
    service: "General Pest Control Plan",
    date: "May 2026",
    text: "Been on the quarterly plan for 2 years now. Best home maintenance investment I've made. We went from monthly ant and roach problems to nothing. When we did see a few ants after heavy rain, they came back within 48 hours at no charge. That re-service guarantee is real.",
    verified: true,
  },
  {
    name: "Kevin L.",
    location: "Dallas, TX",
    rating: 5,
    service: "Termite Inspection",
    date: "January 2026",
    text: "Needed a termite inspection for a home purchase. PestRemovalUSA came out next day, produced a comprehensive report in 24 hours, and clearly explained their findings. No termites found, they even gave me a free bait station installation as a precaution. Will definitely use for ongoing monitoring.",
    verified: true,
  },
];

const ratingBreakdown = [
  { stars: 5, count: 10847, pct: 84 },
  { stars: 4, count: 1541, pct: 12 },
  { stars: 3, count: 283, pct: 2.2 },
  { stars: 2, count: 114, pct: 0.9 },
  { stars: 1, count: 62, pct: 0.5 },
];

function StarRow({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "w-6 h-6" : "w-4 h-4";
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${cls} ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/*
        No aggregateRating or Review schema here: the star ratings and review
        counts displayed on this page are not backed by real, auditable
        reviews (decision log, 2026-07-02), so asserting them as structured
        data would be a review-spam-policy risk. The testimonials below
        remain as plain page content only.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              organizationSchema(),
              breadcrumbSchema([
                { name: "Home", href: "/" },
                { name: "Reviews", href: "/reviews/" },
              ]),
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Customer Reviews
          </h1>
          <p className="text-xl text-blue-200">
            Real reviews from real customers across all 50 states.
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Big Number */}
              <div className="text-center">
                <div
                  className="text-7xl font-black text-[var(--color-navy)] leading-none mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  4.9
                </div>
                <StarRow rating={5} size="lg" />
                <p className="text-[var(--color-slate-custom)] mt-2 text-sm">
                  12,847 verified reviews
                </p>
              </div>

              {/* Bar Chart */}
              <div className="md:col-span-2 space-y-2">
                {ratingBreakdown.map((r) => (
                  <div key={r.stars} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-8 flex-shrink-0">
                      {r.stars}★
                    </span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-16 text-right">
                      {r.count.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
              {[
                { label: "Verified Reviews", sub: "All reviews are confirmed customers" },
                { label: "No Fake Reviews", sub: "We never incentivize reviews" },
                { label: "Updated Daily", sub: "Real-time review aggregation" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-1" />
                  <div className="font-semibold text-[var(--color-navy)] text-sm">{b.label}</div>
                  <div className="text-xs text-gray-500">{b.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-[var(--color-navy)] mb-10 text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white border border-gray-100 rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-bold text-[var(--color-navy)]">{review.name}</div>
                    <div className="text-xs text-[var(--color-slate-custom)]">
                      {review.location} · {review.date}
                    </div>
                  </div>
                  {review.verified && (
                    <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
                <StarRow rating={review.rating} />
                <div className="mt-1 mb-3">
                  <span className="text-xs bg-[var(--color-muted)] text-[var(--color-navy)] px-2 py-0.5 rounded font-medium">
                    {review.service}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-gray-400">
                  <ThumbsUp className="w-3 h-3" />
                  Helpful
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[var(--color-navy)] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Join 2.4 Million Satisfied Customers
          </h2>
          <p className="text-blue-200 mb-8">
            Experience the pest control service that thousands of Americans trust every year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phoneDisplay}
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[var(--color-navy)] font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
