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
    population: "~140,000",
    county: "Linn County",
    climate: "cold-humid",
    climateDriver:
      "Cedar Rapids sits in Linn County in eastern Iowa along the Cedar River, with a cold-humid continental climate typical of the upper Midwest. Cold winters are genuinely cold, with temperatures regularly below zero in January, and warm, humid summers create active pest conditions from May through September. The Cedar River runs through the downtown core and flooded significantly in 2008 and 2016, events that displaced rodent populations across large areas of the city. Iowa's surrounding corn and soybean agricultural landscape contributes to fall mouse pressure as harvest removes field cover and drives rodents toward heated structures. The large food processing industry in Cedar Rapids, anchored by Quaker Oats and General Mills, creates a commercial pest environment that affects the surrounding residential areas.",
    topPests: ["House Mice", "Boxelder Bugs", "Carpenter Ants", "Yellowjackets", "Earwigs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Push indoors October through December, active year-round once inside",
        note: "House mice are the most significant pest in Cedar Rapids from October through spring. Iowa State University Extension identifies mice as the most common rodent pest in Iowa, and Cedar Rapids' position surrounded by agricultural corn and soybean fields means the city experiences an agricultural mouse push each fall as harvest strips outdoor cover. The Cedar River flood zone neighborhoods have older housing with foundation conditions that create significant mouse entry vulnerability.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "September through November entry, overwinter in wall voids",
        note: "Boxelder bugs are a predictable fall pest in Cedar Rapids. Linn County has substantial boxelder tree populations along its creek corridors and in established residential neighborhoods, and the annual fall aggregation events on warm south-facing walls are a consistent nuisance. They work into wall voids through window frame gaps and at utility penetrations.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, visible indoors in spring",
        note: "Carpenter ants are a structural concern in Cedar Rapids' older residential neighborhoods along the Cedar River and in the established tree-canopy areas of the city. The flood events of 2008 and 2016 left moisture damage in many structures that created new carpenter ant nesting opportunities. Iowa State University Extension recommends annual inspection of moisture-prone wood in flood-affected areas.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests active June through October, peak aggression August and September",
        note: "Yellowjackets are a consistent late-summer pest in Cedar Rapids' residential neighborhoods and parks along the Cedar River. Ground nests are the most common type encountered in yards. August and September are the peak risk period when colony size reaches its maximum and workers become most aggressive.",
      },
      {
        name: "Earwigs",
        serviceSlug: "earwig-control",
        activeSeason: "Spring through fall, peaks in late spring and early summer",
        note: "Earwigs are a nuisance pest in Cedar Rapids that push indoors through ground-level foundation gaps. They thrive in the moist, organic soil conditions common in the established residential neighborhoods along the Cedar River. Iowa's wet springs produce good earwig habitat in garden beds, mulch areas, and the leaf litter that accumulates along foundation perimeters.",
      },
    ],
    localHook:
      "The Quaker Oats and General Mills operations in Cedar Rapids make the city one of the most significant grain processing centers in the United States, and that concentration of food processing drives a commercial pest environment that affects the surrounding residential neighborhoods. Rodents from the industrial areas along the Cedar River press into adjacent residential blocks, and the commercial food waste environment sustains pest populations at above-average densities for a city of Cedar Rapids' size.",
    intro:
      "Pest control in Cedar Rapids deals with both the agricultural and the industrial influences that shape Linn County's pest landscape. House mice are the dominant fall threat, driven by both Iowa's surrounding corn harvest and the food processing activity in the city's industrial core. Boxelder bugs arrive predictably each September. Carpenter ants are a spring structural concern in the older housing near the Cedar River. Yellowjackets peak in August. Earwigs push indoors through foundation gaps in the wet spring conditions that eastern Iowa regularly produces.",
    sections: [
      {
        heading: "The Iowa corn harvest and the fall mouse push",
        body: "Cedar Rapids' position in the heart of Iowa's corn and soybean country creates a pest event that most urban residents do not associate with agriculture: the fall mouse push. As corn harvest progresses across Linn County in October, the cutting of field cover eliminates outdoor harborage for the mouse population living at field edges. Those mice, suddenly without shelter, move toward the nearest heated structures. For Cedar Rapids' outer residential areas near the rural-urban fringe, the October push can be intense. Iowa State University Extension specifically identifies the fall corn harvest as a driver of increased residential mouse pressure across Iowa cities each year. A mouse exclusion inspection completed in September, before harvest begins, is the most cost-effective approach. The key is sealing every entry point before the mouse population is displaced, because once mice are seeking entry, they probe every gap systematically.",
      },
      {
        heading: "Cedar River flood zone housing and structural pests",
        body: "Cedar Rapids' significant flood events in 2008 and 2016 left lasting moisture damage in the neighborhoods along the Cedar River, particularly in the New Bohemia, Czech Village, and Time Check neighborhoods that were most severely affected. Even homes that were repaired or rebuilt in the aftermath can retain hidden moisture damage in substructures, crawl spaces, and framing. Moisture-damaged wood is carpenter ant territory. Iowa State University Extension's guidance on post-flood pest management notes that moisture intrusion in structural wood creates conditions for carpenter ants, termites, and wood-decay fungi for years after the initial flood event, often longer than the visible damage would suggest. Homes in the flood-affected areas that have not had a professional structural inspection for moisture-related pest damage in the past several years should consider scheduling one.",
      },
    ],
    prevention: [
      "Schedule mouse exclusion work in September before Iowa's corn harvest displaces field mice toward residential structures.",
      "Seal window frame gaps and foundation utility penetrations before September to limit boxelder bug entry.",
      "Inspect moisture-prone wood around flood-affected areas, crawl spaces, and any chronic leak areas for carpenter ant activity each spring.",
      "Clear leaf litter and mulch from the foundation perimeter in spring to reduce earwig harborage near the structure.",
    ],
    costNote:
      "Cedar Rapids pest services start with a free inspection. Fall exclusion programs are most effective when completed before October. Mouse programs include exclusion and trapping. Boxelder bug treatment is a late-August perimeter application. Carpenter ant programs include moisture assessment and are best scheduled in spring. Yellowjacket treatment is quoted per nest.",
    faqs: [
      {
        question: "Why does the fall mouse push in Cedar Rapids feel worse than in other cities?",
        answer:
          "Cedar Rapids is surrounded by Iowa's agricultural corn and soybean landscape, and when the fall harvest removes field cover across Linn County each October, the mice that lived at field edges lose their shelter simultaneously. Those mice move toward any heated structure, and Cedar Rapids' outer residential areas near the rural fringe see a coordinated push rather than the gradual trickle that purely urban cities experience. Iowa State University Extension specifically identifies this agricultural driver as a source of elevated fall mouse pressure across Iowa cities.",
      },
      {
        question: "Did the Cedar River floods make pest problems worse in Cedar Rapids?",
        answer:
          "The 2008 and 2016 flood events left moisture damage in the neighborhoods along the Cedar River that creates ongoing carpenter ant and termite conditions even in repaired structures. Moisture intrusion in structural wood can persist for years after visible water damage is remediated. Homes in the New Bohemia, Czech Village, and Time Check flood zone areas should have a professional moisture assessment of structural wood for pest activity, particularly if the last professional inspection was several years ago.",
      },
      {
        question: "When are boxelder bugs most active in Cedar Rapids?",
        answer:
          "The aggregation events typically begin in September when temperatures start dropping and the bugs seek overwintering sites on sun-warmed walls. The entry window into wall voids is September through October. Sealing window frame gaps and utility penetrations on south- and west-facing walls before mid-September is the effective preventive step. Once boxelder bugs are inside wall voids, they overwinter until spring and emerge toward light sources on warm winter days.",
      },
      {
        question: "Are carpenter ants common in Cedar Rapids?",
        answer:
          "Yes, particularly in the older neighborhoods along the Cedar River and in the established residential areas with large tree canopy. Carpenter ants target moisture-damaged wood, and Cedar Rapids' flood history has left some of that moisture damage in structural wood in the affected neighborhoods. Spring is the peak period when workers become visible indoors. Finding a consistent trail of large black ants emerging from the same indoor location in April or May indicates an established nearby colony rather than foragers from outside.",
      },
      {
        question: "How do the Quaker Oats and General Mills operations affect pest pressure in Cedar Rapids?",
        answer:
          "The large grain processing operations along the Cedar River create a concentrated food environment that sustains rodent populations at commercial scale. Those populations press outward from the industrial areas into adjacent residential neighborhoods. Residents near the industrial corridors along the river typically see more persistent rodent pressure than those in the purely residential interior of the city. A year-round monitoring and exclusion approach is more appropriate for those properties than a reactive-only response.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Des Moines", slug: "des-moines" },
      { name: "Iowa City", slug: "iowa-city" },
      { name: "Waterloo", slug: "waterloo" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Cedar Rapids, IA | Mice, Boxelder Bugs & Carpenter Ants",
    metaDescription:
      "Cedar Rapids pest control for house mice, boxelder bugs, carpenter ants, yellowjackets and earwigs. Linn County Iowa Cedar River grain city specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
