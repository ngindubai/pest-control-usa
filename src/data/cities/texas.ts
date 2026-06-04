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
];
