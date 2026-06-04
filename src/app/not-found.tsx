import Link from "next/link";
import { Phone, Home, Search, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  const quickLinks = [
    { label: "Ant Control", href: "/services/ant-control" },
    { label: "Bed Bug Treatment", href: "/services/bed-bug-treatment" },
    { label: "Termite Treatment", href: "/services/termite-treatment" },
    { label: "Rodent Control", href: "/services/mice-control" },
    { label: "Wildlife Removal", href: "/services/wildlife-removal" },
    { label: "All Services", href: "/services" },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-muted)]">
      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div
            className="text-8xl font-black mb-4 text-[var(--color-red-light)]"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            404
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Page Not Found
          </h1>
          <p className="text-blue-200 text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Use the links below to find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Search className="w-5 h-5 text-[var(--color-red)]" />
            <h2
              className="text-2xl font-bold text-[var(--color-navy)]"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Popular Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between bg-white rounded-[var(--radius-card)] px-5 py-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-cta)] text-[var(--color-navy)] font-semibold hover:text-[var(--color-red)] transition-all"
              >
                {link.label}
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)]">
            <h3
              className="font-bold text-[var(--color-navy)] mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              More Pages
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Locations", href: "/locations" },
                { label: "Reviews", href: "/reviews" },
                { label: "Commercial", href: "/commercial" },
                { label: "Residential", href: "/residential" },
                { label: "FAQ", href: "/faq" },
                { label: "Emergency", href: "/emergency" },
                { label: "Financing", href: "/financing" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-[var(--color-muted)] text-[var(--color-navy)] px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-navy)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
