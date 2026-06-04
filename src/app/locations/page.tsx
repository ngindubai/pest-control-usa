import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pest Control Service Areas | PestRemovalUSA — All 50 States",
  description:
    "PestRemovalUSA serves all 50 states with licensed pest control technicians. Find your state and city for local pest removal services near you.",
  alternates: { canonical: "https://pestremovalusa.com/locations" },
  openGraph: {
    title: "Pest Control Service Areas | All 50 States",
    description: "Find licensed pest control technicians in your state and city. Serving all 50 states nationwide.",
    url: "https://pestremovalusa.com/locations",
  },
};

const regions = [
  {
    name: "Northeast",
    states: [
      { name: "New York", slug: "new-york", cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"] },
      { name: "Pennsylvania", slug: "pennsylvania", cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"] },
      { name: "Massachusetts", slug: "massachusetts", cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"] },
      { name: "New Jersey", slug: "new-jersey", cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"] },
      { name: "Connecticut", slug: "connecticut", cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"] },
      { name: "Rhode Island", slug: "rhode-island", cities: ["Providence", "Cranston", "Warwick", "Pawtucket", "East Providence"] },
      { name: "Vermont", slug: "vermont", cities: ["Burlington", "South Burlington", "Rutland", "Barre", "Montpelier"] },
      { name: "New Hampshire", slug: "new-hampshire", cities: ["Manchester", "Nashua", "Concord", "Derry", "Dover"] },
      { name: "Maine", slug: "maine", cities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"] },
    ],
  },
  {
    name: "Southeast",
    states: [
      { name: "Florida", slug: "florida", cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"] },
      { name: "Georgia", slug: "georgia", cities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens"] },
      { name: "North Carolina", slug: "north-carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"] },
      { name: "South Carolina", slug: "south-carolina", cities: ["Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill"] },
      { name: "Virginia", slug: "virginia", cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Arlington"] },
      { name: "Tennessee", slug: "tennessee", cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"] },
      { name: "Alabama", slug: "alabama", cities: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"] },
      { name: "Mississippi", slug: "mississippi", cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi"] },
      { name: "Louisiana", slug: "louisiana", cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"] },
    ],
  },
  {
    name: "Midwest",
    states: [
      { name: "Illinois", slug: "illinois", cities: ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville"] },
      { name: "Ohio", slug: "ohio", cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"] },
      { name: "Michigan", slug: "michigan", cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor"] },
      { name: "Indiana", slug: "indiana", cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"] },
      { name: "Wisconsin", slug: "wisconsin", cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"] },
      { name: "Minnesota", slug: "minnesota", cities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington"] },
      { name: "Missouri", slug: "missouri", cities: ["Kansas City", "Saint Louis", "Springfield", "Columbia", "Independence"] },
      { name: "Iowa", slug: "iowa", cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"] },
      { name: "Kansas", slug: "kansas", cities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"] },
    ],
  },
  {
    name: "South & Southwest",
    states: [
      { name: "Texas", slug: "texas", cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"] },
      { name: "Arizona", slug: "arizona", cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"] },
      { name: "Oklahoma", slug: "oklahoma", cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton"] },
      { name: "Arkansas", slug: "arkansas", cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"] },
      { name: "New Mexico", slug: "new-mexico", cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"] },
      { name: "Nevada", slug: "nevada", cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"] },
      { name: "Utah", slug: "utah", cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem"] },
      { name: "Colorado", slug: "colorado", cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"] },
    ],
  },
  {
    name: "West & Pacific",
    states: [
      { name: "California", slug: "california", cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno"] },
      { name: "Washington", slug: "washington", cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"] },
      { name: "Oregon", slug: "oregon", cities: ["Portland", "Salem", "Eugene", "Gresham", "Hillsboro"] },
      { name: "Idaho", slug: "idaho", cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"] },
      { name: "Montana", slug: "montana", cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte"] },
      { name: "Wyoming", slug: "wyoming", cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"] },
      { name: "Hawaii", slug: "hawaii", cities: ["Honolulu", "East Honolulu", "Pearl City", "Hilo", "Kailua"] },
      { name: "Alaska", slug: "alaska", cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"] },
    ],
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <MapPin className="w-12 h-12 text-[var(--color-red-light)] mx-auto mb-4" />
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Pest Control Service Areas
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Licensed pest control technicians in all 50 states. Find your location for same-day service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href={siteConfig.phoneTel}
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-4 bg-[var(--color-muted)] border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            { label: "States Served", value: "50" },
            { label: "Cities Covered", value: "2,500+" },
            { label: "Licensed Technicians", value: "12,000+" },
            { label: "Same-Day Available", value: "Most Areas" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl font-black text-[var(--color-navy)]"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {s.value}
              </div>
              <div className="text-sm text-[var(--color-slate-custom)]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {regions.map((region) => (
            <div key={region.name}>
              <h2
                className="text-3xl font-bold text-[var(--color-navy)] mb-8 pb-3 border-b-2 border-[var(--color-red)]"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {region.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {region.states.map((state) => (
                  <Link
                    key={state.slug}
                    href={`/locations/${state.slug}`}
                    className="group bg-[var(--color-muted)] hover:bg-[var(--color-navy)] rounded-[var(--radius-card)] p-5 transition-all hover:shadow-[var(--shadow-card)]"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="font-bold text-[var(--color-navy)] group-hover:text-white transition-colors"
                        style={{ fontFamily: "var(--font-barlow)" }}
                      >
                        {state.name}
                      </div>
                      <ChevronRight className="w-4 h-4 text-[var(--color-red)] group-hover:text-[var(--color-red-light)] transition-colors" />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {state.cities.slice(0, 4).map((city) => (
                        <span
                          key={city}
                          className="text-xs text-gray-500 group-hover:text-blue-300 transition-colors"
                        >
                          {city}
                          {city !== state.cities[3] ? "," : " +more"}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Don't see your area CTA */}
      <section className="py-16 px-4 bg-[var(--color-muted)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Don&apos;t See Your City?
          </h2>
          <p className="text-gray-600 mb-8">
            We serve over 2,500 cities nationwide. Call us or enter your ZIP code to confirm
            coverage in your area — chances are we&apos;re already there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-2 bg-[var(--color-red)] text-white font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-red-light)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phoneDisplay}
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold px-8 py-4 rounded-[var(--radius-btn)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
            >
              Check Your ZIP Code
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
