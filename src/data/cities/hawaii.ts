import type { CityLocation } from "@/types";

// Hawaii. Pest data reflects tropical island conditions.
// Centipede, cane spider, and termite data from University of Hawaii at Manoa
// College of Tropical Agriculture extension resources.

export const hawaiiCities: CityLocation[] = [
  {
    slug: "honolulu",
    name: "Honolulu",
    state: "Hawaii",
    stateSlug: "hawaii",
    stateAbbr: "HI",
    tier: "T1",
    population: "~345,000",
    county: "Honolulu County",
    climate: "tropical",
    climateDriver:
      "Honolulu has a warm tropical climate with little seasonal variation: temperatures stay in a narrow band year-round and humidity is consistently high. There is no cold season to reduce pest numbers, so termites, centipedes, cockroaches, and ants are active all twelve months.",
    topPests: [
      "Termites",
      "Centipedes",
      "Cockroaches",
      "Cane Spiders",
      "Ants",
    ],
    pestProfile: [
      {
        name: "Formosan and drywood termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms in warm humid evenings, risk year-round",
        note: "Hawaii has some of the highest termite pressure in the United States. The Formosan subterranean termite is established across Oahu and causes major structural damage, and drywood termites infest wood directly. University of Hawaii extension treats termites as the single most economically damaging pest in the islands.",
      },
      {
        name: "Centipedes",
        serviceSlug: "wildlife-removal",
        activeSeason: "Year-round, more active in warm wet periods",
        note: "The Vietnamese or Hawaiian centipede grows large and delivers a genuinely painful, medically significant bite. They are a common household concern in Honolulu, hiding in damp areas, under items, and entering homes during heavy rain. This is one of the pests that surprises new residents most.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "Both the large American cockroach (which flies in the warm evenings) and the German cockroach are abundant in Honolulu's tropical climate. The warmth and humidity allow continuous breeding with no seasonal pause.",
      },
      {
        name: "Cane spiders (large brown spiders)",
        serviceSlug: "spider-control",
        activeSeason: "Year-round",
        note: "The cane spider, a large brown huntsman spider, is common in Honolulu homes. It is fast and alarming in size but not considered medically dangerous. It does not build webs and hunts cockroaches and other insects, but most residents want them managed.",
      },
      {
        name: "Tropical ants (including bigheaded and ghost ants)",
        serviceSlug: "ant-control",
        activeSeason: "Year-round",
        note: "Several tropical ant species thrive in Honolulu and form large, multi-nest colonies. The little fire ant, an invasive stinging species spreading across the islands, is a growing concern monitored by the Hawaii Department of Agriculture.",
      },
    ],
    localHook:
      "Honolulu's pest list includes things mainland residents never have to think about: large centipedes with a genuinely painful bite, cane spiders the size of a hand, and Formosan termites that make Hawaii one of the highest termite-pressure places in the country. The tropical climate means none of it ever takes a winter break.",
    intro:
      "Pest control in Honolulu is unlike anywhere on the mainland. The tropical climate runs all twelve months with no cold season to reduce numbers, and the pest cast is distinctive: Formosan termites that put Hawaii among the highest termite-pressure regions in the country, large centipedes with a medically significant bite, cane spiders the size of a hand, and cockroaches that fly on warm evenings. Termites are the expensive structural risk, but for many residents the centipedes are the pest that matters most day to day.",
    sections: [
      {
        heading: "Termites versus centipedes: the two pests that define Honolulu",
        body: "These two pests dominate Honolulu pest control for very different reasons. Formosan subterranean termites are the structural threat: they form enormous colonies, cause major damage, and require professional treatment systems. Centipedes are the personal-safety concern: the large Hawaiian centipede delivers a painful, medically significant bite and turns up indoors, especially during heavy rain. Termites need soil treatment, baiting, or fumigation depending on the type. Centipedes need moisture reduction, exclusion at entry points, and harborage removal around the home. The approaches share nothing, which is why an inspection sorts the priorities first.",
      },
      {
        heading: "Why nothing here has an off-season",
        body: "On the mainland, winter resets the pest clock for many species. Honolulu never gets that reset. Temperatures stay in a narrow warm band year-round and humidity is consistently high, so termites swarm, cockroaches breed, and ants forage continuously. By contrast with a northern city, where a one-time treatment can last through a cold winter, Honolulu homes generally need ongoing management. The warmth that makes the islands what they are also keeps every pest active twelve months a year.",
      },
    ],
    prevention: [
      "Reduce moisture and seal gaps at ground level to keep centipedes from entering, especially before heavy rain.",
      "Schedule regular termite inspections given Hawaii's exceptional Formosan and drywood termite pressure.",
      "Remove clutter and harborage around the home's exterior to reduce centipede and cane spider shelter.",
      "Report suspected little fire ant activity, as this invasive species is tracked by the state Department of Agriculture.",
    ],
    costNote:
      "Honolulu pest control is commonly quoted as a year-round general plan covering centipedes, cockroaches, spiders, and ants, with termite protection quoted separately after inspection. Because nothing has an off-season here, continuous service is the norm. Start with a free inspection.",
    faqs: [
      {
        question: "How dangerous are centipedes in Honolulu?",
        answer:
          "The large Hawaiian centipede delivers a genuinely painful, medically significant bite that can cause intense local pain and swelling. They are a common household concern in Honolulu, hiding in damp areas and entering homes during heavy rain. Reducing moisture, sealing ground-level entry points, and removing harborage around the home lowers the risk of indoor encounters.",
      },
      {
        question: "Why is termite damage so severe in Hawaii?",
        answer:
          "Hawaii has some of the highest termite pressure in the United States. The Formosan subterranean termite forms very large colonies and causes major structural damage, and drywood termites infest wood directly. University of Hawaii extension identifies termites as the most economically damaging pest in the islands. Regular inspections are essential, not optional, for Honolulu homeowners.",
      },
      {
        question: "What is a cane spider?",
        answer:
          "The cane spider is a large brown huntsman spider common in Honolulu homes. It can be alarming because of its size and speed, but it is not considered medically dangerous. It does not build webs and actually hunts cockroaches and other insects. Most residents still prefer to have them managed, which is done through perimeter treatment and reducing their insect prey indoors.",
      },
      {
        question: "Do cockroaches really fly in Honolulu?",
        answer:
          "Yes. The large American cockroach flies, particularly on warm humid evenings, which surprises residents from cooler climates. They breed outdoors in mulch, drains, and vegetation and move indoors readily. Reducing moisture and harborage around the home and sealing entry points keeps them out.",
      },
      {
        question: "What is the little fire ant and why is it a concern?",
        answer:
          "The little fire ant is an invasive stinging ant spreading across the Hawaiian islands. It delivers painful stings and can establish large infestations in yards and trees. The Hawaii Department of Agriculture monitors its spread. If you suspect little fire ant activity, it is worth reporting and treating promptly before it becomes established.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Pearl City", slug: "pearl-city" },
      { name: "Kailua", slug: "kailua" },
      { name: "Kaneohe", slug: "kaneohe" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Honolulu, HI | Termites, Centipedes & Cane Spiders",
    metaDescription:
      "Honolulu pest control for Formosan termites, Hawaiian centipedes, cockroaches, cane spiders and tropical ants. Island specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
