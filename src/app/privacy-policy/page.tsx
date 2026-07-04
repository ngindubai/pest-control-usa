import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PestRemovalUSA collects, uses, and protects the information you share with us, and the choices you have over your data.",
  alternates: { canonical: "https://pestremovalusa.com/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy | PestRemovalUSA",
    description:
      "How PestRemovalUSA collects, uses, and protects your information, and the choices you have.",
    url: "https://pestremovalusa.com/privacy-policy/",
  },
};

const LAST_UPDATED = "July 4, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-blue-200">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose-legal space-y-8 text-[var(--color-slate-custom)] leading-relaxed">
          <p>
            This Privacy Policy explains how {siteConfig.fullName} (&ldquo;PestRemovalUSA,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares
            information when you use {siteConfig.domain} and request pest control or wildlife
            removal services. By using our site or submitting a request, you agree to the
            practices described here.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Information we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Information you give us.</strong> When you fill out a quote or contact
                form, we collect details such as your name, phone number, email address, ZIP
                code or address, and a description of your pest problem.
              </li>
              <li>
                <strong>Information collected automatically.</strong> Like most websites, we
                collect basic technical and usage data, such as your device type, browser,
                pages viewed, and referring page, through cookies and similar technologies.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">How we use your information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your questions and quote requests.</li>
              <li>Connect you with a licensed local pest control technician who can help.</li>
              <li>Operate, maintain, and improve our website and services.</li>
              <li>Send service updates and, where you have opted in, occasional offers.</li>
              <li>Detect and prevent fraud, and comply with our legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">How we share your information</h2>
            <p className="mb-3">
              We do not sell your personal information. We share it only as needed to provide
              the service you asked for or as required by law, including with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Local service providers.</strong> When you request service, we share
                your request with licensed local pest control technicians so they can contact
                you and provide a quote.
              </li>
              <li>
                <strong>Service vendors.</strong> Providers who help us run our business, such
                as hosting, analytics, and customer contact tools, under agreements that limit
                how they may use the information.
              </li>
              <li>
                <strong>Legal reasons.</strong> When required by law, or to protect the rights,
                safety, or property of our users, the public, or PestRemovalUSA.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Cookies and analytics</h2>
            <p>
              We use cookies and analytics tools, including Google Analytics, to understand how
              visitors use our site so we can improve it. Most browsers let you refuse or delete
              cookies through their settings. Turning off cookies may affect how parts of the
              site work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Your choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can ask us to access, correct, or delete the personal information we hold about you.</li>
              <li>You can opt out of marketing messages at any time using the unsubscribe link or by contacting us.</li>
              <li>
                To make a request, email{" "}
                <a className="text-[var(--color-red)] font-semibold" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Data retention and security</h2>
            <p>
              We keep personal information only as long as needed for the purposes described
              here or as required by law, then delete or de-identify it. We use reasonable
              administrative, technical, and physical safeguards to protect your information.
              No method of transmission or storage is completely secure, so we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Children&rsquo;s privacy</h2>
            <p>
              Our site is intended for adults and is not directed to children under 13. We do
              not knowingly collect personal information from children under 13.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise
              the &ldquo;Last updated&rdquo; date above. Please review this page periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">Contact us</h2>
            <p>
              Questions about this policy or your information? Email{" "}
              <a className="text-[var(--color-red)] font-semibold" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a className="text-[var(--color-red)] font-semibold" href={siteConfig.phoneTel}>
                {siteConfig.phoneDisplay}
              </a>
              . You can also reach us through our{" "}
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
