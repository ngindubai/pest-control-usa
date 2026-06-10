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
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Baltimore, MD | Rats, Cockroaches & Stink Bugs",
    metaDescription:
      "Baltimore pest control for Norway rats, German cockroaches, brown marmorated stink bugs, termites and mosquitoes. Rowhouse specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "frederick",
    name: "Frederick",
    state: "Maryland",
    stateSlug: "maryland",
    stateAbbr: "MD",
    tier: "T2",
    population: "~82,000",
    county: "Frederick County",
    climate: "hot-humid",
    climateDriver:
      "Frederick sits in the Monocacy River valley at the foot of Catoctin Mountain, between the Blue Ridge and the Piedmont corridor leading to the Chesapeake Bay. The valley collects warm humid air from the south and east, sustaining termite activity and a long mosquito season. Frederick County is also in the heart of the mid-Atlantic stink bug zone and has well-documented deer tick pressure in its surrounding forests and agricultural land.",
    topPests: [
      "Stink bugs",
      "Termites",
      "Deer ticks",
      "Mosquitoes",
      "Mice",
    ],
    pestProfile: [
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Indoor invasions September through March",
        note: "Frederick County is in the core zone of the mid-Atlantic stink bug invasion. The bug first arrived in Allentown, PA in the late 1990s and rapidly established across Maryland. Penn State and the USDA have studied stink bug populations extensively in the Frederick area, and fall invasions into buildings are one of the most common pest calls in the region each year.",
      },
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "University of Maryland Extension confirms subterranean termite pressure across the Frederick County Piedmont. The Monocacy River valley's humid conditions and the abundance of older wood-frame housing in Frederick's downtown and established neighborhoods creates conditions where annual termite inspections are a practical precaution.",
      },
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November",
        note: "Frederick County has documented deer tick activity and Lyme disease risk. The Catoctin Mountain forests, the Monocacy River corridor, and the county's agricultural land provide extensive tick habitat. The Maryland Department of Health consistently reports Frederick County in the moderate to high-risk category for Lyme disease.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The Monocacy River and its tributaries, along with the wetland areas common in the valley east of Catoctin Mountain, create mosquito breeding habitat close to Frederick's residential areas. West Nile virus has been detected in Frederick County mosquito populations.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "Frederick's older downtown and established suburban areas have housing stock with the gaps and settling that give mice access in fall. The agricultural landscape surrounding the city also contributes field mouse pressure at the city's edges.",
      },
    ],
    localHook:
      "Frederick's historic downtown and its position between Catoctin Mountain and the Monocacy River valley are part of what makes it one of Maryland's most appealing cities. That same setting puts it in the core of the mid-Atlantic stink bug zone, within documented deer tick territory, and in the Piedmont corridor where termite pressure is a known and documented concern.",
    intro:
      "Pest control in Frederick reflects its position in the mid-Atlantic Piedmont between the Blue Ridge and the Chesapeake Bay watershed. Brown marmorated stink bugs are the signature fall nuisance pest, with Frederick County firmly in the core zone that the invasion first established. Termites are documented throughout the Monocacy valley by University of Maryland Extension. Deer ticks and Lyme disease risk are well-established in the surrounding forests and farmland. Mosquitoes have a long active season along the Monocacy River, and mice are a fall and winter standard.",
    sections: [
      {
        heading: "Stink bugs: Frederick's most consistent fall pest",
        body: "Frederick County's position in the mid-Atlantic corridor makes it one of the most reliably affected areas for fall stink bug invasions. The brown marmorated stink bug, which established in nearby Allentown, PA in the late 1990s and spread rapidly through Maryland, aggregates on south and west building faces in September and October as temperatures cool. They enter through gaps around windows, doors, vents, and utility penetrations. They do not bite or damage structures, but their numbers can be large and they release a pungent odor when disturbed. Sealing the building envelope before September is the most effective prevention. The USDA has conducted research on stink bug management in the Frederick area given its position in the core population zone.",
      },
      {
        heading: "Ticks and termites in the Catoctin foothills",
        body: "The forested slopes of Catoctin Mountain and the Monocacy River corridor create two distinct pest risks that Frederick homeowners should plan around. Deer ticks are active in the wooded and brushy areas surrounding the city, and the Maryland Department of Health identifies Frederick County in the moderate to high-risk zone for Lyme disease. Yard-edge treatment, particularly along the transition from lawn to woods or tall grass, significantly reduces tick exposure. Separately, eastern subterranean termites are documented throughout the county by University of Maryland Extension. Annual termite inspections are practical given the humid Piedmont conditions and the older housing common in Frederick's established neighborhoods.",
      },
    ],
    prevention: [
      "Seal exterior gaps around windows, doors, and utilities before September to reduce stink bug entry during the fall aggregation period.",
      "Schedule an annual termite inspection given the University of Maryland-documented pressure in the Frederick County Piedmont.",
      "Maintain a mowed buffer zone between the lawn and wooded or brushy areas to reduce deer tick exposure.",
      "Check foundation gaps and pipe penetrations in fall to intercept mice before Frederick's cold weather drives them indoors.",
    ],
    costNote:
      "Frederick pest control is commonly structured as a recurring general plan for ants, rodents, and cockroaches, with termite protection and tick treatment quoted separately. Stink bug exclusion is most effective when done in August. A free inspection establishes current pest activity before a plan is proposed.",
    faqs: [
      {
        question: "Why are stink bugs such a problem in Frederick, MD?",
        answer:
          "Frederick County is in the core zone of the mid-Atlantic stink bug invasion. The insect established in Allentown, PA in the 1990s and spread rapidly through the region, with Maryland becoming one of the most affected states. Fall aggregations on building exteriors and entry into structures are reliable seasonal events in Frederick.",
      },
      {
        question: "How serious is the termite risk in Frederick?",
        answer:
          "Real. University of Maryland Extension confirms subterranean termite pressure across the Frederick County Piedmont. The Monocacy valley's humid conditions support colony activity through the warm season. Annual inspections are the practical precaution, especially for homes with crawl spaces or older construction.",
      },
      {
        question: "Are deer ticks a concern in Frederick County?",
        answer:
          "Yes. The Maryland Department of Health places Frederick County in the moderate to high-risk zone for Lyme disease. The Catoctin Mountain forests and the Monocacy River corridor provide extensive tick habitat. Regular tick checks after outdoor activity in wooded or brushy areas are the most effective personal protection.",
      },
      {
        question: "When is mosquito season in Frederick?",
        answer:
          "April through October, with peak pressure in June through August. The Monocacy River and its tributaries create breeding habitat close to residential areas. West Nile virus has been detected in Frederick County. Removing standing water from yard containers reduces breeding habitat on the property.",
      },
      {
        question: "Does Frederick need year-round pest service?",
        answer:
          "Most homes benefit from it. Stink bugs are a fall and winter issue, ticks are active spring through fall, termites need annual inspection, mice are a fall and winter concern, and mosquitoes run April through October. A continuous plan addresses the full seasonal rotation more cost-effectively than individual responses.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Hagerstown", slug: "hagerstown" },
      { name: "Gaithersburg", slug: "gaithersburg" },
      { name: "Baltimore", slug: "baltimore" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle:
      "Pest Control in Frederick, MD | Stink Bugs, Termites & Deer Ticks",
    metaDescription:
      "Frederick pest control for brown marmorated stink bugs, eastern subterranean termites, deer ticks, mosquitoes and mice. Frederick County Monocacy valley Maryland specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
