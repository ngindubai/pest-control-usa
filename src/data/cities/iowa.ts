import type { CityLocation } from "@/types";

// Iowa city data. Pest intelligence verified against Iowa State University Extension.

export const iowaCities: CityLocation[] = [
  {
    slug: "des-moines",
    name: "Des Moines",
    state: "Iowa",
    stateSlug: "iowa",
    stateAbbr: "IA",
    tier: "T2",
    population: "~215,000",
    county: "Polk County",
    climate: "cold-humid",
    climateDriver:
      "Des Moines has a continental climate with cold, snowy winters and hot, humid summers. The Des Moines and Raccoon Rivers run through the city, providing mosquito breeding habitat in summer. Cold winters drive mice and other rodents indoors hard each fall, and the seasonal extremes push boxelder bugs and earwigs to seek shelter in homes.",
    topPests: ["House Mice", "Boxelder Bugs", "Carpenter Ants", "German Cockroaches", "Earwigs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active year-round once inside",
        note: "Des Moines winters are severe enough to drive mice firmly into heated buildings by October. Iowa State University Extension identifies mice as the most common rodent pest in Iowa homes, with fall being the critical entry period. Older homes and those near the rivers see the heaviest pressure.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation (September to November), nuisance overwinter",
        note: "Boxelder bugs are one of the most complained-about fall pests in Des Moines. They aggregate on sun-facing building exteriors in September before working into wall voids for winter. Iowa State Extension confirms they are a major nuisance pest of central Iowa homes.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active April through September",
        note: "Carpenter ants are the dominant structural ant pest in Iowa. They nest in moist or decayed wood and are common in Des Moines homes with moisture issues around windows, rooflines, or deck framing. An established indoor colony can number in the thousands and damage wood over several years.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are the primary indoor cockroach species in Des Moines apartment buildings, restaurants, and multi-family housing. They breed entirely indoors in kitchens and bathrooms and do not depend on outdoor conditions.",
      },
      {
        name: "Earwigs",
        serviceSlug: "earwig-control",
        activeSeason: "Spring through fall, seek shelter indoors in summer heat",
        note: "Earwigs are a common outdoor-to-indoor pest in Des Moines during hot, dry spells. They breed in moist soil and mulch around the foundation and move indoors seeking moisture. Iowa State Extension confirms earwigs are a frequent nuisance pest in Iowa.",
      },
    ],
    localHook:
      "Des Moines winters are cold enough to make homes very attractive to mice. Iowa State University Extension consistently ranks mice as the most common rodent pest in Iowa homes, and the fall surge here, starting in October, is real. Sealing before the cold arrives is the single most effective pest prevention step for most Des Moines households.",
    intro:
      "Pest control in Des Moines follows Iowa's hard seasonal calendar. The cold winters bring a reliable fall mouse surge that Iowa State University Extension confirms is the most common rodent problem across Iowa homes. Boxelder bugs are the other fall fixture, aggregating by the thousands on building exteriors before pushing into wall voids. Through summer, carpenter ants are the structural concern, nesting in moist wood, while German cockroaches maintain year-round indoor populations in apartments and commercial settings. Earwigs bridge the gap, moving in from garden beds during dry spells.",
    sections: [
      {
        heading: "The fall mouse surge in Des Moines",
        body: "Iowa winters are serious, and mice know it. By October, house mice are actively searching for heated spaces and can squeeze through gaps as small as a dime. Des Moines homes near the Des Moines and Raccoon Rivers, and those with older construction or gaps around utility lines, see the heaviest fall pressure. The practical window for exclusion is September, before temperatures drop and mice start actively pressing in. Sealing foundation gaps, pipe penetrations, dryer vents, and the gaps under garage doors, combined with strategic trap placement inside, is the standard approach.",
      },
      {
        heading: "Carpenter ants and moisture",
        body: "Carpenter ants do not eat wood the way termites do, but they excavate galleries in moist or softened wood to nest, and over several years an established colony does real damage. In Des Moines, the most common sites are window frames with old caulk, roof lines with moisture intrusion, deck framing, and any wood touching the ground. Finding carpenter ants indoors in winter or spring usually means there is an established colony inside the structure rather than just foraging workers coming in from outside. Treatment targets the satellite colonies inside and the parent colony outside.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and the gap under garage doors in September before the fall mouse surge.",
      "Check window frames, roof lines, and deck framing for softened wood that may harbor carpenter ants.",
      "Reduce mulch depth against the foundation and fix drainage to reduce earwig breeding habitat.",
      "Seal gaps around windows and siding before September to limit boxelder bug entry.",
    ],
    costNote:
      "Des Moines pest control is typically quoted as a general plan covering mice, ants, spiders, and earwigs, with boxelder bug seasonal treatment added in fall. A free assessment identifies the specific pressure at your property.",
    faqs: [
      {
        question: "When do mice become a problem in Des Moines?",
        answer:
          "The surge starts in October as temperatures drop. Iowa State University Extension identifies mice as the most common rodent pest in Iowa homes, with fall as the critical entry period. Sealing foundation gaps, pipe penetrations, and the gap under garage doors in September is the most effective prevention step.",
      },
      {
        question: "What do carpenter ants look like and are they dangerous?",
        answer:
          "Carpenter ants are large black ants, typically a quarter inch or more in length. They do not sting and are not dangerous to people, but they excavate galleries in moist or softened wood that can damage structure over several years. Finding them indoors in winter or early spring usually indicates an established colony in the walls, which needs professional treatment.",
      },
      {
        question: "How do I stop boxelder bugs from getting into my Des Moines home?",
        answer:
          "Seal gaps around windows, siding, utility lines, and eaves before they begin aggregating in September. Treating the exterior of the building when they first start to mass is more effective than waiting until they have pushed into the wall voids. Once inside the walls, they are difficult to remove until spring.",
      },
      {
        question: "Are German cockroaches common in Des Moines apartments?",
        answer:
          "Yes. German cockroaches are the dominant indoor cockroach species in Des Moines apartment buildings, restaurants, and multi-family housing. They breed entirely indoors in kitchens and bathrooms. Because they spread through shared wall voids and plumbing, treatment in multi-unit buildings often needs to cover adjacent units for lasting results.",
      },
      {
        question: "Why do earwigs keep coming inside in summer?",
        answer:
          "Earwigs breed in moist soil and mulch around the foundation and move indoors when outdoor conditions become hot and dry. Reducing mulch depth against the foundation, fixing drainage issues, and sealing foundation gaps reduces their entry. They are harmless but are startling in large numbers.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Ames", slug: "ames" },
      { name: "Ankeny", slug: "ankeny" },
      { name: "Omaha", slug: "omaha" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Des Moines, IA | Mice, Boxelder Bugs & Carpenter Ants",
    metaDescription:
      "Des Moines pest control for house mice, boxelder bugs, carpenter ants, cockroaches and earwigs. Polk County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "cedar-rapids",
    name: "Cedar Rapids",
    state: "Iowa",
    stateSlug: "iowa",
    stateAbbr: "IA",
    tier: "T2",
    population: "~137,000",
    county: "Linn County",
    climate: "cold-humid",
    climateDriver:
      "Cedar Rapids sits along the Cedar River with a continental climate of hot, humid summers and cold winters. The river corridor sustains moisture conditions that favor carpenter ants and earwigs, and the city's major cereal and grain processing facilities attract Norway rats. Hard winters drive house mice firmly indoors by October, and the spring thaw brings carpenter ant swarms to any moisture-damaged wood.",
    topPests: ["House Mice", "Norway Rats", "Carpenter Ants", "German Cockroaches", "Boxelder Bugs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors October through March, active year-round once established",
        note: "Iowa State University Extension ranks mice as the most common rodent pest in Iowa homes, and the fall surge in Cedar Rapids typically begins in late September. Homes near grain storage and processing facilities see heavier than average pressure each fall.",
      },
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round near food sources, most visible fall through winter",
        note: "Cedar Rapids hosts major cereal and corn processing operations. Iowa State University Extension notes rats associated with food facilities spread into nearby residential blocks through storm drains and utility lines, placing nearby neighborhoods at higher risk than most Iowa cities.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active April through September",
        note: "The 2008 Cedar River flood left moisture in many Cedar Rapids homes that pest professionals still find today. Carpenter ants exploit softened wood around foundations, window frames, and rooflines. An established indoor colony can number in the thousands and excavate significant gallery damage over several years.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are the dominant cockroach species in Cedar Rapids apartment buildings, restaurants, and food service businesses. Iowa State University Extension identifies them as the most economically significant cockroach species in Iowa, breeding entirely indoors and spreading through shared wall voids.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation September through November",
        note: "Boxelder bugs gather on sun-facing exterior walls every fall in Cedar Rapids before pushing into wall voids for winter. Iowa State Extension confirms they are among the most frequently reported fall nuisance pests across central Iowa.",
      },
    ],
    localHook:
      "Cedar Rapids sits on the Cedar River, and the city's food processing industry combined with flood-affected older housing creates pest pressure beyond the standard Iowa seasonal pattern. Iowa State University Extension ranks mice as the top rodent pest in Iowa homes, and the Cedar Rapids fall surge starts in late September. Norway rats near the city's industrial corridors add a layer of pressure that residential streets close to those areas cannot ignore.",
    intro:
      "Pest control in Cedar Rapids follows Iowa's hard seasonal calendar but carries the city's own complications: food industry activity near residential neighborhoods, a Cedar River floodplain with lingering moisture in older homes, and a fall pest surge that Iowa State University Extension consistently marks as one of the most predictable events in Iowa. House mice arrive every October looking for heat. Norway rats move out from grain and cereal processing areas through the storm sewer system. Carpenter ants exploit any moisture-damaged wood left by the city's wet springs and the 2008 flood. German cockroaches maintain year-round indoor colonies in apartment buildings and commercial kitchens, and boxelder bugs deliver the most visible fall spectacle.",
    sections: [
      {
        heading: "Norway rats and the food industry connection",
        body: "Cedar Rapids is a major food processing hub with cereal and grain facilities operating in the city's industrial corridors. Norway rats near these operations are a persistent population, and Iowa State University Extension notes they spread into residential areas through storm drains and utility lines. Homes within a few blocks of food processing zones or along sewer corridors see rat pressure that most Iowa cities do not. The practical response is the same as with any rodent: seal exterior gaps, eliminate harborage, and address interior access points. In Cedar Rapids, professional monitoring near industrial adjacencies is worth starting before a visible problem appears.",
      },
      {
        heading: "Carpenter ants in flood-affected housing",
        body: "The 2008 Cedar River flood inundated large parts of the city and left moisture in walls, subfloors, and foundations that has supported carpenter ant activity for years afterward. Carpenter ants excavate galleries in softened or damp wood, and an established colony causes real structural damage over time. The most common signs are coarse sawdust near windowsills, door frames, or baseboards, and large black ants appearing indoors in winter or early spring. Finding carpenter ants indoors in winter almost always means an active colony inside the structure rather than foragers from outside. Treatment needs to locate and target that colony directly.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and garage door sweeps in September before the fall mouse surge.",
      "Inspect window frames and rooflines for moisture-softened wood that may harbor carpenter ants.",
      "Seal gaps around siding, utility lines, and eaves before September to limit boxelder bug entry.",
      "Keep garbage in sealed containers and eliminate standing water near the foundation to cut rat attractants.",
    ],
    costNote:
      "Cedar Rapids pest control is typically quoted as an annual plan covering rodents, ants, spiders, and cockroaches with seasonal boxelder bug treatment added in fall. Homes near river corridors or food processing areas may benefit from quarterly rodent monitoring. A free assessment establishes the correct treatment level for your property.",
    faqs: [
      {
        question: "Are Norway rats a real problem in Cedar Rapids residential areas?",
        answer:
          "In neighborhoods close to Cedar Rapids's food processing corridors and the Cedar River storm drain system, Norway rats can be a genuine problem rather than a rare event. Iowa State University Extension notes that rats associated with food industry facilities spread into residential blocks through utility and sewer infrastructure. Homes well away from industrial zones typically see mice rather than rats, but properties near those areas should include rat exclusion in any pest program.",
      },
      {
        question: "Why do I keep finding carpenter ants inside my Cedar Rapids home?",
        answer:
          "Finding carpenter ants indoors in winter or spring almost always means there is an established colony inside the building, not just foragers coming in from outside. Carpenter ants need moisture to nest, and Cedar Rapids has many homes with residual moisture from the 2008 flood or from the wet springs the Cedar River climate brings. A licensed technician can locate the colony and treat it directly, which is the only lasting solution.",
      },
      {
        question: "When is the mouse problem worst in Cedar Rapids?",
        answer:
          "The fall surge starts in late September and is most intense through October and November. Iowa State University Extension ranks mice as the top rodent complaint in Iowa homes each fall. Sealing foundation gaps, pipe penetrations, and the gap under garage doors before the surge is more cost-effective than dealing with an active infestation after mice are already inside.",
      },
      {
        question: "How do I stop boxelder bugs from getting into my walls in Cedar Rapids?",
        answer:
          "Treat the exterior of the building when boxelder bugs first begin to aggregate, usually in September in Cedar Rapids. Spraying sun-facing walls and sealing gaps around siding, utility lines, and eaves before they mass is far more effective than waiting. Once they have pushed into wall voids, they are nearly impossible to remove until spring when warming temperatures drive them out naturally.",
      },
      {
        question: "Do I need a professional exterminator in Cedar Rapids or can I handle pest control myself?",
        answer:
          "Many homeowners manage light ant activity and seasonal boxelder bugs without professional help. But Norway rats, established carpenter ant colonies, and German cockroach infestations in multi-unit buildings consistently need professional treatment. Rats are difficult to fully exclude without a thorough building inspection, and cockroaches in shared buildings require coordinated treatment across adjacent units for lasting results.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Des Moines", slug: "des-moines" },
      { name: "Iowa City", slug: "iowa-city" },
      { name: "Waterloo", slug: "waterloo" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Cedar Rapids, IA | Mice, Norway Rats & Carpenter Ants",
    metaDescription:
      "Cedar Rapids pest control for house mice, Norway rats, carpenter ants, German cockroaches and boxelder bugs. Linn County Cedar River corridor specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
