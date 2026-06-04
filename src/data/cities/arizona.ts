import type { CityLocation } from "@/types";

// Arizona seed cities. Pest data reflects Sonoran Desert patterns (University of
// Arizona Cooperative Extension, Maricopa County).

export const arizonaCities: CityLocation[] = [
  {
    slug: "phoenix",
    name: "Phoenix",
    state: "Arizona",
    stateSlug: "arizona",
    stateAbbr: "AZ",
    tier: "T1",
    population: "~1.6 million",
    county: "Maricopa County",
    climate: "hot-arid",
    climateDriver:
      "Phoenix sits in the Sonoran Desert. Heat and dryness shape everything, and the summer monsoon brings a burst of moisture that drives a sharp seasonal surge in scorpions and other desert pests.",
    topPests: ["Scorpions", "Cockroaches", "Termites", "Spiders", "Rats"],
    pestProfile: [
      {
        name: "Arizona bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Peaks May through September",
        note: "The bark scorpion is the most common scorpion in the Valley and the only one in the region whose sting is medically significant. It squeezes through gaps as thin as a credit card and climbs walls and ceilings.",
      },
      {
        name: "Desert and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, surges in monsoon season",
        note: "Desert roaches live outdoors and push inside during extreme heat, while German roaches breed indoors in kitchens and bathrooms.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Active year-round, swarms after summer rain",
        note: "Desert subterranean termites are widespread across Maricopa County and build mud tubes up slab foundations even in dry ground.",
      },
      {
        name: "Black widow and desert spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round, more visible in warm months",
        note: "Black widows favor block walls, garages, and irrigation boxes. Their bite is medically significant, so harborage near doors matters.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats have spread through the Valley's older citrus neighborhoods, nesting in palms, attics, and dense oleander.",
      },
    ],
    localHook:
      "The Arizona bark scorpion is the one pest that genuinely worries Phoenix homeowners. It is the only scorpion here whose sting is medically significant, and it gets indoors through gaps you can barely see.",
    intro:
      "Pest control in Phoenix is a desert problem, not a humid one. The species that define it are scorpions, desert cockroaches, and subterranean termites that work through dry ground. Bark scorpions are the standout: active on warm nights from late spring through the monsoon, able to slip through hairline gaps, and the only local scorpion whose sting needs medical attention. A good plan here leans heavily on sealing the home, not just spraying it.",
    sections: [
      {
        heading: "Bark scorpions and why exclusion matters most",
        body: "Spraying alone does not solve a scorpion problem, because they hunt at night and shelter deep in walls and block by day. The fix is exclusion: sealing weep holes, door sweeps, and plumbing gaps so they cannot get in, paired with treating the perimeter and the harborage outside. The monsoon months are peak season, so the work is best done before the summer rains.",
      },
      {
        heading: "Termites in dry ground",
        body: "It surprises people that termites thrive in the desert, but desert subterranean termites are widespread across Maricopa County. They build mud tubes up foundations to reach wood while keeping contact with moisture below ground. An inspection looks for those tubes along the slab and any wood-to-soil contact.",
      },
    ],
    prevention: [
      "Seal weep holes, door sweeps, and plumbing penetrations to block bark scorpions.",
      "Move block, wood piles, and irrigation boxes away from the walls to cut scorpion and widow harborage.",
      "Check for termite mud tubes along the slab each year.",
      "Trim palms and oleander back from the roofline to reduce roof rat access.",
    ],
    costNote:
      "Scorpion control in Phoenix usually pays off as a recurring plan, because the peak season is long and exclusion needs upkeep. A free inspection sets the price against your home's gaps and the species present.",
    faqs: [
      {
        question: "Are bark scorpions dangerous in Phoenix?",
        answer:
          "The Arizona bark scorpion is the only scorpion in the Phoenix area whose sting is medically significant, and stings can need medical care, particularly for young children. They are most active on warm nights from late spring through the monsoon and get indoors through very small gaps.",
      },
      {
        question: "Why do scorpions get worse during the Phoenix monsoon?",
        answer:
          "The summer monsoon brings moisture and insect prey, which boosts scorpion activity and movement. That is why late spring through September is peak season and why sealing the home before the rains helps.",
      },
      {
        question: "Can termites really survive in the desert?",
        answer:
          "Yes. Desert subterranean termites are widespread across Maricopa County. They keep contact with moist soil below ground and build mud tubes up foundations to reach wood, so annual inspections are worthwhile here.",
      },
      {
        question: "Does spraying alone stop scorpions?",
        answer:
          "Not reliably. Scorpions shelter deep in walls and block by day, so exclusion work, sealing the gaps they use, is the most effective part of the plan, combined with perimeter treatment and clearing harborage outside.",
      },
      {
        question: "Are roof rats a problem in Phoenix?",
        answer:
          "Yes, especially in older neighborhoods with citrus and mature landscaping. Roof rats nest in palms, attics, and dense oleander and travel along walls and branches, so trimming and sealing entry points is key.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Mesa", slug: "mesa" },
      { name: "Scottsdale", slug: "scottsdale" },
      { name: "Tempe", slug: "tempe" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Phoenix, AZ | Bark Scorpions & Desert Termites",
    metaDescription:
      "Phoenix pest control for bark scorpions, desert roaches, subterranean termites, black widows and roof rats. Sealing plus treatment, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "tucson",
    name: "Tucson",
    state: "Arizona",
    stateSlug: "arizona",
    stateAbbr: "AZ",
    tier: "T1",
    population: "~545,000",
    county: "Pima County",
    climate: "desert",
    climateDriver:
      "Tucson sits in the Sonoran Desert at 2,400 feet elevation with a bimodal rainfall pattern: the summer monsoon (July through September) brings intense brief storms, and a gentler winter wet season. The monsoon heat and humidity drive pest activity to its peak, and the bark scorpion density here is among the highest in the United States.",
    topPests: [
      "Bark Scorpions",
      "Black Widows",
      "Pack Rats",
      "Termites",
      "Cockroaches",
    ],
    pestProfile: [
      {
        name: "Arizona bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Active spring through fall, most aggressive during monsoon, seek shelter year-round",
        note: "University of Arizona Cooperative Extension confirms Tucson has one of the highest bark scorpion densities in the United States. Bark scorpions are the only North American scorpion with venom considered medically significant. Tucson's Pima County poison control center handles scorpion sting calls regularly. Children and elderly individuals are at highest risk.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Black widows are very common in Tucson and the surrounding desert, found in utility boxes, under outdoor furniture, in wood piles, in block wall gaps, and in storage areas. The female's bite is medically significant.",
      },
      {
        name: "Pack rats (woodrats)",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Pack rats are native to the Sonoran Desert and are a defining pest challenge in Tucson. They build large stick-and-debris middens under porches, in crawl spaces, and in engine compartments. A pack rat nest under a hood can disable a vehicle. The middens can also harbor bark scorpions.",
      },
      {
        name: "Desert and subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms during and after monsoon rains (July to September), active spring through fall",
        note: "Tucson has both desert subterranean and Heterotermes termites. Swarming peaks during and after monsoon rain events when warm humid conditions trigger the emergence of winged reproductives. The post-monsoon period is the critical inspection window.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, surge indoors during monsoon and in summer heat",
        note: "American cockroaches enter Tucson homes seeking moisture during the intense pre-monsoon heat (May through June) and during monsoon rains. They are drawn to plumbing areas, under sinks, and crawl spaces.",
      },
    ],
    localHook:
      "Tucson has among the highest bark scorpion densities in the United States. University of Arizona researchers have studied them here for decades. They are not just a desert curiosity: Tucson's Pima County poison control center handles scorpion sting calls regularly throughout the warm season. For families with young children, scorpion management is the top pest priority.",
    intro:
      "Pest control in Tucson centers on the bark scorpion, and for good reason. University of Arizona Cooperative Extension confirms Tucson has one of the highest bark scorpion densities in the country. Pima County poison control handles sting calls regularly through the warm season, with children and elderly individuals at the highest risk. Pack rats build middens under porches and in engine compartments, black widows are common in every yard, termites swarm during monsoon rains, and cockroaches push inside when the summer heat peaks.",
    sections: [
      {
        heading: "Bark scorpions: the Tucson priority",
        body: "Arizona bark scorpions are the only North American scorpion with venom considered medically significant, and Tucson has among the highest densities in the country. University of Arizona researchers have studied them in depth. They climb walls, hide in shoes left on the floor, and enter through gaps around doors and windows, particularly during hot weather when they seek moisture and cooler temperatures. They are most active at night. The practical defense is sealing entry points, regular perimeter treatment, reducing harborage sites in the yard, and checking shoes before putting them on. A black light at night reveals scorpions that are otherwise invisible.",
      },
      {
        heading: "Pack rat middens: a specifically Tucson problem",
        body: "Pack rats are native desert rodents that build large stick-and-debris midden nests in protected spots. Under a porch, in a crawl space, in a vehicle engine compartment: these are their preferred sites. A pack rat midden under a car hood can fill with sticks, cacti spines, and debris that can damage hoses and wiring. The middens also provide excellent harborage for bark scorpions, so a pack rat nest is often a compounded problem. Managing pack rats in Tucson requires the same consistent attention as managing cockroaches in a humid city.",
      },
    ],
    prevention: [
      "Seal gaps around doors, windows, and utility penetrations to reduce scorpion entry.",
      "Shake shoes before putting them on and check bedding in scorpion-active areas.",
      "Inspect the engine compartment of vehicles that sit outside for pack rat nesting material.",
      "Remove debris, rock piles, and stored wood from against the exterior walls to reduce scorpion and black widow harborage.",
    ],
    costNote:
      "Tucson pest control is typically quoted as a general desert plan covering scorpions, spiders, cockroaches, and ants, with pack rat removal and termite inspection quoted separately. Monthly or bi-monthly perimeter treatment is standard for homes in Tucson given the scorpion density. Start with a free inspection.",
    faqs: [
      {
        question: "How dangerous are bark scorpions in Tucson?",
        answer:
          "Arizona bark scorpions are the only North American scorpion with medically significant venom. University of Arizona Extension confirms Tucson has one of the highest densities in the country. Most stings cause pain and temporary symptoms, but children, elderly individuals, and those with compromised immune systems can have more serious reactions. Tucson's Pima County poison control center handles sting calls regularly. Regular treatment significantly reduces the risk of contact.",
      },
      {
        question: "What are pack rats and why are they common in Tucson?",
        answer:
          "Pack rats, properly called woodrats, are native Sonoran Desert rodents that build large stick midden nests in protected spots. They are common across the Tucson metro, particularly on properties backing up to desert or open land. They damage vehicles by nesting in engine compartments and can cause structural damage. Their middens also harbor bark scorpions.",
      },
      {
        question: "When do termites swarm in Tucson?",
        answer:
          "Tucson termites swarm primarily during and after monsoon rain events from July through September. The warm humid conditions following a monsoon storm trigger emergence of winged reproductives. If you see a swarm of winged insects around windows or lights after a monsoon, a professional inspection is the right response.",
      },
      {
        question: "How do I find scorpions in my home?",
        answer:
          "Bark scorpions fluoresce bright blue-green under ultraviolet light. A black light (UV flashlight) used at night reveals scorpions that are otherwise completely invisible in cracks, on walls, and in the yard. Regular scanning of areas near entry points, under furniture, and around the perimeter helps identify active zones for treatment.",
      },
      {
        question: "Is monthly pest control really necessary in Tucson?",
        answer:
          "For most Tucson homes, yes. The bark scorpion density and the year-round mild desert climate mean pest pressure does not pause seasonally. Monthly or bi-monthly perimeter treatment maintains a barrier against scorpions, spiders, and cockroaches year-round. Many pest control companies in Tucson consider this the standard of care.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Phoenix", slug: "phoenix" },
      { name: "Marana", slug: "marana" },
      { name: "Sierra Vista", slug: "sierra-vista" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Tucson, AZ | Bark Scorpions, Pack Rats & Termites",
    metaDescription:
      "Tucson pest control for Arizona bark scorpions, black widows, pack rats, desert termites and cockroaches. Sonoran Desert specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "mesa",
    name: "Mesa",
    state: "Arizona",
    stateSlug: "arizona",
    stateAbbr: "AZ",
    tier: "T1",
    population: "~510,000",
    county: "Maricopa County",
    climate: "desert",
    climateDriver:
      "Mesa sits in the Sonoran Desert in the East Valley of metro Phoenix. Extreme summer heat above 110 degrees Fahrenheit, mild winters, and the bimodal rainfall with a summer monsoon shape the pest year. The heat drives scorpions and other desert pests into homes seeking moisture and cooler temperatures.",
    topPests: [
      "Bark Scorpions",
      "Black Widows",
      "Termites",
      "Roof Rats",
      "Crickets",
    ],
    pestProfile: [
      {
        name: "Arizona bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Active spring through fall, seek shelter indoors in extreme heat",
        note: "Mesa and the entire East Valley sit in high bark scorpion territory. The Arizona bark scorpion is the only North American scorpion with medically significant venom. They climb walls, enter through gaps under doors and around plumbing, and are most active at night.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Black widows are very common across Mesa, favoring block walls, utility boxes, garages, and outdoor storage. The female's bite is medically significant.",
      },
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms during and after monsoon rains, active spring through fall",
        note: "Desert subterranean termites are widespread across the East Valley. The irrigated landscapes and slab-on-grade construction common in Mesa create favorable conditions, and swarms follow monsoon rain events.",
      },
      {
        name: "Roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats have spread across the Phoenix metro including Mesa over the past two decades, nesting in citrus trees, palms, and attics. The mature landscaping and fruit trees in established Mesa neighborhoods support growing populations.",
      },
      {
        name: "Crickets",
        serviceSlug: "cricket-control",
        activeSeason: "Surge in late summer and fall",
        note: "Field crickets surge in large numbers in late summer and fall across the East Valley, gathering around lights and entering homes and garages. They are a nuisance and also a food source that can attract scorpions and spiders.",
      },
    ],
    localHook:
      "Mesa sits in the same high bark scorpion zone as the rest of the East Valley, and these are not harmless desert curiosities: the Arizona bark scorpion is the only scorpion in North America whose sting is medically significant. For families with young children, scorpion management is the pest priority here.",
    intro:
      "Pest control in Mesa is desert pest control. The East Valley sits in high bark scorpion territory, and the Arizona bark scorpion carries the only medically significant scorpion venom in North America. The extreme summer heat drives scorpions, spiders, and rodents toward the moisture and cooler temperatures of homes. Black widows favor the block walls common across Mesa, subterranean termites swarm after monsoon rains, roof rats have spread through the citrus and palm landscaping, and crickets surge each fall.",
    sections: [
      {
        heading: "Why scorpions are the Mesa priority",
        body: "Mesa homeowners with young children rank scorpion control first, and for good reason. The Arizona bark scorpion is the only North American scorpion with venom serious enough to require medical attention, and the East Valley has high densities. They squeeze through gaps as thin as a credit card, climb walls, and are most active at night. The practical defense combines sealing entry points under doors and around plumbing, regular perimeter treatment, reducing harborage in the yard, and reducing the crickets and other insects scorpions feed on. A black light at night reveals them, since they fluoresce.",
      },
      {
        heading: "Block walls and black widows",
        body: "The block walls that surround most Mesa properties are functional and attractive, and they are also prime black widow habitat. The hollow gaps, the weep holes, and the bases of the walls give black widows the dry, undisturbed shelter they prefer. Combined with utility boxes, garages, and outdoor storage, this means black widows are a routine find across Mesa. Regular perimeter treatment and clearing harborage near doors, garages, and play areas keeps the population down. Their bite is medically significant, so this is worth steady attention.",
      },
    ],
    prevention: [
      "Seal gaps under doors, around plumbing, and at weep holes to reduce scorpion entry.",
      "Shake out shoes and check bedding in scorpion-active areas, and use a black light to find them at night.",
      "Clear block wall bases, utility boxes, and outdoor storage of clutter to reduce black widow harborage.",
      "Reduce outdoor lighting and seal garages to limit the fall cricket surge that feeds scorpions.",
    ],
    costNote:
      "Mesa pest control is commonly quoted as a recurring perimeter plan covering scorpions, spiders, and crickets, with termite protection and roof rat work quoted separately. Monthly or bi-monthly service is standard given the scorpion pressure. Start with a free inspection.",
    faqs: [
      {
        question: "How dangerous are bark scorpions in Mesa?",
        answer:
          "The Arizona bark scorpion is the only North American scorpion with medically significant venom, and Mesa sits in high bark scorpion territory. Most stings cause intense pain, but children, the elderly, and immunocompromised individuals can have more serious reactions. Regular perimeter treatment, sealing entry points, and reducing harborage significantly lower the risk of indoor encounters.",
      },
      {
        question: "Why are black widows so common around Mesa homes?",
        answer:
          "The block walls surrounding most Mesa properties provide ideal black widow habitat: dry, undisturbed gaps, weep holes, and sheltered bases. Combined with utility boxes, garages, and outdoor storage, this makes black widows a routine find. Their bite is medically significant, so regular treatment and clearing harborage near doors and play areas matters.",
      },
      {
        question: "When do termites swarm in Mesa?",
        answer:
          "Desert subterranean termites swarm during and after the summer monsoon rains, when warm humid conditions trigger the emergence of winged reproductives. The irrigated landscapes and slab-on-grade construction common in Mesa create favorable conditions. A swarm around lights or windows after a monsoon storm warrants a professional inspection.",
      },
      {
        question: "Are roof rats a problem in Mesa?",
        answer:
          "Yes, increasingly. Roof rats have spread across the Phoenix metro including Mesa over the past two decades, nesting in citrus trees, palms, and attics. Established neighborhoods with mature fruit trees and landscaping support growing populations. Trimming trees back from rooflines and sealing attic vents are the first preventive steps.",
      },
      {
        question: "Why do crickets swarm my Mesa home in fall?",
        answer:
          "Field crickets surge in large numbers across the East Valley in late summer and fall, gathering around exterior lights and entering homes and garages. Beyond the nuisance, they are a food source that attracts scorpions and spiders, so controlling crickets also reduces the predators that follow them. Reducing outdoor lighting and sealing entry points helps.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Phoenix", slug: "phoenix" },
      { name: "Tempe", slug: "tempe" },
      { name: "Chandler", slug: "chandler" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Mesa, AZ | Bark Scorpions, Black Widows & Termites",
    metaDescription:
      "Mesa pest control for Arizona bark scorpions, black widows, subterranean termites, roof rats and crickets. East Valley desert specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
