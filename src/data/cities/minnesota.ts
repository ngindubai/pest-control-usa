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
];
