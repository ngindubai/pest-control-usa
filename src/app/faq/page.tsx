"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Phone, Search } from "lucide-react";
import { siteConfig } from "@/config/site";

const categories = [
  {
    id: "general",
    label: "General Questions",
    faqs: [
      {
        q: "What areas does PestRemovalUSA serve?",
        a: "PestRemovalUSA serves all 50 states and Washington D.C. With over 12,000 licensed technicians in our network, we have coverage in every major city and most rural areas across the country. Enter your ZIP code on our homepage to confirm coverage in your area.",
      },
      {
        q: "Are your technicians licensed and insured?",
        a: "Yes. Every PestRemovalUSA technician is fully licensed in their state of operation, carries general liability insurance, and has passed a comprehensive background check. Many also hold additional certifications from the National Pest Management Association (NPMA).",
      },
      {
        q: "How quickly can you respond?",
        a: "For standard service, we typically schedule within 24 to 48 hours. For emergency pest situations (wasps in living spaces, severe infestations, rodents in food areas), we offer same-day and next-hour response in most metropolitan areas.",
      },
      {
        q: "Do you offer free inspections?",
        a: "Yes. We offer free property inspections for new customers. During the inspection, a licensed technician will assess your pest situation, identify entry points and risk areas, and provide a no-obligation treatment recommendation and quote.",
      },
      {
        q: "What pests do you treat?",
        a: "We treat over 100 pest species including ants, bed bugs, cockroaches, fleas, ticks, mosquitoes, moths, spiders, silverfish, termites, and rodents (mice and rats). We also handle wildlife removal for animals like raccoons, squirrels, bats, and opossums.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Plans",
    faqs: [
      {
        q: "How much does pest control cost?",
        a: "Pricing depends on the pest type, severity of infestation, property size, and your location. A one-time treatment typically ranges from $150 to $450. Monthly or quarterly protection plans start as low as $49/month. We always provide a written quote before any work begins, no surprises.",
      },
      {
        q: "Do you offer service plans?",
        a: "Yes. Our protection plans include monthly, bi-monthly, and quarterly service options. Plans provide ongoing prevention treatments, free re-service between visits if pests return, and priority scheduling. Ask your technician about bundled plans for maximum savings.",
      },
      {
        q: "Are there any hidden fees?",
        a: "Never. We provide a clear, itemized quote before starting any work. The price we quote is the price you pay. There are no fuel surcharges, service call fees, or surprise add-ons.",
      },
      {
        q: "Do you offer discounts for seniors or veterans?",
        a: "Yes. We offer a 10% discount for verified senior citizens (65+) and military veterans/active duty. Ask your customer service representative to apply the discount when scheduling.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit/debit cards (Visa, Mastercard, American Express, Discover), ACH bank transfers, and checks. For service plans, we offer convenient monthly auto-pay. Financing options are also available through our financing program.",
      },
    ],
  },
  {
    id: "process",
    label: "Our Process",
    faqs: [
      {
        q: "What happens during a pest control treatment?",
        a: "A licensed technician will arrive during your scheduled window, introduce themselves, and conduct a brief walk-through. They'll identify pest activity, treat targeted areas using appropriate methods (spray, bait, trap, or exclusion), and provide a written report with recommendations. Most treatments take 30 to 90 minutes.",
      },
      {
        q: "Do I need to leave my home during treatment?",
        a: "For most standard treatments, you can remain home. We may ask you to vacate specific rooms during application and for 1 to 2 hours afterward for certain chemical treatments. For fumigation (tent treatments for severe termite infestations), you will need to vacate for 24 to 72 hours. Your technician will advise you specifically.",
      },
      {
        q: "How many treatments will I need?",
        a: "It depends on the pest and infestation severity. Many issues can be resolved in 1 to 2 treatments. Ongoing pests like ants, cockroaches, and mosquitoes benefit from quarterly or monthly prevention programs. Bed bug and termite treatments often require follow-up inspections.",
      },
      {
        q: "How does Integrated Pest Management (IPM) work?",
        a: "IPM is our preferred approach, it combines inspection, identification, prevention (exclusion, sanitation recommendations), biological controls, and targeted chemical treatments as a last resort. IPM minimizes pesticide use while maximizing effectiveness and is the safest approach for families and the environment.",
      },
    ],
  },
  {
    id: "safety",
    label: "Safety & Environment",
    faqs: [
      {
        q: "Are your treatments safe for children and pets?",
        a: "Yes, when used as directed by our licensed technicians. We use EPA-registered products and follow all safety protocols. We'll advise you on any temporary precautions (like keeping pets off treated areas for a short period). We also offer completely non-chemical treatment options for highly sensitive households.",
      },
      {
        q: "Do you use eco-friendly products?",
        a: "We offer a full GreenPro-certified eco-friendly treatment line. These treatments use botanical and naturally derived active ingredients and are particularly popular with families with young children, expectant mothers, or severe chemical sensitivities. Ask about our Green Treatment Program when booking.",
      },
      {
        q: "What should I do to prepare for treatment?",
        a: "For most treatments, clear countertops and store loose food items. Remove or cover pet food and water bowls. For indoor perimeter treatments, move furniture slightly away from walls. Your technician will provide specific preparation instructions based on your treatment type when confirming your appointment.",
      },
      {
        q: "Do your technicians follow safety regulations?",
        a: "Absolutely. All technicians are OSHA-safety trained, comply with EPA pesticide regulations, and follow state-specific licensing requirements. They carry Safety Data Sheets (SDS) for all products used and can review them with you upon request.",
      },
    ],
  },
  {
    id: "guarantee",
    label: "Guarantee & Follow-up",
    faqs: [
      {
        q: "What is your satisfaction guarantee?",
        a: "We offer a 100% satisfaction guarantee. If pests return between your scheduled treatments, we will return and re-treat at no additional charge. If you are not satisfied after our re-service, we will refund your most recent service payment. Your satisfaction is not negotiable for us.",
      },
      {
        q: "How long do treatments last?",
        a: "Treatment longevity varies by pest and product used. Most exterior perimeter treatments remain effective for 60 to 90 days. Interior treatments often last 30 to 45 days. Termite liquid barrier treatments (like Termidor) can last up to 10 years. Your technician will explain the expected duration of your specific treatment.",
      },
      {
        q: "What if I see pests after treatment?",
        a: "Seeing a few pests in the days after treatment is normal, the product disturbs them and they become more active before dying. If you're seeing significant activity after 7 to 10 days, contact us and we'll schedule a free follow-up visit. Ongoing protection plans include unlimited re-service visits.",
      },
      {
        q: "How do I cancel my service plan?",
        a: "You can cancel your service plan at any time with no cancellation fees, simply call us or manage your account online. We only ask that you give us the chance to address any dissatisfaction before canceling. There are no long-term contracts or early termination penalties.",
      },
    ],
  },
];

function FAQAccordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-[var(--radius-card)] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[var(--color-muted)] transition-colors"
      >
        <span className="font-semibold text-[var(--color-navy)] pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--color-red)] flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-2 bg-white border-t border-gray-100">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [search, setSearch] = useState("");

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const filteredFaqs = search.trim()
    ? categories
        .flatMap((c) => c.faqs)
        .filter(
          (f) =>
            f.q.toLowerCase().includes(search.toLowerCase()) ||
            f.a.toLowerCase().includes(search.toLowerCase())
        )
    : currentCategory.faqs;

  const schemaFaqs = categories.flatMap((c) => c.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: schemaFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Everything you need to know about our pest control services, pricing, and process.
          </p>
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full pl-12 pr-4 py-4 rounded-[var(--radius-btn)] text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-red-light)]"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs + Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {!search.trim() && (
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === cat.id
                      ? "bg-[var(--color-navy)] text-white"
                      : "bg-[var(--color-muted)] text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {search.trim() && (
            <p className="text-gray-500 mb-6 text-sm">
              Showing results for &quot;{search}&quot;, {filteredFaqs.length} FAQ
              {filteredFaqs.length !== 1 ? "s" : ""} found
            </p>
          )}

          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => (
                <FAQAccordion key={i} q={faq.q} a={faq.a} />
              ))
            ) : (
              <div className="text-center py-16 text-gray-400">
                <p className="text-lg font-medium mb-2">No FAQs match your search.</p>
                <p className="text-sm">Try a different keyword or browse categories above.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 px-4 bg-[var(--color-muted)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Our pest control specialists are available 24/7 to answer your questions and help you
            get rid of pests fast.
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
              className="inline-flex items-center gap-2 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
