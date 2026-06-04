import type { CityLocation } from "@/types";

// Virginia. Pest data reflects humid subtropical coastal and Piedmont conditions.
// Mosquito data from City of Virginia Beach Mosquito Control Program.

export const virginiaCities: CityLocation[] = [
  {
    slug: "virginia-beach",
    name: "Virginia Beach",
    state: "Virginia",
    stateSlug: "virginia",
    stateAbbr: "VA",
    tier: "T1",
    population: "~460,000",
    county: "Virginia Beach City",
    climate: "hot-humid",
    climateDriver:
      "Virginia Beach's 38-mile coastline, the Back Bay National Wildlife Refuge, and extensive tidal marshland create one of the most productive mosquito environments in Virginia. The humid subtropical climate means termites and other warm-season pests are active from March through November.",
    topPests: [
      "Mosquitoes",
      "Termites",
      "Stink Bugs",
      "Cockroaches",
      "Ants",
    ],
    pestProfile: [
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October, peak pressure June through September",
        note: "Virginia Beach's extensive coastal marshland, the Back Bay refuge, and the many tidal channels and drainage features across the resort city create one of the highest mosquito pressures in Virginia. The city operates an active Mosquito Control Program. Both Aedes and Culex mosquitoes are present; Culex species can carry West Nile virus, which has been recorded in the Virginia Beach area.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "The coastal Virginia humidity and warm climate create elevated subterranean termite pressure. Virginia Beach and the Hampton Roads area consistently appear in higher termite hazard categories. Homes with crawl spaces or wood in contact with moist coastal soil are at real risk.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion (Sept to Nov), overwintering indoors",
        note: "Virginia is one of the mid-Atlantic states most affected by the stink bug invasion. Virginia Beach homes near wooded areas and the Chesapeake Bay corridor see significant fall invasions as the insects seek overwintering sites.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round in the mild coastal climate",
        note: "The coastal warmth and humidity sustain American cockroach activity year-round in Virginia Beach, where they are common around drainage infrastructure and in the moist, sheltered areas under decks and in crawl spaces.",
      },
      {
        name: "Odorous house ants and fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Odorous house ants are the most common nuisance species indoors. Red imported fire ants are present in the Hampton Roads area and pose a sting risk in yards, particularly after rain events when mounds become more visible.",
      },
    ],
    localHook:
      "Virginia Beach has 38 miles of coastline and hundreds of acres of tidal marsh. That geography is the reason the city runs its own professional Mosquito Control Program. For residents living near the Back Bay, the Chesapeake Bay corridor, or the tidal channels through the resort area, mosquitoes are not a background nuisance. They are a six-month management challenge.",
    intro:
      "Pest control in Virginia Beach starts with the geography. The 38-mile coast, the Back Bay National Wildlife Refuge, and the hundreds of acres of tidal marshland create one of the most significant mosquito environments in Virginia. The city operates its own Mosquito Control Program for good reason. Beyond mosquitoes, the humid coastal climate sustains elevated subterranean termite pressure, the mid-Atlantic stink bug season hits hard in fall, and American cockroaches are active year-round in the warmth.",
    sections: [
      {
        heading: "Why the mosquito pressure is so high near the coast",
        body: "Virginia Beach is not just a coastal city in climate terms. The Back Bay National Wildlife Refuge on the southern edge of the city and the tidal marshes running through the resort area provide ideal, protected breeding habitat that is largely outside human control. The city's Mosquito Control Program treats public areas, but private yards, particularly those adjacent to wooded areas, marshland, or drainage channels, require individual management. Removing standing water, treating shaded resting areas under decks and in dense planting, and using a barrier spray program are the practical steps for residential properties.",
      },
      {
        heading: "Stink bugs and the fall arrival",
        body: "Virginia Beach homeowners near wooded areas and the Chesapeake Bay corridor tend to see significant stink bug invasions each fall. The brown marmorated stink bug entered Virginia through the mid-Atlantic corridor and is now well-established across the state. They enter homes in September and October through gaps around windows, utility penetrations, and eaves. They cause no structural damage and do not bite, but they produce a noticeable odor when handled or crushed. Sealing entry points before September is the most effective prevention.",
      },
    ],
    prevention: [
      "Remove standing water from drainage features and containers regularly through the long mosquito season.",
      "Seal gaps around windows, eaves, and utility penetrations before September to reduce stink bug entry.",
      "Keep an annual termite inspection on the calendar given the elevated Hampton Roads pressure.",
      "Treat fire ant mounds as they appear in the yard after rain events.",
    ],
    costNote:
      "Virginia Beach pest control is often quoted as a general year-round plan with seasonal mosquito service added April through October. Termite protection is quoted separately after inspection. Start with a free assessment.",
    faqs: [
      {
        question: "Why does Virginia Beach have such a serious mosquito problem?",
        answer:
          "The city's 38-mile coastline, the Back Bay National Wildlife Refuge, and extensive tidal marshland create some of the most productive mosquito breeding habitat in Virginia. The city operates its own Mosquito Control Program, which treats public areas. Private yards, especially near marshland and drainage channels, require individual management.",
      },
      {
        question: "Are termites a real concern in Virginia Beach?",
        answer:
          "Yes. The coastal Virginia humidity and warm climate put the Hampton Roads area in an elevated termite hazard category. Subterranean termites swarm in spring, and homes with crawl spaces or any structural wood near the moist coastal soil are at real risk. Annual inspections are recommended.",
      },
      {
        question: "When do stink bugs arrive in Virginia Beach homes?",
        answer:
          "The fall invasion typically begins in September and continues through November as the insects seek overwintering sites. They enter through the smallest gaps around windows, doors, utility lines, and eaves. Sealing these points before September is the most effective prevention. They are harmless but produce an odor when disturbed.",
      },
      {
        question: "Are American cockroaches active year-round in Virginia Beach?",
        answer:
          "Yes. The mild coastal climate sustains American cockroach activity year-round. They are particularly common around drainage infrastructure, crawl spaces, and the moist, sheltered areas under decks and mulched planting beds. German cockroaches are the dominant indoor species in commercial and multi-family settings.",
      },
      {
        question: "Does Virginia Beach have fire ants?",
        answer:
          "Yes. Red imported fire ants are present in the Hampton Roads area and appear in yards and open areas across Virginia Beach. They rebuild mounds quickly after rain events and are a sting risk for children and pets. Treating mounds as they appear keeps the population manageable.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Norfolk", slug: "norfolk" },
      { name: "Chesapeake", slug: "chesapeake" },
      { name: "Hampton", slug: "hampton" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Virginia Beach, VA | Mosquitoes, Termites & Stink Bugs",
    metaDescription:
      "Virginia Beach pest control for coastal mosquitoes, subterranean termites, stink bugs, cockroaches and fire ants. Free inspection. Call 1-800-PEST-USA.",
  },
];
