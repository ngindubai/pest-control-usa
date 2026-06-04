import type { CityLocation } from "@/types";

// Idaho. Pest data reflects semi-arid high desert and Snake River Plain conditions.
// Black widow and rodent data from University of Idaho Extension.

export const idahoCities: CityLocation[] = [
  {
    slug: "boise",
    name: "Boise",
    state: "Idaho",
    stateSlug: "idaho",
    stateAbbr: "ID",
    tier: "T1",
    population: "~240,000",
    county: "Ada County",
    climate: "semi-arid",
    climateDriver:
      "Boise sits in a high desert valley on the Snake River Plain at roughly 2,700 feet elevation. The semi-arid climate brings hot dry summers, cold winters, and low humidity. Pests concentrate in spring and fall, with rodents driven indoors by cold winters and irrigation-fed yards drawing pests during the dry summer.",
    topPests: ["Mice", "Black Widows", "Wasps", "Ants", "Box Elder Bugs"],
    pestProfile: [
      {
        name: "House mice and deer mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge in fall",
        note: "Boise's cold winters drive mice firmly indoors each fall. Homes on the Boise foothills edge and near agricultural land also see deer mice, which can carry hantavirus. The University of Idaho confirms hantavirus risk from deer mice in the state.",
      },
      {
        name: "Western black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Western black widows are common in the Boise area, favoring dry undisturbed spots: window wells, garages, wood piles, utility boxes, and irrigation boxes. The female's bite is medically significant.",
      },
      {
        name: "Yellow jacket and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "The dry Boise summers suit wasps well. Yellow jackets nest in the ground and wall voids and become aggressive in late summer as colonies peak and natural food declines. Paper wasps build nests under eaves and in sheltered outdoor spots.",
      },
      {
        name: "Odorous house and pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Odorous house ants and pavement ants are the common nuisance ants in Boise, foraging indoors and following irrigation moisture during the dry summer months. Carpenter ants appear in homes with moisture-damaged wood.",
      },
      {
        name: "Box elder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation, overwintering on and in homes",
        note: "Box elder bugs gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are a harmless nuisance, common in Boise neighborhoods with box elder and maple trees.",
      },
    ],
    localHook:
      "Boise's high desert valley is dry, which keeps humidity pests low, but two things stand out: the fall rush of mice indoors when the cold arrives, and the western black widows that turn up in window wells, garages, and irrigation boxes across the valley. The treatment calendar here follows the seasons closely.",
    intro:
      "Pest control in Boise follows the high desert seasons. The dry, semi-arid valley climate keeps humidity-loving pests low, so the local cast leans toward rodents, black widows, wasps, and ants. Two events define the year: the fall surge of mice into heated homes when the cold sets in, and the western black widows that favor the dry, undisturbed spots common around valley homes. Deer mice near the foothills and agricultural edges carry hantavirus risk, which makes rodent work here a safety matter, not just a nuisance one.",
    sections: [
      {
        heading: "TL;DR for Boise homeowners",
        body: "Seal the house against mice before fall, because Boise winters push them indoors fast. Watch for western black widows in window wells, garages, and irrigation boxes year-round. Treat wasp nests early in summer before they peak in August. Handle deer mouse droppings near the foothills with care, given the hantavirus risk. The dry climate means fewer moisture pests overall, so rodents, spiders, and wasps are the main jobs.",
      },
      {
        heading: "Deer mice and hantavirus on the valley edges",
        body: "Boise homes near the foothills or agricultural land can have deer mice in addition to house mice. The University of Idaho confirms deer mice in Idaho can carry hantavirus, which makes how you handle an infested space important. The risk comes from disturbing dried droppings or nesting material in enclosed areas like sheds, garages, and crawl spaces. The safe approach is wetting the area with disinfectant before cleaning, wearing gloves, and ventilating, rather than dry-sweeping. A professional handles this more safely than most homeowners can.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and utility openings before fall to keep mice out.",
      "Clear window wells, wood piles, and garage clutter to reduce western black widow harborage.",
      "Treat wasp nests in early summer before colonies reach peak size in August.",
      "Wet down deer mouse droppings with disinfectant before cleaning enclosed spaces, and wear gloves.",
    ],
    costNote:
      "Boise pest control commonly uses a seasonal plan: fall rodent exclusion, summer wasp and spider work, and ant treatment through the warm months. Hantavirus-safe rodent cleanup in enclosed spaces may be a separate service. Start with a free inspection.",
    faqs: [
      {
        question: "When do mice get into Boise homes?",
        answer:
          "Mostly in fall, when the cold high desert winters drive them indoors through small gaps around foundations, pipes, and utilities. Boise's cold can trigger a fast, significant surge. Sealing entry points before fall is far more effective than trapping after mice are established. Homes near the foothills and agricultural edges also see deer mice.",
      },
      {
        question: "Are black widows common in Boise?",
        answer:
          "Yes. Western black widows are common across the Boise valley, favoring dry, undisturbed spots: window wells, garages, wood piles, utility boxes, and irrigation boxes. Their bite is medically significant. Clearing clutter and harborage near doors, garages, and play areas, and wearing gloves when reaching into dark enclosed spaces, reduces the risk.",
      },
      {
        question: "Is hantavirus a real concern in the Boise area?",
        answer:
          "It is a genuine consideration near the foothills and agricultural land, where deer mice are present. The University of Idaho confirms deer mice in Idaho can carry hantavirus. The risk comes from disturbing dried droppings or nesting material in enclosed spaces. Wetting the area with disinfectant before cleaning, wearing gloves, and ventilating are the recommended precautions.",
      },
      {
        question: "What are the bugs swarming my Boise house in fall?",
        answer:
          "Most likely box elder bugs. They gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are harmless, do not bite or damage the home, and are common in neighborhoods with box elder and maple trees. Sealing entry points before fall reduces how many get in.",
      },
      {
        question: "Do I need year-round pest control in Boise?",
        answer:
          "Many Boise homes do well with a seasonal plan rather than constant treatment, given the dry climate: rodent exclusion in fall, wasp and spider work in summer, and ant treatment through the warm months. Homes with recurring black widow or rodent pressure may benefit from a continuous plan. A free inspection sets the right schedule.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Meridian", slug: "meridian" },
      { name: "Nampa", slug: "nampa" },
      { name: "Caldwell", slug: "caldwell" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Boise, ID | Mice, Black Widows & Wasps",
    metaDescription:
      "Boise pest control for fall mice, deer mice (hantavirus), western black widows, wasps, ants and box elder bugs. High desert specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
