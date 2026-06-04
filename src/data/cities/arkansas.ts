import type { CityLocation } from "@/types";

// Arkansas city data. Pest intelligence verified against University of Arkansas Cooperative Extension.

export const arkansasCities: CityLocation[] = [
  {
    slug: "little-rock",
    name: "Little Rock",
    state: "Arkansas",
    stateSlug: "arkansas",
    stateAbbr: "AR",
    tier: "T2",
    population: "~200,000",
    county: "Pulaski County",
    climate: "hot-humid",
    climateDriver:
      "Little Rock sits on the Arkansas River in central Arkansas with a humid subtropical climate. Hot, wet summers and mild winters keep pest activity high year-round. The Arkansas River, Fourche Creek, and the many residential ponds and drainage areas create sustained mosquito breeding habitat. The long warm season and high humidity favor both subterranean termites and German cockroaches.",
    topPests: ["Termites", "German Cockroaches", "Fire Ants", "Mosquitoes", "Bed Bugs"],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms February through April, active most of the year",
        note: "University of Arkansas Cooperative Extension identifies Arkansas as having heavy subterranean termite pressure throughout the state, with Pulaski County in a significant activity zone. The warm, humid Arkansas River valley climate keeps colonies active across most of the year.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the primary indoor pest in Little Rock apartments, restaurants, and older housing. The humid climate supports year-round breeding, and they spread readily through the shared walls and plumbing of multi-family housing. The University of Arkansas Extension confirms German cockroaches are a priority urban pest in Arkansas cities.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most aggressive spring through fall",
        note: "Fire ants are widespread across Pulaski County. The University of Arkansas Extension identifies them as one of the most economically significant pest problems in the state. Their mounds appear quickly after rain and pose a sting hazard in yards, parks, and commercial outdoor areas.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "March through October, peak June through September",
        note: "The Arkansas River, Fourche Creek, and abundant residential drainage areas provide breeding habitat through the warm season. Pulaski County runs a mosquito surveillance program, and the humid subtropical climate supports a long, active mosquito season. The Asian tiger mosquito is established in Little Rock.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Bed bugs are a growing concern in Little Rock hotels, shelters, and multi-family housing. University of Arkansas Extension confirms their increasing prevalence in Arkansas urban areas. They travel in luggage and used furniture and spread through shared walls in multi-unit buildings.",
      },
    ],
    localHook:
      "Little Rock sits on the Arkansas River in a part of the state with some of the highest termite pressure in the country. University of Arkansas Cooperative Extension ranks subterranean termites among the most economically damaging pests in Arkansas, and the Pulaski County climate keeps them active and swarming from February through spring. An annual inspection here is not optional.",
    intro:
      "Pest control in Little Rock works against a high-pressure subtropical baseline. University of Arkansas Cooperative Extension identifies Arkansas as having substantial subterranean termite activity, and the warm, humid Arkansas River valley climate keeps colonies productive most of the year. Fire ants are year-round across Pulaski County's lawns and green spaces. German cockroaches are the persistent indoor pest, aided by the humidity and multi-unit housing. The mosquito season runs from March through October with the Asian tiger mosquito adding daytime pressure. Bed bugs are a growing concern across the city's older housing stock.",
    sections: [
      {
        heading: "Termite pressure along the Arkansas River",
        body: "The moist, organic soils of the Arkansas River valley create excellent conditions for eastern subterranean termite colonies. University of Arkansas Cooperative Extension identifies heavy termite pressure throughout the state, and Little Rock's location in the humid subtropical zone means colonies stay active and productive across most of the year. The spring swarm season, running from February through April, is the most visible sign. Mud tubes on foundation walls and hollow-sounding wood are the other signals. An annual inspection is the standard protective measure for any Little Rock home.",
      },
      {
        heading: "Fire ants across Pulaski County",
        body: "Red imported fire ants are a fixture across Pulaski County and show no seasonal off period in Little Rock's climate. Mounds appear quickly after rain events and can be dense across residential lawns, parks, and any open grassy area. University of Arkansas Extension rates fire ants among the most economically significant pest problems in the state. For families with children and pets, maintaining yards clear of established mounds with prompt bait treatment is a safety matter as much as a nuisance issue.",
      },
    ],
    prevention: [
      "Schedule an annual termite inspection given the heavy Arkansas River valley pressure and year-round colony activity.",
      "Treat fire ant mounds as they appear and survey the yard after significant rain events.",
      "Remove standing water from gutters, containers, and drainage areas weekly to reduce the long mosquito season.",
      "Reduce humidity under crawl spaces and fix plumbing drips to limit cockroach breeding conditions.",
    ],
    costNote:
      "Little Rock pest control is typically quoted as a general recurring plan covering cockroaches, fire ants, spiders, and mice, with termite protection quoted separately after inspection. Mosquito treatment is a seasonal add-on. Start with a free assessment.",
    faqs: [
      {
        question: "How significant is the termite problem in Little Rock?",
        answer:
          "University of Arkansas Cooperative Extension identifies substantial subterranean termite pressure throughout Arkansas, and Little Rock's location in the humid Arkansas River valley puts it in an active zone. The warm climate keeps colonies productive most of the year, with spring swarming from February through April being the most visible sign. Annual inspections are strongly recommended for all Little Rock homeowners.",
      },
      {
        question: "Are fire ants a year-round problem in Little Rock?",
        answer:
          "Essentially yes. Little Rock's mild winters do not suppress fire ant colonies the way harsher climates do further north. Mounds can appear throughout the year and quickly rebuild after rain. University of Arkansas Extension ranks them among the state's most economically significant pest problems. They sting aggressively and are a hazard for children and pets.",
      },
      {
        question: "What makes German cockroaches so difficult to control in apartments?",
        answer:
          "They breed entirely indoors and spread through shared wall voids, plumbing chases, and service corridors in multi-unit buildings. Treating a single apartment in isolation gives temporary results because they reinfest from adjacent units. Effective management in multi-family buildings requires coordinated treatment covering neighboring units and shared spaces.",
      },
      {
        question: "Is the Asian tiger mosquito present in Little Rock?",
        answer:
          "Yes, the Asian tiger mosquito is established in Little Rock and bites throughout the day rather than just at dawn and dusk. It breeds in very small containers of standing water. Removing standing water from around the property is the most effective first step, followed by barrier treatments of shaded resting areas during the active season.",
      },
      {
        question: "How do bed bugs get into Little Rock homes?",
        answer:
          "Bed bugs travel in luggage, on used furniture, and through shared walls in multi-unit buildings. They do not fly and cannot jump, but they are good at hiding in seams, frames, and electrical outlets. University of Arkansas Extension confirms their increasing prevalence in Arkansas urban areas. If you suspect an infestation, an early inspection is important: small infestations are far easier and less expensive to treat than established ones.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "North Little Rock", slug: "north-little-rock" },
      { name: "Conway", slug: "conway" },
      { name: "Memphis", slug: "memphis" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Little Rock, AR | Termites, Fire Ants & Cockroaches",
    metaDescription:
      "Little Rock pest control for subterranean termites, fire ants, German cockroaches, mosquitoes and bed bugs. Pulaski County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
