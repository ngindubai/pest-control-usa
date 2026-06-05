import type { CityLocation } from "@/types";

// Washington seed cities. Pest data reflects the cool, wet marine Pacific
// Northwest climate (WSU Extension).

export const washingtonCities: CityLocation[] = [
  {
    slug: "seattle",
    name: "Seattle",
    state: "Washington",
    stateSlug: "washington",
    stateAbbr: "WA",
    tier: "T1",
    population: "~750,000",
    county: "King County",
    climate: "temperate",
    climateDriver:
      "Seattle's cool, wet, marine climate is the key. Long damp stretches favor moisture-loving pests, carpenter ants, rodents, and spiders, more than the heat-driven species of warmer cities.",
    topPests: ["Rats", "Ants", "Spiders", "Wasps", "Silverfish"],
    pestProfile: [
      {
        name: "Norway and roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Seattle has a persistent rat problem helped by the mild, wet climate. Roof rats climb into attics, while Norway rats burrow near foundations and drains.",
      },
      {
        name: "Carpenter and odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Carpenter ants thrive in the damp Northwest, tunneling into moist or rotting wood. Odorous house ants trail indoors during wet weather.",
      },
      {
        name: "Spiders, including giant house spiders",
        serviceSlug: "spider-control",
        activeSeason: "Most visible in late summer and fall",
        note: "The cool, damp climate suits spiders well. Giant house spiders become very visible in fall as males wander indoors looking for mates.",
      },
      {
        name: "Yellowjackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "Wasp nests build through the drier summer and turn aggressive around food by late season.",
      },
      {
        name: "Silverfish and moisture pests",
        serviceSlug: "silverfish-control",
        activeSeason: "Year-round in damp areas",
        note: "Silverfish thrive in the humidity, favoring bathrooms, basements, and crawl spaces, which the wet climate keeps damp.",
      },
    ],
    localHook:
      "Most cities fight heat-loving pests. Seattle fights the damp. The cool, wet climate is exactly what carpenter ants, silverfish, and spiders want, and it keeps the rat problem going all year.",
    intro:
      "Pest control in Seattle is a moisture story, not a heat one. The cool, wet marine climate favors a different cast of pests than warmer cities: carpenter ants in damp wood, silverfish in humid bathrooms and crawl spaces, spiders that appear in force each fall, and rats that the mild winters never knock back. Compared with a hot southern city, there are fewer mosquitoes and no scorpions, but the damp-driven pressure is steady all year, which changes how you defend a home.",
    sections: [
      {
        heading: "Damp-weather pests versus the late-summer wasps",
        body: "For most of the year the problem here is moisture: carpenter ants in soft wood, silverfish in crawl spaces, and rats sheltering from the wet. By contrast, the drier weeks of late summer bring out yellowjackets, whose nests have grown large by then. The two need different handling. The damp pests call for moisture control and exclusion, whereas a mature wasp nest needs careful removal at the source.",
      },
      {
        heading: "Carpenter ants and why moisture matters most",
        body: "Carpenter ants do not eat wood, they excavate it, and in the Northwest they target wood that is already damp or rotting. By contrast with drier climates, the constant moisture here gives them far more to work with. Finding them indoors usually points to a leak, poor drainage, or damp framing, so control pairs treatment with fixing the moisture that invited them.",
      },
    ],
    prevention: [
      "Address leaks, gutters, and crawl-space damp, which is what draws carpenter ants and silverfish.",
      "Seal foundation and roofline gaps to keep rats out of crawl spaces and attics.",
      "Trim trees and shrubs back from the roof to block roof rats.",
      "Reduce clutter and improve ventilation in basements to limit spiders and silverfish.",
    ],
    costNote:
      "Because the damp keeps pests active year-round, many Seattle homes use a recurring plan, with moisture and exclusion work as the foundation. A free inspection sets the plan to your property.",
    faqs: [
      {
        question: "Why does Seattle have so many carpenter ants?",
        answer:
          "The cool, wet climate keeps wood damp, and carpenter ants target moist or rotting wood to nest in. Finding them indoors usually points to a leak or damp framing, so lasting control pairs treatment with fixing the moisture source.",
      },
      {
        question: "Is Seattle's rat problem really year-round?",
        answer:
          "Yes. The mild, wet winters never knock the population back the way a hard freeze would elsewhere. Roof rats climb into attics and Norway rats burrow near foundations, so sealing entry points and trimming vegetation are key all year.",
      },
      {
        question: "Why do I see so many spiders in the fall?",
        answer:
          "In late summer and fall, male spiders such as the giant house spider wander indoors looking for mates, so they become much more visible. The damp climate supports a healthy insect supply that keeps spider numbers up. Reducing clutter and sealing gaps helps.",
      },
      {
        question: "What are the little silver insects in my bathroom?",
        answer:
          "Those are most likely silverfish, which thrive in Seattle's humidity and favor damp bathrooms, basements, and crawl spaces. Reducing moisture and improving ventilation, along with treatment, keeps them down.",
      },
      {
        question: "Are mosquitoes a problem in Seattle?",
        answer:
          "Far less than in hot, humid cities. The cooler climate keeps mosquito pressure relatively low, so most Seattle pest plans focus on moisture pests, ants, rodents, and spiders instead.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Bellevue", slug: "bellevue" },
      { name: "Tacoma", slug: "tacoma" },
      { name: "Everett", slug: "everett" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Seattle, WA | Carpenter Ants, Rats & Spiders",
    metaDescription:
      "Seattle pest control for carpenter ants, Norway and roof rats, spiders, wasps and silverfish. Moisture and exclusion focus, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "spokane",
    name: "Spokane",
    state: "Washington",
    stateSlug: "washington",
    stateAbbr: "WA",
    tier: "T2",
    population: "~230,000",
    county: "Spokane County",
    climate: "semi-arid",
    climateDriver:
      "Spokane sits in eastern Washington in the rain shadow of the Cascades, with a semi-arid continental climate. Unlike the wet maritime climate of western Washington, Spokane gets hot, dry summers and cold winters with regular snowfall. The Spokane River runs through the city, providing some moisture, but the dryness dominates. The pest picture here is closer to the Inland Northwest than to Seattle.",
    topPests: ["House Mice", "Boxelder Bugs", "Hobo Spiders", "Carpenter Ants", "Paper Wasps"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active year-round once inside",
        note: "Spokane's cold continental winters drive mice firmly into heated buildings by October. The city's many older neighborhoods with aging foundations and utility gaps see the heaviest pressure. WSU Extension identifies mice as the most common rodent pest across eastern Washington.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation (September to November), nuisance indoors over winter",
        note: "Boxelder bugs are one of the most common fall pest complaints in Spokane. They aggregate in large numbers on south-facing building walls in September and October and work into wall voids to overwinter. Spokane's abundant boxelder and ash trees in residential neighborhoods sustain large populations.",
      },
      {
        name: "Hobo spiders",
        serviceSlug: "spider-control",
        activeSeason: "Active year-round, most visible in late summer and fall",
        note: "Hobo spiders are common across eastern Washington and Spokane. WSU Extension notes that hobo spiders build funnel webs in low, dark areas: under boards, in basement window wells, and in crawl spaces. They are most often encountered in late summer and fall when males wander looking for mates. Their bite is not typically medically serious, but regular perimeter treatment reduces indoor encounters.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active April through September",
        note: "Carpenter ants are present across Spokane, nesting in moist or softened wood. The Spokane River corridor and the city's many wooded neighborhood parks support carpenter ant populations that can establish satellite colonies in homes with moisture issues around windows and roof lines.",
      },
      {
        name: "Paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "April through October, most aggressive August through October",
        note: "Paper wasps build nests under eaves, in soffits, and around outdoor structures across Spokane. They are most aggressive from August through October as colony size peaks. Spokane's hot, dry summers create good conditions for wasp nesting on sun-exposed building surfaces.",
      },
    ],
    localHook:
      "Spokane's semi-arid eastern Washington climate produces a very different pest picture than Seattle. The cold winters drive mice hard into buildings by October, boxelder bugs aggregate on building walls each fall in significant numbers, and the dry summers create ideal conditions for paper wasp nesting. This is not a wet-climate pest set.",
    intro:
      "Pest control in Spokane reflects the semi-arid inland Pacific Northwest rather than the wet maritime west side of the state. Cold continental winters drive mice firmly into buildings each fall, and WSU Extension identifies mice as the most common rodent pest across eastern Washington. Boxelder bugs are the other fall story, aggregating on building walls in September before pushing into wall voids. Hobo spiders are common across Spokane year-round, and carpenter ants are a structural concern in moisture-affected wood. Paper wasps hit their most aggressive phase in late summer.",
    sections: [
      {
        heading: "Spokane's fall pest calendar: mice and boxelder bugs",
        body: "October in Spokane brings two converging pest pressures. Mice push hard into heated buildings as temperatures drop, taking advantage of any gap around pipes, utility lines, and the base of garage doors. At the same time, boxelder bugs aggregate on the south and west faces of buildings, working into wall voids before winter arrives. Both are best managed proactively in September: sealing the home before mice start pressing in, and treating the building exterior when boxelder bugs first begin to aggregate on the walls.",
      },
      {
        heading: "Hobo spiders and eastern Washington",
        body: "Hobo spiders are common across eastern Washington and are a regular find in Spokane basements, crawl spaces, and window wells. They build funnel-shaped webs in low, dark areas and are most visible in late summer and fall when males wander seeking mates. WSU Extension notes that while hobo spider bites are sometimes blamed for tissue damage, current research does not confirm they are medically dangerous in the way that was once believed. They are still a pest worth managing, and regular perimeter treatment and reducing harborage in basement and crawl space areas reduces encounters.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and the gap under garage doors in September before the fall mouse surge.",
      "Seal gaps around windows, siding, and utility lines before September to limit boxelder bug entry.",
      "Clear basement window wells and crawl spaces of debris to reduce hobo spider harborage.",
      "Inspect wood around leaky windows and roof lines for moisture damage that attracts carpenter ants.",
    ],
    costNote:
      "Spokane pest control is typically quoted as a general plan covering spiders, ants, and mice, with boxelder bug seasonal treatment and wasp removal quoted separately. Start with a free assessment.",
    faqs: [
      {
        question: "Why is the pest picture in Spokane different from Seattle?",
        answer:
          "Spokane's semi-arid continental climate is fundamentally different from Seattle's wet maritime climate. Spokane has cold winters, hot dry summers, and limited rainfall. This produces a pest set dominated by cold-driven mouse surges, fall boxelder bug aggregations, and dry-climate spiders and wasps, rather than the moisture-driven carpenter ant and slug pressure common in western Washington.",
      },
      {
        question: "How bad are boxelder bugs in Spokane?",
        answer:
          "They are one of the most common fall pest complaints in the city. Spokane's abundance of boxelder and ash trees in residential neighborhoods sustains large populations. They aggregate in visible numbers on south-facing walls in September and October before working into wall voids. They are harmless but difficult to manage once inside the walls. Sealing the home before September and treating the exterior as they begin to aggregate is the most effective approach.",
      },
      {
        question: "Are hobo spiders dangerous in Spokane?",
        answer:
          "WSU Extension notes that while hobo spiders were once thought to cause tissue damage, current research does not confirm they are medically serious in the way originally believed. They are still unwanted houseguests and worth managing. They favor funnel webs in basements and crawl spaces and are most visible in late summer and fall. Regular perimeter treatment reduces indoor encounters.",
      },
      {
        question: "When do mice become a problem in Spokane?",
        answer:
          "The main push indoors starts in October when Spokane's continental temperatures drop sharply. WSU Extension identifies mice as the most common rodent pest across eastern Washington. Sealing foundation gaps, pipe penetrations, and garage door gaps in September is the most effective prevention before the surge begins.",
      },
      {
        question: "When should I treat for paper wasps in Spokane?",
        answer:
          "The best time to remove paper wasp nests is in late fall after the colony dies off and the nest is abandoned. Treating nesting sites under eaves and in soffits in early spring, before a new queen establishes a colony, prevents new nests. Do not disturb an active wasp nest without proper equipment, as they sting repeatedly when threatened.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Coeur d'Alene", slug: "coeur-d-alene" },
      { name: "Pullman", slug: "pullman" },
      { name: "Seattle", slug: "seattle" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Spokane, WA | Mice, Boxelder Bugs & Hobo Spiders",
    metaDescription:
      "Spokane pest control for house mice, boxelder bugs, hobo spiders, carpenter ants and paper wasps. Eastern Washington specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "tacoma",
    name: "Tacoma",
    state: "Washington",
    stateSlug: "washington",
    stateAbbr: "WA",
    tier: "T2",
    population: "~225,000",
    county: "Pierce County",
    climate: "temperate",
    climateDriver:
      "Tacoma sits on Commencement Bay with Puget Sound to the west and the Tacoma Narrows to the southwest. The Pacific Northwest maritime climate delivers mild, wet winters and warm, dry summers. The port and industrial district on the tideflats, the older working-class neighborhoods in the Hilltop and South End, and the proximity to the Puyallup River bottom create pest pressure that is more urban and industrial than Seattle's.",
    topPests: ["Norway Rats", "Roof Rats", "Yellow Jacket Wasps", "Odorous House Ants", "German Cockroaches"],
    pestProfile: [
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Norway rats are the dominant rodent in Tacoma's port and industrial areas and in the older residential neighborhoods. The Tideflats, the industrial waterfront, and the city's extensive storm drain system sustain a substantial Norway rat population. They burrow near foundations and are active in basements and crawl spaces.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round, move indoors fall through winter",
        note: "Roof rats are the other Tacoma rodent. They are more common in the older hillside neighborhoods with mature vegetation and in areas bordering the natural woodlands of Point Defiance Park. They travel overhead and enter homes through gaps at the roofline.",
      },
      {
        name: "Yellow jacket wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "July through October, peak August and September",
        note: "Yellow jackets are a seasonal but significant pest in Tacoma. They nest in wall voids, under eaves, and in the ground. Population peaks in late summer, and workers become more aggressive as the colony reaches maximum size in August and September.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active indoors spring through fall",
        note: "Odorous house ants are the primary ant complaint in Tacoma homes. They nest in wall voids and under floors and forage for sweet food. They are small enough to enter through tiny gaps and the Pacific Northwest's wet winters keep them active inside when outdoor temperatures drop.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are present in Tacoma's multi-family housing, restaurant district, and older commercial areas. The port city character and the frequency of commercial food service operations in the city center sustain cockroach populations that require ongoing management.",
      },
    ],
    localHook:
      "Tacoma's port and industrial history makes its rodent problem different from Seattle's. The Tideflats and the industrial waterfront have sustained Norway rat populations for over a century, and the city's extensive storm drain and sewer infrastructure gives those rats pathways into residential neighborhoods throughout the city. Tacoma's rodent issue is a citywide structural reality, not just a localized property problem.",
    intro:
      "Pest control in Tacoma runs on the Pacific Northwest's wet, mild calendar with a port-city overlay. Rodents are the main event: Norway rats from the industrial waterfront and roof rats from the hillside neighborhoods both push into homes as the rain season arrives in October. Yellow jackets are the summer pest to watch, nesting in wall voids and under eaves across the older residential areas. Odorous house ants work through kitchens and bathrooms year-round. German cockroaches are in the commercial district and the multi-family housing stock across the city.",
    sections: [
      {
        heading: "Rodent control in a port city",
        body: "Tacoma's rat problem has a different character than in most Pacific Northwest cities. The Tideflats industrial zone, the Port of Tacoma, and the older residential neighborhoods of the South End and Hilltop all sustain Norway rat populations that are connected through the storm drain and sewer network. Addressing a rat problem on one property without thinking about the broader context is often insufficient. Exclusion work is critical: Norway rats burrow near foundations and enter through gaps at ground level, under porches, and through drain connections. Trapping removes active animals but the exclusion work keeps new ones from moving in.",
      },
      {
        heading: "Yellow jackets in older Tacoma homes",
        body: "Yellow jackets in Tacoma frequently nest inside wall voids and under the eaves of older homes with weathered siding and gaps around window frames. The nests can go undetected through spring and early summer as the colony is small, then become noticeable in August when workers start entering interior spaces through gaps around windows or in ceilings. By that point the colony may contain several thousand workers. Treating a wall void nest without the right equipment is hazardous. The safest approach is professional treatment with a residual dust application into the void, followed by sealing the entry points after the colony is eliminated.",
      },
    ],
    prevention: [
      "Seal gaps at the foundation line, around utility penetrations, and under porch and deck edges to block Norway rat entry.",
      "Trim tree branches and tall shrubs away from the roofline to cut roof rat travel routes.",
      "Seal gaps around windows and siding before July to prevent yellow jackets from establishing wall void nests.",
      "Keep kitchen food stored in sealed containers and fix dripping fixtures to reduce ant foraging incentive.",
    ],
    costNote:
      "Tacoma pest control typically starts with a free inspection. Rodent programs usually include both exclusion and trapping. Ant programs run quarterly. Yellow jacket treatments are typically summer emergency responses quoted per nest. German cockroach programs are monthly for commercial kitchens.",
    faqs: [
      {
        question: "Why is Tacoma's rat problem worse than other cities?",
        answer:
          "Tacoma's industrial waterfront, port operations, and older storm drain infrastructure have sustained Norway rat populations at the city level for generations. Rats travel through the drain system and surface in residential neighborhoods throughout the city. Compared to cities without major port and industrial history, Tacoma has a larger baseline rat population that individual property exclusion work must contend with. It is a structural urban issue, not just a localized problem.",
      },
      {
        question: "When are yellow jackets most dangerous in Tacoma?",
        answer:
          "August and September are the peak months. Yellow jacket colonies grow all summer and reach their maximum size in late summer, when thousands of workers are defending the nest and competing for food. Nests inside wall voids are particularly hazardous because disturbing the wall surface can trigger a rapid response from inside. If you hear buzzing in a wall or see workers entering through a gap in the siding, avoid the area and call a pest control professional.",
      },
      {
        question: "What kind of ants are most common in Tacoma homes?",
        answer:
          "Odorous house ants are the most common ant complaint in Tacoma. They are small, dark-colored, and release a distinctive coconut-like smell when crushed. They nest in wall voids and under floors and forage for sweets and moisture. Carpenter ants are also present in Tacoma, particularly in older homes with wood moisture issues, and they can cause structural damage over time. Carpenter ants are larger and black; seeing large black ants inside warrants a different treatment approach than odorous house ants.",
      },
      {
        question: "Are German cockroaches a problem in residential Tacoma homes?",
        answer:
          "German cockroaches are primarily a concern in multi-family housing and commercial food service in Tacoma. Single-family homes occasionally see them after they are brought in through boxes, bags, or secondhand appliances. Once established indoors, they breed rapidly. Treatment requires gel bait applications in harborage areas (under sinks, in cabinet hinges, near appliances) and follow-up to address the next generation. Standard spray treatments are less effective for German cockroaches than targeted bait applications.",
      },
      {
        question: "How do I know if I have Norway rats or roof rats in my Tacoma home?",
        answer:
          "Norway rats are larger and heavier (up to a pound) and are found at ground level: basements, crawl spaces, and burrows near the foundation. Roof rats are smaller and slimmer and are found overhead: attics, wall voids, and along rafters. In Tacoma, Norway rats are more common in the lower-elevation and industrial-adjacent neighborhoods, while roof rats are more common in the hillside neighborhoods with mature trees near Point Defiance and the north end of the city. Both species are present in most parts of Tacoma.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Seattle", slug: "seattle" },
      { name: "Puyallup", slug: "puyallup" },
      { name: "Lakewood", slug: "lakewood" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Tacoma, WA | Rats, Yellow Jackets & Ants",
    metaDescription:
      "Tacoma pest control for Norway rats, roof rats, yellow jackets, odorous house ants and German cockroaches. Pierce County port-city specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
