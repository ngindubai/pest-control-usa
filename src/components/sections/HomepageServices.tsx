import Link from "next/link";
import { Bug, Rat, Bird, Shield, Zap, Leaf, Building2, ArrowRight } from "lucide-react";
import type { ElementType } from "react";

interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: ElementType;
  badge?: "24/7" | "Popular" | "Commercial";
}

const services: ServiceItem[] = [
  {
    slug: "rodent-control",
    title: "Rodent Control",
    description:
      "Mice, rats, and squirrels safely eliminated. We seal entry points to prevent re-infestation.",
    icon: Rat,
    badge: "Popular",
  },
  {
    slug: "termite-treatment",
    title: "Termite Treatment",
    description:
      "Protect your home's structure with targeted liquid and bait system termite treatments.",
    icon: Bug,
  },
  {
    slug: "bed-bug-removal",
    title: "Bed Bug Removal",
    description:
      "Complete elimination using heat treatment and residual applications. Guaranteed results.",
    icon: Bug,
    badge: "Popular",
  },
  {
    slug: "cockroach-control",
    title: "Cockroach Control",
    description:
      "Fast-acting gel baits and residual sprays target German, American, and Oriental cockroaches.",
    icon: Bug,
  },
  {
    slug: "ant-control",
    title: "Ant Control",
    description:
      "Indoor and outdoor ant colony elimination including fire ants, carpenter ants, and pavement ants.",
    icon: Bug,
    badge: "Popular",
  },
  {
    slug: "wasp-bee-removal",
    title: "Wasp & Bee Removal",
    description:
      "Safe removal of yellow jacket, hornet, and wasp nests. Humane bee relocation available.",
    icon: Zap,
    badge: "24/7",
  },
  {
    slug: "spider-control",
    title: "Spider Control",
    description:
      "Targeted treatments for black widows, brown recluses, and common house spiders.",
    icon: Bug,
  },
  {
    slug: "mosquito-control",
    title: "Mosquito Control",
    description:
      "Seasonal yard spray programs keep your outdoor space mosquito-free all summer long.",
    icon: Leaf,
  },
  {
    slug: "raccoon-removal",
    title: "Raccoon Removal",
    description:
      "Humane live trapping and attic cleanup. We seal entry points after removal.",
    icon: Shield,
    badge: "24/7",
  },
  {
    slug: "bat-removal",
    title: "Bat Removal",
    description:
      "Legal, safe bat exclusion and guano cleanup. We comply with all wildlife protection laws.",
    icon: Shield,
    badge: "24/7",
  },
  {
    slug: "squirrel-removal",
    title: "Squirrel Removal",
    description:
      "Attic and yard squirrel control with exclusion services to prevent re-entry.",
    icon: Shield,
  },
  {
    slug: "skunk-removal",
    title: "Skunk Removal",
    description:
      "Odor-free humane skunk trapping and relocation with under-structure exclusion.",
    icon: Shield,
  },
  {
    slug: "bird-control",
    title: "Bird Control",
    description:
      "Pigeons, starlings, and nuisance bird deterrents including spikes, netting, and shock tracks.",
    icon: Bird,
  },
  {
    slug: "flea-tick-control",
    title: "Flea & Tick Control",
    description:
      "Indoor and outdoor treatments protecting your family and pets from flea and tick infestations.",
    icon: Bug,
  },
  {
    slug: "mole-vole-control",
    title: "Mole & Vole Control",
    description:
      "Protect your lawn and garden from mole tunnels and vole root damage with targeted trapping.",
    icon: Rat,
  },
  {
    slug: "commercial-pest-control",
    title: "Commercial Pest Control",
    description:
      "Comprehensive pest management plans for restaurants, warehouses, offices, and retail spaces.",
    icon: Building2,
    badge: "Commercial",
  },
];

const badgeColors = {
  "24/7": "bg-[var(--color-red)] text-white",
  Popular: "bg-[var(--color-navy)] text-white",
  Commercial: "bg-amber-500 text-white",
};

export function HomepageServices() {
  return (
    <section
      id="services"
      className="bg-[var(--color-muted)] py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-navy)] mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            We Handle Every Pest &amp; Wildlife Problem
          </h2>
          <p className="text-[var(--color-slate-custom)] text-lg max-w-2xl mx-auto">
            From common household pests to dangerous wildlife intrusions, our certified
            technicians have the training and tools to solve it permanently.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          role="list"
          aria-label="Pest control services"
        >
          {services.map(({ slug, title, description, icon: Icon, badge }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              role="listitem"
              className="group relative bg-white rounded-[var(--radius-card)] p-5 shadow-[var(--shadow-card)] hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-[var(--color-red)]/20 flex flex-col"
              aria-label={`${title} — learn more`}
            >
              {badge && (
                <span
                  className={`absolute top-3 right-3 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${badgeColors[badge]}`}
                >
                  {badge}
                </span>
              )}
              <div
                className="w-10 h-10 bg-[var(--color-red)]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[var(--color-red)] transition-colors duration-200"
                aria-hidden="true"
              >
                <Icon
                  size={20}
                  className="text-[var(--color-red)] group-hover:text-white transition-colors duration-200"
                />
              </div>
              <h3 className="font-black text-[var(--color-navy)] text-base mb-1.5 group-hover:text-[var(--color-red)] transition-colors leading-snug">
                {title}
              </h3>
              <p className="text-sm text-[var(--color-slate-custom)] leading-relaxed flex-1">
                {description}
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[var(--color-red)] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowRight size={12} aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--color-slate-custom)] mb-4">
            Don&apos;t see your pest? We handle it.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-navy-light)] transition-colors"
            >
              View All Services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-6 py-3 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors shadow-[var(--shadow-cta)]"
            >
              Get Free Quote
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
