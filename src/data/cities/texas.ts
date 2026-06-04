import type { CityLocation } from "@/types";

// Texas seed cities. contentTemplate is normally derived from the slug hash
// (see variant.ts); here it is set explicitly so the seed set demonstrates the
// full A to E rotation. Pest data verified against regional patterns (Texas A&M
// AgriLife Extension, Gulf Coast climate). The Geographer owns accuracy.

export const texasCities: CityLocation[] = [
  {
    slug: "austin",
    name: "Austin",
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    tier: "T1",
    population: "~975,000",
    county: "Travis County",
    climate: "hot-humid",
    climateDriver:
      "Austin sits on the edge of the Hill Country, where humid Gulf air meets dry limestone terrain. That mix gives the city both heavy-rain pest surges and dry-ground species you do not see further east.",
    topPests: ["Fire Ants", "Scorpions", "Cockroaches", "Termites", "Mosquitoes"],
    pestProfile: [
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, mounds swell after spring rain",
        note: "Fire ant mounds dot Travis County lawns and reappear fast after every wet spell. A single colony can hold a quarter of a million ants.",
      },
      {
        name: "Striped bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Peaks late spring through summer",
        note: "The Hill Country limestone west of the city is prime scorpion ground. They slip through weep holes and turn up in tubs and on walls on warm nights.",
      },
      {
        name: "American and smoky-brown cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, worst in summer humidity",
        note: "Locals call the big ones tree roaches. They breed in mulch and storm drains and push indoors when it gets hot and dry outside.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms in spring",
        note: "Eastern subterranean termites are active across Central Texas and swarm on warm, still spring days after rain.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "March through November",
        note: "Standing water along Lady Bird Lake and in backyard drainage keeps the season long. West Nile virus is monitored across Travis County most summers.",
      },
    ],
    localHook:
      "Few cities mix desert and swamp pests the way Austin does. Scorpions from the Hill Country and fire ants from the Gulf plains both end up in the same backyard.",
    intro:
      "Pest control in Austin is not one job, it is several. The limestone west of the city brings scorpions and the kind of spiders that like dry cracks. The flatter, wetter east brings fire ants, tree roaches, and a mosquito season that runs most of the year. If you have moved here from a cooler state, the sheer length of the warm season is the thing that catches you out. Pests barely get a winter break.",
    sections: [
      {
        heading: "Why Austin homes see so much pest pressure",
        body: "Two things drive it. First, the warm season is long, so most species get extra breeding cycles. Second, Austin's rapid growth means new builds back straight onto greenbelt and brush, which is exactly where scorpions, ants, and rodents already live. A treatment plan here works best when it covers the perimeter and the entry points, not just the inside.",
      },
      {
        heading: "What a local inspection covers",
        body: "A technician walks the foundation for termite mud tubes and weep-hole gaps, checks the yard for fire ant mounds and standing water, and looks at garages and bathrooms for scorpion harborage. From there you get a plan that targets the species you actually have, rather than a blanket spray.",
      },
    ],
    prevention: [
      "Seal weep holes and foundation cracks with mesh or sealant to block scorpions.",
      "Keep mulch and firewood away from the slab to cut roach and termite harborage.",
      "Treat fire ant mounds in spring before they spread across the lawn.",
      "Clear standing water in plant trays and drainage after every rain.",
    ],
    costNote:
      "Most Austin homes start with a free inspection. One-time treatments suit a single problem, but with the long warm season here, a quarterly plan usually works out better value for ongoing scorpion and ant pressure.",
    faqs: [
      {
        question: "Are scorpions common in Austin homes?",
        answer:
          "Yes, especially on the west side toward the Hill Country. The striped bark scorpion is the species you will see. Its sting hurts but is rarely dangerous to a healthy adult. They get in through weep holes and gaps around plumbing, so exclusion work matters as much as spraying.",
      },
      {
        question: "When is fire ant season in Austin?",
        answer:
          "Fire ants are active year-round in Travis County, but mounds swell and multiply after spring and early summer rain. Treating mounds early in the season stops them spreading across the whole yard.",
      },
      {
        question: "Do I need termite treatment in Central Texas?",
        answer:
          "Eastern subterranean termites are active across the Austin area and swarm in spring. An annual termite inspection is worth it here, particularly for homes with slab foundations and any wood-to-soil contact.",
      },
      {
        question: "Why are there so many roaches in Austin in summer?",
        answer:
          "The large tree roaches breed outdoors in mulch and storm drains. When the weather turns hot and dry, they move toward the moisture inside homes. Sealing entry points and reducing yard harborage keeps numbers down.",
      },
      {
        question: "Is mosquito control worth it in Austin?",
        answer:
          "For homes near Lady Bird Lake, creeks, or with poor drainage, yes. The season runs March through November and West Nile virus is monitored most summers, so reducing standing water and treating resting areas makes a real difference.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Round Rock", slug: "round-rock" },
      { name: "San Marcos", slug: "san-marcos" },
      { name: "Houston", slug: "houston" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Austin, TX | Scorpions, Fire Ants & Termites",
    metaDescription:
      "Local Austin pest control for scorpions, fire ants, tree roaches, termites and mosquitoes. Licensed Texas technicians, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "houston",
    name: "Houston",
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    tier: "T1",
    population: "~2.3 million",
    county: "Harris County",
    climate: "hot-humid",
    climateDriver:
      "Houston sits low and flat on the Gulf Coast, with high humidity, heavy rain, and slow drainage. Water sits, and pests that need moisture thrive almost all year.",
    topPests: ["Mosquitoes", "Cockroaches", "Termites", "Fire Ants", "Rats"],
    pestProfile: [
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Nearly year-round",
        note: "Harris County runs one of the largest mosquito control programs in the country for a reason. Standing water after storms feeds huge broods, and West Nile virus is tracked every summer.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "The big roaches breed in storm sewers and move up into homes through drains and slab gaps, especially after heavy rain pushes them out of the ground.",
      },
      {
        name: "Formosan and subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms May to July",
        note: "Houston is a Formosan termite hotspot. These aggressive termites build large colonies and cause faster damage than native subterranean species.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Fire ants float in rafts during floods and recolonize quickly once the water drops, which keeps Harris County yards under constant pressure.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round, worse after flooding",
        note: "Roof rats travel power lines and fence tops into attics. Flood events displace them and drive them indoors in waves.",
      },
    ],
    localHook:
      "Houston barely gets a winter, so the pests barely get a break. Add Gulf humidity and slow drainage and you have one of the highest pest-pressure cities in the country.",
    intro:
      "If you live in Houston, you already know pests are part of the deal. The heat, the humidity, and the flat ground that holds water all add up to long seasons for almost everything. Mosquitoes and the big American roaches are the everyday battle. Formosan termites and roof rats are the quieter, more expensive ones if you ignore them. The good news is that a steady, local plan keeps it manageable, even through hurricane season.",
    sections: [
      {
        heading: "How flooding changes the pest picture here",
        body: "Every major storm reshuffles the pests. Floodwater pushes roaches and rats out of the ground and into homes, and fire ant colonies raft to high ground, including porches and walls. After a flood, the calls spike for weeks. Planning for that, rather than reacting to it, is what separates a quiet home from a constant problem.",
      },
      {
        heading: "Formosan termites are the one to watch",
        body: "Native subterranean termites are slow and steady. Formosan termites are not. They form much larger colonies and can do serious structural damage in a shorter time. Houston is one of the worst-affected US cities, so an annual inspection and a monitored barrier are sensible protection for any home here.",
      },
    ],
    prevention: [
      "Empty anything that holds water within a day of rain to break the mosquito cycle.",
      "Cap and screen drains and seal slab penetrations to keep roaches out.",
      "Keep an annual termite inspection on the calendar, given Formosan pressure.",
      "Trim tree limbs and vines off the roofline to cut roof rat access to the attic.",
    ],
    costNote:
      "Houston homes almost always do better on a recurring plan than on one-off visits, because the pressure rarely lets up. Start with a free inspection so the price matches the species you have, not a generic package.",
    faqs: [
      {
        question: "Why are mosquitoes so bad in Houston?",
        answer:
          "Flat ground, slow drainage, and frequent heavy rain leave standing water everywhere, which is all mosquitoes need to breed. The season runs most of the year, and Harris County monitors West Nile virus every summer, so reducing standing water and treating resting areas is worth it.",
      },
      {
        question: "Are Formosan termites in Houston a real risk?",
        answer:
          "Yes. Houston is one of the most heavily infested US cities for Formosan subterranean termites. They build large colonies and damage wood faster than native termites, so an annual inspection and a treatment barrier are smart protection.",
      },
      {
        question: "What pests get worse after a Houston flood?",
        answer:
          "Cockroaches and rats get displaced from the ground and sewers and move indoors, and fire ants raft to dry high points like porches and walls. Call volumes climb for weeks after a major storm, so post-flood treatment is common here.",
      },
      {
        question: "How do roof rats get into Houston attics?",
        answer:
          "Roof rats are climbers. They run along fence tops, tree limbs, and utility lines and enter through roofline gaps and vents. Trimming branches back and sealing entry points cuts off their route.",
      },
      {
        question: "Is one cockroach treatment enough in Houston?",
        answer:
          "Rarely, because the American roaches breed outdoors in sewers and keep coming back. A recurring exterior treatment plus drain and slab sealing controls them far better than a single interior spray.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Sugar Land", slug: "sugar-land" },
      { name: "Pasadena", slug: "pasadena" },
      { name: "Austin", slug: "austin" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Houston, TX | Mosquitoes, Roaches & Termites",
    metaDescription:
      "Houston pest control for mosquitoes, American roaches, Formosan termites, fire ants and roof rats. Licensed technicians, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "san-antonio",
    name: "San Antonio",
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    tier: "T1",
    population: "~1.45 million",
    county: "Bexar County",
    climate: "hot-humid",
    climateDriver:
      "San Antonio sits at the southern edge of the Hill Country, hot and often dry, with humid spells. That mix gives it both fire ants and mosquitoes from the lowlands and scorpions from the rocky ground to the north and west.",
    topPests: ["Fire Ants", "Mosquitoes", "Cockroaches", "Scorpions", "Termites"],
    pestProfile: [
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, mounds surge after rain",
        note: "Fire ant mounds are a constant across Bexar County lawns and rebuild quickly after rain. Their stings are a real hazard for children and pets.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "March through November",
        note: "Standing water and a long warm season keep mosquitoes active most of the year, and West Nile virus is monitored across the county each summer.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "Large American roaches breed outdoors and move in during heat, while German roaches breed indoors in kitchens and multi-family housing.",
      },
      {
        name: "Striped bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Peaks in summer",
        note: "On the rocky north and west sides toward the Hill Country, striped bark scorpions slip through weep holes and turn up indoors on warm nights.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring",
        note: "Eastern subterranean termites are active across the area and swarm on warm, humid spring days after rain.",
      },
    ],
    localHook:
      "San Antonio gets two pest worlds at once: fire ants and mosquitoes from the warm lowlands, and Hill Country scorpions on the rocky north side. Few Texas cities juggle both the way this one does.",
    intro:
      "Pest control in San Antonio reflects its place on the map, right where the coastal plain meets the Hill Country. The long warm season keeps fire ants and mosquitoes busy most of the year, while the rocky terrain to the north brings scorpions that other Texas cities see less of. Cockroaches and subterranean termites round out the list. The practical upshot is that a one-size plan rarely fits: the north side needs scorpion exclusion, while the lowlands lean toward ant and mosquito control.",
    sections: [
      {
        heading: "A pest map that changes across the city",
        body: "Where you live in San Antonio shapes your pest problem. The rocky north and northwest, closer to the Hill Country, see more scorpions and the exclusion work that controls them. The flatter, wetter south and east lean toward fire ants and mosquitoes. A good inspection reads your specific lot, the soil, the drainage, the rock, rather than assuming one citywide problem.",
      },
      {
        heading: "Fire ants and the rhythm of the rain",
        body: "Fire ant mounds swell and multiply after every wet spell, then quiet in drought. Treating mounds early, before they spread across a yard, is far easier than chasing a lawn full of colonies in midsummer. For families with young children or pets, keeping on top of fire ants is as much a safety job as a nuisance one.",
      },
    ],
    prevention: [
      "Treat fire ant mounds early in the season before they spread across the yard.",
      "Clear standing water after rain to break the mosquito breeding cycle.",
      "Seal weep holes and foundation gaps on the north side to keep scorpions out.",
      "Keep mulch and wood away from the slab to reduce roach and termite harborage.",
    ],
    costNote:
      "Because the warm season is long, many San Antonio homes do best on a recurring plan, with scorpion exclusion added on the north side. A free inspection sets the plan to your lot and the pests you actually have.",
    faqs: [
      {
        question: "Are scorpions common in San Antonio?",
        answer:
          "On the rocky north and northwest sides toward the Hill Country, yes. The striped bark scorpion is the species here. Its sting hurts but is rarely dangerous to a healthy adult. They enter through weep holes and gaps, so sealing the home matters as much as treatment.",
      },
      {
        question: "How bad is fire ant season in San Antonio?",
        answer:
          "Fire ants are active year-round in Bexar County and surge after rain. Their stings are a hazard for children and pets, so treating mounds early, before they multiply across the yard, is worthwhile both for comfort and safety.",
      },
      {
        question: "Do I need mosquito control in San Antonio?",
        answer:
          "For homes with poor drainage or standing water, yes. The season runs roughly March through November, and West Nile virus is monitored across the county each summer, so removing standing water and treating resting areas helps.",
      },
      {
        question: "Why do roaches come indoors here in summer?",
        answer:
          "The large American roaches breed outdoors and move inside when it gets hot and dry, while German roaches breed indoors year-round. Sealing entry points and reducing outdoor harborage keeps the outdoor type out, while indoor German roaches need targeted treatment.",
      },
      {
        question: "Are termites a risk in San Antonio?",
        answer:
          "Yes. Eastern subterranean termites are active across the area and swarm in spring after rain. An annual inspection is sensible, especially for slab homes and any wood in contact with soil.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "New Braunfels", slug: "new-braunfels" },
      { name: "Austin", slug: "austin" },
      { name: "Houston", slug: "houston" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in San Antonio, TX | Fire Ants, Scorpions & Mosquitoes",
    metaDescription:
      "San Antonio pest control for fire ants, mosquitoes, roaches, Hill Country scorpions and subterranean termites. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "dallas",
    name: "Dallas",
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    tier: "T1",
    population: "~1.3 million",
    county: "Dallas County",
    climate: "hot-humid",
    climateDriver:
      "Dallas runs hot and humid through a long summer, with clay soils that crack in drought and swell after rain. That soil movement opens paths for termites and ants right up against foundations.",
    topPests: ["Fire Ants", "Mosquitoes", "Cockroaches", "Termites", "Rats"],
    pestProfile: [
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, surge after rain",
        note: "Fire ants are widespread across North Texas lawns and rebuild mounds fast after rain, posing a sting hazard for kids and pets.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Spring through fall",
        note: "Dallas County has active West Nile virus surveillance and spraying programs, as standing water and heat drive large summer broods.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "American roaches breed in drains and mulch and push indoors in the heat, while German roaches breed indoors in kitchens.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring",
        note: "The shifting clay soils common around Dallas open cracks that subterranean termites use to reach foundations and framing.",
      },
      {
        name: "Roof and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats travel fence lines and trees into attics, while Norway rats burrow near drains and foundations.",
      },
    ],
    localHook:
      "Dallas sits on shifting clay soil that cracks open every dry summer. Those cracks are an open door for subterranean termites and ants heading straight for your foundation.",
    intro:
      "If you own a home in Dallas, the soil is part of the pest story. The clay swells after rain and cracks in drought, and those gaps give termites and ants an easy route to the foundation. Add a long, hot summer and you get persistent fire ants, big summer mosquito broods, and roaches that move indoors in the heat. None of it is dramatic day to day, but it adds up, which is why steady protection works better here than waiting for a problem to appear.",
    sections: [
      {
        heading: "Why North Texas clay soil matters for pests",
        body: "Dallas clay moves with the weather. It swells when wet and pulls away from foundations as it dries, opening cracks. Subterranean termites use that soil contact and those gaps to reach wood, and ants follow the same paths indoors. It is one reason an annual termite inspection is worth keeping on the calendar here, particularly after a hot, dry stretch.",
      },
      {
        heading: "Fire ants and summer mosquitoes",
        body: "Fire ants are a year-round North Texas fixture that surges after rain, and their stings make them a safety issue for families. Mosquitoes are the other summer headache, and Dallas County runs active West Nile virus surveillance and spraying because the risk is real. Reducing standing water and treating resting areas takes a noticeable bite out of the season.",
      },
    ],
    prevention: [
      "Keep an annual termite inspection on the calendar given the clay soils here.",
      "Treat fire ant mounds early before they spread across the lawn.",
      "Empty anything holding water within a day of rain to cut mosquito breeding.",
      "Trim trees and fence-line vegetation back from the roof to block roof rats.",
    ],
    costNote:
      "With year-round fire ants, summer mosquitoes, and clay-soil termite risk, many Dallas homes use a recurring plan plus an annual termite check. A free inspection sets the price to your property.",
    faqs: [
      {
        question: "Why are termites a concern for Dallas foundations?",
        answer:
          "The clay soils around Dallas swell and crack with the weather, pulling away from foundations and opening gaps. Subterranean termites use that soil contact to reach wood. An annual inspection, especially after a hot dry spell, helps catch activity early.",
      },
      {
        question: "How serious are mosquitoes in Dallas?",
        answer:
          "Serious enough that Dallas County runs active West Nile virus surveillance and spraying each summer. Standing water and heat drive large broods, so removing standing water and treating shaded resting areas around the home makes a real difference.",
      },
      {
        question: "Are fire ants dangerous in North Texas?",
        answer:
          "Their stings are painful and can cause allergic reactions, which makes them a genuine safety concern for young children and pets. Fire ants are active year-round here and surge after rain, so treating mounds early is worthwhile.",
      },
      {
        question: "Do roaches in Dallas come from outside?",
        answer:
          "The large American roaches breed outdoors in drains and mulch and move inside in the heat, while German roaches breed indoors in kitchens. The outdoor type is controlled by sealing entry points and treating the perimeter, while indoor German roaches need targeted interior work.",
      },
      {
        question: "How do roof rats get into Dallas homes?",
        answer:
          "Roof rats climb. They follow fence lines, tree limbs, and utility wires to the roof and enter through gaps and vents. Trimming vegetation back and sealing roofline openings cuts off their access.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Fort Worth", slug: "fort-worth" },
      { name: "Plano", slug: "plano" },
      { name: "Houston", slug: "houston" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Dallas, TX | Fire Ants, Termites & Mosquitoes",
    metaDescription:
      "Dallas pest control for fire ants, mosquitoes, roaches, subterranean termites and roof rats. Clay-soil termite checks, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    tier: "T1",
    population: "~935,000",
    county: "Tarrant County",
    climate: "hot-humid",
    climateDriver:
      "Fort Worth sits at the western edge of the humid subtropical zone, drier than Houston or Dallas but still hot and humid enough to sustain year-round termite activity and a long mosquito season. The Trinity River and its creeks run through the city, providing consistent mosquito breeding habitat.",
    topPests: ["Termites", "Fire Ants", "Mosquitoes", "Cockroaches", "Rats"],
    pestProfile: [
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active most of the year",
        note: "Fort Worth and the DFW metroplex sit in a high termite pressure zone. The clay soils of North Texas retain moisture and support large subterranean termite colonies. Texas A&M AgriLife Extension identifies the DFW area as one of the highest-risk zones in the state.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active spring through fall",
        note: "Fire ants are widespread across the Fort Worth metro and rebuild mounds quickly after rain. They are a sting hazard in yards, parks, and commercial outdoor areas and are particularly aggressive in the spring.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The Trinity River system running through Fort Worth and the many retention ponds across Tarrant County create sustained mosquito breeding habitat. Tarrant County Public Health maintains an active West Nile virus monitoring program, and positive mosquito pools have been confirmed in past seasons.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "American cockroaches are common in the basements, crawl spaces, and drainage infrastructure of Fort Worth's older neighborhoods. German cockroaches are the dominant indoor species in apartment buildings and commercial kitchens.",
      },
      {
        name: "Roof rats and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats, attracted to the mature tree canopy of neighborhoods like Fairmount and Mistletoe Heights, are an increasing concern in Fort Worth. Norway rats are common in the denser commercial areas near the stockyards district.",
      },
    ],
    localHook:
      "Fort Worth and Dallas share the same high termite pressure zone, and the Trinity River system running through the city adds a long, active mosquito season on top of that. Tarrant County Public Health actively monitors West Nile virus because positive mosquito pools are a regular seasonal feature here.",
    intro:
      "Pest control in Fort Worth is shaped by the same forces that make the entire DFW metroplex a high-risk environment for termites: the clay soils retain moisture and support large subterranean colonies, and Texas A&M AgriLife Extension confirms this area is among the highest-risk in Texas. The Trinity River system and the county's many retention ponds add a long, active mosquito season monitored by Tarrant County Public Health for West Nile virus. Fire ants cover the yards, cockroaches are year-round indoors, and the city's mature tree canopy feeds a growing roof rat population.",
    sections: [
      {
        heading: "Clay soils and termite risk in Tarrant County",
        body: "The expansive clay soils of North Texas are excellent at holding moisture, which is exactly what subterranean termite colonies need. Fort Worth has the same termite profile as Dallas: high pressure, year-round activity beneath the soil, and a spring swarm season that often reveals established colonies inside homes. The typical signs are mud tubes on foundation walls, winged termites near windows in spring, and soft or hollow-sounding wood. Annual inspections are the standard of care here, not an optional extra.",
      },
      {
        heading: "The Trinity River and the mosquito season",
        body: "The Trinity River and its tributary creeks run through Fort Worth and create natural mosquito habitat that persists through the summer. Tarrant County has a mosquito abatement program and monitors West Nile virus activity through the season. Around the home, removing standing water from gutters, planters, bird baths, and any pooled areas after rain is the first line of defense. Treating the shaded resting spots under decks and in dense vegetation handles the second phase.",
      },
    ],
    prevention: [
      "Have an annual termite inspection given the DFW clay-soil high-pressure zone.",
      "Remove standing water from the yard after rain to reduce the Trinity River mosquito season.",
      "Treat fire ant mounds as they appear and do a yard sweep after significant rain events.",
      "Keep roof line and attic vents screened to block roof rats from the mature tree canopy neighborhoods.",
    ],
    costNote:
      "Fort Worth pest control is commonly quoted as a general year-round plan with termite protection quoted separately after inspection. Mosquito service is often added seasonally from April through October. Start with a free assessment.",
    faqs: [
      {
        question: "Is Fort Worth in a high termite risk zone?",
        answer:
          "Yes. Texas A&M AgriLife Extension identifies the DFW metroplex, including Tarrant County, as one of the highest termite pressure zones in Texas. The expansive clay soils retain moisture and support large subterranean colonies. Annual inspections are strongly recommended.",
      },
      {
        question: "Does Fort Worth have a West Nile virus risk?",
        answer:
          "Yes. Tarrant County Public Health maintains an active West Nile virus monitoring program and has confirmed positive mosquito pools in past seasons. The Trinity River system and the many retention ponds across the county provide breeding habitat through the active season from April through October.",
      },
      {
        question: "Are fire ants dangerous in Fort Worth?",
        answer:
          "Fire ants are a sting hazard, particularly for children and pets who may not notice a mound before disturbing it. They defend aggressively and can sting multiple times. In Fort Worth's yards and parks, treating mounds as they appear and checking after rain events keeps the risk manageable.",
      },
      {
        question: "Are cockroaches a year-round problem in Fort Worth?",
        answer:
          "Yes. The Fort Worth climate stays warm enough to sustain both indoor and outdoor cockroach activity year-round. American roaches are common in crawl spaces and drainage areas; German cockroaches are the primary indoor species in apartments and commercial settings.",
      },
      {
        question: "How do I know if I have roof rats versus Norway rats?",
        answer:
          "Roof rats are slender, with large ears and a long tail, and nest high up: in attics, trees, and vine-covered fences. Norway rats are stockier and burrow in the ground. Fort Worth's mature neighborhoods with tall tree canopy tend to see roof rat pressure. Both require professional assessment to treat effectively.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Dallas", slug: "dallas" },
      { name: "Arlington", slug: "arlington" },
      { name: "Plano", slug: "plano" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Fort Worth, TX | Termites, Fire Ants & Mosquitoes",
    metaDescription:
      "Fort Worth pest control for subterranean termites, fire ants, Trinity River mosquitoes, cockroaches and rats. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "el-paso",
    name: "El Paso",
    state: "Texas",
    stateSlug: "texas",
    stateAbbr: "TX",
    tier: "T1",
    population: "~680,000",
    county: "El Paso County",
    climate: "desert",
    climateDriver:
      "El Paso sits in the Chihuahuan Desert at the far western tip of Texas, bordering New Mexico and Mexico. Hot dry summers, mild winters, and very low humidity mean the pest environment is dominated by desert species: scorpions, black widows, and rodents seeking moisture and warmth.",
    topPests: ["Scorpions", "Black Widows", "Cockroaches", "Mice", "Ants"],
    pestProfile: [
      {
        name: "Arizona bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Active spring through fall, seek shelter indoors in peak heat",
        note: "Bark scorpions are present in the El Paso area and across far west Texas. Their sting is medically significant. Texas A&M AgriLife Extension confirms bark scorpions are found in the Trans-Pecos and El Paso regions. They enter homes seeking moisture and shelter, particularly in summer.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Black widows are very common across the desert southwest and found regularly in El Paso yards, utility boxes, wood piles, and garage storage areas. The female's bite is medically significant.",
      },
      {
        name: "American and Oriental cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, surge indoors in hot dry summer seeking moisture",
        note: "American and Oriental cockroaches enter El Paso homes seeking moisture during the intense summer heat. They are drawn to plumbing areas, under sinks, and basement drains. German cockroaches are the dominant species in commercial kitchens.",
      },
      {
        name: "House mice and pack rats (woodrats)",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "Pack rats, also called woodrats, are a distinctive desert pest that builds large stick nests and can damage vehicles and equipment with their nesting material. House mice are also common across the El Paso metro and enter homes in cooler months.",
      },
      {
        name: "Harvester and carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Red harvester ants are common in El Paso yards and bite aggressively when disturbed. Their mounds are a hazard in landscaped areas. Carpenter ants can nest in moist wood and cause structural damage.",
      },
    ],
    localHook:
      "El Paso's Chihuahuan Desert location means scorpions and black widows are not occasional surprises: they are regular features of the outdoor environment. New residents from wetter climates are often caught off guard by how common bark scorpion encounters are here compared with most of the country.",
    intro:
      "Pest control in El Paso is defined by the desert. The Chihuahuan Desert location means bark scorpions and black widows are everyday parts of the outdoor environment, not rare encounters. Texas A&M AgriLife Extension confirms bark scorpions are present in the El Paso region, and their sting is medically significant. The intense summer heat drives American cockroaches indoors seeking moisture, pack rats build nests in vehicles and under porches, and house mice push in when the desert cools each fall.",
    sections: [
      {
        heading: "Scorpions and black widows: daily desert realities",
        body: "El Paso residents learn quickly that bark scorpions and black widows are simply part of living in this desert environment. Scorpions enter homes seeking moisture and shelter during the hot summer, coming through gaps under doors, around utility lines, and through weep holes in brick construction. They are most active at night. Black widows prefer undisturbed dry spots: utility boxes, wood piles, storage areas, and the corners of outdoor structures. The practical defense is sealing entry points, treating the perimeter regularly, and checking stored items before handling them.",
      },
      {
        heading: "Pack rats: a specifically desert problem",
        body: "Pack rats, properly called woodrats, are common in the Chihuahuan Desert and create problems that most homeowners in wetter climates never encounter. They build large stick-and-debris nests in protected spots and cache materials in engine compartments, wheel wells, and under porches. A vehicle left parked for even a few weeks can accumulate a substantial pack rat nest. They chew wiring, insulation, and hoses. Regular inspection of vehicles and the areas under structures is worth doing if your property backs up to desert or open land.",
      },
    ],
    prevention: [
      "Seal gaps under doors, around utility penetrations, and weep holes in brick to reduce scorpion entry.",
      "Check shoes, gloves, and clothing left in the garage before putting them on.",
      "Inspect the engine compartment of infrequently used vehicles for pack rat nesting material.",
      "Remove wood piles, debris, and stored items from against the exterior walls to reduce black widow harborage.",
    ],
    costNote:
      "El Paso pest control is typically quoted as a general plan covering scorpions, spiders, cockroaches, and ants, with rodent exclusion quoted separately. Start with a free inspection to identify what is active.",
    faqs: [
      {
        question: "Are bark scorpions dangerous in El Paso?",
        answer:
          "Yes. Texas A&M AgriLife Extension confirms bark scorpions are present in the El Paso region, and their venom is medically significant, particularly for children and elderly individuals. They are not rare in the desert southwest and should be treated as an expected part of the environment here, managed through perimeter treatment and exclusion.",
      },
      {
        question: "What are pack rats and why are they a problem?",
        answer:
          "Pack rats are native desert rodents that build large stick nests and cache materials in protected spots. In residential settings they nest in engine compartments, under porches, and in wall voids. They chew through wiring, hoses, and insulation. A vehicle left parked on the edge of desert land can accumulate a substantial pack rat nest quickly.",
      },
      {
        question: "Why do cockroaches come inside so much in El Paso's summer?",
        answer:
          "American and Oriental cockroaches enter homes seeking moisture during the intense summer heat. The desert exterior becomes extremely dry, driving them toward air-conditioned, plumbing-adjacent spaces indoors. Fixing leaky pipes, reducing moisture under sinks, and sealing entry points reduces the summer surge.",
      },
      {
        question: "Where do black widows hide in El Paso?",
        answer:
          "Black widows prefer dry, undisturbed spots: utility meter boxes, wood piles, under outdoor furniture, behind stored items in garages, and in crawl spaces. They are not aggressive but will bite if pressed. Checking these spots regularly and wearing gloves when reaching into dark enclosed spaces is sensible practice.",
      },
      {
        question: "Is pest control different in the desert compared with other Texas cities?",
        answer:
          "Yes. El Paso's Chihuahuan Desert location means the dominant pest concerns are scorpions, black widows, and pack rats rather than the termites, mosquitoes, and fire ants that dominate in humid east Texas. Treatment focus shifts to perimeter sealing, moisture reduction, and desert-adapted species management.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Las Cruces", slug: "las-cruces" },
      { name: "Ciudad Juarez", slug: "ciudad-juarez" },
      { name: "Albuquerque", slug: "albuquerque" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in El Paso, TX | Scorpions, Black Widows & Desert Pests",
    metaDescription:
      "El Paso pest control for bark scorpions, black widows, American cockroaches, pack rats and harvester ants. Chihuahuan Desert specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
