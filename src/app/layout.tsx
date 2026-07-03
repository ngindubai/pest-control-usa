import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PestRemovalUSA | Nationwide Pest Control & Wildlife Removal",
    template: "%s | PestRemovalUSA",
  },
  description:
    "America's trusted pest control and wildlife removal service. Licensed exterminators for rodents, termites, bed bugs, raccoons, bats & more. Same-day service available nationwide.",
  keywords: [
    "pest control",
    "exterminator near me",
    "wildlife removal",
    "rodent removal",
    "termite treatment",
    "bed bug treatment",
    "pest removal USA",
  ],
  metadataBase: new URL("https://pestremovalusa.com"),
  openGraph: {
    type: "website",
    siteName: "PestRemovalUSA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlow.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased pb-[68px] md:pb-0">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
