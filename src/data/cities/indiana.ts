import type { CityLocation } from "@/types";

// Indiana seed cities. Pest data reflects cold humid-continental Midwest
// patterns (Purdue Extension).

export const indianaCities: CityLocation[] = [
  {
    slug: "indianapolis",
    name: "Indianapolis",
    state: "Indiana",
    stateSlug: "indiana",
    stateAbbr: "IN",
    tier: "T1",
    population: "~880,000",
    county: "Marion County",
    climate: "cold",
    climateDriver:
      "Indianapolis has four clear seasons, with cold winters and warm, humid summers. The cold pushes rodents and overwintering insects indoors each fall, while summer brings ants and stinging insects.",
    topPests: ["Mice", "Ants", "Cockroaches", "Wasps", "Spiders"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active all winter",
        note: "When the cold arrives, mice push indoors through gaps as small as a pencil and nest in walls, basements, and attics.",
      },
      {
        name: "Odorous house and carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through summer",
        note: "Odorous house ants trail indoors after rain, while carpenter ants tunnel into damp wood and often signal a moisture problem.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German roaches breed in warm kitchens and rentals and move between units through shared walls and plumbing.",
      },
      {
        name: "Yellowjackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "Wasp nests build through summer and turn aggressive around food and trash by late season.",
      },
      {
        name: "Spiders",
        serviceSlug: "spider-control",
        activeSeason: "More visible in late summer and fall",
        note: "Common house spiders and the occasional larger species move indoors as the weather cools, following the insects they hunt.",
      },
    ],
    localHook:
      "Ask anyone in Indianapolis when the mice show up and they will say the same thing: the first cold week of fall. That is the moment the pest year really begins here.",
    intro:
      "If you live in Indianapolis, you already know the pest calendar tracks the weather. Summer brings ants under the kitchen sink and wasps under the eaves. Then fall arrives, and mice head indoors in a hurry, looking for somewhere warm to spend the winter. German roaches are the steady indoor problem in rentals and apartments. The good news is that a home sealed up before the first cold snap usually stays quiet, so the smart move is to get ahead of it in late summer.",
    sections: [
      {
        heading: "Getting ahead of the fall mouse rush",
        body: "Here is the pattern every year: as soon as the nights turn cold, mice look for a way in, and a gap the width of a pencil is enough. Once they are in the walls, they are harder to clear than they are to keep out. The work that pays off is exclusion in late summer, sealing the foundation, pipe, and door gaps before the rush starts, paired with a few well-placed traps to catch any early arrivals.",
      },
      {
        heading: "Carpenter ants and the damp-wood connection",
        body: "Worth knowing: carpenter ants do not eat wood, they tunnel through it, and they go for wood that is already damp or damaged. Finding them indoors in spring often points to a leak or a ventilation problem behind the scenes. A good inspection treats the ants and tracks down the moisture, so you are not back in the same spot next year.",
      },
    ],
    prevention: [
      "Seal foundation, pipe, and door gaps in late summer to keep mice out.",
      "Fix leaks and damp wood, which is what draws carpenter ants indoors.",
      "Knock down small wasp nests early in summer before they grow.",
      "Reduce clutter in garages and basements to limit spider harborage.",
    ],
    costNote:
      "Many Indianapolis homes do well with fall exclusion plus a spring follow-up rather than year-round service, given the short outdoor season. A free inspection sets the plan to your home and the season.",
    faqs: [
      {
        question: "When do mice get into Indianapolis homes?",
        answer:
          "Mostly in fall, when the first cold weather pushes them indoors through gaps as small as a pencil width. They nest in walls, basements, and attics for the winter. Sealing entry points in late summer, before the rush, is the most effective defense.",
      },
      {
        question: "Are carpenter ants a sign of a bigger problem?",
        answer:
          "Often, yes. Carpenter ants prefer damp or damaged wood, so finding them indoors can point to a leak or poor ventilation. The lasting fix addresses both the ants and the moisture source behind them.",
      },
      {
        question: "When are wasps worst in Indianapolis?",
        answer:
          "Paper wasp and yellowjacket nests grow through summer and are largest and most aggressive in late summer around eaves, decks, and sheds. Removing small nests early in the season is much easier and safer than dealing with a mature one.",
      },
      {
        question: "Why do roaches spread in apartments here?",
        answer:
          "German roaches breed quickly in warm kitchens and travel between units through shared walls and plumbing. A single-unit treatment often sees them return, so coordinated treatment and sealing shared pathways works better.",
      },
      {
        question: "Do I need pest control in an Indiana winter?",
        answer:
          "The outdoor season is short, so many homes focus on fall exclusion and a spring follow-up. If mice are already inside over winter, treatment continues until the home is sealed and clear.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Carmel", slug: "carmel" },
      { name: "Fishers", slug: "fishers" },
      { name: "Bloomington", slug: "bloomington-in" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Indianapolis, IN | Fall Mice, Ants & Wasps",
    metaDescription:
      "Indianapolis pest control for fall mice, carpenter and odorous house ants, German roaches, wasps and spiders. Fall exclusion, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "fort-wayne",
    name: "Fort Wayne",
    state: "Indiana",
    stateSlug: "indiana",
    stateAbbr: "IN",
    tier: "T2",
    population: "~265,000",
    county: "Allen County",
    climate: "cold-humid",
    climateDriver:
      "Fort Wayne sits at the confluence of the St. Marys, St. Joseph, and Maumee rivers in northeastern Indiana. The cold-humid continental climate delivers hard winters and warm, humid summers. Winters drive rodents indoors and trigger boxelder bug and stink bug overwintering invasions in fall. Summer humidity sustains mosquito populations along the river corridors. Carpenter ants exploit the region's older housing stock, much of it with aging wooden sills and frames that hold moisture.",
    topPests: [
      "House Mice",
      "Carpenter Ants",
      "Stink Bugs",
      "Mosquitoes",
      "German Cockroaches",
    ],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors September through April",
        note:
          "Fort Wayne's cold winters push house mice into structures through any gap at the foundation or utility penetration. The Maumee River corridor and the city's older residential neighborhoods give mice plenty of ground-level harborage before they make the move inside in fall.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "March through October, peak May to July",
        note:
          "Fort Wayne's housing stock includes many older homes with wooden sills and frames that absorb moisture from the river valley air. Carpenter ants exploit any damp wood, and finding them indoors in spring is a reliable indicator of a moisture problem in the structure. Purdue University Extension documents carpenter ants as among the most common structural pests in northern Indiana.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Invade September and October, emerge in spring",
        note:
          "Stink bugs have spread across Indiana and are now a reliable fall pest in Fort Wayne. They aggregate on sun-warmed exterior walls in September before pushing into wall voids and attics to overwinter. Perimeter treatment in late summer and sealing exterior gaps before they enter is the practical management approach.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "May through September",
        note:
          "The three rivers converging in Fort Wayne create significant floodplain and wetland habitat that sustains mosquito populations through the warm season. Low-lying areas of Allen County regularly see elevated mosquito activity after rain events. The Indiana State Department of Health monitors West Nile virus statewide and Allen County sees activity most years.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are the indoor cockroach of concern in Fort Wayne, concentrated in multi-family housing, restaurant kitchens, and older homes. They travel between units through shared walls and plumbing and reproduce fast enough that a small problem becomes a significant infestation in weeks without intervention.",
      },
    ],
    localHook:
      "The three rivers that put Fort Wayne on the map, the St. Marys, the St. Joseph, and the Maumee, also sustain the mosquito populations, the floodplain moisture, and the river-corridor wildlife that drive pest pressure here. It's a genuinely challenging pest environment, and the seasonal timing is everything.",
    intro:
      "Fort Wayne pest control tracks the seasons closely. Fall brings the stink bug and mouse rush indoors as temperatures drop along the Maumee River corridor. Carpenter ants appear in spring and often point to moisture problems in the older housing stock. Mosquitoes run through the warm months along the three river floodplains. German cockroaches are the year-round indoor problem in apartments and rentals. Much of this is seasonal and manageable with the right timing.",
    sections: [
      {
        heading: "Fall exclusion: the most productive pest investment in Fort Wayne",
        body: "The fall pest rush in Fort Wayne is real and predictable. Stink bugs aggregate on exterior walls in September. Mice start testing the foundation and utility gaps when the first cold weeks arrive. Boxelder bugs mass on south-facing walls before pushing inside. A thorough exclusion visit in late August or early September, sealing the foundation, utility penetrations, and soffit gaps before these pressures peak, prevents weeks of trapping and control work later. The cost of prevention is consistently lower than the cost of elimination after the fact.",
      },
      {
        heading: "Carpenter ants and Fort Wayne's aging housing stock",
        body: "A lot of Fort Wayne's neighborhoods have housing from the early to mid-20th century. These are good homes, but older wooden sills, frames, and soffits absorb moisture from the humid river-valley air over decades. Carpenter ants tunnel through damp or damaged wood to build nests, and finding them indoors in spring is typically a signal that moisture has been working on a structural element somewhere. The most useful treatment addresses both the ant colony and the underlying moisture problem, so you're not repeating the same service the following spring.",
      },
    ],
    prevention: [
      "Seal foundation, pipe, and utility gaps in late August before the fall mouse and stink bug rush.",
      "Fix moisture issues in wooden sills, soffits, and crawlspaces to eliminate carpenter ant harborage.",
      "Eliminate standing water in yards, gutters, and low spots to cut mosquito breeding near the home.",
      "Treat the perimeter in early September before stink bugs enter for overwintering.",
    ],
    costNote:
      "Fort Wayne pest control is often structured around the seasons: fall exclusion plus a spring carpenter ant and general pest inspection covers the majority of what most homes need. Year-round programs make sense for multi-family buildings and homes with persistent cockroach or rodent pressure.",
    faqs: [
      {
        question: "When should I expect mice in my Fort Wayne home?",
        answer:
          "The pattern is consistent: once nighttime temperatures drop into the 40s in September or October, mice start pressing in through gaps at the foundation and utility penetrations. Fort Wayne's cold winters make indoor shelter essential for mice from roughly October through April. Exclusion sealing in August or September, before the first cold snap, keeps them out.",
      },
      {
        question: "Are carpenter ants a serious problem in Fort Wayne?",
        answer:
          "They are, particularly in older neighborhoods with aging wooden construction. Carpenter ants do not eat wood, but they excavate galleries in damp or damaged wood to nest. Finding them in the kitchen in spring often points to a moisture issue in the wall, sill, or crawlspace. The treatment that lasts addresses both the ants and the moisture driving them.",
      },
      {
        question: "Why do stink bugs show up in fall in Fort Wayne?",
        answer:
          "Brown marmorated stink bugs spread across Indiana over the past decade and are now a reliable fall pest. They aggregate on exterior walls in September, using the warmth of the sun before entering wall voids to overwinter. A perimeter spray in early September and sealing exterior gaps cuts off the overwintering entry significantly.",
      },
      {
        question: "Is mosquito control worth it along Fort Wayne's rivers?",
        answer:
          "For properties near the Maumee, St. Marys, or St. Joseph river corridors, or with standing water on the property, seasonal barrier programs make a practical difference. The floodplain habitat near the rivers sustains breeding populations that can overwhelm any single property's source-reduction efforts. Monthly spray programs from May through September provide consistent relief.",
      },
      {
        question: "Do I need pest control year-round in Fort Wayne?",
        answer:
          "For a single-family home with no active infestation, fall exclusion plus a spring inspection covers the seasonal peaks. For rental properties, apartments, or homes with current mouse or cockroach problems, year-round monitoring and service makes more sense. A free inspection will tell you which category your home falls into.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Huntington", slug: "huntington-in" },
      { name: "Auburn", slug: "auburn-in" },
      { name: "Angola", slug: "angola-in" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle:
      "Pest Control in Fort Wayne, IN | Mice, Carpenter Ants & Stink Bugs",
    metaDescription:
      "Fort Wayne pest control for house mice, carpenter ants, stink bugs, mosquitoes and German cockroaches. Allen County three-rivers corridor specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "evansville",
    name: "Evansville",
    state: "Indiana",
    stateSlug: "indiana",
    stateAbbr: "IN",
    tier: "T2",
    population: "~117,000",
    county: "Vanderburgh County",
    climate: "hot-humid",
    climateDriver:
      "Evansville sits in Vanderburgh County in the southwestern corner of Indiana on the Ohio River, with one of Indiana's warmest climates. The city's position at the Ohio River valley floor creates a hot, humid summer environment that is closer to Kentucky's climate than to northern Indiana's. The Ohio River is the most significant ecological influence on Evansville's pest profile: it creates year-round moisture conditions that sustain subterranean termite colonies in the river valley soils, supports mosquito breeding in the floodplain areas, and sustains riverside rat populations that press into the city's residential neighborhoods. The long, warm growing season compared to Indianapolis means pests that are seasonal threats further north are active for longer in Evansville.",
    topPests: ["Termites", "Mosquitoes", "German Cockroaches", "House Mice", "Fire Ants"],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Year-round activity, swarms in spring",
        note: "Eastern subterranean termites are active across Vanderburgh County and the Ohio River corridor. Evansville's warm, moist climate, significantly warmer than northern Indiana, allows larger and more active termite colonies than cities in the northern part of the state. Purdue University Extension identifies the Ohio River valley as an elevated termite pressure zone within Indiana.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October, peak May through August",
        note: "The Ohio River floodplain and the wetland areas in southwestern Vanderburgh County create significant mosquito breeding habitat near Evansville. The Indiana State Department of Health monitors West Nile virus statewide each summer, and Vanderburgh County has had confirmed detections. The river's backwater areas sustain breeding through dry periods when other standing water dries up.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are a consistent concern in Evansville's apartment buildings and commercial food service establishments along the US-41 corridor and downtown. The city's older housing stock and the multi-family rental market near the University of Southern Indiana campus sustain German cockroach populations in the urban core.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Push indoors October through March, active year-round once inside",
        note: "House mice are a fall pest in Evansville's residential neighborhoods. Indiana winters drive mice into heated structures, though Evansville's warmer Ohio River valley climate means the push is slightly later than in northern Indiana, typically October and November. The city's older neighborhoods near the river bottom have aging foundations with the entry conditions that sustain consistent mouse pressure.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Active May through October, mounds swell after summer rain",
        note: "Fire ants are present in Vanderburgh County and across the southwestern corner of Indiana. Evansville sits at the northern edge of the established fire ant range in the Midwest, and Purdue University Extension has documented fire ant presence in the Ohio River valley counties of Indiana. Mound activity is most visible during the warm months after rain events.",
      },
    ],
    localHook:
      "Evansville's position on the Ohio River places it at the northern fringe of the established fire ant range in the Midwest, a fact that surprises many residents who assume fire ants are a southern problem. Purdue University Extension has documented fire ant presence in Vanderburgh County and the other Ohio River counties of Indiana, noting that the warmer Ohio River valley microclimate allows the species to sustain populations at latitudes where it cannot survive inland in the state.",
    intro:
      "Pest control in Evansville reflects the city's unique position at the Ohio River valley floor in Indiana's warmest corner. Subterranean termites are active year-round in the river valley's moist soils, at higher pressure than northern Indiana. Mosquitoes breed in the Ohio River floodplain and the southwestern Vanderburgh County wetlands through the summer. German cockroaches are a year-round concern in the older multi-family housing and commercial corridors. House mice push in from October. Fire ants, present at the northern edge of their established Midwest range, are active through the warm months in Vanderburgh County lawns.",
    sections: [
      {
        heading: "Termite risk in the Ohio River valley",
        body: "The Ohio River valley has a warmer, moister microclimate than the surrounding Indiana landscape, and that climate difference produces termite pressure that is noticeably higher than you find in cities just 50 miles to the north. Purdue University Extension's pest management resources identify the Ohio River valley counties as an elevated termite zone within Indiana. Eastern subterranean termites in the Evansville area can sustain larger colonies and cause damage more rapidly than their counterparts in Fort Wayne or South Bend. Annual termite inspections are the responsible baseline for Evansville homeowners. Homes in the lower-lying neighborhoods near the Ohio River, including the older riverside districts of downtown and the west side neighborhoods near the river bottoms, face above-average termite pressure due to the consistently moist soil conditions. A liquid soil barrier treatment plus annual monitoring provides active protection.",
      },
      {
        heading: "Fire ants at the Indiana frontier",
        body: "Evansville's Vanderburgh County represents one of the northernmost areas in the Midwest where red imported fire ants have established self-sustaining populations. Purdue University Extension has confirmed fire ant presence in the Ohio River counties of Indiana, attributing the northward push to the warmer microclimate of the river valley. For Evansville homeowners, this means a pest that most Indiana residents consider a southern problem is a genuine concern in their yards. Fire ant colonies are active from May through October, with mound-building most visible after summer rain events. The Texas A&M two-step management approach, broadcast bait across the lawn followed by individual mound treatment, is effective at the Ohio River valley latitude. Mounds that are not treated may persist through mild Evansville winters, though severe cold years can reduce colony viability at this northern fringe.",
      },
    ],
    prevention: [
      "Schedule an annual termite inspection given Evansville's elevated Ohio River valley termite pressure compared to the rest of Indiana.",
      "Apply fire ant broadcast bait across the lawn in May before summer rain events trigger mound expansion.",
      "Eliminate standing water in the Ohio River floodplain-adjacent yards and retention areas to reduce mosquito breeding.",
      "Seal foundation gaps and utility penetrations before October to exclude mice ahead of Indiana's winter cold.",
    ],
    costNote:
      "Evansville pest services start with a free inspection. Termite programs include annual monitoring plus liquid treatment and are priced after a structure assessment. Fire ant programs are twice-yearly given the Ohio River valley's longer active season. Mosquito barrier programs run April through October. Cockroach and mouse programs are quoted after inspection.",
    faqs: [
      {
        question: "Are termites really that bad in Evansville compared to the rest of Indiana?",
        answer:
          "Yes. Purdue University Extension identifies the Ohio River valley counties, including Vanderburgh County, as an elevated termite pressure zone within Indiana. The warmer, moister microclimate of the river valley supports larger termite colonies and more rapid structural damage than the cooler areas of the state. Annual inspections and an active protection program are appropriate for all Evansville homeowners, particularly for those in the older neighborhoods near the river.",
      },
      {
        question: "Are fire ants really present in Evansville?",
        answer:
          "Yes. Purdue University Extension has confirmed red imported fire ant presence in Vanderburgh County and the other Ohio River counties of Indiana. The warmer Ohio River valley microclimate allows fire ant populations to persist at latitudes where they cannot survive inland. Evansville homeowners should treat active mounds and apply perimeter bait in spring. Mild winters allow colonies to persist; severe winters may reduce viability, but populations recover quickly in warm springs.",
      },
      {
        question: "When are mosquitoes worst in Evansville?",
        answer:
          "May through August are the most intense months, with the Ohio River floodplain and the southwestern Vanderburgh County wetlands providing persistent breeding habitat through dry periods. The Indiana State Department of Health monitors West Nile virus across the state, and Vanderburgh County has had confirmed detections. A monthly perimeter barrier treatment and elimination of standing water on the property are the most effective residential measures from April through October.",
      },
      {
        question: "Why are German cockroaches persistent in Evansville's older apartments?",
        answer:
          "German cockroaches spread between units in connected apartment buildings through shared plumbing chases and wall voids. Treating one unit without coordinating adjacent units moves the cockroaches rather than reducing them. A building-wide gel bait program is more effective than spray-based approaches. Evansville's older apartment stock near downtown and the USI campus has the connected building conditions that sustain cockroach populations through tenant turnover.",
      },
      {
        question: "When should I worry about mice in Evansville?",
        answer:
          "October and November are the primary entry months as Indiana winters arrive in the Ohio River valley. Evansville's warmer position means the push starts slightly later than in Fort Wayne or Indianapolis. The older riverside neighborhoods have aging foundations with gaps that provide reliable mouse entry year after year. A professional exclusion inspection in September, before the cold arrives, identifies and seals those entry points and breaks the annual cycle.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Owensboro", slug: "owensboro-ky" },
      { name: "Henderson", slug: "henderson-ky" },
      { name: "Indianapolis", slug: "indianapolis" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Evansville, IN | Termites, Mosquitoes & Fire Ants",
    metaDescription:
      "Evansville pest control for subterranean termites, mosquitoes, German cockroaches, house mice and fire ants. Vanderburgh County Ohio River valley Indiana specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
