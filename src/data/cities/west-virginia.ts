import type { CityLocation } from "@/types";

// West Virginia. Pest data reflects Kanawha River valley Appalachian conditions.
// Termite and stink bug data from West Virginia University Extension.

export const westVirginiaCities: CityLocation[] = [
  {
    slug: "charleston",
    name: "Charleston",
    state: "West Virginia",
    stateSlug: "west-virginia",
    stateAbbr: "WV",
    tier: "T2",
    population: "~46,000",
    county: "Kanawha County",
    climate: "hot-humid",
    climateDriver:
      "Charleston sits in the Kanawha River valley where the Elk and Kanawha Rivers converge, surrounded by the forested ridges of the Appalachian Plateau. The valley collects warm humid air from the south, creating conditions that support termite activity and a vigorous mosquito season. The surrounding Appalachian forest is prime deer tick habitat, and the valley's position makes it a corridor for brown marmorated stink bugs moving through the mid-Atlantic.",
    topPests: [
      "Termites",
      "Stink bugs",
      "Deer ticks",
      "Mosquitoes",
      "Carpenter ants",
    ],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "West Virginia University Extension confirms that eastern subterranean termites are active throughout the Kanawha valley. Charleston's humid river valley setting, combined with the older housing stock in neighborhoods like Kanawha City and South Hills, creates favorable conditions for colony establishment. Spring swarms near windows or foundation walls are the typical first visible sign.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Indoor invasions September through March",
        note: "The stink bug is a major fall nuisance pest across West Virginia. The Kanawha valley's forested ridges and the mid-Atlantic corridor that funnels through the state bring strong fall invasions into buildings each year. WVU Extension has documented stink bugs as one of the primary nuisance pests reported by West Virginia homeowners.",
      },
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November",
        note: "West Virginia has well-documented deer tick activity and Lyme disease cases throughout the state. The dense Appalachian forests surrounding Charleston are prime tick habitat. The Kanawha State Forest, just south of the city, is a high-exposure area, and the deer population throughout Kanawha County keeps tick numbers high.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The Kanawha and Elk Rivers, along with the floodplain wetlands and retention areas throughout Charleston, create mosquito breeding habitat close to the city center. The river valley's sheltered position extends the active season and can concentrate mosquito populations in low-lying neighborhoods after rain events.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, indoor colonies active year-round",
        note: "Carpenter ants are a consistent wood pest concern in the Kanawha valley. Charleston's older homes, many dating to the early and mid-20th century, have wood near soil contact and moisture vulnerabilities that attract colonies. Large black ants foraging indoors in spring, or found in wall voids in winter, indicate an established infestation.",
      },
    ],
    localHook:
      "Charleston's location at the confluence of the Elk and Kanawha Rivers is what made it the state capital, and that same river valley setting shapes its pest picture. The humidity collected in the valley keeps termite pressure active through the warm season. The forested Appalachian ridges surrounding the city are prime deer tick habitat, and every fall the Kanawha corridor channels stink bugs right into the city's older neighborhoods.",
    intro:
      "Pest control in Charleston reflects the Kanawha River valley's Appalachian position. Eastern subterranean termites are documented throughout the valley by WVU Extension, and Charleston's older housing stock in the city's established neighborhoods provides the moisture and wood conditions they need. Stink bugs are a reliable fall nuisance across West Virginia, and the Kanawha corridor concentrates their movement into buildings. Deer ticks and Lyme disease are a documented risk in the surrounding Appalachian forests. Mosquitoes have a long active season in the river bottom, and carpenter ants are a consistent structural concern in the older homes.",
    sections: [
      {
        heading: "Termites and carpenter ants in Charleston's older housing",
        body: "West Virginia University Extension confirms eastern subterranean termite pressure throughout the Kanawha valley, and Charleston's stock of older wood-frame homes creates real exposure. Spring swarms in March through May are the most visible sign of termite activity. Carpenter ants are an equally important concern in the city's older housing stock. Both can cause structural damage, but they require completely different treatments, so an accurate inspection is the essential first step. Carpenter ant galleries are smooth and clean, while termite galleries are rough and filled with soil-like material. Annual inspections for both are practical in Charleston given the documented local pressure.",
      },
      {
        heading: "Ticks and stink bugs: the Appalachian seasonal pair",
        body: "The Appalachian landscape around Charleston creates two distinct seasonal pest challenges that residents should prepare for. Deer ticks are active throughout the forested ridges and the Kanawha State Forest from spring through fall. Checking for ticks after any time outdoors in wooded or brushy areas is the most important personal protection step. Stink bugs arrive each fall as temperatures cool, moving down the forested slopes and through the valley corridor into buildings. The brown marmorated stink bug aggregates on warm exterior surfaces and enters through gaps around windows, doors, and utilities. WVU Extension identifies this as a statewide nuisance concern with particularly strong fall pressure in the Kanawha valley.",
      },
    ],
    prevention: [
      "Schedule an annual termite inspection given WVU Extension's documented subterranean termite pressure in the Kanawha valley.",
      "Check for ticks after any time in the Appalachian forests or brushy areas surrounding Charleston.",
      "Seal exterior gaps around windows, doors, and utilities before September to reduce fall stink bug entry.",
      "Fix wood rot and moisture issues around windows, decks, and plumbing to reduce carpenter ant entry points.",
    ],
    costNote:
      "Charleston pest control is typically quoted as a recurring general plan for ants, cockroaches, and rodents, with termite protection and tick treatment quoted separately. Stink bug exclusion work is most effective done in August and September. A free inspection establishes what is present before any service is recommended.",
    faqs: [
      {
        question: "How serious are termites in Charleston, WV?",
        answer:
          "Real. West Virginia University Extension confirms eastern subterranean termite activity in the Kanawha valley. Charleston's humid river valley setting and older housing stock create favorable conditions. Annual inspections are a practical precaution, particularly for homes with crawl spaces or wood near soil contact.",
      },
      {
        question: "Are deer ticks a concern near Charleston?",
        answer:
          "Yes. West Virginia has documented Lyme disease cases, and the Appalachian forests around Charleston including the Kanawha State Forest are prime deer tick habitat. The active season runs from early spring through late fall. Tick checks after outdoor activity in wooded or brushy areas are the most effective personal protection.",
      },
      {
        question: "Why do stink bugs invade Charleston homes every fall?",
        answer:
          "The Kanawha valley's position in the Appalachian mid-Atlantic corridor channels brown marmorated stink bugs into the area each fall. They emerge from the forested ridges seeking warmth and aggregate on building exteriors before finding gaps to enter. WVU Extension confirms this is a statewide nuisance concern. Sealing the building exterior in August reduces entry.",
      },
      {
        question: "What is the difference between carpenter ants and termites?",
        answer:
          "Eastern subterranean termites consume wood fiber and leave rough, mud-filled galleries and mud tubes on foundation walls. Carpenter ants excavate clean, smooth galleries in moist or rotted wood but do not eat it. Both can cause significant structural damage over time. The inspection determines which is present, and the treatment approaches are completely different.",
      },
      {
        question: "When is mosquito season in Charleston?",
        answer:
          "The Kanawha and Elk Rivers create breeding habitat that extends the season from April through October. The river valley's low-lying areas after rain events can produce intense local pressure. Eastern Equine Encephalitis and West Nile virus are both monitored by the WV Bureau for Public Health in mosquito populations.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Huntington", slug: "huntington" },
      { name: "Pittsburgh", slug: "pittsburgh" },
      { name: "Cincinnati", slug: "cincinnati" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle:
      "Pest Control in Charleston, WV | Termites, Stink Bugs & Deer Ticks",
    metaDescription:
      "Charleston WV pest control for eastern subterranean termites, stink bugs, deer ticks, mosquitoes and carpenter ants. Kanawha County Appalachian valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
