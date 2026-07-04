import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the PestRemovalUSA website and the requests you submit through it.",
  alternates: { canonical: "https://pestremovalusa.com/terms-of-service/" },
  openGraph: {
    title: "Terms of Service | PestRemovalUSA",
    description:
      "The terms that govern your use of the PestRemovalUSA website and service requests.",
    url: "https://pestremovalusa.com/terms-of-service/",
  },
};

const LAST_UPDATED = "July 4, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Terms of Service
          </h1>
          <p className="text-blue-200">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8 text-[var(--color-slate-custom)] leading-relaxed">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of {siteConfig.domain}{" "}
            and the requests you submit through it. By using our site, you agree to these Terms.
            If you do not agree, please do not use the site.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">About our service</h2>
            <p>
              {siteConfig.fullName} provides information about pest control and wildlife removal
              and helps connect homeowners and businesses with licensed local pest control
              technicians. The technicians who perform work are independent providers, not
              employees of PestRemovalUSA unless stated otherwise in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Information, not professional advice</h2>
            <p>
              The pest information on our site is general and for educational purposes. It is not
              a substitute for an on-site inspection or professional judgment. For a health,
              safety, or structural emergency, contact a qualified professional or the
              appropriate emergency service directly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Your responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information when you request service.</li>
              <li>Use the site lawfully and not to disrupt, damage, or misuse it.</li>
              <li>Confirm a provider&rsquo;s license, insurance, pricing, and scope of work before hiring them.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Independent service providers</h2>
            <p>
              When we connect you with a local technician or company, that provider is solely
              responsible for the services they perform, including scheduling, pricing,
              licensing, insurance, and workmanship. PestRemovalUSA does not control and is not
              responsible for the acts, omissions, or results of independent providers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">No guarantees</h2>
            <p>
              We aim to connect you with qualified local pros, but we do not guarantee any
              particular outcome, pricing, availability, or result. Pest control reduces risk
              and manages activity; no provider can promise permanent eradication of every pest.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Intellectual property</h2>
            <p>
              The content on this site, including text, graphics, logos, and layout, is owned by
              or licensed to PestRemovalUSA and is protected by law. You may not copy,
              reproduce, or distribute it without our permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Disclaimers and limitation of liability</h2>
            <p>
              The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, whether express or implied. To the fullest extent allowed
              by law, PestRemovalUSA is not liable for any indirect, incidental, or consequential
              damages arising from your use of the site or from services provided by independent
              providers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will revise the
              &ldquo;Last updated&rdquo; date above. Your continued use of the site after a
              change means you accept the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Contact us</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a className="text-[var(--color-red)] font-semibold" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{" "}
              or reach us through our{" "}
              <Link href="/contact/" className="text-[var(--color-red)] font-semibold">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
