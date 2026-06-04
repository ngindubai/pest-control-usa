import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Careers | PestRemovalUSA — Now Hiring Nationwide",
  description:
    "Join the PestRemovalUSA team. We're hiring pest control technicians, managers, sales reps, and customer service staff in all 50 states. Competitive pay + full benefits.",
  alternates: { canonical: "https://pestremovalusa.com/careers" },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
