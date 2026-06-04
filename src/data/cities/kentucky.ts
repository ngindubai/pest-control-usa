import type { CityLocation } from "@/types";

// Kentucky. Pest data reflects humid subtropical Ohio Valley conditions.
// Termite pressure data from University of Kentucky Extension.

export const kentuckyCities: CityLocation[] = [
  {
    slug: "louisville",
    name: "Louisville",
    state: "Kentucky",
    stateSlug: "kentucky",
    stateAbbr: "KY",
    tier: "T1",
    population: "~630,000",
    county: "Jefferson County",
    climate: "hot-humid",
    climateDriver:
      "Louisville sits in the Ohio River valley where warm humid air from the Gulf meets the continental interior. The river bottomlands, Beargrass Creek system, and frequent spring flooding create exceptional mosquito habitat, and the Ohio Valley's humidity sustains termite pressure year-round.",
    topPests: ["Termites", "Mosquitoes", "Cockroaches", "Ants", "Mice"],
    pestProfile: [
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "University of Kentucky Extension identifies Louisville and the surrounding Ohio Valley as having significant subterranean termite pressure. The clay soils, high humidity, and abundance of older wood-frame housing make regular inspections an important part of home maintenance here.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The Ohio River floodplain, Beargrass Creek, Otter Creek, and the standing water that follows Louisville's frequent spring and summer storms create a long, active mosquito season. West Nile virus activity has been recorded in Jefferson County.",
      },
      {
        name: "German and American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Louisville's apartment and commercial stock. American cockroaches are common in basements and around the drainage infrastructure of older neighborhoods.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, most active May through August",
        note: "Carpenter ants are significant in Louisville. They are drawn to moist or partially rotted wood in the older housing stock and can cause structural damage over time. Unlike termites, they do not eat wood but excavate galleries inside it.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "House mice are persistent in Louisville's older housing stock. The cold Ohio Valley winters push them firmly indoors by October, and older homes with gaps in foundations and around utilities give them ready access.",
      },
    ],
    localHook:
      "Louisville's Ohio River valley setting is picturesque, and it is also one of the reasons the mosquito season here runs five to six months. The bottomlands, Beargrass Creek, and the standing water that follows the city's frequent spring storms give mosquitoes extended breeding habitat. Combine that with the valley's sustained termite pressure and you have a pest environment that rewards year-round attention.",
    intro:
      "Pest control in Louisville is shaped by geography. The Ohio River valley's warm humidity gives termites and mosquitoes a long, productive season. University of Kentucky Extension confirms this region has significant subterranean termite pressure, and the river bottomlands and creek system give mosquitoes some of the best breeding habitat in the state. Carpenter ants are a real concern in the older wood-frame neighborhoods, German cockroaches are a year-round indoor presence, and mice make their move indoors every fall when the Ohio Valley turns cold.",
    sections: [
      {
        heading: "Termites versus carpenter ants: two different wood threats",
        body: "Louisville homeowners often confuse termite damage with carpenter ant damage, and the distinction matters because the treatments are completely different. Subterranean termites consume wood fiber and leave mud tubes on foundation walls. Carpenter ants excavate clean galleries inside moist or softened wood but do not eat it. Both can cause structural damage over time. The inspection determines which is present and which treatment applies. Many Louisville homes in the older Highlands, Germantown, and Crescent Hill neighborhoods have had both at some point.",
      },
      {
        heading: "The Ohio River mosquito season",
        body: "Louisville's mosquito pressure comes from the Ohio River floodplain and the Beargrass Creek system running through the city. Spring flooding leaves pockets of standing water in low-lying areas and the many parks along the river, and these drain slowly enough to support mosquito breeding from April into October. The county mosquito abatement program covers some of this, but yard-level management, removing standing water and treating shaded resting areas under decks and dense planting, is the most effective defense for individual properties.",
      },
    ],
    prevention: [
      "Clear gutters and remove standing water containers after rain to reduce the long mosquito season.",
      "Have an annual termite inspection given the Ohio Valley's elevated pressure.",
      "Check wood around windows, doors, and decks for softness that may attract carpenter ants.",
      "Seal foundation gaps and pipe penetrations in September to intercept mice before the fall surge.",
    ],
    costNote:
      "Louisville pest pricing typically separates recurring general pest service from termite protection, which is quoted after inspection. Mosquito treatment is often added seasonally from April through October. Start with a free assessment to determine what is present.",
    faqs: [
      {
        question: "How serious is the termite risk in Louisville?",
        answer:
          "Significant. University of Kentucky Extension confirms the Louisville area has elevated subterranean termite pressure. The Ohio Valley's humidity, clay soils, and the abundance of older wood-frame homes create favorable conditions. Annual inspections are strongly recommended, especially for homes with crawl spaces or wood near the foundation.",
      },
      {
        question: "What is the difference between termites and carpenter ants?",
        answer:
          "Subterranean termites eat wood and leave mud tubes on foundation walls. Carpenter ants do not eat wood but excavate smooth galleries inside moist or rotting wood. Both can cause structural damage. Termite galleries are rough and filled with soil-like material. Carpenter ant galleries are clean and smooth. The inspection tells you which is present.",
      },
      {
        question: "Why is the mosquito season so long in Louisville?",
        answer:
          "The Ohio River floodplain and the Beargrass Creek system running through the city create extensive mosquito breeding habitat that persists through spring flooding and summer rains. The active season runs April through October, with peak pressure in June through August. West Nile virus has been recorded in Jefferson County.",
      },
      {
        question: "Are mice really a problem in Louisville?",
        answer:
          "Yes, particularly in the older housing stock. House mice are present year-round but surge into buildings as temperatures drop in October. Older homes with gaps around pipes, utility lines, and foundations give them ready access. Fall is the right time to seal these points before pressure builds.",
      },
      {
        question: "Does Louisville need year-round pest control?",
        answer:
          "For most homes with termite exposure or recurring indoor pest pressure, yes. Termites and mice are concerns for most of the year, mosquitoes run April through October, and cockroaches are year-round indoors. A recurring plan is more cost-effective than responding to each issue separately.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Lexington", slug: "lexington" },
      { name: "Jeffersonville", slug: "jeffersonville" },
      { name: "New Albany", slug: "new-albany" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle:
      "Pest Control in Louisville, KY | Termites, Mosquitoes & Carpenter Ants",
    metaDescription:
      "Louisville pest control for subterranean termites, mosquitoes, carpenter ants, cockroaches and mice. Ohio Valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
