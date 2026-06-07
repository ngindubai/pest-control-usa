import type { CityLocation } from "@/types";

// Rhode Island city data. Pest intelligence verified against Rhode Island Department of Health
// (Lyme disease surveillance) and URI Cooperative Extension pest management resources.

export const rhodeIslandCities: CityLocation[] = [
  {
    slug: "providence",
    name: "Providence",
    state: "Rhode Island",
    stateSlug: "rhode-island",
    stateAbbr: "RI",
    tier: "T2",
    population: "~190,000",
    county: "Providence County",
    climate: "cold-humid",
    climateDriver:
      "Providence sits at the head of Narragansett Bay in central Rhode Island. The bay moderates temperatures somewhat and sustains year-round humidity. The cold-humid New England climate brings genuine winters with snow and ice, hot humid summers, and a full seasonal pest calendar. Rhode Island consistently records among the highest Lyme disease rates in the United States, driven by the dense deer tick populations in the wooded and suburban areas surrounding the city. The dense older housing stock in Providence, including historic triple-deckers and early industrial buildings, sustains urban pest pressure year-round.",
    topPests: [
      "Deer Ticks",
      "House Mice",
      "German Cockroaches",
      "Eastern Subterranean Termites",
      "Bed Bugs",
    ],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason:
          "Active whenever temperatures are above freezing, peak risk May through October and again in early fall",
        note:
          "Rhode Island consistently ranks among the top states in the United States for Lyme disease cases per capita. The Rhode Island Department of Health tracks Lyme disease cases annually, and Providence County accounts for a significant share of the state's reported cases. Deer ticks are found in wooded and brushy areas throughout the city and its suburbs, and the risk is real for anyone with a yard near natural areas, parks, or riparian corridors.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason:
          "Year-round indoors, major surge into structures in October and November",
        note:
          "House mice are the dominant year-round rodent pest in Providence. The city's stock of older triple-decker apartments, Federal Hill multi-family buildings, and historic row houses provides abundant entry points. Cold winters drive mice firmly into heated buildings, and shared walls in multi-family housing allow populations to spread between units quickly.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are the dominant cockroach species in Providence's multi-family housing, commercial kitchens, and urban apartment stock. Providence's density and older building infrastructure create the warm, moist conditions cockroaches prefer. They spread through shared utility runs and plumbing voids in multi-unit buildings.",
      },
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms in spring, active underground most of the year",
        note:
          "Eastern subterranean termites are active in Rhode Island and are present in Providence County. They swarm on warm spring days and are the most common wood-destroying insect in the northeast. Older wood-frame housing with soil-to-wood contact is at particular risk.",
      },
      {
        name: "Bed bugs",
        serviceSlug: "bed-bug-treatment",
        activeSeason: "Year-round",
        note:
          "Bed bugs are a persistent concern in Providence's dense multi-family housing, student rentals near Brown University and RISD, and hotels in the downtown corridor. High housing density and frequent tenant turnover in the student and rental markets sustain steady bed bug pressure across the city.",
      },
    ],
    localHook:
      "Rhode Island's Lyme disease numbers are not abstract. The Rhode Island Department of Health publishes annual surveillance data showing the state among the highest per-capita Lyme disease rates in the United States. Providence County properties near wooded parks, the Providence River corridor, and the forested suburban edge carry real tick risk. This is one of the few pest concerns in New England where an ounce of prevention, yard treatment plus personal protection, matters significantly for actual health outcomes.",
    intro:
      "Pest control in Providence works across two very different fronts. The outdoor pest calendar is defined by deer ticks, which carry Lyme disease at high rates in Rhode Island, and by seasonal pests including mosquitoes in summer and wasps through early fall. The indoor calendar is year-round: house mice in the triple-decker and older multi-family housing stock, German cockroaches in kitchens and shared utility spaces, and bed bugs in the student rental and hotel sectors. Eastern subterranean termites swarm in spring and are active in the wooded and older-construction areas of the city. Providence's mix of old urban neighborhoods and proximity to the bay and wooded suburbs creates a broad pest profile that changes by season.",
    sections: [
      {
        heading: "Lyme disease risk in Providence County",
        body: "Rhode Island is one of the states where Lyme disease is a genuine public health concern, not a minor footnote. The Rhode Island Department of Health consistently publishes case data showing the state in the top tier nationally for reported Lyme disease cases per capita. The deer tick, which transmits Lyme disease as well as anaplasmosis and babesiosis, is present throughout the wooded and suburban areas of Providence County. Tick activity is highest from late spring through fall, but nymphal ticks, which are the size of a poppy seed and the most likely to transmit disease, are active as early as May and are easy to miss. Properties in Providence with yards that back to wooded areas, the Woonasquatucket River corridor, and parks including Roger Williams Park carry the most direct tick risk. Residential tick management at the yard level, combining habitat reduction (leaf litter, brush management at the yard edge) with professional perimeter treatment in spring and fall, significantly reduces tick encounters at the home boundary.",
      },
      {
        heading: "Mice in the triple-deckers and older housing stock",
        body: "Providence's built environment is a house mouse's preferred habitat. The triple-decker apartment buildings, historic row houses on College Hill, and older multi-family buildings in the Elmwood, South Providence, and Silver Lake neighborhoods have more structural entry points than newer construction. Aging foundations, deteriorated sill plates, gaps around utility penetrations, and worn door thresholds are the primary entry routes. In multi-family buildings, mice that enter one unit can spread through shared wall voids and plumbing chases to neighboring units without ever passing through a common area. October is the peak entry month in Providence as overnight temperatures drop, but an established population can be present year-round. The effective approach is a combination of exterior exclusion work and interior trapping, with the exclusion preventing new entries and the trapping clearing the existing population.",
      },
    ],
    prevention: [
      "Remove leaf litter and dense brush from yard margins near the wooded edge each spring to reduce deer tick habitat.",
      "Seal foundation gaps, utility penetrations, and exterior door sills before October to limit fall mouse entry.",
      "Inspect secondhand furniture and luggage carefully for bed bug signs before bringing them into multi-family housing.",
      "Schedule a termite inspection for wood-frame homes with soil contact, particularly homes with crawl spaces or wood sill plates near grade.",
    ],
    costNote:
      "Providence pest control commonly starts with a free inspection. Tick programs are spring and fall yard treatments, often combined with mosquito barrier service in summer. Mouse programs include exclusion and trapping, with multi-family buildings quoted per building. Bed bug treatment is heat or chemical treatment, quoted after inspection. German cockroach programs use gel bait with follow-up visits. Termite inspection is free; termite service is annual.",
    faqs: [
      {
        question: "How serious is Lyme disease risk in Providence?",
        answer:
          "Serious enough to take practical steps. Rhode Island is consistently among the top states in the United States for Lyme disease cases per capita, according to Rhode Island Department of Health annual surveillance data. Providence County carries meaningful risk, particularly for properties near wooded parks, the Woonasquatucket and Blackstone River corridors, and the suburban fringe. Wearing repellent, performing tick checks after outdoor activity, and maintaining a treated yard border are the practical defenses.",
      },
      {
        question: "Why do mice spread so quickly in Providence apartment buildings?",
        answer:
          "Mice can move between units in multi-family buildings through shared wall voids, plumbing chases, and gaps around utility pipes without ever entering a common hallway. In Providence's older triple-decker and multi-family stock, these internal pathways are abundant. A mouse entering the basement can reach upper floors through wall voids. Effective control in multi-family buildings requires addressing both the exterior entry points and the interior population, not just treating one unit.",
      },
      {
        question: "Are termites a real concern in Providence?",
        answer:
          "Yes. Eastern subterranean termites are active in Rhode Island and in Providence County. They swarm on warm spring days, often in March through May, and are the most common wood-destroying pest in the northeast. Wood-frame homes with crawl spaces, wood sill plates near grade, or wood-to-soil contact are at the highest risk. An annual termite inspection is appropriate for most Providence homes built before the 1980s.",
      },
      {
        question: "What is the main cockroach pest in Providence homes?",
        answer:
          "German cockroaches are the dominant species in Providence's residential and commercial settings. They are entirely indoor insects that spread through shared infrastructure in multi-family buildings, not through outdoor entry. They thrive in kitchen and bathroom areas with moisture and heat. Gel bait treatment applied to harborage areas behind appliances, under sinks, and along cabinet kick plates is more effective than spray for German cockroaches because it reduces the colony rather than just the visible foragers.",
      },
      {
        question: "How do I protect my Providence home from bed bugs?",
        answer:
          "The most effective bed bug prevention in Providence's dense rental market is inspection before secondhand furniture or appliances enter the home, and careful luggage management when traveling. Inspect mattress seams, box spring joints, and headboard crevices regularly. In multi-family housing, ask building management about adjacent unit activity. If you find signs of bed bugs (dark spotting on mattress seams, shed skins, or bites with no other explanation), schedule a professional inspection before the infestation spreads.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Pawtucket", slug: "pawtucket" },
      { name: "Cranston", slug: "cranston" },
      { name: "Worcester", slug: "worcester" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle:
      "Pest Control in Providence, RI | Deer Ticks, Mice & German Cockroaches",
    metaDescription:
      "Providence pest control for deer ticks, house mice, German cockroaches, subterranean termites and bed bugs. Rhode Island Lyme disease specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
