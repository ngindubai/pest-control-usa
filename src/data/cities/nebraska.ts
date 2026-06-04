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
        serviceSlug: "wasp-bee-removal",
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
  {
    slug: "lincoln",
    name: "Lincoln",
    state: "Nebraska",
    stateSlug: "nebraska",
    stateAbbr: "NE",
    tier: "T1",
    population: "~295,000",
    county: "Lancaster County",
    climate: "cold-humid",
    climateDriver:
      "Lincoln sits on the eastern Nebraska plains with cold winters, hot humid summers, and the surrounding agricultural land that defines the region. The cold drives rodents indoors each fall, the humid summers support a mosquito season, and the farmland edges bring field rodent pressure into the city.",
    topPests: ["Mice", "Ants", "Wasps", "Mosquitoes", "Spiders"],
    pestProfile: [
      {
        name: "House mice and field mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, major surge in fall",
        note: "Lincoln's cold winters drive mice firmly indoors each fall. The surrounding agricultural land and the city's open edges bring additional field mouse pressure beyond the standard urban house mouse.",
      },
      {
        name: "Odorous house and carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Odorous house ants are the common indoor nuisance ant, producing a rotten coconut smell when crushed. Carpenter ants nest in moisture-damaged wood in older homes.",
      },
      {
        name: "Yellow jacket and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets nest in the ground and wall voids and become aggressive in late summer as colonies peak. Paper wasps build nests under eaves and in sheltered outdoor spots.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "May through September",
        note: "Salt Creek, the area's lakes and ponds, and the standing water across the surrounding farmland create mosquito breeding habitat through the humid summers. West Nile virus activity has been recorded in Lancaster County.",
      },
      {
        name: "Spiders, including occasional brown recluse",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, most active spring through fall",
        note: "Common house and cellar spiders are widespread. Nebraska is near the northern edge of the brown recluse range, and they occasionally turn up in undisturbed storage areas and basements.",
      },
    ],
    localHook:
      "Lincoln sits surrounded by Nebraska farmland, and that agricultural setting shapes the pest year. When the cold arrives, the field mice from the surrounding land join the urban house mice in heading indoors, making the fall rodent surge here stronger than in a purely urban city.",
    intro:
      "Pest control in Lincoln is best understood through the contrast between its urban core and its agricultural surroundings. The cold winters versus the humid summers set up two different pest seasons: a fall rodent surge driven by the cold, and a summer mosquito and wasp season driven by the heat and humidity. And the city core versus the farmland edge means homes near open land face field rodent pressure that downtown homes do not. Matching the response to the season and the setting is the key here.",
    sections: [
      {
        heading: "Cold-season rodents versus warm-season insects",
        body: "Lincoln's pest year splits cleanly by temperature. In the cold months, the story is rodents: mice driven indoors by the falling temperatures, with extra pressure on homes near the surrounding farmland. In the warm months, the story shifts to insects: mosquitoes breeding in Salt Creek and the area ponds, and wasps building toward their aggressive late-summer peak. By contrast with a warm-climate city where pests run year-round, Lincoln's clear seasonal swing means the smart approach is timing the work, rodent exclusion before fall and insect management through summer, rather than constant treatment.",
      },
      {
        heading: "City core versus farmland edge",
        body: "Where you live in Lincoln changes your pest pressure. Homes in the established core face standard urban pests: house mice, odorous house ants, and the common spiders. Homes on the city's growing edges, where new neighborhoods meet open agricultural land, face additional field mouse and rodent pressure from the surrounding farmland, especially in fall. The difference is meaningful: an edge home benefits from more attention to yard harborage and exterior rodent exclusion than a core home typically needs.",
      },
    ],
    prevention: [
      "Seal foundation gaps and utility penetrations before fall, especially on homes near farmland.",
      "Remove standing water and treat resting areas to manage the summer mosquito season.",
      "Treat yellow jacket ground nests in spring when colonies are small and easier to manage.",
      "Store items in sealed plastic containers to reduce occasional brown recluse harborage in basements.",
    ],
    costNote:
      "Lincoln pest control commonly uses a seasonal approach: fall rodent exclusion, summer mosquito and wasp service, and ant treatment through the warm months. A free inspection sets the schedule to your home and its setting.",
    faqs: [
      {
        question: "Why is the fall mouse surge strong in Lincoln?",
        answer:
          "Lincoln is surrounded by Nebraska farmland, and when the cold arrives, field mice from the surrounding agricultural land join the urban house mice in moving toward warm buildings. Homes near open land see the strongest pressure. Sealing entry points before fall, particularly on the city's edges, is the most effective prevention.",
      },
      {
        question: "Is there a mosquito risk in Lincoln?",
        answer:
          "Yes. Salt Creek, the area's lakes and ponds, and the standing water across the surrounding farmland create breeding habitat through the humid summers. West Nile virus activity has been recorded in Lancaster County. The active season runs May through September. Removing standing water and treating resting areas reduces exposure.",
      },
      {
        question: "Are brown recluse spiders found in Lincoln?",
        answer:
          "Occasionally. Nebraska is near the northern edge of the brown recluse range, so they are less common here than in Oklahoma or Missouri but do turn up in undisturbed storage areas and basements. Storing items in sealed plastic containers and checking undisturbed spaces reduces contact.",
      },
      {
        question: "When are wasps worst in Lincoln?",
        answer:
          "Wasp and yellow jacket nests grow through the summer and are largest and most aggressive in late summer, around August and September, near eaves, decks, and trash. Treating ground nests in spring while colonies are small is far easier and safer than dealing with a mature nest.",
      },
      {
        question: "Do I need year-round pest control in Lincoln?",
        answer:
          "Many Lincoln homes do well with a seasonal plan given the clear seasonal swing: fall rodent exclusion, summer mosquito and wasp service, and ant treatment through the warm months. Homes on the farmland edge or with recurring indoor pressure may benefit from a continuous plan. A free inspection sets the right schedule.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Omaha", slug: "omaha" },
      { name: "Bellevue", slug: "bellevue" },
      { name: "Beatrice", slug: "beatrice" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Lincoln, NE | Mice, Wasps & Mosquitoes",
    metaDescription:
      "Lincoln pest control for fall mice and field mice, wasps, mosquitoes, ants and spiders. Plains and farmland-edge specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
