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
  {
    slug: "st-petersburg",
    name: "St. Petersburg",
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    tier: "T2",
    population: "~265,000",
    county: "Pinellas County",
    climate: "hot-humid",
    climateDriver:
      "St. Petersburg sits on a peninsula between Tampa Bay and the Gulf of Mexico in Pinellas County. The subtropical coastal location means warm temperatures year-round, high humidity, and a long rainy season that sustains year-round termite and mosquito activity. The bay and Gulf exposure mean the city rarely sees a hard freeze, which is why pest populations never fully reset the way they do in colder climates.",
    topPests: ["American Cockroaches", "Drywood Termites", "Ghost Ants", "Mosquitoes", "German Cockroaches"],
    pestProfile: [
      {
        name: "American cockroaches (palmetto bugs)",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "Large American cockroaches, called palmetto bugs locally, are extremely common in St. Petersburg. They breed outdoors in the moist subtropical environment and enter homes through drains, gaps at the slab, and any opening. The coastal humidity sustains large outdoor populations year-round, and they are active in every season.",
      },
      {
        name: "Drywood termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms May through August, risk year-round",
        note: "Drywood termites are a major concern in St. Petersburg and throughout coastal Pinellas County. Unlike subterranean termites, they do not need soil contact and infest wood directly, including furniture, structural timbers, and roof framing. University of Florida IFAS confirms they are widespread across coastal Florida. Swarms in summer are the most common first sign.",
      },
      {
        name: "Ghost ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Ghost ants are a defining pest of South and Central Florida and are common across St. Petersburg. They are very small with a pale abdomen and dark head, and they invade kitchens, bathrooms, and food storage areas in large numbers. They nest in multiple locations both indoors and outdoors, which makes them resistant to simple one-location baiting.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Year-round, peak June through September",
        note: "The Tampa Bay coastal environment, the many canals and residential retention areas, and the subtropical climate sustain year-round mosquito activity in St. Petersburg. Pinellas County mosquito control runs active abatement programs. The rainy season from June through September sees the heaviest breeding.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in St. Petersburg restaurants, apartment buildings, and multi-family housing. The coastal humidity amplifies their breeding rate, and they spread readily through shared walls in the city's older apartment stock and beach-area motels.",
      },
    ],
    localHook:
      "St. Petersburg's position on a peninsula between Tampa Bay and the Gulf means the city rarely gets a hard freeze, and pest populations reflect that: palmetto bugs, ghost ants, drywood termites, and mosquitoes are all active across every season. University of Florida IFAS confirms that coastal Pinellas County carries some of the heaviest drywood termite pressure in the state.",
    intro:
      "Pest control in St. Petersburg is year-round, no exceptions. The city's position on a peninsula between Tampa Bay and the Gulf of Mexico means it rarely gets a true winter, and the subtropical coastal climate sustains every major pest species through all twelve months. American cockroaches thrive outdoors and come inside freely. Drywood termites are a major concern in the coastal housing stock, with University of Florida IFAS confirming heavy pressure across Pinellas County. Ghost ants invade kitchens in numbers that can be surprising if you are new to Florida. Mosquitoes peak in the rainy season but are present year-round.",
    sections: [
      {
        heading: "Drywood termites and coastal Pinellas County",
        body: "Drywood termites are more common in coastal Florida than in most of the country, and St. Petersburg is well within the heavy infestation zone identified by University of Florida IFAS Extension. Unlike subterranean termites, they do not need soil contact: they infest wood directly, including attic framing, furniture, and decorative wood. A common first sign is the small pellets they push out of gallery openings, which look like tiny piles of sand or sawdust on surfaces below. Swarms of winged termites in summer, typically May through August, are the other visible signal. Drywood termite treatment requires fumigation or localized heat treatment, which is different from the barrier treatments used for subterranean species.",
      },
      {
        heading: "Ghost ants: a specifically Florida problem",
        body: "Ghost ants are one of the most commonly encountered ant pests in Central and South Florida, and they surprise homeowners who relocate from other states. They are very small with a pale, almost translucent abdomen and a dark head, which makes them difficult to see on light surfaces. They invade kitchens and bathrooms in large numbers and nest in multiple sites both indoors and outdoors, which makes single-location baiting relatively ineffective. They require a multi-point treatment approach targeting all active trails and nest sites.",
      },
    ],
    prevention: [
      "Schedule regular termite inspections, including a drywood termite assessment, given the heavy coastal Pinellas County pressure.",
      "Seal plumbing penetrations and floor drains to reduce palmetto bug entry from outdoor drainage.",
      "Keep food in sealed containers and wipe down surfaces daily to limit ghost ant foraging targets indoors.",
      "Remove standing water from the property weekly to reduce the year-round mosquito breeding cycle.",
    ],
    costNote:
      "St. Petersburg pest control is typically quoted as a year-round general plan covering cockroaches, ants, and spiders, with drywood termite treatment, subterranean termite protection, and mosquito service quoted separately. Start with a free assessment.",
    faqs: [
      {
        question: "What is a palmetto bug and is it different from a cockroach?",
        answer:
          "Palmetto bug is the Florida name for the large American cockroach. It is the same insect: a large, reddish-brown cockroach that breeds outdoors in St. Petersburg's subtropical coastal environment and enters homes through drains, gaps, and openings. The humid coastal climate sustains large outdoor populations year-round. Sealing plumbing penetrations and reducing outdoor harborage keeps them out.",
      },
      {
        question: "Are drywood termites more common in St. Petersburg than subterranean termites?",
        answer:
          "Both are present in Pinellas County, but University of Florida IFAS confirms that drywood termites carry particularly heavy pressure in coastal Florida. The key difference is that drywood termites infest wood directly without soil contact, so any structural wood, furniture, or roof framing is a potential target. Treatment for drywood termites differs from the barrier treatments used for subterranean species and typically requires fumigation or localized heat treatment.",
      },
      {
        question: "Why are ghost ants so hard to control in St. Petersburg homes?",
        answer:
          "Ghost ants nest in multiple locations both indoors and outdoors and are not controlled effectively by treating just one nest site. They exploit many entry points simultaneously, and their colony structure allows them to quickly reestablish if only part of the colony is treated. Effective management uses baiting products that workers carry back to multiple nest sites, combined with sealing the most active entry points.",
      },
      {
        question: "Is there a mosquito season in St. Petersburg or is it year-round?",
        answer:
          "Both. Mosquitoes are present year-round in St. Petersburg's coastal subtropical climate. The rainy season from June through September sees peak breeding activity, but the mild winters and the bay and Gulf coastal environment mean they never fully stop. Pinellas County runs active mosquito abatement programs, and individual properties benefit from eliminating standing water and treating resting areas.",
      },
      {
        question: "Do I really need year-round pest control in St. Petersburg?",
        answer:
          "Yes. The subtropical coastal climate means pest populations never go through the winter reset that colder climates experience. Cockroaches, ghost ants, termites, and mosquitoes are all active in every season. A year-round plan is the standard approach for St. Petersburg homeowners.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Tampa", slug: "tampa" },
      { name: "Clearwater", slug: "clearwater" },
      { name: "Sarasota", slug: "sarasota" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in St. Petersburg, FL | Palmetto Bugs, Termites & Ghost Ants",
    metaDescription:
      "St. Petersburg pest control for American cockroaches, drywood termites, ghost ants, mosquitoes and German cockroaches. Pinellas County coastal specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    state: "Florida",
    stateSlug: "florida",
    stateAbbr: "FL",
    tier: "T2",
    population: "~185,000",
    county: "Broward County",
    climate: "hot-humid",
    climateDriver:
      "Fort Lauderdale sits in South Florida's tropical climate zone in Broward County. Warm temperatures year-round, a distinct wet season from June through October, and the city's extensive canal network create some of the most intense mosquito and termite pressure in the country. The absence of any meaningful winter means pest populations are sustained continuously throughout the year.",
    topPests: ["Drywood Termites", "American Cockroaches", "German Cockroaches", "Ghost Ants", "Mosquitoes"],
    pestProfile: [
      {
        name: "Drywood termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms May through September, risk year-round",
        note: "Fort Lauderdale and Broward County are in a very high drywood termite pressure zone according to University of Florida IFAS Extension. The tropical climate and the humidity sustain colonies year-round in wood structures without any soil contact needed. The city's many canal-side homes and older construction carry significant exposure.",
      },
      {
        name: "American cockroaches (palmetto bugs)",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "American cockroaches are ubiquitous in South Florida including Fort Lauderdale. They breed in the canal infrastructure, outdoor drainage, and the moist subtropical exterior environment and enter homes continuously. They fly toward lights on warm evenings and are active in all seasons given the tropical climate.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Fort Lauderdale restaurants, condominiums, and older rental housing. The hospitality industry and the high-turnover condo market creates conditions for rapid spread. They breed entirely indoors and are not dependent on outdoor temperatures.",
      },
      {
        name: "Ghost ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Ghost ants are a signature South Florida pest and are common across Fort Lauderdale. They nest in multiple locations indoors and outdoors and invade kitchens and bathrooms in significant numbers. Their small size and pale abdomen make them difficult to see on light surfaces.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Year-round, peak June through October",
        note: "Fort Lauderdale's extensive canal network, the Everglades drainage system to the west, and the tropical wet season create sustained, intense mosquito breeding habitat. Broward County Mosquito Control runs active abatement programs. The Aedes aegypti mosquito, which can transmit dengue and Zika, is established in South Florida.",
      },
    ],
    localHook:
      "Fort Lauderdale's canal network is one of the most extensive in the world outside Venice, and it is also the reason the city has one of the most active mosquito seasons in the country. The Broward County canals, combined with the tropical wet season, create breeding habitat that the county mosquito control program works to manage year-round. For property owners, eliminating standing water on the lot is essential.",
    intro:
      "Pest control in Fort Lauderdale works against South Florida's tropical baseline: no winter, a wet season from June through October, and a canal system that sustains mosquito breeding year-round. University of Florida IFAS confirms Broward County is in a very high drywood termite pressure zone, and the tropical climate sustains colonies in wood structures continuously without any soil contact. American cockroaches and ghost ants are year-round fixtures. German cockroaches are persistent in the hospitality and condo market. Mosquitoes peak in the wet season but never fully stop.",
    sections: [
      {
        heading: "Drywood termites in Broward County",
        body: "Drywood termites do not need soil contact: they infest wood directly in roof framing, furniture, window frames, and structural timbers. University of Florida IFAS Extension confirms Broward County is in a very high pressure zone. Fort Lauderdale's canal-side homes and older construction carry particularly heavy exposure. The first visible sign is usually a small pile of pellets (frass) pushed out from a gallery opening, or a summer swarm of winged termites around lights. Treatment typically involves fumigation or localized heat treatment, not the soil barriers used for subterranean species.",
      },
      {
        heading: "The canal system and mosquito pressure",
        body: "Fort Lauderdale's canal network, one of the most extensive in any US city, creates sustained mosquito breeding habitat that the county abatement program works to manage. The Aedes aegypti mosquito, which can transmit dengue and Zika virus, is established in South Florida. At the residential level, removing any standing water from the property is the most important step: flower pot saucers, gutters, uncovered containers, and any pooled area after rain. Treating the shaded resting areas around the home handles the adults breeding elsewhere and resting in the vegetation.",
      },
    ],
    prevention: [
      "Schedule regular drywood and subterranean termite inspections given Broward County's very high pressure zone.",
      "Remove all standing water from the property weekly to reduce breeding in Fort Lauderdale's canal-adjacent environment.",
      "Seal plumbing penetrations and floor drains to reduce palmetto bug entry from outdoor drainage.",
      "Keep food in sealed containers to limit ghost ant foraging targets in the kitchen.",
    ],
    costNote:
      "Fort Lauderdale pest control is typically quoted as a year-round general plan with drywood and subterranean termite protection quoted separately after inspection. Mosquito treatment is a seasonal or year-round add-on given the canal environment. Start with a free assessment.",
    faqs: [
      {
        question: "Why is the drywood termite problem so severe in Fort Lauderdale?",
        answer:
          "The tropical South Florida climate and the humidity sustain drywood termite colonies year-round. University of Florida IFAS Extension confirms Broward County is in a very high pressure zone. Unlike subterranean termites, drywood species infest wood directly without soil contact, so any wood in the structure is a potential target. Swarms are most common in summer, and regular inspections are the standard protective step.",
      },
      {
        question: "Is the Aedes aegypti mosquito present in Fort Lauderdale?",
        answer:
          "Yes. The Aedes aegypti mosquito, which can transmit dengue, Zika, and chikungunya, is established in South Florida including Broward County. It breeds in very small containers of standing water and bites during daytime hours. Eliminating any standing water container from the property is the most effective prevention step, followed by barrier treatments during the wet season.",
      },
      {
        question: "How do ghost ants differ from regular ants?",
        answer:
          "Ghost ants are very small, with a pale almost translucent abdomen and a dark head. They are difficult to see on light surfaces and nest in multiple locations simultaneously, both indoors and outdoors. This multi-nesting behavior makes them resistant to single-location baiting. Effective control uses bait products that workers carry to multiple nest sites, combined with sealing major entry points.",
      },
      {
        question: "Are cockroaches flying at night in Fort Lauderdale normal?",
        answer:
          "Yes. American cockroaches (palmetto bugs) in South Florida fly toward lights on warm evenings. The tropical temperatures keep them active and capable of flight year-round, which surprises people from cooler climates. They breed outdoors in the drainage and canal infrastructure and enter homes through gaps. Sealing openings and treating the exterior perimeter reduces encounters significantly.",
      },
      {
        question: "Do I need pest control year-round in Fort Lauderdale?",
        answer:
          "Yes. The tropical climate means pest populations are never fully suppressed by a cold season. Cockroaches, ghost ants, termites, and mosquitoes are all active year-round. A continuous plan is the standard approach for Fort Lauderdale homeowners and is more effective than seasonal one-off treatments.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Miami", slug: "miami" },
      { name: "Boca Raton", slug: "boca-raton" },
      { name: "Hollywood", slug: "hollywood" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Fort Lauderdale, FL | Termites, Cockroaches & Mosquitoes",
    metaDescription:
      "Fort Lauderdale pest control for drywood termites, palmetto bugs, German cockroaches, ghost ants and mosquitoes. Broward County tropical specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
