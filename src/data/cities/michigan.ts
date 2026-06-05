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
  {
    slug: "grand-rapids",
    name: "Grand Rapids",
    state: "Michigan",
    stateSlug: "michigan",
    stateAbbr: "MI",
    tier: "T2",
    population: "~190,000",
    county: "Kent County",
    climate: "cold-humid",
    climateDriver:
      "Grand Rapids sits in West Michigan, about 25 miles from Lake Michigan. The lake effect moderates winter temperatures slightly compared to inland Michigan cities but delivers heavy snowfall and extends the autumn damp period. Winters are cold enough to drive mice and cockroaches firmly indoors for five to six months. The Grand River runs through the city, contributing to spring flooding conditions that push rodents upward. Stink bugs and boxelder bugs arrive in fall in large numbers from the surrounding agricultural and fruit-belt landscape.",
    topPests: ["House Mice", "Stink Bugs", "German Cockroaches", "Odorous House Ants", "Boxelder Bugs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in October, active year-round once inside",
        note: "House mice are the most common pest complaint in Grand Rapids from October through April. West Michigan's cold winters make heated buildings an essential resource for mice, and the older housing stock in Grand Rapids' established neighborhoods has ample entry points. They get through gaps as small as a dime and nest in wall voids, behind appliances, and in attic insulation.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "September through November entry, overwinter indoors",
        note: "Stink bugs invade Grand Rapids homes in large numbers each fall. West Michigan's fruit belt, including the orchards and agricultural land east and south of the city, produces enormous stink bug populations that move into structures as temperatures drop. The Grand Rapids area has seen stink bug populations grow significantly since the pest established in Michigan.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are a persistent problem in Grand Rapids' older apartment buildings, restaurants, and multi-family housing. They do not go outdoors in Michigan winters and spread between units through shared walls and plumbing. Kent County's dense urban core in downtown Grand Rapids has the highest concentration.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, push indoors in cold or rain",
        note: "Odorous house ants are the most common ant problem in Grand Rapids homes. They nest in wall voids and under slabs and forage for sweets. They are small, persistent, and move readily indoors during cold snaps and after heavy rain events. The smell of coconut or rotten coconut when they are crushed is the identification cue.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "September through November entry, overwinter in wall voids",
        note: "Boxelder bugs are a nuisance fall pest in Grand Rapids wherever boxelder trees are present. They aggregate on the south- and west-facing walls of homes in September and October seeking warm overwintering sites, and significant numbers can work their way into wall voids through gaps around windows and siding.",
      },
    ],
    localHook:
      "West Michigan's fruit belt is one of the largest fruit-growing regions in the eastern United States, and the brown marmorated stink bug discovered it years ago. The orchards and berry farms east and south of Grand Rapids produce stink bug populations that are orders of magnitude larger than in cities without that agricultural context. Fall stink bug invasions in Grand Rapids are noticeably heavier than in comparable Midwest cities without the fruit belt backdrop.",
    intro:
      "Pest control in Grand Rapids follows the cold-humid West Michigan rhythm. October brings the mouse push: as temperatures drop, house mice move into heated structures through tiny gaps and establish themselves in wall voids and behind appliances for the winter. Stink bugs and boxelder bugs arrive at the same time, aggregating on south-facing walls and working their way inside by the thousands. German cockroaches are a year-round urban problem in the older multi-family stock. Odorous house ants surface in spring and work through kitchens all season. The Grand River's spring flooding adds a rodent displacement factor that makes early spring another high-risk period.",
    sections: [
      {
        heading: "Mouse exclusion: the October priority",
        body: "House mice move into Grand Rapids homes when outdoor temperatures drop below about 50 degrees, which in West Michigan typically begins in October. A mouse needs a gap of only a quarter inch (the diameter of a dime) to squeeze through, and older homes in Grand Rapids have those gaps in abundance around foundation utility penetrations, under door sills, and at the juncture of different exterior materials. Exclusion work in September, before the push begins, is far more effective than trying to trap your way out of an established infestation. Steel wool and foam in the gaps, door sweeps on exterior doors, and caulk at foundation penetrations are the basics.",
      },
      {
        heading: "Stink bugs and the fruit belt connection",
        body: "Grand Rapids is surrounded by West Michigan's fruit belt: apples, cherries, blueberries, and grapes are grown in significant volume within 30 miles of the city. Brown marmorated stink bugs feed on those crops and build up large populations by late summer. In September and October, those populations move en masse into structures to overwinter. Grand Rapids experiences one of the heavier stink bug invasions of any Midwest metro because of this agricultural context. Sealing gaps around windows and at utility penetrations before September is the primary prevention step, because once stink bugs are inside wall voids, removing them is difficult and crushing them releases the odor that gives them their name.",
      },
    ],
    prevention: [
      "Complete mouse exclusion work in September, sealing gaps around utility penetrations, door sills, and foundation cracks before October.",
      "Seal gaps around windows and utility lines before September to limit stink bug and boxelder bug entry.",
      "Keep indoor food in sealed containers and address dripping fixtures to reduce German cockroach incentive.",
      "Clear leaf litter and woodpiles from the foundation perimeter to reduce odorous house ant and earwig harborage.",
    ],
    costNote:
      "Grand Rapids pest control typically starts with a free inspection. Mouse programs include both exclusion and trapping. Stink bug and boxelder bug treatment is usually a late-summer perimeter application plus sealing work. Cockroach programs in multi-family units are monthly. Ant programs are quarterly.",
    faqs: [
      {
        question: "When do mice become a problem in Grand Rapids?",
        answer:
          "October is the main entry month. West Michigan temperatures drop enough in early October to make heated buildings attractive to house mice, and they begin actively seeking entry points. The push continues through November. Exclusion work done in September before the push is the most cost-effective approach. If you wait until you see signs of mice inside, you are dealing with an established population rather than preventing entry.",
      },
      {
        question: "Why are stink bugs so bad in Grand Rapids?",
        answer:
          "Grand Rapids is surrounded by West Michigan's fruit belt, which produces apple, cherry, blueberry, and grape crops within 30 miles of the city. Brown marmorated stink bugs feed on those crops and build large populations by late summer. When fall arrives, those agricultural populations move into structures. This agricultural backdrop makes Grand Rapids' stink bug season heavier than in comparable cities without that farming context. Sealing gaps before September is the primary prevention.",
      },
      {
        question: "Are German cockroaches a problem in Grand Rapids homes?",
        answer:
          "German cockroaches are primarily a problem in multi-family housing, older apartments, and commercial food establishments in Grand Rapids. Single-family homes occasionally encounter them when cockroaches are introduced in boxes, bags, or appliances from an infested source. Once inside, they breed rapidly in warm, moist areas under sinks and near appliances. Gel bait treatment in harborage areas is more effective than spray for German cockroaches.",
      },
      {
        question: "What causes odorous house ant infestations in Grand Rapids?",
        answer:
          "Odorous house ants nest in wall voids and under slabs and forage widely for sweet and protein foods. They move indoors during cold snaps and after heavy rain, both of which are frequent in Grand Rapids. The colony can have multiple queens and multiple satellite nests, so simply killing visible ants does not address the population. A perimeter barrier treatment that workers carry back to the nest, combined with eliminating moisture sources that attract them, is the effective approach.",
      },
      {
        question: "How do I stop stink bugs from getting into my Grand Rapids home?",
        answer:
          "The window is August and early September, before they begin aggregating on walls. Seal gaps around window frames, at utility penetrations, where siding meets the foundation, and around any openings at roofline level. A perimeter application of a residual insecticide on the exterior walls before they start aggregating is an effective complement to the exclusion work. Once stink bugs are inside wall voids, removing them without causing the odor problem requires patience and specific approaches.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Wyoming", slug: "wyoming" },
      { name: "Kentwood", slug: "kentwood" },
      { name: "Kalamazoo", slug: "kalamazoo" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Grand Rapids, MI | Mice, Stink Bugs & Cockroaches",
    metaDescription:
      "Grand Rapids pest control for house mice, stink bugs, German cockroaches, odorous house ants and boxelder bugs. West Michigan Kent County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
