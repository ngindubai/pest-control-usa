import type { CityLocation } from "@/types";

// Wyoming. Pest data reflects high-altitude semi-arid plains conditions.
// Rodent and insect data from University of Wyoming Extension.

export const wyomingCities: CityLocation[] = [
  {
    slug: "cheyenne",
    name: "Cheyenne",
    state: "Wyoming",
    stateSlug: "wyoming",
    stateAbbr: "WY",
    tier: "T2",
    population: "~65,000",
    county: "Laramie County",
    climate: "semi-arid",
    climateDriver:
      "Cheyenne sits at 6,063 feet elevation on the high plains of southeastern Wyoming, with the Laramie Range rising to the west. The altitude brings cold winters, frequent winds, and semi-arid conditions that limit the humid-climate pest pressure common at lower elevations. Termites are not a significant concern, but rodents, wasps, and fall-invading boxelder bugs are consistent annual issues.",
    topPests: [
      "House mice",
      "Boxelder bugs",
      "Wasps and yellow jackets",
      "Pavement ants",
      "Black widow spiders",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge September through March",
        note: "University of Wyoming Extension identifies house mice as the primary rodent pest in urban Cheyenne. At 6,063 feet, winter temperatures regularly fall below 0°F for extended periods, driving mice into buildings aggressively from September onward. The high plains wind also forces mice to seek windbreak shelter in structures earlier than in more sheltered locations.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall invasions August through October, overwinter indoors",
        note: "Boxelder bugs are one of the most common fall nuisance pests across the high plains, and Cheyenne's abundance of boxelder trees along streets and in parks feeds a large annual population. They aggregate on south and west building faces in fall, seeking warmth, and push inside through gaps around windows and doors. They do not bite or damage structures but can stain surfaces with their excrement.",
      },
      {
        name: "Wasps and yellow jackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "May through October, most aggressive August and September",
        note: "Yellow jackets are the dominant stinging insect pest in Cheyenne. They build underground nests in the loose soils common on the high plains and are most aggressive in late summer when colonies reach peak size. Paper wasps nest under eaves and in sheltered exterior spaces. Both become defensive near food at outdoor gatherings.",
      },
      {
        name: "Pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Pavement ants nest in the cracks of driveways, sidewalks, and building foundations throughout Cheyenne. They forage indoors in spring and summer, particularly in kitchens and bathrooms. Cheyenne's disturbed urban soils and frequent construction activity create ideal nesting conditions.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Active spring through fall, sheltered year-round",
        note: "The western black widow is present in Laramie County. University of Wyoming Extension notes they inhabit dry, sheltered areas including garages, storage sheds, woodpiles, and rock piles. Their venom is medically significant. Cheyenne's dry climate and rocky terrain around the city's edges support established populations.",
      },
    ],
    localHook:
      "Cheyenne's 6,063-foot elevation brings some advantages: termites, cockroaches, and mosquitoes are not the year-round concerns they are in lower, warmer climates. But the high plains winter drives house mice indoors with a force that residents quickly learn to respect, and boxelder bugs turning up in walls and windows by the thousands every fall is a reliable Cheyenne seasonal tradition.",
    intro:
      "Pest control in Cheyenne is shaped by the city's high-altitude semi-arid climate on the Wyoming plains. The cold winters, which regularly reach below 0°F, make rodent intrusion the primary concern, and house mice pushing into heated buildings from September through March is the most consistent pest call in the city. Boxelder bugs are a major fall nuisance given the city's many boxelder trees. Yellow jackets build underground nests through summer and become aggressive in August and September. Black widow spiders are present in garages and storage spaces, and pavement ants are a warm-season standard.",
    sections: [
      {
        heading: "Mice versus boxelder bugs: Cheyenne's two signature fall pests",
        body: "Cheyenne homeowners face two distinct fall pest challenges that both require action before temperatures drop. House mice begin their push indoors in September as the high plains wind brings the first cold air off the Laramie Range. Sealing foundation gaps, pipe penetrations, and garage door weatherstripping in August and early September is the most effective prevention. At the same time, boxelder bugs begin clustering on south and west building faces as they seek warmth. They enter through the same gaps and cracks mice use, so a single exterior sealing effort addresses both. The difference is that mice need to be eliminated once inside, while boxelder bugs can be vacuumed out of interior spaces they have already reached.",
      },
      {
        heading: "Yellow jackets and wasps on the high plains",
        body: "Yellow jackets build underground nests in the disturbed soils common throughout Cheyenne's residential areas, and they are most dangerous in August and September when colony size peaks. Accidental disturbance of a nest during lawn mowing or digging is the typical scenario for a sting incident. Paper wasps choose sheltered spots under eaves, in attic vents, and inside outdoor furniture. Both species become more defensive toward late summer, and both are attracted to proteins and sweets at outdoor food gatherings. University of Wyoming Extension recommends addressing nests in early morning when yellow jackets are less active, and professional treatment of underground nests is safer than DIY attempts given their defensive behavior.",
      },
    ],
    prevention: [
      "Seal foundation gaps and utility penetrations in August before Wyoming's cold drives mice indoors.",
      "Trim boxelder trees away from the building to reduce the fall congregation on south and west faces.",
      "Inspect eaves, attic vents, and exterior wall gaps in April and May before paper wasps begin building season.",
      "Keep wood and debris piles away from the building to reduce black widow harborage in garages and storage areas.",
    ],
    costNote:
      "Cheyenne pest control is often structured as a warm-season perimeter plan covering ants, spiders, and wasps, with a separate fall and winter rodent program. Boxelder bug exclusion work is most effective when done in August. A free inspection establishes what is active before a plan is quoted.",
    faqs: [
      {
        question: "Do Cheyenne homes get termites?",
        answer:
          "Termites are not a significant concern in Cheyenne. The high altitude, cold winters, and semi-arid conditions of the Wyoming high plains are not favorable for subterranean termite colonies. Rodents, boxelder bugs, and wasps are the primary pest concerns.",
      },
      {
        question: "Why are boxelder bugs such a problem in Cheyenne?",
        answer:
          "Cheyenne has many boxelder trees, which are the preferred food source and breeding host for boxelder bugs. Each fall, the mature population seeks warmth in buildings. They do not bite or cause structural damage, but they aggregate in large numbers and can stain surfaces. Sealing the building exterior before September and removing boxelder trees near the house reduces future invasions.",
      },
      {
        question: "When do yellow jackets become dangerous in Cheyenne?",
        answer:
          "Yellow jacket colonies reach peak size in August and September and are most defensive during those weeks. Underground nests in lawns and gardens are the most common hazard. Avoid mowing or digging near known nest locations in late summer. Professional removal of active underground nests is the safest approach.",
      },
      {
        question: "Are black widow spiders common in Cheyenne garages?",
        answer:
          "Yes. The western black widow is present throughout Laramie County and favors dry, sheltered spaces including garages, woodpiles, and storage sheds. Annual treatment of these areas significantly reduces the population. Check items stored in garages before handling them.",
      },
      {
        question: "How do I keep mice out of my Cheyenne home in winter?",
        answer:
          "Seal entry points before October. House mice can squeeze through gaps as small as a dime. Check where pipes and utility lines enter the building, garage door weatherstripping, and any cracks in the foundation. Steel wool and caulk seal small gaps. Larger openings need hardware cloth or expanding foam. A fall exclusion inspection is the most effective single prevention step.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Fort Collins", slug: "fort-collins" },
      { name: "Denver", slug: "denver" },
      { name: "Billings", slug: "billings" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle:
      "Pest Control in Cheyenne, WY | Mice, Boxelder Bugs & Yellow Jackets",
    metaDescription:
      "Cheyenne pest control for house mice, boxelder bugs, yellow jackets, black widow spiders and pavement ants. Laramie County high plains Wyoming specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
