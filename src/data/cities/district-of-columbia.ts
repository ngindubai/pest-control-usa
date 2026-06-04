import type { CityLocation } from "@/types";

// Washington DC. Pest data reflects humid subtropical mid-Atlantic conditions
// and the urban density of the Potomac/Anacostia watershed.

export const districtOfColumbiaCities: CityLocation[] = [
  {
    slug: "washington",
    name: "Washington",
    state: "District of Columbia",
    stateSlug: "district-of-columbia",
    stateAbbr: "DC",
    tier: "T1",
    population: "~690,000",
    county: "District of Columbia",
    climate: "hot-humid",
    climateDriver:
      "DC sits in the humid subtropical zone where the Potomac and Anacostia Rivers, Rock Creek, and the coastal plain create conditions that sustain rats, mosquitoes, and termites well beyond what most northern cities see.",
    topPests: ["Rats", "Stink Bugs", "Termites", "Cockroaches", "Mosquitoes"],
    pestProfile: [
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "DC is one of the most rat-dense cities in the country per capita. The combination of dense neighborhoods, older sewer infrastructure, and the restaurant and food industry creates ideal conditions. The Dupont Circle, Adams Morgan, and Capitol Hill neighborhoods have some of the highest complaint rates.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion (Sept to Nov), overwintering indoors",
        note: "DC is in the epicenter of the mid-Atlantic stink bug invasion that spread from Allentown, PA in the late 1990s. The insect is harmless but produces a strong odor when disturbed and enters homes by the hundreds each fall seeking overwintering sites.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "The DC, Maryland, and Virginia triangle has significant subterranean termite pressure. The clay soils and older housing stock of the rowhouse neighborhoods create favorable conditions for colony establishment.",
      },
      {
        name: "German and American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches favor the kitchen and bathroom of apartment buildings, while the large American roach is common in basements and around sewer access points across the District.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The Potomac and Anacostia River corridors and Rock Creek Park provide significant mosquito habitat. Culex mosquitoes capable of carrying West Nile virus are active through the summer months.",
      },
    ],
    localHook:
      "DC competes with New York and Chicago for the highest rat density in the country, and the city also sits in the core zone for the brown marmorated stink bug invasion that swept the mid-Atlantic. It is a genuinely demanding pest environment beneath the marble and monuments.",
    intro:
      "Pest control in Washington DC is shaped by two things most visitors never notice: the city has one of the highest rat concentrations in the country, and it sits at the center of the mid-Atlantic stink bug invasion. Add subterranean termites, year-round cockroaches in the dense rowhouse stock, and a solid mosquito season from the Potomac and Anacostia corridors, and you have a city that demands consistent, year-round pest management rather than a single treatment and done.",
    sections: [
      {
        heading: "Rats versus stink bugs: two very different problems",
        body: "Rats in DC are a structural and sanitation issue with real health implications. Brown marmorated stink bugs, by contrast, are a nuisance: they do not bite, do not spread disease, and do not damage your home. What they do is invade in large numbers every fall and produce a persistent odor when crushed or disturbed. Treating them is mostly about sealing entry points before October and, when they do get in, removing them without squashing them. Rats require a completely different response: baiting, exclusion, and harborage removal.",
      },
      {
        heading: "Termite risk in the rowhouse corridor",
        body: "The DC, Maryland, and Virginia triangle has consistently elevated subterranean termite pressure, and the rowhouse neighborhoods of Capitol Hill, Shaw, Columbia Heights, and Petworth are particularly exposed. Older homes with wood in contact with soil, inadequate vapor barriers under crawl spaces, and ivy or mulch against the foundation all increase the risk. A spring swarm of winged termites indoors is the most common first sign, and it means the colony is established and mature. Annual inspections are the practical defense.",
      },
    ],
    prevention: [
      "Seal all gaps around pipes, utility lines, and the foundation to block rat entry points before cold weather.",
      "Check and replace door sweeps and weather stripping each fall to reduce stink bug entry.",
      "Clear standing water from gutters, planters, and low spots in the yard to reduce mosquito breeding.",
      "Keep an annual termite inspection on the calendar, especially for rowhouses with crawl spaces.",
    ],
    costNote:
      "DC pest control is typically quoted per service: rat exclusion, termite inspection and treatment, and general pest programs are separate. Start with a free inspection to identify which issues are active and price them properly.",
    faqs: [
      {
        question: "Why does Washington DC have such a serious rat problem?",
        answer:
          "DC's rat population is sustained by a combination of factors: dense neighborhoods, an aging sewer and storm drain network, a large restaurant and food service industry, and alleys between rowhouses that provide sheltered harborage. The city ranks among the most rat-dense in the country per capita, and complaint rates in neighborhoods like Adams Morgan and Capitol Hill are among the highest in the District.",
      },
      {
        question: "Are brown marmorated stink bugs dangerous?",
        answer:
          "No. They do not bite, sting, or spread disease, and they do not damage the structure of your home. The issue is the odor they produce when crushed or disturbed, and the sheer numbers that enter homes each fall seeking warmth. The practical response is sealing entry points before September and removing any that get in without squashing them.",
      },
      {
        question: "Is termite risk really high in DC?",
        answer:
          "Yes. The DC, Maryland, and Virginia triangle has consistently elevated subterranean termite pressure. The clay soils, older wood-frame construction in many neighborhoods, and the humid summers all support termite activity. Annual inspections are recommended, particularly for rowhouses and older homes with wood near the soil.",
      },
      {
        question: "When is mosquito season in Washington DC?",
        answer:
          "The active season runs April through October, with peak pressure in July and August. The Potomac River corridor, Anacostia floodplain, and Rock Creek Park all provide significant breeding habitat. Culex mosquitoes capable of carrying West Nile virus are active through the summer.",
      },
      {
        question: "Do I need year-round pest control in DC?",
        answer:
          "For most rowhouse and apartment dwellers, yes. Rats, cockroaches, and stink bugs are year-round concerns, even if the threats shift by season. A continuous plan is more effective than responding to individual incidents, especially for rodent exclusion work.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Baltimore", slug: "baltimore" },
      { name: "Arlington", slug: "arlington" },
      { name: "Alexandria", slug: "alexandria" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Washington DC | Rats, Stink Bugs & Termites",
    metaDescription:
      "Washington DC pest control for Norway rats, brown marmorated stink bugs, subterranean termites, cockroaches and mosquitoes. Free inspection. Call 1-800-PEST-USA.",
  },
];
