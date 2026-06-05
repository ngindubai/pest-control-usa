import type { CityLocation } from "@/types";

// South Dakota city data. Pest intelligence verified against South Dakota State University
// Extension Service and local pest control records for the upper Great Plains.

export const southDakotaCities: CityLocation[] = [
  {
    slug: "sioux-falls",
    name: "Sioux Falls",
    state: "South Dakota",
    stateSlug: "south-dakota",
    stateAbbr: "SD",
    tier: "T2",
    population: "~192,000",
    county: "Minnehaha County",
    climate: "cold",
    climateDriver:
      "Sioux Falls sits in the Big Sioux River valley at the eastern edge of the Great Plains, where continental air masses bring some of the most extreme temperature swings in the country. Winters are hard, with sustained subzero stretches that drive rodents deep into structures for warmth. The summer rebound is warm and humid enough to sustain mosquitoes along the river corridor. Boxelder trees are common throughout Minnehaha County, and the fall boxelder bug invasions are a reliable annual event. Subterranean termites are present in eastern South Dakota, though the cold winters limit colony sizes compared to the southern states.",
    topPests: [
      "House Mice",
      "Boxelder Bugs",
      "Carpenter Ants",
      "Mosquitoes",
      "German Cockroaches",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors September through April",
        note:
          "Sioux Falls winters are among the most demanding in the continental US, and house mice respond by pressing hard into structures the moment fall temperatures drop. The Big Sioux River corridor and the city's older neighborhoods give mice plenty of ground-level harborage before they test the foundation and utility gaps. A mouse that gets through a gap the diameter of a pencil can be in the walls before the first hard freeze.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Aggregate September through October, emerge in spring",
        note:
          "Boxelder trees are common throughout Minnehaha County's residential neighborhoods, and the boxelder bug invasions in Sioux Falls are a well-documented fall event. Thousands of bugs aggregate on south-facing walls in September before pushing into wall voids and attics to overwinter. They reemerge from walls in spring as temperatures warm. A perimeter treatment in early September combined with sealing exterior gaps is the effective prevention window.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through September",
        note:
          "Carpenter ants are common in Sioux Falls, particularly in properties near the Big Sioux River greenway and in older neighborhoods where moisture has worked on wooden sills and frames over decades. They tunnel through damp or damaged wood to build nests, and finding them indoors in spring typically signals a moisture issue in the structure. South Dakota State University Extension identifies carpenter ants as a significant structural pest across eastern South Dakota.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "June through August",
        note:
          "The Big Sioux River and the numerous parks and green spaces throughout Sioux Falls sustain mosquito populations through the summer months. The city's active outdoor culture, with trails, parks, and the Falls Park area as gathering points, brings residents into contact with peak mosquito activity. Barrier spray programs from June through August provide consistent yard-level protection.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are the primary indoor cockroach concern in Sioux Falls, concentrated in the multi-family housing stock and restaurant kitchens. They do not survive outdoors in South Dakota winters, so indoor colonies are entirely structural and self-contained. They spread between units through shared walls and plumbing and require gel bait and IGR treatment to stop the breeding cycle.",
      },
    ],
    localHook:
      "Sioux Falls is the fastest-growing city in South Dakota, and with that growth comes an expanding older housing stock and an urban tree canopy heavy in boxelder trees, both of which drive the city's most distinctive seasonal pest pattern: the annual fall boxelder bug invasion that sends thousands of red-and-black bugs into walls, attics, and living rooms each September.",
    intro:
      "Pest control in Sioux Falls tracks two distinct seasons. Fall brings the boxelder bug rush and the mouse push, both triggered by dropping temperatures and the biological imperative to find shelter before winter. Carpenter ants emerge in spring, often pointing to moisture issues in the structure. Mosquitoes run through the summer along the Big Sioux River corridor. German cockroaches are the steady indoor problem in apartments and commercial kitchens year-round. The seasonal pattern is predictable, and getting ahead of it in late August and early September is consistently the most effective approach.",
    sections: [
      {
        heading: "The fall pest rush: boxelder bugs and mice on the same schedule",
        body: "In September, two things happen in Sioux Falls at roughly the same time. Boxelder bugs aggregate on south-facing walls and start pushing through any gap into wall voids and attics. And mice, sensing the drop in temperature, begin testing every gap at the foundation and along utility lines. These two pressures arrive together because they are both driven by the same signal: the approach of a South Dakota winter. The most cost-effective response treats both at once: a perimeter spray targeting the boxelder bug aggregation combined with a foundation and utility gap sealing visit before the first hard freeze. Waiting until they are already inside means more labor and more time to clear the problem.",
      },
      {
        heading: "Carpenter ants in eastern South Dakota: the moisture indicator",
        body: "Finding carpenter ants in a Sioux Falls home in April or May is not a coincidence. Carpenter ants tunnel through damp wood, and the combination of spring snowmelt, older wooden construction in many Sioux Falls neighborhoods, and the Big Sioux River valley humidity creates reliable conditions for moisture problems in frames, sills, and crawlspaces. The treatment that lasts addresses both the ant colony and the moisture source driving it. A treatment that kills the visible ants but leaves the wet wood in place will be followed by another carpenter ant problem the following spring.",
      },
    ],
    prevention: [
      "Seal foundation, utility, and soffit gaps in late August before the fall boxelder and mouse rush.",
      "Treat perimeter in early September when boxelder bugs begin aggregating on exterior walls.",
      "Address moisture in wooden sills, crawlspaces, and frames to remove carpenter ant harborage.",
      "Eliminate standing water in yards and gutters to reduce mosquito breeding through the summer.",
    ],
    costNote:
      "Sioux Falls pest control often focuses on fall exclusion and perimeter treatment as the highest-value single visit, covering both boxelder bugs and mice before they enter. Spring follow-up for carpenter ants and summer mosquito programs complete the seasonal cycle for most homes. Year-round programs make sense for multi-family buildings and commercial kitchens with German cockroach pressure.",
    faqs: [
      {
        question: "Are boxelder bug invasions really as bad as people say in Sioux Falls?",
        answer:
          "For properties near boxelder, silver maple, or ash trees, yes. The aggregations that form on south-facing walls in September can number in the thousands. Once they push into wall voids and attics, they reemerge through ceiling fixtures and wall outlets all winter as temperatures fluctuate. A perimeter treatment in early September and sealing exterior gaps is the window that prevents the overwintering invasion. By October, the opportunity has passed and removal becomes the only option.",
      },
      {
        question: "When should I expect mice in my Sioux Falls home?",
        answer:
          "The mouse push in Sioux Falls typically starts in September when overnight temperatures begin dropping toward 40 degrees. By October the invasion is well underway. Mice press through gaps as small as a quarter inch, and once they're in the walls they're harder to remove than to exclude. The practical approach is exclusion sealing in late August or early September, ahead of the seasonal pressure.",
      },
      {
        question: "Are there termites in Sioux Falls?",
        answer:
          "Eastern subterranean termites are present in eastern South Dakota, including the Sioux Falls area. The cold winters limit colony growth compared to the southern states, but they do cause structural damage over time. South Dakota State University Extension identifies termites as present across the eastern part of the state. Annual inspections are recommended for homes in Sioux Falls, particularly older properties with ground-to-wood contact or moisture issues.",
      },
      {
        question: "How long is mosquito season in Sioux Falls?",
        answer:
          "The practical mosquito season in Sioux Falls runs from June through August, occasionally extending into September in warm years. The Big Sioux River corridor and the city's parks sustain breeding habitat through the summer. Monthly barrier spray programs from June through August provide reliable protection for yards and outdoor areas during the peak season.",
      },
      {
        question: "Why do German cockroaches spread between apartments in Sioux Falls?",
        answer:
          "German cockroaches are entirely indoor insects in South Dakota. They cannot survive outside during winter, so infestations are confined to warm structures and spread through shared walls and plumbing between units. A treatment in one apartment that does not address adjacent units typically sees roaches return within weeks as colonies from neighboring spaces recolonize. Coordinated treatment across affected units is consistently more effective than single-unit treatment.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Brandon", slug: "brandon-sd" },
      { name: "Harrisburg", slug: "harrisburg-sd" },
      { name: "Tea", slug: "tea-sd" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle:
      "Pest Control in Sioux Falls, SD | Mice, Boxelder Bugs & Carpenter Ants",
    metaDescription:
      "Sioux Falls pest control for house mice, boxelder bugs, carpenter ants, mosquitoes and German cockroaches. Minnehaha County Big Sioux River specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
