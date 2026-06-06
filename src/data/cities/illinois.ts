import type { CityLocation } from "@/types";

// Illinois seed cities. Pest data reflects cold humid-continental Midwest
// patterns (University of Illinois Extension, City of Chicago).

export const illinoisCities: CityLocation[] = [
  {
    slug: "chicago",
    name: "Chicago",
    state: "Illinois",
    stateSlug: "illinois",
    stateAbbr: "IL",
    tier: "T1",
    population: "~2.7 million",
    county: "Cook County",
    climate: "cold",
    climateDriver:
      "Chicago has hard winters and warm, humid summers. The cold drives rodents and overwintering insects indoors each fall, while summer brings a short, busy run of mosquitoes and wasps.",
    topPests: ["Rats", "Cockroaches", "Mice", "Ants", "Bed Bugs"],
    pestProfile: [
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Chicago is repeatedly ranked the most rat-challenged city in the country. Norway rats burrow in alleys, gangways, and yards, then move into buildings, especially as winter sets in.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German roaches breed in heated kitchens and apartment blocks and travel between units along shared plumbing and walls.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active all winter",
        note: "As the cold arrives, mice push indoors through gaps as small as a pencil and settle in walls, basements, and older two-flats.",
      },
      {
        name: "Odorous house and pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through summer",
        note: "Pavement ants nest under sidewalks and foundations, while odorous house ants trail indoors after rain hunting sweets and moisture.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Chicago consistently ranks high for bed bug complaints, with dense apartment living helping them spread between units.",
      },
    ],
    localHook:
      "Chicago has topped the national rat rankings year after year. The Norway rats burrowing in the alleys are the same ones that head indoors the moment the temperature drops.",
    intro:
      "Pest control in Chicago is a tale of two seasons. Through the long winter the work is indoors: rats, mice, and German roaches sheltering on building heat. In the short, humid summer it shifts outdoors to ants, wasps, and mosquitoes. The rat problem is the one Chicago is known for, and it is genuinely citywide, not just a downtown issue. The defining moment of the year is fall, when the first cold snaps push rodents and overwintering insects straight into homes.",
    sections: [
      {
        heading: "Winter rodents versus summer insects",
        body: "The pest calendar here flips with the weather. In the cold months, rats and mice come indoors and German roaches ride the building heat, so the work is sealing, baiting, and exclusion. By contrast, summer is about ants trailing in after rain and wasps building under eaves. A plan that fits Chicago anticipates both, with fall exclusion as the pivot point of the year.",
      },
      {
        heading: "Why Chicago's rat problem is so persistent",
        body: "Norway rats thrive in the city's alleys, gangways, and older housing, with plenty of food from bins and gardens. They burrow outdoors in the warm months and move into basements and walls as it cools. Lasting control combines tight trash management, sealing entry points, and treating the burrows, not just trapping the rats already inside.",
      },
    ],
    prevention: [
      "Seal foundation, pipe, and door gaps before fall to keep rats and mice out.",
      "Keep bins tightly closed and clear yard food sources to cut rat numbers.",
      "Inspect secondhand furniture before bringing it in, to avoid bed bugs.",
      "Knock down small wasp nests early in summer before they grow.",
    ],
    costNote:
      "Many Chicago homes use a recurring plan that leans on fall exclusion for rodents, with bed bug work quoted separately after inspection. In multi-unit buildings, coordinated treatment is more effective. Start with a free assessment.",
    faqs: [
      {
        question: "Is Chicago really the worst city for rats?",
        answer:
          "Chicago has repeatedly been ranked the most rat-challenged city in the United States. Norway rats burrow in alleys, gangways, and yards and move into buildings as winter approaches. Control combines sealing entry points, tight trash management, and treating the burrows, not just trapping indoors.",
      },
      {
        question: "When do mice get into Chicago homes?",
        answer:
          "Mostly in fall, as the first cold pushes them indoors through gaps as small as a pencil width. They settle in walls and basements for the winter. Sealing entry points in late summer and early fall, before the rush, is the most effective defense.",
      },
      {
        question: "Why do German roaches spread in apartment buildings?",
        answer:
          "They travel between units along shared plumbing and walls and breed quickly in warm kitchens. A single-apartment treatment often sees them return, so coordinated treatment of adjoining units plus sealing the shared pathways works far better.",
      },
      {
        question: "Does Chicago have a bed bug problem?",
        answer:
          "Yes, it consistently ranks high for bed bug complaints. Dense apartment living lets them spread between units. Early inspection matters, because a thorough treatment plan beats reacting once an infestation is established.",
      },
      {
        question: "Do I need pest control in a Chicago winter?",
        answer:
          "Often yes, because the cold drives rodents and roaches indoors onto building heat, where they stay active. Winter work focuses on exclusion and interior control until the home is sealed and clear.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Evanston", slug: "evanston" },
      { name: "Naperville", slug: "naperville" },
      { name: "Aurora", slug: "aurora" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Chicago, IL | Rats, Roaches & Bed Bugs",
    metaDescription:
      "Chicago pest control for Norway rats, German roaches, fall mice, ants and bed bugs. Fall exclusion plans, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "aurora",
    name: "Aurora",
    state: "Illinois",
    stateSlug: "illinois",
    stateAbbr: "IL",
    tier: "T2",
    population: "~200,000",
    county: "Kane County",
    climate: "cold-humid",
    climateDriver:
      "Aurora is Illinois' second-largest city, located 35 miles west of Chicago along the Fox River in the Kane and DuPage county area. The cold-humid continental climate delivers cold winters with heavy snow and hot, humid summers. The Fox River valley moderates temperatures slightly compared to the open plains but the winters are cold enough to drive mice and cockroaches firmly indoors from October through April. Spring flooding along the Fox River displaces rodents and can create moisture conditions in basements and crawl spaces.",
    topPests: ["House Mice", "German Cockroaches", "Bed Bugs", "Odorous House Ants", "Yellow Jacket Wasps"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in October, active year-round once inside",
        note: "House mice are the top fall pest complaint in Aurora. The cold Illinois winters make heated structures an essential resource, and mice begin moving indoors in October. Aurora's older neighborhoods on the east side of the city have the most established entry points in aging housing stock.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are a persistent problem in Aurora's older multi-family housing, restaurants on the Galena Boulevard corridor, and commercial kitchens. They spread between units through shared walls and plumbing. Multi-unit treatment coordinated across the affected building is required for lasting control.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Bed bugs are present in Aurora's older apartment and rental housing stock. The city's position between Chicago and the suburban Fox Valley corridor means regular introduction risk through travel and furniture. Early detection is critical for cost-effective treatment.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, push indoors in rain and cold",
        note: "Odorous house ants emerge in spring and are the most common ant complaint in Aurora homes. They nest in yard mulch and wall voids and forage in kitchens for sweets. They are particularly active during and after spring rains when their outdoor habitat is saturated.",
      },
      {
        name: "Yellow jacket wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "July through October",
        note: "Yellow jackets are the most hazardous summer pest in Aurora. They build nests in wall voids, under eaves, and in the ground. Colony size peaks in August and September, when workers become aggressive. Ground nests are common in Aurora's older residential lawns.",
      },
    ],
    localHook:
      "The Fox River runs through the center of Aurora, and spring flooding along the river is a recurring event. After significant spring floods, rodents displaced from the river bottomlands push into the elevated residential neighborhoods on both sides of the valley. This predictable post-flood rodent surge is a specific Aurora pest dynamic that is less common in Fox Valley cities further from the river.",
    intro:
      "Pest control in Aurora follows the cold-humid Illinois calendar with the Fox River as a background variable. House mice arrive in October as reliably as the cold itself and remain a concern until spring. German cockroaches are a year-round urban challenge in the older multi-family and commercial stock. Bed bugs are present in the rental and apartment housing, a reflection of Aurora's position as a large, transitional urban center. Yellow jackets are the summer pest that most catches residents off guard: a wall void nest can contain thousands of workers before it becomes noticeable. Spring Fox River flooding adds a seasonal rodent displacement event.",
    sections: [
      {
        heading: "Fall mouse control in Aurora",
        body: "October is the critical month. Aurora's cold winters make heated buildings a survival resource for house mice, and they begin actively searching for entry points when outdoor temperatures drop below 50 degrees. Older homes in Aurora's east side neighborhoods, near the river, and in the city's historic downtown blocks have had decades to accumulate the settled gaps that mice use: around utility penetrations, under sill plates, and at junctions of different building materials. September exclusion work, finding and sealing those gaps before the push begins, is consistently more cost-effective than dealing with an established infestation.",
      },
      {
        heading: "Yellow jacket nests in Aurora homes",
        body: "Yellow jackets in Aurora frequently establish nests inside wall voids, particularly in older homes with weathered siding and gaps around window frames that provide indoor access. These nests go undetected through May and June when the colony is small, then become obvious in August when the workers are numerous and begin entering interior spaces. By late August a wall void nest can contain several thousand workers. The recommended approach is a residual dust treatment injected into the void through the entry point, followed by sealing the opening after the colony dies. Attempting to seal the entry without killing the colony first forces workers to chew through to an interior room.",
      },
    ],
    prevention: [
      "Complete exclusion work in September: seal utility penetrations, foundation gaps, and door sills before the October mouse push.",
      "Seal gaps around window frames and siding in June before yellow jackets establish wall void nests for the season.",
      "Keep food in sealed containers and address moisture under sinks to reduce cockroach and ant attractiveness.",
      "Inspect secondhand furniture carefully before bringing it into the home to prevent bed bug introduction.",
    ],
    costNote:
      "Aurora pest control typically starts with a free inspection. Mouse programs include exclusion and trapping. Cockroach programs in multi-unit buildings are monthly. Yellow jacket treatments are typically emergency responses quoted per nest. Ant and general pest programs are quarterly.",
    faqs: [
      {
        question: "When should I do exclusion work to keep mice out of my Aurora home?",
        answer:
          "September is the ideal month. House mice begin moving toward heated structures when outdoor temperatures drop, which in Aurora typically starts in October. Completing exclusion work in September, before the pressure begins, is the most effective approach. Key areas to address: gaps around utility pipes at the foundation, under exterior door sills, gaps around the basement window frames, and any point where different building materials meet at or near grade.",
      },
      {
        question: "Why do German cockroaches keep reappearing in my Aurora apartment?",
        answer:
          "In multi-unit buildings, German cockroaches move between units through shared utility chases, plumbing walls, and electrical conduits. Treating one unit removes the visible population temporarily, but cockroaches from adjacent untreated units repopulate within weeks. Effective control requires treating all affected units simultaneously and following up within 14 days. If you rent, request coordinated building-wide treatment through management. Within your unit, gel bait in harborage areas (under sinks, behind appliances, in cabinet hinges) is more effective than spray.",
      },
      {
        question: "How do I identify a yellow jacket nest in my Aurora home?",
        answer:
          "The most common signs are workers entering and exiting through a small gap in the siding or around a window frame, buzzing sounds from a wall cavity on a warm afternoon, or a few workers appearing inside the house in an upstairs room. The entry point is usually a gap no larger than half an inch. Do not seal the entry point while the colony is active: this forces workers to chew their way through to an interior wall. Call a pest control professional for treatment with residual dust before sealing.",
      },
      {
        question: "Is the Fox River flooding connected to rodent problems in Aurora?",
        answer:
          "Yes. When the Fox River floods its banks in spring, rodents living in the river bottomlands and the marshy areas adjacent to the floodplain are displaced upward into the surrounding neighborhoods. Properties close to the river, particularly on the lower-elevation east and south sides of the city, see measurable upticks in mouse and rat activity after significant spring flood events. This is a predictable seasonal pattern specific to Aurora's Fox River location.",
      },
      {
        question: "Are bed bugs common in Aurora?",
        answer:
          "Bed bugs are present in Aurora's older rental and apartment housing stock. Aurora's size and position between Chicago and the suburban Fox Valley corridor means regular introduction risk through travel, secondhand furniture, and shared buildings. The critical point is early detection: a small infestation of 20 to 50 bugs is contained and relatively inexpensive to treat. Waiting until the infestation is large makes the process much more involved.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Chicago", slug: "chicago" },
      { name: "Naperville", slug: "naperville" },
      { name: "Joliet", slug: "joliet" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Aurora, IL | Mice, Cockroaches & Yellow Jackets",
    metaDescription:
      "Aurora pest control for house mice, German cockroaches, bed bugs, ants and yellow jacket wasps. Kane County Fox River Valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "naperville",
    name: "Naperville",
    state: "Illinois",
    stateSlug: "illinois",
    stateAbbr: "IL",
    tier: "T2",
    population: "~149,000",
    county: "DuPage County",
    climate: "cold-humid",
    climateDriver:
      "Naperville is the largest city in DuPage County and one of the most affluent suburbs in the Chicago metro. The cold humid climate delivers harsh winters that push rodents indoors and hot humid summers that sustain mosquito, ant, and termite activity. The DuPage River corridor and the city's extensive park system create consistent mosquito and wildlife pest pressure through the warm season.",
    topPests: ["House Mice", "Carpenter Ants", "Subterranean Termites", "Mosquitoes", "Brown Marmorated Stink Bugs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Push indoors September through November, active all winter",
        note: "House mice are the top residential pest complaint in DuPage County from fall through spring. Naperville's cold, snowy winters drive mice hard into structures, and the large outdoor population sustained by the park and river corridor system makes the fall entry pressure significant. Anderson Pest Solutions, a major Chicago-area pest control company, identifies mice as the primary fall pest call in the Naperville market.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "May through September, most visible indoors in spring",
        note: "Carpenter ants are a structural pest in Naperville's older homes, particularly in the historic neighborhoods near the DuPage River where moisture from decades of freeze-thaw cycles has worked into wooden framing, sills, and decking. They tunnel through damp wood and their spring appearance indoors is a reliable indicator of a moisture problem.",
      },
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Active underground year-round, swarms in spring",
        note: "Eastern subterranean termites are present in DuPage County and are a risk for Naperville homes, particularly older properties with wood in contact with soil or compromised foundation seals. Orkin identifies subterranean termites as among the common pest risks in the Naperville area.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "May through September, peaks July through August",
        note: "The DuPage River corridor, the numerous retention ponds in Naperville's residential developments, and the extensive park system create reliable mosquito breeding habitat from late spring through early fall. DuPage County performs area-wide mosquito control but yard-level barrier spray provides additional residential protection.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Aggregate September through October, emerge late winter through spring",
        note: "Stink bugs have established throughout the Chicago suburbs including Naperville. They aggregate on south-facing walls in September and October and push into wall voids and attics to overwinter. When warm interior temperatures in late winter activate them, they emerge through cracks and electrical outlets inside the home.",
      },
    ],
    localHook:
      "Naperville consistently ranks among the best places to live in the US, but its desirable character (large lots, mature trees, DuPage River corridor, excellent parks) creates significant carpenter ant, termite, mosquito, and rodent pressure that is somewhat higher than the typical Chicago suburb.",
    intro:
      "Pest control in Naperville follows the Chicago metro seasonal pattern but with higher-than-average pressure from the natural features that make the city attractive. House mice are the fall and winter priority. Carpenter ants and termites represent the structural risks in the older housing stock. Mosquitoes are active through a long summer season along the DuPage River and retention pond network. Stink bugs are a well-established fall nuisance throughout DuPage County.",
    sections: [
      {
        heading: "Carpenter ants in Naperville's older neighborhoods",
        body: "Naperville's downtown and near-downtown neighborhoods include homes from the 1900s through the 1960s where decades of Midwest freeze-thaw cycles have introduced moisture into wooden structures. Carpenter ants are among the top structural pest concerns in those areas. Finding them indoors in spring, particularly in numbers, signals a colony established in damp or damaged wood. Treating the ant colony and addressing the moisture problem together is the complete solution. Treating only the ants without finding and fixing the moisture leaves the conditions that will attract the next colony.",
      },
      {
        heading: "Mosquitoes along the DuPage River",
        body: "Naperville's park and trail system along the DuPage River is one of the city's most valued features and also one of its most consistent mosquito breeding corridors. Properties within several blocks of the river and its associated green spaces, as well as homes adjacent to retention ponds in the residential developments that characterize most of Naperville, experience above-average mosquito pressure from May through September. Monthly barrier spray applied to yard and fence vegetation provides 80 to 90 percent reduction in yard mosquito populations through the season.",
      },
    ],
    prevention: [
      "Seal foundation gaps, utility penetrations, and chimney chases in late August before the fall mouse entry season.",
      "Inspect wooden sills, decking, and soffits for moisture damage that enables carpenter ant infestation.",
      "Seal attic vents and wall gaps before September to block stink bug overwintering entry.",
      "Eliminate standing water in gutters, plant trays, and retention pond edges to reduce mosquito breeding.",
    ],
    costNote:
      "A fall rodent exclusion and a spring carpenter ant inspection are the two most important seasonal services for most Naperville homes. A quarterly general pest program handles perimeter pests year-round. Mosquito barrier spray from May through September is practical for properties near the DuPage River and retention ponds.",
    faqs: [
      {
        question: "When is the worst month for mice in Naperville?",
        answer:
          "October and November are the peak entry months when the first hard frosts drive mice to seek shelter. Mice are active indoors all winter once they are in. The practical prevention window is September, before the hard freeze arrives. Exclusion sealing of foundation gaps and utility penetrations in September addresses the problem before it starts.",
      },
      {
        question: "How do I tell carpenter ants from termites in my Naperville home?",
        answer:
          "Carpenter ant swarmers have elbowed antennae, pinched waists, and unequal wings (front wings larger than back wings). Termite swarmers have straight antennae, broad waists, and equal-length wings. Carpenter ants chew tunnels and push coarse sawdust-like frass out of their galleries. Termites consume wood and leave no frass but may leave mud tubes on foundation walls. Either sighting indoors in spring warrants a professional inspection.",
      },
      {
        question: "Are there termites in Naperville?",
        answer:
          "Yes. Eastern subterranean termites are present in DuPage County and are an established pest in the Chicago suburbs. Naperville properties with aging foundation seals, wood in contact with soil, or moisture problems are at elevated risk. Annual inspections for older homes are appropriate given the termite pressure across the northern Illinois region.",
      },
      {
        question: "How bad are mosquitoes near the DuPage River in Naperville?",
        answer:
          "Properties within a few blocks of the river corridor and adjacent to retention ponds see significantly higher mosquito pressure than properties further from standing water. DuPage County's mosquito control district runs larvicide treatments over known breeding areas, but that program does not reach every residential yard. Monthly barrier spray from May through September provides strong protection for individual properties.",
      },
      {
        question: "What should I do if stink bugs are coming out of my walls in Naperville in winter?",
        answer:
          "Stink bugs that have overwintered in your wall voids emerge when interior heat warms them in late winter. They are looking for a way outside and will typically appear near windows and light fixtures. Vacuum removal (without crushing them) is the practical indoor approach. Do not spray pesticides inside the walls chasing them: it is ineffective and unnecessary. The population decreases through spring as they exit. Next fall, sealing the gaps they used to enter before September prevents the following year's overwintering.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Aurora", slug: "aurora" },
      { name: "Lisle", slug: "lisle" },
      { name: "Bolingbrook", slug: "bolingbrook" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Naperville, IL | Mice, Carpenter Ants, Termites & Mosquitoes",
    metaDescription:
      "Naperville pest control for house mice, carpenter ants, subterranean termites, mosquitoes and stink bugs. DuPage County Chicago suburb specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
