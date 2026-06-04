import type { CityLocation } from "@/types";

// New York seed cities. Pest data reflects dense Northeast urban housing
// patterns (NYC Health, Cornell extension).

export const newYorkCities: CityLocation[] = [
  {
    slug: "new-york-city",
    name: "New York City",
    state: "New York",
    stateSlug: "new-york",
    stateAbbr: "NY",
    tier: "T1",
    population: "~8.3 million",
    county: "New York City",
    climate: "temperate",
    climateDriver:
      "New York's dense, older, multi-family housing matters more than the weather. Shared walls, steam heat, and stacked apartments let pests move between units and stay warm right through winter.",
    topPests: ["Bed Bugs", "Rats", "Cockroaches", "Mice", "Ants"],
    pestProfile: [
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "New York ranks among the worst US cities for bed bug complaints. Dense apartment living lets them spread between units along shared walls, outlets, and furniture.",
      },
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "The brown Norway rat is the city's signature rodent, burrowing in parks, alleys, basements, and the subway-adjacent ground, then moving into buildings for food.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German roaches breed in warm kitchens and bathrooms and travel between apartments through plumbing chases and shared walls.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, more visible in cold months",
        note: "Mice need only a gap the width of a pencil and thrive in old building voids, moving along pipe runs between floors and units.",
      },
      {
        name: "Pavement and pharaoh ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through summer",
        note: "Pavement ants nest under sidewalks and foundations and forage indoors, while pharaoh ants are a stubborn indoor problem in heated buildings.",
      },
    ],
    localHook:
      "In New York the building matters more than the borough. Bed bugs, roaches, and mice all travel between apartments through shared walls and pipe runs, so one unit's problem quickly becomes the whole floor's.",
    intro:
      "Pest control in New York City is really about shared buildings. The old, dense, stacked housing stock is what lets bed bugs, German roaches, and mice move from unit to unit and stay active all winter on building heat. Outside, the Norway rat is the city icon, working the alleys, parks, and basements. None of this is about a bad summer. It is constant, low-level pressure that a single apartment can rarely solve alone, which is why building-wide treatment so often matters here.",
    sections: [
      {
        heading: "Why one apartment cannot solve a building problem",
        body: "Bed bugs, roaches, and mice do not respect apartment lines. They travel through wall voids, outlet boxes, and the plumbing and pipe chases that link units. Treating a single apartment while the neighbors go untreated usually means reinfestation within weeks. The work that holds is coordinated across adjoining units, with sealing of the shared pathways between them.",
      },
      {
        heading: "Bed bugs: the inspection comes first",
        body: "Bed bugs hide in seams, headboards, baseboards, and outlet boxes, and they are easy to miss early. A proper inspection, sometimes with a canine check, confirms the extent before treatment, because a partial treatment scatters them rather than clearing them. Heat treatment and targeted applications work, but only when the whole harborage is mapped first.",
      },
    ],
    prevention: [
      "Inspect secondhand furniture and luggage carefully before bringing it inside.",
      "Seal gaps around pipes and outlets to slow movement of roaches and mice between units.",
      "Report building-wide signs to management early so treatment can be coordinated.",
      "Keep food sealed and bins tight to reduce rodent and roach attraction.",
    ],
    costNote:
      "In multi-unit buildings, treating adjoining apartments together is more effective and often more economical than repeated single-unit visits. Bed bug work is quoted after an inspection. Start with a free assessment of the unit and building.",
    faqs: [
      {
        question: "Why does New York have such a bed bug problem?",
        answer:
          "Dense, multi-family housing is the main reason. Bed bugs spread easily between apartments through shared walls, outlets, and furniture, and the city's volume of travel and secondhand goods keeps reintroducing them. New York consistently ranks among the worst US cities for bed bug complaints, so early inspection matters.",
      },
      {
        question: "Can I treat roaches in my apartment if my neighbors do not?",
        answer:
          "You can reduce them, but German roaches travel between units through plumbing and shared walls, so a single-apartment treatment often sees them return. Coordinated treatment of adjoining units, plus sealing the shared pathways, gives a far more lasting result.",
      },
      {
        question: "Are the rats in New York dangerous?",
        answer:
          "Norway rats can carry disease and contaminate food, and they cause damage by gnawing. They are a public-health concern the city actively manages. Sealing entry points, tightening trash storage, and removing food sources are the core of control in buildings.",
      },
      {
        question: "How do mice get into a high-rise apartment?",
        answer:
          "Mice move vertically through old buildings along pipe runs and wall voids, so even upper-floor apartments are not immune. They need only a gap the width of a pencil. Sealing those internal gaps is as important as setting traps.",
      },
      {
        question: "Is one bed bug treatment enough?",
        answer:
          "Rarely on its own. Bed bugs hide in many spots and a single partial treatment can scatter them. Effective control starts with a thorough inspection to map the harborage, then treatment, and usually a follow-up to confirm they are gone.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Yonkers", slug: "yonkers" },
      { name: "Newark", slug: "newark" },
      { name: "Jersey City", slug: "jersey-city" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in New York City, NY | Bed Bugs, Rats & Roaches",
    metaDescription:
      "NYC pest control for bed bugs, Norway rats, German roaches, mice and ants in apartments and buildings. Coordinated treatment, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "buffalo",
    name: "Buffalo",
    state: "New York",
    stateSlug: "new-york",
    stateAbbr: "NY",
    tier: "T1",
    population: "~275,000",
    county: "Erie County",
    climate: "cold-humid",
    climateDriver:
      "Buffalo sits at the eastern end of Lake Erie, known for heavy lake-effect snow and long, cold winters. The harsh winters suppress outdoor pests for months, but they drive mice and other pests firmly indoors each fall, and the city's older housing stock and the warm humid summers shape the rest of the pest year.",
    topPests: ["Mice", "Cockroaches", "Carpenter Ants", "Wasps", "Boxelder Bugs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, major surge in October and November",
        note: "Buffalo's cold, snowy winters drive mice firmly indoors each fall. The city's older housing stock, much of it early 20th-century wood-frame and brick, has abundant entry points around foundations and utilities.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Buffalo's apartment buildings and the older multi-family housing. They are unaffected by the cold and spread through shared plumbing and wall voids.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through September",
        note: "Carpenter ants are common in Buffalo's older wood-frame homes and the mature tree canopy of neighborhoods like Elmwood Village and North Buffalo. They nest in moisture-damaged wood and can cause structural damage over time.",
      },
      {
        name: "Yellow jacket and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets nest in the ground and wall voids and become aggressive in late summer as colonies peak. The warm humid summers along Lake Erie support strong colonies.",
      },
      {
        name: "Boxelder bugs and cluster flies",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation, overwintering on and in homes",
        note: "Boxelder bugs and cluster flies gather on warm, sun-facing walls in fall and work their way indoors to overwinter. They are harmless nuisances, common across Buffalo's older neighborhoods with mature trees.",
      },
    ],
    localHook:
      "Buffalo's lake-effect winters are legendary, and they keep the outdoor pest season short. The trade-off is a reliable fall rush of mice indoors when the cold and snow arrive, plus the overwintering insects that pile onto sun-facing walls looking for a way inside before the freeze.",
    intro:
      "Pest control in Buffalo follows the lake-effect seasons. The long, cold, snowy winters off Lake Erie suppress outdoor pests for months, but they drive mice firmly into heated buildings each fall, and they push overwintering insects like boxelder bugs and cluster flies onto sun-facing walls looking for a way in. German cockroaches run year-round indoors regardless of the cold, carpenter ants work the older wood-frame homes, and wasps peak in the warm humid late summer. The pest calendar here is clearly seasonal.",
    sections: [
      {
        heading: "TL;DR for Buffalo homeowners",
        body: "Seal the house against mice before fall, because Buffalo winters push them indoors fast and in numbers. Expect boxelder bugs and cluster flies on sun-facing walls in fall, looking for a way inside to overwinter. German cockroaches run year-round indoors and are not affected by the cold. Watch for carpenter ants in older wood-frame homes with moisture issues. Treat wasps early in summer before the late-season peak. The harsh winters keep the outdoor season short, so timing the work matters more than constant treatment.",
      },
      {
        heading: "The fall rush: mice and overwintering insects",
        body: "Buffalo's defining pest event is the fall rush indoors. As the lake-effect cold and snow arrive, house mice move into heated buildings fast through gaps around foundations, pipes, and utilities, and the city's older housing offers plenty of entry points. At the same time, overwintering insects, boxelder bugs and cluster flies in particular, aggregate on warm, sun-facing exterior walls and search for cracks that lead inside. The single most effective response to both is the same: seal the building envelope before fall. Exclusion work in September addresses the mice and the overwintering insects together.",
      },
    ],
    prevention: [
      "Seal foundation cracks, pipe gaps, and utility penetrations in September before the fall mouse surge.",
      "Seal gaps around windows, eaves, and siding before fall to reduce boxelder bug and cluster fly entry.",
      "Inspect wood around windows and roof lines for moisture damage that attracts carpenter ants.",
      "Treat yellow jacket ground nests in spring when colonies are small and easier to manage.",
    ],
    costNote:
      "Buffalo pest control commonly uses a seasonal approach: fall rodent and overwintering-insect exclusion, summer wasp service, and carpenter ant treatment as needed. A free inspection sets the schedule to your home.",
    faqs: [
      {
        question: "When do mice get into Buffalo homes?",
        answer:
          "The surge arrives in October and November as the lake-effect cold and snow set in, driving mice into heated buildings fast through gaps around foundations, pipes, and utilities. Buffalo's older housing has abundant entry points. Sealing them in September, before the cold, is far more effective than trapping after mice are established.",
      },
      {
        question: "Do cockroaches survive Buffalo winters?",
        answer:
          "Yes. German cockroaches live entirely indoors in heated spaces and are not affected by the cold. They maintain populations year-round in kitchens, bathrooms, and wall voids, spreading through shared plumbing in multi-family buildings. The harsh winter has no impact on indoor cockroach colonies.",
      },
      {
        question: "What are the bugs piling up on my Buffalo house in fall?",
        answer:
          "Most likely boxelder bugs and cluster flies. They aggregate on warm, sun-facing walls in fall and search for cracks that lead inside to overwinter. They are harmless and do not damage the home, but they can enter in large numbers. Sealing gaps around windows, eaves, and siding before fall reduces how many get in.",
      },
      {
        question: "Are carpenter ants a problem in Buffalo?",
        answer:
          "Yes. Carpenter ants are common in Buffalo's older wood-frame homes and mature tree-canopy neighborhoods. They nest in moisture-damaged wood around leaky windows, door frames, and roof lines. They excavate galleries rather than eating wood, but an established colony can cause structural damage over several years. Seeing large black ants indoors in spring suggests a nearby colony.",
      },
      {
        question: "Is year-round pest control necessary in Buffalo?",
        answer:
          "Many Buffalo homes do well with a seasonal plan given the harsh winters: fall rodent and overwintering-insect exclusion, summer wasp service, and carpenter ant treatment as needed. Homes with cockroach pressure or recurring rodent activity may benefit from a continuous plan. A free inspection sets the right schedule.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Niagara Falls", slug: "niagara-falls" },
      { name: "Cheektowaga", slug: "cheektowaga" },
      { name: "Amherst", slug: "amherst" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Buffalo, NY | Mice, Cockroaches & Carpenter Ants",
    metaDescription:
      "Buffalo pest control for fall mice, German cockroaches, carpenter ants, wasps, boxelder bugs and cluster flies. Lake-effect seasonal specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
