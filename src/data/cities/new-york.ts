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
];
