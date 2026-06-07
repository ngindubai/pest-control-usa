import type { CityLocation } from "@/types";

// Rhode Island. Pest data reflects New England cold-humid urban conditions.
// Sources: URI Cooperative Extension, Providence city pest prevention guidance.

export const rhodeIslandCities: CityLocation[] = [
  {
    slug: "providence",
    name: "Providence",
    state: "Rhode Island",
    stateSlug: "rhode-island",
    stateAbbr: "RI",
    tier: "T2",
    population: "~190,000",
    county: "Providence County",
    climate: "cold-humid",
    climateDriver:
      "Providence sits at the head of Narragansett Bay in southern New England, giving the city a cold-humid climate with cold winters, warm and humid summers, and substantial rainfall year-round. The Woonasquatucket and Moshassuck rivers converge in downtown Providence, contributing to a riverside rodent corridor. The city's dense stock of older colonial and Victorian housing provides ideal harborage for rats, mice, and cockroaches, and the damp New England winters keep moisture-dependent pests comfortable through the cold months.",
    topPests: ["Norway Rats", "German Cockroaches", "Bed Bugs", "Carpenter Ants", "House Mice"],
    pestProfile: [
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round, peak activity in fall and winter",
        note: "Norway rats are the dominant rodent pest in Providence's older residential neighborhoods and commercial districts. The city's aging sewer infrastructure and the waterfront at the confluence of the Woonasquatucket and Moshassuck rivers sustain large rat populations that move between alley systems, storm drains, and the basements of older homes. Providence's city pest prevention program specifically addresses rat pressure in Fox Point, Federal Hill, and the South Side.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are pervasive in Providence's dense multi-family housing, the Thayer Street and Atwells Avenue restaurant corridors, and the older triple-decker apartment buildings common throughout Federal Hill and the South Side. Brown University and Rhode Island School of Design student housing areas see consistent German cockroach pressure from high-turnover rentals.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Providence has elevated bed bug activity relative to other New England cities, driven by the high density of rental housing, frequent tenant turnover in the student and working-class neighborhoods, and the older multi-family building stock that makes unit-to-unit containment difficult. The City of Providence's environmental health programs have addressed bed bug infestations in public housing consistently.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active April through October, most visible indoors in spring",
        note: "Carpenter ants are a consistent structural pest across Providence. The city's older wood-frame triple-deckers, colonial-era buildings, and the wood-heavy Victorian houses of College Hill and the East Side all provide carpenter ant nesting opportunities wherever moisture has softened the wood. Spring is the peak period when workers become visible indoors.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors October through March, active year-round once inside",
        note: "House mice are a year-round problem in Providence's older residential stock. Cold winters drive mice into heated buildings through gaps in aging foundations, utility penetrations, and around the shared wall penetrations of triple-decker buildings. Once inside a multi-unit building, mice spread between units through shared wall chases.",
      },
    ],
    localHook:
      "Providence's triple-decker apartment buildings, common throughout Federal Hill, the South Side, and Olneyville, are a direct legacy of the city's nineteenth-century immigrant mill-worker housing. They are also structurally ideal for German cockroaches and house mice, which spread between units through shared plumbing chases and wall voids. A pest problem in one unit of a triple-decker is rarely contained to that unit alone.",
    intro:
      "Pest control in Providence reflects the city's architecture and density. The older triple-deckers and colonial-era buildings of Federal Hill, the South Side, and College Hill provide the kind of aged foundations, shared walls, and moisture-prone wood that sustain Norway rats, German cockroaches, house mice, and carpenter ants across generations of tenants. Providence's position at the head of Narragansett Bay and at the confluence of two rivers gives the city a waterfront rat corridor that ties into the older alley and storm drain network throughout the downtown and the denser neighborhoods. Bed bug activity is elevated by the combination of high rental density and frequent turnover in student and working-class housing.",
    sections: [
      {
        heading: "Rat control in Providence's older neighborhoods",
        body: "Norway rats thrive in Providence because the environment provides exactly what they need: undisturbed harborage in aging basement and crawl space voids, food from the dense residential and commercial corridors, and protected travel routes through the alley systems and the aging sewer infrastructure. The City of Providence's own pest prevention guidance specifically addresses rat pressure in Fox Point, Federal Hill, Smith Hill, and the South Side. Effective rat control in Providence's older neighborhoods requires more than bait stations. It requires identifying the harborage areas, sealing building entry points, and coordinating treatment across adjacent properties. A single-property approach typically moves rats between buildings rather than reducing the overall population.",
      },
      {
        heading: "Cockroaches and the triple-decker challenge",
        body: "Providence's signature triple-decker apartment buildings were designed for shared walls, shared utilities, and maximum occupancy density. That design is also exactly how German cockroaches spread between units. They move through shared plumbing chases, electrical conduit runs, and gaps under and around interior doors. Treating one unit without coordinating with the adjacent units in the same building produces only temporary relief, because cockroaches from untreated units re-establish in the treated space within weeks. The most effective approach in a triple-decker is a building-wide gel bait program targeting harborage areas, combined with elimination of the moisture sources and food access points that sustain the population. Standard perimeter spray treatments have very limited effectiveness against German cockroaches in this type of structure.",
      },
    ],
    prevention: [
      "Seal basement utility penetrations, sill plate gaps, and any foundation cracks to block Norway rat and mouse entry.",
      "Use gel bait rather than perimeter spray for German cockroach control in multi-unit buildings.",
      "Inspect second-hand furniture and mattresses for bed bug signs before bringing them into the home.",
      "Check for moisture damage around leaky windows, bathroom plumbing, and porch connections to remove carpenter ant harborage.",
    ],
    costNote:
      "Providence pest control typically starts with a free inspection. Rat programs in older neighborhoods include exclusion work and bait station installation and are quoted after an on-site assessment. German cockroach programs in multi-family buildings require coordinated treatment across units for best results. Bed bug remediation is quoted separately by size and method. Carpenter ant programs include moisture assessment.",
    faqs: [
      {
        question: "Why are rats such a problem in Providence?",
        answer:
          "Providence's rat population is sustained by the aging sewer infrastructure, the dense alley systems in older neighborhoods, the waterfront corridors along the Woonasquatucket and Moshassuck rivers, and the abundance of basement and crawl space harborage in the city's older housing stock. The City of Providence pest prevention program specifically names Federal Hill, Fox Point, and the South Side as areas with high rat pressure. Effective control combines harborage removal, building exclusion, and bait station programs. Relying on bait alone without addressing harborage produces only short-term results.",
      },
      {
        question: "How do German cockroaches spread in Providence triple-deckers?",
        answer:
          "German cockroaches move between units in triple-deckers through shared plumbing chases, wall voids, and gaps under and around interior doors. They do not need to come in from outside once established in a building. This is why treating one unit in a triple-decker rarely resolves the problem: the cockroaches from adjacent untreated units simply re-establish in the treated space. A building-wide gel bait program is significantly more effective than spray-and-wait approaches in connected buildings.",
      },
      {
        question: "Are bed bugs common in Providence rentals?",
        answer:
          "Yes. Providence has elevated bed bug activity compared to many New England cities of similar size. The combination of high rental density, frequent tenant turnover in student and working-class neighborhoods, and older multi-family housing stock creates conditions where bed bug introductions are common. Inspecting second-hand furniture before bringing it home and knowing the signs, such as dark spots on mattress seams and a sweet musty odor, are the most effective preventive steps for renters.",
      },
      {
        question: "When do carpenter ants become active in Providence?",
        answer:
          "Carpenter ants overwinter in their colonies and become active in Providence from about April through October, with the most visible indoor activity in April and May when workers forage for food and water. Seeing large black ants consistently emerging from the same location indoors in spring indicates an established colony nearby, likely in moisture-damaged wood. An inspection can locate the colony and identify the moisture source driving it.",
      },
      {
        question: "How do mice get into Providence triple-deckers?",
        answer:
          "In Providence's older triple-deckers, house mice enter through gaps in the foundation sill plate, around utility penetrations, through gaps at plumbing entry points, and under poorly fitted exterior doors. Once inside the building envelope, they move between units through the shared wall chases. Exclusion work on the building perimeter stops new mice from entering. Trapping on each floor removes the mice already inside. Both steps together are necessary for lasting control in a connected building.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Cranston", slug: "cranston" },
      { name: "Pawtucket", slug: "pawtucket" },
      { name: "Woonsocket", slug: "woonsocket" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Providence, RI | Rats, Cockroaches & Bed Bugs",
    metaDescription:
      "Providence pest control for Norway rats, German cockroaches, bed bugs, carpenter ants and house mice. Rhode Island triple-decker and older-housing specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
