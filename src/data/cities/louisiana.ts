import type { CityLocation } from "@/types";

// Louisiana seed cities. Pest data reflects humid subtropical Gulf Coast
// patterns (LSU AgCenter).

export const louisianaCities: CityLocation[] = [
  {
    slug: "new-orleans",
    name: "New Orleans",
    state: "Louisiana",
    stateSlug: "louisiana",
    stateAbbr: "LA",
    tier: "T1",
    population: "~380,000",
    county: "Orleans Parish",
    climate: "tropical",
    climateDriver:
      "New Orleans is warm, wet, and low-lying, with high humidity and standing water never far away. There is no real winter to slow pests down, and the conditions suit termites and mosquitoes especially.",
    topPests: ["Termites", "Mosquitoes", "Cockroaches", "Fire Ants", "Rats"],
    pestProfile: [
      {
        name: "Formosan subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in late spring, active year-round",
        note: "New Orleans is the most heavily infested US city for invasive Formosan termites, which damaged historic French Quarter buildings and prompted a major control program. Their colonies are huge and aggressive.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Nearly year-round",
        note: "Warmth, humidity, and standing water keep mosquitoes active across most of the year, and the parish runs an active mosquito control program.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "The large American roaches breed in drains, sewers, and damp spaces and move up into homes, helped by the humidity and the city's old housing.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, raft during floods",
        note: "Fire ants are widespread and notorious for rafting together during floods, then recolonizing quickly once water recedes.",
      },
      {
        name: "Roof and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Rats thrive in the warm, food-rich environment and are displaced indoors by flooding, a recurring issue in a low-lying city.",
      },
    ],
    localHook:
      "New Orleans is the worst US city for Formosan termites, the aggressive invasive species that chewed through parts of the French Quarter and triggered a citywide control program. No other pest defines a place quite like this.",
    intro:
      "Pest control in New Orleans is dominated by one thing: termites, specifically the invasive Formosan subterranean termite. The city is the most heavily infested in the country, the damage to historic buildings was severe enough to launch a major federal control program, and the colonies here are large and fast. Beyond termites, the warm, wet, low-lying setting keeps mosquitoes, American roaches, fire ants, and rats active all year, with flooding regularly reshuffling the whole picture. There is no off-season to count on.",
    sections: [
      {
        heading: "The Formosan termite problem",
        body: "Formosan termites are not the slow, native kind. They form colonies that can number in the millions and cause structural damage far faster than native subterranean termites. New Orleans is the worst-affected US city, and the historic housing stock is especially vulnerable. An annual inspection and a monitored barrier or bait system are sensible protection for any home here, and early signs like swarming in late spring should never be ignored.",
      },
      {
        heading: "How flooding changes everything",
        body: "Every major flood reshuffles the pests. Floodwater pushes roaches and rats out of the ground and sewers and into homes, and fire ants raft together on the water before recolonizing dry ground. After a flood, the calls climb for weeks. Planning for that, rather than reacting to it, is what keeps a home manageable in a city where water is never far away.",
      },
    ],
    prevention: [
      "Keep an annual Formosan termite inspection on the calendar and act fast on spring swarms.",
      "Remove standing water promptly to cut the long mosquito season.",
      "Seal drains and slab gaps to keep American roaches from coming up indoors.",
      "Address post-flood pest pressure quickly, as roaches, rats, and fire ants move with the water.",
    ],
    costNote:
      "Termite protection against Formosan termites is the priority here and is quoted separately after inspection. General pest and mosquito control usually works best year-round given the climate. Everything starts with a free assessment.",
    faqs: [
      {
        question: "Why are Formosan termites such a problem in New Orleans?",
        answer:
          "New Orleans is the most heavily infested US city for invasive Formosan subterranean termites. They form huge, aggressive colonies and damage wood far faster than native termites, and they badly affected historic French Quarter buildings, which led to a major control program. Annual inspections and a treatment barrier are strongly recommended.",
      },
      {
        question: "How long is mosquito season in New Orleans?",
        answer:
          "Close to year-round, thanks to the warmth, humidity, and standing water. The parish runs an active mosquito control program. Removing standing water around the home and treating shaded resting areas reduces both bites and risk.",
      },
      {
        question: "What pests get worse after flooding here?",
        answer:
          "Flooding pushes American roaches and rats out of the ground and sewers and into homes, and fire ants raft together on the water before recolonizing. Call volumes climb for weeks after a flood, so post-flood treatment is common in New Orleans.",
      },
      {
        question: "When do Formosan termites swarm?",
        answer:
          "They typically swarm in late spring, often on warm, humid evenings, and the swarms can be large. Seeing a swarm near your home is a strong signal to get an inspection, because it suggests an active colony nearby.",
      },
      {
        question: "Is year-round pest control necessary in New Orleans?",
        answer:
          "For most homes, yes. With no real winter, termites, mosquitoes, roaches, and rats stay active across the year, and flooding adds surges, so a continuous plan holds them back better than occasional visits.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Metairie", slug: "metairie" },
      { name: "Kenner", slug: "kenner" },
      { name: "Baton Rouge", slug: "baton-rouge" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in New Orleans, LA | Formosan Termites & Mosquitoes",
    metaDescription:
      "New Orleans pest control for Formosan termites, year-round mosquitoes, American roaches, fire ants and rats. Termite protection, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "baton-rouge",
    name: "Baton Rouge",
    state: "Louisiana",
    stateSlug: "louisiana",
    stateAbbr: "LA",
    tier: "T2",
    population: "~225,000",
    county: "East Baton Rouge Parish",
    climate: "hot-humid",
    climateDriver:
      "Baton Rouge sits on the east bank of the Mississippi River in a subtropical climate with hot, wet summers and very mild winters. The Mississippi River, the Comite River, and the abundant bayous and drainage canals across East Baton Rouge Parish create intense, near year-round mosquito pressure. The warm, wet climate keeps Formosan termites and American cockroaches active most of the year.",
    topPests: ["Formosan Termites", "American Cockroaches", "Mosquitoes", "Fire Ants", "Rats"],
    pestProfile: [
      {
        name: "Formosan subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms May through July, active year-round",
        note: "Louisiana State University AgCenter confirms Baton Rouge is in one of the heaviest Formosan termite infestation zones in the country. Formosan termites form enormous colonies, cause damage far faster than native subterranean termites, and are established throughout East Baton Rouge Parish. The warm, humid climate keeps colonies active most of the year.",
      },
      {
        name: "American cockroaches (palmetto bugs)",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "Large American cockroaches are extremely common in Baton Rouge. They breed in the city's drainage infrastructure, outdoor areas, and beneath buildings and move indoors readily. The subtropical climate sustains them year-round, and they are a particular challenge in older downtown properties.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Nearly year-round, peak April through October",
        note: "The Mississippi River, Comite River, and the network of bayous and drainage canals across East Baton Rouge Parish create sustained mosquito breeding habitat. LSU AgCenter and the East Baton Rouge Parish Mosquito Abatement District run active control programs. West Nile virus and other mosquito-borne illnesses are monitored across the parish.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Fire ants are a constant presence in Baton Rouge lawns and green spaces. The subtropical climate allows colonies to remain active year-round. LSU AgCenter identifies fire ants as one of the most significant pest challenges across Louisiana.",
      },
      {
        name: "Roof rats and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Both roof rats and Norway rats are present across Baton Rouge. The Mississippi River corridor, the port activity, and the city's subtropical vegetation sustain year-round populations. Flooding events displace rats from low-lying areas and drive them into residential neighborhoods.",
      },
    ],
    localHook:
      "Louisiana State University AgCenter has studied Formosan termites in Baton Rouge for decades. These are not the slow, native subterranean termites found elsewhere in the country: Formosan colonies grow enormous and can damage a wood structure far faster. Baton Rouge homeowners without active termite protection are taking a real risk.",
    intro:
      "Pest control in Baton Rouge sits at the intersection of the Mississippi River and subtropical Louisiana. The Formosan subterranean termite is the headline threat: LSU AgCenter confirms Baton Rouge is in one of the heaviest infestation zones in the country, and these termites form enormous colonies that cause damage faster than native species. Mosquitoes are a near year-round issue along the bayous and drainage canals, with the parish running an active abatement program. American cockroaches thrive in the subtropical heat, fire ants stay active year-round, and both roof and Norway rats maintain populations along the river corridor.",
    sections: [
      {
        heading: "Formosan termites: Baton Rouge's primary structural threat",
        body: "Formosan subterranean termites were introduced to the Gulf Coast decades ago and are now firmly established across Louisiana. LSU AgCenter has studied them in Baton Rouge for years and confirms the area carries among the heaviest infestation pressure in the country. What makes them more serious than native subterranean termites is colony size: Formosan colonies can reach several million individuals and forage over a much wider area. They swarm in large numbers in May through July, and the swarm is often the first visible sign of an established colony. Active termite protection, rather than annual inspection alone, is the standard of care in Baton Rouge.",
      },
      {
        heading: "Mosquitoes and the bayou system",
        body: "East Baton Rouge Parish is crisscrossed by drainage canals, bayous, and the floodplain of the Mississippi and Comite Rivers. This standing and slow-moving water creates intense mosquito breeding habitat that the parish's abatement district works to manage. At the residential level, removing any standing water from the property is the most effective step: flower pot trays, gutters, bird baths, and low spots in the lawn. Treating the shaded resting areas around the home handles the adult mosquitoes that breed elsewhere and come to rest in the vegetation.",
      },
    ],
    prevention: [
      "Maintain active termite protection rather than relying on inspection alone given the heavy Formosan pressure in Baton Rouge.",
      "Remove standing water from all containers and drainage areas weekly to cut the near year-round mosquito season.",
      "Treat fire ant mounds as they appear throughout the year in this subtropical climate.",
      "Seal utility penetrations and reduce outdoor harborage to limit rat entry from the river corridor.",
    ],
    costNote:
      "Baton Rouge pest control is typically quoted as a year-round general plan with Formosan termite protection quoted separately, usually as a monitored treatment system given the high infestation pressure. Mosquito control is a seasonal add-on. Start with a free assessment.",
    faqs: [
      {
        question: "Why are Formosan termites worse than regular termites in Baton Rouge?",
        answer:
          "Formosan subterranean termites form far larger colonies than native subterranean termites and forage over a much wider area. LSU AgCenter confirms Baton Rouge is in one of the heaviest infestation zones in the country. The practical difference is that Formosan colonies cause structural damage faster and are harder to eliminate once established. Active treatment protection is more important here than in most US cities.",
      },
      {
        question: "How bad is the mosquito problem in Baton Rouge?",
        answer:
          "The bayous, drainage canals, and the Mississippi and Comite River floodplains create near year-round mosquito breeding habitat. The East Baton Rouge Parish Mosquito Abatement District runs active control programs, and LSU AgCenter and parish health officials monitor for mosquito-borne illness. Removing standing water on your property and treating shaded resting areas through the active season is the most effective approach for individual households.",
      },
      {
        question: "Are American cockroaches and palmetto bugs the same thing?",
        answer:
          "Yes. Palmetto bug is the regional name for the large American cockroach. They are very common in Baton Rouge, breeding in outdoor drainage infrastructure and moving indoors freely in the subtropical heat. They are different from German cockroaches, which are smaller and breed entirely indoors. Both species are common in Baton Rouge, but the American roach is the large outdoor type that residents most often encounter.",
      },
      {
        question: "Are fire ants active year-round in Baton Rouge?",
        answer:
          "Yes. Baton Rouge's subtropical climate means fire ant colonies remain active throughout the year without the winter suppression that northern climates experience. Mounds appear quickly after rain events and pose a sting hazard in yards and parks. LSU AgCenter identifies fire ants as one of Louisiana's most significant pest challenges.",
      },
      {
        question: "Do floods make the rat problem worse in Baton Rouge?",
        answer:
          "Yes. The Mississippi River and Comite River flooding events displace rats from low-lying areas and drive them into residential neighborhoods. Post-flood rat calls increase significantly. Sealing entry points and reducing outdoor harborage before and after flood events is the most effective preventive step.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "New Orleans", slug: "new-orleans" },
      { name: "Shreveport", slug: "shreveport" },
      { name: "Lafayette", slug: "lafayette" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Baton Rouge, LA | Formosan Termites & Mosquitoes",
    metaDescription:
      "Baton Rouge pest control for Formosan termites, mosquitoes, American cockroaches, fire ants and rats. Mississippi River specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "shreveport",
    name: "Shreveport",
    state: "Louisiana",
    stateSlug: "louisiana",
    stateAbbr: "LA",
    tier: "T2",
    population: "~187,000",
    county: "Caddo Parish",
    climate: "hot-humid",
    climateDriver:
      "Shreveport sits in northwestern Louisiana at the Red River, where the Gulf Coastal Plain meets the Piney Woods. The hot, humid climate delivers long, warm seasons with mild winters. Formosan subterranean termites extend throughout Louisiana including Caddo Parish, documented by LSU AgCenter as present across the state. The Red River floodplain, Cross Lake, and the numerous bayous and wetlands in and around Shreveport sustain mosquito populations through the long warm season. Fire ants are established throughout the region. The Caddo Parish Health Unit monitors West Nile virus activity, which is reported in most years.",
    topPests: [
      "Formosan Termites",
      "Mosquitoes",
      "Fire Ants",
      "American Cockroaches",
      "German Cockroaches",
    ],
    pestProfile: [
      {
        name: "Formosan subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms late April through June, active year-round underground",
        note:
          "Formosan termites are established throughout Louisiana, and LSU AgCenter documents them as present across the state including northwest Louisiana. In Shreveport, they are present alongside native eastern subterranean termites. Formosan colonies are dramatically larger and cause structural damage significantly faster than native species. Annual inspections with a proactive soil treatment or bait program are the standard recommendation for all Caddo Parish homeowners.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "March through November",
        note:
          "The Red River floodplain, Cross Lake, and the numerous bayous, drainage ditches, and seasonal wetlands throughout Caddo Parish provide productive mosquito breeding habitat through the long warm season. The Caddo Parish Health Unit monitors West Nile virus statewide and reports activity in most years. Residential barrier spray programs from March through November are the standard approach.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, peak March through October",
        note:
          "Fire ants are ubiquitous across Caddo Parish's lawns, green spaces, and parks. Northwest Louisiana's warm, moist soils are ideal for fire ant colony establishment. LSU AgCenter recommends broadcast bait treatment of the full lawn twice annually rather than treating individual mounds.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, most visible during rain and heat",
        note:
          "American cockroaches are extremely common in Shreveport's outdoor infrastructure, living in storm drains, sewer lines, and organic debris. They push into homes during heavy rain and extreme heat. The Red River valley's humidity keeps outdoor American cockroach populations large year-round.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are concentrated in Shreveport's older apartment stock, restaurant kitchens, and commercial food-service environments. They require gel bait with IGR treatment to stop the breeding cycle rather than surface contact sprays alone.",
      },
    ],
    localHook:
      "Shreveport is far enough from the Gulf Coast that it does not get the full brunt of the coastal termite and mosquito pressure that New Orleans and Baton Rouge face, but it's solidly in Formosan termite territory nonetheless. LSU AgCenter's statewide termite maps show Formosan populations extending throughout Louisiana, and Shreveport homeowners carry meaningful termite risk year-round.",
    intro:
      "Pest control in Shreveport handles the northwest Louisiana pest suite. Formosan and native subterranean termites are both present in Caddo Parish and represent the highest structural risk. Mosquitoes run March through November along the Red River and the numerous wetlands around the city. Fire ants are in every lawn. American cockroaches move from outdoor infrastructure into homes during rain and heat. German cockroaches are the indoor problem in multi-family housing and commercial kitchens. The long warm season means there is no real off-season for most of these pests.",
    sections: [
      {
        heading: "Termites in Shreveport: both species in Caddo Parish",
        body: "LSU AgCenter documents Formosan subterranean termites as present across Louisiana, including the northwest part of the state. In Shreveport, both Formosan and native eastern subterranean termites are present, which amplifies the structural risk compared to areas with only one species. Formosan colonies are dramatically larger and more aggressive in their wood consumption. The combination of both species in the same soil makes annual termite inspections and a proactive protection plan the responsible standard for any Caddo Parish homeowner. Soil treatment programs with materials like Termidor or in-ground Sentricon bait stations are both effective management approaches in this climate.",
      },
      {
        heading: "Mosquitoes in the Red River watershed",
        body: "The Red River floodplain and Cross Lake create significant breeding habitat that sustains mosquito populations through Shreveport's long warm season. The extensive drainage infrastructure throughout Caddo Parish, including bayous and seasonal wetland areas, provides additional breeding sites. Residential barrier spray programs targeting the resting vegetation on the property provide the most practical yard-level protection. Monthly service from March through November maintains effective population control and keeps West Nile virus exposure at the home level as low as practical.",
      },
    ],
    prevention: [
      "Schedule annual termite inspections: Caddo Parish has both Formosan and native subterranean termites.",
      "Maintain barrier spray programs from March through November for mosquito management.",
      "Broadcast bait for fire ants in spring and fall rather than treating individual mounds.",
      "Seal plumbing penetrations and foundation gaps to reduce American cockroach entry during rain events.",
    ],
    costNote:
      "Shreveport pest control typically involves a year-round program covering cockroaches, fire ants, and spiders, with a separate annual termite protection plan. Mosquito programs run March through November. Free inspections assess the specific pest pressures on your property.",
    faqs: [
      {
        question: "Are Formosan termites in Shreveport?",
        answer:
          "Yes. LSU AgCenter documents Formosan subterranean termites as present across Louisiana including northwest Louisiana. They are present in Caddo Parish alongside native eastern subterranean termites. Annual termite inspections are the standard recommendation for Shreveport homeowners, and a proactive soil treatment or bait program provides the most reliable structural protection.",
      },
      {
        question: "How long is mosquito season in Shreveport?",
        answer:
          "Mosquito season in Shreveport runs approximately March through November, driven by the Red River floodplain, Cross Lake, and the numerous drainage areas throughout Caddo Parish. The Caddo Parish Health Unit monitors West Nile virus activity, and the Shreveport area sees annual reports. Monthly barrier spray programs through the warm season provide consistent yard-level protection.",
      },
      {
        question: "Are fire ants dangerous in Shreveport?",
        answer:
          "Fire ants in northwest Louisiana are aggressive when disturbed and can cause serious reactions in people with venom sensitivity. They are present year-round in Caddo Parish and mounds rebuild quickly after rain. Broadcast bait treatment of the full lawn in spring and fall is more effective than treating individual mounds. Two treatments per year manages fire ant pressure effectively.",
      },
      {
        question: "Why do cockroaches come into my Shreveport home during rain?",
        answer:
          "American cockroaches in Shreveport live primarily in the outdoor drainage system, storm drains, and organic debris. Rain events flood these outdoor habitats and displace cockroaches into buildings through plumbing penetrations and foundation gaps. They are not establishing indoor infestations: they are seeking temporary shelter. Sealing the entry points they use and maintaining a perimeter treatment reduces these displacement events.",
      },
      {
        question: "Do I need year-round pest control in Shreveport?",
        answer:
          "For most properties, yes. Northwest Louisiana's mild winters do not deliver the sustained cold that interrupts pest cycles. Fire ants, termites, and cockroaches are active most of the year. A year-round general pest program with seasonal mosquito service layered on top is the practical approach for most Shreveport homeowners.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Bossier City", slug: "bossier-city" },
      { name: "Minden", slug: "minden" },
      { name: "Natchitoches", slug: "natchitoches" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Shreveport, LA | Formosan Termites, Mosquitoes & Fire Ants",
    metaDescription:
      "Shreveport pest control for Formosan termites, mosquitoes, fire ants, American cockroaches and German cockroaches. Caddo Parish Red River specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
