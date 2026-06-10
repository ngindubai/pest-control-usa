import type { CityLocation } from "@/types";

// Vermont. Pest data reflects northern New England Lake Champlain conditions.
// Tick and carpenter ant data from University of Vermont Extension.

export const vermontCities: CityLocation[] = [
  {
    slug: "burlington",
    name: "Burlington",
    state: "Vermont",
    stateSlug: "vermont",
    stateAbbr: "VT",
    tier: "T2",
    population: "~45,000",
    county: "Chittenden County",
    climate: "cold",
    climateDriver:
      "Burlington sits on the eastern shore of Lake Champlain in northwest Vermont, where the lake moderates temperatures slightly compared to inland Vermont but winters are still cold and long. The forested Green Mountains to the east and the Champlain Valley's wetlands and agricultural land create significant deer tick habitat. The cold climate limits termite pressure, but carpenter ants are a major concern in the region's wood-frame housing.",
    topPests: [
      "Deer ticks",
      "Carpenter ants",
      "House mice",
      "Wasps and hornets",
      "Mosquitoes",
    ],
    pestProfile: [
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November, adults persist on warm winter days",
        note: "Vermont has seen a significant increase in Lyme disease incidence over the past two decades, and Chittenden County is in the documented high-risk zone. University of Vermont Extension confirms that deer tick populations have expanded throughout the Champlain Valley as the deer population has grown. The wooded and brushy edges common throughout Burlington's suburban areas are prime tick habitat.",
      },
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, interior colonies active year-round",
        note: "Carpenter ants are the primary wood-destroying pest in Vermont. University of Vermont Extension identifies them as the most common wood pest call throughout the state. Burlington's older housing stock, combined with the moisture exposure common in a cold northern climate, creates frequent opportunities for colonies to establish in softened or rotted structural wood.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge September through April",
        note: "Burlington winters are cold and long, with temperatures regularly below 0°F for extended periods. House mice push into heated buildings from September and remain active through the winter. Burlington's many older wood-frame homes and apartments have the gaps and settling common in northern housing that give mice ready access.",
      },
      {
        name: "Bald-faced hornets and yellow jackets",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "May through October, most aggressive August and September",
        note: "Bald-faced hornets build large paper nests in trees and on building overhangs throughout the Burlington area. Yellow jackets are common in underground nests in lawns and gardens. Both are most defensive in August and September. Late summer encounters at outdoor dining areas along Church Street and Burlington's lakeside parks are a seasonal experience.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Late May through September",
        note: "Lake Champlain's shoreline wetlands, the Winooski River delta, and the numerous low areas along the lake create mosquito breeding habitat. Vermont has documented Eastern Equine Encephalitis in mosquito populations. The season is shorter than in southern states but can be intense near the lake in June and July.",
      },
    ],
    localHook:
      "Burlington's Lake Champlain setting means spectacular summer evenings on the waterfront, and it also means mosquito pressure from the lake's shoreline wetlands and the Winooski River delta from late May through September. But the bigger seasonal concern for most Burlington residents is the tick season in the surrounding forests and the Champlain Valley's brushy edges, where deer tick populations have grown alongside the state's increasing Lyme disease numbers.",
    intro:
      "Pest control in Burlington reflects the cold northern New England climate and the Champlain Valley's forested and agricultural landscape. Deer ticks are the most significant public health concern, with Vermont's Lyme disease incidence growing year over year and Chittenden County in the high-risk zone. Carpenter ants are the primary wood-destroying pest given the cold climate that limits termite activity, and Burlington's older housing stock makes this a consistent local concern. House mice push aggressively indoors through Vermont's long winters, wasps peak in August and September, and mosquitoes have a concentrated but active season near the lake.",
    sections: [
      {
        heading: "Deer ticks and Lyme disease in the Champlain Valley",
        body: "Vermont's Lyme disease incidence has increased steadily, and the Champlain Valley has become a well-documented high-risk area. Deer ticks are present in wooded areas, tall grass, brush piles, and the edges between lawns and natural areas throughout greater Burlington. They are active from early spring through late fall and can survive mild winter days. The nymph stage, active in May and June, is responsible for most human Lyme infections because the tiny nymphs are difficult to spot. Regular tick checks after time outdoors in wooded or brushy areas, prompt removal of attached ticks within 36 hours, and professional treatment of yard perimeters bordering forests or overgrown areas are the most effective prevention strategies. University of Vermont Extension recommends maintaining a clear buffer zone between the lawn and wooded edges.",
      },
      {
        heading: "Carpenter ants in Burlington's housing stock",
        body: "Termites are not a significant concern in Burlington, but carpenter ants are a consistent structural challenge. University of Vermont Extension identifies carpenter ants as the primary wood-destroying pest statewide. They excavate galleries inside moist or softened wood, often targeting areas around windows, door frames, decks, and plumbing where water intrusion has occurred over time. Burlington's older wood-frame homes, including many in the Hill Section and South End neighborhoods, have age-related moisture vulnerabilities that attract colonies. The most common early sign is large black ants foraging in kitchens or bathrooms in spring. Finding ants inside in winter is a stronger warning: it suggests a colony has established within the building's insulated spaces and is active through the cold months.",
      },
    ],
    prevention: [
      "Perform regular tick checks after spending time in wooded or brushy areas throughout the Champlain Valley.",
      "Repair moisture damage around windows, decks, and plumbing to prevent carpenter ant colonization in Burlington's older housing.",
      "Seal foundation gaps and utility penetrations before September to intercept mice before Vermont's long winter drives them indoors.",
      "Keep a mowed buffer zone at least three feet wide between lawn and wooded edges to reduce deer tick exposure near the house.",
    ],
    costNote:
      "Burlington pest control is most commonly structured as a seasonal plan covering ticks in spring and fall, ants in summer, and rodents in fall and winter. Carpenter ant treatment is quoted after inspection based on colony extent. A free assessment establishes what is present before any plan is proposed.",
    faqs: [
      {
        question: "How serious is the Lyme disease risk in Burlington, VT?",
        answer:
          "Significant and growing. Vermont's Lyme disease incidence has increased year over year, and Chittenden County is in the documented high-risk zone. Deer ticks are present throughout the wooded and brushy areas of greater Burlington. Tick checks after outdoor activity, prompt tick removal, and professional yard treatment at forest edges are the recommended practices.",
      },
      {
        question: "Do Burlington homes get termites?",
        answer:
          "Termites are not a significant concern in Burlington. The cold northern Vermont climate is not favorable for subterranean termite colonies. Carpenter ants fill the structural wood pest role that termites play in warmer climates and are the more common concern in Burlington's housing.",
      },
      {
        question: "What are the signs of carpenter ants in a Burlington home?",
        answer:
          "Large black ants foraging in kitchens or bathrooms in spring are the early sign. Finding them indoors in winter suggests an established interior colony. Fine sawdust (frass) near wood features and faint rustling sounds in walls are later indicators. Carpenter ants are drawn to moisture-damaged wood, so any soft or rotted areas around windows, decks, and plumbing are the priority inspection points.",
      },
      {
        question: "When is mosquito season near Burlington?",
        answer:
          "Late May through September, concentrated near Lake Champlain's shoreline wetlands and the Winooski River delta. The season is shorter than in southern states but can be intense near the water in June and July. Vermont monitors for Eastern Equine Encephalitis in mosquito populations.",
      },
      {
        question: "How do I protect my Burlington home from mice in winter?",
        answer:
          "Seal entry points before October. House mice push into heated buildings as Vermont's cold settles in. Check around pipe penetrations, garage door weatherstripping, and foundation cracks. Gaps as small as a dime are large enough for a mouse. Steel wool combined with caulk works for small gaps. A fall exclusion inspection is the most thorough prevention approach.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Manchester", slug: "manchester" },
      { name: "Albany", slug: "albany" },
      { name: "Providence", slug: "providence" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle:
      "Pest Control in Burlington, VT | Deer Ticks, Carpenter Ants & Mice",
    metaDescription:
      "Burlington VT pest control for deer ticks, Lyme disease risk, carpenter ants, house mice and mosquitoes. Chittenden County Lake Champlain Vermont specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
