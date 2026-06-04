import Link from "next/link";
import { BadgeCheck, ArrowRight } from "lucide-react";

interface Review {
  name: string;
  location: string;
  rating: number;
  service: string;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    service: "Raccoon Removal",
    text: "They removed a family of raccoons from our attic in a single visit. The technician was thorough, professional, and sealed every entry point. Our attic was left cleaner than when they found it. Couldn't be more impressed.",
    date: "March 2026",
  },
  {
    name: "James R.",
    location: "Chicago, IL",
    rating: 5,
    service: "Bed Bug Removal",
    text: "Called on a Thursday evening in a panic and they had someone at my apartment by Friday morning. The heat treatment worked perfectly — not a single bed bug after treatment. Worth every penny for the peace of mind.",
    date: "February 2026",
  },
  {
    name: "Linda K.",
    location: "Miami, FL",
    rating: 5,
    service: "Termite Treatment",
    text: "Found termites during a home renovation. PestRemovalUSA caught the extent of the damage during the inspection and treated aggressively. They saved my home's structural integrity. Excellent communication throughout.",
    date: "January 2026",
  },
  {
    name: "Robert T.",
    location: "Seattle, WA",
    rating: 5,
    service: "Wasp Removal",
    text: "A massive yellow jacket nest had taken over our garage wall. The technician handled it safely in full protective gear — nest was gone same day. No drama, no mess. Will definitely use them again.",
    date: "April 2026",
  },
  {
    name: "Amy Chen",
    location: "New York, NY",
    rating: 5,
    service: "Cockroach Control",
    text: "NYC apartment had a German cockroach problem that three other companies couldn't fix. PestRemovalUSA used gel baits and growth regulators — completely gone within two weeks. Finally pest-free!",
    date: "March 2026",
  },
  {
    name: "Mike D.",
    location: "Phoenix, AZ",
    rating: 5,
    service: "Ant Control",
    text: "Had massive fire ant mounds all over the backyard. Two treatments and they were completely eliminated. My kids can finally play outside again. Great local team, very responsive.",
    date: "April 2026",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function HomepageReviews() {
  return (
    <section
      id="reviews"
      className="bg-white py-20 md:py-28"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
            Customer Reviews
          </p>
          <h2
            id="reviews-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-navy)] mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What Our Customers Say
          </h2>

          {/* Overall rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-2">
            <div className="flex items-center gap-3 bg-[var(--color-muted)] rounded-full px-6 py-3">
              <span
                className="text-4xl font-black text-[var(--color-navy)]"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                4.9
              </span>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[var(--color-slate-custom)]">12,400+ verified reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--color-slate-custom)]">
              <BadgeCheck size={16} className="text-[var(--color-red)]" aria-hidden="true" />
              All reviews verified via Google &amp; BBB
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Customer reviews"
        >
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.date}`}
              role="listitem"
              className="bg-[var(--color-muted)] rounded-[var(--radius-card)] p-6 flex flex-col shadow-[var(--shadow-card)] hover:shadow-md transition-shadow"
              aria-label={`Review by ${review.name} from ${review.location}`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <StarRow rating={review.rating} />
                  <p className="text-xs text-[var(--color-red)] font-bold mt-1.5 uppercase tracking-wide">
                    {review.service}
                  </p>
                </div>
                <BadgeCheck
                  size={18}
                  className="text-green-500 shrink-0 mt-0.5"
                  aria-label="Verified review"
                />
              </div>

              <blockquote className="text-sm text-[var(--color-slate-custom)] leading-relaxed flex-1 mb-4">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <footer className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[var(--color-navy)]">{review.name}</p>
                  <p className="text-xs text-[var(--color-slate-custom)]">{review.location}</p>
                </div>
                <time
                  dateTime={review.date}
                  className="text-xs text-[var(--color-slate-custom)]"
                >
                  {review.date}
                </time>
              </footer>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--color-slate-custom)] mb-4">
            Join thousands of satisfied customers across America.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-navy-light)] transition-colors"
            >
              Read All Reviews
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors shadow-[var(--shadow-cta)]"
            >
              Get My Free Quote
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
