import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import { siteConfig } from "@/config/site";
import CityTemplateRouter from "@/components/templates/CityTemplateRouter";

// The first dynamic segment is named `slug` to match the sibling state route
// (src/app/locations/[slug]/page.tsx). Here `slug` is the state slug.
type Props = { params: Promise<{ slug: string; city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.stateSlug, city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city } = await params;
  const record = getCityBySlug(slug, city);
  if (!record) return {};
  const url = `https://pestremovalusa.com/locations/${slug}/${city}`;
  return {
    title: record.metaTitle,
    description: record.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: record.metaTitle,
      description: record.metaDescription,
      url,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug, city } = await params;
  const record = getCityBySlug(slug, city);
  if (!record) notFound();

  const url = `https://pestremovalusa.com/locations/${slug}/${city}`;

  // Schema. LocalBusiness + Service + FAQPage. The dominant emphasis varies by
  // template (see DESIGN.md), but all three are emitted for completeness.
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: `${siteConfig.name} - ${record.name}`,
        description: record.metaDescription,
        url,
        telephone: siteConfig.phone,
        areaServed: {
          "@type": "City",
          name: `${record.name}, ${record.stateAbbr}`,
        },
      },
      {
        "@type": "Service",
        serviceType: "Pest Control",
        provider: { "@type": "LocalBusiness", name: siteConfig.name },
        areaServed: { "@type": "City", name: record.name },
      },
      {
        "@type": "FAQPage",
        mainEntity: record.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityTemplateRouter city={record} />
    </>
  );
}
