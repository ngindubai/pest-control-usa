import type { CityLocation } from "@/types";

// Wisconsin. Pest data reflects humid continental Great Lakes conditions.
// Rodent and carpenter ant data from University of Wisconsin Extension.

export const wisconsinCities: CityLocation[] = [
  {
    slug: "milwaukee",
    name: "Milwaukee",
    state: "Wisconsin",
    stateSlug: "wisconsin",
    stateAbbr: "WI",
    tier: "T1",
    population: "~580,000",
    county: "Milwaukee County",
    climate: "cold-humid",
    climateDriver:
      "Milwaukee's Great Lakes location means genuine cold winters that suppress most outdoor pests significantly from November through March. The flip side is that mice, cockroaches, and bed bugs push hard into heated buildings when temperatures drop, and the warm season sees a concentrated burst of outdoor pest activity.",
    topPests: ["Mice", "Cockroaches", "Carpenter Ants", "Bed Bugs", "Wasps"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, major surge in October and November",
        note: "Milwaukee's hard winters drive mice firmly and rapidly into heated buildings. The city's stock of older multi-family housing, including brick apartment buildings and early 20th-century duplexes, has more entry points than newer construction. A home that seemed mouse-free through summer can have active mice by Thanksgiving.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor pest species in Milwaukee's apartment and commercial stock. They do not need outdoor access and spread through shared walls, plumbing voids, and grocery bags. Dense apartment living sustains colonies across buildings.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through September",
        note: "Carpenter ants are significant in Milwaukee, particularly in the older neighborhoods with mature trees and wood-frame construction. They nest in moist or softened wood and forage indoors through wall voids. Seeing large black ants indoors in spring is a common sign of an established colony nearby.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Milwaukee's high apartment density and significant housing turnover sustain steady bed bug pressure, particularly in the denser neighborhoods and buildings with frequent tenant changes.",
      },
      {
        name: "Yellow jacket wasps",
        serviceSlug: "wasp-hornet-control",
        activeSeason: "June through October, most aggressive August through September",
        note: "Yellow jackets are aggressive in late summer as colonies reach peak size and food sources become scarcer. They nest in the ground, wall voids, and under eaves, and are a real sting risk around decks and outdoor dining areas.",
      },
    ],
    localHook:
      "Milwaukee's winters are genuinely cold, which is good news for many outdoor pests. What the cold cannot do is reduce mice or cockroaches, which simply relocate deeper into heated buildings when temperatures fall. The fall surge of mice into Milwaukee homes is one of the most predictable pest events in the city, and preparing for it before October is far easier than dealing with it after.",
    intro:
      "Pest control in Milwaukee follows the seasons in a way that most warmer cities don't. The cold winters do real work: mosquitoes, outdoor ants, and many other seasonal pests are genuinely suppressed from November through March, which is a relief. But that same cold is why mice enter Milwaukee homes faster and in larger numbers than almost anywhere in the country when October arrives. German cockroaches run year-round regardless of temperature, carpenter ants are active from April through September in the older neighborhoods, and yellow jackets are aggressive through the late summer warm stretch.",
    sections: [
      {
        heading: "Why the fall mouse surge matters",
        body: "House mice begin moving into buildings in earnest when outdoor temperatures drop in October. In Milwaukee, that drop is real and fast. The mice are not choosing your home out of curiosity: they are following temperature gradients and seeking food. Older brick apartment buildings and the wood-frame duplexes in neighborhoods like Bay View, Riverwest, and Shorewood have more entry points than newer construction. The practical response is inspection and exclusion work in September, before the surge, not in November after it has happened.",
      },
      {
        heading: "Carpenter ants in the older neighborhoods",
        body: "Milwaukee's older neighborhoods have mature tree canopy and substantial wood-frame construction, and carpenter ants thrive in both. They nest in moist or softened wood, which means wood around leaky windows, door frames with water damage, and tree limbs in contact with the roofline. They do not eat wood but excavate it, and an established colony can cause real structural damage over several years. Seeing large black ants indoors in spring, often more than a couple at a time, suggests a colony is established within or adjacent to the building.",
      },
    ],
    prevention: [
      "Seal foundation cracks, pipe gaps, and utility penetrations in September before the fall mouse surge.",
      "Inspect wood around windows and roof lines annually for softness or moisture damage that attracts carpenter ants.",
      "Treat yellow jacket ground nests in spring when colonies are small and easier to manage.",
      "Inspect second-hand furniture for bed bug signs before bringing it into your home.",
    ],
    costNote:
      "Milwaukee pest pricing typically separates rodent exclusion work from recurring general pest service. Carpenter ant treatment and bed bug remediation are quoted separately. A free inspection in early fall is particularly useful for assessing mouse entry risk before the surge.",
    faqs: [
      {
        question: "Why do mice seem to appear suddenly in Milwaukee each fall?",
        answer:
          "House mice begin moving inside as outdoor temperatures drop, following warmth and the smell of food. In Milwaukee, October brings a rapid temperature drop that triggers a fast, concentrated surge of mice into buildings. Older homes with more gaps in foundations, around pipes, and through utility lines are particularly exposed. Sealing these in September prevents the surge.",
      },
      {
        question: "Do cockroaches go away in Milwaukee winters?",
        answer:
          "No. German cockroaches are entirely indoor insects and are not affected by outdoor temperatures. They live in heated kitchens, bathrooms, and wall voids year-round. The cold winter has no impact on them. They spread through shared plumbing voids and wall cavities in multi-family buildings.",
      },
      {
        question: "How do I know if I have carpenter ants or termites?",
        answer:
          "Carpenter ants are large and black, often seen foraging indoors in spring. Termites are smaller, cream-colored, and rarely seen unless they swarm. Carpenter ant damage has clean, smooth galleries. Termite damage is rough and filled with soil-like debris. Both require professional inspection to confirm, and both require treatment.",
      },
      {
        question: "When are yellow jackets most dangerous in Milwaukee?",
        answer:
          "Late August and September, when colonies reach their peak size and the workers become more aggressive as natural food sources decline. Ground nests, wall voids, and nests under eaves are all common. Treating them in spring when they are small is far easier and safer than dealing with them at peak size.",
      },
      {
        question: "Is year-round pest control necessary in Milwaukee?",
        answer:
          "For homes with cockroach pressure or recurring mouse activity, yes. Both are year-round concerns. Outdoor pests like wasps and carpenter ants are seasonal, but the indoor pest pressure in Milwaukee's older, denser housing stock warrants continuous management.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Racine", slug: "racine" },
      { name: "Waukesha", slug: "waukesha" },
      { name: "Madison", slug: "madison" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Milwaukee, WI | Mice, Cockroaches & Carpenter Ants",
    metaDescription:
      "Milwaukee pest control for house mice, German cockroaches, carpenter ants, bed bugs and yellow jackets. Free inspection. Call 1-800-PEST-USA.",
  },
];
