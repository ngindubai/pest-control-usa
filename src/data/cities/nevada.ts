import type { CityLocation } from "@/types";

// Nevada seed cities. Pest data reflects the hot, arid Mojave Desert climate
// (University of Nevada Cooperative Extension).

export const nevadaCities: CityLocation[] = [
  {
    slug: "las-vegas",
    name: "Las Vegas",
    state: "Nevada",
    stateSlug: "nevada",
    stateAbbr: "NV",
    tier: "T1",
    population: "~650,000",
    county: "Clark County",
    climate: "hot-arid",
    climateDriver:
      "Las Vegas sits in the Mojave Desert: intense heat, very low humidity, and irrigated landscaping in a dry valley. Pests cluster around the water people add, lawns, drip systems, and pools.",
    topPests: ["Scorpions", "Cockroaches", "Crickets", "Spiders", "Rats"],
    pestProfile: [
      {
        name: "Bark and desert scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Peaks late spring through summer",
        note: "The Arizona bark scorpion, the region's only species with a medically significant sting, occurs in the Las Vegas Valley along with larger desert hairy scorpions. They hunt at night and slip through tiny gaps.",
      },
      {
        name: "German and American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German roaches breed indoors in kitchens, while larger roaches gather around irrigated landscaping and move inside in extreme heat.",
      },
      {
        name: "Field crickets",
        serviceSlug: "cricket-control",
        activeSeason: "Surges in late summer",
        note: "Crickets swarm in large numbers some late summers, gathering around lights and entryways and slipping into garages and homes.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round, more active in warm months",
        note: "Black widows favor block walls, garages, meter boxes, and irrigation boxes. Their bite is medically significant.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats have spread through the valley's older, landscaped neighborhoods, nesting in palms, attics, and dense shrubs near water and fruit.",
      },
    ],
    localHook:
      "In the Mojave, pests follow the water you add. The bark scorpion is the one Las Vegas homeowners genuinely worry about, and it slips indoors through gaps you can barely see.",
    intro:
      "If you live in Las Vegas, the desert sets the rules. It is too hot and dry for most humidity-loving pests, so the trouble clusters around the water we bring in: irrigated yards, drip lines, and pools. The bark scorpion is the standout concern, the only local scorpion whose sting needs medical attention, and it gets indoors through hairline gaps. Add desert roaches, the odd late-summer cricket swarm, black widows in the block walls, and roof rats spreading through the valley, and you have a pest list shaped entirely by the desert.",
    sections: [
      {
        heading: "Scorpions and why sealing the house comes first",
        body: "Here is the thing about bark scorpions: spraying alone rarely solves it, because they hunt at night and shelter deep in walls and block during the day. The fix is exclusion, sealing weep holes, door sweeps, and plumbing gaps so they cannot get in, paired with treating the harborage outside. Peak season runs from late spring through summer, so the smart move is to seal up before the heat arrives.",
      },
      {
        heading: "The pests that follow irrigation",
        body: "Out in the open desert there is little for pests to use. Around homes, though, drip systems, lawns, and pools create an oasis. Roaches, crickets, roof rats, and black widows all gather where that water is. Managing the moisture and harborage near the house, woodpiles, dense shrubs, and irrigation boxes, takes away the conditions they need.",
      },
    ],
    prevention: [
      "Seal weep holes, door sweeps, and plumbing gaps to block bark scorpions.",
      "Move woodpiles, block, and clutter away from walls to cut scorpion and widow harborage.",
      "Check and maintain irrigation to avoid pooling water that draws pests near the house.",
      "Trim palms and dense shrubs back from the roof to limit roof rats.",
    ],
    costNote:
      "Scorpion control in Las Vegas usually works best as a recurring plan, because the peak season is long and exclusion needs upkeep. A free inspection prices the work against your home's gaps and the species present.",
    faqs: [
      {
        question: "Are scorpions dangerous in Las Vegas?",
        answer:
          "The Arizona bark scorpion, which occurs in the Las Vegas Valley, is the only local scorpion whose sting is medically significant, and stings can need medical care, especially for young children. Larger desert scorpions also occur but are less dangerous. They are most active on warm nights and enter through very small gaps.",
      },
      {
        question: "Why does sealing matter more than spraying for scorpions?",
        answer:
          "Scorpions shelter deep in walls and block by day and hunt at night, so spraying alone often misses them. Exclusion, sealing the gaps they use to get in, is the most effective part of the plan, combined with perimeter treatment and clearing outdoor harborage.",
      },
      {
        question: "What causes the cricket swarms in Las Vegas?",
        answer:
          "Some late summers see large numbers of field crickets gather around lights and entryways, then slip into garages and homes. They are a nuisance rather than a danger. Reducing exterior lighting at night and sealing entry points cuts how many get in.",
      },
      {
        question: "Are roof rats really a problem in the desert?",
        answer:
          "Yes. Roof rats have spread through the valley's older, landscaped neighborhoods, where irrigation, fruit trees, and dense shrubs give them food, water, and cover. They nest in palms and attics, so trimming vegetation and sealing roofline gaps is key.",
      },
      {
        question: "Why do pests gather around my yard in Las Vegas?",
        answer:
          "The open desert offers little water, so pests concentrate around the moisture people add: irrigation, lawns, and pools. Managing that water and the harborage near the house removes much of what draws them in.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Henderson", slug: "henderson" },
      { name: "North Las Vegas", slug: "north-las-vegas" },
      { name: "Summerlin", slug: "summerlin" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbour",
    metaTitle: "Pest Control in Las Vegas, NV | Scorpions, Roaches & Roof Rats",
    metaDescription:
      "Las Vegas pest control for bark scorpions, desert roaches, crickets, black widows and roof rats. Sealing plus treatment, free inspection. Call 1-800-PEST-USA.",
  },
];
