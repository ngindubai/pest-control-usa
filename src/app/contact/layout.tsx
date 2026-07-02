import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | PestRemovalUSA: Free Inspection Quote",
  description:
    "Contact PestRemovalUSA for a free pest inspection quote. Available 24/7 for emergencies. Call 1-800-PEST-USA or fill out our form for same-day service.",
  alternates: { canonical: "https://pestremovalusa.com/contact/" },
  openGraph: {
    title: "Contact PestRemovalUSA | Free Inspection Quote",
    description: "Get a free pest inspection quote. Same-day service available. Call 1-800-PEST-USA.",
    url: "https://pestremovalusa.com/contact/",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
