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
    contentSoul: "neighbour",
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
    contentSoul: "neighbour",
    metaTitle: "Pest Control in Dallas, TX | Fire Ants, Termites & Mosquitoes",
    metaDescription:
      "Dallas pest control for fire ants, mosquitoes, roaches, subterranean termites and roof rats. Clay-soil termite checks, free inspection. Call 1-800-PEST-USA.",
  },
];
