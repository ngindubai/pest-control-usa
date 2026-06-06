import type { CityLocation } from "@/types";

// South Carolina city data. Pest intelligence verified against Clemson University Extension Service.

export const southCarolinaCities: CityLocation[] = [
  {
    slug: "columbia",
    name: "Columbia",
    state: "South Carolina",
    stateSlug: "south-carolina",
    stateAbbr: "SC",
    tier: "T2",
    population: "~140,000",
    county: "Richland County",
    climate: "hot-humid",
    climateDriver:
      "Columbia is the state capital of South Carolina, located in the Midlands region where the Piedmont meets the coastal plain. The hot, humid climate delivers long, hot summers and mild winters with occasional frost but rarely sustained cold. The Congaree River to the south, including Congaree National Park, and the Broad River to the west create riparian corridors that sustain year-round mosquito and tick habitat. Clemson University Extension identifies South Carolina as a high termite-pressure state, and Columbia sits in the inland high-activity zone.",
    topPests: ["Eastern Subterranean Termites", "Mosquitoes", "Fire Ants", "American Cockroaches", "Brown Recluse Spiders"],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms in spring (March through April), active year-round underground",
        note: "Eastern subterranean termites are present throughout Richland County at high population densities. The warm, moist Midlands soils and the high annual rainfall sustain termite colonies that are active most of the year. Clemson University Extension identifies the South Carolina Midlands as an area of sustained termite pressure where annual inspections and proactive protection are standard practice.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "March through October",
        note: "Columbia's position between the Congaree and Broad rivers creates sustained mosquito breeding habitat from the river bottomlands and the low-lying areas throughout the city. The South Carolina Department of Health and Environmental Control monitors mosquito-borne illness activity annually in the Columbia metropolitan area.",
      },
      {
        name: "Fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most visible spring through fall",
        note: "Red imported fire ants are established throughout Columbia's lawns and public spaces. The Richland County soils and the warm Midlands climate sustain year-round fire ant activity. New development in the growing residential areas north and east of the city consistently produces heavy fire ant pressure on freshly disturbed land.",
      },
      {
        name: "American cockroaches (Palmetto bugs)",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, surge during rain and heat",
        note: "American cockroaches are called Palmetto bugs across South Carolina. They live in Columbia's drainage system, mulch, and organic debris and push into buildings during heavy rain. The older neighborhoods in Shandon, Elmwood Park, and the Vista district see regular Palmetto bug entry during wet weather.",
      },
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spaces, most active spring and fall",
        note: "Brown recluse spiders are present in Columbia and throughout South Carolina. Clemson University Extension notes that brown recluse are found statewide. They shelter in undisturbed storage areas: garages, closets, cardboard boxes, and under furniture. The bite is slow to heal and can cause significant tissue damage.",
      },
    ],
    localHook:
      "Congaree National Park, immediately south of Columbia, is the largest intact expanse of old-growth bottomland hardwood forest in the Southeast. That forest floor, with its persistent flooding and deep organic matter, is exceptional termite and mosquito habitat. Properties on the south side of Columbia, particularly those bordering the Congaree River bottomlands, see pest pressure from the park's ecological margins.",
    intro:
      "Pest control in Columbia is shaped by the Midlands climate and the river corridors that frame the city. Eastern subterranean termites are active throughout Richland County and the warm, moist soils sustain colonies that work year-round. Mosquitoes breed in the Congaree and Broad river bottomlands from March through October. Fire ants are in every lawn. Palmetto bugs move from the drainage system into homes during rain. Brown recluse spiders are present statewide and are a genuine concern in garages and storage areas.",
    sections: [
      {
        heading: "Termite protection in the South Carolina Midlands",
        body: "South Carolina is consistently ranked among the higher-termite-risk states in the Southeast, and the Midlands around Columbia is an active zone within that ranking. The combination of warm temperatures, high annual rainfall, and moist river corridor soils keeps eastern subterranean termite colonies active from February through November. Annual inspections are the standard recommendation from Clemson University Extension for all Richland County properties. Homes with crawl spaces, wood near grade, or deck posts in soil contact are at elevated risk. A proactive protection plan, either liquid soil treatment or a baiting system, prevents damage that would otherwise accumulate undetected.",
      },
      {
        heading: "Palmetto bugs: managing the outdoor-indoor transition",
        body: "American cockroaches (Palmetto bugs) are part of daily outdoor life in Columbia, and the question for most homeowners is how to prevent them from becoming indoor residents. They live in the storm drain system, in mulch, and under leaf litter and push inside during heavy rain events when their outdoor habitat is saturated. The entry points are almost always at the plumbing level: gaps around pipe penetrations under sinks and in walls, floor drain covers that do not seal completely, and gaps around exterior door sills. Sealing those points and maintaining door sweeps addresses the primary transition pathway. A perimeter treatment reduces outdoor population pressure.",
      },
    ],
    prevention: [
      "Maintain annual termite inspections: Richland County is in a high-activity zone and inspections are standard practice here.",
      "Eliminate standing water from containers, gutters, and yard low spots to reduce mosquito breeding.",
      "Seal plumbing penetrations and install floor drain covers to reduce Palmetto bug entry during rain.",
      "Store items in sealed plastic bins rather than cardboard in garages to reduce brown recluse harborage.",
    ],
    costNote:
      "Columbia pest control typically starts with a free inspection. Termite protection plans are strongly recommended for all properties and are usually annual. Mosquito programs run March through October. General pest programs for Palmetto bugs, fire ants, and spiders are quarterly.",
    faqs: [
      {
        question: "Are termites a serious risk in Columbia?",
        answer:
          "Yes. South Carolina is a high termite-pressure state and Columbia's Midlands climate and river corridor soils sustain eastern subterranean termite populations that are active most of the year. Clemson University Extension recommends annual inspections and proactive protection for all South Carolina properties. By the time termite damage is visible, the colony has typically been working for two to five years.",
      },
      {
        question: "What is a Palmetto bug and how do I keep them out of my Columbia home?",
        answer:
          "Palmetto bug is the common name for the American cockroach in the Carolinas. They are large (1.5 to 2 inches), reddish-brown roaches that live primarily outdoors in the drainage system, mulch, and organic debris. They enter homes through plumbing gaps, drain connections, and under-door gaps. Sealing pipe penetrations under sinks, installing door sweeps, and clearing mulch from the foundation perimeter are the most effective prevention steps. A perimeter treatment also reduces the outdoor population.",
      },
      {
        question: "How long is mosquito season in Columbia?",
        answer:
          "March through October in most years. The Congaree River bottomlands and the Broad River corridor provide breeding habitat that sustains populations from early spring through late fall. Properties near the river systems see earlier spring activity and later fall activity than those in the city's interior. Source reduction in the yard and a perimeter barrier treatment through the peak season are the effective management tools.",
      },
      {
        question: "Are brown recluse spiders common in Columbia?",
        answer:
          "They are present throughout South Carolina and are encountered regularly in Columbia's garages, attic spaces, and undisturbed storage areas. Clemson University Extension notes that brown recluse are found statewide. The bite causes a slow-healing wound that can involve significant tissue damage. Using sealed plastic storage bins, wearing gloves when working in undisturbed spaces, and periodic spider treatment of the perimeter and harborage areas reduce the risk.",
      },
      {
        question: "Are fire ants a problem in Columbia neighborhoods?",
        answer:
          "Yes. Red imported fire ants are established throughout Richland County and Columbia's warm Midlands climate keeps them active much of the year. New residential development consistently produces elevated fire ant pressure because construction disturbs soil that fire ants re-colonize quickly. Broadcast bait treatment of the full lawn twice a year is the Clemson University Extension recommendation for ongoing management.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Lexington", slug: "lexington" },
      { name: "Sumter", slug: "sumter" },
      { name: "Augusta", slug: "augusta" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Columbia, SC | Termites, Mosquitoes & Fire Ants",
    metaDescription:
      "Columbia pest control for subterranean termites, mosquitoes, fire ants, Palmetto bugs and brown recluse spiders. Richland County Midlands specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "charleston",
    name: "Charleston",
    state: "South Carolina",
    stateSlug: "south-carolina",
    stateAbbr: "SC",
    tier: "T2",
    population: "~150,000",
    county: "Charleston County",
    climate: "hot-humid",
    climateDriver:
      "Charleston sits on a peninsula between the Ashley and Cooper rivers on the South Carolina Lowcountry coast. The subtropical climate delivers hot, humid summers and mild winters with no significant freeze. The tidal marshes, the river estuaries, the historic tree canopy of the older neighborhoods, and the proximity to the Atlantic coast create conditions that sustain year-round termite, cockroach, and mosquito activity. Charleston is one of the most significant Formosan subterranean termite cities in the United States.",
    topPests: ["Formosan Termites", "Cockroaches", "Mosquitoes", "Fire Ants", "Rodents"],
    pestProfile: [
      {
        name: "Formosan subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm May through July, active year-round underground",
        note: "Charleston is one of the most heavily Formosan termite-affected cities in the US. The South Carolina Department of Pesticide Regulation and Clemson University Extension both identify Charleston County as within the established Formosan termite zone. Formosan colonies are significantly larger than native subterranean termite colonies and can cause structural damage faster. They swarm in warm evenings from May through July, often near lights.",
      },
      {
        name: "American cockroaches (Palmetto bugs) and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, worst in summer",
        note: "American cockroaches, called Palmetto bugs in the Lowcountry, are ubiquitous across Charleston. They breed in the storm drain infrastructure, the tidal areas, and the dense urban vegetation and fly toward lights on warm summer evenings. German cockroaches are the primary species in the restaurant and commercial kitchen district downtown.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Year-round, peak May through October",
        note: "Charleston's tidal marshes, the river estuaries, and the dense subtropical vegetation surrounding the historic city create extraordinary mosquito habitat. The Charleston area has mosquito species that breed in salt marshes and fresh water. Eastern equine encephalitis and West Nile virus are both monitored in the region.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, surge after rain",
        note: "Fire ants are pervasive across Charleston County. The mild Lowcountry winters give them no significant break, and the spring and summer rains trigger rapid mound rebuilding. The expanding suburban areas north and west of Charleston see heavy fire ant pressure as new development disrupts soil that fire ants recolonize quickly.",
      },
      {
        name: "Roof rats and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats are the dominant rodent in Charleston's historic neighborhoods, climbing through the mature tree canopy and along the utility lines of the older streets. The peninsular location and the historic building stock, with its gaps and aging construction, provides exceptional rat habitat.",
      },
    ],
    localHook:
      "Charleston is recognized nationally as one of the cities with the most significant Formosan subterranean termite infestations in the US. Clemson University Extension identifies Charleston County as within the established Formosan zone. The combination of the warm coastal climate, the historic wooden building stock, and the decades-long presence of the invasive Formosan species makes annual termite inspections and active termite protection non-negotiable for any Charleston property owner.",
    intro:
      "Pest control in Charleston is defined by its Lowcountry coastal location and its history. Formosan subterranean termites are the most consequential pest in the city: Charleston is nationally recognized as one of the most affected Formosan termite cities in the country, with the warm coastal climate and the historic wooden building stock providing ideal conditions. American cockroaches, called Palmetto bugs locally, are a year-round feature of the urban environment. Mosquitoes are sustained by the tidal marshes and estuaries surrounding the peninsula. Fire ants are active year-round with no meaningful winter break. Roof rats are established in the historic tree canopy.",
    sections: [
      {
        heading: "Formosan termites: Charleston's most significant pest concern",
        body: "Formosan subterranean termites are an invasive species from East Asia that established in the Gulf Coast and Southeastern US and have created serious structural damage in cities across the region. Charleston is among the most significantly affected cities in the country. Clemson University Extension and the South Carolina Department of Pesticide Regulation both confirm Charleston County is within the established Formosan zone. Formosan colonies are estimated to be ten times larger than native subterranean termite colonies. A mature Formosan colony can contain millions of workers and can consume wood at a rate that causes structural damage in months rather than the years a native colony would take. They swarm on warm evenings in May through July, often around lights. Every Charleston property owner should maintain active termite protection, and any property without a current inspection and treatment plan is at meaningful risk.",
      },
      {
        heading: "Palmetto bugs and the Charleston urban environment",
        body: "American cockroaches are called Palmetto bugs in the South Carolina Lowcountry, and in Charleston they are as much a fixture of the urban environment as the cobblestone streets. They breed in the city's storm drain infrastructure, the tidal areas, and the dense subtropical ground cover, and they are drawn toward lights on warm summer evenings. They fly, which surprises residents from colder climates. Indoors, they seek moisture and shelter in basements, under appliances, and in areas near plumbing. The historic district's older building stock and the density of restaurants and food service operations in the entertainment areas sustain a large urban population. Perimeter treatment of the foundation and sealing ground-level entry points manages the indoor side, but the outdoor population in the Lowcountry environment is perpetual.",
      },
    ],
    prevention: [
      "Maintain active termite protection: annual inspection plus a current treatment plan is not optional in Charleston.",
      "Seal foundation gaps and under-door thresholds to reduce Palmetto bug entry from the storm drain and marsh-edge environment.",
      "Eliminate standing water in planter saucers, blocked gutters, and low spots near the tidal marsh edge to reduce mosquito breeding.",
      "Treat fire ant mounds promptly after rain and apply broadcast bait twice per year in this year-round-warm climate.",
    ],
    costNote:
      "Charleston pest services start with a free inspection. Annual termite protection contracts are the standard for all properties and carry particular urgency here given the Formosan presence. Quarterly general programs cover cockroaches, ants, and perimeter pests. Mosquito barrier programs are available seasonally. Roof rat programs include exclusion and roofline sealing.",
    faqs: [
      {
        question: "Is Charleston really one of the worst cities in the US for Formosan termites?",
        answer:
          "Yes. Charleston is nationally recognized by entomologists and pest management professionals as one of the most significantly Formosan termite-affected cities in the country. Clemson University Extension confirms Charleston County is within the established Formosan zone. The warm coastal climate, the historic wooden building stock, and the decades-long establishment of the invasive species have created conditions where termite protection is a genuinely critical maintenance item for every property in the city.",
      },
      {
        question: "How are Formosan termites different from regular subterranean termites in Charleston?",
        answer:
          "Formosan subterranean termites are larger, form much bigger colonies (estimated at ten times the size of native subterranean termite colonies), and can cause structural damage significantly faster than native species. They are also capable of creating aerial carton nests that do not require soil contact, which means they can infest above-ground wood without the mud tubes that alert homeowners to native subterranean termites. They swarm on warm May through July evenings around lights. Professional inspections can differentiate the species and recommend the appropriate treatment.",
      },
      {
        question: "Why are cockroaches in Charleston called Palmetto bugs?",
        answer:
          "The American cockroach is called a Palmetto bug in South Carolina and across the Lowcountry South. The name reflects the species' association with the subtropical vegetation and outdoor environment of the region. Palmetto bugs breed outdoors in the warm, humid Lowcountry environment and move inside opportunistically. They are the same species as the American cockroach found across the South, just with a regional nickname that reflects the local culture.",
      },
      {
        question: "How intense is mosquito season near Charleston's tidal marshes?",
        answer:
          "Very intense. The tidal marshes surrounding the Charleston peninsula, the river estuaries, and the dense subtropical vegetation provide exceptional mosquito habitat. The Charleston area has species that breed in both salt marshes and freshwater. The South Carolina Department of Health monitors for eastern equine encephalitis and West Nile virus through the season. For properties near the marsh edge, year-round mosquito management is a practical consideration, not just a summer program.",
      },
      {
        question: "Do roof rats really climb into Charleston's historic houses?",
        answer:
          "Yes. Roof rats are the dominant rodent in Charleston's historic district and older neighborhoods. They are excellent climbers that travel through the mature live oak canopy and along the utility lines of the historic streets. The older building stock has the gaps at the roofline, around utility entries, and in aging soffits that roof rats use to enter attics. Trimming branches from the roofline and sealing roofline entry points are the primary prevention steps.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Columbia", slug: "columbia" },
      { name: "Savannah", slug: "savannah" },
      { name: "Augusta", slug: "augusta" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Charleston, SC | Formosan Termites, Cockroaches & Mosquitoes",
    metaDescription:
      "Charleston pest control for Formosan termites, Palmetto bugs, mosquitoes, fire ants and roof rats. Charleston County Lowcountry coast specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
