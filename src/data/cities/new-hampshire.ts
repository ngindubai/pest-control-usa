import type { CityLocation } from "@/types";

// New Hampshire. Pest data reflects New England cold-humid conditions.
// Sources: UNH Cooperative Extension, CDC tick surveillance data.

export const newHampshireCities: CityLocation[] = [
  {
    slug: "manchester",
    name: "Manchester",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T2",
    population: "~115,000",
    county: "Hillsborough County",
    climate: "cold-humid",
    climateDriver:
      "Manchester sits in southern New Hampshire along the Merrimack River, with a cold-humid New England climate that delivers cold, snowy winters and warm, humid summers. The city's position in the Merrimack River valley and its large stock of nineteenth-century mill city housing creates a specific pest profile: mice and rats push hard into older buildings in fall, carpenter ants target the moisture-prone wood of historic mill-adjacent neighborhoods, and the wooded parcels throughout Hillsborough County sustain a significant deer tick population that puts Lyme disease risk in the backyard.",
    topPests: ["House Mice", "Carpenter Ants", "Yellowjackets", "Deer Ticks", "Bed Bugs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Push indoors October through March, active year-round once inside",
        note: "House mice are the most common pest complaint in Manchester's older residential neighborhoods. The Merrimack Valley's cold winters drive mice into heated structures by October, and the city's substantial stock of older mill-era housing, with its brick foundations, aging mortar joints, and accumulated utility penetrations, provides mice with ample entry points. Neighborhoods like the South End and West Side see consistent fall mouse pressure year after year.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, most visible indoors in spring",
        note: "Carpenter ants are a consistent structural concern in Manchester. The combination of older wood-frame housing throughout the neighborhoods adjacent to the Amoskeag mill district, the mature street tree canopy, and the moisture conditions in the Merrimack River valley create ideal carpenter ant territory. Finding large black ants indoors in May is the typical first sign of an established colony in the structure.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests active June through October, peak aggression in August and September",
        note: "Yellowjackets are a consistent late-summer pest in Manchester. They build ground nests throughout the wooded residential neighborhoods of the West Side and South End and aerial nests under eaves and in wall voids of older homes. August and September are the peak risk period when colonies reach maximum size and workers become highly aggressive in foraging for food.",
      },
      {
        name: "Deer ticks",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November, peak in May to June and October",
        note: "Deer ticks are a significant public health concern in Hillsborough County. UNH Cooperative Extension has documented established black-legged tick populations throughout southern New Hampshire, and Lyme disease cases are consistently reported across Manchester's suburban and semi-rural edges. The wooded lots along the Merrimack River and throughout the hillside neighborhoods are primary tick habitat.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Bed bug activity in Manchester is sustained by the city's rental housing density and the regular turnover of tenants in the older multi-family buildings throughout the Millyard and surrounding neighborhoods. The city's social service and transitional housing facilities have also dealt with bed bug management as a recurring concern.",
      },
    ],
    localHook:
      "Manchester's Amoskeag Manufacturing Company once operated the largest textile mill complex in the world along the Merrimack River, and the neighborhoods built around those mills in the nineteenth century are still standing. The older brick and wood-frame buildings of the South End and the Millyard district have exactly the aged foundations, settled utility penetrations, and moisture-prone woodwork that carpenter ants and house mice exploit every fall.",
    intro:
      "Pest control in Manchester reflects the city's Merrimack River mill heritage. The older housing stock throughout the South End, West Side, and the neighborhoods adjacent to the Amoskeag Millyard provides exactly the conditions that house mice, carpenter ants, and yellowjackets need: aging foundations with gaps, moisture-prone older wood, and mature tree canopy. The cold New Hampshire winters drive mice firmly into heated structures by October, and carpenter ant colonies in damp wood become visible in the spring when workers forage indoors. Yellowjackets peak in August. Deer tick risk is a real backyard concern in Hillsborough County's wooded neighborhoods. And the city's rental housing density sustains steady bed bug activity.",
    sections: [
      {
        heading: "The fall mouse push in Manchester's older housing",
        body: "Manchester's fall mouse surge is among the most predictable pest events in the city's calendar. When October temperatures drop, house mice begin moving from outdoor areas into the heated interiors of the older residential buildings throughout the South End, West Side, and the Millyard-adjacent neighborhoods. These older structures have conditions that make exclusion challenging: brick foundations with failed mortar joints, utility pipe penetrations sealed decades ago with materials that have since cracked, garage door seals that have stiffened and lifted, and sill plate connections that have shifted with a century or more of foundation settling. Mice enter through gaps as small as a quarter inch. The practical approach is a professional exclusion inspection in September, before the cold sets in, to identify and seal all entry points with metal-based materials that hold through the freeze-thaw cycles of a New Hampshire winter. Foam sealant alone is not sufficient in cold climates because repeated freezing and thawing cracks it open. Trapping handles the mice already inside; exclusion prevents new ones from following.",
      },
      {
        heading: "Deer ticks and Lyme disease risk in Hillsborough County",
        body: "Deer ticks are not just a rural New Hampshire problem. UNH Cooperative Extension has documented established black-legged tick populations throughout southern New Hampshire, including in the wooded residential neighborhoods and green spaces of Manchester. Lyme disease is the most common tick-borne illness reported in New Hampshire, and Hillsborough County sees consistent case reports each year. The risk is highest in the wooded edges of yards, in leaf litter, and in unmowed grass along fence lines and property borders. The two peak risk periods are May through June, when nymphal ticks are small and hard to see, and October, when adult ticks are actively questing. A professional tick barrier treatment applied to the wooded yard edges and leaf litter areas in early May, with a follow-up in early fall, significantly reduces the tick population in treated areas. Removing leaf litter, keeping grass cut short, and creating a dry wood-chip or gravel border between lawn and wooded areas are the most impactful yard-management steps.",
      },
    ],
    prevention: [
      "Inspect and seal foundation gaps, mortar joints, and utility penetrations with metal-based materials in September before the October mouse push.",
      "Keep grass cut short and remove leaf litter from yard edges to reduce deer tick habitat near the home.",
      "Schedule a spring carpenter ant inspection in May, especially if you have older wood-frame construction or any moisture issues.",
      "Treat yellowjacket ground nests in July before colonies reach their peak August size and aggression.",
    ],
    costNote:
      "Manchester pest services typically start with a free inspection. Mouse programs include exclusion and trapping components and are best initiated in September. Tick barrier treatments are seasonal, usually May and September. Carpenter ant programs include a moisture assessment. Yellowjacket treatment is quoted per nest. Bed bug remediation is quoted by method and property size.",
    faqs: [
      {
        question: "How do I keep mice out of my Manchester home every fall?",
        answer:
          "The key is exclusion work done before October. House mice enter through gaps as small as a quarter inch, and Manchester's older homes have those gaps in abundance around foundation penetrations, utility lines, garage door seals, and brick mortar joints. A professional exclusion inspection in September identifies all the entry points. Sealing them with steel wool packed into the gap and then sealed with foam or caulk, or with metal mesh for larger gaps, stops the entry. Foam alone is not enough in a cold climate because freeze-thaw cycles crack it. Trapping handles the mice that have already entered; exclusion is what prevents the problem from recurring each fall.",
      },
      {
        question: "Is Lyme disease risk real in Manchester neighborhoods?",
        answer:
          "Yes. UNH Cooperative Extension has documented established deer tick populations throughout southern New Hampshire, including Hillsborough County. Lyme disease cases are reported each year in Manchester and the surrounding area. The risk is real in any yard with wooded edges, tall grass, or leaf litter. Tick barrier treatments applied to yard borders in May and September reduce the tick population in treated areas. The highest-risk period for nymphal ticks, which are the most commonly responsible for Lyme transmission because they are small and often missed, is May through June.",
      },
      {
        question: "What are the signs of carpenter ants in my Manchester home?",
        answer:
          "The most common signs in Manchester are large black ants appearing consistently indoors in April and May, emerging from the same location such as a baseboard, windowsill, or wall void. Finding coarse sawdust-like frass near a baseboard or in a basement corner is a clearer indicator of an established colony. Carpenter ants target moisture-damaged wood, so any area with a chronic leak, poor drainage at a sill plate, or condensation on a basement wall is a candidate. An inspection can probe the suspect areas to find the colony and the moisture source driving it.",
      },
      {
        question: "When are yellowjackets most active in Manchester?",
        answer:
          "Yellowjacket colonies reach their maximum size in August and early September, which is when workers are most numerous and most aggressive. Ground nests in Manchester yards are commonly discovered when lawn maintenance disturbs the entrance. The older homes of the South End and West Side also see wall void nests in aging siding and eave soffit areas. If you find a ground nest, mark the area clearly and arrange professional treatment rather than treating it yourself, particularly in August when disturbing the nest provokes a mass response.",
      },
      {
        question: "Are bed bugs common in Manchester rentals?",
        answer:
          "Manchester's rental housing density, particularly in the multi-family buildings near the Millyard and throughout the older neighborhoods, sustains steady bed bug activity. Frequent tenant turnover means regular new introductions. The most effective prevention for renters is inspecting any second-hand furniture, especially upholstered items and mattresses, before bringing them into the home. Know the signs: small dark spots on mattress seams, a sweet musty odor, and small reddish-brown bugs the size of an apple seed. Catching bed bugs early makes treatment significantly more straightforward than dealing with an established infestation.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Nashua", slug: "nashua" },
      { name: "Concord", slug: "concord-nh" },
      { name: "Lowell", slug: "lowell" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Manchester, NH | Mice, Carpenter Ants & Deer Ticks",
    metaDescription:
      "Manchester pest control for house mice, carpenter ants, yellowjackets, deer ticks and bed bugs. Hillsborough County Merrimack River mill city specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
