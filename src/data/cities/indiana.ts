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
];
