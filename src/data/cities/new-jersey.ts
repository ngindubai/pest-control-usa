import type { CityLocation } from "@/types";

// New Jersey. Pest data reflects humid subtropical to continental Mid-Atlantic
// conditions and dense urban housing. Spotted lanternfly data from NJ Dept of Agriculture.

export const newJerseyCities: CityLocation[] = [
  {
    slug: "newark",
    name: "Newark",
    state: "New Jersey",
    stateSlug: "new-jersey",
    stateAbbr: "NJ",
    tier: "T1",
    population: "~305,000",
    county: "Essex County",
    climate: "hot-humid",
    climateDriver:
      "Newark sits in the dense northern New Jersey urban corridor near the Passaic River and Newark Bay. Hot humid summers and cold winters combine with one of the densest housing environments in the country to sustain year-round rodent, cockroach, and bed bug pressure.",
    topPests: ["Rats", "Cockroaches", "Bed Bugs", "Mice", "Spotted Lanternfly"],
    pestProfile: [
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Newark's dense urban environment, proximity to the port and rail infrastructure, and older multi-family housing sustain significant Norway rat pressure. Rats move readily between buildings through shared walls, alleys, and the sewer system.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Newark's dense apartment stock. They spread between units through shared plumbing voids and wall cavities, which is why treating a single apartment in a multi-family building rarely produces lasting results.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "The dense rental housing, high tenant turnover, and proximity to major transit hubs sustain steady bed bug pressure across Newark. Multi-family buildings see ongoing introductions.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "Mice push into Newark's older buildings as temperatures drop in fall. The dense, older housing stock has abundant entry points and shared voids that allow mice to move between units.",
      },
      {
        name: "Spotted lanternfly",
        serviceSlug: "stink-bug-control",
        activeSeason: "Adults late summer through fall, egg masses over winter",
        note: "New Jersey is under a spotted lanternfly quarantine across many counties. This invasive planthopper swarms trees, decks, and outdoor surfaces in late summer and lays egg masses over winter. It is a plant threat and a major nuisance rather than a danger to people.",
      },
    ],
    localHook:
      "Newark is one of the densest cities in one of the densest states in the country, and that density is the whole pest story. Rats, roaches, mice, and bed bugs all move between buildings through shared walls and alleys, which is why pest control here only really works when neighboring units are handled together, not one apartment at a time.",
    intro:
      "Pest control in Newark is defined by density. As one of the most densely populated cities in the country, Newark gives rats, cockroaches, mice, and bed bugs exactly what they need: connected buildings, shared walls and plumbing, and constant movement of people and goods. The result is year-round pressure that does not pause for winter indoors. Add the spotted lanternfly, an invasive insect under state quarantine that swarms outdoor spaces each fall, and Newark homeowners and building managers face a genuinely demanding environment.",
    sections: [
      {
        heading: "Why density changes the whole approach",
        body: "In a single-family suburb, treating your home solves your pest problem. In Newark's dense multi-family stock, it often does not. German cockroaches, mice, and rats move freely between units through shared plumbing voids, wall cavities, and utility chases. Treating one apartment while the adjacent units go untreated just pushes the population next door temporarily, and it returns. Effective control in this environment means coordinated treatment across affected units and building-wide exclusion work, which is why working with the building management matters as much as treating your own space.",
      },
      {
        heading: "The spotted lanternfly and the fall quarantine",
        body: "New Jersey is under a spotted lanternfly quarantine across many counties, Essex included. This invasive planthopper arrived in the region and spread quickly. Adults swarm trees, decks, sidewalks, and building exteriors in late summer and early fall, then lay mud-like egg masses on flat outdoor surfaces over winter. They do not bite or damage buildings, but they are a serious threat to plants and trees and an overwhelming nuisance in large numbers. Scraping egg masses over winter and treating host trees reduces the following year's population.",
      },
    ],
    prevention: [
      "Coordinate cockroach and rodent treatment across adjacent units in multi-family buildings for lasting results.",
      "Seal foundation gaps, pipe penetrations, and utility chases to limit rodent movement between units.",
      "Inspect second-hand furniture for bed bug signs before bringing it into the building.",
      "Scrape spotted lanternfly egg masses off outdoor surfaces over winter to reduce next year's numbers.",
    ],
    costNote:
      "Newark pest control typically separates rodent exclusion and bed bug remediation from recurring general pest service. In multi-family buildings, coordinated treatment across units is more cost-effective than repeated single-unit visits. Start with a free inspection.",
    faqs: [
      {
        question: "Why do cockroaches come back after treatment in my Newark apartment?",
        answer:
          "In dense multi-family buildings, German cockroaches move between units through shared plumbing voids and wall cavities. Treating only your apartment while adjacent units go untreated pushes the population next door temporarily, and it returns. Lasting control requires coordinated treatment across affected units and building-wide exclusion, which is why involving building management matters.",
      },
      {
        question: "How serious is the rat problem in Newark?",
        answer:
          "Significant. Newark's dense urban environment, proximity to the port and rail infrastructure, older multi-family housing, and aging sewer system all sustain Norway rat pressure. Rats move between buildings through alleys, shared walls, and below ground. Effective control combines harborage removal, building exclusion, and baiting.",
      },
      {
        question: "What is the spotted lanternfly and should I be worried?",
        answer:
          "The spotted lanternfly is an invasive planthopper under state quarantine across many New Jersey counties. It swarms trees, decks, and outdoor surfaces in late summer and lays egg masses over winter. It does not bite people or damage buildings, but it is a serious threat to plants and trees and a major nuisance in large numbers. Scraping egg masses and treating host trees reduces its spread.",
      },
      {
        question: "Is bed bug risk high in Newark?",
        answer:
          "Yes. The dense rental housing, high tenant turnover, and proximity to major transit hubs sustain steady bed bug introductions. Inspecting second-hand furniture before bringing it in, and acting quickly at the first signs (dark spots on mattress seams, a sweet musty odor), are the best defenses in a dense building.",
      },
      {
        question: "Do I need year-round pest control in Newark?",
        answer:
          "For apartment and multi-family residents, generally yes. Rats, cockroaches, mice, and bed bugs are year-round concerns in dense housing, and the indoor pressure does not pause for winter. Continuous, coordinated management is more effective than reacting to each individual incident.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Jersey City", slug: "jersey-city" },
      { name: "Elizabeth", slug: "elizabeth" },
      { name: "Paterson", slug: "paterson" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Newark, NJ | Rats, Cockroaches & Bed Bugs",
    metaDescription:
      "Newark pest control for Norway rats, German cockroaches, bed bugs, mice and spotted lanternfly. Multi-family specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "jersey-city",
    name: "Jersey City",
    state: "New Jersey",
    stateSlug: "new-jersey",
    stateAbbr: "NJ",
    tier: "T1",
    population: "~290,000",
    county: "Hudson County",
    climate: "hot-humid",
    climateDriver:
      "Jersey City sits directly across the Hudson River from Manhattan, one of the densest urban environments in the country. The waterfront location, the mix of historic brownstones and high-rise towers, and the constant movement of people across the river sustain year-round rodent, cockroach, and bed bug pressure.",
    topPests: ["Rats", "Cockroaches", "Bed Bugs", "Mice", "Spotted Lanternfly"],
    pestProfile: [
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Jersey City's waterfront location, dense development, aging sewer infrastructure, and proximity to the port sustain significant Norway rat pressure. Rapid construction and redevelopment also displace rat populations into surrounding neighborhoods.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches dominate the indoor pest picture in Jersey City's apartment towers and older brownstone stock. They spread between units through shared plumbing and wall voids in both high-rise and low-rise multi-family buildings.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "The dense rental housing, high resident turnover, and constant commuter movement between Jersey City and New York City sustain steady bed bug pressure across the city.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "Mice are common in both the historic brownstones and the high-rise towers, moving through shared walls and utility chases. The older housing stock in neighborhoods like the Heights and Journal Square has abundant entry points.",
      },
      {
        name: "Spotted lanternfly",
        serviceSlug: "stink-bug-control",
        activeSeason: "Adults late summer through fall, egg masses over winter",
        note: "Hudson County is within the New Jersey spotted lanternfly quarantine zone. The invasive planthopper swarms trees and outdoor surfaces in late summer, a particular nuisance on Jersey City's waterfront walkways and parks.",
      },
    ],
    localHook:
      "Jersey City packs historic brownstones and gleaming high-rise towers into one of the densest footprints in the country, right on the Hudson. Whether you live in a hundred-year-old walk-up or a new waterfront tower, the pest challenge is the same: in dense buildings, rats, roaches, and mice move between units, so the fix has to think beyond your own four walls.",
    intro:
      "Pest control in Jersey City spans two worlds: century-old brownstones and brand-new high-rise towers, packed into one of the densest urban footprints in the United States right across the Hudson from Manhattan. Both face the same core challenge. In dense buildings, rats, cockroaches, and mice travel between units through shared walls, plumbing, and utility chases. The waterfront location and aging infrastructure sustain Norway rat pressure, bed bugs ride the constant commuter movement, and the spotted lanternfly swarms the waterfront parks each fall under a county-wide quarantine.",
    sections: [
      {
        heading: "Step one: identify how pests move through your building",
        body: "Whether you are in a brownstone walk-up or a high-rise tower, the first step in Jersey City pest control is understanding the building's connections. German cockroaches and mice travel through shared plumbing voids, wall cavities, and utility chases. A unit on the fifth floor can have cockroaches that originated three floors down. This is why effective treatment maps the building's pathways and coordinates across affected units rather than treating one apartment in isolation. In a single-family home this step is simple. In Jersey City's dense stock it is the whole job.",
      },
      {
        heading: "Step two: address the waterfront and redevelopment rat pressure",
        body: "Jersey City's Norway rat pressure comes from its waterfront location, aging sewer infrastructure, and the constant redevelopment reshaping the city. Construction displaces established rat populations, pushing them into surrounding occupied buildings. Effective control means sealing the building envelope against entry, removing harborage and food sources around the property, and baiting strategically. Properties near active construction or the waterfront warrant extra attention during redevelopment periods.",
      },
    ],
    prevention: [
      "Coordinate cockroach and rodent treatment across affected units, since pests move between apartments in dense buildings.",
      "Seal gaps around pipes, utility chases, and the foundation to limit rodent movement.",
      "Inspect luggage and second-hand furniture for bed bugs given the heavy commuter movement to and from New York.",
      "Scrape spotted lanternfly egg masses off outdoor surfaces over winter to reduce next year's numbers.",
    ],
    costNote:
      "Jersey City pest control separates rodent exclusion and bed bug remediation from recurring general pest service. In apartment buildings, coordinated treatment across units is more cost-effective than repeated single-unit visits. Start with a free inspection.",
    faqs: [
      {
        question: "I live in a new high-rise. Why do I still have cockroaches?",
        answer:
          "Even new high-rise towers have shared plumbing voids, wall cavities, and utility chases that let German cockroaches move between units. A unit can have cockroaches that originated on a different floor. Treating only your apartment rarely solves it. Effective control maps the building's pathways and coordinates treatment across affected units, which usually means involving building management.",
      },
      {
        question: "Why is the rat problem significant in Jersey City?",
        answer:
          "Jersey City's waterfront location, aging sewer infrastructure, proximity to the port, and constant redevelopment all drive Norway rat pressure. Construction displaces established rat populations into surrounding occupied buildings. Effective control combines building exclusion, harborage and food removal, and strategic baiting, with extra attention near active construction.",
      },
      {
        question: "Does Jersey City have spotted lanternflies?",
        answer:
          "Yes. Hudson County is within the New Jersey spotted lanternfly quarantine zone. The invasive planthopper swarms trees and outdoor surfaces in late summer and early fall, and is a particular nuisance on the waterfront walkways and parks. It does not harm people or buildings but threatens plants. Scraping egg masses over winter reduces the spread.",
      },
      {
        question: "Is bed bug risk higher in Jersey City because of the commute to NYC?",
        answer:
          "The constant commuter movement between Jersey City and New York, combined with dense rental housing and high resident turnover, does sustain steady bed bug pressure. Inspecting luggage and second-hand furniture, and acting at the first signs, are the best defenses. Bed bugs travel on belongings, not on people directly.",
      },
      {
        question: "Do brownstones and high-rises need different pest control?",
        answer:
          "The principles are the same but the details differ. Both have shared pathways that let pests move between units. Older brownstones tend to have more foundation and structural entry points, while high-rises rely more on utility chases and shared plumbing. In both cases, coordinated multi-unit treatment outperforms single-unit visits.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Newark", slug: "newark" },
      { name: "Hoboken", slug: "hoboken" },
      { name: "Bayonne", slug: "bayonne" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Jersey City, NJ | Rats, Cockroaches & Bed Bugs",
    metaDescription:
      "Jersey City pest control for Norway rats, German cockroaches, bed bugs, mice and spotted lanternfly. High-rise and brownstone specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "paterson",
    name: "Paterson",
    state: "New Jersey",
    stateSlug: "new-jersey",
    stateAbbr: "NJ",
    tier: "T2",
    population: "~160,000",
    county: "Passaic County",
    climate: "cold-humid",
    climateDriver:
      "Paterson is New Jersey's third-largest city and one of the most densely populated in the state, located in Passaic County along the Passaic River. The cold-humid northeastern climate delivers cold winters and hot, humid summers. The city's dense urban fabric, older housing stock ranging from 19th-century industrial worker housing to mid-century apartment blocks, and the Passaic River's flood history create the conditions for persistent urban pest pressure: bed bugs, rats, cockroaches, and mice are the year-round baseline.",
    topPests: ["Bed Bugs", "Norway Rats", "German Cockroaches", "House Mice", "Stink Bugs"],
    pestProfile: [
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Bed bugs are a persistent issue throughout Paterson's multi-family housing stock. The city's high residential density, frequent resident turnover, and older apartment buildings create conditions where bed bug introductions are common and spread between units is easy. Paterson's position in the northeastern urban corridor amplifies introduction risk through transit and furniture.",
      },
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Norway rats are established throughout Paterson's older commercial corridors, along the Passaic River, and in neighborhoods with aging underground infrastructure. The Great Falls of the Passaic and the industrial history of the city created infrastructure that sustains rat populations in the drainage system. They burrow at foundation lines and enter structures through drain connections and foundation gaps.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are a significant concern in Paterson's multi-family housing and commercial food establishments. They spread between units through shared plumbing and utility runs. The density of the city's apartment stock means individual unit treatment without building-wide coordination often fails within weeks.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round in urban environments, surge in fall",
        note: "House mice are present year-round in Paterson's older residential and commercial buildings. The aging building stock has ample settled gaps, and mice maintain resident populations that are active even in summer. Fall brings a new influx as outdoor populations seek warmth.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "September through November entry, overwinter indoors",
        note: "Stink bugs are a significant fall nuisance in Paterson and across the Passaic Valley. They invade from the wooded slopes of the Watchung Mountains to the east and south, and from the agricultural and suburban land in the broader Passaic County region. Older buildings with more exterior gaps see heavier entry.",
      },
    ],
    localHook:
      "Paterson was one of the first industrial cities in the United States, and Alexander Hamilton's Society for Establishing Useful Manufactures built its mills at the Great Falls here in the 1790s. That industrial history left behind a dense, old, built environment with aging infrastructure, and aging infrastructure is exactly the environment where Norway rats and house mice establish most successfully.",
    intro:
      "Pest control in Paterson is an urban management challenge. The city's dense pre-war and industrial housing stock, older utility infrastructure, and high residential density create conditions where bed bugs, rodents, and cockroaches are present year-round in most neighborhoods. Norway rats use the Passaic River corridor and the aging drainage system as their baseline habitat. Bed bugs move readily through the city's multi-family buildings. German cockroaches sustain themselves in the commercial district and older apartment blocks. Fall stink bug invasions arrive from the wooded areas around the Passaic Valley each September.",
    sections: [
      {
        heading: "Bed bug management in Paterson's dense housing",
        body: "Bed bugs in Paterson's multi-family buildings present the same challenge as in any dense northeastern city: individual unit treatment without addressing adjacent units usually fails within weeks as bed bugs re-enter from neighboring spaces. Effective management requires coordinated building-wide treatment when an infestation is identified, along with encasements on mattresses and box springs to prevent re-infestation of treated items. Tenants have rights to responsive pest treatment under New Jersey landlord-tenant law. If management is unresponsive, documenting the infestation and reporting it to Passaic County health authorities is an available option.",
      },
      {
        heading: "Rat exclusion in older Paterson buildings",
        body: "Norway rats in Paterson enter structures through the same routes they have always used: drain connections, gaps at foundation level, and deteriorated masonry joints. Older buildings along the industrial corridor and near the Passaic River have more of these entry points than newer construction. Exclusion work requires a thorough inspection of the foundation perimeter, drain connections, and any point at or below grade where rats could access the building interior. Steel wool or hardware cloth must be used inside gaps before sealing, because rats chew through expanding foam. Trapping removes current animals; exclusion keeps new ones out.",
      },
    ],
    prevention: [
      "Inspect any secondhand furniture or mattresses for bed bug signs before bringing them into the home.",
      "Seal gaps at the foundation, around drain connections, and at any below-grade entry point to block Norway rat entry.",
      "Keep kitchen food in sealed containers and fix leaking fixtures to reduce cockroach foraging incentive.",
      "Seal gaps around windows and utility penetrations before September to limit stink bug entry.",
    ],
    costNote:
      "Paterson pest control pricing depends on building type and infestation extent. Bed bug treatment in multi-unit buildings is quoted by scope of affected units. Rodent programs include inspection, exclusion, and trapping. Cockroach programs are monthly for multi-family buildings. Everything starts with a free inspection.",
    faqs: [
      {
        question: "Are bed bugs common in Paterson apartments?",
        answer:
          "Bed bugs are a persistent pest in Paterson's multi-family housing, driven by the city's density, older building stock, and regular resident turnover. They are introduced through travel, secondhand furniture, and adjacent units. The key is early detection: small infestations are substantially less expensive to treat than large ones. If you see small reddish-brown spots on bedding, or wake with bites in a linear pattern, request an inspection immediately.",
      },
      {
        question: "Why are Norway rats so common near the Passaic River in Paterson?",
        answer:
          "The Passaic River corridor and Paterson's 19th-century drainage infrastructure have sustained Norway rat populations for generations. Rats live in burrows near water sources and use the storm drain and sewer system to move through the city. Properties near the river, near Great Falls, and along older commercial corridors have the highest rat activity. Exclusion work at the foundation and drain connection level, combined with trapping, is the effective management approach.",
      },
      {
        question: "What rights do Paterson renters have regarding pest control?",
        answer:
          "Under New Jersey's Truth in Renting Act and the Landlord-Tenant Act, landlords are required to maintain rental properties in a habitable condition, which includes addressing pest infestations. If you report a pest problem in writing and the landlord fails to respond within a reasonable timeframe, you can escalate to the Passaic County health department or the New Jersey Department of Community Affairs. Keep documentation of your reports and any management responses.",
      },
      {
        question: "How do I prevent German cockroaches in my Paterson home?",
        answer:
          "German cockroaches in multi-unit buildings are primarily managed at the building level. Within your unit, the most effective steps are: keep food in sealed containers, address any moisture issues under sinks and around pipes, and use gel bait in harborage areas rather than sprays. Request coordinated building treatment through management. German cockroaches do not come from outdoors, they spread through shared indoor spaces, so managing them effectively requires treating all infested units together.",
      },
      {
        question: "When are stink bugs most active in Paterson?",
        answer:
          "September and October are the peak invasion months. Brown marmorated stink bugs aggregate on exterior walls seeking warm overwintering sites and enter through gaps around windows, utility lines, and siding. Buildings in Paterson with more exterior gaps, particularly older multi-family stock, see heavier entry. Sealing those gaps before September is the primary prevention. Inside, avoid crushing stink bugs: the odor is strong and persistent. Vacuum them up instead.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Newark", slug: "newark" },
      { name: "Jersey City", slug: "jersey-city" },
      { name: "Clifton", slug: "clifton" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Paterson, NJ | Bed Bugs, Rats & Cockroaches",
    metaDescription:
      "Paterson pest control for bed bugs, Norway rats, German cockroaches, house mice and stink bugs. Passaic County urban specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
