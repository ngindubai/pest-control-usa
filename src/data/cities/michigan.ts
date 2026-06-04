import type { CityLocation } from "@/types";

// Michigan. Pest data reflects humid continental Great Lakes conditions.
// Rodent and carpenter ant data informed by Michigan State University Extension.

export const michiganCities: CityLocation[] = [
  {
    slug: "detroit",
    name: "Detroit",
    state: "Michigan",
    stateSlug: "michigan",
    stateAbbr: "MI",
    tier: "T1",
    population: "~630,000",
    county: "Wayne County",
    climate: "cold-humid",
    climateDriver:
      "Detroit sits in the Great Lakes region with cold, snowy winters and warm, humid summers. The cold season suppresses outdoor pests for months, but it drives rats, mice, and cockroaches firmly into heated buildings, and the city's large stock of older and vacant housing sustains year-round rodent pressure.",
    topPests: ["Rats", "Mice", "Cockroaches", "Bed Bugs", "Carpenter Ants"],
    pestProfile: [
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Detroit has significant Norway rat pressure, driven by the combination of older housing stock, vacant and blighted properties that provide undisturbed harborage, and the aging sewer infrastructure. Rats move between occupied and vacant buildings through alleys and below ground.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge in October and November",
        note: "Michigan's cold winters push mice firmly indoors each fall. Detroit's older brick homes and multi-family buildings have abundant entry points around foundations, pipes, and utility lines.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Detroit apartment buildings and commercial settings. They are unaffected by the cold winters and spread through shared plumbing and wall voids in multi-family housing.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Detroit has repeatedly appeared on national lists of cities with high bed bug activity. The dense rental housing stock and frequent tenant turnover sustain consistent bed bug introductions across many neighborhoods.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through September",
        note: "Carpenter ants are common in Detroit's older wood-frame homes and the mature tree canopy of neighborhoods like Indian Village and Palmer Woods. They nest in moisture-damaged wood and can cause structural damage over time.",
      },
    ],
    localHook:
      "Detroit's housing stock tells the pest story. The older homes, the multi-family buildings, and the vacant properties scattered across many neighborhoods give rats and mice abundant harborage and easy movement between buildings. Rodent control here works best as a block-level effort, not a single-property fix.",
    intro:
      "Pest control in Detroit is shaped by the city's housing. The older brick homes, the dense rental stock, and the vacant properties found across many neighborhoods give rats and mice exceptional harborage and easy passage between buildings. The cold Great Lakes winters genuinely suppress outdoor pests for months, but they also drive rodents and cockroaches firmly into heated interiors. Detroit has appeared repeatedly on national high bed bug lists, and carpenter ants work the older wood-frame homes through the warm season.",
    sections: [
      {
        heading: "Step one: understand the rodent harborage",
        body: "Detroit's Norway rats thrive because the environment provides what they need: undisturbed shelter in vacant and blighted properties, food from the occupied homes and commercial corridors, and protected travel routes through alleys and the aging sewer system. Effective control starts with identifying and eliminating harborage, then sealing entry points on the building, then baiting. Skipping straight to bait without addressing harborage produces only temporary relief, because the surrounding environment keeps resupplying rats.",
      },
      {
        heading: "Step two: prepare for the fall rodent surge",
        body: "Michigan's cold winters mean house mice move indoors fast when temperatures drop in October. Detroit's older homes, with their settled foundations and aging utility penetrations, offer many entry points. The practical sequence is an inspection in September, exclusion work to seal the gaps mice use, then monitoring through the cold months. A home that was mouse-free all summer can have active mice within weeks of the first hard cold, so the timing of the prevention work matters.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and utility openings in September before the fall rodent surge.",
      "Keep garbage in sealed containers and clear harborage near the building to reduce Norway rat pressure.",
      "Inspect second-hand furniture for bed bug signs before bringing it indoors.",
      "Check wood around leaky windows and roof lines for moisture damage that attracts carpenter ants.",
    ],
    costNote:
      "Detroit pest control typically separates rodent exclusion work (inspection plus structural sealing) from recurring general pest service. Bed bug remediation and carpenter ant treatment are quoted separately. A free inspection identifies which services are needed.",
    faqs: [
      {
        question: "Why does Detroit have such a persistent rat problem?",
        answer:
          "Detroit's rat population is sustained by older housing stock, vacant and blighted properties that provide undisturbed harborage, aging sewer infrastructure, and alleys that allow rats to move between buildings. Effective control combines harborage removal, building exclusion, and baiting. Baiting alone, without addressing the surrounding environment, gives only temporary results.",
      },
      {
        question: "When do mice come into Detroit homes?",
        answer:
          "The surge arrives in October and November as Michigan temperatures drop. Mice move into heated buildings through gaps around foundations, pipes, and utility lines. Detroit's older homes have more of these entry points than newer construction. Sealing them in September, before the cold arrives, is the most effective preventive step.",
      },
      {
        question: "Is Detroit really a high bed bug city?",
        answer:
          "Detroit has repeatedly appeared on national lists of cities with high bed bug activity. The dense rental housing and frequent tenant turnover sustain consistent introductions. Inspecting second-hand furniture before bringing it home, and knowing the signs (dark spots on mattress seams, a sweet musty odor), are the best defenses.",
      },
      {
        question: "Do cockroaches survive Detroit winters?",
        answer:
          "Yes. German cockroaches live entirely indoors in heated spaces and are not affected by the cold. They maintain populations year-round in kitchens, bathrooms, and wall voids, spreading through shared plumbing in multi-family buildings. The winter has no impact on indoor cockroach colonies.",
      },
      {
        question: "Are carpenter ants a concern in Detroit?",
        answer:
          "Yes, particularly in older wood-frame homes and the mature tree-canopy neighborhoods. Carpenter ants nest in moisture-damaged wood around leaky windows, door frames, and roof lines. They excavate galleries rather than eating wood, but an established colony can cause structural damage over several years. Seeing large black ants indoors in spring suggests a nearby colony.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Dearborn", slug: "dearborn" },
      { name: "Warren", slug: "warren" },
      { name: "Ann Arbor", slug: "ann-arbor" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Detroit, MI | Rats, Mice, Cockroaches & Bed Bugs",
    metaDescription:
      "Detroit pest control for Norway rats, house mice, German cockroaches, bed bugs and carpenter ants. Older-housing rodent specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
