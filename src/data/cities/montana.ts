import type { CityLocation } from "@/types";

// Montana city data. Pest intelligence verified against Montana State University
// Extension (msue.montana.edu) and Montana Department of Public Health and Human Services.

export const montanaCities: CityLocation[] = [
  {
    slug: "billings",
    name: "Billings",
    state: "Montana",
    stateSlug: "montana",
    stateAbbr: "MT",
    tier: "T2",
    population: "~117,000",
    county: "Yellowstone County",
    climate: "semi-arid",
    climateDriver:
      "Billings sits in the Yellowstone Valley on Montana's high plains at roughly 3,100 feet elevation. The semi-arid climate delivers hot, dry summers, cold winters with temperatures that can drop below zero, and strong Chinook winds that create extreme temperature swings. That cold-and-dry combination keeps pest diversity lower than the Southeast or Midwest, but makes house mice and deer mice a serious seasonal concern as heated shelter becomes essential once October arrives.",
    topPests: [
      "House Mice",
      "Deer Mice",
      "Yellowjackets",
      "Box Elder Bugs",
      "Carpet Beetles",
    ],
    pestProfile: [
      {
        name: "House mice and deer mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round indoors, strong fall surge October through December",
        note:
          "Billings winters drive mice firmly indoors, and homes on the city's edges near the rimrocks and agricultural land also contend with deer mice, which Montana State University Extension confirms can carry hantavirus. The fall surge into structures is fast and reliable when temperatures drop sharply in October.",
      },
      {
        name: "Yellowjackets and bald-faced hornets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "July through September, most aggressive late August",
        note:
          "The dry Yellowstone Valley summers suit yellowjackets well. They nest in the ground and in wall voids of older Billings homes, and colonies peak in August when workers are at maximum numbers and natural food starts to decline. Bald-faced hornets build exposed paper nests in trees and under eaves.",
      },
      {
        name: "Box elder bugs",
        serviceSlug: "boxelder-bug-control",
        activeSeason: "Fall aggregation September through October, overwintering on and in homes",
        note:
          "Box elder bugs are one of the most common fall nuisance pests in Billings, gathering in large numbers on warm south-facing walls in September before working through cracks and gaps to overwinter indoors. They are harmless, but the numbers can be significant in neighborhoods with mature box elder and maple trees.",
      },
      {
        name: "Carpet beetles",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, damage noticed in spring",
        note:
          "Varied and black carpet beetles are consistent household pests in Billings, feeding on wool, feathers, dried food, and stored natural-fiber goods. Montana State University Extension identifies carpet beetles as a primary home pest concern in the state. Damage is often noticed in spring after the adults become active.",
      },
      {
        name: "Odorous house and pavement ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, following irrigation moisture",
        note:
          "Odorous house ants and pavement ants are the common nuisance ant species in Billings, trailing indoors along plumbing and foundation edges during the dry summer months in search of moisture and food. They are not destructive but are persistent once a trail is established.",
      },
    ],
    localHook:
      "Billings gets genuinely cold in winter, and that cold is the defining force in the pest calendar: mice push into heated homes fast in October, box elder bugs pile onto sun-facing walls before doing the same, and the warm dry summer in between is yellowjacket season.",
    intro:
      "Pest control in Billings follows the high plains seasons closely. The semi-arid climate and cold winters keep the diversity of pest species lower than states to the south and east, but the species that are here show up in numbers. House mice are the main event: Montana winters guarantee a fall surge into heated structures, and homes near the rimrocks or agricultural edges also deal with deer mice and the hantavirus risk they carry. Yellowjackets own the dry summer months, box elder bugs define the fall transition, and carpet beetles quietly work away year-round in wool rugs, stored clothing, and pantry goods. A plan that covers the fall exclusion window and the summer stinging-insect season addresses most of what Billings homeowners encounter.",
    sections: [
      {
        heading: "Deer mice and hantavirus near the rimrocks and valley edges",
        body: "Billings is hemmed in by the sandstone rimrocks to the north and agricultural land in most directions. Both settings produce deer mice populations that press into structures seasonally, and Montana State University Extension confirms that deer mice in Montana can carry hantavirus. The risk is real in enclosed spaces where dried droppings or nesting material accumulate: sheds, crawl spaces, garages, and attic spaces in homes near the urban fringe. The safe cleanup approach involves wetting the area with a disinfectant solution before cleaning, wearing gloves and an N95 or better mask, and ventilating rather than dry-sweeping. A professional handles this more safely than most homeowners can and can identify and seal the entry points that allowed deer mice in.",
      },
      {
        heading: "Yellowjackets in Billings: why late summer is the hard part",
        body: "Yellowjacket colonies build through the summer and are at their largest and most aggressive in August and September, when workers are defending a substantial investment of brood. Ground nests in lawns and garden beds are common, as are wall void nests in older Billings homes where exterior trim and siding have gaps. The annual pattern is predictable: a nest that was small and manageable in June is a dangerous-sized colony by late August. Treating nests early in July, when colonies are small and workers are fewer, is both safer and less expensive than dealing with a mature nest in September. If you discover a nest you are not sure is safe to approach, a professional can treat it without the risk of disturbing it incorrectly.",
      },
    ],
    prevention: [
      "Seal foundation gaps, pipe penetrations, and utility openings in September before house and deer mice surge indoors with the first hard cold.",
      "Treat yellowjacket nests in late June or early July when colonies are still small and far less aggressive.",
      "Seal gaps around windows, siding joints, and utility lines before September to reduce the box elder bug fall invasion.",
      "Store wool, feathers, and natural-fiber goods in sealed bags or bins to limit carpet beetle damage year-round.",
    ],
    costNote:
      "Billings pest control is commonly quoted seasonally: fall rodent exclusion work, summer yellowjacket treatment, and an ongoing general plan for ants and carpet beetles. Hantavirus-safe rodent cleanup in enclosed spaces may be a separate service. A free inspection sets the right scope.",
    faqs: [
      {
        question: "Is hantavirus a real concern in the Billings area?",
        answer:
          "Yes, particularly near the rimrocks and agricultural edges where deer mice are present. Montana State University Extension confirms deer mice in Montana can carry hantavirus, and Billings sits in a landscape that supports deer mouse populations at the urban fringe. The risk is concentrated in enclosed spaces where dried droppings or nesting material accumulate. Wetting the area with disinfectant before cleaning, wearing gloves and a respirator, and ventilating rather than dry-sweeping are the recommended precautions. A professional handles high-exposure cleanup more safely.",
      },
      {
        question: "When do box elder bugs become a problem in Billings?",
        answer:
          "September and October, when cooling temperatures trigger them to seek overwintering sites. They aggregate on warm, sun-facing walls in large numbers and work through gaps around windows, utility lines, and siding to get indoors. They are harmless nuisance insects that do not bite, sting, or damage the home. Sealing entry points before September and treating the exterior when they first appear gives the best results.",
      },
      {
        question: "Are there termites in Billings?",
        answer:
          "Termites are not a significant concern in Billings. Montana's cold climate, low humidity, and dry soils are not favorable for subterranean termite populations that are common further south and east. Montana State University Extension confirms termites are rare in the state. Billings homeowners are far more likely to deal with carpenter ants or moisture-related wood damage than termite activity.",
      },
      {
        question: "What are the white grubs in my Billings lawn?",
        answer:
          "Most likely the larvae of June beetles or masked chafers, which are common turf grubs in Montana. They feed on grass roots in summer and can cause brown patches in lawns. Montana State University Extension's turf and lawn pest guides confirm white grubs are a seasonal lawn concern in the region. A grub treatment in late summer, when larvae are small and active near the surface, is the most effective timing.",
      },
      {
        question: "Do I need pest control year-round in Billings?",
        answer:
          "Many Billings homes do well with a seasonal approach given the cold, dry climate: fall rodent exclusion work in September and October, summer yellowjacket and ant treatment from June through August, and carpet beetle monitoring year-round. Homes near the rimrocks or agricultural edges with deer mouse pressure may need more frequent rodent management. A free inspection identifies what your property specifically requires.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Bozeman", slug: "bozeman" },
      { name: "Casper", slug: "casper" },
      { name: "Missoula", slug: "missoula" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Billings, MT | Mice, Yellowjackets & Box Elder Bugs",
    metaDescription:
      "Billings pest control for house mice, deer mice (hantavirus), yellowjackets, box elder bugs and carpet beetles. Yellowstone County Montana high plains specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
