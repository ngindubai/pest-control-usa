import type { CityLocation } from "@/types";

// Pennsylvania seed cities. Pest data reflects Mid-Atlantic patterns with older
// rowhome housing stock (Penn State Extension).

export const pennsylvaniaCities: CityLocation[] = [
  {
    slug: "philadelphia",
    name: "Philadelphia",
    state: "Pennsylvania",
    stateSlug: "pennsylvania",
    stateAbbr: "PA",
    tier: "T1",
    population: "~1.55 million",
    county: "Philadelphia County",
    climate: "temperate",
    climateDriver:
      "Philadelphia's older rowhome housing, with shared walls and connected basements, shapes its pest problems as much as the four-season climate. Pests move easily between attached homes.",
    topPests: ["Bed Bugs", "Cockroaches", "Rats", "Spotted Lanternfly", "Mice"],
    pestProfile: [
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Philadelphia regularly ranks among the worst US cities for bed bugs. Attached rowhomes and dense apartments let them spread between units.",
      },
      {
        name: "German and American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German roaches breed indoors in kitchens, while American roaches favor warm, damp basements and shared sewer connections.",
      },
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Norway rats work alleys, rear yards, and the connected basements of rowhome blocks, moving indoors as it cools.",
      },
      {
        name: "Spotted lanternfly",
        serviceSlug: "stink-bug-control",
        activeSeason: "Adults active late summer into fall",
        note: "Pennsylvania is the US epicenter of the invasive spotted lanternfly. They swarm trees and decks and lay egg masses on outdoor surfaces.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall",
        note: "Mice exploit the gaps and shared walls of older rowhomes, traveling between attached units through wall voids.",
      },
    ],
    localHook:
      "In Philadelphia's rowhomes the walls are shared, and so are the pests. Bed bugs, roaches, and mice all move between attached houses, which is why a block sometimes has a problem no single home can fix alone.",
    intro:
      "Pest control in Philadelphia is shaped by its housing. The city's attached rowhomes, with shared walls and connected basements, let bed bugs, roaches, mice, and rats move between homes that look entirely separate from the street. Bed bugs are the headline problem, and Philadelphia routinely ranks among the worst cities for them. On top of that, the region is the national epicenter of the invasive spotted lanternfly, which has made outdoor pest pressure a new seasonal issue.",
    sections: [
      {
        heading: "What does living in a rowhome change?",
        body: "Attached homes share walls, and often basements and sewer connections, so pests travel between them through gaps you cannot see. A bed bug or roach problem in one home can become the neighbor's within weeks. The practical answer is to treat the affected homes together where possible and seal the shared pathways, rather than treating one unit in isolation and watching the problem return.",
      },
      {
        heading: "What is the spotted lanternfly situation?",
        body: "The spotted lanternfly is an invasive planthopper, and Pennsylvania is where it first took hold in the US. Adults swarm trees, decks, and outdoor furniture in late summer and lay gray egg masses on flat outdoor surfaces over winter. They are a nuisance and a threat to plants rather than a danger to people. Scraping egg masses and treating host trees reduces next year's numbers.",
      },
    ],
    prevention: [
      "Inspect secondhand furniture and luggage carefully to avoid bringing bed bugs home.",
      "Seal shared-wall and basement gaps to slow movement of roaches and mice between rowhomes.",
      "Scrape spotted lanternfly egg masses off outdoor surfaces over winter.",
      "Keep bins tight and clear yard food sources to reduce rats.",
    ],
    costNote:
      "Bed bug treatment is quoted after inspection, and in attached homes treating neighbors together is more effective. General pest control often works best on a recurring plan. Everything starts with a free assessment.",
    faqs: [
      {
        question: "Why are bed bugs so common in Philadelphia?",
        answer:
          "Philadelphia regularly ranks among the worst US cities for bed bugs, largely because of its dense, attached rowhome and apartment housing. Bed bugs spread between units through shared walls and furniture, so early inspection and a thorough treatment plan matter.",
      },
      {
        question: "Can pests really move between attached rowhomes?",
        answer:
          "Yes. Rowhomes share walls and often basements and sewer lines, so bed bugs, roaches, and mice travel between homes through hidden gaps. Treating affected homes together and sealing the shared pathways gives a far more lasting result than treating one home alone.",
      },
      {
        question: "Is the spotted lanternfly dangerous?",
        answer:
          "Not to people or pets. It is an invasive planthopper that damages plants and trees and is a major nuisance when it swarms decks and furniture in late summer. Pennsylvania is the US epicenter. Scraping egg masses over winter and treating host trees reduces their numbers.",
      },
      {
        question: "Why do I have roaches in my basement?",
        answer:
          "American cockroaches favor warm, damp basements and can come up through shared sewer and drain connections common in older Philadelphia homes. Sealing drains and reducing moisture, along with treatment, keeps them out.",
      },
      {
        question: "When do mice get into Philadelphia homes?",
        answer:
          "Mostly in fall, when cooling weather pushes them indoors through small gaps. In rowhomes they also move between attached units through wall voids, so sealing interior gaps is as important as trapping.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Camden", slug: "camden" },
      { name: "Upper Darby", slug: "upper-darby" },
      { name: "Pittsburgh", slug: "pittsburgh" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Philadelphia, PA | Bed Bugs, Roaches & Lanternfly",
    metaDescription:
      "Philadelphia pest control for bed bugs, roaches, Norway rats, spotted lanternfly and mice in rowhomes. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "pittsburgh",
    name: "Pittsburgh",
    state: "Pennsylvania",
    stateSlug: "pennsylvania",
    stateAbbr: "PA",
    tier: "T1",
    population: "~300,000",
    county: "Allegheny County",
    climate: "cold-humid",
    climateDriver:
      "Pittsburgh sits in the Allegheny Mountains at the confluence of the Allegheny, Monongahela, and Ohio Rivers. The humid continental climate with cold winters, the forested hillsides, and the older housing stock of Pittsburgh's neighborhoods create conditions that sustain stink bugs, mice, carpenter ants, and termites through most of the year.",
    topPests: [
      "Stink Bugs",
      "Mice",
      "Termites",
      "Carpenter Ants",
      "Cockroaches",
    ],
    pestProfile: [
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion (Sept to Nov), overwintering in walls and attics",
        note: "Pennsylvania was one of the first states severely impacted by the brown marmorated stink bug invasion. Pittsburgh and western PA see mass fall invasions as the insects seek overwintering sites in homes. Penn State Extension has been researching this species since its arrival in Allentown, PA in the late 1990s. Pittsburgh homes in forested hillside neighborhoods like Mt. Washington and Squirrel Hill see some of the heaviest fall activity.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge in October and November",
        note: "Pittsburgh's cold winters drive mice firmly into heated buildings. The city's older row house and working-class housing stock has more potential entry points than modern construction, and the river valleys bring additional wildlife pressure from the surrounding forested areas.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms April through June, active spring through fall",
        note: "The Ohio, Allegheny, and Monongahela river valleys create the moist, organic soil conditions that subterranean termites favor. Penn State Extension confirms Pennsylvania is in a significant termite hazard zone, and Pittsburgh's older housing stock has had decades of exposure.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through September",
        note: "Pittsburgh's forested hillside neighborhoods and the mature tree canopy across the city provide abundant carpenter ant habitat. They nest in moist or softened wood and can cause structural damage over time in older homes with moisture issues around windows and roof lines.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Pittsburgh's apartment buildings and commercial settings. The cold exterior does not affect them, and they maintain populations year-round through shared wall voids in multi-family housing.",
      },
    ],
    localHook:
      "Pennsylvania was one of the first states devastated by the brown marmorated stink bug invasion that arrived in Allentown in the late 1990s. Penn State Extension has studied this species longer than almost any institution in the world. Pittsburgh's forested hillside neighborhoods see some of the heaviest fall stink bug invasions in the country, with hundreds entering homes each September.",
    intro:
      "Pest control in Pittsburgh has a distinctive autumn character. Pennsylvania was among the first states hit by the brown marmorated stink bug invasion, and Pittsburgh's forested hillside neighborhoods see mass stink bug invasions each September as the insects seek overwintering sites. Penn State Extension has studied this species since its arrival and is the leading research institution on stink bug management. That fall invasion is the headline, but the year-round picture includes heavy mouse pressure from cold winters, subterranean termites from the river valley soils, carpenter ants in the wooded hillside neighborhoods, and year-round German cockroaches.",
    sections: [
      {
        heading: "Stink bugs: Pittsburgh's defining fall pest",
        body: "Pittsburgh's forested hillside neighborhoods, with houses set into mature tree canopy on slopes overlooking the three rivers, are among the most stink bug-active environments in the country. The brown marmorated stink bug entered Pennsylvania in the late 1990s and has spread throughout the state. Each fall, as temperatures drop, they begin aggregating on warm, sun-exposed exterior walls and searching for any gap that leads to a warm interior. They do not damage the structure or bite, but they invade in large numbers and produce a distinct odor when handled. The practical defense is sealing gaps around windows, eaves, utility lines, and vents before September.",
      },
      {
        heading: "River valleys and termite pressure",
        body: "Pittsburgh sits at the confluence of three rivers, and the bottomland soils of the Ohio, Allegheny, and Monongahela valleys create the moist, organic conditions that subterranean termites favor. Penn State Extension confirms Pennsylvania is in a significant termite hazard zone, and Pittsburgh's older housing stock, much of it built in the early 20th century, has had decades of exposure. Annual inspections are the practical defense, particularly for homes in older neighborhoods with crawl spaces or wood near the foundation.",
      },
    ],
    prevention: [
      "Seal gaps around windows, eaves, utility penetrations, and roof vents before September to reduce stink bug entry.",
      "Seal foundation cracks and pipe penetrations in September before the fall mouse surge.",
      "Schedule an annual termite inspection given the river valley soil conditions and older housing stock.",
      "Inspect wood around leaky windows and roof lines for softness that may attract carpenter ants.",
    ],
    costNote:
      "Pittsburgh pest control is typically quoted as a general plan covering stink bugs, roaches, mice, and ants, with termite protection quoted separately after inspection. Start with a free assessment.",
    faqs: [
      {
        question: "Why does Pittsburgh have such a bad stink bug problem?",
        answer:
          "Pennsylvania was one of the first states severely impacted by the brown marmorated stink bug invasion, which arrived in Allentown in the late 1990s. Pittsburgh's forested hillside neighborhoods see mass fall invasions each September as the insects aggregate on sun-warmed exterior walls and search for overwintering sites. Penn State Extension, which has researched this species since its arrival, confirms western PA is among the most heavily impacted regions in the country.",
      },
      {
        question: "How do I stop stink bugs from getting into my Pittsburgh home?",
        answer:
          "The most effective approach is sealing entry points before September: gaps around windows and doors, utility penetrations, roof vents, and eaves. Once they are inside wall voids or the attic, they are difficult to remove until spring. Any that get indoors should be vacuumed rather than crushed, as crushing releases the odor they are named for.",
      },
      {
        question: "Are termites a significant concern in Pittsburgh?",
        answer:
          "Yes. The Ohio, Allegheny, and Monongahela river valleys create the soil conditions that favor subterranean termite colonies. Penn State Extension confirms Pennsylvania is in a significant termite hazard zone. Pittsburgh's older housing stock has had decades of exposure, making annual inspections an important part of home maintenance.",
      },
      {
        question: "Why are carpenter ants common in Pittsburgh's hillside neighborhoods?",
        answer:
          "Pittsburgh's forested hillside neighborhoods with mature tree canopy provide ideal habitat for carpenter ants, which nest in moist or softened wood. They enter homes through wood in contact with the ground, branches touching the roof, or moisture-softened areas around windows. An established colony inside a wall void can cause structural damage over several years.",
      },
      {
        question: "When does the fall mouse surge happen in Pittsburgh?",
        answer:
          "October and November, when temperatures drop into the range that drives mice firmly into heated buildings. Pittsburgh's cold Allegheny Mountain winters make this surge fast and significant. Sealing gaps around foundations, pipes, and utility lines in September, before the cold arrives, is the most effective prevention.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Philadelphia", slug: "philadelphia" },
      { name: "Allentown", slug: "allentown" },
      { name: "Morgantown", slug: "morgantown" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle:
      "Pest Control in Pittsburgh, PA | Stink Bugs, Mice & Termites",
    metaDescription:
      "Pittsburgh pest control for brown marmorated stink bugs, house mice, subterranean termites, carpenter ants and cockroaches. Allegheny County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "allentown",
    name: "Allentown",
    state: "Pennsylvania",
    stateSlug: "pennsylvania",
    stateAbbr: "PA",
    tier: "T2",
    population: "~125,000",
    county: "Lehigh County",
    climate: "cold-humid",
    climateDriver:
      "Allentown sits in the Lehigh Valley of eastern Pennsylvania, about 60 miles north of Philadelphia. The cold-humid Mid-Atlantic climate delivers cold winters and warm, humid summers. Pennsylvania is one of the most heavily brown marmorated stink bug-affected states in the country, and the Lehigh Valley's position at the edge of the South Mountain ridge creates significant stink bug pressure from the adjacent forested ridgeline habitat. The Jordan Creek and Little Lehigh Creek add moisture that sustains mosquitoes and other water-associated pests.",
    topPests: ["Brown Marmorated Stink Bugs", "Pavement Ants", "House Mice", "Yellowjackets", "Carpet Beetles"],
    pestProfile: [
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Aggregate on structures August through November, emerge indoors in late winter and spring",
        note: "Pennsylvania is the state where brown marmorated stink bugs were first detected in the US (Allentown, PA, 2001) and the Lehigh Valley remains one of the most heavily affected areas in the country. Penn State Extension confirms they are well-established throughout the region. They aggregate on the south and west faces of buildings in fall and work into wall voids to overwinter.",
      },
      {
        name: "Pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "Active spring through fall, may appear indoors year-round",
        note: "Pavement ants are the dominant structural ant in Allentown, nesting in cracks in concrete driveways, sidewalks, and foundations and entering homes through expansion joints and foundation gaps. They are common across the Lehigh Valley's older urban neighborhoods.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Push indoors October through March, active year-round once inside",
        note: "House mice are the top rodent pest in Allentown and across the Lehigh Valley. Penn State Extension identifies mice as the primary residential rodent in Pennsylvania. The city's older housing stock and the fall temperature drops drive mice firmly into structures by October.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests active May through October, peak August through October",
        note: "Yellowjackets are a significant late-summer pest in the Lehigh Valley. They nest in wall voids of older homes and in ground cavities in suburban yards. Nests reach maximum size and aggression in August and September.",
      },
      {
        name: "Carpet beetles",
        serviceSlug: "moth-control",
        activeSeason: "Year-round indoors, adults visible in spring",
        note: "Carpet beetles are a persistent pest in older Allentown homes with wool carpets, natural-fiber rugs, stored woolens, and taxidermy. Adults are visible in spring when they emerge seeking light near windows. Larvae do the actual damage, feeding on natural fibers and protein-based materials.",
      },
    ],
    localHook:
      "Brown marmorated stink bugs were first detected in the United States in Allentown, Pennsylvania, in 2001. Twenty-plus years later, the Lehigh Valley remains one of the most heavily affected areas in the country. Penn State Extension ranks Pennsylvania among the most impacted states, and the South Mountain ridgeline west of the valley sustains the populations that aggregate on Allentown homes every fall.",
    intro:
      "Pest control in Allentown has a distinction: this is where brown marmorated stink bugs were first detected in the United States. Penn State Extension confirms the Lehigh Valley remains one of the most significantly affected areas in the country. Every fall, stink bugs from the surrounding forested ridgelines aggregate on the south and west faces of buildings before working into wall voids to overwinter. Pavement ants are the dominant structural ant. Mice push firmly into structures each October. Yellowjackets peak in late summer. Carpet beetles are a chronic issue in older homes with natural-fiber textiles.",
    sections: [
      {
        heading: "Stink bugs: Allentown's origin story and ongoing reality",
        body: "Brown marmorated stink bugs were first documented in the US in Allentown in 2001, brought in through international trade. They have since spread to 44 states. In the Lehigh Valley, where they have been established the longest, the fall aggregations can be significant. The South Mountain ridge west of Allentown provides forested habitat that sustains large populations, and the stink bugs that aggregate on those slopes spread to building surfaces as they seek overwintering sites. They work through any gap they can find: around window frames, where siding meets the foundation, around utility penetrations, and through soffit gaps. Once inside wall voids, they overwinter passively but emerge indoors when interior heat activates them in late winter and early spring. Penn State Extension recommends exclusion as the primary management strategy: sealing all building penetrations before the August aggregation begins is more effective than any other single measure.",
      },
      {
        heading: "Pavement ants and older urban Allentown",
        body: "Pavement ants are the most common structural ant in Allentown. They nest in the cracks and expansion joints of concrete, and in the aging foundations of the city's older neighborhoods. From those nests they trail into homes through the same gaps they use to build. They appear indoors along baseboards and in kitchens following moisture and food trails. Unlike carpenter ants, they do not damage wood. Unlike fire ants, they do not sting. They are a nuisance pest that requires patience to manage because the colony is in the concrete itself, not in an accessible location for direct treatment. Slow-acting bait placed along active trails and foundation edges is more effective than contact spray at reducing the foraging population. Sealing the expansion joints and cracks in the foundation concrete reduces entry points over time.",
      },
    ],
    prevention: [
      "Seal all building penetrations, window frames, utility lines, and siding-to-foundation gaps in July before stink bug aggregation.",
      "Seal foundation concrete cracks and expansion joints to reduce pavement ant nesting and entry sites.",
      "Seal foundation gaps with metal-based materials before October to exclude mice ahead of the cold season.",
      "Store woolens, natural-fiber rugs, and taxidermy in sealed containers to prevent carpet beetle damage.",
    ],
    costNote:
      "Allentown pest services start with a free inspection. Quarterly general programs cover mice, ants, and perimeter pests. Stink bug exclusion is a late-summer service worth scheduling every August. Yellowjacket treatment is per nest. Carpet beetle management requires a targeted interior treatment of affected areas.",
    faqs: [
      {
        question: "Is Allentown really where stink bugs started in the US?",
        answer:
          "Yes. Brown marmorated stink bugs were first documented in the US in Allentown, Pennsylvania, in 2001. They arrived through international shipping and have since spread to 44 states. The Lehigh Valley has had the species established longer than anywhere else in the country, and remains one of the most heavily affected areas. Penn State Extension has done extensive research on the species in the region.",
      },
      {
        question: "When should I seal my Allentown home against stink bugs?",
        answer:
          "July and early August. Stink bugs begin aggregating on building surfaces in August and work into gaps and wall voids in September and October. Completing exclusion work before the August aggregation begins prevents them from finding entry points. Once they are inside wall voids, the practical options are limited to vacuuming individuals that emerge indoors. Penn State Extension's primary recommendation is exclusion before aggregation.",
      },
      {
        question: "Why are pavement ants so common in Allentown's older neighborhoods?",
        answer:
          "Pavement ants nest in concrete cracks and expansion joints, and older neighborhoods have more aged and cracked concrete than newer construction. The aging foundations and sidewalks in Allentown's older residential areas provide extensive nesting habitat. Slow-acting bait placed at active trail points is more effective than spray at reducing foraging populations from colonies embedded in concrete.",
      },
      {
        question: "How do carpet beetles damage a home?",
        answer:
          "Adult carpet beetles are small, oval-shaped beetles that feed on pollen outdoors and are relatively harmless. The larvae do the damage: they feed on natural fibers including wool, silk, leather, fur, and feathers, as well as protein-based materials like taxidermy. In older Allentown homes with wool rugs, stored woolens, and vintage textile items, carpet beetle larvae can cause significant irreversible damage over time if undetected. Adults are visible in spring near windows; larvae are hidden in the fibers of the materials they are consuming.",
      },
      {
        question: "Are there subterranean termites in the Lehigh Valley?",
        answer:
          "Yes. Eastern subterranean termites are present throughout Pennsylvania including the Lehigh Valley. They are less of an acute concern in Allentown than stink bugs and mice are, but annual termite inspections are worthwhile for older properties in the area. Mud tubes along the foundation perimeter or in the crawl space are the most visible sign. Penn State Extension recommends annual inspections for Pennsylvania properties as a baseline.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Philadelphia", slug: "philadelphia" },
      { name: "Pittsburgh", slug: "pittsburgh" },
      { name: "Newark", slug: "newark" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Allentown, PA | Stink Bugs, Mice & Pavement Ants",
    metaDescription:
      "Allentown pest control for brown marmorated stink bugs, house mice, pavement ants, yellowjackets and carpet beetles. Lehigh Valley PA stink bug ground-zero specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
