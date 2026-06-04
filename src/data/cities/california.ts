import type { CityLocation } from "@/types";

// California seed cities. Pest data reflects Mediterranean coastal/inland
// patterns (UC IPM, California climate zones).

export const californiaCities: CityLocation[] = [
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    stateSlug: "california",
    stateAbbr: "CA",
    tier: "T1",
    population: "~3.9 million",
    county: "Los Angeles County",
    climate: "temperate",
    climateDriver:
      "Los Angeles has a dry Mediterranean climate: long rainless summers and a short wet winter. Pests chase moisture, so the dry months push ants and rodents straight indoors toward kitchens and bathrooms.",
    topPests: ["Ants", "Cockroaches", "Rats", "Termites", "Spiders"],
    pestProfile: [
      {
        name: "Argentine ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, worst in summer drought and after rain",
        note: "Argentine ants form enormous interconnected colonies across Southern California. When the ground dries out in summer, columns march indoors looking for water.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German roaches breed fast in warm kitchens and apartment blocks and spread between units through shared walls and plumbing.",
      },
      {
        name: "Norway and roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats are common in the hills and leafy neighborhoods, nesting in attics and palms, while Norway rats work the alleys and storm drains.",
      },
      {
        name: "Subterranean and drywood termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Subterranean swarm in spring, drywood in late summer",
        note: "LA has both. Drywood termites infest attic and eave timbers directly, which is why tenting is still a common sight across the basin.",
      },
      {
        name: "Western black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round, more active in warm months",
        note: "Black widows like garages, meter boxes, and block walls. Their bite is medically significant, so harborage near doors and play areas matters.",
      },
    ],
    localHook:
      "The Argentine ants under one LA home are often part of a colony that stretches for miles. That is why a kitchen line of ants keeps coming back after a spray, and why the real fix works the perimeter, not the counter.",
    intro:
      "Pest control in Los Angeles is shaped by the dry climate more than anything else. For most of the year there is no rain, so ants and rodents come indoors hunting water. Argentine ants are the everyday headache, German roaches are the apartment problem, and termites, both subterranean and drywood, are the expensive risk people only notice once there is damage. If you have just moved here, the surprise is that pests stay busy all twelve months. The mild winters never really shut them down.",
    sections: [
      {
        heading: "Why ant sprays from the store never seem to work here",
        body: "Argentine ant colonies are huge and connected, so killing the trail on your counter barely dents the population. Within days a new column finds the same crack. Control that lasts treats the outdoor trails and nests around the foundation and removes the water and food that drew them in. It is patient work, not a one-can fix.",
      },
      {
        heading: "Two kinds of termite, two kinds of treatment",
        body: "Subterranean termites come up from the soil and need a barrier or bait system in the ground. Drywood termites live inside the wood itself, often high in the attic or eaves, and may need localized treatment or fumigation. An LA inspection identifies which one you have before any work begins, because the wrong treatment leaves the colony in place.",
      },
    ],
    prevention: [
      "Fix drips and reduce standing water, which is what pulls ants and rats indoors in the dry season.",
      "Seal gaps around pipes and the foundation to cut off ant and rodent entry.",
      "Keep tree limbs and palms trimmed back from the roof to block roof rats.",
      "Store firewood off the ground and away from walls to reduce termite contact.",
    ],
    costNote:
      "Argentine ants and roaches usually call for a recurring exterior plan rather than a single visit, because the colonies are so large. Termite work is priced separately after an inspection. Both start with a free assessment of your property.",
    faqs: [
      {
        question: "Why do ants keep coming back in my LA kitchen?",
        answer:
          "Argentine ants form very large, connected colonies, so spraying the ants you can see leaves the nest untouched outdoors. They return within days, especially in summer when they come in for water. Treating the outdoor trails and nests, and sealing entry points, is what actually breaks the cycle.",
      },
      {
        question: "Do I need termite tenting in Los Angeles?",
        answer:
          "Sometimes. Drywood termites, which are common in the LA basin, live inside wood and a widespread infestation may need fumigation, which is the tenting you see. Localized infestations can sometimes be spot-treated. An inspection confirms the type and extent first.",
      },
      {
        question: "Are black widow spiders common in LA homes?",
        answer:
          "Yes, particularly in garages, meter boxes, block walls, and outdoor storage. The western black widow's bite is medically significant, so it is worth clearing harborage near doors, garages, and children's play areas.",
      },
      {
        question: "Why are there rats in nice LA neighborhoods?",
        answer:
          "Roof rats thrive in leafy hillside areas, nesting in attics, palms, and dense landscaping rather than just alleys. Fruit trees and pet food make it easier for them. Trimming back foliage and sealing roofline gaps cuts their access.",
      },
      {
        question: "Is pest control needed year-round in Los Angeles?",
        answer:
          "For ants and roaches, generally yes, because the mild winters never fully stop them. Many homes use a recurring exterior plan to keep numbers down rather than reacting to each new invasion.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Long Beach", slug: "long-beach" },
      { name: "Glendale", slug: "glendale" },
      { name: "San Diego", slug: "san-diego" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbour",
    metaTitle: "Pest Control in Los Angeles, CA | Ants, Roaches & Termites",
    metaDescription:
      "Los Angeles pest control for Argentine ants, German roaches, roof rats, subterranean and drywood termites, and black widows. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    state: "California",
    stateSlug: "california",
    stateAbbr: "CA",
    tier: "T1",
    population: "~1.4 million",
    county: "San Diego County",
    climate: "temperate",
    climateDriver:
      "San Diego's mild, dry coastal climate stays comfortable all year, which means very little slows pests down. The steady warmth favors drywood termites and ants in particular.",
    topPests: ["Termites", "Ants", "Rats", "Fleas", "Spiders"],
    pestProfile: [
      {
        name: "Drywood and subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Drywood swarm in warm months, subterranean in spring",
        note: "Coastal San Diego is heavy drywood termite country. They infest eaves, attics, and wooden trim directly, with no soil contact needed.",
      },
      {
        name: "Argentine ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "The same vast Argentine ant colonies seen across Southern California push indoors here for water and food, especially in the dry stretch.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats nest in palms, attics, and dense canyon-edge landscaping common across the county.",
      },
      {
        name: "Fleas",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Year-round in the mild climate",
        note: "The mild weather lets fleas stay active all year, a bigger issue here than in places with a real winter freeze.",
      },
      {
        name: "Spiders, including black widows",
        serviceSlug: "spider-control",
        activeSeason: "Year-round",
        note: "Black widows shelter in garages, block walls, and meter boxes, and general spider activity stays high thanks to the steady insect supply.",
      },
    ],
    localHook:
      "San Diego's selling point, weather that never really turns cold, is also why drywood termites and fleas here never get an off-season the way they do almost everywhere else.",
    intro:
      "Pest control in San Diego is defined by what the climate does not do: it does not freeze, and it barely rains. That steady mildness keeps drywood termites, ants, and fleas active all year. Drywood termites are the standout risk for coastal homes, because they live inside the wood itself and quietly work through eaves and attic timbers. Day to day, Argentine ants and the occasional roof rat are what most households actually deal with.",
    sections: [
      {
        heading: "Drywood termites and why coastal homes are a target",
        body: "Drywood termites do not need contact with soil. They fly in, enter through tiny gaps in exposed or unpainted wood, and set up inside the timber. Coastal San Diego sees a lot of them. The early signs are small piles of pellet-like droppings and discarded wings near windowsills. An inspection finds the galleries and confirms whether spot treatment or fumigation fits.",
      },
      {
        heading: "Fleas in a city with no winter",
        body: "In colder states a hard freeze knocks back the flea population each year. San Diego never gets that, so fleas can persist around pets, yards, and crawl spaces year-round. Treating the pet, the home, and the yard together, rather than just the animal, is what stops the cycle restarting.",
      },
    ],
    prevention: [
      "Paint and seal exposed wood trim and eaves to deny drywood termites an entry point.",
      "Keep gardens and pet resting areas tidy and treated to limit fleas.",
      "Trim palms and canyon-edge planting back from the roofline against roof rats.",
      "Seal foundation gaps and fix drips to reduce ant entry in the dry months.",
    ],
    costNote:
      "Termite protection is quoted separately after an inspection, since drywood and subterranean need different approaches. General pest and flea control usually works best as a recurring plan given the year-round climate. Start with a free inspection.",
    faqs: [
      {
        question: "Why is San Diego such a drywood termite area?",
        answer:
          "The mild coastal climate suits drywood termites, which fly in and infest wood directly without needing soil contact. Coastal and older homes with exposed or unpainted wood are common targets. Small pellet piles and discarded wings near windows are early warning signs.",
      },
      {
        question: "Do fleas really stay active all year in San Diego?",
        answer:
          "Yes. Without a winter freeze to reduce the population, fleas can persist year-round around pets, yards, and crawl spaces. Treating the pet, home, and yard together is the only reliable way to stop them coming back.",
      },
      {
        question: "How do I tell drywood from subterranean termites?",
        answer:
          "Subterranean termites live in the soil and build mud tubes up foundations. Drywood termites live inside the wood and leave small pellet-like droppings. The treatments differ, so an inspection confirms which you have before any work starts.",
      },
      {
        question: "Are roof rats a problem near the canyons?",
        answer:
          "Yes. Roof rats favor the dense vegetation along San Diego's canyon edges and nest in palms and attics. Trimming foliage away from the house and sealing roofline gaps reduces their access.",
      },
      {
        question: "Is ant control a one-time job in San Diego?",
        answer:
          "Usually not, because Argentine ant colonies are very large and keep sending in new trails. A recurring exterior treatment plus sealing entry points controls them far better than a single interior spray.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Chula Vista", slug: "chula-vista" },
      { name: "Oceanside", slug: "oceanside" },
      { name: "Los Angeles", slug: "los-angeles" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in San Diego, CA | Drywood Termites & Ants",
    metaDescription:
      "San Diego pest control for drywood and subterranean termites, Argentine ants, roof rats, year-round fleas and spiders. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "san-jose",
    name: "San Jose",
    state: "California",
    stateSlug: "california",
    stateAbbr: "CA",
    tier: "T1",
    population: "~970,000",
    county: "Santa Clara County",
    climate: "temperate",
    climateDriver:
      "San Jose sits inland in the South Bay, drier and a touch hotter than the coast. The dry summers send ants indoors, while the mild winters keep rodents and spiders going year-round.",
    topPests: ["Ants", "Rats", "Termites", "Wasps", "Spiders"],
    pestProfile: [
      {
        name: "Argentine ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, peaks in summer dry spells",
        note: "Argentine ants dominate the South Bay and stream indoors during dry summer weeks in search of water.",
      },
      {
        name: "Roof and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats use fences, wires, and fruit trees common in older San Jose neighborhoods to reach attics, while Norway rats favor ground burrows and drains.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring",
        note: "Western subterranean termites are active across the valley and swarm on warm spring days, especially after rain.",
      },
      {
        name: "Yellowjackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "Yellowjacket nests build through summer and turn aggressive around food and trash by late season, a common backyard problem here.",
      },
      {
        name: "Spiders, including black widows",
        serviceSlug: "spider-control",
        activeSeason: "Year-round",
        note: "Black widows favor garages, fences, and meter boxes. The steady insect supply keeps general spider activity high.",
      },
    ],
    localHook:
      "Two very different pests define a San Jose summer: the ant trails that appear the moment the ground dries out, and the yellowjackets that crash every backyard meal by August.",
    intro:
      "Pest control in San Jose splits along the seasons. The dry South Bay summers push Argentine ants indoors and grow yellowjacket nests to full size by late summer. The mild winters mean rats, termites, and spiders never fully clock off. Compared with the coast, San Jose runs a little hotter and drier, which makes the ant pressure especially persistent. Most homes here benefit from a steady plan rather than one-off visits.",
    sections: [
      {
        heading: "Summer ants versus late-summer wasps",
        body: "Early in summer the problem is ants, drawn indoors by dryness. By contrast, late summer belongs to yellowjackets, whose nests have grown large and whose foragers turn aggressive around food and bins. The two need different responses: ants want perimeter and trail treatment, whereas a mature yellowjacket nest needs careful removal at the source. A seasonal plan handles both at the right time.",
      },
      {
        heading: "Rodents in older South Bay homes",
        body: "Many San Jose neighborhoods have mature fruit trees and established fences, which is exactly how roof rats travel. They reach attics along branches and wires. Norway rats, by contrast, stay lower, burrowing near drains and foundations. Sealing roofline gaps and trimming back trees addresses the climbers, while ground exclusion handles the burrowers.",
      },
    ],
    prevention: [
      "Trim fruit trees and shrubs away from the roof to block roof rats.",
      "Seal foundation and pipe gaps and fix drips to slow summer ant entry.",
      "Knock down small wasp nests early in summer before they grow large.",
      "Clear garage clutter and outdoor storage to reduce black widow harborage.",
    ],
    costNote:
      "Given the persistent ant pressure and late-summer wasps, a seasonal or recurring plan usually beats one-off visits in San Jose. Termite work is quoted separately after inspection. Everything starts with a free assessment.",
    faqs: [
      {
        question: "When are yellowjackets worst in San Jose?",
        answer:
          "Yellowjacket nests grow all summer and are largest and most aggressive in late summer, around August and September, when foragers crowd food and trash. Removing small nests early in the season is far easier and safer than dealing with a mature one.",
      },
      {
        question: "Why do ants invade San Jose homes in summer?",
        answer:
          "The dry South Bay summers leave Argentine ants short of water, so they follow moisture indoors to kitchens and bathrooms. Their colonies are very large, so a lasting fix treats the outdoor trails and nests and seals entry points.",
      },
      {
        question: "Are termites a risk in the South Bay?",
        answer:
          "Yes. Western subterranean termites are active across the valley and swarm in spring, particularly after rain. An annual inspection is worthwhile, especially for homes with any wood-to-soil contact.",
      },
      {
        question: "How do roof rats get into San Jose attics?",
        answer:
          "They climb. Roof rats travel along fences, utility wires, and the mature fruit trees common in older neighborhoods, then enter through roofline gaps and vents. Trimming branches back and sealing those gaps cuts their route.",
      },
      {
        question: "Are black widows common in San Jose?",
        answer:
          "They are present, typically in garages, fences, meter boxes, and outdoor storage. Their bite is medically significant, so clearing clutter and harborage near doors and play areas is sensible.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Santa Clara", slug: "santa-clara" },
      { name: "Sunnyvale", slug: "sunnyvale" },
      { name: "San Diego", slug: "san-diego" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in San Jose, CA | Ants, Wasps & Rodents",
    metaDescription:
      "San Jose pest control for Argentine ants, yellowjackets, roof and Norway rats, subterranean termites and black widows. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    state: "California",
    stateSlug: "california",
    stateAbbr: "CA",
    tier: "T1",
    population: "~875,000",
    county: "San Francisco County",
    climate: "mediterranean",
    climateDriver:
      "San Francisco's coastal Mediterranean climate, with cool foggy summers and mild wet winters, means no real cold season to reduce pest pressure. The mild year-round temperatures sustain rat, ant, and flea populations continuously, while the dense urban fabric and Victorian housing stock provide ideal rodent harborage.",
    topPests: ["Rats", "Argentine Ants", "Cockroaches", "Termites", "Fleas"],
    pestProfile: [
      {
        name: "Roof rats and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "San Francisco has one of the worst urban rat problems in the country. The density of the Victorian and Edwardian housing stock, the restaurant and hospitality industry, and the city's many alleyways and parks sustain very large populations of both roof rats and Norway rats. City data consistently places SF among the highest-complaint cities nationally.",
      },
      {
        name: "Argentine ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active in the warm dry months",
        note: "The Bay Area Argentine ant supercolony is one of the largest documented supercolonies in the world. Argentine ants form enormous multi-queen colonies with no aggression between nests, which allows them to dominate the entire urban environment. Store-bought bait rarely stops them because the colony is simply too large.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are concentrated in SF's dense restaurant industry and apartment buildings, particularly in the Mission, Tenderloin, and SoMa neighborhoods. They spread easily through the shared plumbing of Victorian multi-unit buildings.",
      },
      {
        name: "Drywood and subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Drywood swarms in summer, subterranean active spring through fall",
        note: "San Francisco has both drywood and subterranean termites. Drywood termites infest the dry wood of Victorian architecture directly, without needing soil contact. Subterranean termites come up from soil. Both are active in the mild coastal climate.",
      },
      {
        name: "Cat fleas",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Year-round",
        note: "San Francisco's mild climate sustains flea populations year-round with no winter kill. Multi-unit buildings and the city's outdoor cat population keep flea pressure high across many neighborhoods.",
      },
    ],
    localHook:
      "San Francisco's Victorian architecture is one of the city's most celebrated features, and it is also one of the reasons the rat and cockroach populations are so persistent. The shared walls, old plumbing, and basement access in Painted Ladies and Edwardian flats give pests easy passage between units. The Argentine ant supercolony blanketing the Bay Area makes ant control here a continuous management challenge, not a one-time fix.",
    intro:
      "Pest control in San Francisco is shaped by two realities: the city's Victorian architecture creates a connected, porous environment for rats and cockroaches, and the Bay Area Argentine ant supercolony means ant control is a permanent fixture of maintenance rather than a seasonal event. SF's rodent problem is well documented and ranks among the worst in the country. The mild coastal climate keeps fleas and ants active year-round, and the Victorian housing stock supports both drywood and subterranean termites.",
    sections: [
      {
        heading: "The Argentine ant supercolony and why standard products fail",
        body: "The Argentine ant supercolony across the Bay Area is one of the largest in the world, spanning hundreds of miles with billions of individuals and no territorial boundaries between nests. This is why a standard over-the-counter ant spray produces a frustrating result: you kill some ants, but the colony is so vast that the gap closes within hours. Effective management requires slow-acting bait that workers carry back to the source, combined with perimeter treatment to reduce entry pressure. It is a management program, not a one-time elimination.",
      },
      {
        heading: "Victorian housing and the rat problem",
        body: "San Francisco's famous Victorian and Edwardian housing stock was built before the building science that modern rat exclusion is based on. Shared crawl spaces, old sewer connections, and gaps around aging pipe work give roof rats and Norway rats easy access between properties. The density of the city means a rat population in one building easily migrates to adjacent ones. Effective control in SF requires treating the harborage source, the entry points, and the bait program together, not just placing bait stations on the exterior.",
      },
    ],
    prevention: [
      "Store food in sealed containers and manage compost carefully to remove rat food sources near the building.",
      "Use slow-acting bait for Argentine ants rather than repellent sprays, which just redirect the column.",
      "Inspect Victorian woodwork annually for drywood termite pellets or small exit holes.",
      "Keep door sweeps in good repair to reduce flea and cockroach entry from common areas.",
    ],
    costNote:
      "San Francisco pest pricing typically separates rodent exclusion work from recurring ant and general pest service. Termite inspection and treatment are quoted separately. A free inspection identifies what is actually driving the problem before any pricing.",
    faqs: [
      {
        question: "Why is the rat problem so bad in San Francisco?",
        answer:
          "SF's rat problem is structural. The Victorian and Edwardian housing stock has shared crawl spaces, old sewer connections, and aging pipe penetrations that give rats easy access between buildings. The dense restaurant industry, the many alleyways, and the city's parks all provide food and harborage. The city ranks among the highest in the country for rat complaints.",
      },
      {
        question: "Why do Argentine ants keep coming back no matter what I try?",
        answer:
          "The Bay Area Argentine ant supercolony is one of the largest in the world. When you spray and kill a trail, the colony simply reroutes. The effective approach is slow-acting bait that workers carry back to reduce the colony, combined with perimeter treatment to reduce pressure at entry points. It requires continuous management, not one-time elimination.",
      },
      {
        question: "What type of termites does San Francisco have?",
        answer:
          "Both drywood and subterranean. Drywood termites live inside dry wood without soil contact and are a specific risk for Victorian woodwork, furniture, and roof timbers. Subterranean termites come up from soil through mud tubes. The inspection identifies which type is present before recommending treatment, since they require different approaches.",
      },
      {
        question: "Are fleas really a year-round problem in SF?",
        answer:
          "Yes. The mild coastal climate sustains flea populations year-round with no winter reduction. Multi-unit buildings and the city's outdoor and feral cat population keep pressure high. Treating the pet, the home, and the yard together is the effective approach.",
      },
      {
        question: "Is year-round pest control necessary in San Francisco?",
        answer:
          "For most homes, particularly in the denser neighborhoods, yes. Rats, ants, cockroaches, and fleas are year-round pressures. Termites require seasonal inspection. The mild climate means there is no winter reset, and continuous management outperforms reactive treatment.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Oakland", slug: "oakland" },
      { name: "San Jose", slug: "san-jose" },
      { name: "Daly City", slug: "daly-city" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbour",
    metaTitle: "Pest Control in San Francisco, CA | Rats, Argentine Ants & Termites",
    metaDescription:
      "San Francisco pest control for roof rats, Argentine ant supercolony, drywood and subterranean termites, cockroaches and year-round fleas. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "fresno",
    name: "Fresno",
    state: "California",
    stateSlug: "california",
    stateAbbr: "CA",
    tier: "T1",
    population: "~545,000",
    county: "Fresno County",
    climate: "hot-arid",
    climateDriver:
      "Fresno sits in the San Joaquin Valley with a hot semi-arid Mediterranean climate: hot dry summers reaching 105 degrees Fahrenheit, mild winters, and very low summer humidity. The intense summer heat drives pests into irrigated yards and air-conditioned homes, while the mild winters allow year-round ant and rodent activity.",
    topPests: ["Ants", "Cockroaches", "Roof Rats", "Termites", "Black Widows"],
    pestProfile: [
      {
        name: "Argentine ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active in summer and after rain",
        note: "The Central Valley portion of the Bay Area-Central Valley Argentine ant supercolony covers Fresno thoroughly. The intense summer heat pushes ant columns toward irrigated yards and cool homes. UC IPM identifies Argentine ants as the dominant pest ant across the San Joaquin Valley.",
      },
      {
        name: "German and American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, most active in summer heat",
        note: "Cockroaches in Fresno are driven indoors by the intense summer heat seeking moisture and air conditioning. German cockroaches establish in commercial kitchens and apartment buildings. American cockroaches are common around drainage infrastructure.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats are active year-round in Fresno's mild climate, nesting in palms, fruit trees, and attics. The Central Valley's abundant agricultural edges and orchards adjacent to residential areas add pressure beyond what purely urban cities see.",
      },
      {
        name: "Drywood and subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Drywood swarms in late summer, subterranean active spring through fall",
        note: "Fresno has both drywood and subterranean termite pressure. Drywood termites are common in the Valley's wood-frame construction. Subterranean termites are sustained by the irrigated landscapes surrounding homes in this otherwise dry climate.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Black widows are very common in Fresno's hot dry climate, particularly in utility boxes, wood piles, under outdoor furniture, and in garages and storage areas.",
      },
    ],
    localHook:
      "Fresno's Central Valley location means summer temperatures can exceed 100 degrees Fahrenheit for weeks, which drives pests into irrigated yards and air-conditioned homes with urgency. Argentine ants are relentless here, following irrigation lines and the moisture gradient between hot exteriors and cool interiors.",
    intro:
      "Pest control in Fresno follows the Valley heat. The San Joaquin Valley's intense summers regularly exceed 100 degrees Fahrenheit, which drives Argentine ants, cockroaches, and rodents toward the cooler, irrigated environments around homes. Argentine ants are the dominant nuisance pest and part of the vast Bay Area-Central Valley supercolony. Roof rats are year-round in the mild climate, drywood and subterranean termites are both present, and black widows are a consistent find in yards and storage areas.",
    sections: [
      {
        heading: "Argentine ants and the irrigation-following problem",
        body: "Fresno's irrigated yards in a surrounding hot, dry landscape create an obvious moisture gradient that Argentine ants follow. Irrigation lines and the damp soil around sprinkler heads are ant highways. When summer temperatures peak, the ants push further inside homes, following moisture through any gap they can find. The effective approach is a combination of slow-acting bait to reduce the colony and perimeter treatment to interrupt the trail at the point of entry.",
      },
      {
        heading: "Drywood versus subterranean termites in the Valley",
        body: "Fresno homeowners encounter both termite types, which require different treatment approaches. Drywood termites live inside dry wood without soil contact and are identified by the small sand-like pellets they push out of their galleries. Subterranean termites come up from the soil through mud tubes on foundation walls and thrive around the irrigated landscapes that keep soil moist even in a dry climate. An inspection determines which type is present and which treatment applies.",
      },
    ],
    prevention: [
      "Use slow-acting ant bait rather than repellent sprays to manage the Argentine ant supercolony effectively.",
      "Inspect attic and eave areas annually for drywood termite evidence before summer swarm season.",
      "Trim palm fronds and fruit trees away from the roofline to reduce roof rat access.",
      "Check utility boxes, wood piles, and outdoor storage areas for black widows periodically.",
    ],
    costNote:
      "Fresno pest pricing typically includes a year-round general pest plan for ants, roaches, and spiders. Termite inspection and treatment are quoted separately. Rodent exclusion may be a separate service for homes near agricultural edges. Start with a free inspection.",
    faqs: [
      {
        question: "Why are Argentine ants so difficult to control in Fresno?",
        answer:
          "Fresno is part of the vast Bay Area-Central Valley Argentine ant supercolony, a single interconnected colony spanning much of California. Repellent sprays and surface treatments just redirect the trail. Slow-acting bait that workers carry back to the source is the effective approach, combined with perimeter treatment. It is a management program, not a single elimination.",
      },
      {
        question: "What termite types are present in Fresno?",
        answer:
          "Both drywood and subterranean. Drywood termites live inside dry wood and push out small sand-like pellets as evidence. Subterranean termites come from soil through mud tubes and are sustained by the irrigated landscapes around homes. Both are present in Fresno, and they require different treatments.",
      },
      {
        question: "Are roof rats a problem in Fresno?",
        answer:
          "Yes. Fresno's mild climate supports year-round roof rat activity. They nest in palms, citrus trees, and attics, and the proximity to agricultural areas on the city's edges adds pressure beyond purely urban settings. Trimming trees away from rooflines and sealing attic vents are the first preventive steps.",
      },
      {
        question: "Are black widows common in Fresno?",
        answer:
          "Yes. Black widows are very common in the hot dry climate of the San Joaquin Valley and are a regular find in utility boxes, under outdoor furniture, in wood piles, and in garage storage areas. Wearing gloves when reaching into these spots and checking them periodically reduces the risk of contact.",
      },
      {
        question: "Does the extreme summer heat make pest pressure worse?",
        answer:
          "Yes, in a specific way. The heat drives moisture-seeking pests, particularly ants and cockroaches, toward the cooler, irrigated areas around homes and into air-conditioned interiors. Pest pressure in and around the home increases during heat peaks as the surrounding landscape becomes inhospitable.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Clovis", slug: "clovis" },
      { name: "Visalia", slug: "visalia" },
      { name: "Bakersfield", slug: "bakersfield" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbour",
    metaTitle: "Pest Control in Fresno, CA | Argentine Ants, Termites & Roof Rats",
    metaDescription:
      "Fresno pest control for Argentine ants, drywood and subterranean termites, roof rats, cockroaches and black widows. San Joaquin Valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "sacramento",
    name: "Sacramento",
    state: "California",
    stateSlug: "california",
    stateAbbr: "CA",
    tier: "T1",
    population: "~525,000",
    county: "Sacramento County",
    climate: "mediterranean",
    climateDriver:
      "Sacramento has a Mediterranean climate with hot dry summers (frequently above 100 degrees Fahrenheit), mild wet winters, and the Sacramento and American Rivers running through it. The river delta, numerous sloughs, and the extensive irrigation infrastructure of the Central Valley sustain both mosquito habitat and termite-friendly soil moisture.",
    topPests: ["Ants", "Termites", "Cockroaches", "Roof Rats", "Wasps"],
    pestProfile: [
      {
        name: "Argentine ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active in summer",
        note: "Sacramento is part of the Bay Area-Central Valley Argentine ant supercolony. The summer heat and irrigation systems create the moisture gradient that drives ant columns into homes. UC IPM identifies Argentine ants as the most common pest ant in the Sacramento Valley.",
      },
      {
        name: "Drywood and subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Drywood swarms late summer, subterranean active spring through fall",
        note: "Sacramento has both termite types. Subterranean termites are sustained by the irrigated landscape moisture even in the dry summer. Drywood termites are present in the city's older wood-frame construction, particularly in the historic Midtown and East Sacramento neighborhoods.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Sacramento apartments and commercial settings, spreading through shared wall voids and plumbing in older apartment buildings.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Sacramento's tree canopy, the American River parkway, and the many mature fruit trees in older neighborhoods provide ideal roof rat habitat. They nest high in vegetation and move into attics from overhanging branches.",
      },
      {
        name: "Yellow jacket wasps",
        serviceSlug: "wasp-hornet-control",
        activeSeason: "June through October, most aggressive August through September",
        note: "Yellow jackets peak in late summer as their colonies reach maximum size and natural food sources decline. They nest in the ground, wall voids, and under eaves and are a significant outdoor sting risk in late summer.",
      },
    ],
    localHook:
      "Sacramento's tree canopy is extensive and celebrated: the 'City of Trees' title reflects decades of planting. That canopy also means roof rats have excellent access to rooflines and attics across every neighborhood. Managing the gap between trees and structures is one of the most effective rat prevention steps in Sacramento.",
    intro:
      "Pest control in Sacramento involves the Bay Area Argentine ant supercolony, which makes ant management a continuous rather than seasonal task, combined with the roof rat pressure that comes with being one of the most densely treed cities in America. The 'City of Trees' designation is a real asset except when it comes to rats: mature trees provide direct access to attics from overhanging branches. Drywood and subterranean termites are both present, German cockroaches run year-round indoors, and late summer brings aggressive yellow jackets.",
    sections: [
      {
        heading: "The City of Trees and the roof rat problem",
        body: "Sacramento earned its 'City of Trees' name legitimately, with one of the highest urban tree canopy percentages in the country. Roof rats take full advantage. They nest in trees, travel along branches and power lines, and access attics where branches touch or overhang the roofline. The most effective preventive step is keeping tree branches trimmed back from the roof by at least six feet and ensuring attic vents are screened. Once they are inside an attic, rats establish quickly.",
      },
      {
        heading: "Drywood versus subterranean termites in Sacramento",
        body: "Sacramento homeowners encounter both types. Drywood termites are found in the older Midtown and East Sacramento homes, living inside dry wood without soil contact. Subterranean termites are sustained by the moisture from irrigation and the Sacramento River proximity even in the dry summer. The evidence differs: drywood termites leave small sand-like pellets near infested wood, while subterranean termites build mud tubes on foundation walls. An inspection identifies which type is present before treatment begins.",
      },
    ],
    prevention: [
      "Trim tree branches at least six feet back from the roofline to remove roof rat access routes.",
      "Use slow-acting bait for Argentine ants; repellent sprays just redirect the trail.",
      "Schedule a termite inspection in spring after swarm season to catch any new activity early.",
      "Treat yellow jacket ground nests in spring while colonies are small.",
    ],
    costNote:
      "Sacramento pest pricing typically covers ants, cockroaches, and spiders in a general year-round plan, with termite inspection, rodent exclusion, and wasp treatment quoted separately. Start with a free inspection.",
    faqs: [
      {
        question: "Why are roof rats such a problem in Sacramento?",
        answer:
          "Sacramento's extensive urban tree canopy, the American River parkway, and the many mature fruit trees in older neighborhoods give roof rats ideal habitat and direct access to attics. They travel along branches and power lines and enter anywhere branches overhang or touch the roofline. Trimming trees back from the roof and sealing attic vents are the most effective preventive steps.",
      },
      {
        question: "Does Sacramento have drywood termites or subterranean termites?",
        answer:
          "Both. Drywood termites are found in the older wood-frame construction of Midtown and East Sacramento, living inside dry wood without soil contact. Subterranean termites come from soil through mud tubes and are sustained by the irrigated landscape moisture. They require different treatment approaches, so an inspection identifying the type comes first.",
      },
      {
        question: "Are Argentine ants the same as regular ants?",
        answer:
          "Not in terms of colony structure. Argentine ants form enormous supercolonies with no aggression between nests, covering vast areas. In Sacramento they are part of a supercolony spanning much of California. This means repellent sprays just redirect the trail and provide no lasting relief. Slow-acting bait that workers carry back to the colony is the effective approach.",
      },
      {
        question: "When are yellow jackets most aggressive in Sacramento?",
        answer:
          "Late August and September, when colonies reach peak size and workers become more defensive as natural food sources decline. Ground nests, wall voids, and nests under eaves are the most common in Sacramento. Treating them in spring while colonies are small is significantly easier than managing them at peak size.",
      },
      {
        question: "Is year-round pest control necessary in Sacramento?",
        answer:
          "For homes with ant pressure or recurring rodent activity, yes. Argentine ants and roof rats are year-round concerns. Termites require seasonal inspection. The mild Sacramento winters provide very little reduction in indoor pest pressure, making continuous management more cost-effective than reactive treatments.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Elk Grove", slug: "elk-grove" },
      { name: "Roseville", slug: "roseville" },
      { name: "Stockton", slug: "stockton" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Sacramento, CA | Argentine Ants, Roof Rats & Termites",
    metaDescription:
      "Sacramento pest control for Argentine ants, drywood and subterranean termites, roof rats, cockroaches and yellow jackets. City of Trees rat specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    state: "California",
    stateSlug: "california",
    stateAbbr: "CA",
    tier: "T1",
    population: "~460,000",
    county: "Los Angeles County",
    climate: "mediterranean",
    climateDriver:
      "Long Beach has a coastal Mediterranean climate with mild year-round temperatures, dry summers, and the influence of the Port of Long Beach adjacent to the city. The port ecosystem, the Los Angeles River, and the dense urban fabric sustain elevated rat pressure alongside the same Argentine ant and termite environment shared with greater Los Angeles.",
    topPests: ["Rats", "Argentine Ants", "Cockroaches", "Termites", "Bed Bugs"],
    pestProfile: [
      {
        name: "Roof rats and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Long Beach has significantly elevated rat pressure compared with most Southern California cities due to the Port of Long Beach. Port environments globally sustain large resident rat populations, and these spill into the surrounding residential areas. Norway rats are more common near the port; roof rats are found throughout the city's neighborhoods.",
      },
      {
        name: "Argentine ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Long Beach is part of the vast Southern California Argentine ant supercolony. The mild coastal climate means there is no winter reduction in ant activity. Argentine ants enter homes year-round following moisture trails.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "The port and the dense commercial strip along Long Beach Boulevard sustain significant cockroach pressure that extends into adjacent residential areas. German cockroaches are the dominant indoor species; American cockroaches are common in basements and drainage infrastructure.",
      },
      {
        name: "Drywood termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms late summer, active year-round in mild coastal climate",
        note: "Drywood termites are particularly prevalent in coastal Southern California, where the mild climate and the older wood-frame construction of Long Beach's Craftsman and bungalow neighborhoods provide ideal conditions. They swarm in late summer and can infest furniture as well as structural wood.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Long Beach's port city status, high international traveler volume, and dense apartment stock sustain above-average bed bug pressure. The transient population associated with port operations and the city's tourism industry creates consistent bed bug introduction.",
      },
    ],
    localHook:
      "Long Beach is one of the world's busiest port cities, and port environments globally sustain large resident rat populations that spill into surrounding neighborhoods. The combination of port-adjacent rat pressure and the Southern California Argentine ant supercolony makes Long Beach a demanding pest environment despite its mild, pleasant climate.",
    intro:
      "Pest control in Long Beach is shaped by the port. The Port of Long Beach is one of the world's busiest, and port ecosystems sustain large resident rat populations that spread into the surrounding residential areas. That means Long Beach homeowners face above-average rodent pressure on top of the Argentine ant supercolony, drywood termites in the Craftsman and bungalow neighborhoods, and year-round cockroaches. The mild coastal climate means there is no winter reduction in any of these pressures.",
    sections: [
      {
        heading: "Port proximity and rat pressure",
        body: "The Port of Long Beach processes millions of shipping containers each year and sustains a large resident rat population that is a feature of port environments worldwide. Norway rats dominate the port-adjacent areas; roof rats spread throughout the city's neighborhoods. The key difference from a typical Southern California city is the sustained pressure from the port edge, which makes Long Beach more like a port city on the East Coast in terms of rodent management requirements.",
      },
      {
        heading: "Drywood termites in Craftsman country",
        body: "Long Beach has an exceptional stock of early 20th-century Craftsman bungalows and California bungalows that are architecturally prized and also precisely the type of construction drywood termites favor. They infest the dry wood of structural timbers, roof trusses, and furniture without needing soil contact, and their evidence is easy to miss: small sand-like pellets near wood surfaces or emerging from small holes. Annual inspection is the practical defense for homes in the older neighborhoods.",
      },
    ],
    prevention: [
      "Keep garbage in sealed containers and eliminate harborage near foundations to reduce port-adjacent rat pressure.",
      "Use slow-acting bait for Argentine ants to address the supercolony rather than redirecting the trail.",
      "Inspect Craftsman woodwork annually for drywood termite pellet evidence.",
      "Inspect second-hand furniture for bed bug signs before bringing it into the home.",
    ],
    costNote:
      "Long Beach pest pricing typically covers ants, cockroaches, and general pests in a recurring plan, with rodent exclusion and termite inspection quoted separately. Bed bug treatment is a separate service. Start with a free inspection.",
    faqs: [
      {
        question: "Why is the rat problem worse near the Port of Long Beach?",
        answer:
          "Port environments globally sustain large resident rat populations from food in cargo, port infrastructure, and the constant flow of goods and people. The Port of Long Beach is one of the world's busiest, and its resident rat population spills into the surrounding residential areas. Norway rats dominate near the port; roof rats are found citywide.",
      },
      {
        question: "What makes drywood termites different from subterranean?",
        answer:
          "Drywood termites live entirely inside dry wood and do not need soil contact. They infest structural timbers, furniture, and roof trusses directly. Subterranean termites come from soil through mud tubes. In coastal Southern California, drywood termites are particularly prevalent. Evidence is small sand-like pellets near infested wood. They require different treatment.",
      },
      {
        question: "Why are Argentine ants so hard to eliminate in Long Beach?",
        answer:
          "Long Beach is part of the Southern California Argentine ant supercolony, a single interconnected colony spanning much of the state. Repellent sprays and surface treatments just redirect the trail without reducing the colony. Slow-acting bait that workers carry back to the source, combined with perimeter treatment, is the effective approach.",
      },
      {
        question: "Is bed bug risk really higher in Long Beach?",
        answer:
          "Above average, yes. The port city status brings a high volume of international travelers and transient workers, and the dense apartment stock sustains ongoing bed bug introductions. Inspecting second-hand furniture before it enters the home is the most important preventive step.",
      },
      {
        question: "Does Long Beach have a cold enough winter to reduce pest pressure?",
        answer:
          "No. The mild coastal climate means there is essentially no winter reduction in ant, rat, cockroach, or termite activity. Year-round management is the practical approach for Long Beach homes, particularly those with recurring ant or rodent pressure.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "Compton", slug: "compton" },
      { name: "Torrance", slug: "torrance" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Long Beach, CA | Rats, Argentine Ants & Termites",
    metaDescription:
      "Long Beach pest control for port-adjacent rats, Argentine ants, drywood termites, cockroaches and bed bugs. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "oakland",
    name: "Oakland",
    state: "California",
    stateSlug: "california",
    stateAbbr: "CA",
    tier: "T1",
    population: "~435,000",
    county: "Alameda County",
    climate: "mediterranean",
    climateDriver:
      "Oakland has a mild Mediterranean climate, cooler and foggier than inland Bay Area cities but warmer than San Francisco. The Oakland Hills, the San Francisco Bay, and the estuary create varied habitat that sustains year-round rat and Argentine ant pressure, and the port and industrial waterfront add rodent pressure similar to Long Beach.",
    topPests: ["Rats", "Argentine Ants", "Cockroaches", "Termites", "Fleas"],
    pestProfile: [
      {
        name: "Roof rats and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Oakland has significant rat pressure from two sources: the Port of Oakland adds Norway rat pressure near the waterfront, and the Oakland Hills with their mature vegetation and proximity to wild areas sustain a large roof rat population that spreads throughout the neighborhoods. The city has historically had high rodent complaint rates.",
      },
      {
        name: "Argentine ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Oakland is part of the Bay Area Argentine ant supercolony that blankets the entire region. The mild year-round climate means ant activity does not reduce seasonally, and the colony scale makes standard over-the-counter products ineffective.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Oakland's apartment buildings, particularly in the Fruitvale, East Oakland, and downtown areas. They spread through shared plumbing voids in older multi-family buildings.",
      },
      {
        name: "Drywood and subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Drywood swarms in summer, subterranean active spring through fall",
        note: "Oakland has both termite types. The older Craftsman and Victorian neighborhoods of Piedmont Avenue and Temescal are exposed to drywood termites, while subterranean termites are sustained by moisture and the older housing stock citywide.",
      },
      {
        name: "Cat fleas",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Year-round",
        note: "Oakland's mild climate sustains flea populations year-round, and the city's outdoor and feral cat population maintains steady flea pressure in many neighborhoods, particularly around parks and community garden areas.",
      },
    ],
    localHook:
      "Oakland sits between the Bay Area's notorious Argentine ant supercolony and the rat pressure from the Port of Oakland and the wildlife-adjacent Oakland Hills. The city has both Norway rats near the waterfront and roof rats throughout the hills neighborhoods, making rodent management more complex than in a purely urban setting.",
    intro:
      "Pest control in Oakland has a dual character. The port waterfront brings Norway rat pressure from one direction, while the Oakland Hills and the wildlife-adjacent neighborhoods bring roof rat pressure from another. The city sits in the heart of the Bay Area Argentine ant supercolony, which means ant management is a continuous program rather than a seasonal fix. Drywood and subterranean termites are both present in the older Craftsman neighborhoods, German cockroaches run year-round indoors, and the mild climate keeps fleas active all year.",
    sections: [
      {
        heading: "Two rat types, two management approaches",
        body: "Oakland's geography places it between two distinct rat pressure sources. Norway rats from the Port of Oakland are burrowing rats that favor waterfront and industrial areas and spread into adjacent residential neighborhoods. Roof rats from the Oakland Hills are climbers that nest in vegetation and access attics from trees. They look different and behave differently, which means the same management approach does not work equally well for both. A property near the port faces different primary pressure than a property in the hills.",
      },
      {
        heading: "Argentine ants in the Bay Area supercolony",
        body: "The Argentine ant supercolony covering the Bay Area is one of the largest in the world. Oakland is fully within it. The colony has no boundaries between nests, which is why a surface spray eliminates a trail temporarily and then the ants simply route around it. Slow-acting bait that workers carry back to reduce the source colony, combined with perimeter treatment at entry points, is the approach that produces lasting results.",
      },
    ],
    prevention: [
      "Trim trees away from the roofline by at least six feet to reduce roof rat access from the Hills.",
      "Use slow-acting ant bait rather than repellent sprays to address the Argentine ant supercolony.",
      "Inspect older Craftsman woodwork annually for drywood termite pellets.",
      "Keep door sweeps in good repair and address pet flea treatment year-round given the mild climate.",
    ],
    costNote:
      "Oakland pest pricing typically covers ants, cockroaches, and general pests in a recurring plan, with rodent exclusion and termite inspection quoted separately. Start with a free inspection to identify which pressure sources are most active at your property.",
    faqs: [
      {
        question: "Does Oakland have more rats than other Bay Area cities?",
        answer:
          "Oakland has above-average rat pressure for the Bay Area, driven by the Port of Oakland on the waterfront side and the wildlife-adjacent Oakland Hills on the other. The city has historically had higher rodent complaint rates than neighboring cities. Both Norway rats near the port and roof rats in the hills neighborhoods are present.",
      },
      {
        question: "Are Argentine ants the same problem in Oakland as in San Francisco?",
        answer:
          "Yes. Oakland is part of the same Bay Area Argentine ant supercolony that covers San Francisco and the entire region. The management approach is the same: slow-acting bait combined with perimeter treatment. Repellent sprays just redirect the trail without reducing the colony.",
      },
      {
        question: "What termite types does Oakland have?",
        answer:
          "Both drywood and subterranean. The older Craftsman and Victorian neighborhoods are exposed to drywood termites, which live inside dry wood without soil contact. Subterranean termites come from soil through mud tubes. Both are present in Oakland, and an inspection determines which type and which treatment approach applies.",
      },
      {
        question: "Why are fleas a year-round problem in Oakland?",
        answer:
          "Oakland's mild Mediterranean climate never gets cold enough to significantly reduce flea populations outdoors. The city's outdoor and feral cat population sustains flea pressure in many neighborhoods year-round, particularly near parks and community garden areas. Treating the pet, the home, and outdoor resting areas together is the effective approach.",
      },
      {
        question: "Is year-round pest control necessary in Oakland?",
        answer:
          "For most homes, yes. Argentine ants, rats, and fleas are year-round concerns in Oakland's mild climate. Termites require seasonal inspection. The combination of port-adjacent rat pressure and the Bay Area ant supercolony means continuous management outperforms reactive treatment.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "San Francisco", slug: "san-francisco" },
      { name: "Berkeley", slug: "berkeley" },
      { name: "San Jose", slug: "san-jose" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Oakland, CA | Rats, Argentine Ants & Termites",
    metaDescription:
      "Oakland pest control for port and Hills rats, Argentine ant supercolony, drywood and subterranean termites, cockroaches and year-round fleas. Free inspection. Call 1-800-PEST-USA.",
  },
];
