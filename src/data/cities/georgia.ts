import type { CityLocation } from "@/types";

// Georgia seed cities. Pest data reflects humid subtropical Southeast patterns
// (University of Georgia Extension).

export const georgiaCities: CityLocation[] = [
  {
    slug: "atlanta",
    name: "Atlanta",
    state: "Georgia",
    stateSlug: "georgia",
    stateAbbr: "GA",
    tier: "T1",
    population: "~500,000",
    county: "Fulton County",
    climate: "hot-humid",
    climateDriver:
      "Atlanta is warm and humid with heavy summer rain and dense tree cover. Standing water and shade make it one of the best mosquito habitats of any major US city.",
    topPests: ["Mosquitoes", "Fire Ants", "Termites", "Cockroaches", "Rats"],
    pestProfile: [
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Spring through fall, long season",
        note: "Atlanta is repeatedly ranked among the worst US cities for mosquitoes. Heavy rain, shade, and standing water in a tree-filled city feed a long, intense season.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, surge after rain",
        note: "Fire ants are well established across Georgia and rebuild mounds quickly after rain, a sting hazard for children and pets.",
      },
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring, active much of the year",
        note: "Warm, humid conditions give Atlanta heavy subterranean termite pressure, with colonies active across much of the year.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "American roaches breed in mulch, crawl spaces, and sewers and move indoors in heat, while German roaches breed indoors in kitchens.",
      },
      {
        name: "Roof and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats use Atlanta's heavy tree cover to reach attics, while Norway rats burrow near foundations and drains.",
      },
    ],
    localHook:
      "Atlanta lands near the top of the national worst-mosquito lists almost every year. The mix of heavy rain, deep shade, and standing water in a tree-filled city is close to ideal for them.",
    intro:
      "Pest control in Atlanta starts with the mosquito. The city's warm, wet climate and dense tree canopy hold moisture and shade, which is exactly what mosquitoes need, and Atlanta regularly ranks among the worst US cities for them. Behind that, the humid Southeast brings heavy termite pressure and well-established fire ants. Roaches and rats round out the list. The long warm season means very little gets a real break, so steady protection works better here than waiting for a problem.",
    sections: [
      {
        heading: "Why Atlanta is a mosquito capital",
        body: "Three things stack up: frequent heavy rain, a dense tree canopy that holds shade and humidity, and countless small water-holding spots in yards and gutters. Together they give mosquitoes a long, intense season. The day-biting Asian tiger mosquito is common here. The most effective control removes standing water across the property and treats the shaded resting areas under decks and dense planting, not just the open lawn.",
      },
      {
        heading: "Termites and fire ants in the humid Southeast",
        body: "Subterranean termites are a heavy, year-round risk in this climate, reaching wood through mud tubes from the soil, so an annual inspection is the practical defense. Fire ants are firmly established across Georgia and rebuild mounds fast after rain, making them both a nuisance and a safety issue for families. Treating mounds early in the season keeps them from spreading across a yard.",
      },
    ],
    prevention: [
      "Remove standing water and clear gutters to cut the long mosquito season.",
      "Keep an annual termite inspection on the calendar given heavy local pressure.",
      "Treat fire ant mounds early before they spread across the lawn.",
      "Trim tree limbs back from the roof to block roof rats from the attic.",
    ],
    costNote:
      "With a long mosquito season, heavy termite pressure, and year-round fire ants, many Atlanta homes pair a recurring plan with seasonal mosquito service and an annual termite check. A free inspection sets the plan to your property.",
    faqs: [
      {
        question: "Why are mosquitoes so bad in Atlanta?",
        answer:
          "Atlanta regularly ranks among the worst US cities for mosquitoes because of frequent heavy rain, a dense tree canopy that holds shade and humidity, and abundant standing water in yards and gutters. The season is long, so removing standing water and treating shaded resting areas makes a real difference.",
      },
      {
        question: "Are termites a serious risk in Atlanta?",
        answer:
          "Yes. The warm, humid climate gives heavy subterranean termite pressure, with colonies active much of the year. They reach wood through mud tubes from the soil, and early signs are easy to miss, so an annual inspection is strongly recommended.",
      },
      {
        question: "Are fire ants common around Atlanta?",
        answer:
          "Yes, red imported fire ants are well established across Georgia. Their mounds rebuild quickly after rain and their stings are a hazard for children and pets, so treating mounds early in the season is worthwhile.",
      },
      {
        question: "How do roof rats get into Atlanta homes?",
        answer:
          "Atlanta's heavy tree cover gives roof rats easy routes along branches to the roofline, where they enter through gaps and vents. Trimming limbs back from the house and sealing roofline openings cuts off their access.",
      },
      {
        question: "Is year-round pest control necessary in Atlanta?",
        answer:
          "For most homes, yes. The long warm season keeps mosquitoes, termites, fire ants, and roaches active across much of the year, so a continuous plan holds them back better than occasional one-time visits.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Sandy Springs", slug: "sandy-springs" },
      { name: "Marietta", slug: "marietta" },
      { name: "Decatur", slug: "decatur" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Atlanta, GA | Mosquitoes, Termites & Fire Ants",
    metaDescription:
      "Atlanta pest control for mosquitoes, subterranean termites, fire ants, roaches and roof rats. Seasonal mosquito and termite plans, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "augusta",
    name: "Augusta",
    state: "Georgia",
    stateSlug: "georgia",
    stateAbbr: "GA",
    tier: "T2",
    population: "~200,000",
    county: "Richmond County",
    climate: "hot-humid",
    climateDriver:
      "Augusta sits on the fall line between the Georgia Piedmont and the coastal plain, on the Savannah River at the South Carolina border. The hot, humid climate produces long, warm growing seasons and mild winters. The Savannah River corridor and the Canal National Heritage Area create wetland and riparian habitat that sustains mosquitoes and sustained humidity that supports termite activity well into the fall. The city's significant tree canopy adds moisture retention.",
    topPests: ["Eastern Subterranean Termites", "Mosquitoes", "Fire Ants", "American Cockroaches", "Stink Bugs"],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms in spring, active year-round underground",
        note: "Eastern subterranean termites are active throughout Richmond County. Augusta's fall-line soils and the consistent humidity from the Savannah River corridor create favorable conditions for termite colonies that are active most of the year. The older housing stock in the Summerville, Olde Town, and Harrisburg neighborhoods carries elevated termite risk.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "March through October",
        note: "Augusta's position on the Savannah River and the Augusta Canal Heritage Area's waterways sustain mosquito breeding habitat throughout the warm season. Standing water in the river bottomlands and the drainage ditches of older neighborhoods extends breeding pressure from early spring to late October.",
      },
      {
        name: "Fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most visible spring through fall",
        note: "Red imported fire ants are present throughout Augusta's lawns and green spaces. The warm Georgia climate keeps them active much of the year. New development on former agricultural and piedmont land consistently produces elevated fire ant mound density in the first two to three seasons after construction.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, surge during rain",
        note: "American cockroaches live in Augusta's drainage system and organic leaf litter and push into homes during heavy rain. The older neighborhoods near downtown and the river have slab construction with more underground access points. Sealing floor drains and plumbing penetrations reduces indoor incursions.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "September through November entry, overwinter indoors",
        note: "Stink bugs are an increasing fall pest in Augusta and across the Central Savannah River Area. The agricultural and wooded land surrounding the city produces growing stink bug populations that move into structures as temperatures drop in fall.",
      },
    ],
    localHook:
      "Augusta is best known nationally for the Masters golf tournament, but the city's pest control season is shaped by the same Augusta Canal and Savannah River ecosystem that historically powered its mills. The river corridor's permanent wetlands sustain mosquito populations from early spring through October that are more persistent than the surrounding Piedmont cities.",
    intro:
      "Pest control in Augusta follows the Savannah River calendar. The river corridor and the Augusta Canal's water features sustain mosquito populations from March through October. Eastern subterranean termites work through the fall-line soils year-round in one of Georgia's historically active termite zones. Fire ants are in every yard. American cockroaches move from the storm drainage system into homes during wet weather. Stink bugs have become a significant fall nuisance across the Central Savannah River Area in recent years as the population has grown.",
    sections: [
      {
        heading: "Termites in Augusta's historic and older neighborhoods",
        body: "Augusta's older neighborhoods, including Summerville, Olde Town, and the areas around Broad Street, have housing stock that ranges from Victorian-era homes to mid-century construction. In Augusta's climate, older homes near the Savannah River and the Canal waterway system carry elevated termite risk from the moist soils along the riparian corridor. Annual inspections are the standard of care, and homes with crawl spaces or wood near grade should be the priority for proactive treatment. A termite protection plan is a standard part of home maintenance in Georgia's Central Savannah River region.",
      },
      {
        heading: "Mosquito season along the Augusta Canal corridor",
        body: "The Augusta Canal, a National Heritage Area, runs along the Savannah River and through the northwest part of the city. Its managed water level and the adjacent wetlands provide consistent mosquito breeding habitat through the warm season. Properties within half a mile of the canal and the river corridor see mosquito activity that extends earlier in spring and later in fall than properties in the inland neighborhoods. Perimeter barrier treatments targeting the vegetation around the home, combined with source reduction in the yard, give the best seasonal control.",
      },
    ],
    prevention: [
      "Maintain annual termite inspections, especially for older properties near the Savannah River corridor.",
      "Eliminate standing water in yard low spots, clogged gutters, and any container that holds rain.",
      "Seal plumbing penetrations and floor drain gaps to reduce American cockroach entry during rain.",
      "Seal window gaps and utility penetrations before September to limit fall stink bug entry.",
    ],
    costNote:
      "Augusta pest control typically starts with a free inspection. Termite programs are annual and strongly recommended. Mosquito programs run March through October. General pest programs for cockroaches, fire ants, ants, and spiders are quarterly.",
    faqs: [
      {
        question: "Are termites a serious concern in Augusta?",
        answer:
          "Yes. Augusta is in the Georgia Piedmont-coastal plain transition zone, and the moist soils along the Savannah River corridor sustain active termite populations throughout Richmond County. The warm, humid climate keeps termites active most of the year. Annual inspections are standard, and homes near the river, the canal, or any area with moist soils should have a proactive treatment plan in place.",
      },
      {
        question: "How long is mosquito season in Augusta?",
        answer:
          "March through October in most years. The Savannah River corridor and the Augusta Canal Heritage Area's waterways provide breeding habitat that extends the season beyond what yard source reduction alone can address. Properties near the canal or river see earlier spring activity and later fall activity. Perimeter barrier treatments are effective for the warm-season peak.",
      },
      {
        question: "Why are American cockroaches common in Augusta neighborhoods?",
        answer:
          "American cockroaches live in Augusta's drainage system, sewer infrastructure, and the moist leaf litter common in older wooded neighborhoods. They are primarily outdoor insects that move inside during rain events through drains, pipe gaps, and poorly sealed doors. The older parts of the city near downtown and the river have slab foundations with more underground access. Sealing floor drains, pipe penetrations, and door gaps significantly reduces indoor incursions.",
      },
      {
        question: "Are fire ants year-round in Augusta?",
        answer:
          "Georgia's mild winters do not eliminate fire ant colonies. Activity slows in cold months but rebounds quickly. New development in Augusta's growing outer neighborhoods consistently produces elevated fire ant mound pressure in the first seasons after construction. Broadcast bait treatment of the full lawn in spring and fall is more effective than treating individual mounds.",
      },
      {
        question: "What should I know about stink bugs in Augusta?",
        answer:
          "Brown marmorated stink bugs are an increasing fall nuisance across the Central Savannah River Area. They aggregate on exterior walls in September and October seeking warm overwintering sites and work through gaps around windows and utility penetrations. Sealing those gaps before September is the primary prevention. Indoors, do not crush them: the odor is significant. Vacuum them up or place them in soapy water.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Atlanta", slug: "atlanta" },
      { name: "Columbia", slug: "columbia" },
      { name: "Aiken", slug: "aiken" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Augusta, GA | Termites, Mosquitoes & Fire Ants",
    metaDescription:
      "Augusta pest control for subterranean termites, Savannah River mosquitoes, fire ants, cockroaches and stink bugs. Richmond County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
