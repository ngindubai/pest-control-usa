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
];
