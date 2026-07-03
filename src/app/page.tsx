import type { Metadata } from "next";
import { HomepageHero } from "@/components/sections/HomepageHero";
import { HomepageServices } from "@/components/sections/HomepageServices";
import { HomepageProcess } from "@/components/sections/HomepageProcess";
import { HomepageStats } from "@/components/sections/HomepageStats";
import { HomepageLocations } from "@/components/sections/HomepageLocations";
import { HomepageReviews } from "@/components/sections/HomepageReviews";
import { HomepageEmergency } from "@/components/sections/HomepageEmergency";
import { HomepageFAQ } from "@/components/sections/HomepageFAQ";
import { TrustBar } from "@/components/ui/TrustBadges";

export const metadata: Metadata = {
  title: "PestRemovalUSA | Nationwide Pest Control & Wildlife Removal",
  description:
    "America's most trusted pest control and wildlife removal service. Licensed, insured, and available 24/7. Same-day service for rodents, termites, bed bugs, raccoons, bats, and 16+ more pests across all 50 states and Washington, DC.",
  keywords: [
    "pest control near me",
    "exterminator near me",
    "wildlife removal",
    "rodent control",
    "termite treatment",
    "bed bug removal",
    "same day pest control",
    "24/7 pest control",
    "pest removal USA",
    "nationwide pest control",
  ],
  openGraph: {
    title: "PestRemovalUSA | Nationwide Pest Control & Wildlife Removal",
    description:
      "Licensed, insured pest control in 50 states and DC. Same-day service. 100% satisfaction guaranteed. Call 1-800-PEST-USA.",
    url: "https://pestremovalusa.com",
    type: "website",
  },
  alternates: {
    canonical: "https://pestremovalusa.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <TrustBar background="muted" />
      <HomepageServices />
      <HomepageProcess />
      <HomepageEmergency />
      <HomepageStats />
      <HomepageLocations />
      <HomepageReviews />
      <HomepageFAQ />
    </>
  );
}