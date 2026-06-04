import type { CityLocation } from "@/types";

// Virginia. Pest data reflects humid subtropical coastal and Piedmont conditions.
// Mosquito data from City of Virginia Beach Mosquito Control Program.

export const virginiaCities: CityLocation[] = [
  {
    slug: "virginia-beach",
    name: "Virginia Beach",
    state: "Virginia",
    stateSlug: "virginia",
    stateAbbr: "VA",
    tier: "T1",
    population: "~460,000",
    county: "Virginia Beach City",
    climate: "hot-humid",
    climateDriver:
      "Virginia Beach's 38-mile coastline, the Back Bay National Wildlife Refuge, and extensive tidal marshland create one of the most productive mosquito environments in Virginia. The humid subtropical climate means termites and other warm-season pests are active from March through November.",
    topPests: [
      "Mosquitoes",
      "Termites",
      "Stink Bugs",
      "Cockroaches",
      "Ants",
    ],
    pestProfile: [
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October, peak pressure June through September",
        note: "Virginia Beach's extensive coastal marshland, the Back Bay refuge, and the many tidal channels and drainage features across the resort city create one of the highest mosquito pressures in Virginia. The city operates an active Mosquito Control Program. Both Aedes and Culex mosquitoes are present; Culex species can carry West Nile virus, which has been recorded in the Virginia Beach area.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "The coastal Virginia humidity and warm climate create elevated subterranean termite pressure. Virginia Beach and the Hampton Roads area consistently appear in higher termite hazard categories. Homes with crawl spaces or wood in contact with moist coastal soil are at real risk.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion (Sept to Nov), overwintering indoors",
        note: "Virginia is one of the mid-Atlantic states most affected by the stink bug invasion. Virginia Beach homes near wooded areas and the Chesapeake Bay corridor see significant fall invasions as the insects seek overwintering sites.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round in the mild coastal climate",
        note: "The coastal warmth and humidity sustain American cockroach activity year-round in Virginia Beach, where they are common around drainage infrastructure and in the moist, sheltered areas under decks and in crawl spaces.",
      },
      {
        name: "Odorous house ants and fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Odorous house ants are the most common nuisance species indoors. Red imported fire ants are present in the Hampton Roads area and pose a sting risk in yards, particularly after rain events when mounds become more visible.",
      },
    ],
    localHook:
      "Virginia Beach has 38 miles of coastline and hundreds of acres of tidal marsh. That geography is the reason the city runs its own professional Mosquito Control Program. For residents living near the Back Bay, the Chesapeake Bay corridor, or the tidal channels through the resort area, mosquitoes are not a background nuisance. They are a six-month management challenge.",
    intro:
      "Pest control in Virginia Beach starts with the geography. The 38-mile coast, the Back Bay National Wildlife Refuge, and the hundreds of acres of tidal marshland create one of the most significant mosquito environments in Virginia. The city operates its own Mosquito Control Program for good reason. Beyond mosquitoes, the humid coastal climate sustains elevated subterranean termite pressure, the mid-Atlantic stink bug season hits hard in fall, and American cockroaches are active year-round in the warmth.",
    sections: [
      {
        heading: "Why the mosquito pressure is so high near the coast",
        body: "Virginia Beach is not just a coastal city in climate terms. The Back Bay National Wildlife Refuge on the southern edge of the city and the tidal marshes running through the resort area provide ideal, protected breeding habitat that is largely outside human control. The city's Mosquito Control Program treats public areas, but private yards, particularly those adjacent to wooded areas, marshland, or drainage channels, require individual management. Removing standing water, treating shaded resting areas under decks and in dense planting, and using a barrier spray program are the practical steps for residential properties.",
      },
      {
        heading: "Stink bugs and the fall arrival",
        body: "Virginia Beach homeowners near wooded areas and the Chesapeake Bay corridor tend to see significant stink bug invasions each fall. The brown marmorated stink bug entered Virginia through the mid-Atlantic corridor and is now well-established across the state. They enter homes in September and October through gaps around windows, utility penetrations, and eaves. They cause no structural damage and do not bite, but they produce a noticeable odor when handled or crushed. Sealing entry points before September is the most effective prevention.",
      },
    ],
    prevention: [
      "Remove standing water from drainage features and containers regularly through the long mosquito season.",
      "Seal gaps around windows, eaves, and utility penetrations before September to reduce stink bug entry.",
      "Keep an annual termite inspection on the calendar given the elevated Hampton Roads pressure.",
      "Treat fire ant mounds as they appear in the yard after rain events.",
    ],
    costNote:
      "Virginia Beach pest control is often quoted as a general year-round plan with seasonal mosquito service added April through October. Termite protection is quoted separately after inspection. Start with a free assessment.",
    faqs: [
      {
        question: "Why does Virginia Beach have such a serious mosquito problem?",
        answer:
          "The city's 38-mile coastline, the Back Bay National Wildlife Refuge, and extensive tidal marshland create some of the most productive mosquito breeding habitat in Virginia. The city operates its own Mosquito Control Program, which treats public areas. Private yards, especially near marshland and drainage channels, require individual management.",
      },
      {
        question: "Are termites a real concern in Virginia Beach?",
        answer:
          "Yes. The coastal Virginia humidity and warm climate put the Hampton Roads area in an elevated termite hazard category. Subterranean termites swarm in spring, and homes with crawl spaces or any structural wood near the moist coastal soil are at real risk. Annual inspections are recommended.",
      },
      {
        question: "When do stink bugs arrive in Virginia Beach homes?",
        answer:
          "The fall invasion typically begins in September and continues through November as the insects seek overwintering sites. They enter through the smallest gaps around windows, doors, utility lines, and eaves. Sealing these points before September is the most effective prevention. They are harmless but produce an odor when disturbed.",
      },
      {
        question: "Are American cockroaches active year-round in Virginia Beach?",
        answer:
          "Yes. The mild coastal climate sustains American cockroach activity year-round. They are particularly common around drainage infrastructure, crawl spaces, and the moist, sheltered areas under decks and mulched planting beds. German cockroaches are the dominant indoor species in commercial and multi-family settings.",
      },
      {
        question: "Does Virginia Beach have fire ants?",
        answer:
          "Yes. Red imported fire ants are present in the Hampton Roads area and appear in yards and open areas across Virginia Beach. They rebuild mounds quickly after rain events and are a sting risk for children and pets. Treating mounds as they appear keeps the population manageable.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Norfolk", slug: "norfolk" },
      { name: "Chesapeake", slug: "chesapeake" },
      { name: "Hampton", slug: "hampton" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Virginia Beach, VA | Mosquitoes, Termites & Stink Bugs",
    metaDescription:
      "Virginia Beach pest control for coastal mosquitoes, subterranean termites, stink bugs, cockroaches and fire ants. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "norfolk",
    name: "Norfolk",
    state: "Virginia",
    stateSlug: "virginia",
    stateAbbr: "VA",
    tier: "T1",
    population: "~235,000",
    county: "Norfolk City",
    climate: "hot-humid",
    climateDriver:
      "Norfolk sits at the mouth of the Chesapeake Bay in the Hampton Roads area, surrounded by water on multiple sides. The low-lying coastal geography, the tidal waterways, the naval port, and the humid subtropical climate combine to create high mosquito, termite, and rodent pressure with frequent tidal flooding.",
    topPests: ["Mosquitoes", "Termites", "Rats", "Cockroaches", "Stink Bugs"],
    pestProfile: [
      {
        name: "Mosquitoes (including salt marsh species)",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October, peak June through September",
        note: "Norfolk's tidal waterways, surrounding marshland, and frequent flooding create high mosquito pressure. Salt marsh mosquitoes travel inland from the marshes. The city participates in regional mosquito control, and West Nile virus has been recorded in the area.",
      },
      {
        name: "Subterranean and Formosan termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms spring through summer, active most of the year",
        note: "The coastal Virginia humidity and warm climate create elevated termite pressure across Hampton Roads. Formosan termites, an aggressive invasive species, have been found in the region, alongside native subterranean termites.",
      },
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Norfolk's naval port, dense older neighborhoods, and waterfront infrastructure sustain Norway rat pressure. Port environments worldwide support resident rat populations that spread into surrounding areas.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round in the mild coastal climate",
        note: "The coastal warmth and humidity sustain American cockroach activity year-round, common around drainage, crawl spaces, and the moist areas under decks. German cockroaches dominate indoors in multi-family housing.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion (Sept to Nov), overwintering indoors",
        note: "Virginia is among the states most affected by the stink bug invasion. Norfolk homes near wooded areas see fall invasions as the insects seek overwintering sites.",
      },
    ],
    localHook:
      "Norfolk is surrounded by water on nearly every side, with tidal waterways threading through the city and frequent flooding that comes with the low-lying coastal geography. That water is the reason mosquitoes and termites are such persistent challenges here, more so than in a typical inland city.",
    intro:
      "Pest control in Norfolk is shaped by water in a way few cities match. Sitting at the mouth of the Chesapeake Bay with tidal waterways threading through low-lying ground, Norfolk faces two contrasting but related pressures: the seasonal mosquito surge from the marshes and tidal flooding, versus the year-round termite and rodent pressure from the warm humid climate and the naval port. The frequent flooding ties them together, creating standing water for mosquitoes and moisture that favors termites and drives rats to higher ground.",
    sections: [
      {
        heading: "Tidal flooding: the thread connecting Norfolk's pests",
        body: "Norfolk's low-lying coastal geography means tidal flooding is a regular event, and it connects several of the city's pest problems. The standing water it leaves breeds mosquitoes, including the salt marsh species that travel inland. The persistent ground moisture favors subterranean termites. And flooding drives rats from below-ground harborage up toward buildings. By contrast with a dry inland city where these pests operate independently, in Norfolk the water cycle links them, which means moisture management around the home addresses several pests at once.",
      },
      {
        heading: "Seasonal mosquitoes versus year-round termites and rats",
        body: "Norfolk's pests operate on two different clocks. Mosquitoes are sharply seasonal, peaking from June through September with the warm weather and tidal flooding, then fading. Termites and rats, by contrast, are year-round concerns: the mild coastal climate keeps termite colonies active most of the year, and the naval port sustains a constant rat presence. The practical implication is mixed timing: seasonal mosquito management that ramps up in spring, versus continuous termite monitoring and rodent exclusion that runs all year.",
      },
    ],
    prevention: [
      "Remove standing water after tidal flooding and rain to reduce the coastal mosquito season.",
      "Schedule annual termite inspections given the elevated Hampton Roads pressure and Formosan termite presence.",
      "Seal foundation gaps and keep harborage clear to limit port-area Norway rat pressure.",
      "Seal window and eave gaps before September to reduce stink bug fall entry.",
    ],
    costNote:
      "Norfolk pest control is commonly quoted as a year-round general plan with seasonal mosquito service, and termite protection and rodent exclusion quoted separately. Start with a free inspection.",
    faqs: [
      {
        question: "Why is the mosquito problem so significant in Norfolk?",
        answer:
          "Norfolk's tidal waterways, surrounding marshland, and frequent flooding create high mosquito pressure, including salt marsh species that travel inland from the marshes. The city participates in regional mosquito control, and West Nile virus has been recorded in the area. Removing standing water after flooding and rain, and treating resting areas, reduces exposure.",
      },
      {
        question: "Are Formosan termites in Norfolk?",
        answer:
          "Formosan termites, an aggressive invasive species, have been found in the Hampton Roads region alongside native subterranean termites. The coastal humidity and warm climate keep colonies active most of the year. Annual inspections are strongly recommended given the elevated pressure and the faster damage Formosan colonies can cause.",
      },
      {
        question: "Does the naval port affect Norfolk's rat problem?",
        answer:
          "Yes. Port environments worldwide sustain resident rat populations, and Norfolk's naval port, combined with dense older neighborhoods and waterfront infrastructure, supports Norway rat pressure that spreads into surrounding areas. Effective control combines building exclusion, harborage removal, and baiting.",
      },
      {
        question: "How does flooding make pest problems worse in Norfolk?",
        answer:
          "Tidal flooding leaves standing water that breeds mosquitoes, creates persistent ground moisture that favors termites, and drives rats from below-ground harborage toward buildings. The water cycle links several pest problems, which is why moisture management around the home is especially valuable here.",
      },
      {
        question: "Is year-round pest control necessary in Norfolk?",
        answer:
          "For termites, rats, and cockroaches, generally yes, since the mild coastal climate keeps them active most of the year. Mosquitoes are seasonal but significant. A year-round plan with seasonal mosquito service is the practical approach for most Norfolk homes.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Virginia Beach", slug: "virginia-beach" },
      { name: "Chesapeake", slug: "chesapeake" },
      { name: "Portsmouth", slug: "portsmouth" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Norfolk, VA | Mosquitoes, Termites & Rats",
    metaDescription:
      "Norfolk pest control for coastal and salt marsh mosquitoes, subterranean and Formosan termites, port-area rats, cockroaches and stink bugs. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "richmond",
    name: "Richmond",
    state: "Virginia",
    stateSlug: "virginia",
    stateAbbr: "VA",
    tier: "T1",
    population: "~230,000",
    county: "Richmond City",
    climate: "hot-humid",
    climateDriver:
      "Richmond sits on the James River in central Virginia, in a humid subtropical climate with hot summers, mild winters, and the river and its tributaries running through the city. The humidity sustains termites and mosquitoes, and the city's historic housing stock and mature tree canopy shape the pest picture.",
    topPests: ["Termites", "Mosquitoes", "Rats", "Stink Bugs", "Cockroaches"],
    pestProfile: [
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "Central Virginia has significant subterranean termite pressure, and Richmond's historic housing stock, much of it older wood-frame and brick construction, has had decades of exposure. The humid climate keeps colonies active across the warm season.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The James River, its tributaries, and the city's parks and low-lying areas create mosquito breeding habitat. The Asian tiger mosquito, an aggressive daytime biter, is well established in central Virginia. West Nile virus has been recorded in the region.",
      },
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Richmond's older urban neighborhoods, aging infrastructure, and the food service industry sustain Norway rat pressure, particularly in the dense historic districts.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion (Sept to Nov), overwintering indoors",
        note: "Virginia is among the states most affected by the stink bug invasion. Richmond homes, particularly older ones with gaps around windows and eaves, see significant fall invasions.",
      },
      {
        name: "German and American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Richmond's apartments and the historic multi-family housing. American cockroaches are common in basements and drainage in the older neighborhoods.",
      },
    ],
    localHook:
      "Richmond's historic housing is one of the city's defining features, and it carries a pest cost: the older wood-frame and brick homes of the Fan, Church Hill, and Jackson Ward have had decades of termite exposure and offer plenty of gaps for stink bugs and rodents to exploit each year.",
    intro:
      "Pest control in Richmond reflects the city's history and its river setting. The contrast that defines it is between the year-round structural risk of termites in the historic housing stock and the seasonal pressures of mosquitoes in summer and stink bugs in fall. The James River and its tributaries drive a solid mosquito season, including the aggressive Asian tiger mosquito, while the older neighborhoods sustain both termite and rat pressure. Matching the response to each pest's timing keeps a Richmond home manageable.",
    sections: [
      {
        heading: "Why are termites such a concern in the question of older Richmond homes?",
        body: "Richmond's historic neighborhoods, the Fan, Church Hill, Jackson Ward, and others, are full of older wood-frame and brick homes that have had decades of subterranean termite exposure. Central Virginia has significant termite pressure, and the humid climate keeps colonies active across the warm season. Older homes with crawl spaces, original wooden sill plates, and wood near soil are particularly exposed. The first sign of an established colony is usually a spring swarm of winged termites indoors. Annual inspections are the practical defense and are well worth it for the city's historic housing.",
      },
      {
        heading: "Summer tiger mosquitoes versus fall stink bugs",
        body: "Richmond's seasonal pests hand off through the year. In summer, the Asian tiger mosquito, an aggressive daytime biter well established in central Virginia, drives the outdoor pest experience, breeding in small containers of water around the home and in the river-fed habitat. Then in fall, as temperatures drop, the brown marmorated stink bug takes over, invading homes through gaps around windows and eaves to seek overwintering sites. The responses differ: tiger mosquitoes call for eliminating standing water in small containers, while stink bugs call for sealing entry points before September.",
      },
    ],
    prevention: [
      "Schedule an annual termite inspection given central Virginia's pressure and Richmond's older housing stock.",
      "Eliminate small containers of standing water to control the daytime-biting Asian tiger mosquito.",
      "Seal window and eave gaps before September to reduce stink bug fall entry.",
      "Seal foundation gaps and keep harborage clear to limit Norway rat pressure in older neighborhoods.",
    ],
    costNote:
      "Richmond pest control is commonly quoted as a year-round general plan with seasonal mosquito service, and termite protection quoted separately after inspection. Start with a free assessment.",
    faqs: [
      {
        question: "Why are termites a big concern in Richmond's historic homes?",
        answer:
          "Central Virginia has significant subterranean termite pressure, and Richmond's historic neighborhoods are full of older wood-frame and brick homes that have had decades of exposure. The humid climate keeps colonies active across the warm season. Older homes with crawl spaces and wood near soil are particularly exposed. Annual inspections are strongly recommended.",
      },
      {
        question: "What is the Asian tiger mosquito and is it in Richmond?",
        answer:
          "The Asian tiger mosquito is an aggressive daytime biter well established in central Virginia, including Richmond. Unlike many mosquitoes, it bites during the day and breeds in small containers of water around the home. Eliminating standing water in containers, planters, and gutters is the most effective control. West Nile virus has been recorded in the region.",
      },
      {
        question: "When do stink bugs invade Richmond homes?",
        answer:
          "The fall invasion typically begins in September and continues through November as the insects seek overwintering sites. Older Richmond homes with gaps around windows and eaves see the most activity. Virginia is among the states most affected by the stink bug invasion. Sealing entry points before September is the most effective prevention.",
      },
      {
        question: "Is there a rat problem in Richmond?",
        answer:
          "Yes, particularly in the dense historic districts. Richmond's older urban neighborhoods, aging infrastructure, and food service industry sustain Norway rat pressure. Effective control combines sealing the building against entry, removing harborage and food sources, and baiting.",
      },
      {
        question: "Do I need year-round pest control in Richmond?",
        answer:
          "For termites, rats, and cockroaches, generally yes, since they are year-round concerns. Mosquitoes and stink bugs are seasonal but significant. A year-round plan with seasonal mosquito service and an annual termite inspection is the practical approach for most Richmond homes.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Norfolk", slug: "norfolk" },
      { name: "Chesterfield", slug: "chesterfield" },
      { name: "Henrico", slug: "henrico" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Richmond, VA | Termites, Mosquitoes & Stink Bugs",
    metaDescription:
      "Richmond pest control for subterranean termites, Asian tiger mosquitoes, Norway rats, stink bugs and cockroaches. Historic-home specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
