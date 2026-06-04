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
];
