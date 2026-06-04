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
];
