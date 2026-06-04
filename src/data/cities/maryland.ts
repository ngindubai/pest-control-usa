import type { CityLocation } from "@/types";

// Maryland. Pest data reflects humid subtropical Mid-Atlantic conditions and
// the Chesapeake Bay watershed environment.

export const marylandCities: CityLocation[] = [
  {
    slug: "baltimore",
    name: "Baltimore",
    state: "Maryland",
    stateSlug: "maryland",
    stateAbbr: "MD",
    tier: "T1",
    population: "~580,000",
    county: "Baltimore City",
    climate: "hot-humid",
    climateDriver:
      "Baltimore sits at the northern edge of the humid subtropical zone, with hot humid summers and cold but not severe winters. The Chesapeake Bay watershed, the Jones Falls, and the Patapsco River create significant mosquito habitat, and the city's rowhouse neighborhoods sustain year-round rodent pressure.",
    topPests: ["Rats", "Cockroaches", "Stink Bugs", "Termites", "Mosquitoes"],
    pestProfile: [
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Baltimore is consistently ranked among the most rat-infested cities in the United States. The alleyways between rowhouse blocks, the aging sewer infrastructure, and the waterfront food service industry sustain one of the country's densest urban rat populations. Alley rat complaints are a defining feature of Baltimore's pest landscape.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Baltimore's rowhouse and apartment stock. They spread rapidly through shared walls and plumbing voids and are difficult to eliminate without treating the entire building or adjacent units.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion (Sept to Nov), overwintering indoors",
        note: "Maryland is one of the states hardest hit by the brown marmorated stink bug invasion. Baltimore homeowners in older rowhouses and buildings near tree cover see mass fall invasions, with the insects entering through gaps around windows, utility lines, and eaves.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "The DC, Maryland, and Virginia triangle has elevated subterranean termite pressure. Baltimore's rowhouse stock, much of it pre-1950s wood frame, is exposed to termite risk, particularly in homes with crawl spaces or older wooden sill plates.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The Chesapeake Bay watershed, Patapsco River, and numerous drainage channels and retention basins create sustained mosquito breeding habitat. Culex mosquitoes capable of carrying West Nile virus are active through the summer months.",
      },
    ],
    localHook:
      "Baltimore's rowhouse neighborhoods are one of the city's defining features, and they create an equally distinctive pest challenge. The alleyways between block after block of rowhouses are a protected highway system for rats. The city has acknowledged this for decades. Effective rat control in Baltimore starts with understanding the rowhouse alley ecosystem.",
    intro:
      "Pest control in Baltimore is built around one dominant fact: the city's rowhouse neighborhoods, a defining feature of the architecture, create almost ideal rat habitat. The alleys that run behind block after block of rowhouses provide sheltered, food-accessible corridors that sustain one of the densest urban rat populations in the country. Add German cockroaches in the shared walls, a strong fall stink bug season, subterranean termite pressure in the older housing stock, and a solid mosquito season from the Chesapeake watershed, and Baltimore demands consistent, year-round pest management.",
    sections: [
      {
        heading: "Rowhouse alleys and the rat problem",
        body: "Baltimore's rat issue is well-documented and long-standing. The alleys between rowhouses provide exactly what rats need: shelter, food access from garbage, and protected corridors to move between buildings. The aging sewer system provides additional harborage underground. Effective control requires treating the alley environment, not just individual properties. Sealing foundation gaps, securing garbage lids, and removing harborage around steps and HVAC equipment are all part of an effective program, not optional extras.",
      },
      {
        heading: "Stink bugs: what the fall invasion looks like",
        body: "If you are new to Baltimore, the first fall stink bug season can be a surprise. Brown marmorated stink bugs begin looking for overwintering sites in September, and they find their way into homes through the smallest gaps around windows, doors, utility lines, and eaves. They do not damage the structure, but they appear in large numbers and produce a distinct odor when handled or crushed. The practical response is sealing potential entry points before September and removing any that get in by vacuuming rather than squashing.",
      },
    ],
    prevention: [
      "Seal foundation cracks and gaps around pipes in late summer before rats and mice push in for winter.",
      "Secure garbage containers with tight-fitting lids to reduce alley rat food sources.",
      "Seal window gaps and utility penetrations before September to reduce stink bug entry.",
      "Schedule an annual termite inspection, particularly for pre-1950s rowhouses with crawl spaces.",
    ],
    costNote:
      "Baltimore pest control is typically quoted separately for rodent exclusion work and recurring general pest service. Termite inspection and treatment are a separate quote. Starting with a free inspection identifies what is actually present before any pricing.",
    faqs: [
      {
        question: "Why is Baltimore's rat problem so severe?",
        answer:
          "Baltimore's rowhouse neighborhoods create near-ideal rat habitat: sheltered alleys with regular food access, aging sewer infrastructure, and a large food service industry near the waterfront. The city has long had some of the highest rat complaint rates in the country. Effective management targets the alley environment and building exclusion, not just individual bait stations.",
      },
      {
        question: "What should I do about stink bugs invading my Baltimore home?",
        answer:
          "The most effective approach is sealing potential entry points before September: gaps around windows, utility lines, eaves, and roof vents. Once they are inside, remove them by vacuuming without crushing them, since crushing releases the odor. They are harmless and will become dormant as temperatures drop.",
      },
      {
        question: "Are termites a significant risk in Baltimore?",
        answer:
          "Yes. The mid-Atlantic region has elevated subterranean termite pressure, and Baltimore's older rowhouse stock is particularly exposed. Homes with crawl spaces, wood siding, or structural wood near soil are at higher risk. The first sign is often a spring swarm of winged termites indoors.",
      },
      {
        question: "When is mosquito season in Baltimore?",
        answer:
          "April through October, with peak pressure in July and August. The Chesapeake Bay watershed, Patapsco River, and numerous drainage features across the city provide significant breeding habitat. West Nile virus activity has been recorded in the region.",
      },
      {
        question: "Do cockroaches spread between rowhouse units?",
        answer:
          "Yes, easily. German cockroaches move through shared plumbing voids and wall cavities between units, which is why treating a single apartment rarely produces lasting results in a rowhouse or multi-family building. Effective control in shared housing usually requires treating all adjacent units simultaneously.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Washington", slug: "washington" },
      { name: "Annapolis", slug: "annapolis" },
      { name: "Rockville", slug: "rockville" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbour",
    metaTitle: "Pest Control in Baltimore, MD | Rats, Cockroaches & Stink Bugs",
    metaDescription:
      "Baltimore pest control for Norway rats, German cockroaches, brown marmorated stink bugs, termites and mosquitoes. Rowhouse specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
