import type { CityLocation } from "@/types";

// Oklahoma. Pest data reflects humid subtropical to semi-arid Great Plains conditions.
// Brown recluse data from Oklahoma State University Extension.

export const oklahomaCities: CityLocation[] = [
  {
    slug: "oklahoma-city",
    name: "Oklahoma City",
    state: "Oklahoma",
    stateSlug: "oklahoma",
    stateAbbr: "OK",
    tier: "T1",
    population: "~700,000",
    county: "Oklahoma County",
    climate: "hot-humid",
    climateDriver:
      "Oklahoma City sits at the crossroads of humid subtropical air from the Gulf and dry air from the High Plains. Hot humid summers and mild winters keep termites and cockroaches active most of the year, while the North Canadian River and Lake Hefner feed the mosquito season.",
    topPests: [
      "Termites",
      "Brown Recluse Spiders",
      "Fire Ants",
      "Cockroaches",
      "Mosquitoes",
    ],
    pestProfile: [
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms April through June, active most of the year",
        note: "Oklahoma is in a high termite pressure zone according to the USDA Forest Service hazard map. The clay soils and hot humid summers support large, active colonies that can go undetected for years in crawl spaces and wall cavities.",
      },
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, most active spring through fall",
        note: "Oklahoma is in the core geographic range of the brown recluse. Oklahoma State University Extension confirms they are genuinely common household pests here, regularly found in garages, attics, closets, and storage boxes. This is not an occasional finding.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active spring through fall",
        note: "Fire ants are widespread across Oklahoma and rebuild mounds quickly after rain events. They are a sting hazard in yards and parks and an increasing concern in commercial settings.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches favor kitchens and bathrooms and spread easily through shared walls in apartment buildings. American cockroaches are common in basements and around drainage infrastructure.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The North Canadian River, Lake Hefner, Lake Overholser, and the standing water left after Oklahoma's significant storm events all provide mosquito breeding habitat. West Nile virus activity has been recorded in Oklahoma County.",
      },
    ],
    localHook:
      "Oklahoma City sits squarely in brown recluse country. These spiders are not a rare find here the way they are in northern states. They are common in garages, under stored boxes, and in attics across the metro area. Combined with the state's heavy termite pressure, pest control here addresses risks that most northern homeowners simply don't face.",
    intro:
      "Pest control in Oklahoma City comes with a risk most homeowners moving here from northern states don't expect: brown recluse spiders are genuinely common in OKC, not a rare occurrence. Oklahoma State University Extension confirms this city is in the heart of brown recluse range, and finding them in garages, closets, and stored boxes is routine. Subterranean termites add the financial risk, fire ants are a yard-wide concern, and the mosquito season runs a solid six months from April through October.",
    sections: [
      {
        heading: "Why are brown recluse spiders such a concern here?",
        body: "Oklahoma City is in the core geographic range of the brown recluse, which extends from Nebraska to Texas and from Kansas to Georgia. In this range, the spider is a common household pest, not a rare encounter. They favor undisturbed, dry, dark spaces: the back of a closet, under a box in the garage, inside shoes that haven't been worn in months. The bite is rarely felt at first but can cause a significant wound in some people, so knowing they are present and taking sensible precautions matters. Storage areas and items that have been in the garage should be treated with care.",
      },
      {
        heading: "Termite pressure across Oklahoma",
        body: "Oklahoma falls in the heavy to moderate termite hazard zone on the USDA map. The warm, humid summers and the clay soils across the Oklahoma City area support subterranean termite colonies that can remain hidden until the spring swarm season reveals them. Annual inspections are particularly important for homes with crawl spaces, wood siding, or any structural wood near soil.",
      },
    ],
    prevention: [
      "Shake out shoes, gloves, and clothing that has been stored in the garage or closet to avoid brown recluse contact.",
      "Keep stored boxes off the floor and in sealed plastic containers where possible.",
      "Have an annual termite inspection, especially for homes with crawl spaces.",
      "Treat fire ant mounds as they appear to prevent them spreading across the yard.",
    ],
    costNote:
      "OKC pest control is commonly quoted as a general pest plan covering roaches, spiders, ants, and rodents, with termite protection quoted separately after an inspection. Spider-specific treatments for heavy brown recluse activity may be quoted as an add-on. Start with a free assessment.",
    faqs: [
      {
        question: "Are brown recluse spiders really common in Oklahoma City?",
        answer:
          "Yes. Oklahoma is within the core geographic range of the brown recluse, and Oklahoma State University Extension confirms they are a genuinely common household pest in this region. Finding them in garages, closets, and under stored items is not unusual. Sensible precautions around undisturbed storage areas significantly reduce the risk of contact.",
      },
      {
        question: "How serious is the termite problem in OKC?",
        answer:
          "Significant. Oklahoma falls in the heavy to moderate termite hazard zone on the USDA Forest Service map. The warm, humid summers support active subterranean termite colonies, and the first visible sign is often the spring swarm of winged termites indoors. Annual inspections are the practical defense, particularly for homes with crawl spaces.",
      },
      {
        question: "Do fire ants really sting enough to be a real concern?",
        answer:
          "Yes, particularly for children and pets who may not notice a mound before disturbing it. Fire ants defend mounds aggressively, and people and animals can receive multiple stings quickly. Some individuals have allergic reactions. Treating mounds as they appear and doing a yard survey after rain events keeps the risk manageable.",
      },
      {
        question: "How long is the mosquito season in Oklahoma City?",
        answer:
          "Roughly April through October, with peak pressure in July and August following rain events. The North Canadian River corridor and the city's lakes and retention ponds all provide breeding habitat. West Nile virus activity has been recorded in Oklahoma County in past years.",
      },
      {
        question: "What is the most important pest concern for a new homeowner in OKC?",
        answer:
          "For a new homeowner, an annual termite inspection is the most important scheduled action given the heavy termite pressure in Oklahoma. For everyday safety, understanding that brown recluse spiders are common and knowing which areas of the home to handle with care is equally important.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Tulsa", slug: "tulsa" },
      { name: "Norman", slug: "norman" },
      { name: "Edmond", slug: "edmond" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Oklahoma City, OK | Brown Recluse, Termites & Fire Ants",
    metaDescription:
      "Oklahoma City pest control for brown recluse spiders, subterranean termites, fire ants, cockroaches and mosquitoes. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "tulsa",
    name: "Tulsa",
    state: "Oklahoma",
    stateSlug: "oklahoma",
    stateAbbr: "OK",
    tier: "T1",
    population: "~410,000",
    county: "Tulsa County",
    climate: "hot-humid",
    climateDriver:
      "Tulsa sits in northeastern Oklahoma along the Arkansas River, in a humid subtropical climate with hot summers, mild winters, and significant spring storm activity. The humidity and the river corridor sustain termites and mosquitoes, while the region's position places it firmly in brown recluse territory.",
    topPests: [
      "Brown Recluse Spiders",
      "Termites",
      "Mosquitoes",
      "Fire Ants",
      "Mice",
    ],
    pestProfile: [
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, most active spring through fall",
        note: "Tulsa is in the core geographic range of the brown recluse. Oklahoma State University Extension confirms they are common household pests across the state, found in garages, attics, closets, and storage areas. This is a routine find here, not a rare event.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms April through June, active most of the year",
        note: "Oklahoma is in a high termite hazard zone on the USDA map, and the humid Arkansas River corridor around Tulsa supports active subterranean colonies that can go undetected for years.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The Arkansas River, the area's many lakes and ponds, and the standing water left by Oklahoma's significant storms create mosquito breeding habitat. West Nile virus activity has been recorded in Tulsa County.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active spring through fall",
        note: "Fire ants are established across the Tulsa area and rebuild mounds quickly after rain. They are a sting hazard in yards, parks, and recreational areas.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "Mice push into Tulsa homes as temperatures drop in fall. Older neighborhoods and homes near the river and agricultural edges see additional pressure.",
      },
    ],
    localHook:
      "Tulsa sits squarely in brown recluse country, the same as Oklahoma City to the southwest. Oklahoma State University Extension is unambiguous: these spiders are common household pests across the state, not rare finds. That shapes how pest control works here in a way northern cities never have to consider.",
    intro:
      "Pest control in Tulsa is best understood through a few sharp contrasts. The headline is the brown recluse, genuinely common here in a way it simply is not in northern states, versus the everyday nuisance pests. Then there is the year-round termite risk from the humid Arkansas River corridor versus the seasonal mosquito and fire ant pressure that peaks in the warm months. Understanding which threats are constant and which are seasonal is the key to managing a Tulsa home efficiently.",
    sections: [
      {
        heading: "Brown recluse versus everyday spiders: the contrast that matters",
        body: "Most cities have common house and cellar spiders that are harmless nuisances. Tulsa has those too, but it also sits in the core range of the brown recluse, whose bite can cause serious tissue damage in some cases. The difference matters. Oklahoma State University Extension has documented that brown recluses are common here, often present in numbers in undisturbed storage areas, garages, and attics. By contrast with a harmless cellar spider, the brown recluse warrants real, ongoing management: regular treatment, storage in sealed plastic rather than open cardboard, and care when reaching into undisturbed spaces.",
      },
      {
        heading: "Constant termite risk versus seasonal mosquitoes",
        body: "Two of Tulsa's main pests operate on opposite schedules. Subterranean termites are a near-constant, year-round risk: the humid Arkansas River corridor keeps colonies active beneath the soil most of the year, and the damage accumulates silently. Mosquitoes, by contrast, are sharply seasonal, peaking from April through October around the river, lakes, and storm water. The practical takeaway is different timing for each: an annual termite inspection on a fixed schedule, versus seasonal mosquito management that ramps up in spring and winds down in fall.",
      },
    ],
    prevention: [
      "Store items in sealed plastic containers rather than cardboard to reduce brown recluse harborage.",
      "Schedule an annual termite inspection given the Arkansas River corridor's elevated pressure.",
      "Remove standing water after storms to reduce the seasonal mosquito population.",
      "Treat fire ant mounds promptly, especially after the heavy rains common in Oklahoma.",
    ],
    costNote:
      "Tulsa pest control is commonly quoted as a recurring general plan covering spiders, roaches, and rodents, with termite protection quoted separately after inspection and mosquito service added seasonally. Start with a free inspection.",
    faqs: [
      {
        question: "Are brown recluse spiders really common in Tulsa?",
        answer:
          "Yes. Tulsa is in the core geographic range of the brown recluse, and Oklahoma State University Extension confirms they are common household pests across Oklahoma. Finding them in garages, attics, closets, and storage areas is routine. Regular treatment, storing items in sealed containers, and care in undisturbed spaces reduce contact significantly.",
      },
      {
        question: "How serious is the termite risk in Tulsa?",
        answer:
          "Significant. Oklahoma sits in a high termite hazard zone on the USDA map, and the humid Arkansas River corridor around Tulsa supports active subterranean colonies year-round. The first sign is often a spring swarm of winged termites indoors. Annual inspections are the practical defense, particularly for homes with crawl spaces.",
      },
      {
        question: "When is mosquito season in Tulsa?",
        answer:
          "April through October, peaking in summer. The Arkansas River, the area's lakes and ponds, and the standing water from Oklahoma's significant storms provide breeding habitat. West Nile virus activity has been recorded in Tulsa County. Removing standing water and treating resting areas reduces exposure.",
      },
      {
        question: "Do fire ants come back after treatment in Tulsa?",
        answer:
          "They can, particularly after the heavy rains common in Oklahoma, which prompt fire ants to rebuild and relocate mounds. Treating mounds promptly and doing a yard survey after storms keeps the population manageable. They are a sting hazard for children and pets.",
      },
      {
        question: "What is the most important pest concern for a Tulsa homeowner?",
        answer:
          "Two stand out: an annual termite inspection given the elevated year-round pressure, and understanding that brown recluse spiders are common and taking sensible precautions around storage areas. Both are manageable with routine attention, but both are more serious here than in most northern cities.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Oklahoma City", slug: "oklahoma-city" },
      { name: "Broken Arrow", slug: "broken-arrow" },
      { name: "Owasso", slug: "owasso" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Tulsa, OK | Brown Recluse, Termites & Mosquitoes",
    metaDescription:
      "Tulsa pest control for brown recluse spiders, subterranean termites, mosquitoes, fire ants and mice. Arkansas River corridor specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "norman",
    name: "Norman",
    state: "Oklahoma",
    stateSlug: "oklahoma",
    stateAbbr: "OK",
    tier: "T2",
    population: "~122,000",
    county: "Cleveland County",
    climate: "hot-humid",
    climateDriver:
      "Norman sits in Cleveland County south of Oklahoma City on the southern plains of the Cross Timbers region. The climate is continental with hot, humid summers, mild winters, and frequent severe weather including the tornado activity that has given the area its Tornado Alley reputation. Oklahoma State University's National Weather Center is located here. The warm, humid summers drive termite activity and mosquito breeding, and the Cross Timbers woodland edge contributes to brown recluse spider habitat at the residential edges. The Canadian River to the south adds a bottomland pest corridor to the city's southern neighborhoods.",
    topPests: ["Termites", "Fire Ants", "Mosquitoes", "Brown Recluse Spiders", "House Mice"],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Year-round activity, swarms in spring",
        note: "Oklahoma has one of the highest termite pressure ratings in the United States, and Cleveland County is within the high-risk zone identified by USDA Forest Service maps. Eastern subterranean termites are active year-round in Norman's warm soils. Oklahoma State University Extension identifies subterranean termites as the most economically damaging pest in the state.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, mounds swell after spring and fall rain",
        note: "Fire ants are well established across Cleveland County and throughout Norman's residential neighborhoods. Oklahoma lies at the northern edge of the red imported fire ant's established range, but populations are active across the southern and central parts of the state. Mounds appear quickly after rain events in Norman's lawns and parks.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October, peak in June and July",
        note: "Norman's warm, humid summers and the standing water along the Canadian River corridor and throughout the city's park and retention pond system create consistent mosquito breeding habitat. Oklahoma State Department of Health monitors West Nile virus annually, and Cleveland County has had confirmed detections. Norman's proximity to Lake Thunderbird State Park also contributes to seasonal mosquito pressure.",
      },
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Active year-round indoors, most visible in warm months",
        note: "Brown recluse spiders are a genuine pest concern in Norman. Oklahoma State University Extension identifies brown recluse as one of the state's most important urban pest spiders, noting that they are common in Oklahoma homes and buildings. The Cross Timbers woodland edge at Norman's eastern and southern margins provides outdoor habitat, and the city's mix of older and newer residential construction offers the undisturbed indoor storage that brown recluse colonies prefer.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Push indoors October through March, active year-round once inside",
        note: "House mice are a fall pest across Norman's residential neighborhoods. Oklahoma's winter temperatures drive mice into heated structures, and the University of Oklahoma's large student housing stock near the campus sees consistent mouse activity from the combination of older housing and high-turnover occupancy.",
      },
    ],
    localHook:
      "Oklahoma State University Extension ranks Oklahoma as one of the most termite-pressured states in the country. Norman's position in Cleveland County, with its warm soils and the moisture corridor along the Canadian River, puts it squarely in the high-pressure zone. A Norman home without a termite protection program is unprotected against one of the most economically damaging pests in the state.",
    intro:
      "Pest control in Norman is dominated by two year-round threats that rarely make the news but cause more property damage than any storm: termites and fire ants. Oklahoma State University Extension describes Oklahoma as one of the most termite-pressured states in the country, and Cleveland County's warm, moist soils fall within the high-risk zone. Fire ants are active year-round in Norman's lawns. Mosquitoes breed along the Canadian River corridor and near Lake Thunderbird through the summer. Brown recluse spiders are genuinely common in the Cross Timbers edge habitat and throughout older Norman homes. Mice push in from the university-adjacent rental housing each fall.",
    sections: [
      {
        heading: "Oklahoma's termite pressure: what it means for Norman homes",
        body: "Oklahoma State University Extension's pest management guides consistently identify subterranean termites as the state's most economically damaging urban pest, and Cleveland County sits within the USDA's high termite-pressure zone for the central United States. Norman's warm soils, the moisture corridor along the Canadian River to the south, and the abundance of clay soils that retain ground moisture create sustained termite colony conditions across the city. A Norman home without an active termite protection program is carrying an unmanaged risk. The practical baseline is an annual inspection, a liquid soil barrier treatment or a bait monitoring station system around the perimeter, and a service agreement that covers retreatment if termite activity is detected. Homes built on slab foundations with direct soil contact through foundation cracks are at higher risk than those with poured concrete foundations and maintained chemical barriers.",
      },
      {
        heading: "Brown recluse management in Cross Timbers residential areas",
        body: "Norman's eastern and southern residential areas border the Cross Timbers region, the mixed post oak and blackjack oak woodland that extends across central Oklahoma. This woodland edge habitat is ideal brown recluse territory, and the spiders have long-established populations in the area. Oklahoma State University Extension's brown recluse fact sheet notes that infestations in Oklahoma buildings are common and that management focuses on harborage reduction rather than chemical treatment alone, because spiders are mobile and resistant to many residual insecticides when compared to crawling insects. The practical steps in Norman are reducing undisturbed storage in crawl spaces, garages, and closets; sealing stored boxes; shaking out shoes and gloves left in the garage; and placing sticky traps along baseboards to monitor activity levels. A perimeter and harborage residual treatment complements those habitat reduction steps.",
      },
    ],
    prevention: [
      "Maintain an active termite protection program (monitoring stations or liquid barrier), especially for homes with slab foundations near moisture corridors.",
      "Apply fire ant broadcast bait across the lawn in spring before the summer rainy season accelerates mound activity.",
      "Reduce brown recluse harborage by decluttering garage and closet storage and placing sticky traps along baseboards.",
      "Seal foundation gaps and utility penetrations before October to exclude mice ahead of the fall cold-weather push.",
    ],
    costNote:
      "Norman pest services start with a free inspection. Termite programs include annual inspection plus monitoring stations or liquid treatment and are priced after a structure assessment. Fire ant programs are twice-yearly. Mosquito barrier programs run April through October. Brown recluse programs include harborage reduction guidance and residual treatment with monitoring traps.",
    faqs: [
      {
        question: "Why does Oklahoma have such a high termite risk?",
        answer:
          "Oklahoma's warm, humid climate, particularly in the southern and central parts of the state including Cleveland County, creates ideal subterranean termite conditions. The soils retain enough warmth to allow year-round colony activity. Oklahoma State University Extension identifies subterranean termites as the most economically damaging pest in the state, and the USDA's termite infestation probability map places Norman in a high-risk zone. Every Norman homeowner should have an active termite protection program.",
      },
      {
        question: "Are brown recluse spiders really common in Norman homes?",
        answer:
          "Yes. Oklahoma State University Extension acknowledges that brown recluse infestations in Oklahoma buildings are common. Norman's position adjacent to the Cross Timbers woodland region provides extensive outdoor habitat. The spiders move indoors through foundation gaps and utility penetrations and establish in undisturbed closet shelves, garage storage, and crawl spaces. Most people who live in infested homes never get bitten because brown recluse spiders avoid contact. Managing the risk involves reducing harborage and knowing where to be careful: in stored items, shoes left in the garage, and cluttered closet shelves.",
      },
      {
        question: "When are mosquitoes worst in Norman?",
        answer:
          "June and July are the peak months, but the season runs from April through October. The Canadian River corridor to the south and the retention ponds and low-lying areas throughout Norman provide year-round breeding potential in warm weather. The proximity to Lake Thunderbird State Park adds to regional mosquito pressure. West Nile virus has been detected in Cleveland County mosquito populations in multiple years, so protective measures during the peak season are sensible.",
      },
      {
        question: "Do fire ants survive Oklahoma winters in Norman?",
        answer:
          "Yes. Norman sits at the northern edge of the red imported fire ant's established range, but the population is active and self-sustaining. Oklahoma winters can slow fire ant surface activity during cold spells, but colonies survive in the deeper soil where temperatures stay above freezing. Mound activity resumes in spring and ramps up after rain events throughout the warm season. The twice-yearly broadcast bait approach recommended by Texas A&M AgriLife Extension is effective across Oklahoma's similar climate.",
      },
      {
        question: "How do mice get into homes in Norman near OU campus?",
        answer:
          "The University of Oklahoma campus area has a large stock of older rental housing with aging foundations and utility penetrations that provide mouse entry. The high tenant turnover means entry points are not consistently maintained. Mice enter through gaps as small as a quarter inch. In Norman's campus-adjacent neighborhoods, a fall exclusion inspection before October is the most effective approach. Property managers dealing with recurring mouse complaints in older rental properties typically find that investing in one thorough exclusion season breaks the cycle more cost-effectively than ongoing reactive trapping.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Oklahoma City", slug: "oklahoma-city" },
      { name: "Midwest City", slug: "midwest-city" },
      { name: "Moore", slug: "moore" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Norman, OK | Termites, Fire Ants & Brown Recluse",
    metaDescription:
      "Norman pest control for subterranean termites, fire ants, mosquitoes, brown recluse spiders and house mice. Cleveland County Cross Timbers University of Oklahoma specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
