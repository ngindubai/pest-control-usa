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
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Las Vegas, NV | Scorpions, Roaches & Roof Rats",
    metaDescription:
      "Las Vegas pest control for bark scorpions, desert roaches, crickets, black widows and roof rats. Sealing plus treatment, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "henderson",
    name: "Henderson",
    state: "Nevada",
    stateSlug: "nevada",
    stateAbbr: "NV",
    tier: "T1",
    population: "~320,000",
    county: "Clark County",
    climate: "desert",
    climateDriver:
      "Henderson sits in the Mojave Desert just southeast of Las Vegas, sharing the same hot, dry desert climate: extreme summer heat, mild winters, and very low humidity. The heat drives desert pests toward irrigated yards and cool homes, and the master-planned communities with their landscaping and block walls shape where pests concentrate.",
    topPests: [
      "Scorpions",
      "Black Widows",
      "Crickets",
      "Roof Rats",
      "Ants",
    ],
    pestProfile: [
      {
        name: "Bark scorpions and desert hairy scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Active spring through fall, seek shelter indoors in extreme heat",
        note: "Henderson shares the Las Vegas valley scorpion pressure. The Arizona bark scorpion, present in the region, has medically significant venom. Scorpions enter homes through gaps seeking moisture and cooler temperatures during the extreme summer heat.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Black widows are very common in Henderson, favoring the block walls, utility boxes, garages, and landscaping features of the master-planned communities. The female's bite is medically significant.",
      },
      {
        name: "Crickets",
        serviceSlug: "cricket-control",
        activeSeason: "Surge in late summer and fall",
        note: "Field crickets surge in large numbers across the Las Vegas valley in late summer and fall, gathering around lights and entering homes and garages. They are a nuisance and a food source that draws scorpions and spiders.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats have spread across the Las Vegas valley including Henderson over the past two decades, nesting in palms, landscaping, and attics. The irrigated master-planned communities with mature landscaping support growing populations.",
      },
      {
        name: "Ants (including pavement and Argentine ants)",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active in warm months",
        note: "Ants follow irrigation moisture into Henderson homes during the dry heat. Pavement ants nest under walks and foundations, and Argentine ants appear in the irrigated landscaping.",
      },
    ],
    localHook:
      "Henderson sits in the same Mojave Desert valley as Las Vegas, so it shares the scorpion pressure, but the city's master-planned communities add their own twist. The block walls and irrigated landscaping that make these neighborhoods attractive are also prime habitat for black widows and a draw for scorpions.",
    intro:
      "Pest control in Henderson is desert pest control with a master-planned community character. Sharing the Mojave climate with neighboring Las Vegas, Henderson faces the same scorpion pressure, including the medically significant bark scorpion, set against the everyday nuisance pests. The contrast that defines the city is between the harsh desert exterior and the irrigated, landscaped neighborhoods: that boundary is exactly where black widows shelter, scorpions seek moisture, and roof rats find food. Understanding that edge is the key to managing a Henderson home.",
    sections: [
      {
        heading: "Desert exterior versus irrigated yard: where pests concentrate",
        body: "Henderson's pest pressure concentrates at a specific boundary. Outside the developed areas, the Mojave Desert is harsh and dry. Inside the master-planned communities, irrigation keeps yards green and block walls provide shelter. Pests follow that gradient. Scorpions and black widows shelter in the block walls and landscaping, while ants and roof rats are drawn to the irrigation moisture and the food the landscaped environment provides. By contrast with a humid city where pests are spread more evenly, Henderson's pests cluster where the desert meets the irrigated neighborhood, which is where treatment focuses.",
      },
      {
        heading: "Scorpions versus the crickets that feed them",
        body: "Scorpion control in Henderson is partly about the scorpions themselves and partly about their food supply. The bark scorpion, with its medically significant venom, is the priority, and it enters homes through gaps seeking moisture during the extreme summer heat. But scorpions follow their prey, and the field crickets that surge across the valley each fall are a major food source. Reducing crickets through exterior lighting changes and treatment reduces what draws scorpions in. Effective control addresses both the scorpions directly and the prey that sustains them, an approach that differs from simply spraying for one pest.",
      },
    ],
    prevention: [
      "Seal gaps under doors, around plumbing, and at block wall weep holes to reduce scorpion entry.",
      "Clear block walls, utility boxes, and landscaping of clutter to reduce black widow and scorpion harborage.",
      "Reduce outdoor lighting and seal garages to limit the fall cricket surge that feeds scorpions.",
      "Trim palms and landscaping back from the roofline to reduce roof rat access.",
    ],
    costNote:
      "Henderson pest control is commonly quoted as a recurring perimeter plan covering scorpions, spiders, crickets, and ants, with roof rat work quoted separately. Monthly or bi-monthly service is standard given the scorpion pressure. Start with a free inspection.",
    faqs: [
      {
        question: "Are scorpions as bad in Henderson as in Las Vegas?",
        answer:
          "Henderson shares the same Mojave Desert valley and the same scorpion pressure as neighboring Las Vegas, including the Arizona bark scorpion, which has medically significant venom. The master-planned communities with their block walls and irrigated landscaping provide ample harborage. Regular perimeter treatment and sealing entry points are the practical defenses.",
      },
      {
        question: "Why are black widows so common in Henderson's communities?",
        answer:
          "The block walls and landscaping features that define Henderson's master-planned communities provide ideal black widow habitat: dry, undisturbed, sheltered spots in wall gaps, weep holes, utility boxes, and garages. Their bite is medically significant, so regular treatment and clearing harborage near doors and play areas matters.",
      },
      {
        question: "How does controlling crickets help with scorpions?",
        answer:
          "Scorpions follow their food. The field crickets that surge across the Las Vegas valley each fall are a major food source for scorpions. Reducing crickets through exterior lighting changes and treatment reduces what draws scorpions toward and into homes. Effective scorpion control addresses both the scorpions and the prey that sustains them.",
      },
      {
        question: "Are roof rats a problem in Henderson?",
        answer:
          "Yes, increasingly. Roof rats have spread across the Las Vegas valley including Henderson over the past two decades, nesting in palms, landscaping, and attics. The irrigated master-planned communities with mature landscaping support growing populations. Trimming landscaping back from rooflines and sealing attic vents are the first preventive steps.",
      },
      {
        question: "Is monthly pest control necessary in Henderson?",
        answer:
          "For most Henderson homes, yes. The bark scorpion pressure and the year-round mild desert climate mean pest pressure does not pause seasonally. Monthly or bi-monthly perimeter treatment maintains a barrier against scorpions, spiders, and crickets year-round, which most pest control providers consider the standard of care in the valley.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Las Vegas", slug: "las-vegas" },
      { name: "North Las Vegas", slug: "north-las-vegas" },
      { name: "Boulder City", slug: "boulder-city" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Henderson, NV | Scorpions, Black Widows & Crickets",
    metaDescription:
      "Henderson pest control for bark scorpions, black widows, crickets, roof rats and ants. Mojave Desert and master-planned community specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
