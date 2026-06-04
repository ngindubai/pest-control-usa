import type { CityLocation } from "@/types";

// Colorado seed cities. Pest data reflects the semi-arid, high-altitude Front
// Range climate (Colorado State University Extension).

export const coloradoCities: CityLocation[] = [
  {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    stateSlug: "colorado",
    stateAbbr: "CO",
    tier: "T1",
    population: "~715,000",
    county: "Denver County",
    climate: "cold",
    climateDriver:
      "Denver is high, dry, and cold in winter. The semi-arid climate keeps humidity-loving pests low, but the cold drives rodents indoors in fall, and the Front Range brings its own seasonal arrivals.",
    topPests: ["Mice", "Ants", "Wasps", "Spiders", "Miller Moths"],
    pestProfile: [
      {
        name: "House mice and voles",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active all winter",
        note: "As the cold sets in, mice push indoors through small gaps, while voles tunnel through yards and gardens outdoors.",
      },
      {
        name: "Pavement and carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through summer",
        note: "Pavement ants nest under walks and foundations, while carpenter ants seek out damp wood around leaks and irrigation.",
      },
      {
        name: "Yellowjackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "The dry summers suit wasps well, and nests grow large and aggressive around food and trash by late season.",
      },
      {
        name: "Spiders, including occasional black widows",
        serviceSlug: "spider-control",
        activeSeason: "More visible in warm months",
        note: "Common house spiders are widespread, and black widows turn up in window wells, garages, and woodpiles at lower elevations.",
      },
      {
        name: "Miller moths",
        serviceSlug: "moth-control",
        activeSeason: "Spring migration, peaks May to June",
        note: "Each spring, miller moths migrate through the Front Range in large numbers and crowd into homes around doors and windows.",
      },
    ],
    localHook:
      "Every spring the Front Range gets its own pest event: miller moths pouring through in the thousands, slipping around every door and window on their way to the mountains.",
    intro:
      "Pest control in Denver looks different from a humid city. The high, dry, semi-arid climate keeps mosquitoes and tropical pests low, so the local cast leans toward rodents, ants, wasps, and spiders. Two things stand out: the fall rush of mice indoors when the cold arrives, and the spring miller moth migration that funnels through the Front Range. Most homes here need a plan tuned to the season, exclusion in fall, wasp and spider work in summer, rather than the year-round heat-pest pressure of the South.",
    sections: [
      {
        heading: "What are the moths swarming my house in spring?",
        body: "Those are miller moths, the adult stage of the army cutworm, and each spring they migrate from the plains up to the mountains, passing right through the Denver area in large numbers. They are a nuisance rather than a danger and do not breed indoors. Reducing outdoor lighting at night and sealing gaps around doors and windows cuts how many get in during the few weeks they pass through.",
      },
      {
        heading: "Why do mice come in once it gets cold?",
        body: "Denver winters are cold, and mice respond by moving indoors through gaps as small as a pencil. Once inside, they nest in walls and basements for the season. Sealing entry points before fall is far more effective than trapping after the fact. The dry climate also means fewer moisture pests overall, so rodent exclusion is the main autumn job.",
      },
    ],
    prevention: [
      "Seal foundation, pipe, and door gaps before fall to keep mice out.",
      "Reduce outdoor lighting in spring to draw fewer miller moths to the house.",
      "Knock down small wasp nests early in summer before they grow.",
      "Clear window wells, woodpiles, and garage clutter to limit black widow harborage.",
    ],
    costNote:
      "Many Denver homes use a seasonal plan: fall exclusion for rodents, summer treatment for wasps and spiders, with a quick response during the spring moth migration. A free inspection sets the plan to your home.",
    faqs: [
      {
        question: "What are the moths invading my Denver home in spring?",
        answer:
          "Those are miller moths, which migrate through the Front Range each spring on their way to the mountains, often in large numbers. They are a nuisance, not a danger, and do not breed indoors. Reducing outdoor lighting and sealing gaps around doors and windows limits how many get in.",
      },
      {
        question: "When do mice get into Denver homes?",
        answer:
          "Mostly in fall, when the cold pushes them indoors through gaps as small as a pencil width. They nest in walls and basements for winter. Sealing entry points before fall is the most effective defense.",
      },
      {
        question: "Are black widows found in Denver?",
        answer:
          "Yes, particularly at lower elevations, in window wells, garages, woodpiles, and outbuildings. Their bite is medically significant, so clearing clutter and harborage near doors and play areas is sensible.",
      },
      {
        question: "Are mosquitoes a big problem in Denver?",
        answer:
          "Less than in humid cities, thanks to the dry climate, though they can appear near standing water and irrigation in summer. Most Denver pest plans focus on rodents, ants, wasps, spiders, and the seasonal moths instead.",
      },
      {
        question: "When are wasps worst in Denver?",
        answer:
          "Wasp and yellowjacket nests grow through the dry summer and are largest and most aggressive in late summer around eaves, decks, and trash. Removing small nests early is far easier than dealing with a mature one.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Aurora", slug: "aurora-co" },
      { name: "Lakewood", slug: "lakewood" },
      { name: "Boulder", slug: "boulder" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Denver, CO | Mice, Miller Moths & Wasps",
    metaDescription:
      "Denver pest control for fall mice, spring miller moths, pavement and carpenter ants, wasps and black widows. Seasonal plans, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "colorado-springs",
    name: "Colorado Springs",
    state: "Colorado",
    stateSlug: "colorado",
    stateAbbr: "CO",
    tier: "T1",
    population: "~480,000",
    county: "El Paso County",
    climate: "semi-arid",
    climateDriver:
      "Colorado Springs sits at 6,035 feet elevation at the foot of Pikes Peak in the Southern Front Range. The high elevation semi-arid climate means cold winters, dry summers, and significant variation between sunny days and cold nights. The foothills location brings wildlife-adjacent pest pressure including voles, mice, and insects not typically found in flatland cities.",
    topPests: ["Mice", "Ants", "Wasps", "Voles", "Cockroaches"],
    pestProfile: [
      {
        name: "House mice and deer mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, major surge in September and October",
        note: "Colorado Springs' cold winters and foothills location create significant mouse pressure. House mice enter heated buildings in fall. Deer mice are common in the foothills properties adjacent to open land and carry hantavirus; the Colorado Department of Public Health has confirmed hantavirus cases in El Paso County. Handling rodent nesting material in enclosed spaces requires appropriate precautions.",
      },
      {
        name: "Pavement and harvester ants",
        serviceSlug: "ant-control",
        activeSeason: "April through October",
        note: "Pavement ants are the dominant nuisance ant species in Colorado Springs, foraging in kitchens and bathrooms. Red harvester ants are present in the drier grassland areas of the city and bite when disturbed. Odorous house ants are also common.",
      },
      {
        name: "Yellow jacket and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "June through October, most aggressive August through September",
        note: "Yellow jackets are aggressive in late summer and fall in Colorado Springs, nesting in the ground and wall voids. The foothills location also brings bald-faced hornets, which build large paper nests in trees and under eaves.",
      },
      {
        name: "Voles",
        serviceSlug: "rat-control",
        activeSeason: "Year-round, most active spring and fall",
        note: "Voles are a significant pest in Colorado Springs' foothills neighborhoods, tunneling through lawns and damaging the root systems of landscaping plants. They are more common here than in most US cities because of the proximity to open grassland habitat.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Colorado Springs apartment buildings and commercial settings. The cold exterior climate does not affect them, as they maintain populations entirely indoors.",
      },
    ],
    localHook:
      "Colorado Springs' foothills location at the base of Pikes Peak brings a pest environment that flatland cities do not have. Voles tunnel through lawns, deer mice carry hantavirus risk from the surrounding open land, and the late summer yellow jacket pressure at altitude is notable. The elevation also means fall comes faster and harder here, with the mouse surge arriving earlier than in Denver.",
    intro:
      "Pest control in Colorado Springs reflects the city's unique position: sitting at the foot of Pikes Peak at over 6,000 feet elevation, surrounded by foothills and open land. That setting brings voles tunneling through yards, deer mice with hantavirus risk from the adjacent open land (the Colorado Department of Public Health has confirmed hantavirus cases in El Paso County), and an early, fast fall that triggers mouse pressure in September. Yellow jackets are aggressive late in summer, ants are active from April through October, and German cockroaches run year-round indoors.",
    sections: [
      {
        heading: "Deer mice and hantavirus at the foothills edge",
        body: "Properties in Colorado Springs that back up to open land or the foothills have genuine deer mouse exposure. The Colorado Department of Public Health confirms hantavirus pulmonary syndrome cases have occurred in El Paso County. The risk comes from disturbing dried deer mouse droppings or nesting material in enclosed spaces: sheds, garages, and vehicles that have been sitting unused. The safe approach is wetting the area with disinfectant before cleaning, wearing gloves, and ventilating the space. A pest control professional handles this more safely than most homeowners can manage alone.",
      },
      {
        heading: "Voles: the lawn pest most homeowners don't expect",
        body: "Voles are small rodents that tunnel just below the soil surface, creating winding runways through lawns and killing grass by eating root systems. They are far more common in Colorado Springs than in most US cities because the foothills grassland habitat extends right to the city's edges. Vole damage becomes visible in spring when the snow melts: winding tunnels and patches of dead grass mark their winter activity. Managing vole populations requires a combination of habitat modification and population control.",
      },
    ],
    prevention: [
      "Seal foundation gaps and utility penetrations in September before the early mountain fall drives mice inside.",
      "Wet down areas with deer mouse droppings in sheds or enclosed spaces before cleaning, and wear gloves.",
      "Treat yellow jacket ground nests in spring when colonies are still small.",
      "Reduce ground cover and wood mulch in gardens adjacent to open land to limit vole harborage.",
    ],
    costNote:
      "Colorado Springs pest control is typically quoted as a general plan covering ants, wasps, spiders, and cockroaches, with rodent exclusion quoted separately. Vole management and hantavirus-safe rodent cleanup in enclosed spaces may be separate services. Start with a free inspection.",
    faqs: [
      {
        question: "Is hantavirus a real concern in Colorado Springs?",
        answer:
          "Yes. The Colorado Department of Public Health has confirmed hantavirus pulmonary syndrome cases in El Paso County. The risk comes from deer mice, which are common in the foothills and open land around Colorado Springs. The primary exposure route is disturbing dried deer mouse droppings or nesting material in enclosed spaces like sheds and garages. Wetting with disinfectant before cleaning and wearing gloves are the recommended precautions.",
      },
      {
        question: "What are voles and why are they common in Colorado Springs?",
        answer:
          "Voles are small rodents that tunnel through lawns, eating roots and creating winding surface runways. They are more common in Colorado Springs than in most US cities because the foothills grassland habitat extends right to the city edges, providing a large surrounding population. Damage often appears in spring after snow melts, revealing dead grass patches and tunnel networks.",
      },
      {
        question: "When is the mouse surge in Colorado Springs?",
        answer:
          "Earlier than in lower-elevation cities. The foothills altitude means fall arrives faster, and the mouse surge into heated buildings typically begins in September rather than October. Sealing gaps around foundations, pipes, and utilities in late August is the most effective preventive timing.",
      },
      {
        question: "Are yellow jackets worse in Colorado Springs than in lower cities?",
        answer:
          "Late-summer yellow jacket pressure is significant here. Colonies reach peak size in August and September, and the foothills location brings additional bald-faced hornets building large paper nests in trees. Treating ground nests in spring while colonies are small is significantly safer than dealing with mature nests in August.",
      },
      {
        question: "Do German cockroaches survive Colorado Springs winters?",
        answer:
          "Yes. German cockroaches are entirely indoor insects and are not affected by the cold exterior. They maintain populations year-round in heated kitchens, bathrooms, and wall voids regardless of outdoor temperatures.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Denver", slug: "denver" },
      { name: "Pueblo", slug: "pueblo" },
      { name: "Castle Rock", slug: "castle-rock" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle:
      "Pest Control in Colorado Springs, CO | Mice, Voles & Foothills Pests",
    metaDescription:
      "Colorado Springs pest control for mice (including deer mice/hantavirus), voles, yellow jackets, ants and cockroaches. Foothills specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "aurora-co",
    name: "Aurora",
    state: "Colorado",
    stateSlug: "colorado",
    stateAbbr: "CO",
    tier: "T1",
    population: "~390,000",
    county: "Arapahoe County",
    climate: "semi-arid",
    climateDriver:
      "Aurora sits on the high plains east of Denver at roughly 5,400 feet elevation. The semi-arid climate brings cold winters, dry summers, and low humidity. As on the rest of the Front Range, pests concentrate in spring and fall, with rodents driven indoors by the cold and a distinctive spring miller moth migration.",
    topPests: ["Mice", "Ants", "Wasps", "Spiders", "Miller Moths"],
    pestProfile: [
      {
        name: "House mice and voles",
        serviceSlug: "mice-control",
        activeSeason: "Mice move indoors in fall; voles active outdoors year-round",
        note: "Aurora's cold winters push mice indoors through small gaps each fall. Voles tunnel through lawns and gardens, particularly in the newer subdivisions bordering open plains on the eastern edge of the city.",
      },
      {
        name: "Pavement and carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through summer",
        note: "Pavement ants nest under walks and foundations across Aurora. Carpenter ants seek out damp wood around leaks, irrigation, and moisture-damaged areas.",
      },
      {
        name: "Yellow jacket and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "The dry Front Range summers suit wasps well, and nests grow large and aggressive around food and trash by late season. They nest in the ground, wall voids, and under eaves.",
      },
      {
        name: "Spiders, including black widows",
        serviceSlug: "spider-control",
        activeSeason: "More visible in warm months",
        note: "Common house spiders are widespread, and black widows turn up in window wells, garages, and woodpiles. Their bite is medically significant.",
      },
      {
        name: "Miller moths",
        serviceSlug: "moth-control",
        activeSeason: "Spring migration, peaks May to June",
        note: "Each spring, miller moths migrate through the Front Range in large numbers and crowd into homes around doors and windows on their way to the mountains.",
      },
    ],
    localHook:
      "Aurora gets the same Front Range pest calendar as Denver next door: the spring miller moth migration pouring through, and the fall rush of mice indoors when the cold arrives. On the city's growing eastern edge, the open plains also bring voles into newer subdivisions.",
    intro:
      "Pest control in Aurora follows the Front Range seasons. The high, dry, semi-arid climate keeps humidity-loving pests low, so the local cast leans toward rodents, ants, wasps, and spiders. Two events stand out: the spring miller moth migration that funnels through the area, and the fall rush of mice indoors when the cold sets in. On Aurora's fast-growing eastern edge, the bordering open plains add vole pressure to the newer subdivisions. Most homes here do well with a plan tuned to the season.",
    sections: [
      {
        heading: "Front Range seasons, Aurora edges",
        body: "Aurora shares Denver's seasonal pest rhythm: seal the house against mice before fall, handle wasps and spiders through summer, and expect the miller moths in spring. What is a little different is the eastern edge of the city, where rapid growth has put new subdivisions right against open plains. That border brings voles tunneling into lawns and the occasional field mouse pressure that purely urban neighborhoods do not see. Homes on the developing edge benefit from extra attention to yard harborage and rodent exclusion.",
      },
      {
        heading: "What are the moths in spring, and why do mice come in fall?",
        body: "The spring moths are miller moths, the adult stage of the army cutworm, migrating from the plains up to the mountains through the Front Range each year in large numbers. They are a nuisance, not a danger, and do not breed indoors. Reducing outdoor lighting and sealing gaps limits how many get in. The fall mice are responding to the cold: Aurora winters drive them indoors through gaps as small as a pencil. Sealing entry points before fall is far more effective than trapping after the fact.",
      },
    ],
    prevention: [
      "Seal foundation, pipe, and door gaps before fall to keep mice out.",
      "Reduce outdoor lighting in spring to draw fewer miller moths to the house.",
      "Knock down small wasp nests early in summer before they grow.",
      "Clear window wells, woodpiles, and yard clutter to limit black widow and vole harborage, especially on the city's open eastern edge.",
    ],
    costNote:
      "Many Aurora homes use a seasonal plan: fall exclusion for rodents, summer treatment for wasps and spiders, and a quick response during the spring moth migration. A free inspection sets the plan to your home.",
    faqs: [
      {
        question: "What are the moths invading my Aurora home in spring?",
        answer:
          "Those are miller moths, which migrate through the Front Range each spring on their way to the mountains, often in large numbers. They are a nuisance, not a danger, and do not breed indoors. Reducing outdoor lighting and sealing gaps around doors and windows limits how many get in.",
      },
      {
        question: "When do mice get into Aurora homes?",
        answer:
          "Mostly in fall, when the cold pushes them indoors through gaps as small as a pencil width. They nest in walls and basements for winter. Sealing entry points before fall is the most effective defense. Homes on Aurora's open eastern edge may also see field mice from the bordering plains.",
      },
      {
        question: "Why do I have voles tunneling through my Aurora lawn?",
        answer:
          "Voles are common in Aurora, particularly in the newer subdivisions on the eastern edge that border open plains. They tunnel just below the surface, eating roots and creating winding runways. Damage often shows up in spring after snow melts. Reducing ground cover and yard clutter and managing the population keeps the damage down.",
      },
      {
        question: "Are black widows found in Aurora?",
        answer:
          "Yes, in window wells, garages, woodpiles, and outbuildings. Their bite is medically significant, so clearing clutter and harborage near doors and play areas is sensible. They favor dry, undisturbed, sheltered spots.",
      },
      {
        question: "When are wasps worst in Aurora?",
        answer:
          "Wasp and yellow jacket nests grow through the dry summer and are largest and most aggressive in late summer around eaves, decks, and trash. Removing small nests early is far easier and safer than dealing with a mature one.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Denver", slug: "denver" },
      { name: "Centennial", slug: "centennial" },
      { name: "Parker", slug: "parker" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Aurora, CO | Mice, Voles, Wasps & Miller Moths",
    metaDescription:
      "Aurora pest control for fall mice, voles, wasps, black widows and spring miller moths. Front Range seasonal specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
