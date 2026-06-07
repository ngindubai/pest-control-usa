import type { CityLocation } from "@/types";

// Utah city data. Pest intelligence verified against Utah State University Extension.

export const utahCities: CityLocation[] = [
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    state: "Utah",
    stateSlug: "utah",
    stateAbbr: "UT",
    tier: "T2",
    population: "~200,000",
    county: "Salt Lake County",
    climate: "semi-arid",
    climateDriver:
      "Salt Lake City sits at the foot of the Wasatch Range at 4,200 feet elevation. The semi-arid high-desert climate delivers cold, snowy winters and hot, dry summers. The Great Salt Lake and the Jordan River corridor influence local moisture levels, but the dryness dominates. Pests that survive here are cold-tolerant and drought-adapted.",
    topPests: ["Voles", "Boxelder Bugs", "Black Widow Spiders", "House Mice", "Ants"],
    pestProfile: [
      {
        name: "Voles (meadow voles)",
        serviceSlug: "wildlife-removal",
        activeSeason: "Year-round, most damaging in fall and winter under snow cover",
        note: "Voles are a significant lawn and garden pest across the Salt Lake Valley. They tunnel under snow cover through winter, creating runways in the grass that appear as the snow melts in spring. Utah State University Extension identifies voles as a major pest of lawns, gardens, and orchards throughout the Wasatch Front.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall invasion (September to November), overwinter in wall voids",
        note: "Boxelder bugs are a defining fall pest across Salt Lake City. They aggregate on the south- and west-facing walls of homes in September and October seeking overwintering sites, and thousands can enter wall voids and attics before winter. They are a nuisance rather than a structural pest, but the sheer numbers make them a significant seasonal problem.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Active spring through fall, sheltered year-round",
        note: "Black widows are widespread across the Salt Lake Valley and throughout Utah. They favor dry, undisturbed spots: garages, utility areas, under decks, in rock walls, and in basement window wells. The female's bite is medically significant. Utah sees substantial black widow activity, and regular perimeter treatment reduces contact risk.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active year-round once inside",
        note: "The cold winters of the Salt Lake Valley drive mice firmly into heated buildings by late October. Older homes near the foothills and the Avenues neighborhood see particularly heavy mouse pressure due to proximity to natural areas.",
      },
      {
        name: "Pavement ants and carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Pavement ants are the most common ant nuisance in Salt Lake City homes, nesting under slabs and along foundations. Carpenter ants are a secondary concern in older, moisture-affected wood, particularly in homes near the foothills with mature tree cover.",
      },
    ],
    localHook:
      "Every spring across the Salt Lake Valley, homeowners see the same sight: brown runways through the lawn where voles worked under the snow all winter. It looks like the grass was rototilled from below. Voles are a bigger lawn pest here than most people expect when they first move to Utah.",
    intro:
      "Pest control in Salt Lake City runs on the semi-arid, high-desert calendar. Voles work through the lawn under winter snow cover and emerge as a visible problem each spring, a pattern that surprises newcomers to the Wasatch Front. Boxelder bugs are the fall story: they aggregate by the thousands on south-facing walls in September and October and force their way into wall voids before winter. Black widows are a year-round presence in garages, window wells, and rock walls throughout the city. Mice push indoors as the cold arrives, and ants work the foundations through spring and summer.",
    sections: [
      {
        heading: "Vole damage: what the spring reveals",
        body: "Meadow voles spend winter tunneling under snow, and when the snow melts in March and April, Salt Lake homeowners see what happened: networks of brown runways and gnawed grass across the lawn. Voles also girdle young trees and shrubs by gnawing the bark at the base during winter. Utah State University Extension identifies them as a major pest of lawns and orchards throughout the Wasatch Front. The window for treatment is fall, before snow arrives, using baits and habitat reduction around garden edges and lawn perimeters.",
      },
      {
        heading: "Boxelder bugs and the fall wall invasion",
        body: "Boxelder bugs are harmless, but they make their presence known in ways that are difficult to ignore. In September and October they aggregate in large numbers on the south and west sides of homes, seeking warm overwintering sites. Thousands can work their way into wall voids through gaps around windows, utility lines, and siding. Inside, they overwinter in walls and emerge on warm winter days, which is when the indoor nuisance starts. The most effective approach is perimeter sealing before September and treating the building exterior when they first aggregate.",
      },
    ],
    prevention: [
      "Place hardware cloth cylinders around young tree trunks in fall to prevent vole girdling under snow.",
      "Seal gaps around windows, siding, and utility lines before September to reduce boxelder bug entry.",
      "Clear debris, wood piles, and clutter from garage corners and window wells to reduce black widow harborage.",
      "Seal foundation gaps and utility penetrations in September before the fall mouse surge.",
    ],
    costNote:
      "Salt Lake City pest control is typically quoted as a general plan covering spiders, ants, and mice, with boxelder bug seasonal treatment and vole management quoted separately. Everything starts with a free assessment.",
    faqs: [
      {
        question: "Are boxelder bugs harmful in Salt Lake City homes?",
        answer:
          "No structural damage, but their numbers make them a real nuisance. They stain surfaces when crushed and can number in the thousands inside wall voids. The practical solution is sealing the home before they aggregate in September and treating the exterior as they begin to mass. Trying to deal with them after they are inside the walls is far more difficult.",
      },
      {
        question: "What is a vole and how do I know if I have them?",
        answer:
          "Voles are small rodents related to mice, but they live primarily in lawns and gardens rather than inside homes. In Salt Lake City, the damage appears each spring as brown runways through the grass and gnawed bark on shrubs and young trees. Utah State University Extension confirms they are a significant pest of Wasatch Front lawns and orchards. Fall bait treatment and removing dense ground cover around garden edges reduces their numbers.",
      },
      {
        question: "Are black widow spiders common in Salt Lake City?",
        answer:
          "Yes, they are widespread throughout the Salt Lake Valley and Utah generally. They favor dry, undisturbed spots: garage corners, window wells, under decks, and in rock walls. The female's bite is medically significant. Wearing gloves when reaching into dark enclosed spaces and clearing clutter from harborage areas reduces the risk of contact.",
      },
      {
        question: "When do mice become a problem in Salt Lake City?",
        answer:
          "The main surge is in fall, when dropping temperatures push mice into heated buildings. The cold winters here make the indoor environment very attractive. Homes near the Wasatch foothills and natural areas see the heaviest pressure. Sealing gaps around foundations, pipes, and utility lines in September is the most effective prevention.",
      },
      {
        question: "Do I need year-round pest control in Salt Lake City?",
        answer:
          "A year-round plan makes sense for most homes given the distinct seasonal pests: vole management in fall, boxelder bug treatment in September and October, mouse exclusion before winter, and spider and ant control in spring and summer. A single service at one time of year will miss the others.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Ogden", slug: "ogden" },
      { name: "Provo", slug: "provo" },
      { name: "West Valley City", slug: "west-valley-city" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Salt Lake City, UT | Voles, Boxelder Bugs & Spiders",
    metaDescription:
      "Salt Lake City pest control for voles, boxelder bugs, black widows, house mice and ants. Wasatch Front specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "provo",
    name: "Provo",
    state: "Utah",
    stateSlug: "utah",
    stateAbbr: "UT",
    tier: "T2",
    population: "~116,000",
    county: "Utah County",
    climate: "semi-arid",
    climateDriver:
      "Provo sits at the foot of the Wasatch Range in Utah Valley, roughly 45 miles south of Salt Lake City. The semi-arid climate delivers hot, dry summers and cold winters with reliable snowfall. Utah Lake to the west provides some moisture and mosquito habitat in summer. The combination of the university population (Brigham Young University is one of the largest private universities in the US), the residential growth into foothill areas, and the semi-arid climate creates a pest environment dominated by spiders, ants, earwigs, and seasonal rodent pressure.",
    topPests: ["Hobo Spiders", "Black Widow Spiders", "Pavement Ants", "Yellowjackets", "Earwigs"],
    pestProfile: [
      {
        name: "Hobo spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in harborage areas, males wander in late summer and fall",
        note: "Hobo spiders are common across Utah Valley and the Wasatch Front. Utah State University Extension confirms they are established throughout Utah and build funnel webs in low, undisturbed areas: basement window wells, behind stored items, and in crawl spaces. Males wander looking for mates in late summer and fall, which is when most indoor encounters occur.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Black widows are abundant across Utah County, including Provo. Utah State University Extension identifies them as one of the most common venomous spiders in Utah. They favor dry, enclosed outdoor spaces: utility meter boxes, wood piles, under outdoor furniture, and in garage storage. Their bite is medically significant.",
      },
      {
        name: "Pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "Active spring through fall, may trail indoors year-round",
        note: "Pavement ants are the dominant structural ant pest in Provo. They nest in cracks in concrete slabs, driveways, and sidewalks, entering homes through expansion joints and foundation gaps. They are common near BYU's campus and in the denser residential neighborhoods near the university.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests active May through October, peak aggression August and September",
        note: "Yellowjackets are a significant late-summer pest in Provo, particularly in the neighborhoods bordering the Wasatch Mountain foothills where ground nest habitat is abundant. Colonies reach maximum size and aggression in August and September.",
      },
      {
        name: "Earwigs",
        serviceSlug: "earwig-control",
        activeSeason: "Active spring through fall, most common in cool and moist periods",
        note: "Earwigs are one of the more distinctive pest complaints in Utah Valley. They shelter in mulch, ground cover, and debris near foundations and move indoors through ground-level gaps. The irrigation of residential landscaping in an otherwise semi-arid environment creates the moist ground conditions earwigs need.",
      },
    ],
    localHook:
      "Provo's position at the foot of the Wasatch Range creates significant black widow and hobo spider pressure from the foothill habitat adjacent to residential neighborhoods. Utah State University Extension confirms both species are common throughout Utah Valley, and homes near the foothills or adjacent to open space consistently see more spider activity than neighborhoods in the valley floor.",
    intro:
      "Pest control in Provo follows the semi-arid Utah Valley pattern. Hobo spiders and black widows are both established in Utah County and regularly encountered in homes, confirmed by Utah State University Extension. Pavement ants are the dominant structural ant, nesting in concrete cracks and entering through foundation gaps. Yellowjackets peak in August and September, with the foothill-adjacent neighborhoods seeing the most ground nest pressure. Earwigs are a distinctive Provo nuisance, sustained by the irrigated landscaping that creates moist ground conditions in an otherwise dry climate.",
    sections: [
      {
        heading: "Hobo spiders and black widows in Utah Valley",
        body: "Both hobo spiders and black widows are established throughout Provo and Utah Valley. Utah State University Extension confirms hobo spiders are common across Utah, building funnel-shaped webs in low, undisturbed areas: behind stored items in basements, in crawl spaces, and in basement window wells. Males wander looking for mates in late summer and fall, which is when most indoor encounters occur. They are not typically considered medically dangerous in the way they were once believed to be; current research does not confirm significant tissue damage from their bite in most cases. Black widows are the more medically significant species in Provo and are abundant in the dry, sheltered spaces around homes: utility meter boxes, wood piles, under outdoor furniture, and in garages. Their bite can cause severe muscle cramping and systemic symptoms. Managing both species requires perimeter treatment of the foundation and garage and reduction of outdoor harborage.",
      },
      {
        heading: "Earwigs and irrigated landscaping in a semi-arid city",
        body: "Earwigs are one of the most common homeowner complaints in Provo and throughout Utah Valley. They are more numerous here than in many semi-arid cities because the residential irrigation that keeps Provo's lawns and gardens green through the dry summer creates the moist soil conditions earwigs need. They shelter under mulch, in dense ground cover, and in debris near foundations during the day and forage at night. They enter homes through any ground-level gap, coming in through foundation cracks, under door thresholds, and around pipe penetrations. They are harmless to people and pets but disturbing to encounter. Reducing mulch thickness near the foundation, keeping ground cover trimmed away from the structure, and sealing ground-level gaps significantly reduces indoor earwig numbers. A perimeter treatment of the foundation base in spring is effective as a supplemental control.",
      },
    ],
    prevention: [
      "Inspect and clear outdoor storage, wood piles, and utility meter boxes for black widow webs seasonally.",
      "Reduce mulch thickness near the foundation to 2 inches or less to limit earwig harborage near entry points.",
      "Apply a residual perimeter spray around the foundation base in spring to reduce earwig and ant entry.",
      "Treat yellowjacket ground nests in the foothills-adjacent areas in July before colonies reach peak size and aggression.",
    ],
    costNote:
      "Provo pest services start with a free inspection. A general perimeter program covering spiders, earwigs, ants, and perimeter pests is the standard for most homes. Yellowjacket treatment is per nest. Black widow management programs include targeted treatment of outdoor storage and harborage areas. Quarterly service is standard given the semi-arid climate's year-round pest pressure.",
    faqs: [
      {
        question: "Are hobo spiders actually dangerous in Provo?",
        answer:
          "Utah State University Extension notes that while hobo spiders were once believed to cause tissue damage similar to brown recluse bites, current research does not confirm this. They are not considered medically significant in the way they were once thought. They are still unwanted houseguests and worth managing, particularly because their funnel webs in basements and crawl spaces can harbor significant numbers. Regular perimeter treatment and reducing clutter in low areas of the home reduces indoor encounters.",
      },
      {
        question: "Are black widows common throughout Provo, or just near the foothills?",
        answer:
          "Black widows are found throughout Provo, not just near the foothills. Utah State University Extension identifies them as one of the most common venomous spiders in Utah. They are found in utility meter boxes, wood piles, under outdoor furniture, and in garage storage across all parts of the city. The foothill-adjacent areas do have higher pressure from the natural habitat, but the species is common throughout the valley.",
      },
      {
        question: "Why are earwigs so common in Provo if it is a semi-arid city?",
        answer:
          "Irrigated landscaping is the answer. Residential irrigation keeps the soil moist enough to sustain earwig populations year-round in an otherwise dry climate. The contrast between the irrigated suburb and the surrounding desert is what drives earwig numbers: they concentrate in the watered areas. Reducing irrigation in the beds immediately adjacent to the foundation and keeping mulch thin near the structure reduces their numbers near entry points.",
      },
      {
        question: "When is yellowjacket season in Provo?",
        answer:
          "Yellowjacket nests begin building in May when queens emerge from overwintering. Colonies grow through summer and reach maximum size and aggression in August and September, when food competition increases and workers defend nests aggressively. The foothill-adjacent neighborhoods in eastern Provo see more ground nest pressure than the valley floor neighborhoods. Treating emerging nests in June and July is safer than waiting until August.",
      },
      {
        question: "Do BYU students bring pest problems to Provo?",
        answer:
          "Student housing areas near BYU see higher bed bug pressure than single-family neighborhoods, for the same reason student housing everywhere does: frequent turnover, secondhand furniture, and shared spaces increase the risk of introduction and spread. German cockroaches are also more common in multi-family student housing than in single-family areas. For single-family homes in Provo, the pest picture is more typical of a semi-arid Utah Valley city: spiders, earwigs, pavement ants, and yellowjackets.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Salt Lake City", slug: "salt-lake-city" },
      { name: "Ogden", slug: "ogden" },
      { name: "West Valley City", slug: "west-valley-city" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Provo, UT | Hobo Spiders, Black Widows & Earwigs",
    metaDescription:
      "Provo pest control for hobo spiders, black widow spiders, pavement ants, yellowjackets and earwigs. Utah County Wasatch Front BYU city specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "west-valley-city",
    name: "West Valley City",
    state: "Utah",
    stateSlug: "utah",
    stateAbbr: "UT",
    tier: "T2",
    population: "~135,000",
    county: "Salt Lake County",
    climate: "semi-arid",
    climateDriver:
      "West Valley City is Utah's second-largest city, in Salt Lake County directly west of Salt Lake City. The semi-arid Great Basin climate brings hot dry summers, cold winters with inversion-layer pollution events, and low annual humidity. The Jordan River runs north through the center of the city, providing a riparian corridor with moisture-dependent pest habitat in an otherwise dry landscape. The semi-arid conditions limit mosquito and termite pressure compared to humid states, but sustain black widow spiders, earwigs, ants, and boxelder bugs at levels consistent with the broader Salt Lake Valley.",
    topPests: [
      "Black Widow Spiders",
      "Earwigs",
      "Pavement Ants",
      "Boxelder Bugs",
      "House Mice",
    ],
    pestProfile: [
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Most active May through October, present year-round in sheltered spaces",
        note:
          "Black widow spiders are common in West Valley City and throughout the Salt Lake Valley. Utah State University Extension confirms that the western black widow is found across Utah's Wasatch Front. They nest in low, dark, undisturbed spaces: under deck boards, in garage corners, in window wells, and around utility meters. The female's venom is medically significant and bites require medical attention.",
      },
      {
        name: "Earwigs",
        serviceSlug: "earwig-control",
        activeSeason: "Spring through fall, most prevalent in summer",
        note:
          "Earwigs are a very common pest in West Valley City's residential landscape areas. They hide in moist soil under mulch, rock landscaping, and pavers during the day and forage at night. The Jordan River corridor adds moisture that sustains earwig populations along its banks. They enter homes through ground-level gaps and are commonly found in basements and bathrooms.",
      },
      {
        name: "Pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "March through October, most active in spring and summer",
        note:
          "Pavement ants are the dominant small ant pest in West Valley City and across the Salt Lake Valley. They nest under concrete slabs, sidewalk edges, and pavement and enter homes through foundation cracks and gaps at the floor edge. They forage for sweets and grease in kitchens and are a persistent warm-season pest.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Aggregate September through October, overwinter in wall voids",
        note:
          "Boxelder bugs are a consistent fall nuisance in West Valley City. The Salt Lake Valley's street canopy of boxelder and maple trees sustains large boxelder bug populations through summer that aggregate on south-facing walls in fall. They are harmless but can appear in large numbers and overwinter in wall voids.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, concentrated surge in October and November",
        note:
          "House mice are a year-round concern in West Valley City. The Jordan River corridor sustains outdoor mouse populations in the riparian vegetation, and the surrounding semi-arid landscape provides habitat for deer mice that also enter structures. Utah winters drive mice firmly into heated buildings as temperatures drop in fall.",
      },
    ],
    localHook:
      "West Valley City's Jordan River corridor is the city's most significant ecological feature, and it creates a riparian pest dynamic in an otherwise desert-adjacent landscape. The river sustains moisture-loving species like earwigs and mosquitoes in the neighborhoods along its banks, while the surrounding semi-arid landscape sustains black widows and scorpions at levels common throughout the Wasatch Front. The Jordan River Parkway trail and the adjacent wetland areas are excellent habitat, but they connect directly to residential backyards.",
    intro:
      "Pest control in West Valley City combines the semi-arid Great Basin pest profile with the specific moisture-driven pest pressure that the Jordan River corridor brings to the city's center. Black widow spiders are the pest that commands the most attention in terms of genuine health concern: they are found throughout the Salt Lake Valley and nest in the undisturbed low spaces that suburban homes provide. Earwigs are the most common warm-season nuisance complaint, sustained by the moist soil along the river and in irrigated landscaping. Pavement ants work the concrete and pavement edges of the city year-round. Boxelder bugs arrive in force each fall. Mice push into structures as Utah winters arrive.",
    sections: [
      {
        heading: "Black widow spiders in the Salt Lake Valley",
        body: "Utah State University Extension confirms that western black widow spiders are found throughout Utah and are common in residential landscapes across the Wasatch Front, including West Valley City. The key to understanding black widows is their habitat preference: they avoid open, active spaces and nest in low, dark, undisturbed locations. Under deck boards and concrete steps, in window wells with leaf litter, behind utility meters and irrigation control boxes, in seldom-used corners of garages, and in low ornamental shrub plantings against the foundation are all common nesting sites. They are not aggressive and very rarely bite unless disturbed directly. The practical response is habitat management, which reduces available nesting sites and the frequency of accidental contact. A perimeter treatment program targets the population establishing near the home without requiring significant chemical application to living areas.",
      },
      {
        heading: "Earwigs along the Jordan River corridor",
        body: "The Jordan River runs from Utah Lake northward through Salt Lake County and passes through the center of West Valley City via the Jordan River Parkway. The riparian vegetation, the irrigated park areas along the corridor, and the moist soil in landscaped residential areas near the river sustain earwig populations that the drier areas of West Valley City do not see to the same degree. Earwigs hide under mulch, rocks, pavers, and debris during the day and forage at night. They are drawn to moist soil and organic matter. The most effective management at the residential scale is pulling mulch away from the foundation a few inches, addressing any drainage that leaves the foundation area consistently moist, and applying a perimeter treatment along the foundation line where mulch meets the foundation wall. They enter homes through gaps at grade level and are most often found in basements, utility rooms, and bathrooms.",
      },
    ],
    prevention: [
      "Reduce low dense plantings and debris at the foundation perimeter to eliminate black widow spider harborage.",
      "Pull mulch back from the foundation several inches to reduce earwig habitat at the entry zone.",
      "Seal foundation cracks and floor gaps to limit pavement ant and earwig entry.",
      "Seal exterior gaps around windows and utility penetrations before September to limit boxelder bug entry into wall voids.",
    ],
    costNote:
      "West Valley City pest pricing is standard Salt Lake County range. Spider programs include perimeter treatment targeting low harborage areas. Earwig programs are timed to spring and summer. Pavement ant programs target exterior colony sites and interior entry points. Mouse exclusion and trapping programs are quoted after a free inspection.",
    faqs: [
      {
        question: "Are black widow spider bites a real risk in West Valley City?",
        answer:
          "The risk of a bite is low because black widows avoid contact with humans and bite only when directly disturbed. However, their venom is medically significant and bites require medical evaluation. Utah State University Extension confirms that western black widows are found throughout the Wasatch Front including Salt Lake County. Wearing gloves when working in low storage areas, under decks, and in infrequently used garage corners reduces contact risk. A perimeter treatment reduces the population establishing near the home.",
      },
      {
        question: "Why are earwigs so common near the Jordan River in West Valley City?",
        answer:
          "Earwigs prefer moist soil, organic matter, and the sheltered conditions that riparian and irrigated landscapes provide. The Jordan River corridor sustains moisture that the surrounding semi-arid landscape does not have, creating a habitat corridor that sustains higher earwig populations than the drier parts of the city. Neighborhoods adjacent to the Parkway and the river's floodplain edge see more earwig pressure than neighborhoods further from the water.",
      },
      {
        question: "When do boxelder bugs become a problem in West Valley City?",
        answer:
          "Boxelder bugs are a predictable fall event in West Valley City and across the Salt Lake Valley. They begin aggregating on south-facing walls in September as temperatures drop, and the aggregation peaks in October. The Salt Lake Valley's street canopy of boxelder and maple trees sustains large populations. They are harmless but aggregate visibly and work into wall voids through gaps around windows and siding. Sealing those gaps before September limits how many enter the structure.",
      },
      {
        question: "Do I need to worry about termites in West Valley City?",
        answer:
          "Utah does have subterranean termites, and they are found in the Wasatch Front including Salt Lake County. However, the semi-arid climate and the cold winters significantly limit termite pressure compared to humid southern states. Utah State University Extension notes that termites are present in Utah but are not at the extreme infestation levels common in the Gulf Coast or the humid Southeast. An inspection is appropriate if you see swarming insects in spring or suspect wood damage, but the risk level is meaningfully lower than in humid climates.",
      },
      {
        question: "How do pavement ants get into West Valley City homes?",
        answer:
          "Pavement ants nest in the soil under concrete slabs, sidewalk edges, driveway borders, and patio pavers. They enter homes through foundation cracks, gaps around plumbing penetrations at the slab edge, and the gap where the slab meets the wall. In slab-on-grade construction, they can trail from the exterior colony through a hairline crack at the perimeter directly to the kitchen. Exterior perimeter treatment targeting the foundation edge and the soil beneath concrete walks and patios addresses the source colony.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Salt Lake City", slug: "salt-lake-city" },
      { name: "Provo", slug: "provo" },
      { name: "Taylorsville", slug: "taylorsville" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in West Valley City, UT | Black Widows, Earwigs & Ants",
    metaDescription:
      "West Valley City pest control for black widow spiders, earwigs, pavement ants, boxelder bugs and house mice. Salt Lake County Jordan River Wasatch Front specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
