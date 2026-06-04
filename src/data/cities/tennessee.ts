import type { CityLocation } from "@/types";

// Tennessee seed cities. Pest data reflects humid subtropical Mid-South patterns
// (University of Tennessee Extension).

export const tennesseeCities: CityLocation[] = [
  {
    slug: "nashville",
    name: "Nashville",
    state: "Tennessee",
    stateSlug: "tennessee",
    stateAbbr: "TN",
    tier: "T1",
    population: "~690,000",
    county: "Davidson County",
    climate: "hot-humid",
    climateDriver:
      "Nashville has a humid subtropical climate with hot, wet summers and mild winters. The long warm season suits termites and mosquitoes, and the region is within range of the brown recluse spider.",
    topPests: ["Termites", "Mosquitoes", "Spiders", "Cockroaches", "Mice"],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring, active much of the year",
        note: "Middle Tennessee has heavy subterranean termite pressure, and the warm, humid climate keeps colonies active across much of the year.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Spring through fall",
        note: "Hot, wet summers and standing water make for a long mosquito season, including the day-biting Asian tiger mosquito.",
      },
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, more active in warm months",
        note: "Nashville lies within the brown recluse's native range. They hide in undisturbed spots like closets, basements, and storage boxes, and their bite is medically significant.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "American roaches breed in mulch, crawl spaces, and drains and move indoors in heat, while German roaches breed indoors in kitchens.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall",
        note: "Mice push indoors as the weather cools, nesting in walls, basements, and crawl spaces through the milder winter.",
      },
    ],
    localHook:
      "Two pests define a Nashville home: subterranean termites working up from the soil much of the year, and the brown recluse spider, a native species here whose bite is one of the few that genuinely warrants caution.",
    intro:
      "Pest control in Nashville is set by the humid subtropical climate. The long warm season gives subterranean termites and mosquitoes plenty of room, and Middle Tennessee carries heavy termite pressure. The brown recluse spider is the other standout: a native species here that hides in quiet, undisturbed spots and delivers a bite worth taking seriously. Roaches and fall mice round out the list. The mild winters mean the pressure rarely fully lets up, so steady protection tends to beat one-off visits.",
    sections: [
      {
        heading: "Termite pressure in Middle Tennessee",
        body: "First, the costly risk: subterranean termites are heavy across the Nashville area and stay active much of the year in this climate, reaching wood through mud tubes from the soil. The early signs, faint mud tubes and spring swarms, are easy to miss. An annual inspection is the practical defense, particularly for homes with crawl spaces or any wood touching soil.",
      },
      {
        heading: "Brown recluse spiders and where they hide",
        body: "Nashville sits within the brown recluse's native range, so unlike many cities, this is a spider worth knowing. They avoid people and shelter in undisturbed places: closets, basements, attics, and stored boxes. Bites are uncommon but can be medically significant. Reducing clutter, sealing storage, and shaking out long-stored items lowers the risk, and treatment targets the harborage where they hide.",
      },
    ],
    prevention: [
      "Keep an annual termite inspection on the calendar given Middle Tennessee pressure.",
      "Reduce clutter and seal storage to limit brown recluse harborage.",
      "Remove standing water after rain to cut the long mosquito season.",
      "Reduce mulch and moisture against the foundation to limit roaches and termites.",
    ],
    costNote:
      "With year-round termite risk, a long mosquito season, and resident brown recluse spiders, many Nashville homes pair a recurring plan with an annual termite check. A free inspection sets the plan to your property.",
    faqs: [
      {
        question: "Are termites a serious risk in Nashville?",
        answer:
          "Yes. Middle Tennessee has heavy eastern subterranean termite pressure, and the mild, humid climate keeps colonies active much of the year. They reach wood through mud tubes from the soil, and early signs are easy to miss, so an annual inspection is strongly recommended.",
      },
      {
        question: "Are brown recluse spiders in Nashville?",
        answer:
          "Yes, Nashville lies within the brown recluse's native range. They avoid people and hide in undisturbed spots like closets, basements, and stored boxes. Bites are uncommon but can be medically significant, so reducing clutter and sealing storage lowers the risk.",
      },
      {
        question: "How long is mosquito season in Nashville?",
        answer:
          "It runs roughly spring through fall, helped by hot, wet summers and standing water, and includes the day-biting Asian tiger mosquito. Removing standing water and treating shaded resting areas reduces the bites.",
      },
      {
        question: "Why do roaches come indoors in Nashville?",
        answer:
          "American roaches breed outdoors in mulch, crawl spaces, and drains and move inside in the heat, while German roaches breed indoors in kitchens. Reducing moisture and mulch against the home and sealing entry points keeps the outdoor type out.",
      },
      {
        question: "When do mice get into Nashville homes?",
        answer:
          "Mostly in fall, as cooling weather pushes them indoors to nest in walls, basements, and crawl spaces. Sealing entry points before fall is the most effective defense, with traps for any that get in.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Franklin", slug: "franklin" },
      { name: "Murfreesboro", slug: "murfreesboro" },
      { name: "Memphis", slug: "memphis" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Nashville, TN | Termites, Brown Recluse & Mosquitoes",
    metaDescription:
      "Nashville pest control for subterranean termites, brown recluse spiders, mosquitoes, roaches and mice. Annual termite checks, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "memphis",
    name: "Memphis",
    state: "Tennessee",
    stateSlug: "tennessee",
    stateAbbr: "TN",
    tier: "T1",
    population: "~630,000",
    county: "Shelby County",
    climate: "hot-humid",
    climateDriver:
      "Memphis sits on the Mississippi River in a hot, humid climate. The river, heavy summer rain, and warm season feed mosquitoes and termites, including the aggressive invasive Formosan termite.",
    topPests: ["Termites", "Mosquitoes", "Spiders", "Cockroaches", "Rats"],
    pestProfile: [
      {
        name: "Subterranean and Formosan termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring and early summer",
        note: "Memphis has both native subterranean termites and established invasive Formosan termites, which form much larger, more aggressive colonies and cause faster damage.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Spring through fall, long season",
        note: "The river, heavy rain, and warm season make for a long mosquito season, with West Nile virus monitored in Shelby County.",
      },
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors",
        note: "Memphis is well within the brown recluse's core range. They hide in undisturbed closets, basements, and storage, and their bite is medically significant.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "Large American roaches breed in drains, sewers, and damp crawl spaces and move indoors in the heat and humidity.",
      },
      {
        name: "Roof and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Rats thrive in the warm, food-rich river city and are displaced indoors by flooding along the Mississippi.",
      },
    ],
    localHook:
      "Memphis is one of the few US cities fighting both the brown recluse spider and the invasive Formosan termite at once. The river climate that makes the city green is exactly what both of them want.",
    intro:
      "Pest control in Memphis is shaped by the river and the heat. The humid Mississippi climate gives the city a long mosquito season and heavy termite pressure, and unlike most places it carries two serious termite threats: native subterranean and the aggressive invasive Formosan. The brown recluse spider is firmly at home here too, sheltering in quiet corners. Roaches and rats round it out, with river flooding regularly pushing pests indoors. Very little gets a real off-season, so steady protection works best.",
    sections: [
      {
        heading: "What makes Memphis termites different?",
        body: "Most cities deal with one termite type. Memphis has two that matter: native subterranean termites, which are slow and steady, and the invasive Formosan termite, which forms much larger, more aggressive colonies and damages wood faster. Because the treatments and stakes differ, an inspection here identifies which you have before any work begins, and an annual check is sensible given the double threat.",
      },
      {
        heading: "Living with the brown recluse",
        body: "Memphis sits well within the brown recluse's core range, so this is a spider worth respecting. They avoid people and hide in undisturbed spots, closets, basements, attics, and stored boxes. Bites are uncommon but can be medically significant. Reducing clutter, sealing storage, and shaking out long-stored items lowers the risk, while treatment targets the harborage where they shelter.",
      },
    ],
    prevention: [
      "Get an annual termite inspection given both subterranean and Formosan pressure.",
      "Reduce clutter and seal storage to limit brown recluse harborage.",
      "Remove standing water after rain to cut the long mosquito season.",
      "Address post-flood pest pressure quickly, as roaches and rats move with the water.",
    ],
    costNote:
      "Termite protection is the priority here, given both native and Formosan termites, and is quoted after inspection. General pest and mosquito control usually works best year-round. Start with a free assessment.",
    faqs: [
      {
        question: "Does Memphis have Formosan termites?",
        answer:
          "Yes. Alongside native subterranean termites, Memphis has established invasive Formosan termites, which form much larger, more aggressive colonies and damage wood faster. Because the two differ, an inspection identifies which you have first, and an annual check is wise given the double threat.",
      },
      {
        question: "Are brown recluse spiders common in Memphis?",
        answer:
          "Yes, Memphis is well within the brown recluse's core range. They avoid people and hide in undisturbed closets, basements, attics, and stored boxes. Bites are uncommon but can be medically significant, so reducing clutter and sealing storage lowers the risk.",
      },
      {
        question: "How serious are mosquitoes in Memphis?",
        answer:
          "The river, heavy rain, and warm season make for a long, active mosquito season, and West Nile virus is monitored in Shelby County. Removing standing water and treating shaded resting areas around the home reduces both bites and risk.",
      },
      {
        question: "Why do roaches and rats get worse after flooding?",
        answer:
          "Flooding along the Mississippi pushes American roaches and rats out of the ground and sewers and into homes. Call volumes climb after high water, so post-flood treatment and sealing entry points are common here.",
      },
      {
        question: "Is year-round pest control necessary in Memphis?",
        answer:
          "For most homes, yes. The humid climate keeps termites, mosquitoes, roaches, and spiders active across much of the year, and flooding adds surges, so a continuous plan holds them back better than occasional visits.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Germantown", slug: "germantown" },
      { name: "Bartlett", slug: "bartlett" },
      { name: "Nashville", slug: "nashville" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Memphis, TN | Termites, Brown Recluse & Mosquitoes",
    metaDescription:
      "Memphis pest control for subterranean and Formosan termites, brown recluse spiders, mosquitoes, roaches and rats. Free inspection. Call 1-800-PEST-USA.",
  },
];
