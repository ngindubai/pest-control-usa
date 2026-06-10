import type { CityLocation } from "@/types";

// Delaware city data. Pest intelligence verified against University of Delaware
// Cooperative Extension (extension.udel.edu) and Delaware Health and Social Services.

export const delawareCities: CityLocation[] = [
  {
    slug: "wilmington",
    name: "Wilmington",
    state: "Delaware",
    stateSlug: "delaware",
    stateAbbr: "DE",
    tier: "T2",
    population: "~72,000",
    county: "New Castle County",
    climate: "temperate",
    climateDriver:
      "Wilmington sits in the Christina River valley in northern Delaware, at the edge of the Chesapeake and Delaware watershed. The mid-Atlantic temperate climate delivers hot, humid summers that support a long pest season, and cold but not extreme winters that allow subterranean termites and stink bugs to persist in the region. The city's position between Philadelphia and Baltimore, the Christina River, Brandywine Creek, and its older mid-century and Victorian housing stock create a pest environment that spans both indoor and outdoor seasonal pressures.",
    topPests: [
      "House Mice",
      "Brown Marmorated Stink Bugs",
      "Subterranean Termites",
      "German Cockroaches",
      "Mosquitoes",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, main push October through December",
        note:
          "Wilmington winters are cold enough that mice seek heated structures each fall, and the city's stock of older rowhouses, twins, and mid-century homes provides abundant entry points at foundation sill plates, utility penetrations, and aging door seals. University of Delaware Cooperative Extension confirms house mice are a primary fall-through-spring pest concern statewide.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion September through November, emerge in spring",
        note:
          "Wilmington and New Castle County are in a high-pressure zone for the invasive brown marmorated stink bug. The Mid-Atlantic region was the original entry point for this invasive insect, and Delaware populations are well established. They aggregate on warm building walls in September and push into wall voids and attic spaces to overwinter, re-emerging inside homes in late winter and spring when interior temperatures warm up.",
      },
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note:
          "Eastern subterranean termites are established in New Castle County and throughout Delaware. University of Delaware Extension confirms termites are present across the state, with Wilmington's older housing stock, including homes with crawl spaces, original wood framing, and soil-to-wood contact at older foundations, at meaningful risk. Spring swarms of winged termites are the most visible sign of an active colony.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are a consistent year-round concern in Wilmington's older multi-family housing, restaurant corridor, and commercial food service properties. They are entirely indoor insects in Delaware's climate and spread through shared walls and plumbing in the city's rowhouse blocks and apartment buildings. The downtown and Riverside neighborhood restaurant and bar districts sustain commercial cockroach pressure.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "May through September",
        note:
          "The Christina River, Brandywine Creek, and the tidal wetlands at the confluence of the two rivers near Wilmington's waterfront create significant mosquito habitat. Delaware DHSS monitors West Nile virus activity statewide, and New Castle County sees activity in most years. The Asian tiger mosquito, a daytime biter, is also established in Delaware.",
      },
    ],
    localHook:
      "Wilmington is in the heart of the Mid-Atlantic stink bug zone, the region where the brown marmorated stink bug first invaded North America, and fall infestations here can be substantial. The Christina River waterfront adds a strong mosquito season on top of the standard mid-Atlantic pest calendar.",
    intro:
      "Pest control in Wilmington covers the full mid-Atlantic seasonal range. Fall brings the double event that defines Delaware pest management: stink bugs aggregating on building exteriors before pushing into wall voids to overwinter, and house mice pressing into older homes as October temperatures drop. Summer belongs to mosquitoes along the Christina River and Brandywine Creek waterways. Subterranean termites are an ongoing structural risk in the city's older housing stock, German cockroaches are a year-round indoor concern in the restaurant corridor and multi-family buildings, and deer ticks add a tick-borne disease dimension in the wooded edges of Brandywine State Park and the Greenway trails.",
    sections: [
      {
        heading: "Stink bugs in Wilmington: the Mid-Atlantic invasion ground zero",
        body: "The brown marmorated stink bug first entered the US in the Allentown, Pennsylvania area in the mid-1990s, and the mid-Atlantic corridor including Delaware was among the first regions to experience heavy population buildup. Wilmington and New Castle County are in a well-established, high-pressure zone. The stink bug's fall pattern is predictable and annual: they aggregate on warm south-facing and west-facing building walls in late September, move into wall voids, attic spaces, and around window frames as temperatures drop, and reemerge inside homes on warm winter days and in early spring. The prevention window is September. A perimeter spray treatment while they are still aggregating outside, combined with sealing attic vents with fine mesh and caulking gaps around windows and utility lines, gives the best results. Once they are inside wall voids, the practical response shifts to vacuum removal when they appear indoors.",
      },
      {
        heading: "Termites in Wilmington's older housing",
        body: "University of Delaware Cooperative Extension confirms that Eastern subterranean termites are present across Delaware and active in New Castle County. Wilmington's housing stock includes many homes with older construction details that raise termite risk: crawl spaces, wood in contact with soil at older foundations, and aging structures that have had decades of exposure. Termite swarms, the emergence of winged reproductives in spring, are the most visible early sign of a colony, often occurring inside the home near windows on warm, still days in March through May. An annual inspection is the standard recommendation for Wilmington homeowners, particularly those with older homes or crawl spaces. Treatment for an active infestation typically involves a liquid soil treatment or bait system, both of which require professional application.",
      },
    ],
    prevention: [
      "Seal attic vents with fine mesh and caulk gaps around windows and utility lines before September to reduce stink bug entry into wall voids.",
      "Seal foundation gaps, pipe penetrations, and worn door sweeps in early October before the fall mouse surge into older Wilmington homes.",
      "Schedule an annual termite inspection for homes with crawl spaces or older construction details, given New Castle County's established termite pressure.",
      "Eliminate standing water in gutters, planters, and low yard areas before May to reduce mosquito breeding near the Christina River corridor.",
    ],
    costNote:
      "Wilmington pest control typically covers a year-round general plan with seasonal additions: stink bug exclusion in early fall, mosquito barrier service from May through September, and termite protection quoted separately after inspection. A free assessment determines the right scope for your home.",
    faqs: [
      {
        question: "Why are stink bugs so bad in Wilmington every fall?",
        answer:
          "The Mid-Atlantic corridor, including Delaware, was among the first US regions where the brown marmorated stink bug became established after entering the country in the 1990s. Populations are well developed in New Castle County, and the fall aggregation behavior is a predictable annual event. They seek warm overwintering sites in wall voids, attics, and around window frames. The prevention window is September: sealing exterior gaps and treating the perimeter while they are still outside gives the best results. Once inside, vacuum removal is the practical response.",
      },
      {
        question: "Are termites a real risk for Wilmington homeowners?",
        answer:
          "Yes. University of Delaware Cooperative Extension confirms Eastern subterranean termites are present throughout Delaware and New Castle County. Wilmington's older housing stock, including homes with crawl spaces, original wood framing, and aging foundation details, is at meaningful risk. Termite swarms in spring are the most visible sign. An annual inspection, particularly for older homes or those with crawl spaces, is the standard recommendation. Finding swarms indoors warrants an immediate professional inspection.",
      },
      {
        question: "When is mosquito season along the Brandywine Creek in Wilmington?",
        answer:
          "The active season runs from May through September, with peak pressure in July and August. The Christina River, Brandywine Creek, and the tidal wetlands at Wilmington's waterfront create habitat that sustains breeding populations through the summer. Delaware DHSS monitors West Nile virus activity in New Castle County annually, and the Asian tiger mosquito, a daytime biter, is established in the state. A monthly barrier spray program provides consistent yard protection through the season for properties near these water corridors.",
      },
      {
        question: "How do I stop mice from getting into my older Wilmington home?",
        answer:
          "The most effective approach is sealing entry points before October, when falling temperatures drive mice toward heated structures. Wilmington's older rowhouses and mid-century homes have more potential entry points than modern construction: gaps at foundation sill plates, around utility pipes, and under aging exterior door seals are the main pathways. Steel wool packed into gaps and sealed with caulk, new door sweeps where daylight shows under exterior doors, and metal mesh on crawl space vents are the standard exclusion materials. A professional exclusion inspection identifies gaps you may have missed.",
      },
      {
        question: "Are deer ticks a concern in Wilmington?",
        answer:
          "Deer ticks are present in New Castle County, particularly in the wooded edges of Brandywine Creek State Park, the Greenway trail corridor, and properties with wooded or brushy yard borders. Delaware sits within the geographic range of high Lyme disease burden across the mid-Atlantic. Residents who use Brandywine State Park or the Alapocas Run State Park trails, or whose yards back to wooded areas, should check for ticks after outdoor activities. Professional perimeter spray in spring and fall reduces tick numbers in yard zones.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Philadelphia", slug: "philadelphia" },
      { name: "Baltimore", slug: "baltimore" },
      { name: "Newark", slug: "newark" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Wilmington, DE | Stink Bugs, Termites & Mice",
    metaDescription:
      "Wilmington pest control for stink bugs, Eastern subterranean termites, house mice, German cockroaches and mosquitoes. New Castle County Christina River mid-Atlantic specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
