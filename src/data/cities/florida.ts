import type { CityLocation } from "@/types";

// Florida seed cities. Pest data reflects subtropical/tropical South Florida
// patterns (University of Florida IFAS Extension, Miami-Dade climate).

export const floridaCities: CityLocation[] = [
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    tier: "T1",
    population: "~450,000",
    county: "Miami-Dade County",
    climate: "tropical",
    climateDriver:
      "Miami is warm and wet year-round, with no real cold season to knock pest numbers back. Whatever is active in July is usually still active in January.",
    topPests: ["Termites", "Mosquitoes", "Cockroaches", "Ants", "Rats"],
    pestProfile: [
      {
        name: "Termites (subterranean, drywood and Formosan)",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms spring through summer, risk year-round",
        note: "Miami sits in one of the highest termite-pressure zones in the country, with three damaging types active. Drywood termites infest furniture and roof timbers without ever touching soil.",
      },
      {
        name: "Aedes aegypti mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Year-round",
        note: "The yellow fever mosquito breeds in tiny containers of water and bites by day. Miami-Dade saw local Zika transmission in 2016 and treats this species as a public-health priority.",
      },
      {
        name: "American cockroaches (palmetto bugs)",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "Locals call them palmetto bugs. They thrive in the heat and humidity and fly toward lights on summer evenings.",
      },
      {
        name: "Ghost and big-headed ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Several tropical ant species do well in South Florida and form sprawling, multi-nest colonies that are hard to knock out with store-bought bait.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats nest in palms, attics, and dense landscaping and move easily between buildings in dense neighborhoods.",
      },
    ],
    localHook:
      "Most US cities get a winter that resets the pest clock. Miami does not. Termites and mosquitoes here run all twelve months, which changes how you have to defend a home.",
    intro:
      "Pest control in Miami comes down to one fact: there is no off-season. The warmth and humidity that make the city what it is also keep termites, mosquitoes, and roaches active all year. Compared with a northern city, where pests retreat each winter, Miami homes need continuous protection rather than a seasonal blitz. Termites are the headline risk, with three damaging types in play, but the day-to-day battle is mosquitoes and palmetto bugs.",
    sections: [
      {
        heading: "Year-round pressure versus a northern winter",
        body: "In a cold-winter city, a hard freeze ends the mosquito season and slows everything else. Miami never gets that reset. By contrast, the species here simply keep breeding, so a one-time treatment fades fast. The approach that works is steady, with the perimeter and entry points handled on a schedule rather than sprayed once and forgotten.",
      },
      {
        heading: "Three termite types, not one",
        body: "Most cities worry about a single termite type. Miami has three that matter: native subterranean, invasive Formosan, and drywood. Subterranean and Formosan come up from the soil, whereas drywood termites live entirely inside wood and can arrive in infested furniture. That difference changes the treatment, which is why an inspection here identifies the type before any work begins.",
      },
    ],
    prevention: [
      "Tip out anything holding water, even bottle caps, to deny Aedes mosquitoes a breeding site.",
      "Have an annual termite inspection given the three damaging types active locally.",
      "Screen vents and seal roofline gaps to keep roof rats out of attics.",
      "Keep mulch and dense planting back from the walls to reduce ant and roach harborage.",
    ],
    costNote:
      "Because nothing here has an off-season, Miami homes usually do best on a year-round plan. Termite protection is priced separately from general pest control, and both start with a free inspection so the quote matches your property.",
    faqs: [
      {
        question: "Why does Miami have such a termite problem?",
        answer:
          "South Florida sits in one of the highest termite-pressure regions in the United States, and Miami has three damaging types active: native subterranean, invasive Formosan, and drywood. The year-round warmth means there is no season when the risk drops, so annual inspections are strongly recommended.",
      },
      {
        question: "Are mosquitoes a health risk in Miami?",
        answer:
          "The Aedes aegypti mosquito here can carry viruses, and Miami-Dade recorded local Zika transmission in 2016. The county treats it as a public-health priority. Removing standing water and treating shaded resting areas reduces both the bites and the risk.",
      },
      {
        question: "What are palmetto bugs?",
        answer:
          "Palmetto bug is the local name for the large American cockroach. They thrive in Miami's heat and humidity, breed outdoors, and fly toward lights on warm evenings before working their way indoors.",
      },
      {
        question: "Do drywood termites need different treatment?",
        answer:
          "Yes. Drywood termites live entirely inside wood and do not need soil contact, unlike subterranean and Formosan termites. That means a soil barrier alone will not stop them, so the inspection identifies the type before recommending treatment.",
      },
      {
        question: "Is year-round pest control necessary in Miami?",
        answer:
          "For most homes, yes. Without a cold winter to reduce numbers, pests stay active all year, so a continuous plan holds them back far better than occasional one-time visits.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Hialeah", slug: "hialeah" },
      { name: "Coral Gables", slug: "coral-gables" },
      { name: "Fort Lauderdale", slug: "fort-lauderdale" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Miami, FL | Termites, Mosquitoes & Roaches",
    metaDescription:
      "Miami pest control for termites, Aedes mosquitoes, palmetto bugs, tropical ants and roof rats. Year-round protection, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    tier: "T1",
    population: "~970,000",
    county: "Duval County",
    climate: "hot-humid",
    climateDriver:
      "Jacksonville sits on the northeast Florida coast, warm and humid with heavy summer rain and the St. Johns River winding through it. The long warm season and standing water keep mosquitoes and termites busy most of the year.",
    topPests: ["Mosquitoes", "Cockroaches", "Termites", "Fire Ants", "Fleas"],
    pestProfile: [
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Nearly year-round",
        note: "The St. Johns River, coastal marshes, and heavy rain give Jacksonville a long mosquito season, and the county runs an active mosquito control district.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "The large American roaches, often called palmetto bugs, breed in mulch, drains, and crawl spaces and move indoors in the heat and humidity.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring, active much of the year",
        note: "North Florida has heavy subterranean termite pressure, and the warm, humid climate keeps colonies active across much of the year.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, surge after rain",
        note: "Fire ants are widespread across the area and rebuild mounds quickly after rain, a sting hazard for children and pets.",
      },
      {
        name: "Fleas",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Year-round in the warm climate",
        note: "The mild climate lets fleas stay active all year, a bigger problem here than in places with a real winter freeze.",
      },
    ],
    localHook:
      "Jacksonville's warm coastal climate barely pauses for winter, so the mosquitoes off the St. Johns River and the termites in the soil keep working through much of the year.",
    intro:
      "Pest control in Jacksonville is set by the warm, humid coast. With the St. Johns River, nearby marshes, and heavy summer rain, the city has a long mosquito season, and the county runs an active control district for good reason. Subterranean termites are the quiet, expensive risk in this climate, while palmetto bugs, fire ants, and year-round fleas are the everyday battle. There is no real winter to reset things, so steady, year-round protection works better here than waiting for a problem to appear.",
    sections: [
      {
        heading: "Why is mosquito season so long here?",
        body: "Jacksonville has water almost everywhere: the river, coastal marshes, retention ponds, and the standing water left by heavy summer rain. That gives mosquitoes a long, active season, and the county runs a mosquito control district to manage it. Around the home, the most effective step is removing standing water, even small amounts in plant trays and gutters, and treating the shaded resting spots under decks and dense planting.",
      },
      {
        heading: "How big a risk are termites in North Florida?",
        body: "Significant. Subterranean termites are heavy across the Jacksonville area and stay active much of the year in this warm, humid climate. They reach wood through mud tubes from the soil, and the early signs are easy to miss. An annual inspection is the practical defense, especially for homes with crawl spaces or any wood in contact with soil.",
      },
    ],
    prevention: [
      "Remove standing water and clear gutters to cut the long mosquito season.",
      "Keep an annual termite inspection on the calendar given North Florida pressure.",
      "Treat fire ant mounds early before they spread across the yard.",
      "Treat pets, home, and yard together to break the year-round flea cycle.",
    ],
    costNote:
      "Because the warm season runs most of the year, many Jacksonville homes use a recurring plan with seasonal mosquito service, and termite protection quoted separately after inspection. Start with a free assessment.",
    faqs: [
      {
        question: "Why is mosquito season so long in Jacksonville?",
        answer:
          "The St. Johns River, coastal marshes, and heavy summer rain leave standing water across the area, and the warm climate keeps mosquitoes active most of the year. The county runs an active mosquito control district. Removing standing water and treating shaded resting areas around the home reduces the bites.",
      },
      {
        question: "Are termites a big risk in Jacksonville?",
        answer:
          "Yes. North Florida has heavy subterranean termite pressure, and the warm, humid climate keeps colonies active much of the year. They reach wood through mud tubes from the soil, and early signs are easy to miss, so an annual inspection is recommended.",
      },
      {
        question: "What are palmetto bugs?",
        answer:
          "Palmetto bug is the local name for the large American cockroach. They breed outdoors in mulch, drains, and crawl spaces and move indoors in the heat and humidity. Reducing moisture and mulch against the home and sealing entry points keeps them out.",
      },
      {
        question: "Do fleas stay active all year in Jacksonville?",
        answer:
          "Yes. Without a winter freeze to reduce the population, fleas can persist year-round around pets, yards, and crawl spaces. Treating the pet, home, and yard together is the reliable way to stop them coming back.",
      },
      {
        question: "Is year-round pest control necessary here?",
        answer:
          "For most homes, yes. The long warm season keeps mosquitoes, termites, roaches, and fleas active across much of the year, so a continuous plan holds them back better than occasional one-time visits.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Orange Park", slug: "orange-park" },
      { name: "St. Augustine", slug: "st-augustine" },
      { name: "Miami", slug: "miami" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Jacksonville, FL | Mosquitoes, Termites & Roaches",
    metaDescription:
      "Jacksonville pest control for mosquitoes, palmetto bugs, subterranean termites, fire ants and year-round fleas. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "tampa",
    name: "Tampa",
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    tier: "T1",
    population: "~400,000",
    county: "Hillsborough County",
    climate: "tropical",
    climateDriver:
      "Tampa has a subtropical climate with a pronounced wet season from June through October when over half the annual rainfall arrives. The Tampa Bay watershed, the Hillsborough River, and extensive wetlands create significant mosquito habitat during the long wet season, and the year-round warmth sustains termite and cockroach activity continuously.",
    topPests: [
      "Termites",
      "Mosquitoes",
      "Cockroaches",
      "Fire Ants",
      "Fleas",
    ],
    pestProfile: [
      {
        name: "Subterranean and drywood termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms spring through summer, risk year-round",
        note: "University of Florida IFAS Extension confirms Tampa Bay is in a high termite pressure zone. Subterranean termites are the primary structural threat; drywood termites are also present and infest wood without soil contact. Annual inspections are standard practice for Tampa homeowners.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Year-round, peak pressure June through October",
        note: "Tampa's wet season, which runs June through October, produces sustained mosquito breeding across the Tampa Bay watershed, the Hillsborough River, and the many retention ponds throughout Hillsborough County. Hillsborough County runs an active mosquito management program. West Nile virus and other mosquito-borne diseases have been recorded in the region.",
      },
      {
        name: "American cockroaches (palmetto bugs)",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "Large American cockroaches, locally called palmetto bugs, are year-round in Tampa's warm, humid climate. They breed outdoors in mulch and drainage areas and move indoors readily. German cockroaches are the indoor species in apartments and commercial kitchens.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active spring through fall",
        note: "Fire ants are widespread across Hillsborough County and rebuild mounds quickly after the heavy rains that define the Tampa wet season. They are a sting risk in yards and parks.",
      },
      {
        name: "Fleas",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Year-round",
        note: "Tampa's warm climate sustains flea populations year-round with no winter reduction. Treating the pet, the home, and the yard together is required to break the cycle.",
      },
    ],
    localHook:
      "Tampa's wet season, which runs five months from June through October, drops more than half the city's annual rainfall in a concentrated burst. That creates one of the most productive mosquito seasons in Florida. Hillsborough County operates its own mosquito management program specifically because of the sustained pressure from the bay watershed and the city's extensive wetlands.",
    intro:
      "Pest control in Tampa is defined by the wet season. From June through October, more than half of Tampa's annual rainfall arrives in intense storms that fill the Tampa Bay watershed, the Hillsborough River, and the city's many retention ponds. That creates a sustained, five-month mosquito season that Hillsborough County manages with its own active mosquito program. Subterranean and drywood termites are the year-round structural risk, palmetto bugs are an outdoor and indoor presence in the warmth, fire ants cover the yards, and fleas run year-round without a winter break.",
    sections: [
      {
        heading: "Tampa's five-month mosquito season",
        body: "Tampa's wet season is not a steady rain: it is intense daily afternoon thunderstorms from June through October that rapidly fill low-lying areas and standing water features. The Tampa Bay watershed, the Hillsborough River, and the retention ponds throughout Hillsborough County all feed the mosquito population. Hillsborough County Mosquito Management treats public areas, but individual properties need their own management: removing standing water, treating resting areas under decks and dense planting, and applying perimeter barrier sprays through the peak months. The combination of treatment and water elimination is what produces results.",
      },
      {
        heading: "Termite pressure in Tampa Bay",
        body: "University of Florida IFAS Extension identifies the Tampa Bay area as a high termite pressure zone. Subterranean termites are the primary structural threat and come up from the soil through mud tubes. Drywood termites infest structural wood and furniture directly without soil contact, which requires a different treatment approach. Because both types are present, an inspection that identifies which type before any treatment begins is essential. Many Tampa homeowners carry termite protection plans alongside their general pest service.",
      },
    ],
    prevention: [
      "Remove standing water promptly after rain events to reduce the long wet-season mosquito pressure.",
      "Carry an annual termite inspection given Tampa Bay's high termite pressure zone designation.",
      "Treat pets, home, and yard together to break the year-round flea cycle.",
      "Reduce mulch and dense planting against the exterior walls to reduce palmetto bug and fire ant harborage.",
    ],
    costNote:
      "Tampa pest control is commonly quoted as a year-round general plan with mosquito treatment added for the June through October wet season. Termite protection is quoted separately after inspection. Start with a free assessment.",
    faqs: [
      {
        question: "Why is the mosquito season so long in Tampa?",
        answer:
          "Tampa's wet season runs June through October, delivering over half the city's annual rainfall in intense daily storms that fill the Tampa Bay watershed, Hillsborough River, and the county's many retention ponds. Hillsborough County operates an active mosquito management program because the pressure from this five-month season is among the highest in Florida.",
      },
      {
        question: "Is termite risk high in Tampa?",
        answer:
          "Yes. University of Florida IFAS Extension confirms the Tampa Bay area is in a high termite pressure zone. Both subterranean and drywood termites are present, and the year-round warmth means there is no seasonal reduction in activity. Annual inspections with a termite protection plan are standard practice for Tampa homeowners.",
      },
      {
        question: "What are palmetto bugs?",
        answer:
          "Palmetto bug is the local term for the large American cockroach. They breed outdoors in mulch, drains, and crawl spaces and move into Tampa homes readily in the heat and humidity. They fly toward lights on warm evenings. Reducing mulch against the house and sealing gaps at the foundation keeps them out.",
      },
      {
        question: "Do fleas stay active all year in Tampa?",
        answer:
          "Yes. Without a freezing winter to reduce outdoor populations, fleas stay active year-round in Tampa. The warm climate allows continuous breeding in yards, particularly in shaded, moist areas under decks and dense vegetation. Treating the pet, the home, and the yard simultaneously breaks the cycle.",
      },
      {
        question: "When is the worst time of year for pests in Tampa?",
        answer:
          "The wet season (June through October) is peak pressure for mosquitoes and fire ants. But termites, cockroaches, and fleas have no real off-season in Tampa's climate. For most homeowners, the wet season onset in June is when outdoor pest management becomes most urgent.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "St. Petersburg", slug: "st-petersburg" },
      { name: "Clearwater", slug: "clearwater" },
      { name: "Orlando", slug: "orlando" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Tampa, FL | Termites, Mosquitoes & Palmetto Bugs",
    metaDescription:
      "Tampa pest control for subterranean and drywood termites, wet-season mosquitoes, palmetto bugs, fire ants and year-round fleas. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "orlando",
    name: "Orlando",
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    tier: "T1",
    population: "~320,000",
    county: "Orange County",
    climate: "tropical",
    climateDriver:
      "Orlando sits in Central Florida's lake-dotted subtropical landscape. The city and surrounding Orange County have more lakes than almost any US city, and this lake system combined with the Central Florida wet season (June through September) creates exceptional mosquito habitat. Year-round warmth sustains termites, cockroaches, and fire ants continuously.",
    topPests: [
      "Mosquitoes",
      "Termites",
      "Cockroaches",
      "Fire Ants",
      "Ghost Ants",
    ],
    pestProfile: [
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Year-round, peak pressure June through September",
        note: "Orange County has more than 1,300 named lakes and countless unnamed ponds and wetlands. This makes Central Florida one of the most significant mosquito habitats in the country. Orange County Mosquito Control operates one of the largest county mosquito programs in Florida. Culex mosquitoes carrying West Nile virus and Eastern equine encephalitis virus are monitored seasonally.",
      },
      {
        name: "Subterranean and drywood termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms spring through summer, risk year-round",
        note: "Central Florida has high subterranean termite pressure, and drywood termites are also present. University of Florida IFAS Extension confirms the Orlando area is in a high-activity termite zone. Annual inspections are standard for Central Florida homeowners.",
      },
      {
        name: "American cockroaches (palmetto bugs)",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "Palmetto bugs are a year-round presence in Orlando's warm, humid climate, breeding outdoors and moving readily into homes. German cockroaches are the indoor species in the commercial-heavy corridors around the tourism industry.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Fire ants are widespread across Orange County and rebuild mounds rapidly after rain events, particularly during the wet season. They are a sting risk in all outdoor settings across the city.",
      },
      {
        name: "Ghost ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Ghost ants are a tropical species common in Central Florida that forms large supercolonies with multiple queens. They are very small, nearly translucent, and difficult to control with standard bait because the colony fragments rapidly when disturbed.",
      },
    ],
    localHook:
      "Orlando has more lakes than almost any city in America. Orange County alone has over 1,300 named lakes, and this extraordinary lake and wetland density makes the Central Florida mosquito season one of the most significant in the country. Orange County operates one of Florida's largest county mosquito control programs specifically because of this habitat.",
    intro:
      "Pest control in Orlando is shaped by water. Orange County has over 1,300 named lakes and countless ponds and wetlands, which creates mosquito habitat on a scale that drives Orange County Mosquito Control to operate one of Florida's largest county programs. Year-round warmth means termites, cockroaches, and fire ants have no off-season. Ghost ants, a tropical species that forms large, fragile supercolonies, are a specific Central Florida challenge that requires a different approach than standard ant control.",
    sections: [
      {
        heading: "Why Orlando has such a significant mosquito problem",
        body: "Central Florida's geography is defined by lakes. Orange County's more than 1,300 named lakes, plus the marshes, retention ponds, and low-lying areas across the suburban landscape, create some of the most productive mosquito breeding habitat in the country. Orange County Mosquito Control treats public areas with aerial application and truck-mounted equipment during peak season, but the private yard environment is beyond their scope. Removing standing water in containers, treating resting areas under decks, and applying barrier sprays around the yard handle the residential piece.",
      },
      {
        heading: "Ghost ants: a Central Florida complication",
        body: "Ghost ants are native to the tropics and found throughout Central Florida and South Florida. They are tiny, nearly translucent, and form supercolonies with multiple queens scattered across many sites. The challenge is that standard bait disrupts a ghost ant colony but does not eliminate it: the colony quickly fragments and re-establishes from satellite nests. Treatment requires identifying the colony structure before applying the right product. Getting this wrong just displaces the problem to an adjacent area.",
      },
    ],
    prevention: [
      "Remove standing water from containers, gutters, pool covers, and plant trays to reduce the Orlando lake-area mosquito season.",
      "Have an annual termite inspection given Central Florida's high termite zone designation.",
      "Address ghost ant trails inside with correct bait rather than repellent sprays, which cause fragmentation.",
      "Reduce mulch and dense planting against exterior walls to reduce palmetto bug harborage.",
    ],
    costNote:
      "Orlando pest control is commonly quoted as a year-round general plan with seasonal mosquito treatment added. Termite protection is quoted separately after inspection. Start with a free assessment.",
    faqs: [
      {
        question: "Why are mosquitoes such a serious problem in Orlando?",
        answer:
          "Orange County has over 1,300 named lakes and extensive wetlands that create one of the densest mosquito habitats in the country. The wet season (June through September) fills these features and sustains large mosquito populations. Orange County Mosquito Control operates one of Florida's largest county programs because of this sustained pressure. Both West Nile virus and Eastern equine encephalitis virus are monitored in the area.",
      },
      {
        question: "Is termite risk high in the Orlando area?",
        answer:
          "Yes. University of Florida IFAS Extension confirms Central Florida is in a high termite activity zone. Both subterranean and drywood termites are present. The year-round warmth means there is no seasonal reduction in risk. Annual inspections with a termite protection plan are the standard approach for Orlando homeowners.",
      },
      {
        question: "What are ghost ants and why are they difficult to control?",
        answer:
          "Ghost ants are tiny, nearly translucent tropical ants that form supercolonies with multiple queens distributed across many satellite nests. Standard repellent sprays cause the colony to fragment and re-establish elsewhere. Slow-acting bait specifically formulated for ghost ants, applied after identifying the colony structure, is the effective approach.",
      },
      {
        question: "Are fire ants year-round in Orlando?",
        answer:
          "Yes. Orlando's warm climate means fire ants have no seasonal reduction. They rebuild mounds quickly after rain events and are widespread across Orange County yards and parks. Treating mounds as they appear keeps the risk manageable.",
      },
      {
        question: "Is year-round pest control necessary in Orlando?",
        answer:
          "For most homes, yes. Termites, cockroaches, fire ants, and ghost ants have no off-season in Central Florida. Mosquitoes peak in the wet season but are present year-round near the lake and wetland system. Continuous management is more effective than seasonal reactive treatment.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Tampa", slug: "tampa" },
      { name: "Kissimmee", slug: "kissimmee" },
      { name: "Sanford", slug: "sanford" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Orlando, FL | Mosquitoes, Termites & Ghost Ants",
    metaDescription:
      "Orlando pest control for lake-area mosquitoes, subterranean and drywood termites, palmetto bugs, fire ants and ghost ants. Free inspection. Call 1-800-PEST-USA.",
  },
];
