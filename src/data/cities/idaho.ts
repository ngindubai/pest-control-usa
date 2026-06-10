import type { CityLocation } from "@/types";

// Idaho. Pest data reflects semi-arid high desert and Snake River Plain conditions.
// Black widow and rodent data from University of Idaho Extension.

export const idahoCities: CityLocation[] = [
  {
    slug: "boise",
    name: "Boise",
    state: "Idaho",
    stateSlug: "idaho",
    stateAbbr: "ID",
    tier: "T1",
    population: "~240,000",
    county: "Ada County",
    climate: "semi-arid",
    climateDriver:
      "Boise sits in a high desert valley on the Snake River Plain at roughly 2,700 feet elevation. The semi-arid climate brings hot dry summers, cold winters, and low humidity. Pests concentrate in spring and fall, with rodents driven indoors by cold winters and irrigation-fed yards drawing pests during the dry summer.",
    topPests: ["Mice", "Black Widows", "Wasps", "Ants", "Box Elder Bugs"],
    pestProfile: [
      {
        name: "House mice and deer mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge in fall",
        note: "Boise's cold winters drive mice firmly indoors each fall. Homes on the Boise foothills edge and near agricultural land also see deer mice, which can carry hantavirus. The University of Idaho confirms hantavirus risk from deer mice in the state.",
      },
      {
        name: "Western black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Western black widows are common in the Boise area, favoring dry undisturbed spots: window wells, garages, wood piles, utility boxes, and irrigation boxes. The female's bite is medically significant.",
      },
      {
        name: "Yellow jacket and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "The dry Boise summers suit wasps well. Yellow jackets nest in the ground and wall voids and become aggressive in late summer as colonies peak and natural food declines. Paper wasps build nests under eaves and in sheltered outdoor spots.",
      },
      {
        name: "Odorous house and pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Odorous house ants and pavement ants are the common nuisance ants in Boise, foraging indoors and following irrigation moisture during the dry summer months. Carpenter ants appear in homes with moisture-damaged wood.",
      },
      {
        name: "Box elder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation, overwintering on and in homes",
        note: "Box elder bugs gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are a harmless nuisance, common in Boise neighborhoods with box elder and maple trees.",
      },
    ],
    localHook:
      "Boise's high desert valley is dry, which keeps humidity pests low, but two things stand out: the fall rush of mice indoors when the cold arrives, and the western black widows that turn up in window wells, garages, and irrigation boxes across the valley. The treatment calendar here follows the seasons closely.",
    intro:
      "Pest control in Boise follows the high desert seasons. The dry, semi-arid valley climate keeps humidity-loving pests low, so the local cast leans toward rodents, black widows, wasps, and ants. Two events define the year: the fall surge of mice into heated homes when the cold sets in, and the western black widows that favor the dry, undisturbed spots common around valley homes. Deer mice near the foothills and agricultural edges carry hantavirus risk, which makes rodent work here a safety matter, not just a nuisance one.",
    sections: [
      {
        heading: "TL;DR for Boise homeowners",
        body: "Seal the house against mice before fall, because Boise winters push them indoors fast. Watch for western black widows in window wells, garages, and irrigation boxes year-round. Treat wasp nests early in summer before they peak in August. Handle deer mouse droppings near the foothills with care, given the hantavirus risk. The dry climate means fewer moisture pests overall, so rodents, spiders, and wasps are the main jobs.",
      },
      {
        heading: "Deer mice and hantavirus on the valley edges",
        body: "Boise homes near the foothills or agricultural land can have deer mice in addition to house mice. The University of Idaho confirms deer mice in Idaho can carry hantavirus, which makes how you handle an infested space important. The risk comes from disturbing dried droppings or nesting material in enclosed areas like sheds, garages, and crawl spaces. The safe approach is wetting the area with disinfectant before cleaning, wearing gloves, and ventilating, rather than dry-sweeping. A professional handles this more safely than most homeowners can.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and utility openings before fall to keep mice out.",
      "Clear window wells, wood piles, and garage clutter to reduce western black widow harborage.",
      "Treat wasp nests in early summer before colonies reach peak size in August.",
      "Wet down deer mouse droppings with disinfectant before cleaning enclosed spaces, and wear gloves.",
    ],
    costNote:
      "Boise pest control commonly uses a seasonal plan: fall rodent exclusion, summer wasp and spider work, and ant treatment through the warm months. Hantavirus-safe rodent cleanup in enclosed spaces may be a separate service. Start with a free inspection.",
    faqs: [
      {
        question: "When do mice get into Boise homes?",
        answer:
          "Mostly in fall, when the cold high desert winters drive them indoors through small gaps around foundations, pipes, and utilities. Boise's cold can trigger a fast, significant surge. Sealing entry points before fall is far more effective than trapping after mice are established. Homes near the foothills and agricultural edges also see deer mice.",
      },
      {
        question: "Are black widows common in Boise?",
        answer:
          "Yes. Western black widows are common across the Boise valley, favoring dry, undisturbed spots: window wells, garages, wood piles, utility boxes, and irrigation boxes. Their bite is medically significant. Clearing clutter and harborage near doors, garages, and play areas, and wearing gloves when reaching into dark enclosed spaces, reduces the risk.",
      },
      {
        question: "Is hantavirus a real concern in the Boise area?",
        answer:
          "It is a genuine consideration near the foothills and agricultural land, where deer mice are present. The University of Idaho confirms deer mice in Idaho can carry hantavirus. The risk comes from disturbing dried droppings or nesting material in enclosed spaces. Wetting the area with disinfectant before cleaning, wearing gloves, and ventilating are the recommended precautions.",
      },
      {
        question: "What are the bugs swarming my Boise house in fall?",
        answer:
          "Most likely box elder bugs. They gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are harmless, do not bite or damage the home, and are common in neighborhoods with box elder and maple trees. Sealing entry points before fall reduces how many get in.",
      },
      {
        question: "Do I need year-round pest control in Boise?",
        answer:
          "Many Boise homes do well with a seasonal plan rather than constant treatment, given the dry climate: rodent exclusion in fall, wasp and spider work in summer, and ant treatment through the warm months. Homes with recurring black widow or rodent pressure may benefit from a continuous plan. A free inspection sets the right schedule.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Meridian", slug: "meridian" },
      { name: "Nampa", slug: "nampa" },
      { name: "Caldwell", slug: "caldwell" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Boise, ID | Mice, Black Widows & Wasps",
    metaDescription:
      "Boise pest control for fall mice, deer mice (hantavirus), western black widows, wasps, ants and box elder bugs. High desert specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "nampa",
    name: "Nampa",
    state: "Idaho",
    stateSlug: "idaho",
    stateAbbr: "ID",
    tier: "T2",
    population: "~105,000",
    county: "Canyon County",
    climate: "semi-arid",
    climateDriver:
      "Nampa sits in the Treasure Valley in Canyon County, Idaho's fastest-growing county, at roughly 2,500 feet elevation in the high desert of the Snake River Plain. The semi-arid climate delivers hot, dry summers, cold winters with regular below-freezing temperatures, and strong temperature swings between seasons. The Boise River, Snake River irrigation canals, and the surrounding agricultural land create distinct pest pressures that differ from the Boise metro: house mice, voles, and deer mice from agricultural margins, black widow spiders in the dry sheltered spots abundant in Canyon County structures, and yellowjackets through the compressed warm season.",
    topPests: [
      "House Mice",
      "Western Black Widows",
      "Yellowjackets",
      "Odorous House Ants",
      "Voles",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, strong surge September through November",
        note:
          "Nampa's cold winters drive house mice into heated structures each fall, with the surge beginning in September when temperatures start to drop and intensifying through October. Canyon County's agricultural edges, irrigation canals, and open land adjacent to residential development provide large outdoor mouse populations that press hard into structures seasonally. University of Idaho Extension confirms house mice as a primary pest concern in Idaho agricultural communities.",
      },
      {
        name: "Western black widows",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered locations, most active spring through fall",
        note:
          "Western black widows are present throughout Canyon County and are common in Nampa garages, outbuildings, block walls, window wells, and wood piles. The dry, undisturbed environments of residential properties provide ideal habitat. Their bite is medically significant, and they are a routine management concern for Canyon County homeowners.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through September, most aggressive late August",
        note:
          "Yellowjackets are the dominant stinging insect pest in Nampa and Canyon County. They nest in the ground across lawns, garden beds, and the agricultural margins, and in wall voids of older structures. Colonies peak in August. University of Idaho Extension notes yellowjackets are a significant nuisance pest across southern Idaho through the warm season.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, trailing indoors during dry summer",
        note:
          "Odorous house ants are the common nuisance ant in Nampa homes, foraging indoors for moisture along foundation edges and plumbing during the hot, dry Canyon County summers. They are persistent once a trail is established but do not cause structural damage.",
      },
      {
        name: "Voles",
        serviceSlug: "vole-control",
        activeSeason: "Year-round, most destructive in fall and winter under snow",
        note:
          "Voles are a significant yard pest in Nampa and Canyon County, damaging lawns and garden plantings by gnawing roots and creating surface runways. The Treasure Valley's agricultural setting and irrigated landscape sustain large vole populations. Damage is often not noticed until snow melts in spring, revealing extensive surface runway networks.",
      },
    ],
    localHook:
      "Nampa's Canyon County agricultural setting, with irrigation canals and crop land adjacent to residential neighborhoods, creates higher rodent and vole pressure than the Boise metro. The fall mouse surge is fast and reliable when October cold arrives, and black widows are abundant in the dry sheltered spaces of Canyon County homes.",
    intro:
      "Pest control in Nampa follows the Treasure Valley high desert calendar with a Canyon County agricultural flavor. House mice are the defining seasonal pest, surging into heated structures each October with the reliability that comes from a large outdoor agricultural population and cold winters that allow no alternative. Voles work through lawns and garden root systems year-round, with damage most visible after snow cover melts in spring. Yellowjackets own the summer months, nesting in the ground and in wall voids of older structures and becoming aggressive by August. Western black widows are abundant in every dry, undisturbed corner of Canyon County garages and outbuildings. Odorous house ants trail indoors through the dry summer.",
    sections: [
      {
        heading: "House mice and the fall surge in Canyon County",
        body: "Nampa's position in Canyon County's agricultural landscape gives it a mouse problem that is more intense than most Treasure Valley communities. The surrounding onion and corn fields, the irrigation canal edges, and the open agricultural margins adjacent to residential development sustain mouse populations that are routinely reinforced from these rural sources. When October temperatures drop and outdoor habitat becomes inhospitable, mice move toward heated structures, and the pressure is fast and concentrated. University of Idaho Extension recommends that Canyon County homeowners complete exclusion work in September, before the surge begins, rather than waiting to discover an established population in November. The standard exclusion approach is identifying and sealing every gap larger than a quarter-inch at the foundation sill plate, around utility penetrations, under garage doors, and at aging door sills. Steel wool backed with caulk and metal mesh over crawl space vents are the standard materials. Snap traps placed in active runways inside will show catches within 48 hours if mice are already present.",
      },
      {
        heading: "Voles in Nampa's irrigated lawns",
        body: "Voles are small rodents that live almost entirely below the surface of lawns and garden beds, creating a network of surface runways and tunnels through root zones. They are the most common non-mouse rodent pest in Nampa and Canyon County residential settings, and the Treasure Valley's irrigated residential landscape provides near-ideal habitat. The most insidious aspect of vole damage is that it often goes unnoticed through the fall and winter when ground cover, mulch, or snow conceals active runways. When spring arrives and the cover drops, homeowners often find dead patches in lawns, girdled ornamental shrubs, and gnawed root crowns across the garden. Treating voles in late summer, before they enter the fall and winter breeding cycle, is the most effective timing. Bait placed in tunnels or exclusion mesh around high-value plantings are the primary approaches. Re-infestation from the surrounding landscape is an ongoing management challenge for properties near agricultural margins.",
      },
    ],
    prevention: [
      "Complete foundation exclusion work in September before the fall mouse surge, sealing all gaps at the sill plate, utility penetrations, and garage doors.",
      "Inspect for vole surface runways in late summer and treat active tunnel systems before fall breeding increases their population.",
      "Treat yellowjacket ground nests in late June when colonies are small rather than waiting for the dangerous August peak size.",
      "Wear gloves when working in garages, wood piles, and window wells where western black widows commonly establish in Canyon County homes.",
    ],
    costNote:
      "Nampa pest control is commonly quoted seasonally: fall rodent exclusion in September and October, summer yellowjacket and spider work, and ant and vole management through the warm months. A free inspection identifies what your property needs by season.",
    faqs: [
      {
        question: "Why do I get more mice than my neighbors in Boise do?",
        answer:
          "Canyon County's agricultural setting gives Nampa a larger outdoor mouse population than the Boise metro. Fields, irrigation canals, and open agricultural land adjacent to residential neighborhoods sustain high mouse numbers that press harder into structures each fall. The further a Nampa home is from the urban core and the closer it is to agricultural margins, the stronger the fall mouse pressure tends to be.",
      },
      {
        question: "When do voles cause damage in Nampa yards?",
        answer:
          "Voles are active year-round but cause the most concentrated damage in fall and winter when they are breeding actively and when snow or ground cover conceals their surface runways. The damage becomes visible in spring when lawns show dead patches, ornamental shrubs have girdled stems or gnawed bark at ground level, and the surface runway network is visible across the lawn. Acting in late summer before winter breeding cycles is the most effective treatment timing.",
      },
      {
        question: "Are western black widows common in Nampa homes?",
        answer:
          "Yes. Canyon County's dry, undisturbed residential environments, including garages, window wells, block walls, and outdoor storage, are ideal black widow habitat. They are routine residents of Nampa garages and outbuildings rather than an occasional find. Their bite is medically significant. Wearing gloves when reaching into enclosed spaces and regular clearing of accumulated debris reduces encounter risk.",
      },
      {
        question: "Is hantavirus a concern in Nampa?",
        answer:
          "Deer mice, which can carry hantavirus, are present in Canyon County and in the agricultural areas adjacent to Nampa. The primary risk is in enclosed spaces where deer mouse droppings or nesting material have accumulated: sheds, crawl spaces, and outbuildings near agricultural land. The safe cleanup procedure involves wetting the area with disinfectant before cleaning, wearing gloves and an N95 respirator, and ventilating rather than dry-sweeping. University of Idaho Extension provides guidance on safe rodent cleanup for Idaho agricultural communities.",
      },
      {
        question: "How do I deal with yellowjackets nesting in my Nampa lawn?",
        answer:
          "Treat ground nests in late June or early July when colonies are small and workers are fewer. At that stage, a professional treatment at night when all workers are in the nest is both effective and manageable. By August, a Nampa yellowjacket colony can contain thousands of workers defending the nest aggressively. If you discover a nest at peak size, leave the area and call for professional treatment rather than attempting to address it yourself.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Boise", slug: "boise" },
      { name: "Caldwell", slug: "caldwell" },
      { name: "Meridian", slug: "meridian" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Nampa, ID | House Mice, Black Widows & Yellowjackets",
    metaDescription:
      "Nampa pest control for house mice, western black widows, yellowjackets, voles and odorous house ants. Canyon County Treasure Valley agricultural edge Idaho specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "meridian",
    name: "Meridian",
    state: "Idaho",
    stateSlug: "idaho",
    stateAbbr: "ID",
    tier: "T2",
    population: "~125,000",
    county: "Ada County",
    climate: "semi-arid",
    climateDriver:
      "Meridian is Idaho's fastest-growing city and one of the fastest-growing in the nation, sitting in Ada County in the Boise metropolitan area at around 2,600 feet elevation. The semi-arid high desert climate delivers hot, dry summers that exceed 100 degrees, cold winters with temperatures dropping into the single digits, and rapid growth that creates a mix of brand-new construction and mature established neighborhoods with very different pest profiles. The Boise River greenbelt corridor, numerous parks, and the agricultural edges of the rapidly developing landscape sustain outdoor pest populations adjacent to some of the newest housing in Idaho.",
    topPests: [
      "House Mice",
      "Western Black Widows",
      "Yellowjackets",
      "Odorous House Ants",
      "Box Elder Bugs",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, fall surge September through November",
        note:
          "Meridian's cold winters and rapid new-construction development create both classic fall mouse pressure and unusual entry opportunities. New homes in Meridian sometimes have construction gaps and poorly sealed utilities that are easier for mice to exploit than established construction. The agricultural edges of Meridian's fast-developing landscape sustain high mouse populations. University of Idaho Extension confirms house mice as a primary pest concern across the Treasure Valley.",
      },
      {
        name: "Western black widows",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered locations, most active spring through fall",
        note:
          "Western black widows are present throughout Ada County and Meridian, found in garages, window wells, block walls, and yard debris. The dry high desert conditions support year-round populations in sheltered spots. Their bite is medically significant, and they are a routine concern in Meridian homes including new construction where undisturbed garage corners provide ideal habitat.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through September, most aggressive late August",
        note:
          "Yellowjackets nest in the ground across Meridian's lawns and parks and in wall voids of any structure with exterior gaps. They are a consistent warm-season pest in Ada County, reaching maximum colony size and aggression in August. New residential development with disturbed soil creates favorable ground-nesting conditions.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, trailing indoors during hot, dry summer",
        note:
          "Odorous house ants are the primary nuisance ant in Meridian, trailing indoors along foundation edges and plumbing during the hot, dry Treasure Valley summers. They are persistent once established but do not damage the home. New construction neighborhoods may see early ant establishment as landscaping is installed.",
      },
      {
        name: "Box elder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation September through October, overwintering in and on homes",
        note:
          "Box elder bugs gather on warm south-facing building walls in September in Meridian and work through gaps and cracks to overwinter in wall voids and heated spaces. They are harmless nuisance insects but can appear in large numbers in neighborhoods with box elder and maple trees, which are common in Meridian's newer subdivisions as street trees.",
      },
    ],
    localHook:
      "Meridian's explosive growth creates a distinctive pest challenge: brand-new homes with imperfect construction sealing alongside established older neighborhoods, all sitting at the agricultural edge of a rapidly developing landscape. The fall mouse surge is hard and fast, and the rapid construction pace means new homes sometimes have more entry points than owners expect.",
    intro:
      "Pest control in Meridian runs on the Treasure Valley's high desert rhythm. House mice are the defining seasonal event, surging into homes each October with cold that genuinely reaches the single digits in hard winters. Western black widows are year-round in the sheltered spots of Meridian garages and outbuildings. Yellowjackets build through the dry summer and peak in late August. Odorous house ants trail indoors during summer dry spells. Box elder bugs stage their predictable fall wall aggregations. The added Meridian wrinkle is new construction: rapidly built homes sometimes have more gaps and poorly sealed penetrations than older established construction, and the agricultural margins of the still-developing landscape sustain outdoor pest populations that veterans of established suburbs would not expect.",
    sections: [
      {
        heading: "New construction and pest entry in Meridian's fast-growth suburbs",
        body: "Meridian's rapid residential development means a large portion of its housing stock has been built in the past decade. New construction can be better-sealed than aging older homes, but the reality in a fast-growing community is that construction quality varies and the final sealing of foundations, utilities, and exterior details is not always as thorough as in more established construction. Mice and insects enter through gaps at the foundation sill plate, around plumbing penetrations that were not caulked after rough-in, and at utility chases that were left open. New homes adjacent to the agricultural margins of developing land face the same outdoor rodent populations as older homes. A post-construction pest inspection, before a new Meridian home's first fall, identifies and seals the entry points before the October mouse surge. University of Idaho Extension recommends a complete perimeter exclusion inspection for all new homes in the Treasure Valley agricultural zone.",
      },
      {
        heading: "Box elder bugs in Meridian's newer neighborhoods",
        body: "Box elder bugs are one of the more visually striking fall nuisance pests in Meridian. They aggregate in large numbers on warm south-facing and west-facing building walls each September, appearing suddenly in masses that alarm new homeowners who have not experienced them before. After warming themselves on exterior walls, they seek entry into wall voids and heated spaces through gaps at windows, siding joints, and utility penetrations. In Meridian's newer subdivisions, box elder and maple trees have been planted as street trees and yard trees over the past decade and are reaching the maturity that produces large seed crops, which sustains the local box elder bug population. They are entirely harmless: no bite, no sting, no structural damage. Sealing gaps around windows and siding joints before September reduces how many get into wall voids. Vacuuming up those that appear indoors is the practical indoor response.",
      },
    ],
    prevention: [
      "Schedule a post-construction pest inspection for new Meridian homes before the first fall to identify and seal construction gaps before the October mouse surge.",
      "Seal gaps around windows, siding joints, and utility lines before September to limit box elder bug access to wall voids and heated spaces.",
      "Treat yellowjacket ground nests in late June when colonies are small rather than waiting for the dangerous August peak.",
      "Keep garage floors clear of accumulated storage and seal window wells to eliminate western black widow harborage adjacent to the living space.",
    ],
    costNote:
      "Meridian pest control is comparable to the broader Boise metro range. Fall rodent exclusion in September and October is the most requested seasonal service. Summer yellowjacket, spider, and ant work covers the warm months. A free inspection identifies gaps specific to your home's construction age and yard situation.",
    faqs: [
      {
        question: "Do new homes in Meridian still get mice?",
        answer:
          "Yes. New construction is not automatically mouse-proof. Fast-paced residential development sometimes leaves construction gaps at sill plates, utility penetrations, and exterior details that are adequate entry points for mice. Additionally, new homes are often built on land at the agricultural edge, where outdoor mouse populations are substantial. A post-construction exclusion inspection before the first fall identifies and seals gaps specific to the home's construction.",
      },
      {
        question: "Are box elder bugs dangerous in Meridian?",
        answer:
          "No. Box elder bugs do not bite, sting, or damage structures. They are purely a nuisance pest that appears in sometimes alarming numbers on building exteriors each September and occasionally inside homes when they work through gaps into wall voids. Sealing exterior gaps reduces indoor penetration. Vacuuming up those that appear inside is the safest response: crushing them releases a mildly unpleasant odor.",
      },
      {
        question: "When should I do exclusion work in Meridian?",
        answer:
          "September is the ideal month. The mouse fall surge begins in late September and intensifies through October. Completing exclusion work in September, before mice are actively pushing into structures, is more effective than trapping an established population in November. If you discover mice already indoors, snap traps placed at active runways will show results within 48 hours while exclusion work closes the entry points.",
      },
      {
        question: "Are western black widows common in Meridian?",
        answer:
          "Yes. Western black widows are a routine residential pest in Ada County, and Meridian homes, including new construction, see them regularly in garages, window wells, and block wall areas. The dry high desert conditions support year-round populations in sheltered spots. Their bite is medically significant. Wearing gloves when reaching into enclosed outdoor storage and regular clearing of debris reduces encounter risk.",
      },
      {
        question: "How do I stop yellowjackets from nesting in my Meridian lawn?",
        answer:
          "You cannot reliably prevent ground nesting, but treating nests early is far better than dealing with a mature August colony. Find nests in late June or early July when they are still small and treat them professionally at night when workers are in the nest. Disturbed soil from new landscaping and aeration creates favorable ground nesting conditions in Meridian's newer neighborhoods. Check low-traffic yard areas in June for the characteristic yellowjacket flight pattern indicating a ground nest.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Boise", slug: "boise" },
      { name: "Nampa", slug: "nampa" },
      { name: "Eagle", slug: "eagle" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Meridian, ID | House Mice, Black Widows & Box Elder Bugs",
    metaDescription:
      "Meridian pest control for house mice, western black widows, yellowjackets, odorous house ants and box elder bugs. Ada County Treasure Valley fastest-growing Idaho city specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
