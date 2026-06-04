import type { CityLocation } from "@/types";

// Massachusetts. Pest data reflects humid continental New England conditions.
// Rodent and cockroach data informed by Boston's historical housing stock.

export const massachusettsCities: CityLocation[] = [
  {
    slug: "boston",
    name: "Boston",
    state: "Massachusetts",
    stateSlug: "massachusetts",
    stateAbbr: "MA",
    tier: "T1",
    population: "~680,000",
    county: "Suffolk County",
    climate: "cold-humid",
    climateDriver:
      "Boston has a genuine New England winter that suppresses outdoor pest activity significantly from December through March. The spring and summer rebound is strong, and the city's age and density sustain year-round rodent and cockroach pressure regardless of temperature.",
    topPests: ["Rats", "Mice", "Cockroaches", "Termites", "Bed Bugs"],
    pestProfile: [
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round, peak pressure in fall and winter",
        note: "Boston has a well-documented rat problem, particularly in the older, denser neighborhoods of the South End, Back Bay, Fenway, and Roxbury. The Victorian-era sewer infrastructure and the brick row house construction provide abundant harborage and access points.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall as temperatures drop",
        note: "Mice are pervasive across the Boston metro, driven hard into heated buildings by the cold winters. Triple-deckers and older multi-family buildings with shared walls give mice easy access between units once they find entry.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor roach species in Boston, concentrated in apartment buildings, restaurants, and food service. They do not need outdoor access to thrive and spread easily through shared plumbing and wall voids.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms April through June, active spring through fall",
        note: "New England subterranean termites are active and capable of significant structural damage, particularly in older wood-frame construction. Boston's many older homes with crawl spaces or wood in contact with soil are at real risk.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Boston's density, high student population, and turnover in apartment housing create steady bed bug pressure. University areas and densely rented neighborhoods see consistent complaints.",
      },
    ],
    localHook:
      "Boston has some of the oldest housing stock in America. The brick Victorian triple-deckers and row houses that define neighborhoods like the South End and Jamaica Plain are beautiful, but their age means gaps, shared walls, and access points that sustain rat and cockroach populations year-round. This city rewards prevention far more than waiting for a problem to appear.",
    intro:
      "Pest control in Boston is inseparable from the city's age. The triple-deckers, row houses, and pre-war apartment blocks that define neighborhood after neighborhood were built before the gaps and voids that now give rats, mice, and cockroaches their comfortable passage through shared walls and old sewer connections. The cold winters do reduce outdoor pest pressure significantly, which is a genuine advantage. But indoors, rodents and German cockroaches run year-round regardless of what the thermometer says. Termites are active spring through fall, and bed bugs are a consistent concern in the dense apartment stock.",
    sections: [
      {
        heading: "Rats, triple-deckers, and Victorian infrastructure",
        body: "Boston's rat problem is structural. The combination of Victorian-era sewers, alley access behind dense row houses, and a food service industry concentrated in walkable neighborhoods gives Norway rats exceptional harborage and food supply. The most effective control work addresses both the bait and the access: sealing foundation cracks, replacing damaged vent screens, and eliminating the harborage sites under stairs and around HVAC equipment. Baiting alone without exclusion is a temporary fix.",
      },
      {
        heading: "Cold winters: what they do and don't solve",
        body: "Boston winters genuinely suppress mosquitoes, outdoor ants, and many other seasonal pests. That is a real benefit. What the cold does not do is reduce rats, mice, or cockroaches, which simply move deeper into heated buildings when the temperature drops. A hard freeze can push mice into a home that was fine all summer. The seasonal pattern here means spring and summer inspections for termites and exterior pests, and year-round vigilance for the rodent and cockroach pressure that never fully pauses.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and gaps around utilities before fall when mice pressure surges.",
      "Keep garbage in sealed containers and bring bins in promptly to reduce rat harborage near the building.",
      "Schedule a termite inspection in May after the swarm season, particularly for older wood-frame homes.",
      "Inspect second-hand furniture carefully before bringing it into the home to reduce bed bug risk.",
    ],
    costNote:
      "Boston pest pricing typically separates rodent exclusion (inspection plus structural work) from recurring general pest plans. Termite treatment and bed bug remediation are quoted separately. A free inspection identifies which services are actually needed.",
    faqs: [
      {
        question: "Why does Boston have such a persistent rat problem?",
        answer:
          "Boston's rat population is sustained by Victorian-era sewer infrastructure, dense neighborhoods with alleys behind rowhouses, and a large restaurant and food service industry. The older housing stock provides abundant harborage and access into buildings. Neighborhoods like the South End, Back Bay, and Fenway have some of the highest complaint rates. Effective control combines bait with structural exclusion work.",
      },
      {
        question: "Do mice go away in winter in Boston?",
        answer:
          "No. The cold actually makes the situation worse indoors. Mice that were living partly outdoors through summer are driven fully inside when temperatures drop. A building that seemed mouse-free in July can have active mice by November. Fall is the right time to seal entry points before the seasonal surge.",
      },
      {
        question: "Are termites a real concern in Boston?",
        answer:
          "Yes. New England subterranean termites are active and can cause significant structural damage, particularly in the region's many older wood-frame homes. They swarm in April through June, which is often the first visible sign of an established colony. Annual inspections are recommended for any home with a crawl space or wood near the foundation.",
      },
      {
        question: "How common are bed bugs in Boston?",
        answer:
          "Fairly common. Boston's high density, university population, and significant apartment turnover create sustained bed bug pressure, particularly in densely rented neighborhoods and areas near campuses. The best defense is inspecting second-hand furniture before it enters the home and knowing the signs: small dark spots on mattress seams and a sweet, musty odor.",
      },
      {
        question: "Is year-round pest control worth it in Boston?",
        answer:
          "For urban apartments and older multi-family buildings, yes. Rodents and cockroaches are year-round concerns that do not pause for winter. Exterior pests like mosquitoes are seasonal, but the indoor pest pressure that defines Boston's pest environment needs continuous management.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Cambridge", slug: "cambridge" },
      { name: "Somerville", slug: "somerville" },
      { name: "Worcester", slug: "worcester" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Boston, MA | Rats, Mice, Cockroaches & Termites",
    metaDescription:
      "Boston pest control for Norway rats, house mice, German cockroaches, termites and bed bugs. Older housing specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "worcester",
    name: "Worcester",
    state: "Massachusetts",
    stateSlug: "massachusetts",
    stateAbbr: "MA",
    tier: "T2",
    population: "~185,000",
    county: "Worcester County",
    climate: "cold-humid",
    climateDriver:
      "Worcester sits inland at 500 feet elevation in central Massachusetts with a cold-humid continental climate. Colder and snowier than Boston, Worcester's winters drive mice into buildings reliably each fall. The city's dense urban center and surrounding industrial history have left a substantial stock of older triple-decker and multi-family housing with the shared walls and aging gaps that cockroaches and mice exploit.",
    topPests: ["House Mice", "Carpenter Ants", "Bed Bugs", "German Cockroaches", "Stink Bugs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active year-round once inside",
        note: "Worcester's cold inland winters drive mice firmly into heated buildings by October. UMass Extension identifies mice as the most common rodent pest in Massachusetts homes. The city's abundant older triple-decker and industrial-district housing stock has more potential entry points than modern construction.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active April through September",
        note: "Carpenter ants are the dominant structural ant pest in Worcester County. They nest in moist or decayed wood and are common in Worcester's older housing, particularly around window frames, rooflines, and any wood in contact with the ground. UMass Extension confirms they are the most common structural ant pest in Massachusetts.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Bed bugs are a growing concern in Worcester's dense multi-family housing and the student population associated with Clark University, WPI, and other area schools. The city's triple-decker housing stock, with shared walls between units, facilitates spread between apartments.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the primary indoor pest in Worcester's older apartment buildings, restaurants, and commercial food businesses. They breed entirely indoors in kitchens and bathrooms and spread through the shared infrastructure of multi-family housing.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion (September to November), overwinter in walls",
        note: "Stink bugs are an established fall pest in Worcester County. They aggregate on building exteriors in September and October before pushing into wall voids to overwinter. UMass Extension confirms the invasive species is established across Massachusetts.",
      },
    ],
    localHook:
      "Worcester's older triple-decker housing is an iconic part of the city's character and a genuine amplifier of urban pest problems. Shared walls between three stacked units, aging plumbing infrastructure, and construction from the early 1900s means cockroaches, mice, and bed bugs move between apartments far more easily than they do in modern buildings.",
    intro:
      "Pest control in Worcester is shaped by the city's older housing stock and its cold inland winters. The triple-decker buildings that define Worcester's residential landscape share walls, plumbing, and aging infrastructure across three units, which gives cockroaches, mice, and bed bugs easy paths between apartments. Cold winters drive a reliable fall mouse surge, and UMass Extension confirms mice are the most common rodent pest in Massachusetts homes. Carpenter ants are the structural concern in moisture-affected older wood, and stink bugs arrive each fall on building exteriors before overwintering in wall voids.",
    sections: [
      {
        heading: "Triple-deckers and the shared-wall pest problem",
        body: "Worcester's triple-decker buildings are three-unit homes stacked vertically, and each shares walls, flooring, and plumbing with the units above and below. This means a cockroach or mouse problem in one unit is almost always a whole-building problem. German cockroaches travel through shared walls and plumbing chases freely, and mice that enter through the basement foundation reach all three floors. Effective treatment in triple-deckers coordinates across all units and addresses the shared entry points and shared walls, not just one apartment at a time.",
      },
      {
        heading: "Carpenter ants in Worcester's older wood",
        body: "Worcester's older housing stock, much of it from the early to mid-twentieth century, has accumulated moisture damage around windows, rooflines, and anywhere wood has been in contact with the ground. Carpenter ants exploit this softened wood to excavate their colonies. UMass Extension confirms they are the most common structural ant pest in Massachusetts. Finding large black ants indoors in late winter or spring is usually a sign of an established colony in the wall structure rather than just outdoor foragers. Treatment targets both the indoor satellite colonies and the outdoor parent colony.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and the base of exterior doors in September before the fall mouse surge.",
      "In triple-deckers and multi-unit buildings, coordinate pest control across all units to prevent cockroach and mouse reinfestation.",
      "Check window frames, roof lines, and deck framing for moisture-softened wood that attracts carpenter ants.",
      "Inspect used furniture and luggage carefully given Worcester's bed bug risk in the university rental market.",
    ],
    costNote:
      "Worcester pest control is typically quoted as a general plan covering mice, ants, cockroaches, and spiders. Bed bug treatment and stink bug seasonal service are separate. In triple-deckers, coordinating across all units gives significantly better results. Start with a free assessment.",
    faqs: [
      {
        question: "Why is pest control in a Worcester triple-decker so difficult?",
        answer:
          "Triple-deckers share walls, plumbing, and aging infrastructure across three stacked units. Cockroaches, mice, and bed bugs all move freely through the shared construction. Treating one unit in isolation gives temporary results because reinfestation from the other units continues. Effective management coordinates treatment across all units and addresses shared entry points and shared spaces.",
      },
      {
        question: "When do mice surge into Worcester homes?",
        answer:
          "The main push indoors starts in October when Worcester's cold inland temperatures drop below the comfort threshold for mice. The city is colder than Boston and the surrounding coastal areas, which makes the fall mouse surge earlier and more pronounced. Sealing foundation gaps, pipe penetrations, and exterior door gaps in September is the most effective prevention.",
      },
      {
        question: "Are carpenter ants a structural risk in Worcester?",
        answer:
          "Yes. UMass Extension confirms carpenter ants are the most common structural ant pest in Massachusetts. Worcester's older housing stock, with accumulated moisture damage around windows and rooflines, provides the softened wood they need to establish colonies. Finding them indoors in winter or early spring usually indicates an established colony in the walls rather than just outdoor foragers.",
      },
      {
        question: "Is the bed bug risk higher in Worcester near the colleges?",
        answer:
          "The student populations associated with Clark University, WPI, and other area schools create more frequent furniture turnover and travel, which increases bed bug transmission risk. The triple-decker housing common in college-adjacent neighborhoods also means bed bugs can spread between units through shared walls. Early inspection at any sign of biting or visible evidence keeps a small infestation manageable.",
      },
      {
        question: "Do stink bugs overwinter in Worcester homes?",
        answer:
          "Yes. The invasive brown marmorated stink bug is established across Massachusetts, and Worcester County sees fall aggregations on south-facing building walls before insects push into wall voids to overwinter. Sealing gaps around windows, siding, and utility lines before September and treating the exterior when they first appear reduces how many get inside for winter.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Boston", slug: "boston" },
      { name: "Springfield", slug: "springfield" },
      { name: "Providence", slug: "providence" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Worcester, MA | Mice, Carpenter Ants & Cockroaches",
    metaDescription:
      "Worcester pest control for house mice, carpenter ants, bed bugs, German cockroaches and stink bugs. Triple-decker and older housing specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
