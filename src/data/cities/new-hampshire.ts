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
  {
    slug: "portsmouth-nh",
    name: "Portsmouth",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~22,000",
    county: "Rockingham County",
    climate: "cold-humid",
    climateDriver:
      "Portsmouth sits at the mouth of the Piscataqua River on the NH Seacoast, giving it a cold-humid maritime climate moderated by the Atlantic. The coastal setting sustains dense tick habitat in brushy shoreline areas and salt marsh edges. Rockingham County posts the highest Lyme disease case count of any New Hampshire county per NH DHHS surveillance data. The warm summers bring pest pressure from late spring through October, while the cold winters push rodents indoors and concentrate overwintering cluster flies in older downtown buildings.",
    topPests: ["Deer Ticks", "Brown-tail Moths", "Carpenter Ants", "German Cockroaches", "Mice"],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "tick-control",
        activeSeason: "March through November, peak May to July and October",
        note: "Rockingham County has the highest Lyme disease incidence in New Hampshire, and Portsmouth's coastal brushland and salt marsh edges are prime tick habitat. NH DHHS tick surveillance confirms established deer tick populations along the NH Seacoast.",
      },
      {
        name: "Brown-tail moth caterpillars",
        serviceSlug: "caterpillar-control",
        activeSeason: "Late May through July (caterpillar stage)",
        note: "The NH Division of Natural and Cultural Resources documents brown-tail moth presence on the NH Seacoast, including the Portsmouth area. The caterpillar hairs cause a poison-ivy-like rash and respiratory irritation in sensitive individuals, making outdoor work hazardous during peak season.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through October, satellite colonies active year-round indoors",
        note: "Portsmouth's older wood-frame homes and the moisture influence of the Piscataqua River estuary create conditions that carpenter ants favor. UNH Cooperative Extension identifies carpenter ants as a primary structural pest concern throughout the Seacoast region.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "Portsmouth's density of restaurants, food service establishments, and multi-unit housing in the historic downtown creates German cockroach pressure. German cockroaches are the dominant cockroach species in New England urban settings and require professional treatment to eliminate.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge September through November",
        note: "Portsmouth's older building stock, including colonial-era downtown structures, has more structural entry points than newer construction. Cold coastal winters provide strong motivation for mice to seek heated spaces, and gaps around historic masonry and plumbing are common entry routes.",
      },
    ],
    localHook:
      "Rockingham County has the highest Lyme disease rate of any county in New Hampshire, and Portsmouth's coastal brushland is at the heart of that risk zone. Add brown-tail moths along the NH Seacoast and the pest calendar here runs hard from spring through fall.",
    intro:
      "Portsmouth carries a specific double burden among New Hampshire cities: Rockingham County tops the state for Lyme disease cases, and the NH Seacoast is the center of the brown-tail moth zone in New Hampshire. Those two pests alone define the outdoor pest season from May through July. Inside older downtown buildings, German cockroaches and mice are perennial issues. Carpenter ants are drawn to the moisture influence of the Piscataqua estuary and the aging wood-frame housing stock throughout the city.",
    sections: [
      {
        heading: "Brown-tail moths vs. deer ticks: Which is the bigger threat in Portsmouth right now?",
        body: "Both are real, but they peak at different times and require completely different responses. Deer ticks are the longer-season threat in Portsmouth, active from March through November in the brushy coastal edges and salt marsh habitat that borders much of the city. Rockingham County's Lyme disease numbers reflect years of established tick pressure. Brown-tail moths are more intense but shorter: the caterpillar stage from late May through July produces toxic hairs that cause rash and respiratory irritation, making outdoor work hazardous. The moths are on the wing in June and July and lay egg masses on oak, apple, and beach rose. Both deserve professional attention in a Portsmouth property, but the timing differs. Tick treatment runs spring and fall; brown-tail moth work is about egg mass removal in winter and barrier treatment before caterpillars hatch.",
      },
      {
        heading: "Older downtown buildings vs. newer construction: Where is pest pressure highest in Portsmouth?",
        body: "The historic downtown and older residential neighborhoods have significantly more pest pressure than newer suburban construction. Colonial and Federal-era buildings have decades of settling gaps, original or patched masonry, and aging plumbing penetrations that create entry points mice and carpenter ants exploit readily. German cockroaches concentrate in areas with dense food service operations, and Portsmouth's restaurant district in the historic waterfront area sustains that pressure year-round. Newer construction in outlying neighborhoods still sees ticks and carpenter ants, but the structural pest load from mice and cockroaches is lower. If you are in a pre-1970 structure in or near downtown Portsmouth, the building itself is the first variable to address.",
      },
    ],
    prevention: [
      "Inspect for and remove brown-tail moth egg masses from trees and shrubs in winter before hatching in May.",
      "Apply tick repellent and perform full tick checks after time in coastal brushland or marsh edges from March onward.",
      "Seal foundation cracks and pipe penetrations on older downtown buildings before fall to prevent mouse entry.",
      "Maintain dry crawl spaces and address roof or window moisture to reduce carpenter ant harborage.",
      "Work with a licensed professional for German cockroach infestations in food-adjacent spaces.",
    ],
    costNote:
      "Portsmouth pest control commonly involves a spring tick and carpenter ant treatment, a summer brown-tail moth or German cockroach service, and a fall mouse exclusion program for older buildings. Multi-pest programs are typically the most cost-effective approach for the Seacoast's layered pest season.",
    faqs: [
      {
        question: "Is the brown-tail moth rash really that bad in Portsmouth?",
        answer:
          "For sensitive individuals, yes. The microscopic hairs from brown-tail moth caterpillars cause a contact rash similar to poison ivy and, in some people, respiratory irritation when the hairs become airborne. The risk is highest from late May through July when caterpillars are active. Outdoor work like mowing, trimming, and gardening in areas with high caterpillar populations can expose you to significant hair loads. NH DNCR documents established brown-tail moth populations along the Portsmouth and Seacoast area. Wearing long sleeves and a mask when working outdoors during peak season is practical prevention.",
      },
      {
        question: "How do I know if I have carpenter ants or termites in my Portsmouth home?",
        answer:
          "The main physical clue is frass: carpenter ants push coarse, sawdust-like debris out of their galleries, while termites produce fine, pellet-like frass or mud tubes. Carpenter ants are also visible; you will see large black ants, sometimes winged during swarming season, near moisture entry points like plumbing walls and window frames. Termites swarm in spring but are otherwise hidden. Portsmouth's climate and moisture from the Piscataqua estuary supports both, though carpenter ants are the more common structural pest here. A professional inspection is the reliable way to identify which you have.",
      },
      {
        question: "When should I schedule tick treatment for my Portsmouth yard?",
        answer:
          "Two treatments give the best protection in Portsmouth: one in May targeting nymphs, which are the smallest and most likely to transmit Lyme disease, and one in October targeting adults before they overwinter. Rockingham County's high Lyme disease rate makes this a genuine investment in health, not just nuisance control. The May treatment is the more important of the two.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Salem", slug: "salem-nh" },
      { name: "Derry", slug: "derry" },
      { name: "Dover", slug: "dover-nh" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Portsmouth, NH | Ticks, Brown-tail Moths & Carpenter Ants",
    metaDescription:
      "Portsmouth pest control for deer ticks, brown-tail moths, carpenter ants, German cockroaches and mice. Rockingham County NH Seacoast specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "salem-nh",
    name: "Salem",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~30,000",
    county: "Rockingham County",
    climate: "cold-humid",
    climateDriver:
      "Salem sits on the Massachusetts border in southern Rockingham County, giving it a cold-humid New England climate with strong influence from the suburban Boston corridor immediately to the south. Its wooded residential character, split between older established neighborhoods and newer development, sustains healthy deer tick populations. The Massachusetts border proximity means pest pressure from stink bugs, first established in the southern states and now spreading north, has reached Salem's residential areas. Cold winters push mice and cluster flies indoors, while the warm season runs tick, wasp, and ant activity from April through October.",
    topPests: ["Deer Ticks", "Stink Bugs", "Carpenter Ants", "Yellow Jackets", "Mice"],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "tick-control",
        activeSeason: "March through November, peak May to July and October",
        note: "Rockingham County consistently reports high Lyme disease case counts per NH DHHS data, and Salem's wooded suburban landscape provides classic deer tick habitat. Brushy yard edges, leaf litter, and stone walls are primary tick zones throughout Salem neighborhoods.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "September through November (aggregating), overwintering through March",
        note: "UNH Cooperative Extension confirms stink bug range expansion into southern New Hampshire, with Rockingham County border towns seeing increasing populations. Salem's proximity to Massachusetts, where stink bugs are well established, means the population here is growing year over year.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through October, satellite colonies active year-round indoors",
        note: "Salem's older residential neighborhoods and wooded lot lines provide abundant carpenter ant harborage in decaying stumps and damp wood. Any structural moisture entry, from roof leaks to wet crawl spaces, can become a carpenter ant nest site.",
      },
      {
        name: "Yellow jackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets nest in the ground and in wall voids throughout Salem's wooded neighborhoods. Late summer is the high-risk period when colonies are largest and workers are most defensive. Ground nests near foot traffic are the primary hazard.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge September through November",
        note: "Salem's cold New Hampshire winters are strong motivation for mice to seek heated homes. Older construction and homes backing to wooded lots see the heaviest pressure. The fall push starts in September and is mostly finished by December.",
      },
    ],
    localHook:
      "Salem is on the front line of stink bug expansion into New Hampshire. UNH Extension confirms the species is now established in Rockingham County, and Salem's border location with Massachusetts puts it at the leading edge of that northward spread.",
    intro:
      "Salem's border location with Massachusetts makes it a leading edge for stink bug expansion into southern New Hampshire, with UNH Cooperative Extension confirming the species is now established in Rockingham County. Deer ticks and Lyme disease are the bigger health concern, with Rockingham County posting high case counts annually per NH DHHS. The wooded residential character of Salem means carpenter ants, yellow jackets, and mice round out the pest calendar from spring through fall, with the stink bug aggregation adding a new fall nuisance.",
    sections: [
      {
        heading: "Stink bugs vs. yellow jackets: Which fall pest is harder to manage in Salem?",
        body: "They require entirely different responses, which is why comparing them matters. Yellow jackets are the safety risk: ground nests near foot traffic, wall voids, and late-season aggression make them a genuine hazard. A yellow jacket nest in a wall should be treated professionally, not with DIY aerosols that often miss the colony and agitate defenders. Stink bugs, by contrast, are a nuisance with no safety risk. They aggregate on warm, sun-facing walls in September and October and work their way indoors through gaps around windows and siding. The fix is sealing those entry points in August before aggregation starts, and vacuuming any that get inside without crushing them. In Salem, yellow jackets warrant faster, more urgent attention. Stink bugs reward preventive caulking.",
      },
      {
        heading: "Deer ticks vs. dog ticks: Which tick risk matters most in Salem?",
        body: "In Salem, deer ticks are the primary concern because they are the vector for Lyme disease, and Rockingham County's Lyme disease case numbers reflect years of established pressure. American dog ticks are also present in Salem and can transmit Rocky Mountain spotted fever, but Lyme disease from deer ticks is the dominant risk in this part of New Hampshire. The practical difference is size: deer tick nymphs are poppy-seed sized and easy to miss. Dog ticks are larger and easier to spot. Both warrant a full tick check after time outdoors, but the preventive focus for Lyme disease should be on the deer tick nymph season in May and June, when transmission risk peaks and the ticks are hardest to find.",
      },
    ],
    prevention: [
      "Seal exterior gaps around windows, siding, and utility penetrations in August before stink bugs begin aggregating.",
      "Treat yard tick habitat in May for nymphs and in October for adults to reduce Lyme disease risk.",
      "Inspect ground areas near foot traffic and play equipment for yellow jacket nests in early summer.",
      "Seal foundation gaps and pipe openings before fall to prevent mouse entry.",
      "Keep wood piles and debris away from the house to reduce carpenter ant harborage.",
    ],
    costNote:
      "Salem pest programs typically cover spring tick treatment and carpenter ant inspection, summer wasp control, and fall mouse exclusion and stink bug sealing. Bundling these into a seasonal plan is usually more cost-effective than individual service calls.",
    faqs: [
      {
        question: "Are stink bugs in Salem a new problem or has it always been like this?",
        answer:
          "Stink bugs are a relatively recent and growing problem in Salem. The brown marmorated stink bug arrived in the northeastern US from Asia in the 1990s and has been spreading north from Massachusetts into New Hampshire over the past decade. UNH Cooperative Extension confirms establishment in Rockingham County. Salem's border location means it sees the heaviest pressure of any part of New Hampshire. Expect the population to continue growing for several more years.",
      },
      {
        question: "When is the worst time of year for deer ticks in Salem?",
        answer:
          "May and June are the most dangerous period because that is when nymph-stage deer ticks are active. Nymphs are poppy-seed sized, making them very easy to miss in a tick check, and they are responsible for the majority of Lyme disease transmissions. Adults are active in October and can also transmit Lyme disease. Deer ticks in Salem remain active whenever temperatures are above freezing, so spring and fall checks are the most important.",
      },
      {
        question: "How do I keep mice out of my Salem home before winter?",
        answer:
          "Sealing entry points is far more effective than trapping after mice are inside. A mouse can fit through a gap the size of a dime. Check around utility pipes, foundation gaps, dryer vents, and gaps where siding meets the foundation. Expanding foam and steel wool for small gaps, hardware cloth for larger openings. Do this in August or September before the fall push starts. If you find mice inside, trapping is more effective than bait stations in residential settings because you can confirm and remove each catch.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Nashua", slug: "nashua" },
      { name: "Derry", slug: "derry" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Salem, NH | Stink Bugs, Deer Ticks, Carpenter Ants & Mice",
    metaDescription:
      "Salem pest control for stink bugs, deer ticks, carpenter ants, yellow jackets and house mice. Rockingham County NH border town specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "laconia-nh",
    name: "Laconia",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~16,000",
    county: "Belknap County",
    climate: "cold-humid",
    climateDriver:
      "Laconia sits at the heart of the Lakes Region on the shores of Lake Winnipesaukee, the largest lake in New Hampshire. The cold-humid climate is influenced by the lake effect, which moderates temperatures somewhat but sustains high moisture levels year-round. Lakeside properties and the surrounding woods create prime habitat for carpenter ants, whose colonies favor damp wood near water, and for deer ticks in the brushy shoreline vegetation. Cold winters push mice firmly indoors by October and bring cluster flies into the upper floors and attic spaces of older lakefront homes.",
    topPests: ["Carpenter Ants", "Deer Ticks", "Mice", "Yellow Jackets", "Cluster Flies"],
    pestProfile: [
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through October, satellite colonies active year-round indoors",
        note: "The Lakes Region's high moisture levels from Lake Winnipesaukee and surrounding wetlands make wood-frame lakefront homes especially vulnerable to carpenter ant infestation. UNH Cooperative Extension identifies carpenter ants as the top structural pest concern for Belknap County properties near water.",
      },
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "tick-control",
        activeSeason: "March through November, peak May to July and October",
        note: "NH DHHS tick surveillance confirms deer tick populations throughout Belknap County. Lakeside brush, tall grass along the Winnipesaukee shoreline, and wooded residential lots are primary exposure zones. Lyme disease cases are documented in Belknap County each year.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge September through November",
        note: "Laconia's cold lake-country winters are strong motivation for mice to enter homes. Seasonal lakefront properties, often unoccupied in winter, are a particular issue: a mouse colony can establish and expand over winter in an unmonitored property.",
      },
      {
        name: "Yellow jackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets nest in the ground around lakefront properties and in deck structures, wall voids, and tree stumps throughout Laconia. Late summer outdoor activities near Lake Winnipesaukee bring regular encounters when colonies are at peak size.",
      },
      {
        name: "Cluster flies",
        serviceSlug: "fly-control",
        activeSeason: "Fall aggregation, overwintering through March",
        note: "Cluster flies are common in older lakefront and rural properties throughout the Lakes Region. They enter through exterior gaps in fall to overwinter and emerge sluggishly on warm winter and early spring days in upper floors and attic areas. Older construction with more gaps sees the heaviest infestation.",
      },
    ],
    localHook:
      "Lakefront homes on Lake Winnipesaukee face carpenter ant pressure that inland properties do not. The sustained moisture from the lake keeps wood damp year-round, and UNH Cooperative Extension identifies this as the primary driver of structural carpenter ant infestations in Belknap County.",
    intro:
      "Laconia's Lakes Region setting on Lake Winnipesaukee defines its pest profile. The sustained moisture from the lake keeps wood in lakefront structures damp enough for carpenter ants to favor as nesting sites, making them the top structural pest concern in Belknap County. Deer ticks in the shoreline brush, mice pushing indoors for cold winters, and yellow jackets near outdoor lake activities complete the picture. Cluster flies are a nuisance specific to older rural and lakefront homes in the region, emerging on warm days from attic spaces where they overwinter.",
    sections: [
      {
        heading: "Carpenter ants vs. termites in Laconia lakefront homes: What is the real risk?",
        body: "Carpenter ants are by far the more likely structural pest in a Laconia lakefront property. New Hampshire is at the edge of the range where termite activity becomes uncommon, and the NH Seacoast and southern tier see more termite reports than the Lakes Region. Belknap County termite reports are rare. Carpenter ants, by contrast, are well-documented in the Laconia area by UNH Extension and are directly tied to the moisture conditions that lakefront living creates. The practical distinction matters: carpenter ants excavate galleries in already-damp or rotting wood; termites consume sound wood from within, leaving a veneer intact. If you see large black ants inside, especially near plumbing walls or wet areas, it is almost certainly carpenter ants. A professional inspection will confirm which you have and where the moisture source is.",
      },
      {
        heading: "Seasonal properties vs. year-round homes: Which has worse mouse problems in Laconia?",
        body: "Seasonal properties are typically worse. A lakefront cottage that sits unoccupied from November through May gives mice months to establish without detection or intervention. By the time owners return in spring, a small mouse family can have become a significant infestation, with nesting in insulation, chewed wiring, and contaminated pantry areas. Year-round Laconia homes allow the occupants to catch and address mouse entry quickly in fall when it starts. The most effective approach for seasonal properties is a pre-departure inspection and exclusion work in September, before the fall surge, plus mouse traps checked at first return in spring. Baited trap stations around the foundation perimeter over winter are a reasonable supplement.",
      },
    ],
    prevention: [
      "Address any roof leaks, wet crawl spaces, or structural moisture that sustains carpenter ant nesting in lakefront wood.",
      "Inspect for deer ticks after any time in shoreline brush or wooded areas from March through November.",
      "Seal seasonal properties against mouse entry in September before the fall push begins.",
      "Treat yellow jacket ground nests near outdoor entertaining areas in early summer before colonies peak.",
      "Install screens on attic and soffit vents to reduce cluster fly entry in fall.",
    ],
    costNote:
      "Laconia pest programs often combine a spring carpenter ant and tick treatment with a summer wasp service and fall mouse exclusion. Seasonal properties may need a pre-departure inspection and spring reopening check. Cluster fly treatment in older homes is typically a fall exclusion service.",
    faqs: [
      {
        question: "Why do I keep finding carpenter ants in my Laconia lake house?",
        answer:
          "The sustained moisture from Lake Winnipesaukee keeps wood in lakefront structures damp enough to be attractive to carpenter ants year after year. They do not eat wood; they excavate it to nest in areas that already have moisture damage or softening. Recurring carpenter ant problems indicate an ongoing moisture issue, usually a roof seam, window frame, deck ledger, or crawl space that stays wet. Treating the ants without finding the moisture source means the problem returns each season. A licensed pest control professional will identify the moisture point and treat the colony.",
      },
      {
        question: "Are there deer ticks near Lake Winnipesaukee in Laconia?",
        answer:
          "Yes. NH DHHS tick surveillance confirms deer tick populations in Belknap County, and the shoreline vegetation, brushy edges, and wooded areas around Lake Winnipesaukee are classic habitat. Lyme disease cases are documented in Belknap County. Anyone spending time in shoreline brush or on wooded trails near the lake from March through November should use tick repellent and perform post-activity tick checks.",
      },
      {
        question: "How do I deal with cluster flies in my Laconia attic?",
        answer:
          "Cluster flies are parasitic on earthworms and do not breed inside your home. They enter through exterior gaps in fall to overwinter and emerge on warm days from attic spaces and wall voids. The permanent fix is sealing those gaps: soffit vents, fascia boards, and any gap where the roof meets the wall. Treating after they are inside is less effective because they are dispersed in the structure. Fly light traps in the attic can reduce numbers through the winter. A professional can apply a residual treatment to entry points in early fall before they congregate.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Concord", slug: "concord-nh" },
      { name: "Rochester", slug: "rochester-nh" },
      { name: "Manchester", slug: "manchester" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Laconia, NH | Carpenter Ants, Ticks & Mice in Lakes Region",
    metaDescription:
      "Laconia pest control for carpenter ants, deer ticks, house mice, yellow jackets and cluster flies. Lake Winnipesaukee Belknap County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "londonderry-nh",
    name: "Londonderry",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~25,000",
    county: "Rockingham County",
    climate: "cold-humid",
    climateDriver:
      "Londonderry is a wooded residential community in southern Rockingham County, home to Mack's Apples, one of the largest apple orchards in New Hampshire. The rural-suburban mix, with active orchards, wooded lot lines, and residential development, creates a layered pest environment. Stink bugs are an emerging and growing pest in the orchard corridor: UNH Cooperative Extension documents brown marmorated stink bugs as an established orchard pest in southern New Hampshire, where they damage apple crops. Deer ticks thrive in the brushy wooded edges throughout town, Rockingham County Lyme disease rates are among the highest in the state, and cold winters push mice and carpenter ants into structures each fall.",
    topPests: ["Stink Bugs", "Deer Ticks", "Carpenter Ants", "Yellow Jackets", "Mice"],
    pestProfile: [
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "September through November (aggregating), overwintering through March",
        note: "UNH Cooperative Extension identifies stink bugs as an established pest in southern New Hampshire's orchard areas, with Londonderry's Mack's Apples region at the center of that pressure. Residential properties adjacent to or near orchards see the highest aggregation numbers as bugs seek overwintering shelter in September.",
      },
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "tick-control",
        activeSeason: "March through November, peak May to July and October",
        note: "Rockingham County is consistently among the highest-risk counties in New Hampshire for Lyme disease per NH DHHS data. Londonderry's wooded residential lot lines, brushy orchard edges, and stone walls are prime deer tick habitat throughout town.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through October, satellite colonies active year-round indoors",
        note: "Londonderry's wooded character provides abundant outdoor harborage for carpenter ants in decaying stumps and fallen wood, with structural entry following moisture damage in residential buildings. UNH Extension identifies carpenter ants as the primary structural ant pest throughout southern New Hampshire.",
      },
      {
        name: "Yellow jackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets nest in the ground around Londonderry's wooded properties and in wall voids. Properties near the orchard area see elevated yellow jacket pressure as late-season colonies forage for fruit sugars in August and September.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge September through November",
        note: "Londonderry's wooded suburban character sustains large mouse populations year-round. Cold New Hampshire winters provide strong motivation for mice to enter heated structures in fall, and homes at the wooded lot edge see the heaviest pressure.",
      },
    ],
    localHook:
      "Londonderry is home to Mack's Apples, one of New Hampshire's largest orchards, and UNH Cooperative Extension identifies the orchard corridor in southern New Hampshire as the center of the state's stink bug problem. Residential properties near the orchards see some of the highest aggregation numbers in New Hampshire each fall.",
    intro:
      "Londonderry has a pest story tied to its rural character and, specifically, to Mack's Apples orchard. UNH Cooperative Extension documents brown marmorated stink bugs as an established pest in southern New Hampshire's orchard zones, and Londonderry residential properties adjacent to orchard land see some of the highest stink bug aggregation counts in the state each fall. Deer ticks and Lyme disease in Rockingham County, carpenter ants in wooded residential lots, and yellow jackets through the warm season complete a pest calendar that runs from spring through late fall.",
    sections: [
      {
        heading: "Stink bugs vs. box elder bugs: Which fall invader is worse in Londonderry?",
        body: "Both are overwintering nuisance insects that aggregate on warm walls and enter through gaps, but they differ in scale and origin. Stink bugs are the growing problem in Londonderry because of the orchard proximity. They are established and expanding in the southern New Hampshire orchard corridor per UNH Extension, and populations adjacent to Mack's Apples and similar properties are higher than in purely residential areas of the county. Box elder bugs depend on box elder and female maple trees, and their numbers fluctuate by tree density. In Londonderry, stink bugs are the larger and faster-growing nuisance. Both are handled the same way: sealing exterior gaps in August before aggregation starts in September and vacuuming any that get inside. Neither bites or causes structural damage.",
      },
      {
        heading: "Orchard-edge properties vs. interior residential lots: Who has worse pest pressure in Londonderry?",
        body: "Properties adjacent to or near orchard land consistently see higher pest loads, particularly for stink bugs, yellow jackets, deer ticks, and mice. Orchards provide food, shelter, and habitat for all four. Stink bugs are drawn to fruit crops and overwinter in adjacent structures. Yellow jackets forage on fallen fruit in August and September, swelling colonies that then nest in nearby properties. Deer tick populations are sustained by the deer that browse orchard edges. And mice exploit the cover of orchard rows and adjacent wooded areas. Interior residential lots in Londonderry are not pest-free, but they typically see lower pressure on all four of these pests. If your property backs to orchard land or is within a few hundred feet of it, you are in the higher-pressure zone and benefit from earlier and more thorough preventive treatment.",
      },
    ],
    prevention: [
      "Seal exterior gaps around windows, siding, and utility penetrations before September to prevent stink bug and mouse entry.",
      "Apply tick repellent and inspect for ticks after time in wooded lot edges or orchard-adjacent areas from March onward.",
      "Inspect orchard-edge properties for yellow jacket ground nests in early summer before colonies peak.",
      "Keep wood piles and debris away from the house foundation to reduce carpenter ant and mouse harborage.",
      "Check and maintain attic vent screens to reduce stink bug and cluster fly overwintering.",
    ],
    costNote:
      "Londonderry pest programs typically combine a spring tick and carpenter ant treatment with summer yellow jacket control and a fall stink bug and mouse exclusion program. Properties near orchard land benefit from a customized schedule reflecting the higher pest pressure at those locations.",
    faqs: [
      {
        question: "Why do so many stink bugs come into my Londonderry home each fall?",
        answer:
          "Londonderry's proximity to orchard land is the main reason. Brown marmorated stink bugs damage fruit crops and are well established in the southern New Hampshire orchard corridor per UNH Extension. In late summer, stink bugs begin seeking overwintering shelter as temperatures drop, and they are highly attracted to warm sun-facing walls. Properties near orchards see more of them because the orchard population is itself larger. Sealing entry points before September is the most effective prevention. Once inside, vacuum them without crushing, which triggers the odor they are named for.",
      },
      {
        question: "Are deer ticks a problem in Londonderry neighborhoods, or just in the woods?",
        answer:
          "Deer ticks are common throughout Londonderry's wooded residential neighborhoods, not only in deep woods. They live in brushy areas at the edge of lawns, in leaf litter along fences and stone walls, and in ornamental plantings. Any yard that borders wooded land or has deer visiting is at risk. Rockingham County is among the highest Lyme disease risk counties in New Hampshire per NH DHHS data. Tick treatment of the yard perimeter in May and October reduces exposure significantly.",
      },
      {
        question: "Do yellow jackets near the orchard area cause more problems in Londonderry?",
        answer:
          "Yes. Yellow jackets foraging on fallen fruit in late summer swell colonies feeding on that easy sugar source, and those larger, well-fed colonies are more aggressive. Properties within a few hundred feet of active orchard land see higher yellow jacket activity from August through October. Ground nests near foot traffic zones and wall voids close to outdoor entertaining areas are the priority. Treating nests in early summer before colonies reach peak size reduces the late-season aggression risk.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Derry", slug: "derry" },
      { name: "Manchester", slug: "manchester" },
      { name: "Salem", slug: "salem-nh" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Londonderry, NH | Stink Bugs, Ticks, Ants & Mice",
    metaDescription:
      "Londonderry pest control for stink bugs, deer ticks, carpenter ants, yellow jackets and house mice. Mack's Apples orchard corridor Rockingham County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "bedford-nh",
    name: "Bedford",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~22,000",
    county: "Hillsborough County",
    climate: "temperate",
    climateDriver:
      "Bedford is an affluent Manchester suburb in Hillsborough County, NH, sitting at around 300 feet in southern New Hampshire's temperate zone. The wooded suburban character, with significant tree cover in residential lots and proximity to forested areas, creates good tick habitat. Hillsborough County has documented Lyme disease risk per NH DHHS, and the high proportion of newer construction with adjacent woodlands drives carpenter ant and tick pressure.",
    topPests: ["Deer Ticks", "House Mice", "Carpenter Ants", "Yellow Jackets", "Stink Bugs"],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "April through November, nymphs peak May through July",
        note: "NH DHHS documents significant Lyme disease risk in Hillsborough County. Bedford's wooded residential lots and the wooded areas bordering the town's newer developments create tick exposure zones in yards and at the suburban-woodland interface.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, fall surge",
        note: "Bedford's wooded suburban setting provides field mouse reservoir habitat in tree belts and woodlot edges adjacent to residential properties. New Hampshire's cold winters drive mice toward structures in September and October.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, year-round in walls",
        note: "New Hampshire's cold-humid climate creates consistent moisture exposure in wood-frame homes, and carpenter ants are a primary structural pest concern across the state. Bedford's wooded residential setting provides foraging and nesting habitat directly adjacent to homes.",
      },
      {
        name: "Yellow jackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "May through October",
        note: "Yellow jackets nest in the ground and in structural voids across Bedford's single-family residential neighborhoods. Wooded yard edges provide additional ground-nest sites adjacent to maintained lawns.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall entry, spring emergence",
        note: "Southern New Hampshire sees stink bug pressure from the population that has expanded north from the mid-Atlantic. Hillsborough County homeowners encounter stink bugs entering homes in fall, with Bedford's newer construction sometimes having screening or sealing gaps that allow entry.",
      },
    ],
    localHook:
      "Bedford consistently ranks among New Hampshire's wealthiest communities, and the well-maintained wooded lots and newer home construction that define the town create a specific pest picture: a high-value housing stock bordering forested areas that are among Hillsborough County's best tick habitat.",
    intro:
      "Pest control in Bedford, NH addresses the particular challenges of a high-income wooded suburb in Hillsborough County. NH DHHS documents significant Lyme disease risk in the county, and Bedford's tree-heavy residential lots and proximity to forested land create tick exposure in yards and outdoor spaces. Carpenter ants are a primary structural pest concern in New Hampshire's cold-humid climate, and Bedford's newer construction with adjacent woodlands sees consistent spring ant activity. Mice from forested edges, yellow jackets in wooded yard areas, and stink bugs from southern New Hampshire's expanding population complete the local pest calendar.",
    sections: [
      {
        heading: "How real is the tick risk in Bedford, NH yards?",
        body: "Hillsborough County has documented Lyme disease risk per NH DHHS, and Bedford's character, a wooded suburb with substantial tree cover in residential lots and frequent contact between maintained lawns and wooded edges, creates the exact conditions where tick exposure is most common. Deer ticks are found throughout the town's wooded areas, particularly in the leaf litter at the edge of woods, in ornamental plantings adjacent to forest, and in any brushy or unmowed area. The yard-edge zone where mowed lawn meets unmowed wooded area is where the risk is highest. Nymphal deer ticks, which are tiny and difficult to spot, are active in May through July, coinciding with the outdoor activity peak for most residents. Standard prevention measures: using EPA-registered repellent when outdoors in wooded or brushy areas, performing full-body tick checks after time outside, and keeping the lawn-woodland interface clear of leaf litter and brush, reduce exposure risk meaningfully.",
      },
      {
        heading: "Why do Bedford homes see carpenter ants despite being newer construction?",
        body: "Newer construction is not immune to carpenter ants, and Bedford illustrates why. Bedford's rapid residential development over the past two decades placed new homes directly adjacent to wooded lots and mature tree belts. Carpenter ant colonies established in wooded areas outside the home forage into structures looking for food and additional nesting sites. New homes in Bedford are often surrounded by the stumps, root systems, and decaying wood left from cleared lots, which are ideal carpenter ant nesting sites immediately adjacent to the home. As a colony in a wooded area grows, foraging territory expands, and the home becomes part of the explored range. Additionally, even new homes can develop the localized moisture conditions that make wood easier for carpenter ants to excavate: a poorly sealed window frame, a soffit exposed to ice dam melt, or a crawl space with inadequate vapor barrier. The issue is not construction age so much as construction context.",
      },
    ],
    prevention: [
      "Create a tick-reduced buffer at the yard-woodland edge by removing leaf litter, clearing brush, and mowing the transition zone.",
      "Use EPA-registered tick repellent and check for ticks after outdoor time in wooded areas of Bedford.",
      "Inspect crawl spaces and window frames annually for moisture and early carpenter ant activity.",
      "Seal window screen gaps and utility penetrations before September to reduce stink bug entry.",
      "Walk the yard in May and June to locate and treat yellow jacket ground nests before late-summer peak.",
    ],
    costNote:
      "Bedford pest control reflects the southern New Hampshire market, competitive and well-served given proximity to Manchester. Annual tick yard treatment, carpenter ant inspection, and fall rodent exclusion are the core service categories for most Bedford households. Year-round service plans are commonly available.",
    faqs: [
      {
        question: "Should Bedford homeowners treat their yards for ticks every year?",
        answer:
          "For homes with wooded edges and children or pets spending regular time outdoors, annual tick yard treatment is a worthwhile preventive investment. NH DHHS documents Hillsborough County Lyme disease risk, and Bedford's wooded suburban character creates conditions where untreated yards have meaningful tick populations through the warm months. Yard treatment targeting the lawn-woodland interface, where ticks concentrate, is more effective than treating open turf.",
      },
      {
        question: "How do I know if I have carpenter ants or stink bugs overwintering in my Bedford home?",
        answer:
          "The signs are different. Carpenter ants in walls produce fine sawdust-like frass near structural wood elements and make a faint rustling sound at night. Spring emergence near windows or wood elements is the most obvious signal. Stink bugs are visible, often found crawling on walls and windows in fall and spring, with their distinctive shield shape and the musty smell they produce when disturbed. Both can be in the same home. Carpenter ant infestations require identifying and addressing the nesting site. Stink bugs are managed by exclusion, sealing the entry points they used to get in.",
      },
      {
        question: "What is the best single investment for pest control in a Bedford, NH home?",
        answer:
          "Tick yard treatment combined with a spring carpenter ant inspection gives the most value for the typical Bedford household, addressing the two highest-risk pest categories. Fall rodent exclusion is a close third. A service plan that combines those three seasonal interventions covers the pest calendar that most Bedford homeowners encounter year to year.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Nashua", slug: "nashua" },
      { name: "Derry", slug: "derry" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Bedford, NH | Ticks, Carpenter Ants & Hillsborough County",
    metaDescription:
      "Bedford NH pest control for deer ticks, carpenter ants, house mice, and stink bugs. Affluent Manchester suburb with wooded lots and documented Hillsborough County Lyme disease risk. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "hudson-nh",
    name: "Hudson",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~24,000",
    county: "Hillsborough County",
    climate: "temperate",
    climateDriver:
      "Hudson sits on the Merrimack River in southern Hillsborough County on the Massachusetts border. The temperate southern New Hampshire climate is influenced by proximity to the MA border, which moderates winters compared to northern NH while still producing genuine cold. The Merrimack River corridor and the suburban-woodland mosaic drive tick and carpenter ant pressure, while the MA border connection brings stink bug population pressure from the more established southern populations.",
    topPests: ["Deer Ticks", "Carpenter Ants", "House Mice", "Stink Bugs", "Yellow Jackets"],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "April through November",
        note: "Hillsborough County has documented Lyme disease risk, and Hudson's Merrimack River corridor and wooded residential edges create consistent tick habitat. Proximity to Massachusetts, which has its own high tick burden, reinforces the population in southern Hillsborough County.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, year-round in walls",
        note: "Carpenter ants are the primary structural pest in New Hampshire per cooperative extension guidance. Hudson's wooded suburban character and cold-humid climate create the moisture conditions in wood-frame homes that carpenter ants exploit.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, fall surge",
        note: "Hudson's wooded edges and the Merrimack River corridor provide field mouse reservoir habitat adjacent to residential areas. New Hampshire's cold winters drive fall mouse movement toward structures.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall entry, spring emergence",
        note: "Hudson's position on the Massachusetts border places it at the northern edge of a well-established stink bug population in northeastern Massachusetts. Stink bug pressure in southern Hillsborough County is above that of more northern NH communities.",
      },
      {
        name: "Yellow jackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "May through October",
        note: "Yellow jackets nest in the ground and in structural voids across Hudson's dense residential landscape. The Merrimack River corridor adds embankment and riparian nesting sites adjacent to the city's eastern edge.",
      },
    ],
    localHook:
      "Hudson sits directly on the Massachusetts state line, which matters for pest control in one specific way: the stink bug population that has been well-established in northeastern Massachusetts for years is the same population that has been expanding north into Hillsborough County. Hudson homeowners have been dealing with stink bugs longer and at higher numbers than communities further north in New Hampshire.",
    intro:
      "Hudson's position at the New Hampshire-Massachusetts border gives it a pest profile that leans south in one key respect: the brown marmorated stink bug arrived here earlier and at higher numbers than in most of New Hampshire because the well-established Massachusetts population is directly adjacent. Combined with Hillsborough County's documented tick risk, the cold-humid climate that drives carpenter ant pressure in wood-frame homes, and fall mouse movement from wooded edges along the Merrimack, Hudson residents deal with a full seasonal pest calendar that reflects both New England standards and the southward extension of the border.",
    sections: [
      {
        heading: "Why does Hudson have more stink bugs than other New Hampshire towns?",
        body: "The Massachusetts connection explains it. Brown marmorated stink bugs established in the mid-Atlantic states in the late 1990s and expanded north through the coastal corridor into southern New England over the following decade. Massachusetts communities along the Merrimack valley and the Route 93 corridor had significant stink bug populations well before they appeared in central or northern New Hampshire. Hudson sits on the state line, meaning the same population active in Lowell and the northern Massachusetts communities is active on Hudson's south side. Stink bugs do not observe state boundaries. The practical result for Hudson homeowners is that the fall aggregation of stink bugs seeking overwintering sites in homes has been happening longer and at higher numbers than in, say, Concord or Manchester. The fall management approach, sealing window screen gaps, utility penetrations, and door frame gaps before September, is the same as elsewhere, but it needs to be taken seriously earlier and more thoroughly.",
      },
      {
        heading: "How does the Merrimack River corridor affect pest pressure in Hudson?",
        body: "River corridors create localized pest conditions that differ from surrounding upland areas. The Merrimack in Hudson provides tick habitat in the brushy, wooded riparian zone along the river banks and adjacent floodplain. It provides nesting embankments for yellow jackets in the riverine landscape. It creates field mouse movement corridors along the river edge. And it brings moisture conditions to adjacent residential properties that can accelerate wood softening in foundations, creating carpenter ant favorable conditions in homes nearest the river. Residents on the Merrimack-facing side of Hudson generally report slightly higher tick and wasp activity than those further from the river. The river is also a recreational asset, which increases personal tick exposure for residents who use the river trails and parks.",
      },
    ],
    prevention: [
      "Treat yard edges for ticks in spring, focusing on the Merrimack-facing zones and lawn-woodland transitions.",
      "Seal window screens, utility penetrations, and door frames in August before stink bug fall aggregation.",
      "Inspect crawl spaces for moisture accumulation each spring before carpenter ant season.",
      "Seal foundation gaps and garage door sweeps before October for fall mouse exclusion.",
      "Address yellow jacket ground nests in May or June before colonies reach late-summer size.",
    ],
    costNote:
      "Hudson pest control benefits from proximity to the Manchester and Nashua metro markets, meaning competitive pricing and good provider availability. Annual service plans are widely offered. Tick treatment, carpenter ant inspection, stink bug exclusion work, and fall rodent exclusion are the four most common service categories.",
    faqs: [
      {
        question: "Is Hudson's tick risk higher because it borders Massachusetts?",
        answer:
          "The tick population in southern Hillsborough County is connected to the well-established northeastern Massachusetts tick population. NH DHHS documents Hillsborough County Lyme disease risk, and Hudson's border position means the tick burden on the south side of town is essentially continuous with the Massachusetts population rather than a northern frontier. Tick prevention measures are warranted for any Hudson resident spending time in wooded or brushy areas.",
      },
      {
        question: "Why do stink bugs in Hudson smell so bad when I vacuum them up?",
        answer:
          "Stink bugs release a defensive chemical from scent glands when they are disturbed, crushed, or alarmed. The compound has a strong, skunk-like or cilantro-adjacent odor that most people find unpleasant. Vacuuming them stirs the glands. A better approach is to collect them in a sealed container with a small amount of dish soap and water, or to simply deposit them outside rather than crushing them. The smell is harmless but persistent on surfaces where many bugs have been disturbed.",
      },
      {
        question: "What time of year do carpenter ants swarm in Hudson, NH?",
        answer:
          "Winged carpenter ant reproductives, called alates, swarm from established colonies in late spring, typically late April through June in Hillsborough County. Seeing winged ants emerging from a wall, window frame, or ceiling in that window is strong evidence of a mature indoor colony. A swarm means the colony has been present long enough to produce reproductives, which takes years, so the underlying infestation is likely well established. This is a prompt for a carpenter ant inspection, not just a surface treatment.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Nashua", slug: "nashua" },
      { name: "Manchester", slug: "manchester" },
      { name: "Derry", slug: "derry" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Hudson, NH | Ticks, Stink Bugs & Merrimack River Pests",
    metaDescription:
      "Hudson NH pest control for deer ticks, carpenter ants, stink bugs, and mice. MA border location brings early stink bug pressure to Hillsborough County's southern suburbs. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "merrimack-nh",
    name: "Merrimack",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~26,000",
    county: "Hillsborough County",
    climate: "temperate",
    climateDriver:
      "Merrimack is a Hillsborough County industrial and tech suburb along the Merrimack River between Nashua and Manchester. The temperate southern New Hampshire climate with wooded suburban residential areas creates tick and carpenter ant conditions similar to neighboring Hudson and Bedford. The Merrimack River corridor and wooded lot character drive the local pest picture.",
    topPests: ["Deer Ticks", "Carpenter Ants", "House Mice", "Yellow Jackets", "Stink Bugs"],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "April through November",
        note: "Hillsborough County has documented Lyme disease risk per NH DHHS. Merrimack's wooded residential areas and Merrimack River corridor create consistent tick habitat across the town's residential landscape.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, year-round in established wall colonies",
        note: "Carpenter ants are the primary structural pest concern in New Hampshire. Merrimack's cold-humid climate and wooded suburban character create the moisture-wood conditions they favor, and the mix of older and newer construction provides both established colonies and newly colonizing opportunities.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, strong fall surge",
        note: "Wooded edges and the Merrimack River corridor maintain mouse reservoir populations adjacent to Merrimack's residential neighborhoods. Cold New Hampshire winters drive fall mouse entry into structures.",
      },
      {
        name: "Yellow jackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "May through October",
        note: "Yellow jackets nest in the ground and in structural voids across Merrimack. The town's mix of maintained residential lots and wooded areas provides both ground-nesting and structure-nesting opportunities for the local wasp population.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall entry, spring emergence",
        note: "Stink bugs in southern Hillsborough County reflect the northward expansion of the Massachusetts population. Merrimack sees fall stink bug aggregations comparable to Hudson and Bedford.",
      },
    ],
    localHook:
      "Merrimack is one of New Hampshire's most economically productive towns per capita, home to significant commercial and industrial operations along the Route 3 corridor. The wooded residential areas north and east of the commercial strip maintain the suburban-woodland character that keeps tick and carpenter ant pressure present year-round.",
    intro:
      "Pest control in Merrimack, NH follows the Hillsborough County pattern: deer ticks in wooded residential settings, carpenter ants in wood-frame homes with moisture exposure, and mice from forested edges in fall. The Merrimack River corridor adds riparian tick and mouse habitat along the town's eastern edge. Southern New Hampshire's stink bug pressure, expanding north from the Massachusetts border communities, reaches Merrimack in modest but consistent numbers each fall. The town's scale and economic activity mean pest issues in commercial and multi-tenant properties are also part of the local picture.",
    sections: [
      {
        heading: "Is Merrimack, NH a high-risk area for ticks and Lyme disease?",
        body: "Hillsborough County has documented Lyme disease risk per NH DHHS, and Merrimack's wooded residential character puts it squarely in that risk area. The Merrimack River corridor provides riparian tick habitat along the town's eastern edge, and the forested residential lots that make Merrimack appealing as a suburban community also create the leaf litter, understory vegetation, and deer movement corridors that support deer tick populations. The risk is not uniformly distributed. Open commercial areas along Route 3 have low tick exposure. Forested residential lots, yard edges bordering wooded areas, and the river corridor zones are where exposure is meaningful. Residents with children and pets in these environments should treat tick prevention the same way they would in a rural setting, because the tick habitat in their yards is real.",
      },
      {
        heading: "What is the carpenter ant situation in Merrimack's newer subdivisions?",
        body: "Merrimack has seen significant residential development over the past two decades, and many of those newer subdivisions sit adjacent to wooded areas with established carpenter ant populations. New homes are not immune. Carpenter ant colonies from adjacent wooded areas forage into new structures, particularly when construction has left stumps, cleared root systems, or decaying wood debris adjacent to the home. New construction also occasionally has the same localized moisture issues that older homes do: inadequate crawl space ventilation, window flashing that settles before it is fully weather-sealed, or grade conditions that direct water toward the foundation. Any of those conditions makes wood more accessible to carpenter ants. The pattern in Merrimack's newer neighborhoods is that homes on the wooded perimeter of a subdivision see carpenter ant activity earlier than those in the established center, for the same reason that any woodland-adjacent home does.",
      },
    ],
    prevention: [
      "Create a tick-reduced yard edge by clearing leaf litter and brush at the lawn-woodland boundary.",
      "Inspect crawl spaces for moisture conditions each spring before the carpenter ant active season.",
      "Seal exterior gaps for stink bug and rodent exclusion before September.",
      "Treat yellow jacket ground nests in May or June before late-summer aggression peaks.",
      "Keep firewood stored away from the home and off the ground to reduce carpenter ant and mouse harborage.",
    ],
    costNote:
      "Merrimack pest control is well-served by providers operating in the Nashua-Manchester corridor. Competitive pricing and good service availability characterize the local market. Annual plans covering tick treatment, carpenter ant inspection, and fall rodent exclusion give the most complete seasonal coverage.",
    faqs: [
      {
        question: "Why does my Merrimack neighbor seem to have more carpenter ants than I do?",
        answer:
          "Proximity to wooded areas is the primary variable. In Merrimack, homes on lots that back up directly to wooded land are foraging territory for carpenter ant colonies in those woods. Homes in the interior of a subdivision, further from the woodland edge, see lower foraging pressure. Localized moisture conditions are the second variable: a home with a damp crawl space or moisture-affected window frames is a more attractive nesting prospect than a dry, well-maintained home on the same lot.",
      },
      {
        question: "How do I reduce tick exposure in my Merrimack yard without a lot of chemical treatment?",
        answer:
          "Habitat modification is effective. Clearing leaf litter at the lawn-woodland edge, keeping grass mowed short, removing brush piles, and placing a three-foot gravel or wood chip barrier at the lawn-woods transition creates a zone that ticks are reluctant to cross. Deer fencing reduces deer-mediated tick introduction. Keeping play areas and outdoor furniture away from wooded edges also lowers exposure. For higher-risk yards, targeted acaricide treatment at the perimeter significantly reduces tick numbers without treating open lawn areas.",
      },
      {
        question: "When do stink bugs start entering Merrimack homes?",
        answer:
          "In Hillsborough County, stink bugs typically begin seeking overwintering sites in September, with peak entry in October as temperatures drop. They aggregate on warm, south-facing walls before finding gaps. Sealing window screens, door frame gaps, and utility penetrations in August, before the aggregation begins, is more effective than trying to prevent entry after they have started gathering on the exterior.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Nashua", slug: "nashua" },
      { name: "Manchester", slug: "manchester" },
      { name: "Derry", slug: "derry" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Merrimack, NH | Ticks, Carpenter Ants & Merrimack River Suburb",
    metaDescription:
      "Merrimack NH pest control for deer ticks, carpenter ants, house mice, and stink bugs. Hillsborough County wooded suburb with Merrimack River corridor tick and rodent pressure. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "claremont-nh",
    name: "Claremont",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~13,500",
    county: "Sullivan County",
    climate: "cold-humid",
    climateDriver:
      "Claremont sits in the Connecticut River valley in Sullivan County at about 590 feet. The cold-humid Connecticut River valley climate is shaped by the valley setting and surrounding forested hills. Claremont is one of New Hampshire's older industrial cities, with a building stock that skews older than most southern NH communities. The valley setting, agricultural surroundings, and older building stock combine to drive a pest profile that includes ticks, mice, carpenter ants, cockroaches in older commercial buildings, and cluster flies from the rural setting.",
    topPests: ["Deer Ticks", "House Mice", "Carpenter Ants", "German Cockroaches", "Cluster Flies"],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "April through November",
        note: "Sullivan County has tick exposure from the forested Connecticut River valley and surrounding hills. Claremont's proximity to agricultural and forested land creates consistent tick habitat for residents and outdoor users.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, strong fall surge",
        note: "Claremont's older housing stock and cold Connecticut River valley winters create consistent fall mouse pressure. Agricultural surroundings and the river corridor maintain field mouse reservoir populations adjacent to the city.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, year-round in walls",
        note: "New Hampshire's cold-humid climate makes carpenter ants the primary structural pest statewide. Claremont's older building stock, with decades of moisture cycling, provides extensive carpenter ant nesting opportunities in softened wood.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round in commercial settings",
        note: "Claremont's older downtown commercial buildings and the city's restaurant and food service industry create the conditions where German cockroaches establish. Older commercial structures with gaps in walls, drainage infrastructure, and shared wall spaces between units are the primary risk environment.",
      },
      {
        name: "Cluster flies",
        serviceSlug: "fly-control",
        activeSeason: "Fall entry, spring emergence",
        note: "The agricultural land and pastures surrounding Claremont in the Connecticut River valley provide cluster fly breeding habitat in earthworm-rich irrigated soil. Cluster flies are a consistent fall and spring nuisance in Claremont homes.",
      },
    ],
    localHook:
      "Claremont has the older city character and the economic history of a Connecticut River valley industrial community. That history left a building stock, residential and commercial, that has had more than a century of moisture exposure and structural settling. German cockroaches in older commercial buildings, carpenter ants in older homes, and mice in structures that were built before modern exclusion standards were common are the defining pest challenges here.",
    intro:
      "Pest control in Claremont addresses the particular vulnerabilities of an older New Hampshire industrial city in the Connecticut River valley. Sullivan County's forested and agricultural setting creates tick exposure and cluster fly pressure from the surrounding rural landscape. Carpenter ants are New Hampshire's primary structural pest per extension guidance, and Claremont's older building stock provides the moisture-softened wood conditions they need. Older downtown commercial buildings see German cockroach pressure, introduced through deliveries and inter-unit movement in shared-wall structures. Cold Connecticut River valley winters drive strong fall mouse activity across the city.",
    sections: [
      {
        heading: "Why do older commercial buildings in Claremont have cockroach problems?",
        body: "German cockroaches in commercial settings are almost always associated with gaps in older building infrastructure: cracks in walls where shared commercial spaces connect, gaps around older plumbing and utility penetrations, drainage areas under commercial kitchen equipment, and the voids created by decades of building modification and repair. Claremont's downtown commercial buildings are, in many cases, structures that have been in continuous use for a century or more, with multiple tenants and successive modifications. Each change creates new gaps. German cockroaches need three things to establish: food, water, and harborage. Commercial kitchen and food service environments provide all three in abundance. Once established in shared-wall commercial structures, cockroaches move between units through shared utility chases and wall voids, making control a building-wide problem rather than a single-unit issue. Integrated pest management in older commercial buildings requires structural sealing alongside treatment, not treatment alone.",
      },
      {
        heading: "How does living near Claremont's agricultural surroundings affect pest pressure?",
        body: "Sullivan County's mix of forested hills and Connecticut River valley farmland creates a rural agricultural context immediately adjacent to Claremont's residential neighborhoods. That context drives two specific pest pressures that are less common in purely suburban communities: cluster flies and field mice. Cluster flies breed in the earthworm burrows of irrigated farm fields and pastures, and the valley's agricultural land surrounding Claremont provides large amounts of that habitat. Each fall, the new adult generation seeks overwintering sites, and Claremont's homes represent the nearest heated structures. Field mice from surrounding farmland move toward the city in fall as temperatures drop. Homes on Claremont's edges, where residential streets border fields and forested land, face the most direct pressure, but both pests move through the city from those entry points.",
      },
    ],
    prevention: [
      "Inspect for and address moisture issues in older Claremont homes annually, particularly in crawl spaces and around window frames.",
      "Use EPA-registered tick repellent when using Claremont's surrounding trails and agricultural-edge areas.",
      "Seal foundation gaps and pipe penetrations before October for fall mouse exclusion.",
      "Apply a late-summer perimeter treatment in August to reduce cluster fly entry before fall aggregation.",
      "For older commercial buildings, implement integrated pest management including structural sealing alongside treatment for cockroach control.",
    ],
    costNote:
      "Claremont pest control serves a small city in Sullivan County. Providers may route from the Upper Valley (Lebanon/Hanover) area or from the Keene market. Carpenter ant inspection, fall rodent exclusion, tick treatment, and commercial cockroach management are the primary service categories. Commercial properties in older downtown buildings benefit from IPM programs rather than one-time treatments.",
    faqs: [
      {
        question: "What should Claremont homeowners know about carpenter ants in older homes?",
        answer:
          "In Claremont's older housing stock, carpenter ant activity is almost always associated with cumulative moisture exposure. A century-old home has had many opportunities for moisture to soften wood in places that are hard to inspect. The key signs are sawdust-like frass near structural wood, faint rustling sounds in walls at night, and winged reproductives appearing near windows in late spring. Finding those signs warrants a professional inspection that assesses both the infestation and the underlying moisture conditions. Treating the ants alone, without addressing the moisture, typically results in recurring activity.",
      },
      {
        question: "Are German cockroaches in downtown Claremont commercial buildings a risk to nearby homes?",
        answer:
          "In shared-wall commercial buildings or in mixed-use buildings where commercial and residential units share infrastructure, cockroach movement between commercial and residential spaces is possible through utility chases and wall voids. Freestanding residential homes near downtown are at lower direct risk. The primary cockroach risk in Claremont residential settings is introduction through secondhand furniture, appliances, or grocery packaging, not migration from commercial buildings. If you see cockroaches in a Claremont home, a targeted treatment is effective given the cold New Hampshire climate that limits their outdoor survival.",
      },
      {
        question: "Is the tick risk in Claremont less than in more forested New Hampshire towns?",
        answer:
          "Claremont's position in the Connecticut River valley, with a mix of agricultural, forested, and residential land, creates real tick exposure in surrounding areas. It is not a lower-risk environment simply because it is a city. The forested hills surrounding the valley and the river corridor itself both support tick populations that extend into Claremont's residential edges. Residents who use the trails and outdoor areas outside the urban core should treat tick prevention consistently.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Concord", slug: "concord-nh" },
      { name: "Manchester", slug: "manchester" },
      { name: "Keene", slug: "keene" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Claremont, NH | Ticks, Carpenter Ants & Connecticut River Valley",
    metaDescription:
      "Claremont NH pest control for deer ticks, carpenter ants, house mice, German cockroaches, and cluster flies. Sullivan County Connecticut River valley city with older building stock. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "goffstown-nh",
    name: "Goffstown",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~18,000",
    county: "Hillsborough County",
    climate: "cold-humid",
    climateDriver: "Goffstown is a residential town immediately west of Manchester, sitting in a forested valley along the Piscataquog River. Its mix of dense suburban neighborhoods and conservation woodland creates strong tick and wildlife pest pressure, while its older housing stock and cold winters drive consistent mouse and carpenter ant activity.",
    topPests: ["Mice", "Carpenter Ants", "Deer Ticks", "Mosquitoes", "Raccoons"],
    pestProfile: [
      { name: "Mice", serviceSlug: "mice-control", activeSeason: "October to April", note: "Goffstown's suburban-woodland mix and older housing stock create annual fall mouse pressure; homes with wooded backyards see the earliest and heaviest invasion." },
      { name: "Carpenter Ants", serviceSlug: "ant-control", activeSeason: "April to October", note: "Piscataquog River moisture and Goffstown's forest coverage support large carpenter ant populations; moisture-damaged sills and porch timbers are frequent infestation sites." },
      { name: "Deer Ticks", serviceSlug: "flea-tick-treatment", activeSeason: "March to November", note: "Hillsborough County has documented Lyme disease activity; Goffstown's wooded conservation parcels and wildlife corridors maintain year-round tick populations." },
      { name: "Mosquitoes", serviceSlug: "mosquito-control", activeSeason: "May to September", note: "Piscataquog River and associated wetlands support a substantial mosquito population; river-adjacent neighborhoods have notably longer and heavier mosquito seasons." },
      { name: "Raccoons", serviceSlug: "raccoon-removal", activeSeason: "year-round", note: "Goffstown's wooded lots and residential density create ideal raccoon habitat; they den in attics, sheds, and under decks and are a consistent nuisance across the town." },
    ],
    localHook: "Goffstown straddles the edge between Manchester suburb and New Hampshire woodland, and that position creates a pest environment that's more rural in character than the city next door. Raccoons den in attics regularly. Ticks are present on wooded lots year-round. Carpenter ants find older Goffstown homes attractive all season long.",
    intro: "Pest control in Goffstown reflects the town's split personality between suburban and forested. The neighborhoods near Queen City Avenue and New Boston Road see the pest pressures of dense residential areas: carpenter ants in older homes, mice every fall, stink bugs in September. The neighborhoods that back up to the Piscataquog River corridor or the conservation lands on the western side of town deal with more: ticks, mosquitoes, and raccoons that den in attics with regularity. We cover both zones and know which part of Goffstown you're in when you call.",
    sections: [
      {
        heading: "Raccoon and Wildlife Removal in Goffstown",
        body: "Raccoons are one of Goffstown's most common pest calls. The town's forested lots, river corridor, and established neighborhoods with mature trees and accessible attic vents create ideal raccoon habitat year-round. Female raccoons seek attic spaces for denning in late winter and spring, typically February through April. Once a raccoon has denned in an attic, she often returns in subsequent years unless the entry point is permanently sealed. We remove wildlife humanely, seal the entry point, and assess for secondary damage including chewed wiring and soiled insulation. Squirrels use the same attic access points and are a related concern."
      },
      {
        heading: "Tick and Mosquito Management Along the Piscataquog",
        body: "The Piscataquog River and its associated wetlands run through Goffstown's conservation land and near several residential areas. The river corridor supports both mosquito breeding populations and the deer habitat that sustains tick populations. Hillsborough County has documented Lyme disease transmission, and Goffstown's wooded character puts tick exposure on the table for any property with wooded edges. Tick treatment targets the lawn-to-woodland transition zone; mosquito barrier treatment targets yard vegetation. Properties along the river should expect higher baseline pressure and more frequent treatment intervals."
      },
      {
        heading: "Carpenter Ants and Mice in Goffstown Homes",
        body: "Goffstown's older housing stock, particularly the neighborhoods along Mast Road and the village center, carries typical New Hampshire residential pest risk: carpenter ants in moisture-affected wood and mice through settled foundations every fall. Carpenter ants are most visible in spring when winged swarmers emerge from wall galleries. The underlying issue is almost always moisture: an ice dam leak, a settled porch post, or bathroom condensation that hasn't been ventilated properly. Mouse prevention in Goffstown requires perimeter exclusion work: copper mesh at utility penetrations, door sweeps on exterior doors, and bait station placement along the foundation."
      },
    ],
    prevention: [
      "Inspect attic vents and fascia boards annually for raccoon and squirrel entry points.",
      "Treat wooded yard edges for ticks in April and again in August.",
      "Seal foundation gaps and utility penetrations before October for mouse prevention.",
      "Trim tree branches at least 8 feet from rooflines to reduce wildlife bridge access.",
      "Clear Piscataquog-adjacent standing water and maintain gutters to reduce mosquito breeding.",
    ],
    costNote: "Pest control in Goffstown typically runs $130 to $300. Raccoon removal and exclusion runs $250 to $600 depending on entry point complexity and attic condition. Tick yard treatment runs $85 to $155 per application. Annual prevention plans for mice, carpenter ants, and seasonal insects run $450 to $700.",
    faqs: [
      {
        question: "How do I know if a raccoon has gotten into my Goffstown attic?",
        answer: "Sounds are the most common indicator: heavy thumping and rolling movement from above, especially at night. Raccoons are large animals and move nothing like squirrels. You may also notice torn soffit material, displaced attic vents, or a persistent musky odor. In spring, listen for the distinctive chattering of raccoon kits. Call us before attempting any DIY removal."
      },
      {
        question: "When do deer ticks become active in Goffstown?",
        answer: "Deer ticks become active when soil temperatures reach 35 degrees, which in Hillsborough County typically means late March or early April. They remain active through November. The highest-risk windows are April through June and again in September and October, when nymphal and adult ticks are most abundant and questing. Winter ticks can also be active on mild days."
      },
      {
        question: "Why are carpenter ants coming out of my walls in spring?",
        answer: "Carpenter ant swarmers (winged reproductives) emerge from established colonies to mate and start new colonies in spring, typically April or May. If they're emerging from inside your walls, there's an active colony inside the structure, not just foragers from outside. This warrants an inspection to locate and treat the satellite gallery before the colony expands further."
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Manchester", slug: "manchester-nh" },
      { name: "Hooksett", slug: "hooksett-nh" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Goffstown, NH | Mice, Raccoons & Ticks",
    metaDescription: "Pest control in Goffstown, New Hampshire for mice, carpenter ants, raccoons, deer ticks, and mosquitoes. Hillsborough County suburban-woodland pest management. Licensed NH technicians.",
  },
  {
    slug: "hooksett-nh",
    name: "Hooksett",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~15,000",
    county: "Merrimack County",
    climate: "cold-humid",
    climateDriver: "Hooksett sits in Merrimack County along the Merrimack River between Manchester and Concord. The river corridor, mixed residential and commercial development, and wooded lot coverage create a classic southern New Hampshire pest environment: ticks from wooded edges, mosquitoes from river wetlands, and rodents from nearby fields.",
    topPests: ["Mice", "Carpenter Ants", "Deer Ticks", "Mosquitoes", "Wasps"],
    pestProfile: [
      { name: "Mice", serviceSlug: "mice-control", activeSeason: "October to April", note: "Merrimack River corridor fields and Hooksett's mix of older and newer homes create reliable fall mouse migration; commercial strips near Route 3 also attract rodents year-round." },
      { name: "Carpenter Ants", serviceSlug: "ant-control", activeSeason: "April to October", note: "Hooksett's forested lots and river-influence moisture make carpenter ants a consistent structural concern in both older and newer construction." },
      { name: "Deer Ticks", serviceSlug: "flea-tick-treatment", activeSeason: "March to November", note: "Merrimack County has documented Lyme disease activity; the Merrimack River trail system and conservation land support tick populations throughout Hooksett." },
      { name: "Mosquitoes", serviceSlug: "mosquito-control", activeSeason: "May to September", note: "Merrimack River wetlands and seasonal low areas throughout Hooksett create mosquito breeding sites; river trail users and riverfront properties have elevated exposure." },
      { name: "Wasps", serviceSlug: "wasp-bee-removal", activeSeason: "June to October", note: "Yellow jackets and paper wasps nest extensively in Hooksett's wooded residential lots and commercial eave structures; ground nests in lawns peak in August." },
    ],
    localHook: "Hooksett is a Route 3 corridor town that functions as a bedroom community for Manchester and Concord, with a mix of commercial development near the highway and quieter residential neighborhoods backing up to the Merrimack River and conservation land. That positioning creates distinct pest zones depending on which part of town you're in.",
    intro: "Pest control in Hooksett works on two tracks. The commercial strip near Route 3, with its restaurants, storage facilities, and warehouses, runs on a rodent and cockroach management model. The residential neighborhoods east of the highway, backing up to the Merrimack River and conservation land, run on a tick, mosquito, and carpenter ant model. Most homeowners in Hooksett are dealing with the residential list: fall mice, spring carpenter ants, summer ticks and mosquitoes, and yellow jackets through September.",
    sections: [
      {
        heading: "Carpenter Ants and Mice in Hooksett Homes",
        body: "Hooksett has a mix of housing ages, from post-war ranches near the center of town to newer subdivisions carved out of former woodland. Carpenter ants affect both: older homes for their moisture-damaged wood, newer homes when construction drainage wasn't properly managed and slab or sill issues develop. The Merrimack River's moisture influence extends well into residential neighborhoods along Bear Brook and the river trail corridor. Mice are a fall certainty across Hooksett's residential neighborhoods. Properties with wooded backyards typically see the first mouse entries in late September; homes with tighter exteriors and suburban-facing lots may not notice until November. The prevention approach is the same: seal entries before they're needed, not after."
      },
      {
        heading: "Ticks and Mosquitoes Along the Merrimack River",
        body: "Hooksett's Merrimack River trail is a genuine amenity, and like any wooded recreational corridor in New Hampshire, it's tick habitat. Merrimack County has documented Lyme disease, and anyone using the trail system regularly should be aware of tick exposure year-round. The Merrimack River also provides mosquito breeding habitat in its slower-moving side channels and seasonal wetlands adjacent to the trail. Properties with riverfront or trail adjacency should consider both tick and mosquito yard treatment as a package. Barrier treatment for mosquitoes and acaricide treatment for tick zones protect the transition areas between maintained lawn and woodland."
      },
      {
        heading: "Yellow Jackets and Commercial Pest Management",
        body: "Yellow jackets are a late-summer concern across Hooksett's residential and commercial zones. Ground nests in lawn areas are invisible until disturbed; eave nests at commercial properties are more visible but equally problematic. We locate and treat nests directly rather than using broadcast sprays that miss the colony. For commercial accounts near Route 3, particularly food service, we provide integrated pest management programs that address rodents, stored product insects, and nuisance wasps on a scheduled basis. Residential yellow jacket calls are typically resolved in a single treatment."
      },
    ],
    prevention: [
      "Treat wooded yard edges and Merrimack River-adjacent areas for ticks in April and August.",
      "Seal foundation gaps and door sweeps before October; commercial properties should also address loading dock and dumpster gaps.",
      "Inspect soffit boards and window headers annually for moisture and carpenter ant activity.",
      "Walk the lawn in early summer for yellow jacket ground nest entrance holes.",
      "Eliminate standing water from gutters, birdbaths, and low spots weekly through August.",
    ],
    costNote: "Residential pest control visits in Hooksett run $130 to $300. Tick yard treatment runs $80 to $150 per application. Yellow jacket nest treatment runs $140 to $240 per nest. Annual residential prevention plans run $450 to $700. Commercial IPM programs are quoted by account type and frequency.",
    faqs: [
      {
        question: "Is Lyme disease a risk near the Merrimack River trail in Hooksett?",
        answer: "Yes. The wooded corridor along the Merrimack supports deer and small mammals that maintain deer tick populations. Anyone hiking, running, or walking dogs on the trail should do a tick check afterward year-round. For properties that abut the trail or have wooded edges nearby, yard treatment in spring and late summer reduces exposure at home."
      },
      {
        question: "How do I find a yellow jacket nest in my Hooksett lawn?",
        answer: "Watch for workers returning to a single ground point repeatedly, especially in the morning. You may see them disappearing into the lawn near a small hole. Mark the location from a safe distance (at least 20 feet) and call us. Do not pour water or gasoline into the hole or try to cover it. Ground nests can hold several thousand aggressive workers."
      },
      {
        question: "Do I need pest control if my Hooksett home is new construction?",
        answer: "Newer construction still carries risk. New subdivisions in Hooksett are often carved from former woodland, which means the surrounding pest populations didn't go away; they relocated to your yard and adjacent properties. Carpenter ant pressure from surrounding trees and fall mouse migration from cleared land are common issues in new construction within the first few years of occupancy."
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Manchester", slug: "manchester-nh" },
      { name: "Concord", slug: "concord-nh" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Hooksett, NH | Mice, Ticks & Carpenter Ants",
    metaDescription: "Pest control in Hooksett, New Hampshire for mice, carpenter ants, deer ticks, mosquitoes, and yellow jackets. Merrimack River corridor pest management. Licensed NH technicians.",
  },
  {
    slug: "exeter-nh",
    name: "Exeter",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~15,000",
    county: "Rockingham County",
    climate: "cold-humid",
    climateDriver: "Exeter sits in Rockingham County along the Squamscott River in southeastern New Hampshire, where the coastal influence from the nearby seacoast moderates temperatures but adds humidity. The town's historic character, Phillips Exeter Academy campus, and mix of older buildings and forested lots create a layered pest environment.",
    topPests: ["Mice", "Carpenter Ants", "Deer Ticks", "Bed Bugs", "Yellow Jackets"],
    pestProfile: [
      { name: "Mice", serviceSlug: "mice-control", activeSeason: "October to April", note: "Exeter's older housing stock and Squamscott River corridor create reliable fall mouse pressure; the academy's dining and housing facilities also attract rodents." },
      { name: "Carpenter Ants", serviceSlug: "ant-control", activeSeason: "April to October", note: "Exeter's historic downtown buildings, many over 150 years old, carry the moisture history that makes carpenter ant infestation nearly universal in the oldest structures." },
      { name: "Deer Ticks", serviceSlug: "flea-tick-treatment", activeSeason: "March to November", note: "Rockingham County has one of New Hampshire's highest Lyme disease rates; Exeter's wooded lots and the river corridor support dense tick populations." },
      { name: "Bed Bugs", serviceSlug: "bed-bug-treatment", activeSeason: "year-round", note: "Exeter's student population at Phillips Exeter Academy, transient housing near the academy, and lodging accommodations create above-average bed bug introduction risk." },
      { name: "Yellow Jackets", serviceSlug: "wasp-bee-removal", activeSeason: "June to October", note: "Yellow jackets nest in Exeter's older building eaves, wall voids, and lawn areas; the academy's campus buildings and historic downtown properties see regular nest activity." },
    ],
    localHook: "Exeter is one of New Hampshire's most historic towns, home to one of the country's most prestigious prep schools, and that combination creates a distinctive pest environment. The oldest buildings in the downtown core have accumulated decades of moisture history that makes them carpenter ant territory. The student population and transient housing create bed bug introduction risk that's higher than most towns this size.",
    intro: "Pest control in Exeter runs on the town's character: historic, dense, and connected to a large residential student population. Carpenter ants in 19th-century structures near Swasey Parkway and Main Street are a consistent structural concern. The Phillips Exeter Academy campus and surrounding student housing create the kind of foot traffic and occupancy turnover that makes bed bug vigilance worth maintaining. Ticks are a genuine Rockingham County risk along wooded trails and the river. And yellow jackets fill Exeter's older eave structures every summer.",
    sections: [
      {
        heading: "Carpenter Ants in Exeter's Historic Building Stock",
        body: "Exeter's downtown and surrounding residential neighborhoods include buildings that predate the Civil War. These structures have accumulated moisture history in ways that modern construction doesn't: old slate roofs, balloon-frame walls, stone foundations that wick moisture, and chimneys that have settled and cracked. Carpenter ants have been present in many of these buildings for generations, expanding and contracting with seasonal moisture cycles. An inspection of a 19th-century Exeter home almost always finds some combination of active or prior carpenter ant evidence. Treatment involves locating the satellite gallery and treating it directly, combined with a barrier perimeter treatment. The moisture issue underlying the infestation needs a separate fix to achieve lasting control."
      },
      {
        heading: "Bed Bugs and Student Housing in Exeter",
        body: "Exeter's combination of Phillips Exeter Academy boarding facilities, nearby student apartments, and lodging accommodations creates bed bug introduction risk that's proportionally higher than most towns of this size. Bed bugs travel with luggage and clothing; boarding school settings, with students arriving from across the country and internationally, create regular introduction opportunities. We provide discreet, effective bed bug treatment for Exeter homes and facilities using heat treatment and targeted chemical protocols. Early detection, typically identifiable by small rust-colored spots on mattress seams, bite patterns, or visible insects in bedding folds, makes treatment far less intensive."
      },
      {
        heading: "Ticks, Mice, and Yellow Jackets by Season",
        body: "Rockingham County is among New Hampshire's higher-risk counties for Lyme disease, and Exeter's Squamscott River corridor and wooded residential lots provide the habitat that sustains deer tick populations year-round. Tick treatment for yard edges and wooded transitions in April and August covers the two highest-risk windows. Mice follow the fall rhythm: cooling nights, harvest season in surrounding fields, and the first urge to find a warm space. Older Exeter homes with stone or brick foundations have more potential entry points than newer construction. Yellow jackets in Exeter are most problematic at older eave structures and in ground nests in the lawn; late summer is their most aggressive period."
      },
    ],
    prevention: [
      "Inspect historic rooflines and chimney flashings annually for moisture intrusion that invites carpenter ants.",
      "Treat wooded lawn edges for ticks in April and again in late August.",
      "Check mattresses and bedding in any sleeping area that has hosted visitors from out of town.",
      "Seal foundation gaps and exterior door sweeps before October for mouse prevention.",
      "Walk eave lines in early July to spot yellow jacket nest starts before they reach full size.",
    ],
    costNote: "Pest control visits in Exeter run $130 to $320. Bed bug treatment runs $300 to $800 depending on room count and treatment method. Tick yard treatment runs $85 to $160 per application. Annual prevention plans for mice, carpenter ants, and seasonal insects run $450 to $700. Yellow jacket nest treatment is $140 to $250 per nest.",
    faqs: [
      {
        question: "How common are bed bugs around Phillips Exeter Academy?",
        answer: "More common than in a typical residential community. Boarding schools create the exact conditions that allow bed bugs to spread: shared sleeping quarters, students from diverse geographic backgrounds arriving and departing throughout the year, and a campus environment where furniture and bedding move between rooms. We treat cases discreetly and can work with facilities teams on prevention protocols."
      },
      {
        question: "Why do my Exeter walls seem to have carpenter ants every spring?",
        answer: "If winged carpenter ant swarmers are emerging from your walls each spring, you have an established internal colony, not just foragers from outside. Historic Exeter homes often have satellite galleries in moisture-affected wood that have been present for years. The swarmers are the ants' way of spreading to new locations. Direct gallery treatment plus resolving the moisture issue is the lasting fix."
      },
      {
        question: "Is Lyme disease a risk in downtown Exeter?",
        answer: "Less so in the dense downtown core, but yes in neighborhoods with wooded edges and along the Squamscott River corridor. Ticks need the right habitat, and the more wooded and leafy your lot, the higher the exposure risk. Rockingham County's Lyme rate is genuine. Anyone with a property that has wooded edges or leaf litter should treat proactively."
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Hampton", slug: "hampton-nh" },
      { name: "Portsmouth", slug: "portsmouth-nh" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Exeter, NH | Mice, Carpenter Ants & Bed Bugs",
    metaDescription: "Pest control in Exeter, New Hampshire for mice, carpenter ants, bed bugs, deer ticks, and yellow jackets. Historic Rockingham County town needs expert pest management. Licensed NH technicians.",
  },
  {
    slug: "pelham-nh",
    name: "Pelham",
    state: "New Hampshire",
    stateSlug: "new-hampshire",
    stateAbbr: "NH",
    tier: "T3",
    population: "~14,500",
    county: "Hillsborough County",
    climate: "cold-humid",
    climateDriver: "Pelham is a small residential town in southern Hillsborough County bordering Massachusetts, with extensive wooded conservation land, Pelham Bog, and a predominantly residential character with minimal commercial development. Its proximity to Massachusetts and its forested nature make it one of the tick-intensive communities in southern New Hampshire.",
    topPests: ["Deer Ticks", "Mice", "Mosquitoes", "Carpenter Ants", "Stink Bugs"],
    pestProfile: [
      { name: "Deer Ticks", serviceSlug: "flea-tick-treatment", activeSeason: "March to November", note: "Pelham has extensive conservation woodland and proximity to Massachusetts tick habitat; Hillsborough County Lyme disease rates are significant and Pelham's forested character amplifies personal risk." },
      { name: "Mice", serviceSlug: "mice-control", activeSeason: "October to April", note: "Wooded surroundings and residential properties abutting conservation land create strong fall mouse migration pressure across Pelham." },
      { name: "Mosquitoes", serviceSlug: "mosquito-control", activeSeason: "May to September", note: "Pelham Bog and the Town Brook watershed create seasonal mosquito breeding habitat; low-lying residential lots near conservation areas see elevated exposure." },
      { name: "Carpenter Ants", serviceSlug: "ant-control", activeSeason: "April to October", note: "Pelham's forest coverage and older residential construction make carpenter ants a consistent structural concern, particularly for homes with wooded backyards." },
      { name: "Stink Bugs", serviceSlug: "stink-bug-control", activeSeason: "September to November", note: "Brown marmorated stink bugs have spread across Hillsborough County and aggregate heavily on Pelham homes each fall as temperatures drop." },
    ],
    localHook: "Pelham is one of southern New Hampshire's most forested residential communities, sitting on the Massachusetts border with extensive conservation land that keeps the town quiet but also keeps tick pressure high year-round. Many Pelham families moved from Massachusetts and are already familiar with Lyme disease risk; Pelham's habitat makes that risk no lower.",
    intro: "Pest control in Pelham is largely a story about ticks and the forested character of a town that values its conservation land. Hillsborough County has real Lyme disease numbers, and Pelham's extensive woodland, Pelham Bog, and Town Brook corridors sustain the deer and small mammal populations that keep tick populations viable year-round. Mice are a fall certainty for any property with wooded neighbors, which is most of Pelham. Carpenter ants work the moisture-affected wood in older homes. Mosquitoes follow the bog drainage into low-lying residential areas. Stink bugs come each September like clockwork.",
    sections: [
      {
        heading: "Tick Management for Pelham's Forested Lots",
        body: "Pelham's conservation land covers a significant portion of the town, and residential lots throughout the community either abut or are close to wooded corridors. Deer ticks are active from March through November and require management that most suburban New Hampshire communities don't think about until someone in the household gets a tick bite. The key treatment zone is the transition between maintained lawn and leaf litter or brushy understory, typically a 10-to-15-foot buffer. We apply targeted acaricides to this transition in spring and again in late summer, which are the two windows when nymphal and adult tick populations are most active and questing. Pelham Bog and Town Brook area properties should consider three treatments per year."
      },
      {
        heading: "Mice and Carpenter Ants in Wooded Pelham Neighborhoods",
        body: "A property in Pelham that backs up to conservation woodland has essentially no off-season from mouse pressure. The surrounding forest maintains year-round field mouse and deer mouse populations, and every fall, cooling temperatures push them toward structures. Older Pelham homes, particularly on lots that were developed in the 1960s and 1970s, often have settled foundations and wood sills that have been exposed to decades of frost heave and moisture cycling. Both create entry opportunities for mice and attractive habitat for carpenter ants. Exclusion and interior trapping for mice, direct gallery treatment and perimeter barrier for carpenter ants, managed together, make the most sense given Pelham's setting."
      },
      {
        heading: "Mosquitoes, Stink Bugs, and Seasonal Pest Management",
        body: "Pelham Bog and the wetland drainage systems throughout the town's conservation land create seasonal mosquito breeding habitat that affects residential properties along the lower reaches of Town Brook and near bog-adjacent neighborhoods. Barrier treatment for mosquitoes is most effective when combined with standing water source elimination on the property itself; ambient mosquito populations from conservation wetlands require a combination approach. Stink bugs are a late September through October issue across southern New Hampshire, and Pelham's forested lots, which provide the fruit tree and ornamental plant hosts these insects feed on in summer, see heavier than average fall aggregations."
      },
    ],
    prevention: [
      "Treat wooded yard edges for ticks in April; add a late August treatment for fall tick activity.",
      "Seal foundation sills, utility penetrations, and door gaps before October for mouse prevention.",
      "Trim vegetation away from the structure to reduce carpenter ant and wildlife bridge access.",
      "Apply perimeter spray in mid-September to intercept fall stink bug aggregation.",
      "Inspect low-lying areas and gutters monthly through August for standing water.",
    ],
    costNote: "Pest control visits in Pelham typically run $130 to $300. Tick yard treatment runs $85 to $160 per application; two-treatment programs are the standard, with a third application for bog-adjacent properties. Annual prevention plans for mice, carpenter ants, ticks, and seasonal insects run $500 to $750.",
    faqs: [
      {
        question: "Is Lyme disease a concern for families in Pelham, NH?",
        answer: "Yes, meaningfully so. Hillsborough County has documented Lyme disease transmission, and Pelham's forested character keeps tick populations high year-round. Families with children who play in wooded areas or backyards with wooded edges should treat seriously. Tick checks after outdoor activity and yard treatment for your property's transition zones are the two most effective measures."
      },
      {
        question: "Why do mice get into my Pelham home so early in the fall?",
        answer: "Forest-adjacent properties in Pelham don't have the buffer that purely suburban homes do. Field mice and deer mice live in the surrounding woodland year-round and begin seeking shelter as soon as nights cool, often by late September. They follow heat gradients along foundation edges and will find any gap larger than a dime. Properties with wooded backyards should treat in September, not after they're heard in the walls."
      },
      {
        question: "How do stink bugs get in, and how do I stop them?",
        answer: "Stink bugs enter through window gaps, utility penetrations, and any crack in exterior cladding they can fit through. In September, they aggregate on warm south-facing walls and probe for openings while the sun is warming the structure. A perimeter spray applied when daytime temps first drop below 65 consistently, usually mid-September in Pelham, disrupts the aggregation and significantly reduces entry."
      },
    ],
    author: "Sandra Whitfield, Integrated Pest Management Specialist",
    nearbyCities: [
      { name: "Nashua", slug: "nashua-nh" },
      { name: "Salem", slug: "salem-nh" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Pelham, NH | Ticks, Mice & Carpenter Ants",
    metaDescription: "Pest control in Pelham, New Hampshire for deer ticks, mice, mosquitoes, carpenter ants, and stink bugs. Hillsborough County's forested town demands proactive tick management. Licensed NH technicians.",
  },
{
  slug: "somersworth-nh",
  name: "Somersworth",
  state: "New Hampshire",
  stateSlug: "new-hampshire",
  stateAbbr: "NH",
  tier: "T3",
  population: "~11,900",
  county: "Strafford County",
  climate: "cold-humid",
  climateDriver:
    "Somersworth grew up around the Salmon Falls River, which drops about 100 feet over a mile at Great Falls and once powered one of the Seacoast region's largest 19th-century textile mill complexes. The river still forms the city's eastern border with Maine, lining a dense downtown of converted brick mills with wooded, humid riverbank habitat. That mix of old wood-frame housing and river corridor greenway shapes a pest calendar built around ticks, ants, roaches, and rats rather than the drier pests found inland.",
  topPests: ["Deer Ticks", "Carpenter Ants", "German Cockroaches", "Norway Rats"],
  pestProfile: [
    {
      name: "Deer Ticks",
      serviceSlug: "flea-tick-treatment",
      activeSeason: "Spring through fall, with a secondary peak in late fall",
      note: "The wooded riverbanks along the Salmon Falls River and the greenway trails threading Somersworth's neighborhoods put deer ticks within reach of nearly every yard in the city.",
    },
    {
      name: "Carpenter Ants",
      serviceSlug: "ant-control",
      activeSeason: "Spring through fall, most active at dusk",
      note: "Somersworth's stock of wood-frame triple-deckers and 19th-century mill worker housing gives carpenter ants plenty of moisture-softened sills and porch framing to hollow out.",
    },
    {
      name: "German Cockroaches",
      serviceSlug: "cockroach-control",
      activeSeason: "Year-round",
      note: "The dense multi-family housing packed around the old Great Falls mill buildings downtown gives German cockroaches an easy route between units through shared plumbing and wall chases.",
    },
    {
      name: "Norway Rats",
      serviceSlug: "rat-control",
      activeSeason: "Fall through winter, with steady activity near the river",
      note: "Norway rats den along the Salmon Falls River's rocky banks and the city's older sewer lines, then push into basements once cold weather sets in.",
    },
  ],
  localHook:
    "Somersworth split off from Dover in 1729 and grew around the 100-foot drop of the Salmon Falls River at Great Falls, where the Wendell brothers built one of the Seacoast's largest cotton and wool mill operations starting in 1822. That same river corridor, now lined with converted mill lofts and walking trails, still shapes which pests give Somersworth homeowners the most trouble.",
  intro:
    "Somersworth's industrial history left the city with a dense downtown of converted brick mills and wood-frame worker housing, and both shape today's pest calendar. The Salmon Falls River, which still forms the Maine border along the city's eastern edge, brings wooded riparian habitat right up against residential streets, and that means deer ticks are a real spring-through-fall concern here. Carpenter ants find plenty of softened wood in the city's older triple-deckers, while the tight multi-family housing near the old mill district gives German cockroaches an easy path from unit to unit. Add Norway rats working the riverbank and older sewer infrastructure, and Somersworth's pest pressure looks a lot like the mill town it grew from. Few Seacoast cities pack this much pest variety into so small a footprint.",
  sections: [
    {
      heading: "Why Are Deer Ticks Such a Problem Along the Salmon Falls River?",
      body: "The Salmon Falls River corridor runs the length of Somersworth's eastern border, and the wooded, brushy banks on both the New Hampshire and Maine sides give deer ticks exactly the humid, leaf-littered habitat they need. UNH Cooperative Extension and the New Hampshire Department of Agriculture both track blacklegged ticks statewide, and Strafford County sits well within the range where a meaningful share of ticks test positive for the bacteria that causes Lyme disease. Somersworth's mix of riverside walking trails, backyard tree lines, and old stone walls gives ticks easy cover close to houses, not just deep woods. Ticks are most active from April through November in this part of New Hampshire, with a secondary bump of adult activity in late fall. Anyone who gardens, walks a dog along the river trails, or lets kids play near the tree line should check for ticks daily during the warmer months. A licensed applicator can treat the yard perimeter and the brushy edges where ticks wait for a host to brush past.",
    },
    {
      heading: "What Somersworth's Old Mill Buildings Mean for Ants, Roaches, and Rats",
      body: "Somersworth's downtown grew up fast around the Great Falls mills, and a lot of that 19th-century construction is still standing, now converted into apartments, offices, and small businesses. Old timber framing that has taken on moisture over a century and a half is exactly what carpenter ants look for, and they will hollow out softened sills, porch posts, and window frames without anyone noticing until the damage is done. The same dense, connected construction that makes those mill conversions charming also makes it simple for German cockroaches to move between units through shared plumbing chases and wall voids, so an infestation in one apartment rarely stays contained. Down at ground level, Norway rats den in the rocky banks along the Salmon Falls River and in gaps around the city's older sewer and storm drain lines, then move into basements and crawl spaces as temperatures drop in fall. A property along Main Street or High Street with exposed foundation gaps or an unsealed dumpster area is an easy target for all three. Regular inspection of sill plates, shared walls, and foundation penetrations catches these problems while they are still small and cheap to fix.",
    },
  ],
  prevention: [
    "Check for ticks after any walk along the Salmon Falls River trails or through backyard tree lines, especially April through November.",
    "Trim brush and stack firewood away from the foundation to reduce the damp, shaded conditions carpenter ants and ticks both prefer.",
    "Seal gaps around shared walls and plumbing chases in multi-family mill-era buildings to stop German cockroaches from moving unit to unit.",
    "Close foundation gaps and repair storm drain and sewer line access points near the riverbank before fall to keep Norway rats from moving indoors.",
    "Keep gutters clear and grade soil away from sills, since old mill-town timber framing softened by moisture is what draws carpenter ants in the first place.",
  ],
  costNote:
    "Pest control in Somersworth typically runs $150 to $300 for a standard residential treatment, with tick and mosquito yard programs and rat exclusion around older mill buildings priced separately based on property size and river frontage. Free inspection.",
  faqs: [
    {
      question: "Are deer ticks really a problem in Somersworth?",
      answer:
        "Yes. Somersworth sits along the Salmon Falls River, and the wooded, brushy riverbank that runs the length of the city's eastern border gives deer ticks the humid, leaf-littered habitat they need. Strafford County falls within the part of New Hampshire where a significant share of blacklegged ticks test positive for the bacteria that causes Lyme disease, so a bite deserves attention. Checking for ticks after time along the river trails or in the yard, and treating the property perimeter each spring, cuts the risk substantially.",
    },
    {
      question: "Why do so many old buildings in Somersworth have carpenter ant problems?",
      answer:
        "The city's downtown grew up around the Great Falls textile mills in the 1820s, and a lot of that original timber-frame construction, along with the wood-frame worker housing built around it, is still standing today. Wood that has absorbed moisture over a century and a half is soft enough for carpenter ants to hollow out easily, and they often go unnoticed until sills or porch framing start to sag. An inspection of any older Somersworth property should include the foundation sills and porch framing, not just the kitchen.",
    },
    {
      question: "What time of year are rats most active in Somersworth?",
      answer:
        "Norway rats den along the Salmon Falls River banks and around the city's older sewer infrastructure year-round, but activity indoors picks up sharply in fall as temperatures drop and rats look for a warmer place to nest. Basements and crawl spaces near the river or close to the downtown mill district see the most pressure. Sealing foundation gaps before October is the single most effective step a Somersworth property owner can take.",
    },
  ],
  author: "Dr. Lena Ortiz, Board-Certified Entomologist (BCE), PestRemovalUSA",
  nearbyCities: [
    { name: "Dover", slug: "dover-nh", stateSlug: "new-hampshire" },
    { name: "Rochester", slug: "rochester-nh", stateSlug: "new-hampshire" },
    { name: "Durham", slug: "durham-nh", stateSlug: "new-hampshire" },
  ],
  contentTemplate: "C",
  contentSoul: "comparison",
  metaTitle: "Pest Control in Somersworth, NH | Ticks, Ants & Rats",
  metaDescription:
    "Somersworth pest control for deer ticks, carpenter ants, German cockroaches and Norway rats. Salmon Falls River mill-town specialists in Strafford County. Free inspection. Call 1-800-PEST-USA.",
},
{
  slug: "franklin-nh",
  name: "Franklin",
  state: "New Hampshire",
  stateSlug: "new-hampshire",
  stateAbbr: "NH",
  tier: "T3",
  population: "~8,700",
  county: "Merrimack County",
  climate: "cold-humid",
  climateDriver:
    "Franklin sits exactly where the Pemigewasset and Winnipesaukee rivers meet to form the Merrimack River, a confluence that powered the mills the city was built around after it was renamed for Benjamin Franklin in 1820. The falls that once ran that industry now feed slower pools and backwaters near the old mill dam site, and that standing and slow-moving water, paired with aging wood-frame mill housing, shapes a pest calendar built around mosquitoes, carpenter ants, ticks, and mice.",
  topPests: ["Carpenter Ants", "Deer Ticks", "Mosquitoes", "House Mice"],
  pestProfile: [
    {
      name: "Carpenter Ants",
      serviceSlug: "ant-control",
      activeSeason: "Spring through fall",
      note: "Franklin's older mill-era housing near the Winnipesaukee River falls, much of it original wood-frame construction sitting close to damp riverbanks, gives carpenter ants abundant softened wood to colonize.",
    },
    {
      name: "Deer Ticks",
      serviceSlug: "flea-tick-treatment",
      activeSeason: "April through November",
      note: "The wooded slopes around Webster Lake and the Pemigewasset and Winnipesaukee river corridors that meet in Franklin put deer ticks within reach of most yards outside downtown.",
    },
    {
      name: "Mosquitoes",
      serviceSlug: "mosquito-control",
      activeSeason: "Late spring through summer",
      note: "The confluence of the Pemigewasset and Winnipesaukee rivers, plus the calmer water impounded near the old mill dam now home to Mill City Park, creates slow-moving and standing water that breeds mosquitoes through the warm months.",
    },
    {
      name: "House Mice",
      serviceSlug: "mice-control",
      activeSeason: "Fall through winter",
      note: "As one of New Hampshire's smallest, oldest mill cities, Franklin has plenty of aging foundations, and the surrounding Merrimack County farmland pushes house mice indoors once fall temperatures drop.",
    },
  ],
  localHook:
    "Franklin sits exactly where the Pemigewasset and Winnipesaukee rivers meet to form the Merrimack River, a confluence that powered the mills the city was built around and still shapes its pest pressure today. At 8,741 residents in the 2020 census, Franklin is New Hampshire's smallest city, but its river geography and mill-era housing stock give it an outsized set of pest issues for its size.",
  intro:
    "Franklin began as Pemigewasset Village before it was renamed in 1820 for Benjamin Franklin, and it grew into a mill city on the strength of the falls where the Winnipesaukee River drops into the newly formed Merrimack. That water power built the wood-frame housing that still lines the city's older neighborhoods, and it also left behind exactly the kind of damp, slow-moving water that draws mosquitoes each summer. Carpenter ants find soft, moisture-damaged wood in that same aging housing stock, especially near the riverbanks where humidity runs highest. The wooded terrain surrounding Webster Lake and the two rivers gives deer ticks plenty of cover close to Franklin's residential streets. And with Merrimack County farmland pressing in from the edges of town, house mice are a predictable fall and winter visitor once the weather turns. Franklin's small size does not mean small pest pressure, it just means the pressure concentrates fast in a compact city built along two rivers.",
  sections: [
    {
      heading: "Why Franklin's River Confluence Breeds So Many Mosquitoes",
      body: "Franklin is one of the only New Hampshire cities built directly at a river confluence, with the Pemigewasset and Winnipesaukee rivers joining to form the Merrimack right in the middle of downtown. That much moving water sounds like it would discourage mosquitoes, but the slower pools, backwaters, and the impounded stretch near the old mill dam at what is now Mill City Park all create the still or slow water mosquitoes need to lay eggs. Warm, humid Merrimack County summers let populations build quickly from late May through August. Homes near the riverbanks or with low-lying yards that hold water after a storm see the heaviest pressure. Clearing gutters, dumping standing water in unused containers, and treating the yard perimeter before peak season keeps outdoor evenings usable. Franklin's whitewater park draws visitors to the riverfront all summer, and mosquito pressure is part of what any riverside property owner has to manage alongside that draw.",
    },
    {
      heading: "How Franklin's Mill-Era Housing Feeds Carpenter Ants and Fall Mice",
      body: "Much of Franklin's housing dates to the mill era, when water-powered textile and paper operations built wood-frame homes for workers close to the rivers. A century and more later, that framing has absorbed moisture from riverside humidity and aging rooflines, and carpenter ants are quick to hollow out any sill, porch post, or window frame that has gone soft. Franklin's status as New Hampshire's smallest city by population has not slowed the pace of that aging housing stock's upkeep needs. Meanwhile, the farmland ringing Merrimack County outside Franklin supports large house mouse populations that move toward buildings as fields are harvested and temperatures fall. Older foundations with gaps around sills or utility penetrations are the easiest entry point. A fall inspection of both the exterior foundation and any porch or sill framing showing soft wood catches both problems before winter.",
    },
  ],
  prevention: [
    "Clear gutters and eliminate standing water near the riverbanks and low-lying yards before mosquito season builds each May.",
    "Inspect porch posts, window frames, and sills on older mill-era homes each spring for the soft, moisture-damaged wood carpenter ants prefer.",
    "Seal foundation gaps and utility penetrations before fall to keep Merrimack County farmland mice from moving indoors.",
    "Check for ticks after time in the wooded areas around Webster Lake or along the river corridors, April through November.",
    "Keep firewood and brush piles away from the foundation, since damp wood near the house draws both carpenter ants and ticks.",
  ],
  costNote:
    "Pest control in Franklin typically runs $150 to $300 for a standard residential visit, with mosquito programs along the riverfront and carpenter ant treatment for older mill-era homes priced by property size. Free inspection.",
  faqs: [
    {
      question: "Why does Franklin have so many mosquitoes near the river?",
      answer:
        "Franklin sits right at the confluence of the Pemigewasset and Winnipesaukee rivers, and the slower pools and backwaters near that confluence, including the impounded stretch by Mill City Park, create standing and slow-moving water that mosquitoes use to breed. Populations build fast in the humid Merrimack County summer. A seasonal yard treatment and clearing any standing water on the property both cut down on pressure through the warm months.",
    },
    {
      question: "Is Franklin's older housing more prone to carpenter ants?",
      answer:
        "Yes, a lot of Franklin's housing dates back to the mill era when the city grew up around the Winnipesaukee River falls, and that wood-frame construction has had well over a century to absorb moisture near the riverbanks. Carpenter ants target exactly that kind of softened wood in sills, porch posts, and window frames. An inspection of the exterior framing catches most infestations before they spread indoors.",
    },
    {
      question: "When do house mice move into Franklin homes?",
      answer:
        "Mice pressure in Franklin picks up in fall as the farmland surrounding Merrimack County is harvested and temperatures drop, pushing mice to look for a warmer place to nest. Older foundations common in this small mill city, with gaps around sills and utility lines, are easy entry points. Sealing those gaps before October is the most effective single step a homeowner can take.",
    },
  ],
  author: "Marcus Reed, Lead Pest Control Technician, State-Licensed Applicator",
  nearbyCities: [
    { name: "Concord", slug: "concord-nh", stateSlug: "new-hampshire" },
    { name: "Merrimack", slug: "merrimack-nh", stateSlug: "new-hampshire" },
  ],
  contentTemplate: "C",
  contentSoul: "comparison",
  metaTitle: "Pest Control in Franklin, NH | Ants, Ticks & Mosquitoes",
  metaDescription:
    "Franklin NH pest control for carpenter ants, deer ticks, mosquitoes and house mice. Merrimack County river-confluence mill-city specialists. Free inspection. Call 1-800-PEST-USA.",
},
{
  slug: "lebanon-nh",
  name: "Lebanon",
  state: "New Hampshire",
  stateSlug: "new-hampshire",
  stateAbbr: "NH",
  tier: "T3",
  population: "~14,300",
  county: "Grafton County",
  climate: "cold-humid",
  climateDriver:
    "Lebanon is the only city in Grafton County, chartered in 1761 along the Connecticut River and built up around twenty mills already running on the Connecticut and Mascoma rivers by 1817. The city sits inside a landscape of forested hills at a higher elevation than most of southern New Hampshire, which brings colder winters and a longer tick season shaped by dense woodland right up to downtown. That same terrain, plus mill-era wood-frame construction, drives a pest calendar built around ticks, ants, mice, and yellow jackets.",
  topPests: ["Deer Ticks", "Carpenter Ants", "House Mice", "Yellow Jackets"],
  pestProfile: [
    {
      name: "Deer Ticks",
      serviceSlug: "flea-tick-treatment",
      activeSeason: "April through November",
      note: "The forested hills surrounding Lebanon's Connecticut and Mascoma River valleys, part of New Hampshire's wooded Upper Valley, put deer ticks within easy reach of the trails and backyards that ring the city.",
    },
    {
      name: "Carpenter Ants",
      serviceSlug: "ant-control",
      activeSeason: "Spring through fall",
      note: "Lebanon's mix of 19th-century mill housing along the Mascoma River and the wooded lots common in its outlying neighborhoods gives carpenter ants plenty of damp or softened wood to nest in.",
    },
    {
      name: "House Mice",
      serviceSlug: "mice-control",
      activeSeason: "Fall through winter",
      note: "Lebanon's colder Upper Valley winters, tied to its Grafton County elevation, drive house mice toward foundations and outbuildings earlier in the fall than in towns farther south.",
    },
    {
      name: "Yellow Jackets",
      serviceSlug: "wasp-bee-removal",
      activeSeason: "Mid-summer through fall",
      note: "Ground-nesting yellow jackets are a common late-summer complaint in Lebanon's parks and the wooded margins around West Lebanon's commercial district near the Connecticut River.",
    },
  ],
  localHook:
    "Lebanon was chartered in 1761 as one of thirteen towns Governor Benning Wentworth granted along the Connecticut River on a single day, and its economy ran on the water power of that river and the Mascoma for nearly two centuries before Dartmouth-Hitchcock Medical Center anchored a new one in 1991. The forested hills that made those rivers valuable for mills are the same hills that keep deer ticks and carpenter ants a year-in, year-out concern for Lebanon property owners.",
  intro:
    "Lebanon is the only city in Grafton County, and it grew up along the Connecticut and Mascoma rivers, where twenty mills were already running by 1817. That mill history left behind older wood-frame construction near both riverbanks, and it sits inside a landscape of forested hills that has changed far less than the economy has. Those hills mean deer ticks are active across most of the warm season, from the wooded trails around downtown to the yards in West Lebanon. Carpenter ants take advantage of the same damp, older construction the mills built, especially near the river corridors. Grafton County's higher elevation brings colder winters than most of southern New Hampshire, which pushes house mice indoors earlier each fall. And Lebanon's parks and wooded commercial edges see a reliable run of ground-nesting yellow jackets from midsummer into fall, right as outdoor gatherings pick up around the Dartmouth-Hitchcock medical campus and the growing West Lebanon retail corridor.",
  sections: [
    {
      heading: "Why Deer Ticks Thrive in Lebanon's Upper Valley Terrain",
      body: "Lebanon sits in New Hampshire's Upper Valley, a landscape of forested hills and river bottomland that has supported deer and other tick hosts for as long as the area has been settled. UNH Cooperative Extension identifies blacklegged ticks as established across the state, and Grafton County's wooded terrain gives them the humid leaf litter and brush they need close to trails, stone walls, and backyard tree lines. Lebanon's mix of dense downtown blocks and heavily wooded outlying neighborhoods means tick exposure varies a lot within the same city, with the highest risk right at the edge where lawn meets woods. Ticks are active from April into November here, with the heaviest nymph activity in late spring and early summer, when they are hardest to spot. Anyone spending time on the Northern Rail Trail or in a wooded backyard near West Lebanon should do a tick check daily during warm months. A licensed perimeter treatment on wooded property lines reduces the number of ticks that make it into the yard in the first place.",
    },
    {
      heading: "How Lebanon's Cold Winters Shape Mouse and Ant Pressure",
      body: "Grafton County's elevation gives Lebanon colder winters than cities farther south in New Hampshire, and that cold arrives early enough most years to send house mice looking for shelter well before the calendar says fall is over. Older foundations near the Mascoma River and in Lebanon's original mill neighborhoods often have gaps around sills and utility lines that make easy entry points. Carpenter ants follow a similar pattern tied to the same aging housing stock, targeting wood that has taken on moisture from river humidity or a leaking roofline. Because Lebanon's economy shifted from mills to medicine and technology, a lot of that older construction has been renovated for new uses without always addressing the wood or foundation issues underneath. A fall inspection focused on foundation sills, porch framing, and utility penetrations catches both mice and ants while treatment is still simple. Waiting until the first hard frost usually means dealing with an active indoor mouse problem instead of a preventable one.",
    },
  ],
  prevention: [
    "Do a daily tick check after time on the Northern Rail Trail or in wooded yards, especially during peak nymph season in late spring.",
    "Seal foundation gaps and utility penetrations before the first hard frost, since Lebanon's Grafton County elevation brings cold weather earlier than most of southern New Hampshire.",
    "Inspect porch framing and sills on older mill-era homes near the Mascoma River each spring for the soft wood carpenter ants target.",
    "Have ground-nesting yellow jacket colonies in parks or wooded yard edges treated in late summer, before colonies reach peak size in early fall.",
    "Keep woodpiles and brush off the ground and away from the foundation to reduce shelter for both ticks and carpenter ants.",
  ],
  costNote:
    "Pest control in Lebanon typically runs $150 to $300 for a standard residential visit, with tick perimeter treatment and fall exclusion work for older mill-era homes priced by property size. Free inspection.",
  faqs: [
    {
      question: "How bad are deer ticks in Lebanon, NH?",
      answer:
        "Lebanon's Upper Valley terrain, forested hills bordering the Connecticut and Mascoma rivers, gives deer ticks strong habitat close to trails, stone walls, and backyard tree lines. Ticks are active from April through November, with nymphs hardest to spot in late spring and early summer. Daily tick checks after time outdoors and a treated buffer along wooded property lines are the most effective defense.",
    },
    {
      question: "Why do mice move indoors early in Lebanon compared to other New Hampshire cities?",
      answer:
        "Lebanon sits at a higher elevation in Grafton County than most of southern New Hampshire, and that means colder weather arrives sooner. House mice respond to that early cold by seeking indoor shelter ahead of the calendar, especially in the older foundations common near the Mascoma River and Lebanon's original mill neighborhoods. Sealing foundation gaps before the first hard frost heads off most fall invasions.",
    },
    {
      question: "Are yellow jackets a problem in Lebanon in the fall?",
      answer:
        "Yes. Ground-nesting yellow jacket colonies in Lebanon's parks and the wooded edges around West Lebanon's commercial district reach peak size from midsummer into early fall, right as outdoor gatherings around the Dartmouth-Hitchcock campus and downtown pick up. Colonies are easiest and safest to treat in late summer before they reach full strength. A sting can be dangerous for anyone with an allergy, so an active nest near a doorway or patio is worth professional removal.",
    },
  ],
  author: "Sandra Whitfield, Integrated Pest Management & Pesticide Safety Specialist",
  nearbyCities: [
    { name: "Claremont", slug: "claremont-nh", stateSlug: "new-hampshire" },
    { name: "Concord", slug: "concord-nh", stateSlug: "new-hampshire" },
    { name: "Franklin", slug: "franklin-nh", stateSlug: "new-hampshire" },
  ],
  contentTemplate: "C",
  contentSoul: "comparison",
  metaTitle: "Pest Control in Lebanon, NH | Ticks, Ants & Mice",
  metaDescription:
    "Lebanon NH pest control for deer ticks, carpenter ants, house mice and yellow jackets. Grafton County Upper Valley specialists near Dartmouth-Hitchcock. Free inspection. Call 1-800-PEST-USA.",
},
{
  slug: "durham-nh",
  name: "Durham",
  state: "New Hampshire",
  stateSlug: "new-hampshire",
  stateAbbr: "NH",
  tier: "T3",
  population: "~15,500",
  county: "Strafford County",
  climate: "cold-humid",
  climateDriver:
    "Durham sits where the Oyster River empties into Great Bay, one of the largest tidal estuaries in New England, and that salt marsh and wetland fringe creates unusually large amounts of standing and slow-moving water. The University of New Hampshire, home to roughly 13,000 students, dominates the town center with dense, high-turnover rental housing. The combination, a major estuary plus a large university, gives Durham a pest calendar unlike most towns its size in New Hampshire.",
  topPests: ["Mosquitoes", "Deer Ticks", "Carpenter Ants", "German Cockroaches"],
  pestProfile: [
    {
      name: "Mosquitoes",
      serviceSlug: "mosquito-control",
      activeSeason: "Late spring through fall",
      note: "Durham sits at the mouth of the Oyster River on Great Bay, and the tidal salt marsh and freshwater wetland fringe surrounding that estuary create some of the most productive mosquito breeding habitat on the New Hampshire seacoast.",
    },
    {
      name: "Deer Ticks",
      serviceSlug: "flea-tick-treatment",
      activeSeason: "April through November",
      note: "The wooded conservation land and marsh-edge trails around Great Bay and the Oyster River give deer ticks dense cover close to Durham's neighborhoods and the University of New Hampshire campus.",
    },
    {
      name: "Carpenter Ants",
      serviceSlug: "ant-control",
      activeSeason: "Spring through fall",
      note: "Durham's older farmhouses and campus-adjacent rental housing, much of it wood-frame construction near the damp Oyster River bottomland, gives carpenter ants plenty of moisture-softened wood to colonize.",
    },
    {
      name: "German Cockroaches",
      serviceSlug: "cockroach-control",
      activeSeason: "Year-round",
      note: "The dense off-campus student housing surrounding the University of New Hampshire, with high turnover and shared walls, is one of the more persistent sources of German cockroach infestations in Strafford County.",
    },
  ],
  localHook:
    "Durham sits where the Oyster River empties into Great Bay, a tidal estuary that has drawn people to this stretch of the New Hampshire coast for an estimated 11,000 years. The same marsh and wetland habitat that made Great Bay worth settling now makes Durham one of the more mosquito-pressured towns on the Seacoast, and the University of New Hampshire's dense student housing adds a second, very different layer of pest pressure on top of it.",
  intro:
    "Durham is a small town by population, but the Great Bay estuary at its edge and the University of New Hampshire at its center give it pest pressure that punches well above its size. Great Bay's tidal salt marsh and the freshwater wetlands along the Oyster River create standing and slow-moving water across a wide area, and that is exactly the habitat mosquitoes need to breed from late spring through fall. The same wooded, marsh-edge conservation land gives deer ticks dense cover right up against residential streets and the edges of campus. Durham's older farmhouses and the wood-frame rental housing that surrounds UNH sit close to that damp bottomland, which draws carpenter ants into softened sills and framing. And the university itself adds a pest issue the marsh does not: dense, high-turnover student housing where German cockroaches move easily from unit to unit. Few New Hampshire towns this size combine a major tidal estuary and a 13,000-student university, and Durham's pest calendar reflects both.",
  sections: [
    {
      heading: "Why Great Bay Makes Durham One of the Seacoast's Buggiest Towns",
      body: "Great Bay is one of the largest tidal estuaries in New England, and the salt marsh and freshwater wetland fringe where it meets the Oyster River in Durham creates an unusually large amount of standing and slow-moving water. That water warms quickly in late spring and stays productive for mosquitoes well into fall, longer than most inland New Hampshire towns see. The same marsh-edge habitat, plus the conservation land and wooded trails that surround it, gives deer ticks dense cover close to neighborhoods on Durham's edges and along the paths leading toward campus. New Hampshire has documented rising tick activity as warmer seasons extend, and Strafford County sees real Lyme disease risk as a result. A property near Great Bay or the Oyster River should expect a longer mosquito season than a town without that estuary, and a longer tick season along any wooded or marsh-edge property line. Seasonal mosquito treatment and a tick-focused perimeter application are both worth planning for well before Memorial Day.",
    },
    {
      heading: "How UNH's Student Housing Drives Durham's Cockroach and Ant Pressure",
      body: "The University of New Hampshire brings roughly thirteen thousand students into Durham each year, and a lot of them live in dense, high-turnover off-campus rental housing packed close together near campus. That density is exactly what German cockroaches need to spread, since they move easily between units through shared walls, plumbing chases, and the belongings that come and go every August and May. Landlords who skip inspection between tenants make the problem worse, not better. Away from the rental blocks, Durham's older farmhouses and wood-frame homes near the Oyster River's damp bottomland give carpenter ants a foothold in softened sills and porch framing, a problem that has nothing to do with the university and everything to do with the town's older housing stock. Both issues call for different responses: cockroach control in dense rental housing depends on treating adjoining units together, while carpenter ant control in an older farmhouse depends on finding and drying out the moisture source. A one-size approach rarely solves either.",
    },
  ],
  prevention: [
    "Plan seasonal mosquito treatment before Memorial Day given how long Great Bay's marsh habitat stays productive into the fall.",
    "Do daily tick checks after time on Great Bay conservation trails or campus-adjacent wooded paths, April through November.",
    "Inspect sills and porch framing on older farmhouses near the Oyster River each spring for the moisture-softened wood carpenter ants prefer.",
    "In multi-unit rental housing near campus, coordinate cockroach treatment across adjoining units rather than treating just one apartment.",
    "Landlords should inspect and treat student rentals between tenants each August, before a new lease cycle can mask an existing infestation.",
  ],
  costNote:
    "Pest control in Durham typically runs $150 to $300 for a standard residential visit, with seasonal mosquito programs near Great Bay and multi-unit cockroach treatment for student rental housing priced separately by property size. Free inspection.",
  faqs: [
    {
      question: "Why is Durham's mosquito season longer than other New Hampshire towns?",
      answer:
        "Durham sits where the Oyster River meets Great Bay, one of the largest tidal estuaries in New England, and the salt marsh and freshwater wetland habitat around that confluence stays productive for mosquitoes from late spring well into fall. That is longer than most inland New Hampshire towns experience. Planning seasonal treatment before Memorial Day, rather than waiting for mosquitoes to become a problem, makes the biggest difference.",
    },
    {
      question: "Are German cockroaches a bigger issue in Durham because of UNH?",
      answer:
        "Yes. The University of New Hampshire's dense, high-turnover off-campus student housing gives German cockroaches an easy way to spread between units through shared walls and plumbing. Treating just one apartment in a building rarely solves the problem if neighboring units are also infested. Coordinated treatment across a building, along with inspection between lease cycles, gets better results.",
    },
    {
      question: "Is Lyme disease a real risk in Durham?",
      answer:
        "Durham's location next to Great Bay's conservation land and wooded trails gives deer ticks dense cover close to residential neighborhoods and the university, and Strafford County sees documented tick activity across the warm season from April through November. A daily tick check after time outdoors, especially near marsh-edge or wooded trails, along with a treated yard perimeter, meaningfully lowers the risk.",
    },
  ],
  author: "James Cole, Service Operations Manager, PestRemovalUSA",
  nearbyCities: [
    { name: "Dover", slug: "dover-nh", stateSlug: "new-hampshire" },
    { name: "Somersworth", slug: "somersworth-nh", stateSlug: "new-hampshire" },
    { name: "Rochester", slug: "rochester-nh", stateSlug: "new-hampshire" },
  ],
  contentTemplate: "C",
  contentSoul: "comparison",
  metaTitle: "Pest Control in Durham, NH | Mosquitoes, Ticks & Roaches",
  metaDescription:
    "Durham NH pest control for mosquitoes, deer ticks, carpenter ants and German cockroaches. Great Bay estuary and UNH campus specialists. Free inspection. Call 1-800-PEST-USA.",
},
{
  slug: "windham-nh",
  name: "Windham",
  state: "New Hampshire",
  stateSlug: "new-hampshire",
  stateAbbr: "NH",
  tier: "T3",
  population: "~15,800",
  county: "Rockingham County",
  climate: "temperate",
  climateDriver:
    "Windham was settled by Scots-Irish immigrants beginning in 1719 as part of the area then known as Nutfield, and it stayed a quiet farming town for two centuries before becoming one of the fastest-growing communities in New England between 2010 and 2020. New subdivisions built along Interstate 93 now sit directly against the wooded lots and ponds, including historic Cobbett's Pond, that still define much of the town, keeping mosquito and tick pressure high even as the population has nearly doubled.",
  topPests: ["Mosquitoes", "Deer Ticks", "Carpenter Ants", "Boxelder Bugs"],
  pestProfile: [
    {
      name: "Mosquitoes",
      serviceSlug: "mosquito-control",
      activeSeason: "Late spring through summer",
      note: "Windham's Cobbett's Pond and the smaller ponds and wetlands scattered across town give mosquitoes reliable breeding water right alongside the lakefront properties that have become some of Windham's most desirable addresses.",
    },
    {
      name: "Deer Ticks",
      serviceSlug: "flea-tick-treatment",
      activeSeason: "April through November",
      note: "Windham's rapid growth from a sparsely settled farming town into one of New Hampshire's fastest-growing suburbs has put new subdivisions directly against wooded lots where deer ticks remain common.",
    },
    {
      name: "Carpenter Ants",
      serviceSlug: "ant-control",
      activeSeason: "Spring through fall",
      note: "The mature woodlots left standing between Windham's newer subdivisions, along with older farmhouses dating to the town's colonial Scots-Irish settlement, give carpenter ants damp, undisturbed wood to colonize.",
    },
    {
      name: "Boxelder Bugs",
      serviceSlug: "boxelder-bug-control",
      activeSeason: "Fall",
      note: "Boxelder and maple trees common around Windham's older properties and pond-front lots draw large fall boxelder bug aggregations onto sun-facing walls before the insects look for a way inside for winter.",
    },
  ],
  localHook:
    "Windham was settled by Scots-Irish immigrants beginning in 1719 as part of the area then known as Nutfield, and it grew slowly as a farming town for two centuries before becoming one of the fastest-growing communities in New Hampshire and New England between 2010 and 2020. That growth, from about 13,600 residents to nearly 15,800, has pushed new subdivisions right up against the wooded lots and ponds, including historic Cobbett's Pond, that still define much of the town.",
  intro:
    "Windham has changed faster than almost anywhere else in New Hampshire over the past two decades, adding new subdivisions along Interstate 93 as families move north out of the Boston commuter belt. But the woods, ponds, and farmland that made Windham a quiet agricultural town for two hundred years have not gone anywhere, they are just now next door to a lot more houses. Cobbett's Pond and the town's smaller wetlands give mosquitoes plenty of breeding water each summer, right where lakefront living has become one of Windham's biggest draws. Those same wooded lots, many left standing between new developments, keep deer ticks a real concern for anyone with a yard that backs onto trees. Carpenter ants take advantage of both the older farmhouses left from Windham's colonial period and the damp wood in maturing tree lines near newer construction. And when fall arrives, the boxelder and maple trees scattered across the town's older properties send boxelder bugs swarming onto sun-facing walls looking for a way inside.",
  sections: [
    {
      heading: "Why Windham's Rapid Growth Has Not Solved Its Tick and Mosquito Problem",
      body: "Windham's population grew by more than two thousand people between 2010 and 2020, making it one of the fastest-growing towns in New England, but that growth has mostly taken the form of new subdivisions built into or next to existing woodland rather than replacing it. The result is more households than ever sitting directly against the tick habitat that has always been part of Windham's landscape. Cobbett's Pond, along with Windham's smaller ponds and wetlands, adds mosquito breeding water close to some of the town's most desirable lakefront lots. Because Windham has no public transportation and functions almost entirely as a commuter town along Interstate 93, most residents spend real time in their own yards rather than in a dense downtown, which raises everyday exposure to both ticks and mosquitoes. Ticks are active from April through November in this part of Rockingham County, with nymphs hardest to spot in late spring. A yard that backs onto woods or sits near pond frontage benefits from both a seasonal mosquito program and a tick-focused perimeter treatment.",
    },
    {
      heading: "Carpenter Ants and Fall Boxelder Bugs in a Town Still Half Farmland",
      body: "Windham's history as a Scots-Irish farming settlement dating to 1719 left behind older farmhouses scattered among the newer subdivisions, and those structures, along with mature tree lines left standing between developments, give carpenter ants plenty of damp or aging wood to nest in. New construction is not immune either, since builders often leave stands of mature trees close to new homes for privacy, and those trees hold the same moisture that draws ants toward nearby framing. Fall brings a different, more visible problem: boxelder and maple trees common on Windham's older lots and around pond-front properties send large boxelder bug aggregations onto sun-facing exterior walls, where the insects gather by the hundreds before looking for gaps to slip inside for winter. They do not bite or cause structural damage, but a swarm on a light-colored house is hard to ignore and unpleasant once they get indoors. A perimeter treatment applied in late summer, before the fall aggregation begins, keeps most boxelder bugs from ever reaching the siding in the first place.",
    },
  ],
  prevention: [
    "Schedule seasonal mosquito treatment before Memorial Day for any property near Cobbett's Pond or Windham's smaller wetlands.",
    "Do daily tick checks after yard work or trail time, since new subdivisions built against existing woodland keep tick exposure high across town.",
    "Inspect older farmhouse sills and the framing near mature tree lines each spring for the damp wood carpenter ants prefer.",
    "Apply an exterior perimeter treatment in late summer, before boxelder bugs begin their fall aggregation on sun-facing walls.",
    "Seal gaps around windows, siding, and utility penetrations before fall to keep boxelder bugs and other seasonal invaders from getting inside.",
  ],
  costNote:
    "Pest control in Windham typically runs $150 to $300 for a standard residential visit, with lakefront mosquito programs and fall boxelder bug perimeter treatment priced by property size. Free inspection.",
  faqs: [
    {
      question: "Does Windham's rapid growth mean fewer tick and mosquito problems?",
      answer:
        "Not really. Windham added more than two thousand residents between 2010 and 2020, one of the fastest growth rates in New England, but most of that growth built new subdivisions into or next to existing woodland rather than clearing it. Cobbett's Pond and Windham's smaller wetlands still provide mosquito breeding water, and the surrounding woods still support deer ticks. A yard backing onto trees or pond frontage carries real exposure regardless of how new the house is.",
    },
    {
      question: "Why do boxelder bugs swarm on houses in Windham every fall?",
      answer:
        "Boxelder and maple trees common on Windham's older properties and pond-front lots host large boxelder bug populations through the summer. As temperatures drop each fall, the bugs gather by the hundreds on sun-facing exterior walls before looking for gaps to get inside for winter. They are harmless but unpleasant in numbers. A late-summer perimeter treatment, applied before the aggregation begins, keeps most of them off the siding entirely.",
    },
    {
      question: "Are older Windham farmhouses more prone to carpenter ants?",
      answer:
        "Yes. Windham's farming history dates back to Scots-Irish settlement in 1719, and several of the town's older farmhouses have wood-frame construction that has had centuries to develop the damp or softened spots carpenter ants target. Mature tree lines left standing between newer subdivisions add to the moisture nearby framing can pick up. An inspection of sills and porch framing each spring catches most infestations early.",
    },
  ],
  author: "Dr. Lena Ortiz, Board-Certified Entomologist (BCE), PestRemovalUSA",
  nearbyCities: [
    { name: "Derry", slug: "derry", stateSlug: "new-hampshire" },
    { name: "Hudson", slug: "hudson-nh", stateSlug: "new-hampshire" },
    { name: "Bedford", slug: "bedford-nh", stateSlug: "new-hampshire" },
  ],
  contentTemplate: "C",
  contentSoul: "comparison",
  metaTitle: "Pest Control in Windham, NH | Mosquitoes, Ticks & Ants",
  metaDescription:
    "Windham NH pest control for mosquitoes, deer ticks, carpenter ants and boxelder bugs. Rockingham County lake-town and commuter-suburb specialists. Free inspection. Call 1-800-PEST-USA.",
},
];
