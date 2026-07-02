import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  AlertTriangle,
  Shield,
  ChevronRight,
  Star,
  Zap,
} from "lucide-react";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.name} | PestRemovalUSA — Licensed Technicians Nationwide`;
  const description = `Professional ${service.name.toLowerCase()} services in all 50 states. ${service.tagline}. Free inspection, guaranteed results. Call 1-800-PEST-USA.`;

  return {
    title,
    description,
    alternates: { canonical: `https://pestremovalusa.com/services/${slug}/` },
    openGraph: {
      title,
      description,
      url: `https://pestremovalusa.com/services/${slug}/`,
    },
  };
}

const urgencyConfig = {
  low: { label: "Routine Priority", color: "bg-blue-100 text-blue-800" },
  medium: { label: "Moderate Priority", color: "bg-yellow-100 text-yellow-800" },
  high: { label: "High Priority", color: "bg-orange-100 text-orange-800" },
  critical: { label: "Emergency Priority", color: "bg-red-100 text-red-800" },
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);
  const urgency = urgencyConfig[service.urgency];

  const schemaFaqs = service.faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.heroDesc,
            provider: { "@type": "LocalBusiness", name: "PestRemovalUSA" },
            areaServed: { "@type": "Country", name: "United States" },
            offers: {
              "@type": "Offer",
              description: `Starting from ${service.priceRange.split("–")[0].trim()}`,
            },
          }),
        }}
      />
      {service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: schemaFaqs,
            }),
          }}
        />
      )}

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-blue-300 text-xs mb-6">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white">{service.name}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl" role="img" aria-label={service.name}>
                  {service.emoji}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${urgency.color}`}
                >
                  {urgency.label}
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {service.name}
              </h1>
              <p className="text-xl text-[var(--color-red-light)] font-semibold mb-6">
                {service.tagline}
              </p>
              <p className="text-blue-100 mb-8 leading-relaxed">{service.heroDesc}</p>

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

            {/* Price + Trust Card */}
            <div className="bg-white/10 backdrop-blur rounded-[var(--radius-card)] p-8">
              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="text-blue-300 text-sm font-semibold mb-1">Starting price</div>
                <div
                  className="text-3xl font-black text-white"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {service.priceRange}
                </div>
                <div className="text-blue-300 text-xs mt-1">
                  Free inspection &amp; written quote before any work
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Licensed &amp; insured technicians",
                  "100% satisfaction guarantee",
                  "Free re-service if pests return",
                  "Available all 50 states",
                  "Same-day or next-day service",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span
                      className="text-sm text-blue-100"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-blue-200 text-sm">4.9★ · 12,847 verified reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-4 bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-7 h-7 text-amber-600 flex-shrink-0" />
            <h2
              className="text-2xl font-bold text-amber-900"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Warning Signs of {service.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {service.signs.map((sign, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-[var(--radius-card)] p-4 border border-amber-200"
              >
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-amber-900 text-sm leading-relaxed">{sign}</span>
              </div>
            ))}
          </div>
          <p className="text-amber-700 text-sm mt-6 font-medium">
            Seeing any of these signs? Call us immediately — early treatment prevents the
            problem from growing and reduces total treatment cost.
          </p>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Zap className="w-8 h-8 text-[var(--color-red)] mx-auto mb-3" />
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-3"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Our {service.name} Treatment Methods
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              We select the most effective approach based on your specific infestation, property,
              and family situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {service.treatments.map((t, i) => (
              <div
                key={i}
                className="bg-[var(--color-muted)] rounded-[var(--radius-card)] p-6 border-l-4 border-[var(--color-red)]"
              >
                <h3
                  className="font-bold text-[var(--color-navy)] mb-2"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {t.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[var(--color-navy)] text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Shield className="w-10 h-10 text-[var(--color-red-light)] mb-4" />
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Why Choose PestRemovalUSA for {service.name}?
            </h2>
            <ul className="space-y-4">
              {[
                `Specialists in ${service.name.toLowerCase()} — not generalists`,
                "Licensed and certified in all 50 states",
                "Written quote before any work begins — no surprises",
                "Family-safe, EPA-registered products only",
                "100% satisfaction guarantee — free re-service if needed",
                "Same-day service available in most metro areas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <div
              className="text-7xl font-black mb-2"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              4.9★
            </div>
            <p className="text-blue-200 text-lg mb-6">12,847 verified 5-star reviews</p>
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now: {siteConfig.phoneDisplay}
            </Link>
            <p className="text-blue-300 text-sm mt-3">24/7 · No extra charge for emergencies</p>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 px-4 bg-[var(--color-muted)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-[var(--color-navy)] mb-3"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Prevention Tips
            </h2>
            <p className="text-lg text-[var(--color-slate-custom)]">
              Steps you can take to reduce the risk of future {service.name.toLowerCase()}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.prevention.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-[var(--radius-card)] p-4">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            For ongoing prevention, consider our{" "}
            <Link href="/residential" className="text-[var(--color-navy)] font-semibold hover:text-[var(--color-red)] transition-colors">
              quarterly protection plans
            </Link>{" "}
            — same-day re-service included if pests return.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-bold text-[var(--color-navy)] mb-10 text-center"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            {service.name} FAQs
          </h2>
          <ServiceFAQ faqs={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16 px-4 bg-[var(--color-muted)]">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl font-bold text-[var(--color-navy)] mb-8"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group bg-white rounded-[var(--radius-card)] p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-cta)] transition-all"
                >
                  <div className="text-3xl mb-3">{rel.emoji}</div>
                  <div
                    className="font-bold text-[var(--color-navy)] group-hover:text-[var(--color-red)] transition-colors mb-1"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {rel.name}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">{rel.tagline}</div>
                  <div className="flex items-center gap-1 text-[var(--color-red)] text-sm font-semibold">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 px-4 bg-[var(--color-red)] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ready to Get Rid of {service.name.replace(" Control", "").replace(" Treatment", "").replace(" Removal", "")}?
          </h2>
          <p className="text-red-100 mb-8">
            Licensed technicians available now. Free inspection. {service.priceRange} starting price.
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
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
