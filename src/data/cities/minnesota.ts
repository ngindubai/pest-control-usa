import type { CityLocation } from "@/types";

// Minnesota seed cities. Pest data reflects cold humid-continental patterns
// (University of Minnesota Extension, Hennepin County).

export const minnesotaCities: CityLocation[] = [
  {
    slug: "minneapolis",
    name: "Minneapolis",
    state: "Minnesota",
    stateSlug: "minnesota",
    stateAbbr: "MN",
    tier: "T1",
    population: "~425,000",
    county: "Hennepin County",
    climate: "cold",
    climateDriver:
      "Minneapolis has cold, long winters and warm, humid summers. The hard freeze ends the insect season outdoors, but it also drives pests indoors every fall looking for warmth.",
    topPests: ["Mice", "Boxelder Bugs", "Ants", "Wasps", "Mosquitoes"],
    pestProfile: [
      {
        name: "House mice and deer mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active all winter inside",
        note: "As the first cold snaps arrive, mice push indoors through gaps the width of a pencil and settle in walls, basements, and attics for the winter.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Gather on homes in fall, reappear in spring",
        note: "Boxelder bugs cluster on warm south and west walls in autumn and work into wall voids to overwinter, then turn up indoors on the first warm days of spring.",
      },
      {
        name: "Carpenter and pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through summer",
        note: "Carpenter ants tunnel into damp or damaged wood rather than eating it, often signaling a moisture problem in the structure.",
      },
      {
        name: "Wasps and hornets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "Paper wasp and yellowjacket nests grow through summer and become most aggressive in August and September around eaves and decks.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Late spring through summer",
        note: "With over a thousand lakes in the metro area, mosquito season is short but intense once the warm weather arrives.",
      },
    ],
    localHook:
      "In Minneapolis the pest calendar flips with the seasons. The real surge is not in summer, it is the fall, when the first cold drives mice and boxelder bugs straight into the walls of your home.",
    intro:
      "Pests in Minneapolis follow the cold. Summer brings mosquitoes off the lakes and wasps under the eaves, but the defining moment of the year is autumn. As the temperature drops, mice and overwintering insects like boxelder bugs head indoors in numbers. A home that is sealed and treated before that first cold snap stays quiet through winter. One that is not becomes a refuge.",
    sections: [
      {
        heading: "Why fall is the busy season here",
        body: "Most pests cannot survive a Minnesota winter outdoors, so they do the sensible thing and move inside. Mice slip through gaps as small as a pencil. Boxelder bugs and lady beetles pack into wall voids on the warm side of the house. The work that matters is exclusion in late summer and early fall, sealing entry points before the rush, rather than chasing pests once they are already in the walls.",
      },
      {
        heading: "Carpenter ants and the moisture clue",
        body: "Carpenter ants do not eat wood, they tunnel through it, and they prefer wood that is already damp or damaged. Finding them indoors in spring often points to a moisture problem, a leak, or poor ventilation, as much as an ant problem. A good inspection treats the ants and flags the moisture source behind them.",
      },
    ],
    prevention: [
      "Seal gaps around pipes, vents, and the foundation before fall to keep mice out.",
      "Treat south and west walls in early autumn to reduce boxelder bug clustering.",
      "Fix leaks and damp wood, which is what draws carpenter ants indoors.",
      "Knock down small wasp nests early in summer before they grow aggressive.",
    ],
    costNote:
      "Many Minneapolis homes book a fall exclusion visit plus a spring follow-up rather than year-round service, since the outdoor season is short. A free inspection sets the plan around your home and the time of year.",
    faqs: [
      {
        question: "Why do mice get into Minneapolis homes in the fall?",
        answer:
          "Mice cannot survive the winter outdoors, so as the first cold arrives they move inside through gaps as small as a pencil width. Sealing entry points in late summer and early fall, before the rush, is the most effective defense.",
      },
      {
        question: "What are the bugs covering my house in autumn?",
        answer:
          "Those are most likely boxelder bugs, and sometimes Asian lady beetles. They cluster on warm south and west walls in fall and work into wall voids to overwinter, then reappear indoors on the first warm spring days. Treating sunny walls in early autumn reduces them.",
      },
      {
        question: "Are carpenter ants damaging my home?",
        answer:
          "Carpenter ants tunnel through wood to nest rather than eating it, and they prefer wood that is already damp or damaged. Finding them indoors often points to a moisture issue, so the fix usually addresses both the ants and the source of the damp.",
      },
      {
        question: "When are wasps worst in Minneapolis?",
        answer:
          "Paper wasp and yellowjacket nests grow all summer and are largest and most aggressive in August and September around eaves, decks, and sheds. Removing small nests early in the season is much easier than dealing with a mature one.",
      },
      {
        question: "Do I need pest control in winter here?",
        answer:
          "The outdoor season is short, so many homes focus on fall exclusion and a spring follow-up rather than year-round service. If mice are already inside over winter, though, treatment continues until the home is sealed and clear.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Saint Paul", slug: "saint-paul" },
      { name: "Bloomington", slug: "bloomington" },
      { name: "Edina", slug: "edina" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Minneapolis, MN | Mice, Boxelder Bugs & Ants",
    metaDescription:
      "Minneapolis pest control for fall mice, boxelder bugs, carpenter ants, wasps and summer mosquitoes. Seasonal plans, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "saint-paul",
    name: "Saint Paul",
    state: "Minnesota",
    stateSlug: "minnesota",
    stateAbbr: "MN",
    tier: "T1",
    population: "~310,000",
    county: "Ramsey County",
    climate: "cold-humid",
    climateDriver:
      "Saint Paul sits on the Mississippi River as the eastern half of the Twin Cities. The cold continental winters are among the harshest of any major US city, suppressing outdoor pests for months, but the warm humid summers and the river and lake system drive a strong mosquito season and a fast fall rodent surge.",
    topPests: ["Mice", "Mosquitoes", "Boxelder Bugs", "Carpenter Ants", "Wasps"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, major surge in October and November",
        note: "Saint Paul's harsh winters drive mice firmly and quickly into heated buildings each fall. The older housing stock in neighborhoods like the East Side and West Seventh has abundant entry points around foundations and utilities.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "May through September",
        note: "The Mississippi River, the area's many lakes, and the surrounding wetlands give the Twin Cities a strong summer mosquito season. The Metropolitan Mosquito Control District actively manages the region. Minnesota's mosquitoes are a defining summer nuisance.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation, overwintering on and in homes",
        note: "Boxelder bugs gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are a harmless nuisance, very common across the Twin Cities where box elder and maple trees are abundant.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "April through September",
        note: "Carpenter ants are the most significant structural insect pest in Minnesota. They nest in moisture-damaged wood and are common in the older homes and mature tree canopy of Saint Paul. They can cause structural damage over time.",
      },
      {
        name: "Yellow jacket and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August and September",
        note: "Yellow jackets nest in the ground and wall voids and become aggressive in late summer as colonies peak. Paper wasps build nests under eaves and in sheltered spots.",
      },
    ],
    localHook:
      "Saint Paul gets some of the harshest winters of any major US city, which keeps the outdoor pest season short and sharp. The flip side is predictable: when the cold arrives, mice head indoors fast, and the fall rodent surge here is one of the most reliable pest events of the year.",
    intro:
      "Pest control in Saint Paul is a study in extremes. The harsh continental winters, among the coldest of any major US city, suppress outdoor pests for months, but they also drive mice into heated buildings fast each fall. The Mississippi River and the Twin Cities lakes drive a strong summer mosquito season managed region-wide by the Metropolitan Mosquito Control District. Carpenter ants are Minnesota's most significant structural insect, boxelder bugs swarm sun-facing walls each fall, and wasps peak in late summer. The treatment calendar here is sharply seasonal.",
    sections: [
      {
        heading: "Why does Saint Paul get such a strong fall mouse surge?",
        body: "Saint Paul's winters are severe, and house mice respond to falling temperatures with urgency. When the cold sets in around October, mice move into heated buildings fast, through gaps as small as a pencil. The older housing stock in neighborhoods like the East Side, West Seventh, and Frogtown has settled foundations and aging utility penetrations that offer many entry points. A home that was mouse-free all summer can have active mice within weeks of the first hard cold. Sealing entry points in September, before the surge, is far more effective than trapping after.",
      },
      {
        heading: "What is the most damaging insect pest in Saint Paul?",
        body: "Carpenter ants. They are Minnesota's most significant structural insect pest, more so than termites, which are far less of a concern this far north. Carpenter ants nest in moisture-damaged wood: around leaky windows, water-damaged door frames, roof lines, and the dead wood of the mature trees common in Saint Paul's older neighborhoods. They excavate galleries rather than eating wood, but an established colony can cause real structural damage over several years. Seeing large black ants indoors in spring, often more than a couple, suggests a colony established within or near the building.",
      },
    ],
    prevention: [
      "Seal foundation cracks, pipe gaps, and utility penetrations in September before the fall mouse surge.",
      "Inspect wood around windows, roof lines, and nearby trees for moisture damage that attracts carpenter ants.",
      "Remove standing water and treat resting areas to manage the strong summer mosquito season.",
      "Seal entry points before fall to reduce boxelder bug invasions on sun-facing walls.",
    ],
    costNote:
      "Saint Paul pest control commonly uses a seasonal approach: fall rodent exclusion, summer mosquito and wasp service, and carpenter ant treatment as needed. A free inspection sets the schedule to your home.",
    faqs: [
      {
        question: "When do mice get into Saint Paul homes?",
        answer:
          "The surge arrives in October and November as Minnesota's harsh cold sets in, driving mice into heated buildings fast through gaps as small as a pencil. The older housing stock has abundant entry points. Sealing them in September, before the cold, is far more effective than trapping after mice are established.",
      },
      {
        question: "Are termites a concern in Saint Paul?",
        answer:
          "Much less than in warmer cities. Termites are far less of a concern this far north. The most significant structural insect pest in Saint Paul is the carpenter ant, which nests in moisture-damaged wood and can cause structural damage over time. If you see large black ants indoors in spring, a carpenter ant inspection is the right response.",
      },
      {
        question: "Why is the mosquito season so strong in the Twin Cities?",
        answer:
          "The Mississippi River, the many area lakes, and the surrounding wetlands provide extensive mosquito breeding habitat through the warm summers. The Metropolitan Mosquito Control District actively manages the region. The active season runs May through September. Removing standing water and treating resting areas around the home reduces the impact.",
      },
      {
        question: "What are the bugs swarming my Saint Paul house in fall?",
        answer:
          "Most likely boxelder bugs. They gather in large numbers on warm, sun-facing walls in fall and work their way indoors to overwinter. They are harmless, do not bite or damage the home, and are very common across the Twin Cities. Sealing entry points before fall reduces how many get in.",
      },
      {
        question: "Is year-round pest control necessary in Saint Paul?",
        answer:
          "Many Saint Paul homes do well with a seasonal plan given the harsh winters: fall rodent exclusion, summer mosquito and wasp service, and carpenter ant treatment as needed. Homes with recurring indoor pest pressure may benefit from a continuous plan. A free inspection sets the right schedule.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Minneapolis", slug: "minneapolis" },
      { name: "Maplewood", slug: "maplewood" },
      { name: "Roseville", slug: "roseville-mn" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Saint Paul, MN | Mice, Carpenter Ants & Mosquitoes",
    metaDescription:
      "Saint Paul pest control for fall mice, carpenter ants, summer mosquitoes, boxelder bugs and wasps. Twin Cities seasonal specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "rochester",
    name: "Rochester",
    state: "Minnesota",
    stateSlug: "minnesota",
    stateAbbr: "MN",
    tier: "T2",
    population: "~124,000",
    county: "Olmsted County",
    climate: "cold-humid",
    climateDriver:
      "Rochester sits in Olmsted County in southeastern Minnesota, with a cold-humid continental climate that delivers genuinely cold winters and warm, humid summers. The Zumbro River runs through the city, and the surrounding Olmsted County farmland and the hardwood forests of southeastern Minnesota contribute to the pest profile. Rochester is internationally recognized as home of the Mayo Clinic, and the associated medical tourism and hospitality industry creates bed bug introduction risk comparable to a much larger city. Minnesota winters drive mice hard into structures each fall, and Rochester's position in the bluff country of southeastern Minnesota adds box elder and other woodland species to the urban pest mix.",
    topPests: ["House Mice", "Carpenter Ants", "Boxelder Bugs", "Yellowjackets", "Earwigs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Push indoors October through December, active year-round once inside",
        note: "House mice are the most consistent fall pest in Rochester. Minnesota winters are genuinely cold, and the push into heated structures begins in September as temperatures drop. University of Minnesota Extension identifies mice as the top rodent pest concern in Minnesota. Rochester's mix of older residential housing near the Mayo Clinic campus and newer suburban construction at the city's edges provides a range of entry point types.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through September, visible indoors in spring",
        note: "Carpenter ants are a structural concern in Rochester. The bluff country forests of southeastern Minnesota extend into the wooded residential areas surrounding the city, and the mature hardwood canopy in neighborhoods near Silver Lake and the Bear Creek corridor provides substantial outdoor colony habitat. Finding large black ants indoors in April or May indicates an established colony in moisture-affected structural wood.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "September through November entry, overwinter in wall voids",
        note: "Boxelder bugs are a predictable fall nuisance in Rochester. Olmsted County has significant boxelder tree populations in established neighborhoods and along waterways, and the annual aggregation events on south-facing walls in September are consistent year to year. They work into wall voids through window frame gaps and utility penetrations.",
      },
      {
        name: "Yellowjackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests active June through October, peak aggression August and September",
        note: "Yellowjackets are a consistent late-summer pest in Rochester's residential neighborhoods and the wooded parks along the Zumbro River. Ground nests in yards and parks are the most common type encountered. August and September are the peak risk period when colony size reaches its maximum and workers are most aggressive. The bluff country parks around Rochester see above-average yellowjacket activity.",
      },
      {
        name: "Earwigs",
        serviceSlug: "earwig-control",
        activeSeason: "Spring through fall, peak in late spring and early summer",
        note: "Earwigs are a nuisance pest in Rochester that push through ground-level foundation gaps in the warm season. The moist conditions common along the Zumbro River corridor and in the heavily irrigated residential areas create favorable earwig habitat in garden beds and mulch areas. They shelter under stones, bark, and dense ground cover during the day and forage at night.",
      },
    ],
    localHook:
      "Rochester's Mayo Clinic draws approximately 1.3 million patients and visitors annually from across the country and around the world. That volume of hospitality activity, including the hotels, extended-stay facilities, and short-term rentals that serve Mayo patients and their families, creates a bed bug introduction rate that far exceeds what a city of 124,000 would otherwise experience. Rochester's pest control community deals with bed bug calls from hospitality properties as a regular part of the business, not an occasional exception.",
    intro:
      "Pest control in Rochester follows southeastern Minnesota's cold-humid seasonal pattern with a Mayo Clinic twist. House mice push hard into structures each October as Minnesota winters arrive. Carpenter ants are a spring structural concern in the wooded neighborhoods near Silver Lake and the Zumbro River. Boxelder bugs aggregate on Rochester homes each September. Yellowjackets peak in August in the bluff country parks. Earwigs are a warm-season nuisance in irrigated residential areas. And the Mayo Clinic's hospitality activity introduces bed bug risk at a level unusual for a city of Rochester's size.",
    sections: [
      {
        heading: "The fall mouse push in Rochester's Minnesota winters",
        body: "Rochester's fall mouse surge is driven by Minnesota's genuinely cold winters. When outdoor temperatures drop below 50 degrees in September, house mice begin their systematic push toward heated structures, probing every gap in foundations, utility penetrations, and garage door seals. University of Minnesota Extension notes that house mice are the most common rodent pest in Minnesota and that the fall entry push is predictable in its timing. Rochester's housing stock ranges from the older homes near the Mayo campus and the Pill Hill neighborhoods to the newer construction in the Northwest Rochester and Cascade Lake areas. Older homes have settled foundations with cracked mortar and deteriorated utility seals. Newer homes have the subtler entry points of inadequate caulking at utility penetrations and garage door thresholds that have never been properly sealed. A professional exclusion inspection in September identifies both types. Metal-based sealing materials hold through Minnesota winters better than foam sealant, which freeze-thaw cycles crack open. Trapping removes the mice that have already entered; exclusion stops new ones.",
      },
      {
        heading: "Bed bugs and the Mayo Clinic hospitality ecosystem",
        body: "Rochester's Mayo Clinic is one of the busiest medical institutions in the world, drawing over a million visitors annually for medical care. The hotels, extended-stay facilities, AirBnB rentals, and family housing arrangements that support Mayo patients and their families create a hospitality ecosystem with high occupancy, high turnover, and continuous new arrivals from across the country and internationally. Bed bug introductions follow high-turnover hospitality, and Rochester's pest control professionals deal with bed bug calls from hotels, extended-stay facilities, and residential rentals near the Mayo campus as a regular matter. For Rochester residents renting on a short-term basis or hosting Mayo patients, inspecting sleeping areas between guests, encasing mattresses and box springs with bed bug-proof covers, and knowing the early signs of bed bug activity are practical protective steps.",
      },
    ],
    prevention: [
      "Schedule mouse exclusion work in September before Minnesota temperatures drop in October, using metal-based materials.",
      "Seal window frame and utility penetration gaps before mid-September to limit boxelder bug entry into wall voids.",
      "Inspect moisture-prone wood around windows and in the Zumbro River corridor areas for carpenter ant activity each spring.",
      "For rentals near Mayo Clinic, inspect sleeping areas between guest stays and use bed bug-proof mattress encasements.",
    ],
    costNote:
      "Rochester pest services start with a free inspection. Mouse exclusion and trapping programs are most effective when initiated in September. Carpenter ant programs include moisture assessment. Boxelder bug treatment is a late-August perimeter application. Bed bug programs for hospitality-adjacent properties are quoted by method and room count. Yellowjacket treatment is per nest.",
    faqs: [
      {
        question: "When do mice push into Rochester homes?",
        answer:
          "September is the start of the push in Rochester, earlier than in warmer Minnesota cities because southeastern Minnesota's temperatures drop faster than the metro. University of Minnesota Extension identifies mice as the top Minnesota rodent pest, and the fall entry surge is predictable. Sealing entry points in September, before the push arrives, is the most cost-effective approach. Metal-based materials hold better than foam sealant through Minnesota winters.",
      },
      {
        question: "Why does Rochester have more bed bug activity than most cities its size?",
        answer:
          "The Mayo Clinic draws over a million visitors annually. The hotels, extended-stay facilities, and rental housing serving those visitors have higher turnover and new arrivals than comparable facilities in cities without that hospitality pull. Bed bugs follow high-turnover hospitality, and Rochester's pest control community deals with bed bug calls from the Mayo ecosystem as a regular part of operations. Rochester residents who host medical visitors or run rentals near the clinic face above-average bed bug introduction risk.",
      },
      {
        question: "Are carpenter ants a structural risk in Rochester?",
        answer:
          "Yes. Southeastern Minnesota's hardwood bluff country forests extend into Rochester's residential areas along Silver Lake and the Bear Creek and Zumbro River corridors, providing substantial outdoor carpenter ant colony habitat. The spiders target moisture-damaged structural wood, typically around leaky windows, at soffits with poor drainage, and in crawl spaces with condensation. Seeing large black ants indoors consistently in April or May indicates an established nearby colony. An inspection can identify the colony and the moisture source driving it.",
      },
      {
        question: "How do I stop boxelder bugs from getting into my Rochester home?",
        answer:
          "Seal the gaps around window frames, at utility penetrations, and at the junction of siding and foundation before mid-September, which is when boxelder bugs begin aggregating on walls seeking overwintering sites. A perimeter insecticide on south- and west-facing walls before mid-September also discourages aggregation. Once inside wall voids, they are difficult to remove without crushing them, so prevention is the much better approach.",
      },
      {
        question: "When are yellowjackets most aggressive in Rochester?",
        answer:
          "August and early September are the peak risk months in Rochester, when colonies reach maximum size and workers compete most aggressively for food. Ground nests in the bluff country parks and wooded residential areas around Rochester are commonly encountered during late-season yard work. Marking any discovered nest clearly and scheduling professional treatment is much safer than attempting self-treatment during the peak August aggression period.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Minneapolis", slug: "minneapolis" },
      { name: "Saint Paul", slug: "saint-paul" },
      { name: "Winona", slug: "winona" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Rochester, MN | Mice, Carpenter Ants & Boxelder Bugs",
    metaDescription:
      "Rochester pest control for house mice, carpenter ants, boxelder bugs, yellowjackets and earwigs. Olmsted County Mayo Clinic southeastern Minnesota specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
