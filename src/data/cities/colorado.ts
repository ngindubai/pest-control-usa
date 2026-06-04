import type { CityLocation } from "@/types";

// Colorado seed cities. Pest data reflects the semi-arid, high-altitude Front
// Range climate (Colorado State University Extension).

export const coloradoCities: CityLocation[] = [
  {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    stateSlug: "colorado",
    stateAbbr: "CO",
    tier: "T1",
    population: "~715,000",
    county: "Denver County",
    climate: "cold",
    climateDriver:
      "Denver is high, dry, and cold in winter. The semi-arid climate keeps humidity-loving pests low, but the cold drives rodents indoors in fall, and the Front Range brings its own seasonal arrivals.",
    topPests: ["Mice", "Ants", "Wasps", "Spiders", "Miller Moths"],
    pestProfile: [
      {
        name: "House mice and voles",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active all winter",
        note: "As the cold sets in, mice push indoors through small gaps, while voles tunnel through yards and gardens outdoors.",
      },
      {
        name: "Pavement and carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through summer",
        note: "Pavement ants nest under walks and foundations, while carpenter ants seek out damp wood around leaks and irrigation.",
      },
      {
        name: "Yellowjackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "The dry summers suit wasps well, and nests grow large and aggressive around food and trash by late season.",
      },
      {
        name: "Spiders, including occasional black widows",
        serviceSlug: "spider-control",
        activeSeason: "More visible in warm months",
        note: "Common house spiders are widespread, and black widows turn up in window wells, garages, and woodpiles at lower elevations.",
      },
      {
        name: "Miller moths",
        serviceSlug: "moth-control",
        activeSeason: "Spring migration, peaks May to June",
        note: "Each spring, miller moths migrate through the Front Range in large numbers and crowd into homes around doors and windows.",
      },
    ],
    localHook:
      "Every spring the Front Range gets its own pest event: miller moths pouring through in the thousands, slipping around every door and window on their way to the mountains.",
    intro:
      "Pest control in Denver looks different from a humid city. The high, dry, semi-arid climate keeps mosquitoes and tropical pests low, so the local cast leans toward rodents, ants, wasps, and spiders. Two things stand out: the fall rush of mice indoors when the cold arrives, and the spring miller moth migration that funnels through the Front Range. Most homes here need a plan tuned to the season, exclusion in fall, wasp and spider work in summer, rather than the year-round heat-pest pressure of the South.",
    sections: [
      {
        heading: "What are the moths swarming my house in spring?",
        body: "Those are miller moths, the adult stage of the army cutworm, and each spring they migrate from the plains up to the mountains, passing right through the Denver area in large numbers. They are a nuisance rather than a danger and do not breed indoors. Reducing outdoor lighting at night and sealing gaps around doors and windows cuts how many get in during the few weeks they pass through.",
      },
      {
        heading: "Why do mice come in once it gets cold?",
        body: "Denver winters are cold, and mice respond by moving indoors through gaps as small as a pencil. Once inside, they nest in walls and basements for the season. Sealing entry points before fall is far more effective than trapping after the fact. The dry climate also means fewer moisture pests overall, so rodent exclusion is the main autumn job.",
      },
    ],
    prevention: [
      "Seal foundation, pipe, and door gaps before fall to keep mice out.",
      "Reduce outdoor lighting in spring to draw fewer miller moths to the house.",
      "Knock down small wasp nests early in summer before they grow.",
      "Clear window wells, woodpiles, and garage clutter to limit black widow harborage.",
    ],
    costNote:
      "Many Denver homes use a seasonal plan: fall exclusion for rodents, summer treatment for wasps and spiders, with a quick response during the spring moth migration. A free inspection sets the plan to your home.",
    faqs: [
      {
        question: "What are the moths invading my Denver home in spring?",
        answer:
          "Those are miller moths, which migrate through the Front Range each spring on their way to the mountains, often in large numbers. They are a nuisance, not a danger, and do not breed indoors. Reducing outdoor lighting and sealing gaps around doors and windows limits how many get in.",
      },
      {
        question: "When do mice get into Denver homes?",
        answer:
          "Mostly in fall, when the cold pushes them indoors through gaps as small as a pencil width. They nest in walls and basements for winter. Sealing entry points before fall is the most effective defense.",
      },
      {
        question: "Are black widows found in Denver?",
        answer:
          "Yes, particularly at lower elevations, in window wells, garages, woodpiles, and outbuildings. Their bite is medically significant, so clearing clutter and harborage near doors and play areas is sensible.",
      },
      {
        question: "Are mosquitoes a big problem in Denver?",
        answer:
          "Less than in humid cities, thanks to the dry climate, though they can appear near standing water and irrigation in summer. Most Denver pest plans focus on rodents, ants, wasps, spiders, and the seasonal moths instead.",
      },
      {
        question: "When are wasps worst in Denver?",
        answer:
          "Wasp and yellowjacket nests grow through the dry summer and are largest and most aggressive in late summer around eaves, decks, and trash. Removing small nests early is far easier than dealing with a mature one.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Aurora", slug: "aurora-co" },
      { name: "Lakewood", slug: "lakewood" },
      { name: "Boulder", slug: "boulder" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Denver, CO | Mice, Miller Moths & Wasps",
    metaDescription:
      "Denver pest control for fall mice, spring miller moths, pavement and carpenter ants, wasps and black widows. Seasonal plans, free inspection. Call 1-800-PEST-USA.",
  },
];
