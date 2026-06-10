import type { CityLocation } from "@/types";

// New Hampshire city data. Pest intelligence verified against UNH Cooperative Extension
// and New Hampshire DHHS tick surveillance data.

export const newHampshireCities: CityLocation[] = [
  {
    slug: "manchester",
    name: "Manchester",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T2",
    population: "~115,000",
    county: "Hillsborough County",
    climate: "cold-humid",
    climateDriver:
      "Manchester sits along the Merrimack River in south-central New Hampshire. The cold-humid New England climate delivers genuine winters with snow and extended cold that suppress many outdoor pests for months. However, the surrounding forests and the Merrimack River valley sustain high deer tick populations that carry Lyme disease, and New Hampshire consistently ranks among the top states nationally for reported Lyme disease cases. The city's older mill buildings and mixed residential stock, ranging from historic triple-deckers near the Merrimack to newer suburban construction, creates a varied pest habitat from urban to semi-rural.",
    topPests: [
      "Deer Ticks",
      "House Mice",
      "Carpenter Ants",
      "German Cockroaches",
      "Yellowjackets",
    ],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason:
          "Active whenever temperatures are above freezing, highest risk May through October",
        note:
          "New Hampshire DHHS tick surveillance data consistently places the state among the top tier nationally for reported Lyme disease cases. The forested areas and wooded parks surrounding Manchester, the Merrimack River corridor, and properties that back to brushy or wooded land carry meaningful deer tick risk. UNH Cooperative Extension's tick research program is an active resource for residents navigating tick exposure.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason:
          "Year-round indoors, strong push into structures September through November",
        note:
          "House mice are the dominant year-round rodent pest in Manchester. New Hampshire winters are cold enough to make heated structures essential for mice, and the fall push into buildings is reliable and fast. Manchester's older housing stock, including the mill-era triple-deckers and row houses near the Amoskeag millyard, has more entry points than newer construction.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason:
          "Active May through September, most visible indoors in spring",
        note:
          "Carpenter ants are the dominant wood-destroying insect in New Hampshire. UNH Cooperative Extension entomologist Dr. Alan Eaton has documented that black carpenter ants are widespread across the state and commonly infest moist or damaged wood in homes. Manchester's older wood-frame housing and the proximity to the Merrimack River's wooded corridor sustain large outdoor colonies that find their way into structures through moist or damaged wood.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are present in Manchester's multi-family housing, commercial kitchens, and restaurants. They are entirely indoor insects in New Hampshire's climate and do not come from outside. They spread through shared walls, plumbing voids, and utility runs in multi-unit buildings.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note:
          "Yellowjackets are a significant summer and fall pest in Manchester and the broader Hillsborough County area. They nest in the ground, in wall voids of older structures, and under eaves. Colonies peak in August and September, when workers become highly aggressive. The older neighborhoods near the Merrimack with mature landscaping and older structure voids see the highest yellowjacket density.",
      },
    ],
    localHook:
      "New Hampshire DHHS tracks Lyme disease cases annually, and the state consistently appears near the top of national rankings for Lyme disease per capita. Manchester's position in the forested Merrimack Valley means that tick risk is real for homeowners with wooded or brushy yards, for families using the city's parks and trail systems, and for anyone working in landscaping or outdoor maintenance. Deer ticks are active from early spring through late fall, and nymphal ticks, the size of a poppy seed, are easy to miss.",
    intro:
      "Pest control in Manchester runs on two separate timelines. The outdoor calendar is driven by deer ticks, which carry Lyme disease at high rates in New Hampshire, and by yellowjackets that establish colonies in the compressed warm season and peak in late summer. The indoor calendar is year-round: house mice in the mill-era housing stock, carpenter ants in older wood-frame structures near the Merrimack, and German cockroaches in the multi-family and commercial food service spaces downtown. The mouse push in fall is reliable, and the carpenter ant pressure in spring is a consistent structural concern in a city where so much of the housing is older wood-frame construction.",
    sections: [
      {
        heading: "Deer ticks and Lyme disease in the Merrimack Valley",
        body: "New Hampshire's Lyme disease burden is real and documented. NH DHHS publishes annual case data showing the state among the top tier nationally for Lyme disease cases per capita. The deer tick, which carries Lyme as well as anaplasmosis and babesiosis, is found throughout the forested areas of Hillsborough County and in the wooded and brushy edges of Manchester's neighborhoods and parks. Tick risk is concentrated in areas where wooded or brushy habitat meets the lawn or garden: the yard margin, the trail edge, the brushy area under the deck. Deer ticks cannot jump or fly. They crawl onto hosts from vegetation at ankle and knee height. The practical defenses are yard habitat management (leaf litter removal, trimmed brush at the yard edge, wood chip or gravel borders between lawn and wooded areas), professional perimeter spray treatment in spring and fall, and personal protection (repellent, long pants, tick checks) when in wooded areas. The nymphal ticks active from May through July are the highest disease transmission risk because they are tiny and easy to miss.",
      },
      {
        heading: "Carpenter ants in Manchester's older housing",
        body: "Carpenter ants are the dominant wood pest in New Hampshire, and Manchester's housing stock gives them ample opportunity. The city's mill-era triple-deckers, craftsman homes, and older wood-frame structures near the Amoskeag millyard and the Merrimack riverfront carry more moisture-affected wood than newer construction. Carpenter ants do not eat wood. They excavate it, creating smooth galleries in damp or rotting wood for nesting. The signs of an established colony inside the house are large black ants, up to half an inch long, emerging from a consistent location indoors in spring, and coarse frass (sawdust-like material) near the infestation site. Finding them inside in spring usually indicates a colony established in moisture-damaged wood, typically around a leaking window, a wet sill plate, or a roof area with inadequate flashing. Treatment targets the colony, and the moisture problem that sustains it must be addressed to prevent re-infestation.",
      },
    ],
    prevention: [
      "Remove leaf litter and trim brush at the yard edge each spring to reduce deer tick habitat near the home.",
      "Seal foundation gaps, utility penetrations, and door sills in September before the fall mouse push.",
      "Inspect wood around windows, door frames, and roof lines annually for moisture damage that attracts carpenter ants.",
      "Treat yellowjacket ground nests in late June or July when colonies are still small and before they reach dangerous August size.",
    ],
    costNote:
      "Manchester pest pricing is standard New England range. Tick yard programs are spring and fall treatments and can be combined with mosquito barrier service. Carpenter ant programs include moisture assessment and colony treatment. Mouse exclusion and trapping programs are quoted after a free inspection. Yellowjacket treatment is per nest, most cost-effective in July.",
    faqs: [
      {
        question: "How serious is Lyme disease risk in the Manchester area?",
        answer:
          "Significant. New Hampshire consistently appears among the top states nationally for reported Lyme disease cases per capita, according to NH DHHS annual surveillance reports. The Merrimack Valley and Hillsborough County carry meaningful tick risk, particularly for properties with wooded or brushy yard edges and for residents who use the area's trails and parks. Nymphal ticks are the highest-risk stage because they are tiny (poppy seed size) and easy to miss. Checking for ticks after every outdoor outing and treating the yard boundary in spring and fall are the practical defenses.",
      },
      {
        question: "Why do carpenter ants seem to come out of nowhere in spring in Manchester?",
        answer:
          "They are not coming from nowhere: they are emerging from a colony that has been in the wood through winter. Carpenter ants overwinter in their nests and become visible indoors in spring as temperatures rise and the colony becomes active again. Finding them inside in spring means a colony is established in or very near the structure, typically in damp or moisture-damaged wood. The spring emergence is the best time to find them and treat the colony before it grows further.",
      },
      {
        question: "When do mice become a problem in Manchester homes?",
        answer:
          "September and October are the main entry months. New Hampshire winters are cold enough that mice actively seek heated shelter as temperatures drop. Manchester's older housing with more foundation gaps, worn door sills, and utility penetrations is more exposed than newer construction. Completing exclusion work in August or early September, before the push begins, prevents the problem more cost-effectively than dealing with an established population in November.",
      },
      {
        question: "Are German cockroaches common in Manchester homes?",
        answer:
          "They are present but less common in single-family homes than in multi-family housing and commercial food service. German cockroaches are indoor insects that do not survive outside in New Hampshire winters. They are introduced through infested boxes, appliances, secondhand furniture, and building-to-building spread in multi-unit housing. Once established they breed rapidly. Gel bait treatment is significantly more effective than spray for German cockroaches because it reaches the colony rather than just surface insects.",
      },
      {
        question: "Are yellowjackets worse near the Merrimack River in Manchester?",
        answer:
          "The wooded corridors along the Merrimack and the older residential neighborhoods near the river do see higher yellowjacket density than the open suburban areas, because they have more mature landscaping, older structures with wall voids, and ground cover that suits nesting. Yellowjacket ground nests in yard areas and wall void nests in older structures are both common near the river corridor. Treating nests in late June or July, before they reach the dangerous August peak, is both safer and more effective.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Nashua", slug: "nashua" },
      { name: "Concord", slug: "concord-nh" },
      { name: "Boston", slug: "boston" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle:
      "Pest Control in Manchester, NH | Deer Ticks, Mice & Carpenter Ants",
    metaDescription:
      "Manchester pest control for deer ticks, house mice, carpenter ants, German cockroaches and yellowjackets. New Hampshire Lyme disease specialists. Merrimack Valley. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "nashua",
    name: "Nashua",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T2",
    population: "~90,000",
    county: "Hillsborough County",
    climate: "cold-humid",
    climateDriver:
      "Nashua sits on the Merrimack River near the Massachusetts border in southern New Hampshire, where a cold-humid New England climate delivers genuine winters with significant snowfall, warm summers, and a fall season defined by rapid temperature drop that drives mice and other pests toward heated structures. New Hampshire CDC surveillance consistently places the state in the high-burden category for Lyme disease, and southern Hillsborough County shares that risk with the wooded corridors along the Nashua River and the forested edges of the city's suburban neighborhoods.",
    topPests: [
      "Deer Ticks",
      "House Mice",
      "Carpenter Ants",
      "Stink Bugs",
      "Yellowjackets",
    ],
    pestProfile: [
      {
        name: "Deer ticks (blacklegged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active whenever above freezing, highest risk May through October",
        note:
          "New Hampshire CDC data places the state among the high-burden Lyme disease states, and Hillsborough County including Nashua is within the high-risk tick zone. The Nashua River corridor, Mine Falls Park, and the wooded suburban edges throughout the city carry meaningful deer tick risk. Nymphal ticks active May through July are tiny, difficult to find in a tick check, and responsible for the majority of Lyme transmission cases.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, main surge September through November",
        note:
          "Nashua's cold winters make heated structures essential for mice each fall. The surge into buildings is reliable and fast when temperatures drop in September and October. Nashua's housing stock includes many older homes near the Millyard district and the South End with more foundation gaps and aged utility penetrations than newer suburban construction.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, most visible indoors in spring",
        note:
          "Carpenter ants are the dominant wood-destroying pest in New Hampshire. The Nashua River corridor and the wooded suburban lots throughout southern Hillsborough County sustain large outdoor colonies that find their way into moisture-damaged wood in structures. University of New Hampshire Cooperative Extension identifies carpenter ants as a primary structural pest concern in the state.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion September through November, emerge in spring",
        note:
          "Stink bugs are well established in southern New Hampshire, which sits within the core mid-Atlantic to New England invasion corridor of the brown marmorated stink bug. They aggregate on building exteriors in September and push into wall voids and attic spaces to overwinter, re-emerging indoors on warm winter and spring days.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note:
          "Yellowjackets are a consistent warm-season pest in Nashua and throughout Hillsborough County. They nest in the ground and in wall voids of older structures. The older Millyard area buildings and the residential neighborhoods near the Nashua River see regular yellowjacket activity. Colonies reach maximum size and aggression in August and September.",
      },
    ],
    localHook:
      "Nashua's position at the southern New Hampshire border, sharing the Merrimack Valley's deer tick burden and the stink bug pressure of the mid-Atlantic invasion corridor, gives the city a pest calendar that is simultaneously a New England and a mid-Atlantic management challenge. The fall brings both the stink bug aggregation and the mouse surge within weeks of each other.",
    intro:
      "Pest control in Nashua runs on two distinct seasonal clocks. The fall clock is the most intense: stink bugs aggregating on sun-facing building walls in September while house mice begin their push into older homes as the same October cold arrives. Spring activates deer ticks and carpenter ants simultaneously. Yellowjackets build through the warm season to an August peak. The Nashua River and Mine Falls Park create tick habitat that is part of daily life for Nashua residents who use the city's parks and trail network. Understanding the seasonal sequence and acting at the right point in each one is what separates pest management that works from reactive treatment that chases problems after they are established.",
    sections: [
      {
        heading: "Deer ticks and Lyme disease in Nashua",
        body: "New Hampshire is a high-burden Lyme disease state, and Nashua's position at the southern end of the state, with the Nashua River corridor, Mine Falls Park, and wooded suburban lot edges throughout the city, means deer tick exposure is a genuine daily reality for residents. The tick calendar in Nashua mirrors the rest of southern New Hampshire: adult ticks are active in spring and fall whenever temperatures are above freezing. Nymphal ticks, active primarily from May through July, are the highest-transmission-risk stage because they are the size of a poppy seed and easy to miss in a tick check. The practical defenses are yard-level habitat management, a leaf litter clearance and trimmed brush edge, combined with professional perimeter spray treatment in spring and fall that reduces the tick population in yard zones. For residents who use Mine Falls Park, the Nashua River Rail Trail, and the wooded parks throughout the city, tick checks after every outdoor activity are not overcaution, they are standard New Hampshire practice.",
      },
      {
        heading: "Fall in Nashua: stink bugs and mice arrive together",
        body: "Southern New Hampshire sits in the invasion range of the brown marmorated stink bug, and the fall aggregation in Nashua is a predictable annual event. Stink bugs begin appearing on warm exterior walls in early September, congregating on south-facing and west-facing surfaces before temperatures drop enough to push them into wall voids and attic spaces for overwintering. At almost exactly the same time, house mice begin their fall push into heated structures as October temperatures fall. The two events overlap in September and October, creating the busiest pest management window of the year for Nashua homeowners. The prevention window for both is September: sealing exterior gaps and treating the stink bug perimeter while they are still aggregating outside, combined with completing foundation exclusion work before mice are already inside. Acting in September is far more effective than reacting in November when stink bugs are already in the walls and mice are already in the kitchen.",
      },
    ],
    prevention: [
      "Seal attic vents with fine mesh, caulk gaps around windows and utility lines, and treat the exterior perimeter in September before stink bugs push into wall voids.",
      "Complete foundation exclusion work, sealing all gaps at sill plates and utility penetrations, before October to prevent the fall mouse surge into older Nashua homes.",
      "Remove leaf litter at the yard edge each spring and apply a professional tick perimeter spray to reduce deer tick numbers in yard zones.",
      "Treat yellowjacket ground nests in late June when colonies are small rather than waiting for the dangerous August peak size.",
    ],
    costNote:
      "Nashua pest pricing is standard southern New Hampshire range. A year-round plan commonly includes tick perimeter spray in spring and fall, stink bug exclusion in September, fall rodent exclusion, and yellowjacket treatment in summer. Carpenter ant programs include moisture assessment. A free inspection sets the right scope.",
    faqs: [
      {
        question: "How serious is the deer tick risk in Nashua?",
        answer:
          "Significant. New Hampshire CDC data places the state consistently in the high-burden Lyme disease category, and Hillsborough County including Nashua is within the high-risk zone. Mine Falls Park, the Nashua River corridor, and any wooded or brushy yard edge carry meaningful deer tick risk. The nymphal stage, active May through July and the size of a poppy seed, is the highest-risk stage because it is easy to miss in a tick check. Professional perimeter spray in spring and fall reduces yard-level tick numbers, and checking for ticks after outdoor activities in wooded or grassy areas is standard New Hampshire practice.",
      },
      {
        question: "Why do stink bugs get into Nashua homes every fall?",
        answer:
          "Southern New Hampshire is within the established range of the brown marmorated stink bug. They aggregate in large numbers on sun-facing exterior walls in September to absorb heat before seeking overwintering sites in wall voids and attic spaces. Once inside the walls, they emerge on warm winter days and in spring when interior temperatures rise. The prevention window is September: a perimeter treatment and sealing exterior gaps while they are still aggregating outside prevents the indoor overwintering population from establishing.",
      },
      {
        question: "When do mice become a problem in Nashua homes?",
        answer:
          "September and October are the main entry months. Nashua's cold winters make heated structures essential for mice, and the fall surge is fast and reliable. Older homes near the Millyard district, the South End, and along the Nashua River corridor have more potential entry points than modern construction. Completing exclusion work in September, before the surge begins, is more effective than trapping an established population in November.",
      },
      {
        question: "Why do carpenter ants appear inside my Nashua home in spring?",
        answer:
          "Carpenter ants overwinter in their nests in wood and become active again as spring temperatures rise. Finding them inside in spring means a colony is already established, almost always in moisture-damaged wood somewhere in the structure. Common sites in Nashua homes are window frames with past or current moisture infiltration, sill plates near a plumbing leak, and roof areas with poor flashing. University of New Hampshire Extension identifies carpenter ants as a primary wood-destroying pest in the state. The spring emergence is the best window to find and treat the colony.",
      },
      {
        question: "Are yellowjackets particularly bad near the Nashua River?",
        answer:
          "The Nashua River corridor and the wooded residential neighborhoods along the river see higher yellowjacket density than open suburban areas, because the mature landscaping and older structures provide more nesting sites. Ground nests in yard areas and wall void nests in older Millyard-era buildings are both common near the river. The key timing is June: a small June nest is a manageable problem, while the same nest in August has thousands of workers and is genuinely dangerous to disturb.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Concord", slug: "concord-nh" },
      { name: "Lowell", slug: "lowell" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Nashua, NH | Deer Ticks, Stink Bugs & House Mice",
    metaDescription:
      "Nashua pest control for deer ticks (Lyme disease), stink bugs, house mice, carpenter ants and yellowjackets. Hillsborough County Nashua River Merrimack Valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
