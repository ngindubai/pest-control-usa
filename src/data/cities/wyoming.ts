import type { CityLocation } from "@/types";

// Wyoming city data. Pest intelligence verified against University of Wyoming
// Extension (uwyo.edu/extension) and Wyoming Department of Health.

export const wyomingCities: CityLocation[] = [
  {
    slug: "cheyenne",
    name: "Cheyenne",
    state: "Wyoming",
    stateSlug: "wyoming",
    stateAbbr: "WY",
    tier: "T2",
    population: "~66,000",
    county: "Laramie County",
    climate: "semi-arid",
    climateDriver:
      "Cheyenne sits at 6,062 feet elevation on the high plains of southeastern Wyoming, making it one of the windiest and most exposed state capitals in the country. The semi-arid, high-elevation climate delivers cold winters that regularly drop below zero, dry hot summers, and sustained winds that accelerate drying. The elevation and wind reduce pest diversity significantly compared to lower plains cities, but mice and yellowjackets are reliable annual problems, and the dry conditions favor certain spider species.",
    topPests: [
      "House Mice",
      "Yellowjackets",
      "Odorous House Ants",
      "Box Elder Bugs",
      "Black Widow Spiders",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, major surge in fall",
        note:
          "Cheyenne's cold winters, regularly reaching single digits and below zero in January, make heated structures essential for mice. The fall surge into homes and businesses is predictable and fast when temperatures drop each October. University of Wyoming Extension confirms house mice are a primary pest concern across the state.",
      },
      {
        name: "Yellowjackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "July through September, most aggressive in August",
        note:
          "Yellowjackets and paper wasps are the dominant stinging insect pests in Cheyenne. Yellowjackets nest in the ground and in wall voids of older structures, with colonies reaching peak size and aggression in August. Paper wasps build smaller nests under eaves and in sheltered outdoor spots. Both are common across Laramie County through the warm season.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, trailing in during dry summer months",
        note:
          "Odorous house ants are the most common nuisance ant in Cheyenne, foraging indoors along foundation edges and plumbing in search of moisture and sweets during the dry summer. They are persistent once a trail is established but do not cause structural damage.",
      },
      {
        name: "Box elder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation September through October, overwintering on and in homes",
        note:
          "Box elder bugs gather in visible numbers on warm south-facing building walls each September and work through cracks into wall voids and heated spaces to overwinter. They are harmless but can appear in large concentrations in Cheyenne neighborhoods with box elder and maple trees, which are common street trees in the city.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered locations, most active spring through fall",
        note:
          "Western black widows are present in the Cheyenne area, favoring dry, undisturbed spots such as window wells, garages, wood piles, and outbuildings. University of Wyoming Extension confirms black widows are found across the eastern Wyoming plains, and Laramie County falls within their range. The female's bite is medically significant.",
      },
    ],
    localHook:
      "At over 6,000 feet and regularly below zero in winter, Cheyenne's altitude and wind define everything about life here, including pests: the fall mouse surge into homes is hard and fast, and the short dry summer belongs to yellowjackets and the black widows that favor the dry, undisturbed corners of garages and sheds.",
    intro:
      "Pest control in Cheyenne is shaped by altitude, wind, and a climate that swings hard between cold and dry. The high elevation and sustained winds keep pest diversity low compared to plains cities to the south and east, but the species that thrive here are reliable and appear every year on schedule. House mice are the defining annual pest: Cheyenne's below-zero winters guarantee a fall surge into heated structures, and the city's mix of older residential housing and newer suburban construction has varying levels of vulnerability. Yellowjackets are the summer and early fall concern, with ground and wall-void nests that grow aggressive by August. Black widows occupy the dry corners of garages and sheds, box elder bugs arrive on south-facing walls each September, and odorous house ants trail indoors through the dry summer months.",
    sections: [
      {
        heading: "Fall mice in Cheyenne: the high-altitude cold forces the issue",
        body: "Few cities in the country have as stark a seasonal mouse problem as Wyoming's high plains cities. Cheyenne regularly experiences temperatures below zero between November and February, and there is no hesitation in the mouse response: heated structures become essential for survival, and mice move indoors fast as October temperatures drop. University of Wyoming Extension notes house mice as a primary pest concern statewide, and Cheyenne's position on the exposed, wind-swept plains amplifies the pressure. Homes on the city's edges near grassland and vacant lots see the earliest and heaviest pressure, but the problem is citywide. Exclusion work in September, sealing foundation gaps, utility penetrations, and the spaces around garage doors, is the most cost-effective window. Snap traps placed in active runways inside will show catches within 48 hours if mice are present, and should be maintained until a home is confirmed clear.",
      },
      {
        heading: "Black widows in Cheyenne sheds, garages, and window wells",
        body: "Western black widows are established across the eastern Wyoming plains and are a genuine presence in the Cheyenne area. They do not seek out people: they prefer dry, sheltered, undisturbed spots where they are unlikely to be disturbed and where insects attract prey. In practice that means window wells, garage corners, wood piles, utility boxes, and outbuildings. University of Wyoming Extension confirms their presence in Laramie County and across the plains east of the Rockies. Wearing gloves when reaching into dark enclosed spaces around garages and storage areas and clearing harborage near entry points are the practical daily precautions. A professional perimeter treatment reduces the population, though eliminating all harborage is the underlying management strategy.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and the gap under garage doors before October to prevent mice from entering as Cheyenne temperatures drop sharply.",
      "Wear gloves when reaching into window wells, wood piles, and garage corners where western black widows are likely to be present.",
      "Treat yellowjacket ground nests in early July when colonies are small and workers are fewer and less aggressive.",
      "Seal gaps around windows, utility penetrations, and siding joints before September to reduce box elder bug entry into wall voids.",
    ],
    costNote:
      "Cheyenne pest control typically uses a seasonal approach: fall rodent exclusion in September and October, summer yellowjacket and spider treatment, and ant control through the warm months. A free inspection identifies what your property specifically needs.",
    faqs: [
      {
        question: "Are termites a concern in Cheyenne?",
        answer:
          "Termites are not a significant pest in Cheyenne. Wyoming's cold climate, high elevation, and dry soils do not support the subterranean termite populations common in warmer, more humid states. University of Wyoming Extension confirms termites are rare in Wyoming. The wood-destroying pest concern in Cheyenne is moisture damage and carpenter ants rather than termite activity.",
      },
      {
        question: "When do mice get into Cheyenne homes?",
        answer:
          "Primarily in October, when Cheyenne's high-altitude temperatures drop sharply and mice seek heated structures. Cheyenne's cold winters are more severe than most US plains cities, and the mouse push indoors is fast and reliable each fall. Sealing foundation gaps and utility penetrations in September, before the cold arrives, prevents the problem more effectively than trapping after mice are already established. Homes on the city's edges near grassland see the earliest pressure.",
      },
      {
        question: "Are black widows dangerous in Cheyenne?",
        answer:
          "Western black widows are present in Cheyenne and their bite is medically significant, capable of causing serious systemic illness in healthy adults and more dangerous reactions in children, the elderly, or people with compromised health. They are not aggressive and only bite when they feel trapped. The practical risk is reaching into dark, undisturbed spots, such as window wells, wood piles, garage corners, or utility boxes, without gloves. Wearing gloves when working around these areas is the most important prevention.",
      },
      {
        question: "Why are there so many box elder bugs on my Cheyenne house in September?",
        answer:
          "Box elder bugs aggregate on warm, south-facing and west-facing walls each fall to absorb heat before overwintering in wall voids and attics. Cheyenne's neighborhoods have many box elder and maple trees, which are the host trees that sustain local box elder bug populations. They are harmless: they do not bite, sting, or cause damage to the structure. Sealing gaps around windows and siding before September reduces how many get indoors. Vacuuming up those that do get in is the practical response.",
      },
      {
        question: "Do I need year-round pest control in Cheyenne?",
        answer:
          "Many Cheyenne homes manage well with a seasonal plan. The cold, dry, high-elevation climate limits pest diversity to a predictable seasonal cast: fall rodent exclusion in September and October, yellowjacket and wasp treatment in July through August, ant and spider work through the warm months. Homes near grassland or with recurring black widow activity may benefit from more frequent service. A free inspection determines what your property needs.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Fort Collins", slug: "fort-collins" },
      { name: "Denver", slug: "denver" },
      { name: "Laramie", slug: "laramie" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Cheyenne, WY | Mice, Yellowjackets & Black Widows",
    metaDescription:
      "Cheyenne pest control for house mice, yellowjackets, black widow spiders, box elder bugs and odorous house ants. Laramie County high plains Wyoming specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
