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
];
