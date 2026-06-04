import type { CityLocation } from "@/types";

// Minnesota seed cities. Pest data reflects cold humid-continental patterns
// (University of Minnesota Extension, Hennepin County).

export const minnesotaCities: CityLocation[] = [
  {
    slug: "minneapolis",
    name: "Minneapolis",
    state: "Minnesota",
    stateSlug: "minnesota",
    stateAbbr: "MN",
    tier: "T1",
    population: "~425,000",
    county: "Hennepin County",
    climate: "cold",
    climateDriver:
      "Minneapolis has cold, long winters and warm, humid summers. The hard freeze ends the insect season outdoors, but it also drives pests indoors every fall looking for warmth.",
    topPests: ["Mice", "Boxelder Bugs", "Ants", "Wasps", "Mosquitoes"],
    pestProfile: [
      {
        name: "House mice and deer mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active all winter inside",
        note: "As the first cold snaps arrive, mice push indoors through gaps the width of a pencil and settle in walls, basements, and attics for the winter.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Gather on homes in fall, reappear in spring",
        note: "Boxelder bugs cluster on warm south and west walls in autumn and work into wall voids to overwinter, then turn up indoors on the first warm days of spring.",
      },
      {
        name: "Carpenter and pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through summer",
        note: "Carpenter ants tunnel into damp or damaged wood rather than eating it, often signaling a moisture problem in the structure.",
      },
      {
        name: "Wasps and hornets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "Paper wasp and yellowjacket nests grow through summer and become most aggressive in August and September around eaves and decks.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Late spring through summer",
        note: "With over a thousand lakes in the metro area, mosquito season is short but intense once the warm weather arrives.",
      },
    ],
    localHook:
      "In Minneapolis the pest calendar flips with the seasons. The real surge is not in summer, it is the fall, when the first cold drives mice and boxelder bugs straight into the walls of your home.",
    intro:
      "Pests in Minneapolis follow the cold. Summer brings mosquitoes off the lakes and wasps under the eaves, but the defining moment of the year is autumn. As the temperature drops, mice and overwintering insects like boxelder bugs head indoors in numbers. A home that is sealed and treated before that first cold snap stays quiet through winter. One that is not becomes a refuge.",
    sections: [
      {
        heading: "Why fall is the busy season here",
        body: "Most pests cannot survive a Minnesota winter outdoors, so they do the sensible thing and move inside. Mice slip through gaps as small as a pencil. Boxelder bugs and lady beetles pack into wall voids on the warm side of the house. The work that matters is exclusion in late summer and early fall, sealing entry points before the rush, rather than chasing pests once they are already in the walls.",
      },
      {
        heading: "Carpenter ants and the moisture clue",
        body: "Carpenter ants do not eat wood, they tunnel through it, and they prefer wood that is already damp or damaged. Finding them indoors in spring often points to a moisture problem, a leak, or poor ventilation, as much as an ant problem. A good inspection treats the ants and flags the moisture source behind them.",
      },
    ],
    prevention: [
      "Seal gaps around pipes, vents, and the foundation before fall to keep mice out.",
      "Treat south and west walls in early autumn to reduce boxelder bug clustering.",
      "Fix leaks and damp wood, which is what draws carpenter ants indoors.",
      "Knock down small wasp nests early in summer before they grow aggressive.",
    ],
    costNote:
      "Many Minneapolis homes book a fall exclusion visit plus a spring follow-up rather than year-round service, since the outdoor season is short. A free inspection sets the plan around your home and the time of year.",
    faqs: [
      {
        question: "Why do mice get into Minneapolis homes in the fall?",
        answer:
          "Mice cannot survive the winter outdoors, so as the first cold arrives they move inside through gaps as small as a pencil width. Sealing entry points in late summer and early fall, before the rush, is the most effective defense.",
      },
      {
        question: "What are the bugs covering my house in autumn?",
        answer:
          "Those are most likely boxelder bugs, and sometimes Asian lady beetles. They cluster on warm south and west walls in fall and work into wall voids to overwinter, then reappear indoors on the first warm spring days. Treating sunny walls in early autumn reduces them.",
      },
      {
        question: "Are carpenter ants damaging my home?",
        answer:
          "Carpenter ants tunnel through wood to nest rather than eating it, and they prefer wood that is already damp or damaged. Finding them indoors often points to a moisture issue, so the fix usually addresses both the ants and the source of the damp.",
      },
      {
        question: "When are wasps worst in Minneapolis?",
        answer:
          "Paper wasp and yellowjacket nests grow all summer and are largest and most aggressive in August and September around eaves, decks, and sheds. Removing small nests early in the season is much easier than dealing with a mature one.",
      },
      {
        question: "Do I need pest control in winter here?",
        answer:
          "The outdoor season is short, so many homes focus on fall exclusion and a spring follow-up rather than year-round service. If mice are already inside over winter, though, treatment continues until the home is sealed and clear.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Saint Paul", slug: "saint-paul" },
      { name: "Bloomington", slug: "bloomington" },
      { name: "Edina", slug: "edina" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Minneapolis, MN | Mice, Boxelder Bugs & Ants",
    metaDescription:
      "Minneapolis pest control for fall mice, boxelder bugs, carpenter ants, wasps and summer mosquitoes. Seasonal plans, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "saint-paul",
    name: "Saint Paul",
    state: "Minnesota",
    stateSlug: "minnesota",
    stateAbbr: "MN",
    tier: "T1",
    population: "~310,000",
    county: "Ramsey County",
    climate: "cold-humid",
    climateDriver:
      "Saint Paul sits on the Mississippi River as the eastern half of the Twin Cities. The cold continental winters are among the harshest of any major US city, suppressing outdoor pests for months, but the warm humid summers and the river and lake system drive a strong mosquito season and a fast fall rodent surge.",
    topPests: ["Mice", "Mosquitoes", "Boxelder Bugs", "Carpenter Ants", "Wasps"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, major surge in October and November",
        note: "Saint Paul's harsh winters drive mice firmly and quickly into heated buildings each fall. The older housing stock in neighborhoods like the East Side and West Seventh has abundant entry points around foundations and utilities.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "May through September",
        note: "The Mississippi River, the area's many lakes, and the surrounding wetlands give the Twin Cities a strong summer mosquito season. The Metropolitan Mosquito Control District actively manages the region. Minnesota's mosquitoes are a defining summer nuisance.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation, overwintering on and in homes",
        note: "Boxelder bugs gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are a harmless nuisance, very common across the Twin Cities where box elder and maple trees are abundant.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through September",
        note: "Carpenter ants are the most significant structural insect pest in Minnesota. They nest in moisture-damaged wood and are common in the older homes and mature tree canopy of Saint Paul. They can cause structural damage over time.",
      },
      {
        name: "Yellow jacket and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets nest in the ground and wall voids and become aggressive in late summer as colonies peak. Paper wasps build nests under eaves and in sheltered spots.",
      },
    ],
    localHook:
      "Saint Paul gets some of the harshest winters of any major US city, which keeps the outdoor pest season short and sharp. The flip side is predictable: when the cold arrives, mice head indoors fast, and the fall rodent surge here is one of the most reliable pest events of the year.",
    intro:
      "Pest control in Saint Paul is a study in extremes. The harsh continental winters, among the coldest of any major US city, suppress outdoor pests for months, but they also drive mice into heated buildings fast each fall. The Mississippi River and the Twin Cities lakes drive a strong summer mosquito season managed region-wide by the Metropolitan Mosquito Control District. Carpenter ants are Minnesota's most significant structural insect, boxelder bugs swarm sun-facing walls each fall, and wasps peak in late summer. The treatment calendar here is sharply seasonal.",
    sections: [
      {
        heading: "Why does Saint Paul get such a strong fall mouse surge?",
        body: "Saint Paul's winters are severe, and house mice respond to falling temperatures with urgency. When the cold sets in around October, mice move into heated buildings fast, through gaps as small as a pencil. The older housing stock in neighborhoods like the East Side, West Seventh, and Frogtown has settled foundations and aging utility penetrations that offer many entry points. A home that was mouse-free all summer can have active mice within weeks of the first hard cold. Sealing entry points in September, before the surge, is far more effective than trapping after.",
      },
      {
        heading: "What is the most damaging insect pest in Saint Paul?",
        body: "Carpenter ants. They are Minnesota's most significant structural insect pest, more so than termites, which are far less of a concern this far north. Carpenter ants nest in moisture-damaged wood: around leaky windows, water-damaged door frames, roof lines, and the dead wood of the mature trees common in Saint Paul's older neighborhoods. They excavate galleries rather than eating wood, but an established colony can cause real structural damage over several years. Seeing large black ants indoors in spring, often more than a couple, suggests a colony established within or near the building.",
      },
    ],
    prevention: [
      "Seal foundation cracks, pipe gaps, and utility penetrations in September before the fall mouse surge.",
      "Inspect wood around windows, roof lines, and nearby trees for moisture damage that attracts carpenter ants.",
      "Remove standing water and treat resting areas to manage the strong summer mosquito season.",
      "Seal entry points before fall to reduce boxelder bug invasions on sun-facing walls.",
    ],
    costNote:
      "Saint Paul pest control commonly uses a seasonal approach: fall rodent exclusion, summer mosquito and wasp service, and carpenter ant treatment as needed. A free inspection sets the schedule to your home.",
    faqs: [
      {
        question: "When do mice get into Saint Paul homes?",
        answer:
          "The surge arrives in October and November as Minnesota's harsh cold sets in, driving mice into heated buildings fast through gaps as small as a pencil. The older housing stock has abundant entry points. Sealing them in September, before the cold, is far more effective than trapping after mice are established.",
      },
      {
        question: "Are termites a concern in Saint Paul?",
        answer:
          "Much less than in warmer cities. Termites are far less of a concern this far north. The most significant structural insect pest in Saint Paul is the carpenter ant, which nests in moisture-damaged wood and can cause structural damage over time. If you see large black ants indoors in spring, a carpenter ant inspection is the right response.",
      },
      {
        question: "Why is the mosquito season so strong in the Twin Cities?",
        answer:
          "The Mississippi River, the many area lakes, and the surrounding wetlands provide extensive mosquito breeding habitat through the warm summers. The Metropolitan Mosquito Control District actively manages the region. The active season runs May through September. Removing standing water and treating resting areas around the home reduces the impact.",
      },
      {
        question: "What are the bugs swarming my Saint Paul house in fall?",
        answer:
          "Most likely boxelder bugs. They gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are harmless, do not bite or damage the home, and are very common across the Twin Cities. Sealing entry points before fall reduces how many get in.",
      },
      {
        question: "Is year-round pest control necessary in Saint Paul?",
        answer:
          "Many Saint Paul homes do well with a seasonal plan given the harsh winters: fall rodent exclusion, summer mosquito and wasp service, and carpenter ant treatment as needed. Homes with recurring indoor pest pressure may benefit from a continuous plan. A free inspection sets the right schedule.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Minneapolis", slug: "minneapolis" },
      { name: "Maplewood", slug: "maplewood" },
      { name: "Roseville", slug: "roseville-mn" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Saint Paul, MN | Mice, Carpenter Ants & Mosquitoes",
    metaDescription:
      "Saint Paul pest control for fall mice, carpenter ants, summer mosquitoes, boxelder bugs and wasps. Twin Cities seasonal specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
