import type { CityLocation } from "@/types";

// Missouri. Pest data reflects humid continental Mississippi/Missouri River valley.
// Brown recluse range from University of Missouri Extension; termite pressure USDA map.

export const missouriCities: CityLocation[] = [
  {
    slug: "kansas-city",
    name: "Kansas City",
    state: "Missouri",
    stateSlug: "missouri",
    stateAbbr: "MO",
    tier: "T1",
    population: "~510,000",
    county: "Jackson County",
    climate: "hot-humid",
    climateDriver:
      "Kansas City straddles the Missouri and Kansas Rivers at the edge of the Central Plains. Hot humid summers, cold winters, and frequent late spring storms create ideal conditions for termites, mosquitoes, and the mid-continent pests that thrive in river valley bottomlands.",
    topPests: [
      "Termites",
      "Brown Recluse Spiders",
      "Mosquitoes",
      "Mice",
      "Ants",
    ],
    pestProfile: [
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms April through June, active spring through fall",
        note: "Missouri falls in the heavy to very heavy termite hazard zone on the USDA Forest Service map, and Kansas City is no exception. The Missouri and Kansas River valleys have productive soil conditions and high humidity that support large, aggressive termite colonies.",
      },
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, most active spring through fall",
        note: "Kansas City is in the core geographic range of the brown recluse. University of Missouri Extension confirms these spiders are common household pests in this region, found in garages, storage areas, closets, and anywhere undisturbed. This is not rare: it is a defining feature of the region's pest environment.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The Missouri and Kansas River floodplains and the numerous lakes and reservoirs in the metro area (Longview Lake, Jacomo Lake, Lake Lotawana) create extensive mosquito breeding habitat. West Nile virus activity has been recorded in Jackson County.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "Kansas City's cold winters push mice firmly indoors in October and November. The older neighborhoods of Westport, Waldo, and the River Market have housing stock with more entry points than modern construction.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, most active May through August",
        note: "Odorous house ants are the most common nuisance ant species in the Kansas City area, foraging widely in kitchens and bathrooms and producing a rotten coconut smell when crushed.",
      },
    ],
    localHook:
      "Kansas City sits in the heart of brown recluse territory. University of Missouri Extension is unambiguous: these spiders are common here, not rare. Combined with the Missouri Valley's heavy termite pressure and a solid six-month mosquito season from the river systems, pest control in KC addresses real, sustained risks.",
    intro:
      "Pest control in Kansas City means understanding that you are in brown recluse country. University of Missouri Extension is clear about this: the brown recluse is a common household pest in this region, regularly found in storage areas, garages, and closets across the metro. That is the starting point for understanding KC's pest environment. Subterranean termites add significant financial risk from the Missouri Valley's heavy pressure, mosquitoes run a solid six months from the river systems, and cold winters drive mice indoors every fall.",
    sections: [
      {
        heading: "Brown recluses: common, not rare",
        body: "Brown recluses get an outsized reputation because their bite can cause serious tissue damage in some cases. What is less well understood is that in Kansas City, encounters are common because the spider is genuinely abundant here. University of Missouri Extension has published this clearly: hundreds of brown recluses can cohabit with a family that has never been bitten, because the spider is not aggressive and avoids human contact. The practical response is reducing undisturbed harborage, treating regularly, and handling stored boxes and clothing with care. Living in fear of them is less useful than managing them sensibly.",
      },
      {
        heading: "Termite pressure in the Missouri Valley",
        body: "Missouri consistently appears on the heavy to very heavy end of the USDA termite hazard map. The Missouri and Kansas River valleys have the soil moisture content, mild winters, and organic soil that subterranean termites favor. A spring swarm of winged termites indoors is the most common first sign that a colony has matured. Annual inspections are the practical defense, and they are particularly important for homes with crawl spaces, older wood siding, or any structural wood in contact with or near soil.",
      },
    ],
    prevention: [
      "Store items in sealed plastic containers rather than cardboard boxes to reduce brown recluse harborage.",
      "Shake out shoes and gloves stored in the garage before putting them on.",
      "Schedule an annual termite inspection, especially for homes with crawl spaces.",
      "Remove standing water from yard features and containers to reduce the long mosquito season.",
    ],
    costNote:
      "Kansas City pest control is typically quoted as a general plan covering spiders, roaches, ants, and rodents, with termite protection quoted separately after inspection. Mosquito treatment is often added April through October. Start with a free inspection.",
    faqs: [
      {
        question: "Are brown recluse spiders really common in Kansas City?",
        answer:
          "Yes. University of Missouri Extension confirms Kansas City is in the core geographic range of the brown recluse, and they are genuinely common household pests here. Hundreds can live in a home without ever being seen, because they are not aggressive and prefer undisturbed areas. Treating regularly and reducing undisturbed harborage in storage areas is the practical defense.",
      },
      {
        question: "How high is the termite risk in Kansas City?",
        answer:
          "Very high. Missouri falls in the heavy to very heavy zone on the USDA termite hazard map. The Missouri and Kansas River valleys are particularly favorable for subterranean termite activity. Annual inspections are strongly recommended, particularly for homes with crawl spaces, older wood-frame construction, or wood near the foundation.",
      },
      {
        question: "How long is the mosquito season in Kansas City?",
        answer:
          "Roughly April through October, with peak pressure in June through August. The Missouri and Kansas River floodplains and the numerous lakes in the metro area provide significant breeding habitat. West Nile virus has been recorded in Jackson County in past seasons.",
      },
      {
        question: "When do mice come inside in Kansas City?",
        answer:
          "House mice begin moving into buildings as temperatures drop in October and November. Kansas City's cold winters trigger a fast, significant surge. Sealing foundation gaps, pipe penetrations, and utility lines in September prevents them from getting established before the cold arrives.",
      },
      {
        question: "What is the most important pest concern for a new homeowner in KC?",
        answer:
          "An annual termite inspection is the most critical scheduled action given the Missouri Valley's heavy pressure. Understanding that brown recluse spiders are common and taking sensible precautions around storage areas is equally important. Both risks are manageable with routine attention.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Overland Park", slug: "overland-park" },
      { name: "Independence", slug: "independence" },
      { name: "St. Louis", slug: "st-louis" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Kansas City, MO | Brown Recluse, Termites & Mosquitoes",
    metaDescription:
      "Kansas City pest control for brown recluse spiders, subterranean termites, mosquitoes, mice and ants. River Valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "st-louis",
    name: "St. Louis",
    state: "Missouri",
    stateSlug: "missouri",
    stateAbbr: "MO",
    tier: "T1",
    population: "~295,000",
    county: "St. Louis City",
    climate: "hot-humid",
    climateDriver:
      "St. Louis sits at the confluence of the Mississippi and Missouri Rivers, creating an enormous floodplain that feeds one of the most productive mosquito environments in the Midwest. The humid continental climate, hot summers, and river bottomlands also sustain heavy termite and rodent pressure.",
    topPests: [
      "Brown Recluse Spiders",
      "Termites",
      "Mosquitoes",
      "Cockroaches",
      "Mice",
    ],
    pestProfile: [
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, most active spring through fall",
        note: "St. Louis sits in the densest part of the brown recluse's range in North America. University of Missouri Extension confirms they are a common household pest throughout the region. Homes in the older St. Louis neighborhoods with substantial storage spaces and undisturbed areas are particularly likely to have established populations.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms April through June, active spring through fall",
        note: "Missouri is in the heavy to very heavy termite hazard zone. St. Louis's many older brick and wood-frame homes along the Soulard, Lafayette Square, and Cherokee Street corridors have seen decades of termite exposure, and the river bottomland soils are favorable for large colonies.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October, peak pressure May through September",
        note: "The Mississippi and Missouri River confluence creates one of the largest floodplain mosquito habitats in the Midwest. After spring flooding, standing water can persist in low-lying areas for weeks, producing significant mosquito pressure. West Nile virus activity has been recorded in the St. Louis metro area.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in St. Louis apartment buildings and commercial settings. American cockroaches are common in the basement and drainage infrastructure of the older city neighborhoods.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "St. Louis's cold winters push mice into buildings in October. The older housing stock in the city's historic neighborhoods has more entry points than modern construction, making fall exclusion work important.",
      },
    ],
    localHook:
      "St. Louis sits at the confluence of the Mississippi and Missouri Rivers, two of the continent's largest river systems, and that means one of the most significant floodplain mosquito habitats in the Midwest. Add the fact that the city is in the densest part of the brown recluse's range and has heavy termite pressure from Missouri's river valley soils, and this is a city with a genuinely demanding pest environment.",
    intro:
      "Pest control in St. Louis is shaped by two defining facts: the city sits where the Mississippi and Missouri Rivers meet, creating massive floodplain mosquito habitat, and it is in the heart of brown recluse country. University of Missouri Extension is clear that brown recluse spiders are common throughout this region, not occasional finds. The river confluence and the humid summers also sustain heavy subterranean termite pressure, German cockroaches are a year-round indoor presence, and mice push indoors when the cold arrives every fall.",
    sections: [
      {
        heading: "The river confluence and mosquito season",
        body: "The Mississippi and Missouri Rivers meeting at St. Louis creates an extensive floodplain that holds standing water after spring flooding, sometimes for weeks. That translates directly into peak mosquito pressure from May through September. The city's many parks along the riverfront and the low-lying areas of North St. Louis and East St. Louis (across in Illinois) all contribute. Removing standing water on your own property, treating resting areas under decks and in dense planting, and using a perimeter spray program reduces exposure significantly.",
      },
      {
        heading: "Brown recluses and older St. Louis homes",
        body: "St. Louis is in the core of brown recluse range, and the city's older housing stock, with its basements, attics, and storage-dense Victorian and Craftsman architecture, provides abundant undisturbed harborage. The spiders are not aggressive but are genuinely present in many homes, and University of Missouri Extension studies have found them in substantial numbers in older residential properties. The practical approach is regular perimeter and interior treatment, storage in sealed plastic rather than open cardboard boxes, and care when reaching into undisturbed areas.",
      },
    ],
    prevention: [
      "Store belongings in sealed plastic containers in basements and attics to reduce brown recluse harborage.",
      "Clear standing water promptly after rain events to reduce the significant river-valley mosquito season.",
      "Schedule an annual termite inspection given Missouri's heavy termite pressure.",
      "Seal gaps around utilities and the foundation in September before the fall mouse surge.",
    ],
    costNote:
      "St. Louis pest control is commonly quoted as a year-round general pest plan covering spiders, roaches, and rodents, with termite protection and mosquito treatment quoted separately. Start with a free inspection.",
    faqs: [
      {
        question: "How common are brown recluse spiders in St. Louis?",
        answer:
          "Very common. St. Louis is in the densest part of the brown recluse's North American range. University of Missouri Extension has documented them as genuine household pests throughout the region, not rare occurrences. Older homes with basements and significant storage space are particularly likely to have established populations. Regular treatment and reducing undisturbed storage areas are the practical defenses.",
      },
      {
        question: "Why is the mosquito problem so significant in St. Louis?",
        answer:
          "The Mississippi and Missouri River confluence creates one of the largest floodplain mosquito habitats in the Midwest. Spring flooding leaves standing water in low-lying areas for weeks, which directly produces large mosquito populations. West Nile virus activity has been recorded in the St. Louis metro, and the peak season runs May through September.",
      },
      {
        question: "Is termite risk high in St. Louis?",
        answer:
          "Yes. Missouri is in the heavy to very heavy termite hazard zone on the USDA map. The river bottomland soils and high humidity favor large subterranean termite colonies. The older housing stock in the historic neighborhoods has had decades of exposure. Annual inspections are strongly recommended.",
      },
      {
        question: "Are cockroaches year-round in St. Louis?",
        answer:
          "Yes. German cockroaches are entirely indoor insects and are not affected by the cold winters. American cockroaches are common around basement drains and sewer access points year-round. The cold winters do not reduce indoor cockroach pressure.",
      },
      {
        question: "When do mice become a problem in St. Louis?",
        answer:
          "The surge typically arrives in October and November as temperatures drop. St. Louis winters are cold enough to drive mice firmly into heated buildings. Sealing gaps around pipes, utilities, and the foundation in September, before the cold arrives, is the most effective preventive step.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Kansas City", slug: "kansas-city" },
      { name: "Springfield", slug: "springfield" },
      { name: "East St. Louis", slug: "east-st-louis" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle:
      "Pest Control in St. Louis, MO | Brown Recluse, Termites & Mosquitoes",
    metaDescription:
      "St. Louis pest control for brown recluse spiders, subterranean termites, river-season mosquitoes, cockroaches and mice. Free inspection. Call 1-800-PEST-USA.",
  },
];
