import type { CityLocation } from "@/types";

// Washington seed cities. Pest data reflects the cool, wet marine Pacific
// Northwest climate (WSU Extension).

export const washingtonCities: CityLocation[] = [
  {
    slug: "seattle",
    name: "Seattle",
    state: "Washington",
    stateSlug: "washington",
    stateAbbr: "WA",
    tier: "T1",
    population: "~750,000",
    county: "King County",
    climate: "temperate",
    climateDriver:
      "Seattle's cool, wet, marine climate is the key. Long damp stretches favor moisture-loving pests, carpenter ants, rodents, and spiders, more than the heat-driven species of warmer cities.",
    topPests: ["Rats", "Ants", "Spiders", "Wasps", "Silverfish"],
    pestProfile: [
      {
        name: "Norway and roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Seattle has a persistent rat problem helped by the mild, wet climate. Roof rats climb into attics, while Norway rats burrow near foundations and drains.",
      },
      {
        name: "Carpenter and odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Carpenter ants thrive in the damp Northwest, tunneling into moist or rotting wood. Odorous house ants trail indoors during wet weather.",
      },
      {
        name: "Spiders, including giant house spiders",
        serviceSlug: "spider-control",
        activeSeason: "Most visible in late summer and fall",
        note: "The cool, damp climate suits spiders well. Giant house spiders become very visible in fall as males wander indoors looking for mates.",
      },
      {
        name: "Yellowjackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "Wasp nests build through the drier summer and turn aggressive around food by late season.",
      },
      {
        name: "Silverfish and moisture pests",
        serviceSlug: "silverfish-control",
        activeSeason: "Year-round in damp areas",
        note: "Silverfish thrive in the humidity, favoring bathrooms, basements, and crawl spaces, which the wet climate keeps damp.",
      },
    ],
    localHook:
      "Most cities fight heat-loving pests. Seattle fights the damp. The cool, wet climate is exactly what carpenter ants, silverfish, and spiders want, and it keeps the rat problem going all year.",
    intro:
      "Pest control in Seattle is a moisture story, not a heat one. The cool, wet marine climate favors a different cast of pests than warmer cities: carpenter ants in damp wood, silverfish in humid bathrooms and crawl spaces, spiders that appear in force each fall, and rats that the mild winters never knock back. Compared with a hot southern city, there are fewer mosquitoes and no scorpions, but the damp-driven pressure is steady all year, which changes how you defend a home.",
    sections: [
      {
        heading: "Damp-weather pests versus the late-summer wasps",
        body: "For most of the year the problem here is moisture: carpenter ants in soft wood, silverfish in crawl spaces, and rats sheltering from the wet. By contrast, the drier weeks of late summer bring out yellowjackets, whose nests have grown large by then. The two need different handling. The damp pests call for moisture control and exclusion, whereas a mature wasp nest needs careful removal at the source.",
      },
      {
        heading: "Carpenter ants and why moisture matters most",
        body: "Carpenter ants do not eat wood, they excavate it, and in the Northwest they target wood that is already damp or rotting. By contrast with drier climates, the constant moisture here gives them far more to work with. Finding them indoors usually points to a leak, poor drainage, or damp framing, so control pairs treatment with fixing the moisture that invited them.",
      },
    ],
    prevention: [
      "Address leaks, gutters, and crawl-space damp, which is what draws carpenter ants and silverfish.",
      "Seal foundation and roofline gaps to keep rats out of crawl spaces and attics.",
      "Trim trees and shrubs back from the roof to block roof rats.",
      "Reduce clutter and improve ventilation in basements to limit spiders and silverfish.",
    ],
    costNote:
      "Because the damp keeps pests active year-round, many Seattle homes use a recurring plan, with moisture and exclusion work as the foundation. A free inspection sets the plan to your property.",
    faqs: [
      {
        question: "Why does Seattle have so many carpenter ants?",
        answer:
          "The cool, wet climate keeps wood damp, and carpenter ants target moist or rotting wood to nest in. Finding them indoors usually points to a leak or damp framing, so lasting control pairs treatment with fixing the moisture source.",
      },
      {
        question: "Is Seattle's rat problem really year-round?",
        answer:
          "Yes. The mild, wet winters never knock the population back the way a hard freeze would elsewhere. Roof rats climb into attics and Norway rats burrow near foundations, so sealing entry points and trimming vegetation are key all year.",
      },
      {
        question: "Why do I see so many spiders in the fall?",
        answer:
          "In late summer and fall, male spiders such as the giant house spider wander indoors looking for mates, so they become much more visible. The damp climate supports a healthy insect supply that keeps spider numbers up. Reducing clutter and sealing gaps helps.",
      },
      {
        question: "What are the little silver insects in my bathroom?",
        answer:
          "Those are most likely silverfish, which thrive in Seattle's humidity and favor damp bathrooms, basements, and crawl spaces. Reducing moisture and improving ventilation, along with treatment, keeps them down.",
      },
      {
        question: "Are mosquitoes a problem in Seattle?",
        answer:
          "Far less than in hot, humid cities. The cooler climate keeps mosquito pressure relatively low, so most Seattle pest plans focus on moisture pests, ants, rodents, and spiders instead.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Bellevue", slug: "bellevue" },
      { name: "Tacoma", slug: "tacoma" },
      { name: "Everett", slug: "everett" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Seattle, WA | Carpenter Ants, Rats & Spiders",
    metaDescription:
      "Seattle pest control for carpenter ants, Norway and roof rats, spiders, wasps and silverfish. Moisture and exclusion focus, free inspection. Call 1-800-PEST-USA.",
  },
];
