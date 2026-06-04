import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Home, Shield, Leaf, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Residential Pest Control | PestRemovalUSA — Home Protection Plans",
  description:
    "Protect your home and family with residential pest control from PestRemovalUSA. Eco-safe treatments, 100% satisfaction guarantee, and licensed technicians in all 50 states.",
  alternates: { canonical: "https://pestremovalusa.com/residential" },
  openGraph: {
    title: "Residential Pest Control | PestRemovalUSA",
    description: "Family-safe home pest control with a 100% satisfaction guarantee. Serving all 50 states.",
    url: "https://pestremovalusa.com/residential",
  },
};

const homePests = [
  { name: "Ants", icon: "🐜", desc: "From tiny sugar ants to destructive carpenter ants, we eliminate colonies at the source." },
  { name: "Cockroaches", icon: "🪳", desc: "Fast-breeding and hard to kill — our gel bait and exclusion program works within days." },
  { name: "Spiders", icon: "🕷️", desc: "Including black widows and brown recluses — we treat webs, harborage areas, and entry points." },
  { name: "Rodents", icon: "🐭", desc: "Mice and rat exclusion, trapping, and prevention. We seal every entry point." },
  { name: "Bed Bugs", icon: "🛏️", desc: "Heat and chemical treatments — complete elimination with follow-up inspections." },
  { name: "Termites", icon: "🪲", desc: "Liquid barrier, bait stations, and wood treatment options with 10-year warranties." },
  { name: "Fleas & Ticks", icon: "🐾", desc: "Interior and yard treatments coordinated with your pet's vet treatment for full eradication." },
  { name: "Mosquitoes", icon: "🦟", desc: "Seasonal yard spray programs that dramatically reduce mosquito populations." },
  { name: "Wasps & Bees", icon: "🐝", desc: "Safe nest removal and prevention for all stinging insects around your home." },
  { name: "Moths", icon: "🦋", desc: "Pantry moths, clothing moths, and Oriental cockroach infestations handled completely." },
  { name: "Silverfish", icon: "🐠", desc: "Moisture-focused treatment and exclusion to eliminate silverfish and prevent return." },
  { name: "Wildlife", icon: "🦝", desc: "Humane removal of raccoons, squirrels, bats, opossums, and snakes from your property." },
];

const plans = [
  {
    name: "One-Time Treatment",
    price: "From $149",
    period: "single visit",
    desc: "Perfect for targeting a specific pest problem quickly.",
    features: ["Single service visit", "Targeted pest treatment", "30-day guarantee", "Service report"],
    highlight: false,
    cta: "Book Now",
  },
  {
    name: "Home Shield Quarterly",
    price: "From $69",
    period: "/quarter",
    desc: "Our most popular plan — covers over 25 common household pests.",
    features: [
      "4 visits per year",
      "Interior + exterior treatment",
      "Free re-service between visits",
      "25+ pest species covered",
      "Annual termite inspection",
    ],
    highlight: true,
    cta: "Start Plan",
  },
  {
    name: "Total Protection Monthly",
    price: "From $49",
    period: "/month",
    desc: "Maximum year-round coverage for homes in high-pest areas.",
    features: [
      "Monthly service visits",
      "Everything in Quarterly",
      "Mosquito & tick prevention",
      "Wildlife monitoring",
      "Priority emergency scheduling",
      "Free annual inspection report",
    ],
    highlight: false,
    cta: "Start Plan",
  },
];

const reviews = [
  { name: "Laura B.", loc: "Austin, TX", text: "On the quarterly plan for 3 years. Best home investment ever. Zero pests.", rating: 5 },
  { name: "Mark H.", loc: "Charlotte, NC", text: "Had a severe German cockroach problem. One treatment and they were gone in 5 days.", rating: 5 },
  { name: "Tina P.", loc: "Portland, OR", text: "Used the eco-friendly option for my young kids. Works just as well, feels great.", rating: 5 },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Home className="w-4 h-4" />
            Residential Pest Control
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            A Pest-Free Home
            <br />
            <span className="text-[var(--color-red-light)]">Your Family Deserves It</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Licensed technicians, family-safe treatments, and a 100% satisfaction guarantee.
            We serve all 50 states with same-day and next-day appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-red)] text-white font-bold px-10 py-5 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors text-lg"
            >
              Get a Free Inspection
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-5 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </Link>
          </div>

          {/* Quick trust */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: Shield, label: "100% Guaranteed" },
              { icon: Leaf, label: "Eco-Friendly Options" },
              { icon: Star, label: "4.9★ Rating" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-blue-200">
                <t.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pests We Treat */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Pests We Eliminate
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              From common household pests to wildlife intruders — we handle them all.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {homePests.map((pest) => (
              <div
                key={pest.name}
                className="bg-[var(--color-muted)] rounded-[var(--radius-card)] p-5 hover:shadow-[var(--shadow-card)] transition-shadow group"
              >
                <div className="text-3xl mb-2">{pest.icon}</div>
                <h3
                  className="font-bold text-[var(--color-navy)] mb-2 text-sm"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {pest.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{pest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Home Protection Plans
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Choose the right level of protection for your home.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[var(--radius-card)] p-8 ${
                  plan.highlight
                    ? "bg-[var(--color-navy)] text-white shadow-[var(--shadow-cta)] ring-2 ring-[var(--color-red)]"
                    : "bg-white shadow-[var(--shadow-card)]"
                }`}
              >
                {plan.highlight && (
                  <div className="bg-[var(--color-red)] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h3
                  className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-[var(--color-navy)]"}`}
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-blue-300" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-3xl font-black ${plan.highlight ? "text-white" : "text-[var(--color-navy)]"}`}
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? "text-blue-300" : "text-gray-500"}`}>
                    {" "}{plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-green-400" : "text-green-500"}`} />
                      <span className={plan.highlight ? "text-blue-100" : "text-gray-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center font-bold py-3 rounded-[var(--radius-btn)] transition-colors ${
                    plan.highlight
                      ? "bg-[var(--color-red)] text-white hover:bg-[var(--color-red-light)]"
                      : "bg-[var(--color-navy)] text-white hover:opacity-90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Book Online or Call", desc: "Schedule online or call 1-800-PEST-USA. Same-day availability in most areas." },
              { num: "2", title: "Free Inspection", desc: "A licensed technician assesses your home and identifies pest activity and entry points." },
              { num: "3", title: "Custom Treatment", desc: "We apply the right treatment for your specific pest problem using proven, safe methods." },
              { num: "4", title: "Guaranteed Results", desc: "Pests return? We do too — at no charge. Your satisfaction is 100% guaranteed." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-bold text-[var(--color-navy)] mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Reviews */}
      <section className="py-16 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-[var(--color-navy)] mb-8 text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What Homeowners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)]">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-3 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="font-semibold text-[var(--color-navy)] text-sm">{r.name}</div>
                <div className="text-xs text-gray-400">{r.loc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="text-[var(--color-navy)] font-semibold hover:text-[var(--color-red)] transition-colors">
              Read all 12,847 reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[var(--color-red)] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ready for a Pest-Free Home?
          </h2>
          <p className="text-red-100 mb-8">
            Get a free inspection and same-day or next-day service in most areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--color-red)] font-bold px-10 py-4 rounded-[var(--radius-btn)] hover:bg-red-50 transition-colors"
            >
              Book Free Inspection
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-red)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
