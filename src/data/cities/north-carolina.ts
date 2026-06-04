import type { CityLocation } from "@/types";

// North Carolina seed cities. Pest data reflects humid subtropical Piedmont
// patterns (NC State Extension).

export const northCarolinaCities: CityLocation[] = [
  {
    slug: "charlotte",
    name: "Charlotte",
    state: "North Carolina",
    stateSlug: "north-carolina",
    stateAbbr: "NC",
    tier: "T1",
    population: "~880,000",
    county: "Mecklenburg County",
    climate: "hot-humid",
    climateDriver:
      "Charlotte sits in the humid Piedmont, with hot, wet summers and mild winters. The long warm season stretches the termite and mosquito calendar well beyond what northern cities see.",
    topPests: ["Termites", "Mosquitoes", "Fire Ants", "Cockroaches", "Spiders"],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarm in spring, active much of the year",
        note: "The Piedmont has heavy subterranean termite pressure, and the long warm season keeps colonies active for more of the year than further north.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "Spring through fall",
        note: "Warm, wet summers and plenty of standing water make for a long mosquito season, including the day-biting Asian tiger mosquito.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, surge after rain",
        note: "Fire ants have established across the NC Piedmont and build mounds that rebuild quickly after rain, a sting hazard for kids and pets.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "American roaches breed in mulch, crawl spaces, and drains and move indoors in heat, while German roaches breed indoors in kitchens.",
      },
      {
        name: "Spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round, more visible in warm months",
        note: "Common house and orb-weaver spiders thrive on the steady insect supply, with black widows possible in garages and crawl spaces.",
      },
    ],
    localHook:
      "Charlotte's mild Piedmont winters never really shut pests down. Subterranean termites stay active across much of the year here, which is why an annual inspection matters more than people moving from the North expect.",
    intro:
      "Pest control in Charlotte is driven by the humid Piedmont climate. The long, warm, wet season stretches the termite and mosquito calendar well past what a northern city sees, and fire ants have spread firmly into the region. Subterranean termites are the expensive, quiet risk. Mosquitoes and fire ants are the everyday outdoor battle. For homeowners who moved here from cooler states, the surprise is how little the winter slows any of it down.",
    sections: [
      {
        heading: "Termite pressure in the Piedmont",
        body: "First, the risk that matters most: subterranean termites are heavy across the Charlotte area and stay active for much of the year in this climate. They come up from the soil through mud tubes to reach wood. The early signs are easy to miss, so an annual inspection is the practical defense, especially for homes with crawl spaces or any wood-to-soil contact.",
      },
      {
        heading: "Mosquitoes and fire ants through the warm months",
        body: "What most homeowners deal with day to day is the outdoor pressure. Mosquitoes, including the day-biting Asian tiger mosquito, breed in standing water through a long season. Fire ants build mounds that rebuild fast after rain and sting readily. Reducing standing water and treating mounds and resting areas keeps both manageable across spring, summer, and fall.",
      },
    ],
    prevention: [
      "Keep an annual termite inspection on the calendar given Piedmont pressure.",
      "Empty anything holding water after rain to cut mosquito breeding.",
      "Treat fire ant mounds early before they spread across the yard.",
      "Reduce mulch and moisture against the foundation to limit roaches and termites.",
    ],
    costNote:
      "With year-round termite risk and a long mosquito and fire ant season, many Charlotte homes pair a recurring plan with an annual termite check. A free inspection sets the plan to your property.",
    faqs: [
      {
        question: "Are termites a big risk in Charlotte?",
        answer:
          "Yes. The Piedmont has heavy eastern subterranean termite pressure, and the mild climate keeps colonies active for much of the year. They reach wood through mud tubes from the soil, and the early signs are easy to miss, so an annual inspection is strongly recommended.",
      },
      {
        question: "How long is mosquito season in Charlotte?",
        answer:
          "It runs roughly spring through fall, longer than in northern cities, thanks to warm, wet weather. The day-biting Asian tiger mosquito is common here. Removing standing water and treating shaded resting areas reduces the bites.",
      },
      {
        question: "Are fire ants in the Charlotte area?",
        answer:
          "Yes, red imported fire ants are established across the NC Piedmont. Their mounds rebuild quickly after rain and their stings are a hazard for children and pets, so treating mounds early in the season is worthwhile.",
      },
      {
        question: "Why do roaches come indoors in Charlotte?",
        answer:
          "American roaches breed outdoors in mulch, crawl spaces, and drains and move inside in the heat, while German roaches breed indoors in kitchens. Reducing moisture and mulch against the home and sealing entry points keeps the outdoor type out.",
      },
      {
        question: "Is winter pest control necessary here?",
        answer:
          "The mild Piedmont winter does not fully stop pests, so termite risk and indoor roaches continue. Many homes keep a year-round plan rather than treating only in the warm months.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Concord", slug: "concord" },
      { name: "Gastonia", slug: "gastonia" },
      { name: "Raleigh", slug: "raleigh" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Charlotte, NC | Termites, Mosquitoes & Fire Ants",
    metaDescription:
      "Charlotte pest control for subterranean termites, mosquitoes, fire ants, roaches and spiders. Annual termite checks, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "raleigh",
    name: "Raleigh",
    state: "North Carolina",
    stateSlug: "north-carolina",
    stateAbbr: "NC",
    tier: "T1",
    population: "~475,000",
    county: "Wake County",
    climate: "hot-humid",
    climateDriver:
      "Raleigh sits in the Piedmont region with a humid subtropical climate: hot humid summers, mild winters, and significant spring and summer rain. The Neuse River basin, the many retention ponds created by rapid suburban growth, and the wetland areas in Falls Lake watershed create sustained mosquito habitat, while the Piedmont's humidity sustains year-round termite activity.",
    topPests: [
      "Termites",
      "Fire Ants",
      "Mosquitoes",
      "Cockroaches",
      "Stink Bugs",
    ],
    pestProfile: [
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "NC State Extension confirms the Raleigh area has significant subterranean termite pressure. North Carolina is consistently in the heavy termite hazard zone on the USDA map, and Wake County's rapidly expanding suburban housing creates new exposure with each development cycle.",
      },
      {
        name: "Red imported fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Year-round, most active spring through fall",
        note: "Fire ants are well-established across the Raleigh metro and Wake County. They rebuild mounds quickly after rain and are particularly abundant in the newer subdivisions with disturbed soil and open turf areas where they thrive.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "Raleigh's rapid growth has created thousands of retention ponds in new subdivisions throughout Wake County, and these ponds are ideal mosquito breeding habitat when not managed properly. The Neuse River basin and the Falls Lake watershed add to the natural background pressure.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Raleigh apartments and commercial settings. American cockroaches are common in basements and the drainage infrastructure of older Raleigh neighborhoods.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Fall invasion (Sept to Nov), overwintering indoors",
        note: "North Carolina's Piedmont and mountain regions have significant stink bug pressure. Raleigh homeowners near wooded areas and in older neighborhoods with gaps around windows and eaves see notable fall invasions as the insects seek overwintering sites.",
      },
    ],
    localHook:
      "Raleigh is one of the fastest-growing cities in America, and that growth has created an unintended pest consequence: thousands of new retention ponds built to manage stormwater in suburban developments. These ponds are ideal mosquito breeding habitat and have extended the active mosquito season across many of Wake County's newer neighborhoods.",
    intro:
      "Pest control in Raleigh carries a distinctive signature from the city's explosive growth. Thousands of retention ponds built to manage stormwater in Wake County's new subdivisions have created extensive mosquito breeding habitat, and fast-growing suburbs bring increased fire ant pressure from the disturbed, open-turf environments where they thrive. NC State Extension confirms significant subterranean termite pressure across the Piedmont, stink bugs hit hard in fall, and cockroaches are a year-round indoor presence.",
    sections: [
      {
        heading: "Retention ponds and the suburban mosquito problem",
        body: "Wake County's rapid growth has produced thousands of retention ponds, required by stormwater management regulations, that line every new subdivision. When managed properly with aeration and mosquito-control products, they contribute minimal mosquito pressure. When they sit stagnant, they are highly productive breeding sites. Homeowners adjacent to these ponds, or with their own yard features that hold water, face above-average mosquito pressure. Managing standing water on your property and treating resting areas under decks and in dense planting is the practical response.",
      },
      {
        heading: "Termite pressure across the Piedmont",
        body: "NC State Extension identifies the Piedmont region, where Raleigh sits, as having significant subterranean termite pressure. North Carolina consistently appears in the heavy termite hazard zone on the USDA map. The rapid construction of new housing on previously wooded lots also disturbs existing termite populations and can push colonies toward new structures. Annual inspections are the practical defense, particularly for newer homes built on recently cleared land.",
      },
    ],
    prevention: [
      "Report stagnant retention ponds to the homeowner association or county, and remove standing water from your own yard features.",
      "Have an annual termite inspection given the Piedmont's significant termite pressure.",
      "Seal window gaps and utility penetrations before September to reduce stink bug fall entry.",
      "Treat fire ant mounds as they appear, particularly in the open turf of newer subdivisions.",
    ],
    costNote:
      "Raleigh pest control is commonly quoted as a year-round general plan with mosquito service added April through October and termite protection quoted separately after inspection. Start with a free assessment.",
    faqs: [
      {
        question: "Why are mosquitoes such a problem in Raleigh's newer subdivisions?",
        answer:
          "Wake County's rapid growth has produced thousands of retention ponds required by stormwater regulations. When these ponds are not actively managed, they become productive mosquito breeding sites. Homeowners adjacent to retention ponds face above-average mosquito pressure. Removing standing water from your own yard and treating resting areas reduces the impact on your property.",
      },
      {
        question: "Is termite risk high in the Raleigh area?",
        answer:
          "Yes. NC State Extension confirms the Piedmont region has significant subterranean termite pressure, and North Carolina is consistently in the heavy termite hazard zone. Annual inspections are recommended, particularly for homes built on recently cleared or wooded lots where termite colonies may have been disturbed.",
      },
      {
        question: "When do stink bugs appear in Raleigh?",
        answer:
          "The fall invasion typically begins in September and continues through November. Raleigh homeowners near wooded areas and in older neighborhoods see the most activity. The brown marmorated stink bug is well-established in the North Carolina Piedmont. Sealing gaps around windows, eaves, and utility penetrations before September is the most effective prevention.",
      },
      {
        question: "Are fire ants a year-round concern in Raleigh?",
        answer:
          "Yes, though they are most active spring through fall. They are particularly prevalent in newer subdivisions with disturbed, open-turf areas where they thrive. They rebuild mounds quickly after rain. Treating mounds as they appear and doing a yard survey after significant storms keeps the risk manageable.",
      },
      {
        question: "Is year-round pest control necessary in Raleigh?",
        answer:
          "For most homes, yes. Termites, cockroaches, and fire ants are year-round concerns. Mosquitoes and stink bugs are seasonal but significant enough to warrant active management. A year-round plan with seasonal additions for mosquitoes and targeted stink bug exclusion is the standard approach.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Durham", slug: "durham" },
      { name: "Chapel Hill", slug: "chapel-hill" },
      { name: "Charlotte", slug: "charlotte" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Raleigh, NC | Termites, Mosquitoes & Fire Ants",
    metaDescription:
      "Raleigh pest control for subterranean termites, retention pond mosquitoes, fire ants, stink bugs and cockroaches. Wake County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
