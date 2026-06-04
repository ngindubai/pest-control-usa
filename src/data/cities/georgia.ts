import type { CityLocation } from "@/types";

// Georgia seed cities. Pest data reflects humid subtropical Southeast patterns
// (University of Georgia Extension).

export const georgiaCities: CityLocation[] = [
  {
    slug: "atlanta",
    name: "Atlanta",
    state: "Georgia",
    stateSlug: "georgia",
    stateAbbr: "GA",
    tier: "T1",
    population: "~500,000",
    county: "Fulton County",
    climate: "hot-humid",
    climateDriver:
      "Atlanta is warm and humid with heavy summer rain and dense tree cover. Standing water and shade make it one of the best mosquito habitats of any major US city.",
    topPests: ["Mosquitoes", "Fire Ants", "Termites", "Cockroaches", "Rats"],
    pestProfile: [
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Spring through fall, long season",
        note: "Atlanta is repeatedly ranked among the worst US cities for mosquitoes. Heavy rain, shade, and standing water in a tree-filled city feed a long, intense season.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, surge after rain",
        note: "Fire ants are well established across Georgia and rebuild mounds quickly after rain, a sting hazard for children and pets.",
      },
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring, active much of the year",
        note: "Warm, humid conditions give Atlanta heavy subterranean termite pressure, with colonies active across much of the year.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "American roaches breed in mulch, crawl spaces, and sewers and move indoors in heat, while German roaches breed indoors in kitchens.",
      },
      {
        name: "Roof and Norway rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "Roof rats use Atlanta's heavy tree cover to reach attics, while Norway rats burrow near foundations and drains.",
      },
    ],
    localHook:
      "Atlanta lands near the top of the national worst-mosquito lists almost every year. The mix of heavy rain, deep shade, and standing water in a tree-filled city is close to ideal for them.",
    intro:
      "Pest control in Atlanta starts with the mosquito. The city's warm, wet climate and dense tree canopy hold moisture and shade, which is exactly what mosquitoes need, and Atlanta regularly ranks among the worst US cities for them. Behind that, the humid Southeast brings heavy termite pressure and well-established fire ants. Roaches and rats round out the list. The long warm season means very little gets a real break, so steady protection works better here than waiting for a problem.",
    sections: [
      {
        heading: "Why Atlanta is a mosquito capital",
        body: "Three things stack up: frequent heavy rain, a dense tree canopy that holds shade and humidity, and countless small water-holding spots in yards and gutters. Together they give mosquitoes a long, intense season. The day-biting Asian tiger mosquito is common here. The most effective control removes standing water across the property and treats the shaded resting areas under decks and dense planting, not just the open lawn.",
      },
      {
        heading: "Termites and fire ants in the humid Southeast",
        body: "Subterranean termites are a heavy, year-round risk in this climate, reaching wood through mud tubes from the soil, so an annual inspection is the practical defense. Fire ants are firmly established across Georgia and rebuild mounds fast after rain, making them both a nuisance and a safety issue for families. Treating mounds early in the season keeps them from spreading across a yard.",
      },
    ],
    prevention: [
      "Remove standing water and clear gutters to cut the long mosquito season.",
      "Keep an annual termite inspection on the calendar given heavy local pressure.",
      "Treat fire ant mounds early before they spread across the lawn.",
      "Trim tree limbs back from the roof to block roof rats from the attic.",
    ],
    costNote:
      "With a long mosquito season, heavy termite pressure, and year-round fire ants, many Atlanta homes pair a recurring plan with seasonal mosquito service and an annual termite check. A free inspection sets the plan to your property.",
    faqs: [
      {
        question: "Why are mosquitoes so bad in Atlanta?",
        answer:
          "Atlanta regularly ranks among the worst US cities for mosquitoes because of frequent heavy rain, a dense tree canopy that holds shade and humidity, and abundant standing water in yards and gutters. The season is long, so removing standing water and treating shaded resting areas makes a real difference.",
      },
      {
        question: "Are termites a serious risk in Atlanta?",
        answer:
          "Yes. The warm, humid climate gives heavy subterranean termite pressure, with colonies active much of the year. They reach wood through mud tubes from the soil, and early signs are easy to miss, so an annual inspection is strongly recommended.",
      },
      {
        question: "Are fire ants common around Atlanta?",
        answer:
          "Yes, red imported fire ants are well established across Georgia. Their mounds rebuild quickly after rain and their stings are a hazard for children and pets, so treating mounds early in the season is worthwhile.",
      },
      {
        question: "How do roof rats get into Atlanta homes?",
        answer:
          "Atlanta's heavy tree cover gives roof rats easy routes along branches to the roofline, where they enter through gaps and vents. Trimming limbs back from the house and sealing roofline openings cuts off their access.",
      },
      {
        question: "Is year-round pest control necessary in Atlanta?",
        answer:
          "For most homes, yes. The long warm season keeps mosquitoes, termites, fire ants, and roaches active across much of the year, so a continuous plan holds them back better than occasional one-time visits.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Sandy Springs", slug: "sandy-springs" },
      { name: "Marietta", slug: "marietta" },
      { name: "Decatur", slug: "decatur" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Atlanta, GA | Mosquitoes, Termites & Fire Ants",
    metaDescription:
      "Atlanta pest control for mosquitoes, subterranean termites, fire ants, roaches and roof rats. Seasonal mosquito and termite plans, free inspection. Call 1-800-PEST-USA.",
  },
];
