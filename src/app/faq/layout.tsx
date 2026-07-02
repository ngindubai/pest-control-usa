import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | PestRemovalUSA: Pest Control Questions Answered",
  description:
    "Find answers to common questions about pest control services, pricing, safety, and our satisfaction guarantee. Browse 20+ FAQs from PestRemovalUSA.",
  alternates: { canonical: "https://pestremovalusa.com/faq/" },
  openGraph: {
    title: "Pest Control FAQ | PestRemovalUSA",
    description: "Answers to your most common pest control questions, pricing, safety, process, and guarantee.",
    url: "https://pestremovalusa.com/faq/",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
