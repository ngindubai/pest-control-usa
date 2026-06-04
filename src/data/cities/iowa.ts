import type { CityLocation } from "@/types";

// Iowa city data. Pest intelligence verified against Iowa State University Extension.

export const iowaCities: CityLocation[] = [
  {
    slug: "des-moines",
    name: "Des Moines",
    state: "Iowa",
    stateSlug: "iowa",
    stateAbbr: "IA",
    tier: "T2",
    population: "~215,000",
    county: "Polk County",
    climate: "cold-humid",
    climateDriver:
      "Des Moines has a continental climate with cold, snowy winters and hot, humid summers. The Des Moines and Raccoon Rivers run through the city, providing mosquito breeding habitat in summer. Cold winters drive mice and other rodents indoors hard each fall, and the seasonal extremes push boxelder bugs and earwigs to seek shelter in homes.",
    topPests: ["House Mice", "Boxelder Bugs", "Carpenter Ants", "German Cockroaches", "Earwigs"],
    pestProfile: [
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall, active year-round once inside",
        note: "Des Moines winters are severe enough to drive mice firmly into heated buildings by October. Iowa State University Extension identifies mice as the most common rodent pest in Iowa homes, with fall being the critical entry period. Older homes and those near the rivers see the heaviest pressure.",
      },
      {
        name: "Boxelder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation (September to November), nuisance overwinter",
        note: "Boxelder bugs are one of the most complained-about fall pests in Des Moines. They aggregate on sun-facing building exteriors in September before working into wall voids for winter. Iowa State Extension confirms they are a major nuisance pest of central Iowa homes.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Active April through September",
        note: "Carpenter ants are the dominant structural ant pest in Iowa. They nest in moist or decayed wood and are common in Des Moines homes with moisture issues around windows, rooflines, or deck framing. An established indoor colony can number in the thousands and damage wood over several years.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are the primary indoor cockroach species in Des Moines apartment buildings, restaurants, and multi-family housing. They breed entirely indoors in kitchens and bathrooms and do not depend on outdoor conditions.",
      },
      {
        name: "Earwigs",
        serviceSlug: "earwig-control",
        activeSeason: "Spring through fall, seek shelter indoors in summer heat",
        note: "Earwigs are a common outdoor-to-indoor pest in Des Moines during hot, dry spells. They breed in moist soil and mulch around the foundation and move indoors seeking moisture. Iowa State Extension confirms earwigs are a frequent nuisance pest in Iowa.",
      },
    ],
    localHook:
      "Des Moines winters are cold enough to make homes very attractive to mice. Iowa State University Extension consistently ranks mice as the most common rodent pest in Iowa homes, and the fall surge here, starting in October, is real. Sealing before the cold arrives is the single most effective pest prevention step for most Des Moines households.",
    intro:
      "Pest control in Des Moines follows Iowa's hard seasonal calendar. The cold winters bring a reliable fall mouse surge that Iowa State University Extension confirms is the most common rodent problem across Iowa homes. Boxelder bugs are the other fall fixture, aggregating by the thousands on building exteriors before pushing into wall voids. Through summer, carpenter ants are the structural concern, nesting in moist wood, while German cockroaches maintain year-round indoor populations in apartments and commercial settings. Earwigs bridge the gap, moving in from garden beds during dry spells.",
    sections: [
      {
        heading: "The fall mouse surge in Des Moines",
        body: "Iowa winters are serious, and mice know it. By October, house mice are actively searching for heated spaces and can squeeze through gaps as small as a dime. Des Moines homes near the Des Moines and Raccoon Rivers, and those with older construction or gaps around utility lines, see the heaviest fall pressure. The practical window for exclusion is September, before temperatures drop and mice start actively pressing in. Sealing foundation gaps, pipe penetrations, dryer vents, and the gaps under garage doors, combined with strategic trap placement inside, is the standard approach.",
      },
      {
        heading: "Carpenter ants and moisture",
        body: "Carpenter ants do not eat wood the way termites do, but they excavate galleries in moist or softened wood to nest, and over several years an established colony does real damage. In Des Moines, the most common sites are window frames with old caulk, roof lines with moisture intrusion, deck framing, and any wood touching the ground. Finding carpenter ants indoors in winter or spring usually means there is an established colony inside the structure rather than just foraging workers coming in from outside. Treatment targets the satellite colonies inside and the parent colony outside.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and the gap under garage doors in September before the fall mouse surge.",
      "Check window frames, roof lines, and deck framing for softened wood that may harbor carpenter ants.",
      "Reduce mulch depth against the foundation and fix drainage to reduce earwig breeding habitat.",
      "Seal gaps around windows and siding before September to limit boxelder bug entry.",
    ],
    costNote:
      "Des Moines pest control is typically quoted as a general plan covering mice, ants, spiders, and earwigs, with boxelder bug seasonal treatment added in fall. A free assessment identifies the specific pressure at your property.",
    faqs: [
      {
        question: "When do mice become a problem in Des Moines?",
        answer:
          "The surge starts in October as temperatures drop. Iowa State University Extension identifies mice as the most common rodent pest in Iowa homes, with fall as the critical entry period. Sealing foundation gaps, pipe penetrations, and the gap under garage doors in September is the most effective prevention step.",
      },
      {
        question: "What do carpenter ants look like and are they dangerous?",
        answer:
          "Carpenter ants are large black ants, typically a quarter inch or more in length. They do not sting and are not dangerous to people, but they excavate galleries in moist or softened wood that can damage structure over several years. Finding them indoors in winter or early spring usually indicates an established colony in the walls, which needs professional treatment.",
      },
      {
        question: "How do I stop boxelder bugs from getting into my Des Moines home?",
        answer:
          "Seal gaps around windows, siding, utility lines, and eaves before they begin aggregating in September. Treating the exterior of the building when they first start to mass is more effective than waiting until they have pushed into the wall voids. Once inside the walls, they are difficult to remove until spring.",
      },
      {
        question: "Are German cockroaches common in Des Moines apartments?",
        answer:
          "Yes. German cockroaches are the dominant indoor cockroach species in Des Moines apartment buildings, restaurants, and multi-family housing. They breed entirely indoors in kitchens and bathrooms. Because they spread through shared wall voids and plumbing, treatment in multi-unit buildings often needs to cover adjacent units for lasting results.",
      },
      {
        question: "Why do earwigs keep coming inside in summer?",
        answer:
          "Earwigs breed in moist soil and mulch around the foundation and move indoors when outdoor conditions become hot and dry. Reducing mulch depth against the foundation, fixing drainage issues, and sealing foundation gaps reduces their entry. They are harmless but are startling in large numbers.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Ames", slug: "ames" },
      { name: "Ankeny", slug: "ankeny" },
      { name: "Omaha", slug: "omaha" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Des Moines, IA | Mice, Boxelder Bugs & Carpenter Ants",
    metaDescription:
      "Des Moines pest control for house mice, boxelder bugs, carpenter ants, cockroaches and earwigs. Polk County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
