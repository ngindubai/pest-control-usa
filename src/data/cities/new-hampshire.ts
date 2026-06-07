import type { CityLocation } from "@/types";

// New Hampshire city data. Pest intelligence verified against UNH Cooperative Extension
// and New Hampshire DHHS tick surveillance data.

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
      "Manchester sits along the Merrimack River in south-central New Hampshire. The cold-humid New England climate delivers genuine winters with snow and extended cold that suppress many outdoor pests for months. However, the surrounding forests and the Merrimack River valley sustain high deer tick populations that carry Lyme disease, and New Hampshire consistently ranks among the top states nationally for reported Lyme disease cases. The city's older mill buildings and mixed residential stock, ranging from historic triple-deckers near the Merrimack to newer suburban construction, creates a varied pest habitat from urban to semi-rural.",
    topPests: [
      "Deer Ticks",
      "House Mice",
      "Carpenter Ants",
      "German Cockroaches",
      "Yellowjackets",
    ],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason:
          "Active whenever temperatures are above freezing, highest risk May through October",
        note:
          "New Hampshire DHHS tick surveillance data consistently places the state among the top tier nationally for reported Lyme disease cases. The forested areas and wooded parks surrounding Manchester, the Merrimack River corridor, and properties that back to brushy or wooded land carry meaningful deer tick risk. UNH Cooperative Extension's tick research program is an active resource for residents navigating tick exposure.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason:
          "Year-round indoors, strong push into structures September through November",
        note:
          "House mice are the dominant year-round rodent pest in Manchester. New Hampshire winters are cold enough to make heated structures essential for mice, and the fall push into buildings is reliable and fast. Manchester's older housing stock, including the mill-era triple-deckers and row houses near the Amoskeag millyard, has more entry points than newer construction.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason:
          "Active May through September, most visible indoors in spring",
        note:
          "Carpenter ants are the dominant wood-destroying insect in New Hampshire. UNH Cooperative Extension entomologist Dr. Alan Eaton has documented that black carpenter ants are widespread across the state and commonly infest moist or damaged wood in homes. Manchester's older wood-frame housing and the proximity to the Merrimack River's wooded corridor sustain large outdoor colonies that find their way into structures through moist or damaged wood.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are present in Manchester's multi-family housing, commercial kitchens, and restaurants. They are entirely indoor insects in New Hampshire's climate and do not come from outside. They spread through shared walls, plumbing voids, and utility runs in multi-unit buildings.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note:
          "Yellowjackets are a significant summer and fall pest in Manchester and the broader Hillsborough County area. They nest in the ground, in wall voids of older structures, and under eaves. Colonies peak in August and September, when workers become highly aggressive. The older neighborhoods near the Merrimack with mature landscaping and older structure voids see the highest yellowjacket density.",
      },
    ],
    localHook:
      "New Hampshire DHHS tracks Lyme disease cases annually, and the state consistently appears near the top of national rankings for Lyme disease per capita. Manchester's position in the forested Merrimack Valley means that tick risk is real for homeowners with wooded or brushy yards, for families using the city's parks and trail systems, and for anyone working in landscaping or outdoor maintenance. Deer ticks are active from early spring through late fall, and nymphal ticks, the size of a poppy seed, are easy to miss.",
    intro:
      "Pest control in Manchester runs on two separate timelines. The outdoor calendar is driven by deer ticks, which carry Lyme disease at high rates in New Hampshire, and by yellowjackets that establish colonies in the compressed warm season and peak in late summer. The indoor calendar is year-round: house mice in the mill-era housing stock, carpenter ants in older wood-frame structures near the Merrimack, and German cockroaches in the multi-family and commercial food service spaces downtown. The mouse push in fall is reliable, and the carpenter ant pressure in spring is a consistent structural concern in a city where so much of the housing is older wood-frame construction.",
    sections: [
      {
        heading: "Deer ticks and Lyme disease in the Merrimack Valley",
        body: "New Hampshire's Lyme disease burden is real and documented. NH DHHS publishes annual case data showing the state among the top tier nationally for Lyme disease cases per capita. The deer tick, which carries Lyme as well as anaplasmosis and babesiosis, is found throughout the forested areas of Hillsborough County and in the wooded and brushy edges of Manchester's neighborhoods and parks. Tick risk is concentrated in areas where wooded or brushy habitat meets the lawn or garden: the yard margin, the trail edge, the brushy area under the deck. Deer ticks cannot jump or fly. They crawl onto hosts from vegetation at ankle and knee height. The practical defenses are yard habitat management (leaf litter removal, trimmed brush at the yard edge, wood chip or gravel borders between lawn and wooded areas), professional perimeter spray treatment in spring and fall, and personal protection (repellent, long pants, tick checks) when in wooded areas. The nymphal ticks active from May through July are the highest disease transmission risk because they are tiny and easy to miss.",
      },
      {
        heading: "Carpenter ants in Manchester's older housing",
        body: "Carpenter ants are the dominant wood pest in New Hampshire, and Manchester's housing stock gives them ample opportunity. The city's mill-era triple-deckers, craftsman homes, and older wood-frame structures near the Amoskeag millyard and the Merrimack riverfront carry more moisture-affected wood than newer construction. Carpenter ants do not eat wood. They excavate it, creating smooth galleries in damp or rotting wood for nesting. The signs of an established colony inside the house are large black ants, up to half an inch long, emerging from a consistent location indoors in spring, and coarse frass (sawdust-like material) near the infestation site. Finding them inside in spring usually indicates a colony established in moisture-damaged wood, typically around a leaking window, a wet sill plate, or a roof area with inadequate flashing. Treatment targets the colony, and the moisture problem that sustains it must be addressed to prevent re-infestation.",
      },
    ],
    prevention: [
      "Remove leaf litter and trim brush at the yard edge each spring to reduce deer tick habitat near the home.",
      "Seal foundation gaps, utility penetrations, and door sills in September before the fall mouse push.",
      "Inspect wood around windows, door frames, and roof lines annually for moisture damage that attracts carpenter ants.",
      "Treat yellowjacket ground nests in late June or July when colonies are still small and before they reach dangerous August size.",
    ],
    costNote:
      "Manchester pest pricing is standard New England range. Tick yard programs are spring and fall treatments and can be combined with mosquito barrier service. Carpenter ant programs include moisture assessment and colony treatment. Mouse exclusion and trapping programs are quoted after a free inspection. Yellowjacket treatment is per nest, most cost-effective in July.",
    faqs: [
      {
        question: "How serious is Lyme disease risk in the Manchester area?",
        answer:
          "Significant. New Hampshire consistently appears among the top states nationally for reported Lyme disease cases per capita, according to NH DHHS annual surveillance reports. The Merrimack Valley and Hillsborough County carry meaningful tick risk, particularly for properties with wooded or brushy yard edges and for residents who use the area's trails and parks. Nymphal ticks are the highest-risk stage because they are tiny (poppy seed size) and easy to miss. Checking for ticks after every outdoor outing and treating the yard boundary in spring and fall are the practical defenses.",
      },
      {
        question: "Why do carpenter ants seem to come out of nowhere in spring in Manchester?",
        answer:
          "They are not coming from nowhere: they are emerging from a colony that has been in the wood through winter. Carpenter ants overwinter in their nests and become visible indoors in spring as temperatures rise and the colony becomes active again. Finding them inside in spring means a colony is established in or very near the structure, typically in damp or moisture-damaged wood. The spring emergence is the best time to find them and treat the colony before it grows further.",
      },
      {
        question: "When do mice become a problem in Manchester homes?",
        answer:
          "September and October are the main entry months. New Hampshire winters are cold enough that mice actively seek heated shelter as temperatures drop. Manchester's older housing with more foundation gaps, worn door sills, and utility penetrations is more exposed than newer construction. Completing exclusion work in August or early September, before the push begins, prevents the problem more cost-effectively than dealing with an established population in November.",
      },
      {
        question: "Are German cockroaches common in Manchester homes?",
        answer:
          "They are present but less common in single-family homes than in multi-family housing and commercial food service. German cockroaches are indoor insects that do not survive outside in New Hampshire winters. They are introduced through infested boxes, appliances, secondhand furniture, and building-to-building spread in multi-unit housing. Once established they breed rapidly. Gel bait treatment is significantly more effective than spray for German cockroaches because it reaches the colony rather than just surface insects.",
      },
      {
        question: "Are yellowjackets worse near the Merrimack River in Manchester?",
        answer:
          "The wooded corridors along the Merrimack and the older residential neighborhoods near the river do see higher yellowjacket density than the open suburban areas, because they have more mature landscaping, older structures with wall voids, and ground cover that suits nesting. Yellowjacket ground nests in yard areas and wall void nests in older structures are both common near the river corridor. Treating nests in late June or July, before they reach the dangerous August peak, is both safer and more effective.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Nashua", slug: "nashua" },
      { name: "Concord", slug: "concord-nh" },
      { name: "Boston", slug: "boston" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle:
      "Pest Control in Manchester, NH | Deer Ticks, Mice & Carpenter Ants",
    metaDescription:
      "Manchester pest control for deer ticks, house mice, carpenter ants, German cockroaches and yellowjackets. New Hampshire Lyme disease specialists. Merrimack Valley. Free inspection. Call 1-800-PEST-USA.",
  },
];
