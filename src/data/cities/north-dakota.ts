import type { CityLocation } from "@/types";

// North Dakota city data. Pest intelligence verified against North Dakota State University
// Extension Service publications and local pest control records for the northern Great Plains.

export const northDakotaCities: CityLocation[] = [
  {
    slug: "fargo",
    name: "Fargo",
    state: "North Dakota",
    stateSlug: "north-dakota",
    stateAbbr: "ND",
    tier: "T2",
    population: "~125,000",
    county: "Cass County",
    climate: "cold",
    climateDriver:
      "Fargo sits in the Red River Valley at the border of North Dakota and Minnesota, one of the flattest and coldest metropolitan areas in the contiguous US. Winters are long and consistently subzero, forcing rodents indoors for months at a time. Spring snowmelt and the Red River's periodic flooding create ideal mosquito breeding conditions. Boxelder trees grow throughout the Fargo metro and sustain reliable fall boxelder bug invasions. Carpenter ants exploit moisture from the region's heavy snowmelt and the aging housing stock along the Red River corridor. NDSU Extension identifies rodents and boxelder bugs as the primary residential pest concerns in the Fargo metro.",
    topPests: [
      "House Mice",
      "Boxelder Bugs",
      "Carpenter Ants",
      "Mosquitoes",
      "Yellowjackets",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors September through May",
        note:
          "Fargo's winters are among the most extreme in the lower 48, and house mice respond by pushing into structures from September through the spring thaw. NDSU Extension identifies mice as the primary residential rodent pest in Cass County. The older residential neighborhoods along the Red River corridor provide significant outdoor harborage before mice move inside. Once they are in the walls, they stay through the entire heating season.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Aggregate September through October, emerge spring",
        note:
          "Boxelder trees are native to the Red River Valley and are common throughout Fargo's neighborhoods and streetscapes. The fall boxelder bug aggregations are one of the most recognized seasonal pest events in the Fargo area. Thousands of bugs collect on south-facing walls in September before moving into wall voids to overwinter. They emerge in late winter and spring when interior temperatures warm them up, appearing on walls and in windows throughout the home.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "May through August",
        note:
          "Carpenter ants are a significant structural pest in Fargo, particularly in older properties where decades of freeze-thaw cycles have worked moisture into wooden framing, sills, and soffits. They tunnel through damp or damaged wood and often indicate an underlying moisture problem. NDSU Extension documents carpenter ants as among the most common structural insects in eastern North Dakota. Finding them indoors in spring is a reliable prompt to check for moisture damage in the structure.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "June through August",
        note:
          "Fargo's flat topography means spring snowmelt and Red River flooding create extensive low-lying wet areas that become productive mosquito breeding habitat. The Fargo-Moorhead metro regularly ranks among the top mosquito-pressure metro areas in the upper Midwest in years following heavy snowmelt or flooding. The City of Fargo runs a municipal mosquito control program, but yard-level barrier spray programs provide additional protection for residential properties.",
      },
      {
        name: "Yellowjackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests grow May through September, most aggressive in August",
        note:
          "Yellowjacket and paper wasp nests build through Fargo's short but warm summer and reach peak size and aggressiveness in late August. Nests under decks, in soffits, and in the ground present the greatest risk when disturbed during late-season yard work. By September, worker populations peak and food competition drives increased aggression.",
      },
    ],
    localHook:
      "Fargo is one of the mosquito capitals of the upper Midwest in flood years, when the flat Red River Valley fills with snowmelt and standing water across thousands of acres. The city runs its own mosquito abatement program, which is a fairly unusual investment for a city of 125,000 and reflects how serious the seasonal pressure can be.",
    intro:
      "Pest control in Fargo tracks the seasons tightly, because the seasons here are extreme in both directions. Fall is the mouse and boxelder bug window: as soon as temperatures drop, both push hard into structures for warmth. Carpenter ants emerge in spring, often pointing to moisture in the older housing stock along the Red River corridor. Mosquitoes can be intense in years following heavy snowmelt and Red River flooding. Yellowjackets and paper wasps peak in late August. None of these are unusual problems, but the severity of Fargo's winters means the fall prevention window is narrower and more important than in most cities.",
    sections: [
      {
        heading: "Mice vs. boxelder bugs: same problem, different solution",
        body: "Both house mice and boxelder bugs push into Fargo homes in September for the same reason: the North Dakota winter is coming. But the solutions are different. Mice require physical exclusion, trapping, and exterior bait stations: the goal is to prevent entry and eliminate any that get through. Boxelder bugs require a perimeter spray timed in early September when they aggregate on exterior walls, plus sealing the gaps they use to enter wall voids. The practical thing about Fargo is that the timing for both services is identical. A late August or early September exclusion and perimeter visit addresses both simultaneously, before the hard freeze locks in whatever got through.",
      },
      {
        heading: "Why Fargo's Red River flooding drives mosquito season",
        body: "Fargo's flat Red River Valley geography means the spring floodplain does not drain quickly. In heavy snowmelt years, the shallow standing water across agricultural fields and low-lying areas surrounding the metro creates ideal mosquito egg development conditions. The city runs an aerial larvicide program over the worst breeding areas, but residential neighborhoods adjacent to parks and drainage infrastructure still experience significant mosquito pressure from June through August. A yard-level barrier spray targets the resting vegetation where adult mosquitoes shelter and reduces backyard populations by 80 to 90 percent through the season.",
      },
    ],
    prevention: [
      "Seal foundation, utility, and attic gaps in late August before the fall mouse and boxelder bug window.",
      "Treat exterior walls with a perimeter spray in early September when boxelder bugs aggregate.",
      "Address moisture in wooden frames and sills to remove carpenter ant harborage after spring thaw.",
      "Eliminate standing water on the property after snowmelt to reduce mosquito breeding.",
    ],
    costNote:
      "Fargo pest control is often structured around the two critical seasonal events: the fall exclusion and boxelder treatment in September, and the spring carpenter ant inspection following snowmelt. Mosquito programs run June through August for properties near parks and drainage areas. Year-round general pest programs make sense for multi-family buildings with German cockroach pressure.",
    faqs: [
      {
        question: "Are boxelder bug invasions bad in Fargo?",
        answer:
          "For properties with boxelder, silver maple, or ash trees nearby, yes. The aggregations on south-facing walls in September can involve hundreds to thousands of bugs. Once they are in the wall voids, they reemerge through cracks and electrical outlets throughout the winter. A perimeter spray in early September is the effective prevention window. By October, when they are already inside, the approach shifts to vacuum removal and finding the gaps they used to enter.",
      },
      {
        question: "When is the worst time of year for mice in Fargo?",
        answer:
          "October through March is the peak indoor mouse period in Fargo. The fall push starts in September when temperatures drop, and mice that got through the foundation or utility gaps over summer become active as outdoor food sources disappear. Exclusion sealing in August and September, before the seasonal pressure peaks, is the most cost-effective approach. Snap traps plus exterior bait stations handle any mice already present.",
      },
      {
        question: "Does Fargo have termites?",
        answer:
          "Eastern subterranean termites have a range that extends into the eastern Dakotas, though colony size and activity are limited by the cold winters. NDSU Extension acknowledges termite presence in eastern North Dakota. They are less of an immediate threat here than in the southern states, but annual inspections are still appropriate for older Fargo homes, particularly those with moisture problems or ground-to-wood contact.",
      },
      {
        question: "How bad can mosquitoes get near the Red River?",
        answer:
          "In high-snowmelt years when the Red River Valley floods, Fargo-area mosquito populations can be among the heaviest in the upper Midwest. The city runs an aerial larvicide program over the worst breeding areas, but residential yards adjacent to parks and drainage corridors still see significant pressure. Monthly barrier spray from June through August cuts yard mosquito populations substantially through the peak season.",
      },
      {
        question: "Are carpenter ants a serious structural risk in Fargo homes?",
        answer:
          "They can be, particularly in older homes where freeze-thaw cycles have introduced moisture into wooden framing. Carpenter ants tunnel through damp wood and, if left untreated over multiple seasons, can cause meaningful structural damage. Finding them indoors in spring should prompt both treatment and a moisture inspection, since addressing the damp wood is what prevents recurrence.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Moorhead", slug: "moorhead-mn" },
      { name: "West Fargo", slug: "west-fargo" },
      { name: "Wahpeton", slug: "wahpeton" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle:
      "Pest Control in Fargo, ND | Mice, Boxelder Bugs & Mosquitoes",
    metaDescription:
      "Fargo pest control for house mice, boxelder bugs, carpenter ants, mosquitoes and yellowjackets. Cass County Red River Valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
