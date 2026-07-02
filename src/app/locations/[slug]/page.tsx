import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Phone,
  CheckCircle,
  ChevronRight,
  Shield,
  Star,
  Clock,
  Zap,
} from "lucide-react";
import { locationStates, getStateBySlug } from "@/data/locations";
import { getCitiesByState } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return locationStates.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};

  const title = `Pest Control in ${state.name} | PestRemovalUSA Licensed ${state.abbr} Technicians`;
  const description = `Professional pest control services across ${state.name}. Licensed, insured technicians serving ${state.cities.slice(0, 3).join(", ")} and all surrounding areas. Free inspection. Call 1-800-PEST-USA.`;

  return {
    title,
    description,
    alternates: { canonical: `https://pestremovalusa.com/locations/${slug}/` },
    openGraph: {
      title,
      description,
      url: `https://pestremovalusa.com/locations/${slug}/`,
    },
  };
}

// Map pest names used in locationStates to service slugs
const pestToSlug: Record<string, string> = {
  "Bed Bugs": "bed-bug-treatment",
  "Cockroaches": "cockroach-control",
  "Mice": "mice-control",
  "Ants": "ant-control",
  "Termites": "termite-treatment",
  "Stink Bugs": "stink-bug-control",
  "Wasps": "wasp-bee-removal",
  "Ticks": "flea-tick-treatment",
  "Fleas": "flea-tick-treatment",
  "Mosquitoes": "mosquito-control",
  "Rats": "rat-control",
  "Scorpions": "scorpion-control",
  "Black Widows": "spider-control",
  "Spiders": "spider-control",
  "Silverfish": "silverfish-control",
  "Fire Ants": "ant-control",
  "Earwigs": "earwig-control",
  "Boxelder Bugs": "boxelder-bug-control",
  "Crickets": "cricket-control",
};

const pestEmoji: Record<string, string> = {
  "Bed Bugs": "🛏️",
  "Cockroaches": "🪳",
  "Mice": "🐭",
  "Ants": "🐜",
  "Termites": "🪲",
  "Stink Bugs": "🛡️",
  "Wasps": "🐝",
  "Ticks": "🐾",
  "Fleas": "🐾",
  "Mosquitoes": "🦟",
  "Rats": "🐀",
  "Scorpions": "🦂",
  "Black Widows": "🕷️",
  "Spiders": "🕷️",
  "Silverfish": "🐠",
  "Fire Ants": "🐜",
  "Earwigs": "🦂",
  "Boxelder Bugs": "🔴",
  "Crickets": "🦗",
};

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  // Pick 6 services to showcase (prefer ones matching top pests)
  const topSlugSet = new Set(
    state.topPests.map((p) => pestToSlug[p]).filter(Boolean)
  );
  const featured = services
    .filter((s) => topSlugSet.has(s.slug))
    .slice(0, 6);
  const fillerNeeded = Math.max(0, 6 - featured.length);
  const filler = services
    .filter((s) => !topSlugSet.has(s.slug))
    .slice(0, fillerNeeded);
  const showcasedServices = [...featured, ...filler];

  // Real, generated city pages for this state. These become genuine internal
  // links so the city pages are no longer orphaned (previously the grid showed
  // a hardcoded list of names as non-clickable divs).
  const stateCities = getCitiesByState(state.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "PestRemovalUSA",
            description: `Professional pest control services in ${state.name}`,
            areaServed: {
              "@type": "State",
              name: state.name,
            },
            telephone: siteConfig.phone,
            url: `https://pestremovalusa.com/locations/${slug}/`,
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-blue-300 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/locations" className="hover:text-white transition-colors">
                Service Areas
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{state.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <MapPin className="w-8 h-8 text-[var(--color-red-light)]" />
              <span className="text-blue-300 font-semibold">{state.region}</span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-black mb-4 leading-tight"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Pest Control in {state.name}
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Licensed, insured pest control technicians serving all of{" "}
              {state.name}. Free inspection, same-day service, 100% satisfaction
              guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={siteConfig.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phoneDisplay}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-navy)] transition-colors"
              >
                Free Inspection
              </Link>
            </div>
          </div>

          {/* Trust card */}
          <div className="bg-white/10 backdrop-blur rounded-[var(--radius-card)] p-8">
            <div className="text-blue-300 text-sm font-semibold mb-1">
              Serving all of {state.name}
            </div>
            <div
              className="text-2xl font-black text-white mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              {state.cities.join(" · ")}
            </div>
            <ul className="space-y-3">
              {[
                `Licensed & insured in ${state.abbr}`,
                "Same-day or next-day service",
                "Free inspection — no obligation",
                "100% satisfaction guarantee",
                "Family & pet-safe EPA products",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-blue-200 text-sm">
                4.9★ · 12,847 reviews nationwide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pest Fact */}
      <section className="bg-amber-50 border-b border-amber-200 py-8 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <div className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-amber-900 mb-1">
              {state.name} Pest Alert
            </div>
            <p className="text-amber-800 leading-relaxed">{state.pestFact}</p>
          </div>
        </div>
      </section>

      {/* Top Pests */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-3"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Common Pests in {state.name}
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Our technicians are trained on the pest species most active in your region.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {state.topPests.map((pest) => {
              const slug = pestToSlug[pest];
              const emoji = pestEmoji[pest] ?? "🐛";
              return (
                <Link
                  key={pest}
                  href={slug ? `/services/${slug}` : "/services"}
                  className="group flex flex-col items-center text-center bg-[var(--color-muted)] rounded-[var(--radius-card)] p-5 hover:bg-[var(--color-navy)] hover:text-white transition-all"
                >
                  <span className="text-4xl mb-3">{emoji}</span>
                  <span
                    className="font-bold text-[var(--color-navy)] group-hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {pest}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-3"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Services Available in {state.name}
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Every service — from insects to wildlife — performed by licensed{" "}
              {state.abbr} technicians.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {showcasedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-[var(--radius-card)] p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-cta)] transition-all"
              >
                <div className="text-3xl mb-3">{service.emoji}</div>
                <div
                  className="font-bold text-[var(--color-navy)] group-hover:text-[var(--color-red)] transition-colors mb-1"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {service.name}
                </div>
                <div className="text-xs text-gray-500 mb-3">{service.tagline}</div>
                <div className="flex items-center gap-1 text-[var(--color-red)] text-sm font-semibold">
                  Details <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--color-navy)] font-bold hover:text-[var(--color-red)] transition-colors"
            >
              View all 23 services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-3"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Cities We Serve in {state.name}
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Same-day and next-day service available in all major{" "}
              {state.name} metro areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stateCities.length > 0
              ? stateCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.stateSlug}/${city.slug}/`}
                    className="flex flex-col items-center text-center bg-[var(--color-muted)] rounded-[var(--radius-card)] p-4 transition hover:bg-[var(--color-red)]/10"
                  >
                    <MapPin className="w-5 h-5 text-[var(--color-red)] mb-2" />
                    <span className="font-semibold text-[var(--color-navy)] text-sm">
                      {city.name}
                    </span>
                  </Link>
                ))
              : state.cities.map((city) => (
                  <div
                    key={city}
                    className="flex flex-col items-center text-center bg-[var(--color-muted)] rounded-[var(--radius-card)] p-4"
                  >
                    <MapPin className="w-5 h-5 text-[var(--color-red)] mb-2" />
                    <span className="font-semibold text-[var(--color-navy)] text-sm">
                      {city}
                    </span>
                  </div>
                ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Not in one of these cities? We serve all of {state.name}. Call us to
            confirm same-day availability in your zip code.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-[var(--color-navy)] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              How Our {state.name} Service Works
            </h2>
            <p className="text-blue-200 text-lg">
              From your first call to a pest-free home — fast and simple.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                icon: <Phone className="w-6 h-6" />,
                title: "Call or Book Online",
                desc: `Call ${siteConfig.phoneDisplay} or use our online form. We confirm same-day availability in ${state.name}.`,
              },
              {
                step: "2",
                icon: <MapPin className="w-6 h-6" />,
                title: "Free Inspection",
                desc: "A licensed technician visits your property, identifies the pest, and provides a written quote — no charge.",
              },
              {
                step: "3",
                icon: <Zap className="w-6 h-6" />,
                title: "Professional Treatment",
                desc: "We apply the most effective treatment for your specific pest, using EPA-registered products safe for your family.",
              },
              {
                step: "4",
                icon: <Shield className="w-6 h-6" />,
                title: "Guaranteed Results",
                desc: "If pests return between scheduled visits, we re-treat at no extra charge. Your satisfaction is 100% guaranteed.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-[var(--color-red)] rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {item.title}
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Shield className="w-10 h-10 text-[var(--color-red)] mb-4" />
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Why {state.name} Homeowners Choose PestRemovalUSA
            </h2>
            <ul className="space-y-4">
              {[
                `Fully licensed and insured in ${state.name}`,
                "Specialists in every pest type — not generalists",
                "Written quote before any work — zero surprise charges",
                "Same-day service in most " + state.name + " metro areas",
                "Free re-service guarantee if pests return",
                "Digital inspection reports emailed after every visit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-slate-custom)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "4.9★", label: "Average Rating" },
              { value: "12,847", label: "5-Star Reviews" },
              { value: "250K+", label: "Homes Protected" },
              { value: "24/7", label: "Emergency Line" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-[var(--radius-card)] p-6 text-center shadow-[var(--shadow-card)]"
              >
                <div
                  className="text-3xl font-black text-[var(--color-navy)] mb-1"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[var(--color-slate-custom)] text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-bold text-[var(--color-navy)] mb-10 text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Pest Control in {state.name} — FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: `Do you service all areas of ${state.name}?`,
                a: `Yes. We serve all major cities and surrounding areas across ${state.name}, including ${state.cities.join(", ")}. If you're outside a major metro, call us — we can typically dispatch a technician within 24–48 hours.`,
              },
              {
                q: `How quickly can you respond in ${state.name}?`,
                a: `Same-day service is available in most ${state.name} metro areas. For non-emergency situations, we typically schedule within 24 hours. For pest emergencies (stinging insects, wildlife, severe infestations), call our 24/7 line for immediate dispatch.`,
              },
              {
                q: `Are your ${state.name} technicians licensed?`,
                a: `Yes. Every technician operating in ${state.name} holds a current ${state.abbr} state pesticide applicator license and carries full liability insurance. We verify licensing and conduct background checks on all field staff.`,
              },
              {
                q: `What are the most common pest problems in ${state.name}?`,
                a: `In ${state.name}, the most frequently treated pests are ${state.topPests.join(", ")}. ${state.pestFact}`,
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-[var(--radius-card)] group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[var(--color-navy)] hover:bg-[var(--color-muted)] transition-colors list-none">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-[var(--color-red)] group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-[var(--color-red)] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <Clock className="w-10 h-10 mx-auto mb-4 text-red-200" />
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Get Same-Day Pest Control in {state.name}
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Licensed {state.abbr} technicians available now. Free inspection, written
            quote, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-red)] font-bold px-10 py-4 rounded-[var(--radius-btn)] hover:bg-red-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-red)] transition-colors"
            >
              Free Quote Request
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
