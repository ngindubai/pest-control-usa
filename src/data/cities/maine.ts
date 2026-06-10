import type { CityLocation } from "@/types";

// Maine city data. Pest intelligence verified against University of Maine
// Cooperative Extension and Maine CDC tick surveillance data.

export const maineCities: CityLocation[] = [
  {
    slug: "portland",
    name: "Portland",
    state: "Maine",
    stateSlug: "maine",
    stateAbbr: "ME",
    tier: "T2",
    population: "~68,000",
    county: "Cumberland County",
    climate: "cold-humid",
    climateDriver:
      "Portland sits on Casco Bay at the southern end of Maine's coast, where a maritime New England climate delivers genuine four-season weather: cold, snowy winters, mild springs, warm and humid summers, and spectacular falls. The surrounding coastal forests and the rivers flowing into Casco Bay create excellent deer tick habitat, and Maine CDC data consistently places the state among the top in the nation for Lyme disease burden. The city's older Victorian and Colonial-era housing stock, combined with a dense urban core, creates abundant opportunity for the indoor pests that define the cold-season calendar.",
    topPests: [
      "Deer Ticks",
      "House Mice",
      "Carpenter Ants",
      "Yellowjackets",
      "Bed Bugs",
    ],
    pestProfile: [
      {
        name: "Deer ticks (blacklegged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason:
          "Active whenever temperatures are above freezing, highest risk May through October",
        note:
          "Maine CDC surveillance data consistently places Maine among the states with the highest per-capita reported Lyme disease rates in the country. Cumberland County, including Portland and the surrounding communities, is in a high-risk zone for deer tick exposure. The coastal forests, the Eastern Prom park system, Fore River Sanctuary, and any wooded or brushy yard edge carry meaningful tick risk. Nymphal ticks, active May through July and the size of a poppy seed, are responsible for the majority of Lyme transmission cases.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason:
          "Year-round indoors, major surge September through November",
        note:
          "Portland's cold, snowy winters make heated structures essential for mice, and the fall push into buildings arrives reliably in September and October when temperatures begin dropping. The city's older housing stock, including the historic Victorian and Italianate homes of the West End, the Congress Street corridor, and the Munjoy Hill neighborhood, has more entry points at foundations and utilities than modern construction.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, most visible indoors in spring",
        note:
          "Carpenter ants are the dominant wood-destroying pest in Maine. University of Maine Cooperative Extension entomologists confirm black carpenter ants are found throughout the state and regularly infest moisture-damaged wood in Maine homes. Portland's coastal humidity, the city's older wood-frame housing, and the tree canopy across neighborhoods like Deering and Stroudwater sustain large outdoor colonies that find their way into structures through damp or decayed wood.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note:
          "Yellowjackets are a consistent warm-season pest in Portland and Cumberland County. They nest in the ground across lawns and parks, and in wall voids and attic spaces of older structures. Colonies grow through summer and become highly aggressive in August and September when they are at maximum size and defending large brood stores. The older residential neighborhoods near Back Cove and the Eastern Prom see high yellowjacket density.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note:
          "Bed bugs are present in Portland's rental housing, older apartment buildings, and hospitality sector. The city's college population, tourism traffic through its restaurant and hotel district, and density of older multi-family housing create consistent introduction pathways. University of Maine Extension confirms bed bugs are a growing concern across Maine.",
      },
    ],
    localHook:
      "Maine CDC data places Maine near the top of the nation for Lyme disease per capita, and Portland's position among coastal forests, parks, and the Fore River corridor means deer tick exposure is a real annual concern for homeowners and anyone using the city's extensive trail system.",
    intro:
      "Pest control in Portland, Maine, runs on two distinct calendars. The outdoor calendar is dominated by deer ticks, which carry Lyme disease at high rates across Cumberland County, and by yellowjackets that build up through the compressed warm season and peak in late summer. The indoor calendar is year-round: house mice in the older housing stock, carpenter ants in moisture-affected wood, and bed bugs in the rental sector. The defining seasonal event is the fall mouse surge, which is fast and reliable when Maine's October cold arrives. Understanding both calendars is what makes pest management here work.",
    sections: [
      {
        heading: "Lyme disease and deer ticks in Portland",
        body: "Maine CDC annual surveillance data shows Maine consistently near the top of national Lyme disease rankings on a per-capita basis, and Cumberland County is not exempt from that burden. Portland's parks and trail network, including the Eastern Promenade, Back Cove Trail, Fore River Sanctuary, and the wooded properties throughout the Deering, Parkside, and Stroudwater neighborhoods, create tick habitat that is part of daily life here. Deer ticks are active from early spring through late fall and even into winter on above-freezing days. The nymphal stage, active May through July, is the highest transmission risk because the ticks are poppy-seed sized and easy to miss during a tick check. The practical defenses are yard habitat management (leaf litter removal, trimmed brush at the yard edge, a gravel or wood chip border between lawn and wooded areas), professional perimeter spray treatment in spring and again in fall, and personal protection when in parks and wooded areas. If you are in an at-risk yard zone, checking for ticks after every outing is not overcaution, it is standard Maine practice.",
      },
      {
        heading: "Carpenter ants in Portland's older homes",
        body: "Portland's housing is old by American standards. The West End, Munjoy Hill, and the Congress Street neighborhoods are full of wood-frame homes built in the 19th and early 20th centuries, and those structures carry decades of moisture history in their wood. University of Maine Cooperative Extension identifies carpenter ants as the dominant wood-destroying pest in Maine. They excavate galleries in moist or decayed wood to nest, which means a carpenter ant problem almost always points to a moisture issue. The common signs are large black ants emerging from a consistent location indoors in spring, or coarse frass (sawdust-like material) near a window frame, sill plate, or where a wall meets the floor. Finding them in spring, when the colony becomes active again after overwintering in place, is the best time to treat: the colony is accessible and has not yet produced the swarmers that start new colonies.",
      },
    ],
    prevention: [
      "Remove leaf litter and trim brush at the yard edge each spring to reduce deer tick habitat and lower the risk of Lyme disease exposure.",
      "Seal foundation gaps, utility penetrations, and worn door sills in August or September before the fall mouse surge into Portland homes.",
      "Inspect wood around windows, door frames, and roof lines annually for moisture damage that attracts carpenter ant colonies.",
      "Treat yellowjacket ground nests in late June when colonies are still small and before they reach the dangerous August size.",
    ],
    costNote:
      "Portland pest pricing is standard New England range. Tick yard treatment is a spring and fall program and is often combined with mosquito barrier service. Carpenter ant programs include moisture assessment and colony treatment. Bed bug work is quoted after a free inspection. Start with an assessment to determine what your property needs by season.",
    faqs: [
      {
        question: "How serious is Lyme disease risk in Portland, Maine?",
        answer:
          "Significant. Maine CDC data consistently places Maine among the top states nationally for reported Lyme disease cases per capita. Cumberland County is a high-risk area for deer tick exposure, particularly in properties with wooded or brushy edges, and for residents using the city's parks and trail network. Nymphal ticks active from May through July are the highest-risk stage because they are tiny and easy to miss in a tick check. Professional perimeter spray in spring and fall, combined with yard habitat management, gives the best reduction in yard-level tick numbers.",
      },
      {
        question: "When do mice become a problem in Portland, Maine homes?",
        answer:
          "September and October are the main entry months. Maine's cold winters drive mice hard toward heated structures as temperatures drop, and the fall push is reliable and fast. Portland's older Victorian and Colonial-era housing has more foundation gaps, worn door sills, and aged utility penetrations than modern construction. Completing exclusion work in August or September, before the push begins, prevents problems more cost-effectively than dealing with an established population in November or December.",
      },
      {
        question: "Why do carpenter ants appear inside Portland homes in spring?",
        answer:
          "Carpenter ants overwinter in their nests and become active again as spring temperatures rise. Finding them indoors in spring usually means a colony is already established in the structure, most often in moisture-damaged wood around a leaking window frame, wet sill plate, or roof area with poor flashing. University of Maine Cooperative Extension identifies carpenter ants as Maine's primary wood-destroying pest. The spring emergence is the window to find and treat the colony. Addressing the moisture issue that sustains the wood damage prevents re-infestation.",
      },
      {
        question: "Are bed bugs common in Portland, Maine?",
        answer:
          "Bed bugs are present in Portland's rental housing, older apartment buildings, and the hospitality sector. The combination of a college population, tourism traffic, and older multi-family housing creates consistent introduction pathways. University of Maine Extension confirms bed bugs are a growing concern statewide. Acting at the first signs, small dark spots on bedding or bites in a line pattern, is important: small infestations are far less costly to treat than established ones.",
      },
      {
        question: "What should I do about yellowjackets in my Portland yard?",
        answer:
          "The most important timing is early. Treating yellowjacket ground nests in late June or early July, when colonies are small, is safer and more effective than dealing with a mature August nest. A mature yellowjacket colony can contain thousands of workers that will defend aggressively. For ground nests, a professional treatment at night when workers are in the nest is the standard approach. For wall void nests in older homes, professional treatment avoids the risk of driving workers into the living space through interior walls.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Boston", slug: "boston" },
      { name: "Augusta", slug: "augusta" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Portland, ME | Deer Ticks, Mice & Carpenter Ants",
    metaDescription:
      "Portland Maine pest control for deer ticks (Lyme disease), house mice, carpenter ants, yellowjackets and bed bugs. Cumberland County Casco Bay specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
