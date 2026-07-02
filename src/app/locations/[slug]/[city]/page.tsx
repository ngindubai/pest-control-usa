import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import CityTemplateRouter from "@/components/templates/CityTemplateRouter";
import {
  areaOrganizationSchema,
  serviceSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";

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
  const url = `https://pestremovalusa.com/locations/${slug}/${city}/`;
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

  const url = `https://pestremovalusa.com/locations/${slug}/${city}/`;

  // City/State kept as separate structured fields (not bundled into one
  // "City, ST" name string, see SEO audit finding M7). The Organization node
  // reuses the sitewide @id (src/lib/schema.ts) rather than minting a new,
  // unlinked business per city.
  const areaServed = {
    "@type": "City",
    name: record.name,
    containedInPlace: { "@type": "State", name: record.state },
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      areaOrganizationSchema({
        url,
        description: record.metaDescription,
        areaServed,
      }),
      serviceSchema({
        name: "Pest Control",
        description: record.metaDescription,
        areaServed,
      }),
      faqPageSchema(record.faqs),
      breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Service Areas", href: "/locations/" },
        { name: record.state, href: `/locations/${record.stateSlug}/` },
        { name: record.name, href: url.replace("https://pestremovalusa.com", "") },
      ]),
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
