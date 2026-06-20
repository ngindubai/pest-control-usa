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
    tier: "T3",
    population: "~92,000",
    county: "Hillsborough County",
    climate: "cold-humid",
    climateDriver:
      "Nashua sits at the southern edge of New Hampshire, close to the Massachusetts border and the Merrimack River corridor. The cold-humid New England climate delivers cold winters and warm humid summers. Southern NH's position at the range edge of several pests, including eastern subterranean termites and expanding deer tick populations, makes Nashua's pest profile more southern in character than cities farther north. The surrounding wooded suburban landscape and river corridor provide strong habitat for deer ticks and nesting carpenter ants.",
    topPests: [
      "Deer Ticks",
      "Carpenter Ants",
      "Eastern Subterranean Termites",
      "Mice",
      "Mosquitoes",
    ],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active whenever temperatures are above freezing, peak risk May through October",
        note: "NH Fish and Game and UNH Cooperative Extension identify deer tick expansion in southern NH as a significant public health concern. Hillsborough County Lyme disease case counts have risen over the past decade, and Nashua's wooded suburban neighborhoods and Merrimack River corridor carry meaningful tick pressure.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, spring emergence the most visible sign",
        note: "Carpenter ants are the classic New England structural pest, and Nashua's older wood-frame suburban housing provides ideal nesting conditions in moist or moisture-damaged wood. Large black carpenter ants foraging indoors in spring indicate a colony already established in the structure.",
      },
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring, active underground year-round",
        note: "Eastern subterranean termites reach into southern NH, and Nashua is within their confirmed range. Nashua homeowners closer to the Massachusetts border are at higher risk, but the pest is present throughout Hillsborough County in the right soil and moisture conditions.",
      },
      {
        name: "Mice",
        serviceSlug: "rodent-control",
        activeSeason: "Year-round indoors, surge in September and October",
        note: "New Hampshire winters are cold enough to drive house mice firmly into heated structures by early fall. Nashua's mix of older housing near the downtown core and newer suburban construction all face fall mouse pressure, with older homes having more entry points.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Late May through September",
        note: "Eastern equine encephalitis has been detected in NH and the mosquito vector is present in Hillsborough County in wet years. The Merrimack River floodplain and the numerous wetlands in the Nashua area sustain summer mosquito populations that can be significant in high-rainfall seasons.",
      },
    ],
    localHook:
      "Hillsborough County Lyme disease case counts tracked by NH DHHS have grown steadily alongside the expansion of deer tick populations in southern NH. Nashua's proximity to the Massachusetts border means its tick and termite risk is closer to southern New England than to northern NH. Homeowners in Nashua's wooded suburban neighborhoods, particularly those backing to conservation land or the Merrimack River corridor, face real tick exposure from spring through late fall.",
    intro:
      "Pest control in Nashua spans a broader range than many NH cities because of its southern location. Deer ticks are the top health concern, with Hillsborough County seeing consistent Lyme disease case reporting. Eastern subterranean termites, unusual this far north, are confirmed present in southern NH and reach into Nashua. Carpenter ants are the defining structural pest in the city's wood-frame housing stock. Mice push into homes each fall, and mosquitoes carry EEE risk along the Merrimack River corridor in wet years. The pest calendar here runs from early spring through late fall, with some concerns, mice and carpenter ant colonies, persisting through winter.",
    sections: [
      {
        heading: "Deer Ticks and Lyme Disease in Hillsborough County",
        body: "Deer tick populations have expanded significantly in southern New Hampshire over the past two decades, and Hillsborough County now sees consistent annual Lyme disease case reporting tracked by NH DHHS. Nashua sits at the heart of this expansion zone. The city's wooded suburban character, with many neighborhoods backing to conservation areas, the Nashua River Rail Trail corridor, and the Merrimack River floodplain, provides strong habitat for the deer and white-footed mice that support tick populations. Tick risk in Nashua is not theoretical: it is a documented, measurable public health concern that residents with outdoor time need to take seriously. The highest-risk period is from late April through July when nymphal ticks, barely the size of a poppy seed, are active and easy to miss. Adult ticks pick up again in fall and remain active on warm days well into November. Practical management for Nashua properties includes leaf litter removal at the yard edge, a mowed buffer between the lawn and any wooded or brushy area, professional perimeter spray treatment in spring and fall, and tick checks after any time spent outdoors in tick habitat. Properties backing to wooded or brushy land are the highest priority for treatment.",
      },
      {
        heading: "Carpenter Ants, Termites, and Winter Rodents in Nashua",
        body: "Carpenter ants are New England's defining structural pest, and Nashua's housing stock, ranging from older downtown neighborhoods near the Millyard to wooded suburban subdivisions, gives them ample opportunity. They do not eat wood but excavate it, creating smooth-sided galleries inside damp or moisture-damaged wood. A reliable early sign is large black ants, up to half an inch long, appearing indoors in spring from a consistent location. Carpenter ant damage accumulates slowly, but ignored over years a colony can hollow out structural wood around a leaking window, a wet sill plate, or a poorly flashed roof edge. Eastern subterranean termites are a more serious finding in Nashua. They are at the northern edge of their range in southern NH, but Nashua is within the confirmed zone. Unlike carpenter ants, termites consume wood and can cause structural damage that is not visible until significant harm is done. A professional termite inspection is appropriate for any Nashua home with crawl spaces, wood-to-soil contact, or a history of moisture issues. Mice enter homes in September and October in Nashua, driven by New Hampshire's cold winters. Sealing foundation gaps and utility penetrations before the fall push is the most cost-effective defense.",
      },
    ],
    prevention: [
      "Treat yard edges and wooded borders with professional tick spray in spring and again in fall to protect Hillsborough County properties from deer tick pressure.",
      "Seal foundation gaps, utility penetrations, and door sill gaps in August or early September before the fall mouse push into Nashua homes.",
      "Inspect wood around windows, roof lines, and decks annually for moisture damage that attracts carpenter ants, particularly on older Nashua homes near the Merrimack.",
      "Schedule a termite inspection if your Nashua home has a crawl space, wood sill plates near grade, or is within a few miles of the Massachusetts border.",
    ],
    costNote:
      "Nashua pest service pricing is in line with southern NH and northern Massachusetts rates. Tick yard programs are spring and fall treatments and can be bundled with mosquito barrier service. Carpenter ant treatment is quoted after inspection and colony assessment. Mouse exclusion programs are the most cost-effective when done before the fall surge. Termite inspections are free; termite treatment is annual.",
    faqs: [
      {
        question: "How serious is the tick risk in Nashua, NH?",
        answer:
          "Significant and growing. Hillsborough County is tracked by NH DHHS for Lyme disease cases, and case numbers have increased alongside deer tick range expansion in southern NH. Nashua's wooded suburban neighborhoods, particularly those near the Nashua River Rail Trail and the Merrimack River corridor, have genuine tick habitat. Nymphal ticks active from May through July are the highest-risk stage. Professional perimeter treatment in spring and fall, combined with personal tick checks after outdoor time, is the recommended approach.",
      },
      {
        question: "Do termites actually reach Nashua, NH?",
        answer:
          "Yes. Eastern subterranean termites are confirmed in southern New Hampshire, and Nashua is within their active range. They are at the northern edge of their territory, so risk is lower than in Massachusetts, but it is not zero. Homes with crawl spaces, wood-to-soil contact, or moisture history are the most vulnerable. A professional termite inspection is appropriate for Nashua homes built before the mid-1990s, particularly those in the southern parts of the city near the MA border.",
      },
      {
        question: "When do carpenter ants become a problem in Nashua homes?",
        answer:
          "Spring is when they become visible, but the colony was there through winter. Carpenter ants overwinter in their nests and emerge as temperatures rise. Finding large black ants indoors in March or April typically means a colony is established inside the structure in moisture-damaged wood. The appearance of ants in a consistent location, combined with coarse sawdust near wood features, is the clearest signal. Treatment should address the colony and the moisture source that attracted it.",
      },
      {
        question: "What is the best time to deal with mice in Nashua?",
        answer:
          "Before they arrive. September is the key month. New Hampshire winters are cold enough that house mice actively seek heated shelter in fall, and Nashua homes with foundation gaps or worn door sills will see the fall push. Completing exterior exclusion work in August means the entry points are sealed before mice are motivated to find them. Dealing with an established population in November is more labor-intensive and expensive than exclusion in fall.",
      },
      {
        question: "Is EEE mosquito risk a real concern in Hillsborough County?",
        answer:
          "EEE has been detected in NH mosquito populations, and Hillsborough County has been included in NH DHHS risk advisories in wet years. The Merrimack River floodplain and wetland areas around Nashua sustain the mosquito populations that carry EEE. While EEE transmission to humans is relatively rare, the disease is severe, and NH DHHS issues evening outdoor advisories when positive pools are detected. Mosquito barrier treatment and eliminating standing water are the practical steps for Nashua homeowners.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Concord", slug: "concord-nh" },
      { name: "Dover", slug: "dover-nh" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Nashua, NH | Ticks, Carpenter Ants & Termites",
    metaDescription:
      "Nashua pest control for deer ticks, carpenter ants, termites, mice and mosquitoes. Hillsborough County southern NH specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "concord-nh",
    name: "Concord",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~44,000",
    county: "Merrimack County",
    climate: "cold-humid",
    climateDriver:
      "Concord sits in central New Hampshire in the Merrimack River valley. The cold-humid continental New England climate means genuine winters with persistent snow cover and cold temperatures that suppress outdoor pests for months. The Merrimack River corridor and the surrounding mixed hardwood and conifer forests sustain deer tick populations that have expanded into central NH in recent years. Concord's position as the state capital means it has a mix of older government buildings, historic residential neighborhoods, and suburban development that creates a varied pest habitat.",
    topPests: [
      "Deer Ticks",
      "Carpenter Ants",
      "Mice",
      "Mosquitoes",
      "Yellow Jackets",
    ],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active when temperatures are above freezing, peak risk May through October",
        note: "NH DHHS tracks Lyme disease by county and Merrimack County sees significant annual case numbers. Deer tick populations have expanded into central NH over the past decade, and UNH Cooperative Extension documents their presence in wooded areas throughout Merrimack County. Concord's wooded neighborhoods and the Merrimack River riparian corridor are priority tick habitat.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, most visible in spring",
        note: "Carpenter ants are the dominant structural pest complaint statewide according to UNH Extension. Concord's older housing stock, including historic homes near the State House and the residential neighborhoods along the Merrimack, provides ample moisture-damaged wood for carpenter ant nesting.",
      },
      {
        name: "Mice",
        serviceSlug: "rodent-control",
        activeSeason: "Year-round indoors, surge September through November",
        note: "Cold central NH winters drive mice firmly into heated structures. Concord's older state government buildings and residential homes have more entry points than newer construction, and the fall push is reliable and fast once temperatures drop.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Late May through September",
        note: "The Merrimack River corridor in Concord sustains summer mosquito populations. EEE cases have occurred in nearby NH communities, and the river floodplain and adjacent wetlands provide breeding habitat that supports meaningful mosquito pressure in wet summers.",
      },
      {
        name: "Yellow jackets",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets are active in Concord's wooded and suburban settings, nesting in ground colonies and in wall voids of older structures. Colonies peak in late summer and workers become highly aggressive in August and September, making late-season nest encounters particularly hazardous.",
      },
    ],
    localHook:
      "NH DHHS publishes annual Lyme disease surveillance data by county, and Merrimack County shows consistent case reporting each year. Deer ticks have expanded their range into central NH over the past decade, and Concord residents with wooded yards or access to the Merrimack River trail system face genuine tick exposure from spring through late fall. The city's older housing stock, much of it built before modern pest barriers, also makes carpenter ants and winter mice a recurring concern.",
    intro:
      "Pest control in Concord reflects its position as a central New Hampshire city with both older urban character and wooded suburban surroundings. Deer ticks are the top health concern as their range continues to expand into Merrimack County. Carpenter ants are the consistent structural pest in Concord's older homes and government buildings. Cold winters bring reliable mouse pressure into older structures from September onward. The Merrimack River corridor sustains summer mosquitoes, and yellow jackets are a predictable late-summer hazard in wooded and suburban settings. Planning ahead for each pest season keeps Concord homeowners and building managers ahead of the problems.",
    sections: [
      {
        heading: "Lyme Disease and Tick Risk in Merrimack County",
        body: "Deer ticks were once considered primarily a coastal or southern New England concern, but their range has expanded steadily northward and into central NH over the past two decades. NH DHHS annual Lyme disease surveillance data shows Merrimack County with consistent and significant case reporting each year. Concord's wooded neighborhoods, the Merrimack River corridor, and the network of forested parks and trails around the city provide habitat that supports the deer and white-footed mouse populations that ticks depend on. The key risk period in Concord is late April through July, when nymphal ticks, which are the size of a sesame seed and the stage most likely to transmit Lyme disease, are active. Adult ticks are easier to spot but present a second risk window in fall. Practical prevention for Concord residents and property owners begins with habitat management: removing leaf litter from yard edges in spring, keeping grass mowed, and maintaining a buffer of mulch or gravel between the lawn and any wooded or brushy area. Professional tick perimeter treatment in spring and fall significantly reduces tick encounters on the property. When spending time in wooded or brushy areas, wearing repellent and performing tick checks when returning indoors are the most effective personal defenses.",
      },
      {
        heading: "Carpenter Ants, Mice, and Seasonal Insects in Concord",
        body: "Carpenter ants are the dominant structural pest concern in Concord and throughout New Hampshire. UNH Extension identifies them as the most common wood-destroying pest statewide, and Concord's housing stock, which includes many homes built in the 19th and early 20th century as well as older state government buildings, provides the moisture-affected wood they prefer. The classic discovery scenario is large black ants appearing in the kitchen or bathroom in spring, emerging from a colony that has been in the wall or subflooring through winter. Ignoring carpenter ants once they are established inside the structure leads to progressive structural damage over time as the colony expands. Addressing any moisture sources around the home, particularly at windows, roof lines, and plumbing penetrations, makes the building less attractive. Mice are a reliable fall and winter pest in Concord. The city's older housing has more gaps and settling than newer construction, and New Hampshire winters are cold enough that mice move into heated buildings fast once temperatures drop in September and October. Sealing exterior gaps before September is the most cost-effective strategy. Yellow jackets in wooded and suburban settings around Concord peak in August and September, when colonies are at maximum size and workers are most defensive. Ground nest treatment in late June or early July, before colonies mature, is safer and more effective than late-season removal.",
      },
    ],
    prevention: [
      "Treat the yard perimeter with professional tick spray in spring and fall to reduce deer tick exposure in Merrimack County's expanding tick zone.",
      "Inspect older Concord homes for moisture damage around windows, plumbing, and roof lines annually to remove carpenter ant nesting conditions.",
      "Seal foundation gaps, utility entries, and door sills before September to prevent the fall mouse push into older Concord structures.",
      "Treat yellow jacket ground nests in late June when colonies are still small, before the dangerous late-summer peak size.",
    ],
    costNote:
      "Concord pest service is priced in line with central New Hampshire rates. Tick yard programs are spring and fall, often combined with summer mosquito barrier service. Carpenter ant programs include moisture assessment and colony treatment. Mouse programs combine exterior exclusion with interior trapping. Yellow jacket nest treatment is per nest and most cost-effective in early summer.",
    faqs: [
      {
        question: "Is Lyme disease risk increasing in the Concord, NH area?",
        answer:
          "Yes. NH DHHS surveillance data shows Merrimack County with consistent and growing annual Lyme disease case counts as deer ticks expand their range into central NH. Concord residents with wooded yards, proximity to the Merrimack River, or regular use of wooded trails face genuine tick risk from late April through November. The nymphal tick stage, active in May and June, is the highest transmission risk because the ticks are tiny and easy to miss. Annual yard treatment and personal tick checks are the practical defenses.",
      },
      {
        question: "Do the older state buildings in Concord have more pest problems?",
        answer:
          "Older buildings of any type, including Concord's state government buildings and historic residential structures, have more pest entry points and more moisture-affected wood than newer construction. Carpenter ants are common in older wood-frame structures with aging sill plates, wooden window frames, and older roofing. Mice also find more entry points in older buildings where foundations have settled and utility penetrations have not been resealed. Preventive inspection and sealing programs are especially valuable for older Concord properties.",
      },
      {
        question: "When do mice become a problem in Concord homes?",
        answer:
          "September and October are the primary entry months. New Hampshire winters drop cold fast, and house mice respond by moving into heated structures before the worst cold arrives. Concord's older housing stock has the gaps and settling at foundations, door sills, and utility entries that give mice ready access. The most effective approach is exterior exclusion work in August, before mice are motivated to find the gaps. Waiting until November to deal with an established population costs more in time and treatment.",
      },
      {
        question: "Are yellow jackets a serious problem in Concord neighborhoods?",
        answer:
          "Yellow jackets are a predictable summer and fall pest in Concord's wooded and suburban neighborhoods. They build ground nests in lawns and gardens and wall void nests in older structures, both of which are common in Concord. Colonies peak in August and September when workers are most aggressive. The most common sting scenarios are disturbing a ground nest during mowing or fall garden cleanup. Treating ground nests in late June or July, before colonies reach maximum size, is both safer and more effective than fall removal.",
      },
      {
        question: "How do I know if I have carpenter ants or termites in my Concord home?",
        answer:
          "Both can cause structural wood damage, but they look and behave differently. Carpenter ants are large, black, and visible: you will see the ants themselves. They leave coarse sawdust called frass near infestation sites. Termites are rarely seen because they stay inside wood and soil. Termite damage often looks like a honeycomb pattern inside the wood. In Concord and central NH, carpenter ants are far more common than termites, which are at or near their northern range limit. A professional inspection distinguishes the two with certainty.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Nashua", slug: "nashua" },
      { name: "Rochester", slug: "rochester-nh" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Concord, NH | Ticks, Carpenter Ants & Mice",
    metaDescription:
      "Concord NH pest control for deer ticks, carpenter ants, mice, mosquitoes and wasps. Merrimack County state capital specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "dover-nh",
    name: "Dover",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~32,000",
    county: "Strafford County",
    climate: "cold-humid",
    climateDriver:
      "Dover sits in the seacoast region of New Hampshire in Strafford County, where proximity to the Atlantic moderates temperatures slightly compared to inland NH. Winters are cold but slightly less severe than the central part of the state. The nearby Great Bay estuary, a significant tidal wetland system, and the Cochecho and Salmon Falls rivers create substantial wetland and riparian habitat. This coastal seacoast character means somewhat warmer conditions that favor deer tick activity and give eastern subterranean termites a foothold at the northern edge of their range.",
    topPests: [
      "Deer Ticks",
      "Carpenter Ants",
      "Mice",
      "Mosquitoes",
      "Eastern Subterranean Termites",
    ],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active whenever temperatures are above freezing, peak risk April through November in the seacoast region",
        note: "NH DHHS Lyme disease surveillance shows Strafford County with consistent tick-borne illness reporting. The Great Bay estuary and surrounding wildlife corridors support high densities of deer and white-footed mice that maintain tick populations in Dover's wooded and brushy areas.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, spring emergence most visible",
        note: "Carpenter ants are common in Dover's older mill buildings and wooded residential areas. The coastal humidity and older wood-frame construction in Dover's historic neighborhoods create favorable conditions for carpenter ant nesting in moisture-affected wood.",
      },
      {
        name: "Mice",
        serviceSlug: "rodent-control",
        activeSeason: "Year-round indoors, fall push September through November",
        note: "Cold NH winters bring consistent mouse pressure into Dover homes. Dover's older mill-era and historic residential buildings have more structural entry points than newer construction, and wooded neighborhoods along the Cochecho River see mouse activity from surrounding forest and riparian habitat.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Late May through September",
        note: "The Great Bay estuary and surrounding salt marshes create significant mosquito breeding habitat in the Dover area. Eastern equine encephalitis mosquito vectors are present in the seacoast region, and NH DHHS has issued EEE advisories for Strafford County in years with positive mosquito pool detections.",
      },
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Spring swarm season, active underground year-round",
        note: "Eastern subterranean termites are at the northern edge of their range in southern NH, and Dover's seacoast location and slightly warmer winters compared to inland NH put it within the confirmed zone. Older buildings with crawl spaces or wood-to-soil contact are the highest-risk properties in Dover.",
      },
    ],
    localHook:
      "Strafford County's Lyme disease case numbers, tracked annually by NH DHHS, show consistent reporting year over year. Dover's location in the seacoast region, with the Great Bay estuary providing wildlife habitat that sustains tick host populations, places the city in a genuine risk zone. The same proximity to Great Bay marshes creates mosquito habitat and EEE risk in wet summers, making Dover's outdoor pest calendar more active than many NH cities of similar size.",
    intro:
      "Pest control in Dover reflects the seacoast region of New Hampshire, where Great Bay's wetlands amplify both tick and mosquito pressure. Strafford County sees consistent Lyme disease case reporting, and Dover's wooded neighborhoods near the Cochecho River and the Great Bay corridor are genuine tick habitat. Carpenter ants are the structural pest to watch in Dover's older mill-era buildings and wood-frame homes. Eastern subterranean termites, confirmed in southern NH, are at their northern range limit here but present enough to warrant inspection for older properties. Mice are a fall and winter staple in the city's older housing stock.",
    sections: [
      {
        heading: "Tick-Borne Disease in Strafford County",
        body: "Deer ticks in the seacoast region of New Hampshire are well established, and Strafford County shows up consistently in NH DHHS annual Lyme disease surveillance with meaningful case numbers. Dover's proximity to the Great Bay National Estuarine Research Reserve, one of the largest tidal estuaries in New England, is significant for tick risk. The reserve and the surrounding marshes, forests, and riparian corridors support large populations of white-tailed deer and white-footed mice, the primary hosts for deer tick larvae and nymphs. These wildlife populations keep tick numbers high in the wooded and brushy areas surrounding Dover neighborhoods. The seacoast's slightly milder winters compared to central NH also mean that tick activity can start earlier in spring and extend later into fall than in inland parts of the state. Dover homeowners with yards backing to wooded or shrubby areas are the highest-risk group. Professional tick perimeter treatment in spring and fall, combined with habitat management at the yard edge (removing leaf litter, trimming brush, keeping the lawn mowed near the wooded margin), is the most effective residential defense. Personal protection, including repellent and post-outdoor tick checks, remains important for anyone spending time in wooded or trail areas of Strafford County.",
      },
      {
        heading: "Carpenter Ants, Termites, and Coastal NH Pest Pressure",
        body: "Carpenter ants are the dominant wood pest concern in Dover and throughout the NH seacoast region. Dover's history as a mill city means a significant portion of its housing stock is old wood-frame construction, and the coastal humidity from the Great Bay area creates the moisture conditions that carpenter ants prefer for nesting. They excavate galleries in soft, moist, or partially rotted wood, and finding large black ants appearing indoors in spring from a consistent location is the most reliable early indicator of an established colony. Untreated carpenter ant colonies expand over years and cause progressive structural damage in wood around moisture-affected areas: windows, roof lines, decks, and wood sill plates. Eastern subterranean termites are a distinct concern in Dover that does not apply to cities farther north in NH. Dover's position in the seacoast region, at the northern limit of subterranean termite territory, means some properties here carry termite risk. Older homes with crawl spaces, soil-to-wood contact, or a history of moisture problems should have a professional termite inspection. Mosquitoes from the Great Bay marshes add EEE risk to the summer pest calendar, a concern NH DHHS actively monitors in the seacoast region. Mice in fall and winter are a predictable problem in Dover's older housing.",
      },
    ],
    prevention: [
      "Apply professional tick perimeter treatment in spring and fall for Dover properties near the Great Bay corridor or any wooded or brushy yard edge.",
      "Have older Dover homes with crawl spaces or wood sill plates near grade professionally inspected for eastern subterranean termites.",
      "Seal foundation gaps, utility penetrations, and door sills before September to intercept the fall mouse push in Dover's older housing.",
      "Remove standing water and treat yard areas for mosquitoes from late May onward, particularly for properties near Great Bay marshes or Cochecho River wetlands.",
    ],
    costNote:
      "Dover pest service pricing is consistent with the NH seacoast market. Tick yard programs run in spring and fall and can be bundled with summer mosquito barrier service. Termite inspections are free. Carpenter ant treatment is quoted after inspection. Mouse exclusion is most cost-effective when done before the fall push in September.",
    faqs: [
      {
        question: "Is Lyme disease risk significant in Dover, NH?",
        answer:
          "Yes. Strafford County shows up consistently in NH DHHS annual Lyme disease surveillance data with meaningful case numbers. Dover's location near the Great Bay estuary means the wildlife corridors that support deer tick populations are close to residential neighborhoods. Tick risk is real for homeowners with wooded yards, residents who use the rail trail and estuary trail systems, and anyone working in landscaping or outdoor maintenance in the Dover area.",
      },
      {
        question: "Do termites actually reach Dover, NH?",
        answer:
          "Eastern subterranean termites are at the northern edge of their range in southern NH, and Dover is within the confirmed territory. The seacoast region's slightly milder winters compared to inland NH make it more hospitable for termites. Older Dover homes with crawl spaces, soil-to-wood contact, or moisture history are the most vulnerable. A professional termite inspection is appropriate for any older Dover property, particularly those in the southern parts of the city near the MA border.",
      },
      {
        question: "How does Great Bay affect mosquito and EEE risk in Dover?",
        answer:
          "The Great Bay estuary and surrounding salt marshes create extensive mosquito breeding habitat within and around Dover. The seacoast region mosquito populations include the species that carry Eastern equine encephalitis, and NH DHHS monitors for EEE in this area each summer. Positive mosquito pool detections in Strafford County trigger public health advisories about evening outdoor activity. Eliminating standing water on your property and using professional mosquito barrier treatment reduces local exposure.",
      },
      {
        question: "Why are carpenter ants so common in Dover's older buildings?",
        answer:
          "Dover's history as a 19th-century mill city left a housing stock of older wood-frame buildings, and the coastal humidity from the Great Bay area accelerates wood moisture problems in aging structures. Carpenter ants prefer moist or partially rotted wood for nesting, and older Dover homes with aging window frames, roof lines, and sill plates provide ideal conditions. Finding large black ants indoors in spring is the typical first sign. Treatment targets the colony and the moisture source that sustains it.",
      },
      {
        question: "When should Dover homeowners worry about mice?",
        answer:
          "September is when to act, not when mice are already inside. New Hampshire winters are cold enough that house mice actively seek heated shelter as fall temperatures drop, and Dover's older housing has plenty of entry points. Completing exterior exclusion work in August seals those entries before mice are motivated to find them. Dover properties near wooded neighborhoods along the Cochecho River or brushy land also have greater exposure from surrounding rodent populations in natural areas.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Rochester", slug: "rochester-nh" },
      { name: "Concord", slug: "concord-nh" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Dover, NH | Ticks, Carpenter Ants & Mosquitoes",
    metaDescription:
      "Dover NH pest control for deer ticks, carpenter ants, mice, mosquitoes and termites. Strafford County seacoast region specialists. Call 1-800-PEST-USA.",
  },
  {
    slug: "rochester-nh",
    name: "Rochester",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~32,000",
    county: "Strafford County",
    climate: "cold-humid",
    climateDriver:
      "Rochester is the largest city in Strafford County by area, located in central-southern New Hampshire along the Cochecho River. The cold-humid continental climate delivers genuine winters and warm humid summers. The Cochecho River watershed and the city's substantial wooded and agricultural surroundings create a pest landscape that includes strong deer tick habitat, nesting carpenter ants in older residential structures, and significant yellow jacket and hornet activity in summer. Rochester's large geographic footprint means wooded neighborhoods exist alongside more urban areas, with pest pressure varying by location.",
    topPests: [
      "Deer Ticks",
      "Carpenter Ants",
      "Mice",
      "Yellow Jackets",
      "Mosquitoes",
    ],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active whenever temperatures are above freezing, peak risk May through October",
        note: "Strafford County shows consistent annual Lyme disease case reporting in NH DHHS surveillance data. The Cochecho River corridor and the wooded areas on Rochester's extensive land area provide strong tick habitat, and Rochester homeowners in wooded neighborhoods face real deer tick exposure from spring through late fall.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, spring indoor sightings most common",
        note: "UNH Extension confirms carpenter ants as one of the top pest calls in NH year after year. Rochester's older residential neighborhoods and the humidity from the Cochecho River corridor provide the moisture conditions that support carpenter ant infestations in wood-frame homes.",
      },
      {
        name: "Mice",
        serviceSlug: "rodent-control",
        activeSeason: "Year-round indoors, peak fall entry September through November",
        note: "Rochester's surrounding agricultural and wooded land supports large mouse populations that push into homes as temperatures drop in fall. The city's older residential areas have more structural entry points, and proximity to farm fields and forests provides a steady source of mice throughout fall and winter.",
      },
      {
        name: "Yellow jackets",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets and bald-faced hornets are common summer pests in Rochester's wooded suburban settings. Ground nests in lawns and wall void nests in older structures are both typical. Colonies reach dangerous size in August and September, making late-season nest discovery a sting risk.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Late May through September",
        note: "The Cochecho River floodplain and associated wetlands in Rochester create mosquito breeding habitat that can produce meaningful summer pressure in wet years. NH DHHS monitors for EEE in Strafford County, and the river corridor sustains the mosquito populations involved.",
      },
    ],
    localHook:
      "Strafford County's annual Lyme disease case data, tracked by NH DHHS, shows consistent reporting that reflects the established deer tick populations in the region. Rochester's Cochecho River watershed and its large wooded land area mean tick habitat is not limited to a few neighborhoods: it is widespread across the city. Yellow jackets peak every late summer in Rochester's wooded suburban settings, and the fall mouse push from surrounding agricultural and forest land is one of the most predictable pest events of the year.",
    intro:
      "Pest control in Rochester means managing a broad outdoor pest calendar alongside the year-round indoor pest concerns that come with older NH housing. Deer ticks are the top health concern, with Strafford County seeing consistent Lyme disease reporting. Carpenter ants are the structural pest of record in Rochester's older residential neighborhoods. Mice from the surrounding agricultural land and forests are reliable fall arrivals. Yellow jackets and bald-faced hornets peak in late summer in the city's wooded suburban areas. Rochester's large geographic footprint means pest pressure varies by neighborhood, but tick management and fall mouse prevention are essentially universal.",
    sections: [
      {
        heading: "Deer Ticks in Rochester and Strafford County",
        body: "Strafford County sits in the southern NH tier where deer tick expansion has been well documented over the past two decades. NH DHHS annual Lyme disease surveillance consistently shows Strafford County with significant case counts, and Rochester's large wooded land area means that tick habitat is distributed widely across the city rather than concentrated in a few spots. The Cochecho River corridor is a particular area of concern: riparian zones sustain the deer and small mammal populations that ticks depend on, and wooded neighborhoods near the river see higher tick density than open suburban areas. Rochester also borders agricultural land and forest on its eastern and northern edges, and these wildlife corridors bring deer and white-footed mice, the primary tick hosts, close to residential neighborhoods. The practical approach for Rochester homeowners is professional perimeter tick treatment in spring and fall, habitat management at the yard edge (leaf litter removal, trimmed brush, mowed lawn margins near wooded areas), and tick checks after any time in wooded or brushy areas. The nymphal tick stage, active from late April through July, is the highest transmission risk because these ticks are tiny and easy to miss despite carrying Lyme disease, anaplasmosis, and babesiosis at high rates in this region.",
      },
      {
        heading: "Carpenter Ants, Yellow Jackets, and Winter Mice in Rochester",
        body: "Carpenter ants are New Hampshire's dominant structural pest, and UNH Extension's pest outreach consistently identifies them as the most common structural pest call statewide. Rochester's older residential neighborhoods, particularly the homes near the downtown core and the older mill-era construction along the Cochecho River corridor, have the moisture conditions that carpenter ants prefer for nesting. They colonize wood that has been softened by moisture, and finding large black ants appearing indoors in spring from a consistent location is the typical first indicator. Left unaddressed, a carpenter ant colony expands progressively over years and can cause significant structural damage to wood around aging windows, roof lines, and poorly maintained decks. Yellow jackets make their presence known in Rochester each summer, building ground nests in lawns and gardens and wall void nests in older structures. They become highly aggressive in August and September as colonies reach maximum size, and late-summer nest encounters during mowing or outdoor maintenance are the most common sting scenario. Treating ground nests in late June or July, when colonies are still small, is both safer and more cost-effective than fall removal. Mice entering Rochester homes in fall is one of the most predictable seasonal events in NH pest control. The surrounding agricultural land and forests provide a large reservoir of mice that push toward heated structures once temperatures drop in September and October.",
      },
    ],
    prevention: [
      "Apply professional tick perimeter treatment each spring and fall for Rochester properties near the Cochecho River corridor or wooded neighborhood edges.",
      "Inspect older Rochester homes for moisture damage at windows, roof lines, and sill plates annually to remove carpenter ant nesting conditions.",
      "Seal foundation gaps and utility entries before September to prevent the fall mouse push from Rochester's surrounding agricultural and wooded land.",
      "Treat yellow jacket ground nests in late June when colonies are still manageable, before they reach the dangerous August and September size peak.",
    ],
    costNote:
      "Rochester pest service pricing is in line with Strafford County and broader seacoast NH rates. Tick yard programs run in spring and fall. Carpenter ant programs are quoted after inspection and include moisture assessment. Mouse exclusion programs are most cost-effective when completed before the fall surge. Yellow jacket nest treatment is per nest and most economical in early summer.",
    faqs: [
      {
        question: "How serious is the tick risk in Rochester, NH?",
        answer:
          "Significant. Strafford County shows consistent annual Lyme disease case reporting in NH DHHS surveillance data, and Rochester's large wooded land area and Cochecho River corridor mean tick habitat is widespread across the city. Homeowners in Rochester's wooded neighborhoods, particularly those near the river or bordering agricultural and forested land, face genuine deer tick exposure from spring through late fall. Annual perimeter treatment and regular tick checks are the practical response.",
      },
      {
        question: "Are carpenter ants a structural risk in Rochester homes?",
        answer:
          "Yes, over time. Carpenter ants do not eat wood but excavate it, and a colony that establishes in moisture-damaged wood in a Rochester home will expand progressively if untreated. The older residential housing in Rochester, particularly near the downtown and along the Cochecho River corridor, has more aging wood at risk from moisture exposure. Finding large black ants indoors in spring, especially from a consistent location, is the clearest early sign. Professional treatment targets the colony and the moisture condition that drew them in.",
      },
      {
        question: "Why do mice come into Rochester homes every fall?",
        answer:
          "New Hampshire winters are cold enough that house mice are strongly motivated to find heated shelter. Rochester's location surrounded by agricultural land and forest provides a large mouse population close to residential areas, and older homes have the foundation gaps and settling that give mice ready access. The fall push is predictable: it starts in September and accelerates in October. Sealing exterior entry points before September is the most effective and least expensive approach.",
      },
      {
        question: "When do yellow jackets become dangerous in Rochester?",
        answer:
          "August and September are the most hazardous months. Yellow jacket colonies grow through summer and reach their maximum population in late August, when workers defending a large colony are highly aggressive. Ground nests in Rochester's lawns and wall void nests in older structures are the two most common scenarios. Disturbing a ground nest during fall yard cleanup is a frequent sting incident. Treating ground nests in late June or July, when colonies are small, is the safest and most effective approach.",
      },
      {
        question: "Does Rochester, NH have mosquito problems beyond normal summer annoyance?",
        answer:
          "NH DHHS monitors the seacoast and southern NH region for Eastern equine encephalitis in mosquito populations, and Strafford County is within the monitored zone. The Cochecho River floodplain and associated wetlands support the mosquito populations involved. EEE is relatively rare but severe, and NH DHHS issues evening outdoor advisories when positive pools are detected in Strafford County. Eliminating standing water and using barrier treatment in yard areas near water reduces exposure.",
      },
    ],
    author: "Sandra Whitfield, IPM & Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Dover", slug: "dover-nh" },
      { name: "Concord", slug: "concord-nh" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Rochester, NH | Ticks, Carpenter Ants & Mice",
    metaDescription:
      "Rochester NH pest control for deer ticks, carpenter ants, mice, wasps and mosquitoes. Strafford County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "keene",
    name: "Keene",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~23,000",
    county: "Cheshire County",
    climate: "cold-humid",
    climateDriver:
      "Keene sits in the Ashuelot River valley in Cheshire County, southwestern New Hampshire, where the forested hills of the Monadnock region create a cold-humid climate with long winters and a moderate summer pest season. NH DHHS tracks deer tick activity statewide and places southwestern NH counties including Cheshire in the active tick risk zone for Lyme disease. Keene State College brings a student population that creates cockroach and bed bug pressure in the campus-adjacent rental housing market, while the surrounding forest sustains mouse and carpenter ant populations close to residential areas.",
    topPests: [
      "House Mice",
      "Deer Ticks",
      "Carpenter Ants",
      "German Cockroaches",
      "Stink Bugs",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "rodent-control",
        activeSeason: "Year-round indoors, fall push September through November",
        note: "House mice are the dominant structural pest in Keene, with a predictable fall push starting in September as New Hampshire temperatures drop. Keene's older downtown and campus-area housing, combined with the forested Monadnock region surrounding the city, creates both the structural entry points and the source populations that sustain year-round mouse pressure. Keene State College student housing adds multi-unit transmission pathways.",
      },
      {
        name: "Deer ticks",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November, nymphal peak May through June",
        note: "NH DHHS monitors deer tick activity statewide and places Cheshire County in the active tick risk zone. The forested hills of the Monadnock region surrounding Keene and the Ashuelot River corridor provide established deer tick habitat close to the city. New Hampshire's deer tick population has expanded southward into Cheshire County in recent decades.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, spring indoor activity signals established colony",
        note: "Carpenter ants are common in Keene's older wood-frame housing and in the mature trees throughout residential neighborhoods. New Hampshire's cold-humid climate creates moisture accumulation in structural wood that allows carpenter ant infestations to develop. Older properties near the forested edges of the Monadnock region carry the highest risk.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are established in Keene's campus-area student housing and older downtown commercial buildings. Keene State College creates student housing rental density where cockroach spread between units is common. Food service establishments in the downtown corridor are the commercial category most affected.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall aggregation September through November",
        note: "Stink bugs are a consistent fall nuisance in Keene, aggregating on building surfaces in September and pushing inside through exterior gaps to overwinter. The Monadnock region's agricultural edges and apple orchard landscape near Keene sustain stink bug populations. Sealing exterior gaps in August is the most effective prevention.",
      },
    ],
    localHook:
      "Keene's position at the edge of the Monadnock region, combined with Keene State College's student population, creates pest pressure where forest-edge mice and ticks meet campus cockroach and bed bug introduction pathways in a single small city.",
    intro:
      "Pest control in Keene manages the intersection of two pest environments: the forested Monadnock region with its deer ticks, mice, and carpenter ant pressure, and the Keene State College campus area with its student housing cockroach and bed bug risks. NH DHHS places Cheshire County in the active deer tick risk zone, and the surrounding forest brings tick habitat close to residential areas throughout the city. House mice push into Keene's older homes starting in September, motivated by New Hampshire's cold winters. Stink bugs aggregate on Keene buildings each fall. And in the rental housing market around the campus, cockroaches and bed bugs find the introduction pathways and spread conditions that student housing creates. These require different strategies, but both are manageable with professional help.",
    sections: [
      {
        heading: "Cheshire County deer ticks and the Monadnock region pest environment",
        body: "Keene's surrounding landscape is the forested Monadnock region, with Mount Monadnock and the surrounding hills creating the habitat that sustains deer tick populations close to the city. NH DHHS has expanded its deer tick risk zone into southwestern New Hampshire counties including Cheshire as the state's tick population has moved northward and westward over the past two decades. The Ashuelot River corridor running through Keene brings riparian wildlife habitat into the city's residential landscape.\n\nFor Keene residents, the tick season runs from March through November, with the nymphal stage in May and June representing the highest transmission risk. Properties with wooded yard borders or backing onto the green spaces and parks throughout Keene face consistent tick exposure. Professional perimeter treatment in April, before the nymphal season begins, is the most effective prevention approach for residential properties in Cheshire County.",
      },
      {
        heading: "Keene State College campus area: cockroaches, bed bugs, and student housing pressures",
        body: "Keene State College's residential population creates the high-turnover rental housing environment where cockroaches and bed bugs introduce and spread most readily. German cockroaches in student housing spread through shared kitchen infrastructure and the plumbing penetrations between units in older campus-area apartment buildings. Each new academic year brings a fresh cycle of tenant moves that can reintroduce cockroaches even after treatment.\n\nBed bugs follow the same introduction pattern. Student moves, secondhand furniture, and high-traffic shared living situations create multiple introduction events per building per year. Keene's older campus-area rental housing has the shared infrastructure and building density that allows bed bugs to spread between units efficiently. For property owners in the campus area, ongoing monitoring with interceptor devices and responsive treatment when evidence appears is the standard protocol.",
      },
    ],
    prevention: [
      "Apply deer tick perimeter treatment to wooded yard edges in Keene in April before the nymphal tick season begins in Cheshire County.",
      "Complete exterior mouse exclusion on older Keene properties in August, sealing foundation gaps, utility penetrations, and weatherstripping before the September push.",
      "For Keene State College campus-area rental properties, use bed bug interceptors under beds year-round and conduct professional inspections at tenant turnover.",
      "Seal exterior gaps on south-facing walls in August to limit stink bug entry, which is particularly heavy near the apple orchard and agricultural edges of the Monadnock region.",
    ],
    costNote:
      "Keene pest control programs start with a free inspection. Tick treatment, mouse exclusion, and cockroach or bed bug treatment in campus-area rental properties are priced based on property size and pest category. Multi-unit building programs are available.",
    faqs: [
      {
        question: "Are deer ticks a real concern in Keene?",
        answer:
          "Yes. NH DHHS has expanded its deer tick risk zone into Cheshire County as New Hampshire's tick population has moved northward and westward over recent decades. The Monadnock region's forested landscape surrounding Keene sustains deer tick populations close to the city. Properties with wooded yard borders and residents who use the trail networks and green spaces around Keene face real tick exposure from March through November.",
      },
      {
        question: "Why is cockroach risk higher near Keene State College?",
        answer:
          "Student housing creates the introduction and spread conditions cockroaches need. High tenant turnover at the start of each academic year, shared kitchen infrastructure in older apartment buildings, and the density of multi-unit buildings in the campus area all contribute. A cockroach problem in one campus-area unit is rarely limited to that unit. Shared drain stacks and plumbing penetrations between floors spread infestations through buildings quickly.",
      },
      {
        question: "When do mice push into Keene homes?",
        answer:
          "September is when house mice begin entering Keene homes in significant numbers. New Hampshire winters are cold enough to strongly motivate mice to seek heated shelter, and Keene's older housing stock provides the structural entry points they need. The forested Monadnock region surrounding the city sustains large mouse populations close to residential areas. Exterior exclusion work completed in August, before the fall push starts, is the most effective prevention.",
      },
      {
        question: "What makes stink bugs worse in Keene than in some other NH cities?",
        answer:
          "The apple orchards and agricultural land in the Monadnock region surrounding Keene sustain higher stink bug populations than purely forested or urban areas, because stink bugs are an orchard pest that thrives in the fruit-growing landscape. Keene properties near the agricultural edges of the region tend to see heavier fall aggregations than properties in the urban core. Sealing exterior gaps in August is the most effective prevention before they begin aggregating in September.",
      },
    ],
    author: "Sandra Whitfield, IPM & Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Nashua", slug: "nashua" },
      { name: "Concord", slug: "concord-nh" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Keene, NH | Mice, Ticks, Carpenter Ants & Cockroaches",
    metaDescription:
      "Keene pest control for house mice, deer ticks, carpenter ants, German cockroaches and stink bugs. Cheshire County Monadnock region specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "derry",
    name: "Derry",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~34,000",
    county: "Rockingham County",
    climate: "cold-humid",
    climateDriver:
      "Derry is a suburban town in Rockingham County, southeastern New Hampshire, with a residential character defined by wooded neighborhoods and the rural-suburban fringe typical of southern NH. NH DHHS reports Rockingham County as New Hampshire's highest Lyme disease risk county, making deer tick management a priority for Derry property owners. The forested wooded character of Derry's residential landscape, with mature trees throughout the neighborhoods and large wooded lot borders, creates persistent tick exposure at the suburban edge throughout the growing season.",
    topPests: [
      "House Mice",
      "Deer Ticks",
      "Carpenter Ants",
      "German Cockroaches",
      "Stink Bugs",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "rodent-control",
        activeSeason: "Year-round indoors, fall push September through November",
        note: "House mice push into Derry homes starting in September, driven by New Hampshire's cold winters. Derry's wooded suburban character provides large mouse source populations close to residential neighborhoods, and the older housing stock in many Derry neighborhoods has the structural gaps that mice exploit. Excluding mice before they enter in September is substantially more effective than reactive trapping after they are established inside.",
      },
      {
        name: "Deer ticks",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November, nymphal peak May through June",
        note: "NH DHHS reports Rockingham County as New Hampshire's highest-risk county for Lyme disease, and Derry's wooded suburban landscape reflects that designation. The mature trees, wooded lot borders, and brushy edges that define Derry neighborhoods create deer tick habitat throughout the residential landscape. Tick checks and professional yard treatment are standard practice for Derry property owners.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, spring indoor activity most visible",
        note: "Carpenter ants are common in Derry's older and newer wood-frame homes alike, where the moisture from New Hampshire's cold-humid climate and the abundant mature trees create harborage conditions. Derry's wooded character means carpenter ants have extensive outdoor nesting sites that can expand into structures. Spring indoor activity is the most common indicator of an established colony inside a Derry home.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches in Derry concentrate in multi-family housing and commercial food service environments rather than in the single-family suburban character that defines much of the town. Derry's commercial corridors and older apartment buildings are where cockroach issues are most common. Introduction through grocery deliveries and restaurant supply chains is the primary pathway in Derry's commercial sector.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall aggregation September through November",
        note: "Stink bugs are a consistent fall nuisance in Derry's suburban neighborhoods, aggregating on building surfaces in September and entering through exterior gaps to overwinter in wall voids and attic spaces. Derry's wooded suburban character and the agricultural edges of southern New Hampshire sustain stink bug populations. Sealing exterior gaps in August limits entry.",
      },
    ],
    localHook:
      "Rockingham County carries the highest deer tick risk in New Hampshire according to NH DHHS, and Derry's wooded suburban residential character means tick exposure at yard borders is a genuine seasonal health concern for residents throughout the warm months.",
    intro:
      "Pest control in Derry starts with deer ticks. NH DHHS designates Rockingham County as New Hampshire's highest Lyme disease risk county, and Derry's wooded suburban landscape means tick exposure at yard borders is a real warm-season health concern for residents with outdoor exposure. House mice push into Derry homes starting in September when New Hampshire temperatures drop, exploiting the structural gaps in the town's older housing stock. Carpenter ants are common throughout the wooded neighborhoods. Stink bugs are a reliable fall nuisance. German cockroaches are present in multi-family and commercial contexts. Derry's pest profile is a reliable expression of southern New Hampshire suburban pest pressure, and it responds well to professional management that addresses the wooded suburban environment specifically.",
    sections: [
      {
        heading: "Rockingham County's Lyme disease designation and deer tick management in Derry",
        body: "New Hampshire DHHS tracks deer tick activity and Lyme disease incidence by county, and Rockingham County consistently registers as the state's highest-risk county. Derry sits in the middle of that high-risk designation. The town's defining character is wooded suburban residential: mature trees, large lot sizes with wooded borders, and the brushy edges between neighborhoods and undeveloped land that deer ticks need to survive and reproduce.\n\nFor Derry homeowners, tick exposure in the yard is not a remote forest concern; it is a lawn and garden edge concern that affects residents throughout the warm season from late March through November. Children playing near wooded borders and adults gardening in brushy areas are the two most common exposure scenarios. Professional perimeter treatment applied to the wooded lot borders in April, before the nymphal season peaks in May and June, provides the most effective protection through the primary risk period.",
      },
      {
        heading: "Mice, carpenter ants, and stink bugs in Derry's wooded neighborhoods",
        body: "Derry's wooded suburban character that creates tick exposure also sustains large populations of mice and carpenter ants close to residential structures. House mice push into Derry homes every September, motivated by New Hampshire winters that regularly drop below zero. The forested lot borders and the mature trees throughout the neighborhoods provide source populations within yards of most Derry homes. The older housing stock in established Derry neighborhoods has the foundation gaps and worn weatherstripping that give mice routine access.\n\nCarpenter ants follow the moisture in Derry's abundant mature trees and wooded lot features into structural wood, where they excavate galleries that cause progressive damage over years if untreated. Finding large black ants inside a Derry home in spring is the most reliable indicator of an established indoor colony. Stink bugs are the fall nuisance: they aggregate on south-facing walls in September and push inside through any unsealed exterior gap. Sealing those gaps in August addresses both stink bugs and mice simultaneously, making it the most efficient fall prevention investment for a Derry property.",
      },
    ],
    prevention: [
      "Apply tick perimeter treatment to wooded yard borders and brushy edges in Derry in April before nymphal tick season begins in Rockingham County, NH's highest-risk Lyme disease county.",
      "Complete exterior mouse exclusion on Derry properties in August, focusing on foundation sills, utility penetrations, and garage door weatherstripping before the September push.",
      "Seal south-facing exterior gaps in August to block both stink bug fall entry and mouse access simultaneously, since both exploit the same exterior penetration points.",
      "Monitor for carpenter ant activity in Derry's older wood-frame homes by checking for large black ants near moisture-prone areas in kitchens and bathrooms in spring.",
    ],
    costNote:
      "Derry pest control programs start with a free inspection. Tick perimeter treatment, mouse exclusion, and carpenter ant or stink bug treatment are priced based on property size and pest category.",
    faqs: [
      {
        question: "Is Derry really in New Hampshire's highest tick risk zone?",
        answer:
          "Yes. NH DHHS identifies Rockingham County as New Hampshire's highest-risk county for Lyme disease, and that designation applies directly to Derry. Derry's wooded suburban landscape, with its mature trees, large wooded lot borders, and brushy edges, provides excellent deer tick habitat throughout residential neighborhoods. Tick exposure in Derry is not a fringe concern limited to properties near forests; it is a year-round warm-season reality for most Derry households.",
      },
      {
        question: "When do mice become a problem in Derry?",
        answer:
          "September is when the fall push starts in Derry. New Hampshire winters strongly motivate house mice to seek heated shelter, and Derry's wooded suburban landscape sustains large mouse populations close to residential structures. Older homes in the established Derry neighborhoods have more structural entry points than newer construction. The most effective prevention is exterior exclusion work completed in August, before the push starts. Gaps as small as a dime are large enough for a mouse.",
      },
      {
        question: "Do carpenter ants cause real damage in Derry homes?",
        answer:
          "Over time, yes. Carpenter ants do not eat wood, but they excavate galleries in wood that is already softened by moisture, and a colony left untreated for several years causes progressive structural damage. Derry's wooded character means carpenter ants have abundant outdoor harborage that can expand into structures at any moisture entry point. Finding large black ants inside in spring, particularly near kitchens, bathrooms, or plumbing walls, is the sign that warrants a professional inspection.",
      },
      {
        question: "What can I do about stink bugs in my Derry home?",
        answer:
          "The most effective approach is preventing their entry in August, before they begin aggregating in September. Stink bugs enter through gaps around windows, siding, and utility penetrations. Sealing those gaps in August is the same work that prevents mouse entry, making it the most efficient fall prevention investment for a Derry property. If stink bugs are already inside, vacuum them up without crushing them, which releases the odor they are named for. They do not breed indoors and will leave naturally in spring.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Nashua", slug: "nashua" },
      { name: "Rochester", slug: "rochester-nh" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Derry, NH | Ticks, Mice, Carpenter Ants & Stink Bugs",
    metaDescription:
      "Derry pest control for house mice, deer ticks, carpenter ants, German cockroaches and stink bugs. Rockingham County NH highest Lyme disease risk county specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
