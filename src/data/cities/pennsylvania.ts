import type { CityLocation } from "@/types";

// Pennsylvania seed cities. Pest data reflects Mid-Atlantic patterns with older
// rowhome housing stock (Penn State Extension).

export const pennsylvaniaCities: CityLocation[] = [
  {
    slug: "philadelphia",
    name: "Philadelphia",
    state: "Pennsylvania",
    stateSlug: "pennsylvania",
    stateAbbr: "PA",
    tier: "T1",
    population: "~1.55 million",
    county: "Philadelphia County",
    climate: "temperate",
    climateDriver:
      "Philadelphia's older rowhome housing, with shared walls and connected basements, shapes its pest problems as much as the four-season climate. Pests move easily between attached homes.",
    topPests: ["Bed Bugs", "Cockroaches", "Rats", "Spotted Lanternfly", "Mice"],
    pestProfile: [
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note: "Philadelphia regularly ranks among the worst US cities for bed bugs. Attached rowhomes and dense apartments let them spread between units.",
      },
      {
        name: "German and American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German roaches breed indoors in kitchens, while American roaches favor warm, damp basements and shared sewer connections.",
      },
      {
        name: "Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Norway rats work alleys, rear yards, and the connected basements of rowhome blocks, moving indoors as it cools.",
      },
      {
        name: "Spotted lanternfly",
        serviceSlug: "stink-bug-control",
        activeSeason: "Adults active late summer into fall",
        note: "Pennsylvania is the US epicenter of the invasive spotted lanternfly. They swarm trees and decks and lay egg masses on outdoor surfaces.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in fall",
        note: "Mice exploit the gaps and shared walls of older rowhomes, traveling between attached units through wall voids.",
      },
    ],
    localHook:
      "In Philadelphia's rowhomes the walls are shared, and so are the pests. Bed bugs, roaches, and mice all move between attached houses, which is why a block sometimes has a problem no single home can fix alone.",
    intro:
      "Pest control in Philadelphia is shaped by its housing. The city's attached rowhomes, with shared walls and connected basements, let bed bugs, roaches, mice, and rats move between homes that look entirely separate from the street. Bed bugs are the headline problem, and Philadelphia routinely ranks among the worst cities for them. On top of that, the region is the national epicenter of the invasive spotted lanternfly, which has made outdoor pest pressure a new seasonal issue.",
    sections: [
      {
        heading: "What does living in a rowhome change?",
        body: "Attached homes share walls, and often basements and sewer connections, so pests travel between them through gaps you cannot see. A bed bug or roach problem in one home can become the neighbor's within weeks. The practical answer is to treat the affected homes together where possible and seal the shared pathways, rather than treating one unit in isolation and watching the problem return.",
      },
      {
        heading: "What is the spotted lanternfly situation?",
        body: "The spotted lanternfly is an invasive planthopper, and Pennsylvania is where it first took hold in the US. Adults swarm trees, decks, and outdoor furniture in late summer and lay grey egg masses on flat outdoor surfaces over winter. They are a nuisance and a threat to plants rather than a danger to people. Scraping egg masses and treating host trees reduces next year's numbers.",
      },
    ],
    prevention: [
      "Inspect secondhand furniture and luggage carefully to avoid bringing bed bugs home.",
      "Seal shared-wall and basement gaps to slow movement of roaches and mice between rowhomes.",
      "Scrape spotted lanternfly egg masses off outdoor surfaces over winter.",
      "Keep bins tight and clear yard food sources to reduce rats.",
    ],
    costNote:
      "Bed bug treatment is quoted after inspection, and in attached homes treating neighbors together is more effective. General pest control often works best on a recurring plan. Everything starts with a free assessment.",
    faqs: [
      {
        question: "Why are bed bugs so common in Philadelphia?",
        answer:
          "Philadelphia regularly ranks among the worst US cities for bed bugs, largely because of its dense, attached rowhome and apartment housing. Bed bugs spread between units through shared walls and furniture, so early inspection and a thorough treatment plan matter.",
      },
      {
        question: "Can pests really move between attached rowhomes?",
        answer:
          "Yes. Rowhomes share walls and often basements and sewer lines, so bed bugs, roaches, and mice travel between homes through hidden gaps. Treating affected homes together and sealing the shared pathways gives a far more lasting result than treating one home alone.",
      },
      {
        question: "Is the spotted lanternfly dangerous?",
        answer:
          "Not to people or pets. It is an invasive planthopper that damages plants and trees and is a major nuisance when it swarms decks and furniture in late summer. Pennsylvania is the US epicenter. Scraping egg masses over winter and treating host trees reduces their numbers.",
      },
      {
        question: "Why do I have roaches in my basement?",
        answer:
          "American cockroaches favor warm, damp basements and can come up through shared sewer and drain connections common in older Philadelphia homes. Sealing drains and reducing moisture, along with treatment, keeps them out.",
      },
      {
        question: "When do mice get into Philadelphia homes?",
        answer:
          "Mostly in fall, when cooling weather pushes them indoors through small gaps. In rowhomes they also move between attached units through wall voids, so sealing interior gaps is as important as trapping.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Camden", slug: "camden" },
      { name: "Upper Darby", slug: "upper-darby" },
      { name: "Pittsburgh", slug: "pittsburgh" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Philadelphia, PA | Bed Bugs, Roaches & Lanternfly",
    metaDescription:
      "Philadelphia pest control for bed bugs, roaches, Norway rats, spotted lanternfly and mice in rowhomes. Free inspection. Call 1-800-PEST-USA.",
  },
];
