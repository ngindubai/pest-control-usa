import type { CityLocation } from "@/types";

// Nebraska. Pest data reflects humid continental Great Plains conditions.
// Termite pressure from University of Nebraska Extension; Missouri River corridor.

export const nebraskaCities: CityLocation[] = [
  {
    slug: "omaha",
    name: "Omaha",
    state: "Nebraska",
    stateSlug: "nebraska",
    stateAbbr: "NE",
    tier: "T1",
    population: "~485,000",
    county: "Douglas County",
    climate: "cold-humid",
    climateDriver:
      "Omaha sits on the Missouri River in the eastern edge of the Great Plains. Cold winters, hot humid summers, and the Missouri River bottomlands create a pest environment that combines the rodent pressure of cold-climate cities with above-average termite activity for a northern city.",
    topPests: ["Mice", "Termites", "Ants", "Cockroaches", "Wasps"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge in October and November",
        note: "Omaha's hard winters drive mice firmly and rapidly into buildings each fall. Nebraska winters are cold enough that mice entering in October can establish before being noticed. Older neighborhoods like the Dundee, Benson, and Gold Coast districts have housing stock with more potential entry points than modern construction.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms April through June, active spring through fall",
        note: "University of Nebraska Extension confirms Omaha and the eastern Nebraska Missouri River corridor have above-average subterranean termite pressure for a northern city. The Missouri River bottomland soils and humid summers support active colonies, making regular inspection worthwhile.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, most active May through August",
        note: "Odorous house ants are the most common nuisance ant in the Omaha area, producing a rotten coconut smell when crushed and foraging widely in kitchens and bathrooms. Pavement ants and carpenter ants are also present.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Omaha's apartment buildings and commercial settings. They are not affected by the cold winters and maintain populations year-round through shared wall voids.",
      },
      {
        name: "Yellow jacket wasps",
        serviceSlug: "wasp-hornet-control",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets are a significant late-summer concern in Omaha, nesting in the ground, wall voids, and under eaves. They become more aggressive and more likely to sting as their colonies reach peak size in August and September.",
      },
    ],
    localHook:
      "Omaha's Missouri River location is the reason the city has above-average termite pressure for a city this far north. The Missouri River bottomland soils are productive territory for subterranean termite colonies, and University of Nebraska Extension flags this as a genuine concern for eastern Nebraska homeowners.",
    intro:
      "Pest control in Omaha is a study in contrasts. The hard winters genuinely suppress outdoor pests for four to five months, which is welcome. But the same cold is why mice enter Omaha buildings faster and in larger numbers than almost anywhere south of the Canadian border when October arrives. Omaha also has above-average termite pressure for a northern city, driven by the Missouri River corridor. Add year-round German cockroaches, a strong ant season, and aggressive late-summer yellow jackets, and Omaha rewards consistent year-round pest management.",
    sections: [
      {
        heading: "The Missouri River and Omaha's termite risk",
        body: "Many people assume northern cities have minimal termite risk. Omaha is an exception. University of Nebraska Extension identifies the eastern Nebraska Missouri River corridor as having above-average subterranean termite pressure. The bottomland soils along the Missouri are productive territory for termite colonies, and the humid summers give them extended active seasons. The first sign is usually a spring swarm of winged termites, which means the colony is mature. Annual inspections are the practical defense, particularly for homes in older neighborhoods or with crawl spaces.",
      },
      {
        heading: "Fall mouse pressure in Omaha",
        body: "Omaha's winters are cold, and house mice respond to falling temperatures with urgency. A home that seemed fine in September can have mice by late October. The older neighborhoods of Dundee, Benson, and the Blackstone District have housing stock with more gaps and entry points than newer construction, and the proximity to the river creates additional rodent pressure from the bottomland population. Exclusion work in September, before the temperature drops, is far more effective than dealing with an established infestation in November.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and utility openings in September before the fall mouse surge.",
      "Schedule an annual termite inspection given Omaha's above-average Missouri River corridor pressure.",
      "Treat yellow jacket ground nests in spring when colonies are small and easier to manage safely.",
      "Keep garbage in sealed containers to reduce rat and mouse harborage near the building.",
    ],
    costNote:
      "Omaha pest pricing typically separates rodent exclusion work from recurring general pest service. Termite inspection and treatment are quoted separately. A fall inspection in September is particularly useful before the annual mouse surge. Start with a free assessment.",
    faqs: [
      {
        question: "Why does Omaha have above-average termite risk for a northern city?",
        answer:
          "Omaha sits on the Missouri River, and the bottomland soils along the river create favorable conditions for subterranean termite colonies. University of Nebraska Extension confirms the eastern Nebraska Missouri River corridor has above-average termite pressure. Annual inspections are recommended, particularly for homes in older neighborhoods or with crawl spaces.",
      },
      {
        question: "How bad is the fall mouse surge in Omaha?",
        answer:
          "Significant. Omaha's hard winters cause a fast, concentrated mouse surge into buildings in October and November. Older homes with more potential entry points around pipes, utilities, and foundation gaps are most exposed. Sealing these before October is the most effective prevention. Once mice are established, they require a combination of exclusion and bait program to clear.",
      },
      {
        question: "Are German cockroaches affected by Omaha's cold winters?",
        answer:
          "No. German cockroaches are entirely indoor insects and maintain populations year-round regardless of outdoor temperatures. They live in heated kitchens, bathrooms, and wall voids. The cold winter has no impact on indoor cockroach colonies.",
      },
      {
        question: "When are yellow jackets most aggressive in Omaha?",
        answer:
          "Late August and September, when colonies reach peak size and workers become more aggressive as natural food sources decline. Ground nests and nests in wall voids or under eaves are the most common. Treating nests in spring while they are still small significantly reduces the late-summer sting risk.",
      },
      {
        question: "Is year-round pest control worth it in Omaha?",
        answer:
          "For homes with recurring mouse pressure or cockroach activity, yes. Both are year-round concerns. The cold winters do suppress outdoor pests meaningfully, but rodent and cockroach pressure require continuous management. Adding a termite inspection annually is also a practical investment given the Missouri River corridor pressure.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Lincoln", slug: "lincoln" },
      { name: "Council Bluffs", slug: "council-bluffs" },
      { name: "Bellevue", slug: "bellevue" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle:
      "Pest Control in Omaha, NE | Mice, Termites & Missouri River Pests",
    metaDescription:
      "Omaha pest control for house mice, subterranean termites, odorous house ants, cockroaches and yellow jackets. Missouri River corridor specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
