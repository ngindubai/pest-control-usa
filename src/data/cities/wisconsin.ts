import type { CityLocation } from "@/types";

// Wisconsin. Pest data reflects humid continental Great Lakes conditions.
// Rodent and carpenter ant data from University of Wisconsin Extension.

export const wisconsinCities: CityLocation[] = [
  {
    slug: "milwaukee",
    name: "Milwaukee",
    state: "Wisconsin",
    stateSlug: "wisconsin",
    stateAbbr: "WI",
    tier: "T1",
    population: "~580,000",
    county: "Milwaukee County",
    climate: "cold-humid",
    climateDriver:
      "Milwaukee's Great Lakes location means genuine cold winters that suppress most outdoor pests significantly from November through March. The flip side is that mice, cockroaches, and bed bugs push hard into heated buildings when temperatures drop, and the warm season sees a concentrated burst of outdoor pest activity.",
    topPests: ["Mice", "Cockroaches", "Carpenter Ants", "Bed Bugs", "Wasps"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, major surge in October and November",
        note: "Milwaukee's hard winters drive mice firmly and rapidly into heated buildings. The city's stock of older multi-family housing, including brick apartment buildings and early 20th-century duplexes, has more entry points than newer construction. A home that seemed mouse-free through summer can have active mice by Thanksgiving.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor pest species in Milwaukee's apartment and commercial stock. They do not need outdoor access and spread through shared walls, plumbing voids, and grocery bags. Dense apartment living sustains colonies across buildings.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through September",
        note: "Carpenter ants are significant in Milwaukee, particularly in the older neighborhoods with mature trees and wood-frame construction. They nest in moist or softened wood and forage indoors through wall voids. Seeing large black ants indoors in spring is a common sign of an established colony nearby.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Milwaukee's high apartment density and significant housing turnover sustain steady bed bug pressure, particularly in the denser neighborhoods and buildings with frequent tenant changes.",
      },
      {
        name: "Yellow jacket wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August through September",
        note: "Yellow jackets are aggressive in late summer as colonies reach peak size and food sources become scarcer. They nest in the ground, wall voids, and under eaves, and are a real sting risk around decks and outdoor dining areas.",
      },
    ],
    localHook:
      "Milwaukee's winters are genuinely cold, which is good news for many outdoor pests. What the cold cannot do is reduce mice or cockroaches, which simply relocate deeper into heated buildings when temperatures fall. The fall surge of mice into Milwaukee homes is one of the most predictable pest events in the city, and preparing for it before October is far easier than dealing with it after.",
    intro:
      "Pest control in Milwaukee follows the seasons in a way that most warmer cities don't. The cold winters do real work: mosquitoes, outdoor ants, and many other seasonal pests are genuinely suppressed from November through March, which is a relief. But that same cold is why mice enter Milwaukee homes faster and in larger numbers than almost anywhere in the country when October arrives. German cockroaches run year-round regardless of temperature, carpenter ants are active from April through September in the older neighborhoods, and yellow jackets are aggressive through the late summer warm stretch.",
    sections: [
      {
        heading: "Why the fall mouse surge matters",
        body: "House mice begin moving into buildings in earnest when outdoor temperatures drop in October. In Milwaukee, that drop is real and fast. The mice are not choosing your home out of curiosity: they are following temperature gradients and seeking food. Older brick apartment buildings and the wood-frame duplexes in neighborhoods like Bay View, Riverwest, and Shorewood have more entry points than newer construction. The practical response is inspection and exclusion work in September, before the surge, not in November after it has happened.",
      },
      {
        heading: "Carpenter ants in the older neighborhoods",
        body: "Milwaukee's older neighborhoods have mature tree canopy and substantial wood-frame construction, and carpenter ants thrive in both. They nest in moist or softened wood, which means wood around leaky windows, door frames with water damage, and tree limbs in contact with the roofline. They do not eat wood but excavate it, and an established colony can cause real structural damage over several years. Seeing large black ants indoors in spring, often more than a couple at a time, suggests a colony is established within or adjacent to the building.",
      },
    ],
    prevention: [
      "Seal foundation cracks, pipe gaps, and utility penetrations in September before the fall mouse surge.",
      "Inspect wood around windows and roof lines annually for softness or moisture damage that attracts carpenter ants.",
      "Treat yellow jacket ground nests in spring when colonies are small and easier to manage.",
      "Inspect second-hand furniture for bed bug signs before bringing it into your home.",
    ],
    costNote:
      "Milwaukee pest pricing typically separates rodent exclusion work from recurring general pest service. Carpenter ant treatment and bed bug remediation are quoted separately. A free inspection in early fall is particularly useful for assessing mouse entry risk before the surge.",
    faqs: [
      {
        question: "Why do mice seem to appear suddenly in Milwaukee each fall?",
        answer:
          "House mice begin moving inside as outdoor temperatures drop, following warmth and the smell of food. In Milwaukee, October brings a rapid temperature drop that triggers a fast, concentrated surge of mice into buildings. Older homes with more gaps in foundations, around pipes, and through utility lines are particularly exposed. Sealing these in September prevents the surge.",
      },
      {
        question: "Do cockroaches go away in Milwaukee winters?",
        answer:
          "No. German cockroaches are entirely indoor insects and are not affected by outdoor temperatures. They live in heated kitchens, bathrooms, and wall voids year-round. The cold winter has no impact on them. They spread through shared plumbing voids and wall cavities in multi-family buildings.",
      },
      {
        question: "How do I know if I have carpenter ants or termites?",
        answer:
          "Carpenter ants are large and black, often seen foraging indoors in spring. Termites are smaller, cream-colored, and rarely seen unless they swarm. Carpenter ant damage has clean, smooth galleries. Termite damage is rough and filled with soil-like debris. Both require professional inspection to confirm, and both require treatment.",
      },
      {
        question: "When are yellow jackets most dangerous in Milwaukee?",
        answer:
          "Late August and September, when colonies reach their peak size and the workers become more aggressive as natural food sources decline. Ground nests, wall voids, and nests under eaves are all common. Treating them in spring when they are small is far easier and safer than dealing with them at peak size.",
      },
      {
        question: "Is year-round pest control necessary in Milwaukee?",
        answer:
          "For homes with cockroach pressure or recurring mouse activity, yes. Both are year-round concerns. Outdoor pests like wasps and carpenter ants are seasonal, but the indoor pest pressure in Milwaukee's older, denser housing stock warrants continuous management.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Racine", slug: "racine" },
      { name: "Waukesha", slug: "waukesha" },
      { name: "Madison", slug: "madison" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Milwaukee, WI | Mice, Cockroaches & Carpenter Ants",
    metaDescription:
      "Milwaukee pest control for house mice, German cockroaches, carpenter ants, bed bugs and yellow jackets. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "madison",
    name: "Madison",
    state: "Wisconsin",
    stateSlug: "wisconsin",
    stateAbbr: "WI",
    tier: "T1",
    population: "~270,000",
    county: "Dane County",
    climate: "cold-humid",
    climateDriver:
      "Madison sits on an isthmus between Lake Mendota and Lake Monona in south-central Wisconsin. The cold winters suppress outdoor pests for months, but the lakes and wetlands drive a strong summer mosquito season, and the cold drives mice and other pests indoors each fall.",
    topPests: ["Mice", "Mosquitoes", "Carpenter Ants", "Wasps", "Box Elder Bugs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, major surge in October and November",
        note: "Madison's cold winters drive mice firmly indoors each fall. The older housing near the university and the isthmus neighborhoods has abundant entry points around foundations and utilities.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "May through September",
        note: "Lake Mendota, Lake Monona, and the surrounding wetlands and marshes give Madison a strong summer mosquito season. The lakes and the standing water they feed support significant breeding habitat.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through September",
        note: "Carpenter ants are significant in Madison, particularly in the older wood-frame homes and the mature tree canopy of the isthmus and near-west neighborhoods. They nest in moisture-damaged wood and can cause structural damage.",
      },
      {
        name: "Yellow jacket and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets nest in the ground and wall voids and become aggressive in late summer as colonies peak. Paper wasps build nests under eaves and in sheltered outdoor spots.",
      },
      {
        name: "Box elder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation, overwintering on and in homes",
        note: "Box elder bugs gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are a harmless nuisance, common in Madison neighborhoods with box elder and maple trees.",
      },
    ],
    localHook:
      "Madison's lakes are central to life here, and they are also why the summer mosquito season is so strong. Lake Mendota and Lake Monona, plus the surrounding wetlands, give mosquitoes ample breeding habitat right through the warm months, even as the cold winters keep the rest of the pest year short and seasonal.",
    intro:
      "Pest control in Madison follows the lakes and the seasons. The cold winters suppress outdoor pests for months, but Lake Mendota, Lake Monona, and the surrounding wetlands drive a strong summer mosquito season. That same cold pushes mice into heated buildings each fall, carpenter ants work the older wood-frame homes and mature tree canopy, yellow jackets peak in late summer, and box elder bugs gather on sun-facing walls each autumn. The treatment calendar here is clearly seasonal.",
    sections: [
      {
        heading: "Why the lakes drive Madison's mosquito season",
        body: "Madison's setting on an isthmus between two lakes, surrounded by additional wetlands and marshes, gives mosquitoes excellent breeding habitat through the warm months. The lakes, the shoreline vegetation, and the standing water they feed all contribute. The active season runs May through September. Around the home, the most effective steps are removing standing water from gutters, planters, and low spots, and treating the shaded resting areas where mosquitoes wait out the day under decks and in dense vegetation. A barrier treatment program through the summer handles the rest.",
      },
      {
        heading: "Carpenter ants in the older neighborhoods",
        body: "Madison's older wood-frame homes, particularly in the isthmus and near-west neighborhoods with their mature tree canopy, give carpenter ants ideal habitat. They nest in moisture-damaged wood: around leaky windows, water-damaged door frames, and roof lines where branches touch. They excavate galleries rather than eating wood, but an established colony can cause structural damage over several years. Seeing large black ants indoors in spring, often more than a couple at a time, suggests a colony established within or near the building.",
      },
    ],
    prevention: [
      "Seal foundation cracks, pipe gaps, and utility penetrations in September before the fall mouse surge.",
      "Remove standing water and treat shaded resting areas to manage the lake-driven summer mosquito season.",
      "Inspect wood around windows and roof lines for moisture damage that attracts carpenter ants.",
      "Treat yellow jacket ground nests in spring when colonies are small and easier to manage.",
    ],
    costNote:
      "Madison pest control commonly uses a seasonal approach: fall rodent exclusion, summer mosquito and wasp service, and carpenter ant treatment as needed. A free inspection sets the schedule to your home.",
    faqs: [
      {
        question: "Why is the mosquito season so strong in Madison?",
        answer:
          "Madison sits on an isthmus between Lake Mendota and Lake Monona, surrounded by additional wetlands and marshes. The lakes and the standing water they feed provide significant mosquito breeding habitat through the warm months. The active season runs May through September. Removing standing water and treating resting areas around the home reduces the impact.",
      },
      {
        question: "How do I tell carpenter ants from termites in Madison?",
        answer:
          "Carpenter ants are large and black, often seen foraging indoors in spring. Termites are smaller, cream-colored, and rarely seen unless they swarm. Carpenter ant galleries are clean and smooth; termite damage is rough and filled with soil-like material. Carpenter ants are the more common wood-damaging insect in Madison's climate. Both require professional inspection and treatment.",
      },
      {
        question: "When do mice get into Madison homes?",
        answer:
          "The surge arrives in October and November as Wisconsin temperatures drop. Mice move into heated buildings through gaps around foundations, pipes, and utilities. The older housing near the university and the isthmus neighborhoods has more entry points. Sealing them in September, before the cold, is the most effective prevention.",
      },
      {
        question: "What are the bugs swarming my Madison house in fall?",
        answer:
          "Most likely box elder bugs. They gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are harmless, do not bite or damage the home, and are common in neighborhoods with box elder and maple trees. Sealing entry points before fall reduces how many get in.",
      },
      {
        question: "Is year-round pest control necessary in Madison?",
        answer:
          "Many Madison homes do well with a seasonal plan rather than constant treatment, given the cold winters: fall rodent exclusion, summer mosquito and wasp service, and carpenter ant treatment as needed. Homes with recurring indoor pest pressure may benefit from a continuous plan. A free inspection sets the right schedule.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Milwaukee", slug: "milwaukee" },
      { name: "Sun Prairie", slug: "sun-prairie" },
      { name: "Middleton", slug: "middleton" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Madison, WI | Mice, Mosquitoes & Carpenter Ants",
    metaDescription:
      "Madison pest control for fall mice, lake-season mosquitoes, carpenter ants, wasps and box elder bugs. Isthmus and lakes specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "green-bay",
    name: "Green Bay",
    state: "Wisconsin",
    stateSlug: "wisconsin",
    stateAbbr: "WI",
    tier: "T2",
    population: "~109,000",
    county: "Brown County",
    climate: "cold-humid",
    climateDriver:
      "Green Bay sits at the southern tip of Green Bay on the western shore of Lake Michigan. The cold-humid Great Lakes climate delivers among the coldest winters of any major Wisconsin city, with significant lake-effect snow from Lake Michigan. The Fox River runs through the city and empties into the bay. Cold winters drive pest activity into a compressed warm-season window, but the lake proximity sustains moisture and insect habitat near the bay-edge neighborhoods.",
    topPests: ["House Mice", "Carpenter Ants", "Odorous House Ants", "Yellowjackets", "Brown Marmorated Stink Bugs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Push hard indoors September through April, active year-round once inside",
        note: "House mice are the dominant pest complaint in Green Bay and across Brown County. Wisconsin's cold winters drive mice into structures earlier and more aggressively than in warmer states. University of Wisconsin Extension identifies mice as the top rodent pest across Wisconsin. The city's older housing stock near the Fox River and the bay provides the foundation gaps and aging infrastructure that mice exploit.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, most visible indoors in spring",
        note: "Carpenter ants are well-established in Green Bay and across northeastern Wisconsin. The Fox River corridor, the wooded neighborhoods near the bay, and the proximity to the Lake Michigan shoreline vegetation sustain outdoor carpenter ant colonies. Finding them indoors in spring indicates damp or damaged wood in the structure.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round indoors, peak spring through fall",
        note: "Odorous house ants are the dominant small ant pest in Green Bay homes. They trail indoors from outdoor colonies and are persistent through standard perimeter spray. Multiple queens allow the colony to recover quickly from standard contact treatments.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests active June through October, most aggressive August and September",
        note: "Yellowjackets are a significant late-summer pest in Green Bay. The compressed Wisconsin warm season means colonies grow rapidly and reach peak aggression in a shorter window than in warmer states. Ground nests in yard areas and wall void nests in older homes are both common in the area.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Aggregate in September and October, emerge indoors in late winter and spring",
        note: "Brown marmorated stink bugs have spread into Wisconsin and are an established fall pest in Green Bay and Brown County. University of Wisconsin Extension confirms they are now found across the state. They aggregate on building surfaces in September and October before working into wall voids to overwinter.",
      },
    ],
    localHook:
      "Green Bay's cold Great Lakes winters compress the pest season into a shorter warm window, but the fall mouse surge here is among the most intense in Wisconsin. University of Wisconsin Extension identifies mice as the top pest complaint across the state, and Green Bay's cold autumn temperatures trigger an aggressive and early mouse push into buildings, typically beginning in mid-September rather than the October start common in warmer Wisconsin cities.",
    intro:
      "Pest control in Green Bay follows Wisconsin's cold-humid Great Lakes calendar, with the added intensity that comes from the city's position at the southern tip of Green Bay. House mice are the most consistent year-round concern, with the fall push into structures beginning in mid-September as cold weather arrives early from the lake. Carpenter ants are a spring structural concern in moisture-affected wood near the Fox River and the bay. Odorous house ants are the dominant small ant pest year-round. Yellowjackets are a compressed but intense late-summer pest. Stink bugs have become an established fall nuisance across Brown County.",
    sections: [
      {
        heading: "The early fall mouse surge in Green Bay",
        body: "Green Bay's lake-adjacent location means autumn arrives earlier than in inland Wisconsin cities. Overnight temperatures can drop significantly in September, which triggers the fall mouse push into heated buildings earlier than homeowners in warmer Wisconsin cities experience. University of Wisconsin Extension identifies house mice as the top pest in the state, and in Green Bay the preparation window is shorter. Exclusion work should be completed by late August or early September, not October. The most effective approach is a systematic survey of the foundation perimeter to identify all gaps larger than a quarter inch, sealing them with metal-based materials (steel wool packed into gaps then sealed with foam or caulk, or metal mesh for larger openings). Snap traps placed along walls in the basement, garage, and utility areas handle the animals already inside the structure. One of the most common entry points in older Green Bay homes is the deteriorated threshold under the garage door, which mice flatten themselves under with no difficulty.",
      },
      {
        heading: "Carpenter ants near the Fox River and the bay",
        body: "Northeastern Wisconsin's cool, wet climate makes carpenter ant pressure more significant here than in drier Midwest states. The Fox River corridor running through Green Bay and the proximity to Lake Michigan maintain the moisture levels that keep wood conditions favorable for carpenter ant nesting across much of the warm season. The older residential neighborhoods near the riverfront, in the Astor Park area and the east-side neighborhoods near the bay, have mature tree canopy and older housing stock that combine the outdoor colony habitat and the structural moisture conditions that carpenter ants need. Finding large black ants emerging from a consistent location inside the home in May or June indicates a colony in the structure, not just outdoor foragers. Treating the colony combined with fixing the moisture source, typically a failing window seal, gutter problem, or deck ledger with inadequate flashing, provides lasting control.",
      },
    ],
    prevention: [
      "Complete mouse exclusion work by late August, earlier than in warmer Wisconsin cities, given the early Green Bay fall.",
      "Inspect and repair window sills, soffits, deck framing, and gutter drainage for moisture damage to remove carpenter ant sites.",
      "Apply odorous house ant bait along foundation edges in spring and summer rather than relying on perimeter spray.",
      "Seal building penetrations around windows, siding, and utility lines in August before stink bug aggregation in September.",
    ],
    costNote:
      "Green Bay pest services start with a free inspection. Quarterly general programs cover mice, ants, spiders, and perimeter pests. Carpenter ant programs are best scheduled in spring with moisture assessment. Stink bug exclusion is available as a late-summer service. Yellowjacket treatment is per nest and most effective in July.",
    faqs: [
      {
        question: "Why do mice push into Green Bay homes in September rather than October?",
        answer:
          "Green Bay's position at the tip of the Green Bay inlet from Lake Michigan means cold weather arrives earlier in fall than in inland Wisconsin cities. Overnight temperatures in September can drop sharply, triggering the mouse push into heated structures earlier than elsewhere. University of Wisconsin Extension identifies mice as Wisconsin's top residential pest, and for Green Bay the preparation window closes earlier. Completing exclusion work in August is the practical timing.",
      },
      {
        question: "Are stink bugs as bad in Green Bay as in Pennsylvania?",
        answer:
          "Not quite. Pennsylvania's Lehigh Valley, where stink bugs were first detected in the US, has significantly higher populations than Wisconsin. However, stink bugs have spread through the Great Lakes region and University of Wisconsin Extension confirms they are now established across Wisconsin including Brown County. Green Bay residents near forested areas or open ground see meaningful fall aggregations on building surfaces. Exclusion before September is the most effective management approach.",
      },
      {
        question: "What kind of carpenter ants live near the Fox River in Green Bay?",
        answer:
          "The black carpenter ant is the primary species found in Green Bay and across Wisconsin. They are large, black, and their workers are the ones seen trailing indoors in spring from an established colony in damp wood. Unlike fire ants, they do not bite aggressively; unlike termites, they do not eat wood. Their tunneling in damp wood weakens it over time. Finding frass (coarse sawdust-like material) near a baseboard or in a basement corner indicates a colony is tunneling in wood nearby.",
      },
      {
        question: "Why are odorous house ants hard to control in Green Bay homes?",
        answer:
          "Odorous house ants have multiple queens and large colonies that recover quickly from standard contact spray treatments. Killing the foragers you see does not reduce the colony. Slow-acting liquid bait placed at active trail points and foundation edges is more effective because foragers carry it back to the colony before it acts, gradually reducing the queen and brood population. Outdoor bait placements in spring address the exterior colony that is supplying the indoor foragers.",
      },
      {
        question: "Are yellowjackets worse in Green Bay than other Wisconsin cities?",
        answer:
          "The compressed warm season means Green Bay's yellowjacket colonies grow quickly through a shorter summer and reach peak aggression in August and September. The populations are not necessarily larger than in other Wisconsin cities but the seasonal window is compressed. Ground nests near the Fox River corridor and wall void nests in older homes near the bay are both common. Treating nests in July, before they reach peak aggression, is safer and more effective than waiting until August.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Milwaukee", slug: "milwaukee" },
      { name: "Madison", slug: "madison" },
      { name: "Appleton", slug: "appleton" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Green Bay, WI | Mice, Carpenter Ants & Stink Bugs",
    metaDescription:
      "Green Bay pest control for house mice, carpenter ants, odorous house ants, yellowjackets and brown marmorated stink bugs. Brown County Lake Michigan Great Lakes specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
