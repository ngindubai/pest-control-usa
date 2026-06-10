import type { CityLocation } from "@/types";

// Maine. Pest data reflects northern New England coastal climate conditions.
// Tick and carpenter ant data from University of Maine Cooperative Extension.

export const maineCities: CityLocation[] = [
  {
    slug: "portland",
    name: "Portland",
    state: "Maine",
    stateSlug: "maine",
    stateAbbr: "ME",
    tier: "T2",
    population: "~68,000",
    county: "Cumberland County",
    climate: "cold-humid",
    climateDriver:
      "Portland sits on Casco Bay in southern coastal Maine, where cold-humid air from the Gulf of Maine keeps summers short and winters long. The surrounding forests, wetlands, and rocky shoreline of the greater Portland area create exceptional deer tick habitat, and the humid coastal climate supports large carpenter ant populations in the older wood-frame housing stock.",
    topPests: [
      "Deer ticks",
      "Carpenter ants",
      "Mice",
      "Mosquitoes",
      "Wasps and hornets",
    ],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November, adults can survive mild winter days",
        note: "Maine CDC consistently reports among the highest Lyme disease incidence rates in the United States. Cumberland County, where Portland is located, is in the high-risk zone. University of Maine Cooperative Extension confirms that the deer tick population has grown significantly along the southern Maine coast over the past two decades, driven in part by expanding deer and white-footed mouse populations.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, indoor activity can indicate winter colony",
        note: "Carpenter ants are the dominant wood-destroying pest in Portland and throughout Maine. Unlike termites, carpenter ants do not eat wood but excavate galleries inside moist or softened wood. Portland's older coastal housing stock, with its exposure to maritime humidity, is particularly susceptible. Spotting large black ants indoors in winter often indicates an established colony inside the structure.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge September through March",
        note: "Maine winters are cold and long, which drives house mice firmly into heated buildings by September. Portland's older housing stock has gaps in foundations, around pipe penetrations, and in older weatherstripping that give mice ready access. Deer mice are also present in the wooded edges of greater Portland and carry hantavirus.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Late May through September",
        note: "Maine CDC monitors for mosquito-borne disease including Eastern Equine Encephalitis (EEE), which has been detected in Maine mosquito populations. Casco Bay's saltmarshes, the Back Cove, and the numerous freshwater wetlands around Portland create mosquito breeding habitat. The season is shorter than in southern states but can be intense in June and July.",
      },
      {
        name: "Bald-faced hornets and yellow jackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "May through October, most aggressive August and September",
        note: "Bald-faced hornets build large paper nests in trees and on building overhangs throughout the Portland area. Yellow jackets are common in underground nests in lawns and gardens. Both are most defensive in August and September when colony populations peak. Nest discovery during fall yard cleanup is a common sting scenario.",
      },
    ],
    localHook:
      "Maine CDC has documented some of the highest Lyme disease rates in the nation, and Cumberland County is in the high-risk zone. Portland's proximity to Casco Bay's marshes, the Back Cove, and miles of forested trails means deer tick exposure is a real consideration for residents who spend time outdoors. Combined with the carpenter ant pressure well-documented by University of Maine Extension, Portland's pest calendar is anchored at both ends of the warm season.",
    intro:
      "Pest control in Portland reflects the northern coastal New England environment. Deer ticks and Lyme disease are the most serious public health concern, with Maine CDC reporting consistently high incidence rates statewide. University of Maine Cooperative Extension confirms that carpenter ants are the dominant wood-destroying pest in Portland's older coastal housing stock, taking the place that termites occupy in warmer climates. Mice are a cold-weather staple from September through March, mosquitoes carry a shorter but active season, and bald-faced hornets and yellow jackets peak in late summer.",
    sections: [
      {
        heading: "Deer ticks and Lyme disease in Cumberland County",
        body: "Maine is one of the highest-incidence states for Lyme disease in the United States, and the Portland area is in the documented high-risk zone. Deer ticks, also called black-legged ticks, are present in wooded areas, tall grass, and the shrubby edges of trails and parks throughout Cumberland County. They are active whenever temperatures are above about 35°F, which in Portland means spring through late fall and even some mild winter days. The nymph stage, active in May and June, is the most frequently responsible for human infection because they are tiny and easily missed. Tick checks after outdoor activity, proper removal of any attached tick within 24 to 36 hours, and professional tick treatment of yard edges near wooded areas are the most effective risk-reduction steps.",
      },
      {
        heading: "Carpenter ants: Portland's primary wood threat",
        body: "Termites are not a significant concern in Portland, but carpenter ants are. University of Maine Extension consistently identifies carpenter ants as the primary structural wood pest in Maine, and Portland's older coastal housing is a frequent target. They excavate galleries inside moist or partially rotted wood, leaving behind smooth-sided channels and small piles of coarse sawdust called frass. The most common infestation sites are around windows, door frames, decks, and any area where wood has been exposed to moisture over time. The first sign is often large black ants foraging indoors in early spring, or swarming on a warm April day. Seeing ants inside during winter is more concerning, because it suggests a colony has already established inside the structure and is active in the insulated warmth.",
      },
    ],
    prevention: [
      "Perform tick checks after any time spent in wooded areas, tall grass, or trail edges throughout the Portland area.",
      "Repair wood rot and eliminate moisture sources around windows, decks, and foundation areas to prevent carpenter ant colonization.",
      "Seal foundation gaps and utility penetrations before September to intercept mice before the Maine winter drives them indoors.",
      "Maintain a mowed buffer zone between lawn and wooded edges to reduce the deer tick habitat closest to the home.",
    ],
    costNote:
      "Portland pest control is most commonly quoted as a seasonal plan covering ticks in spring and fall, ants and mosquitoes in summer, and rodent prevention in fall. Carpenter ant treatment is quoted separately when an infestation is found, based on the extent of the colony. A free inspection is the right starting point.",
    faqs: [
      {
        question: "How serious is the Lyme disease risk in Portland, ME?",
        answer:
          "Very serious. Maine CDC reports among the highest Lyme disease incidence in the United States, and Cumberland County is in the high-risk zone. Deer ticks are present in wooded and brushy areas throughout the greater Portland region. Annual yard treatment at wooded edges and regular tick checks after outdoor activity are the recommended practices.",
      },
      {
        question: "Do Portland homes get termites?",
        answer:
          "Termites are not a significant concern in Portland. The cold northern climate is not favorable for subterranean termite colonies. Carpenter ants are the primary wood-destroying pest in Maine, taking the ecological role that termites play in warmer climates. They are a more common and more significant structural concern in Portland than termites.",
      },
      {
        question: "What does a carpenter ant infestation look like in a Portland home?",
        answer:
          "The early sign is large black ants foraging in kitchens in spring. Finding ants indoors in winter is more concerning, suggesting the colony is established inside the building. Fine sawdust called frass near wood features, and faint rustling sounds in walls, are later indicators. Carpenter ants excavate moisture-damaged wood, so any soft or rotted wood around windows, decks, and plumbing is a priority to inspect.",
      },
      {
        question: "When is mosquito season in Portland, Maine?",
        answer:
          "The active season runs from late May through September. Maine's cool climate shortens it compared to southern states, but the saltmarshes around Casco Bay and the freshwater wetlands of the greater Portland area create intense local pressure. Maine CDC monitors for Eastern Equine Encephalitis in mosquito populations. Removing standing water and treating yard areas reduces exposure.",
      },
      {
        question: "Why are mice so persistent in Portland homes?",
        answer:
          "Maine winters are long and cold, and house mice have strong instincts to find warmth from September onward. Portland's older housing stock has the gaps and settling that give mice access. Once inside and established over the winter, a colony is difficult to remove without a thorough exclusion and trapping program. The fall is the right time to seal entry points before mice move in.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Providence", slug: "providence" },
      { name: "Boston", slug: "boston" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Portland, ME | Deer Ticks, Carpenter Ants & Mice",
    metaDescription:
      "Portland ME pest control for deer ticks, Lyme disease risk, carpenter ants, house mice and mosquitoes. Cumberland County Casco Bay coastal Maine specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
