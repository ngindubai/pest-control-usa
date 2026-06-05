import type { CityLocation } from "@/types";

// Connecticut city data. Pest intelligence verified against University of Connecticut Extension.

export const connecticutCities: CityLocation[] = [
  {
    slug: "hartford",
    name: "Hartford",
    state: "Connecticut",
    stateSlug: "connecticut",
    stateAbbr: "CT",
    tier: "T2",
    population: "~120,000",
    county: "Hartford County",
    climate: "cold-humid",
    climateDriver:
      "Hartford is the capital of Connecticut, located in the Connecticut River Valley. The cold-humid northeastern climate delivers cold winters with snow and ice, hot humid summers, and a full four seasons. The Connecticut River Valley funnels stink bug populations from the surrounding orchard and agricultural land into the urban core each fall. The river corridor contributes to tick habitat, and the city's dense pre-war housing stock sustains urban pest pressure year-round.",
    topPests: ["Stink Bugs", "House Mice", "German Cockroaches", "Odorous House Ants", "Deer Ticks"],
    pestProfile: [
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "September through November entry, overwinter indoors",
        note: "Stink bugs are the most commented-on fall pest in Hartford. The Connecticut River Valley's agricultural land and orchards in surrounding communities produce large stink bug populations that move into Hartford structures each fall. The state's agricultural extension offices note that stink bug populations in the Connecticut River Valley are among the highest in the northeast outside of prime orchard regions.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors in October, active year-round once inside",
        note: "House mice are a year-round concern in Hartford's older housing stock. The city has a significant inventory of pre-war multi-family buildings that provide ample entry points. The cold Connecticut winters drive mice firmly into heated buildings from October through April.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are present in Hartford's multi-family housing, restaurants, and commercial kitchens. The city's density and older building stock create the warm, moisture-rich indoor environments cockroaches prefer. They spread between units through shared utility runs.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, push indoors in cold and rain",
        note: "Odorous house ants emerge each spring in Hartford as one of the first pest complaints of the season. They nest in yard mulch and wall voids and forage in kitchens. They are active from April through October and push readily indoors during rainy periods.",
      },
      {
        name: "Deer ticks (black-legged ticks)",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active when temps above freezing, peak May through October and again in fall",
        note: "Deer ticks are the tick species that carries Lyme disease, and Connecticut has one of the highest Lyme disease rates in the United States. The Connecticut Department of Public Health consistently records Hartford County among the counties with the highest Lyme disease incidence. Properties near the Connecticut River corridor and any wooded or brushy land in the Hartford area carry meaningful tick risk.",
      },
    ],
    localHook:
      "Connecticut has one of the highest Lyme disease rates in the United States. The Connecticut Department of Public Health reports that Hartford County is consistently among the top Connecticut counties for Lyme disease cases. The deer tick (black-legged tick) that carries Lyme is present throughout the Connecticut River Valley and in the wooded and brushy areas surrounding Hartford. This is not a theoretical risk: it is a documented public health concern for Hartford residents.",
    intro:
      "Pest control in Hartford covers two very different seasons. Fall brings the stink bug invasion from the Connecticut River Valley's agricultural land, and the October mouse push as cold temperatures arrive. Spring brings odorous house ants and deer ticks from the wooded and riparian areas around the city. German cockroaches are a year-round challenge in the older multi-family housing stock. And Lyme disease risk from deer ticks is high enough in Hartford County to warrant real tick management awareness for anyone spending time outdoors.",
    sections: [
      {
        heading: "Stink bugs in the Connecticut River Valley",
        body: "Hartford's position in the Connecticut River Valley places it squarely in one of the northeast's most productive stink bug zones. The apple orchards and agricultural land in surrounding communities like Glastonbury, Cromwell, and the Farmington Valley build up stink bug populations through summer that move into structures as temperatures drop in September. Hartford buildings with gaps around windows and utility penetrations in older construction see the heaviest entry. The prevention window is August through early September, before they begin aggregating. Sealing gaps around windows, utility lines, and where pipes enter the building exterior reduces entry significantly. A perimeter treatment on exterior walls before aggregation begins is an effective complement.",
      },
      {
        heading: "Deer tick risk in Hartford County",
        body: "Connecticut is one of the states with the highest Lyme disease incidence nationally, and Hartford County is consistently among the highest-incidence counties in the state. Deer ticks are present in wooded and brushy areas throughout the Hartford region, including the Connecticut River corridor, Keney Park, and any property with natural areas or wildlife corridors. Ticks are not just a rural concern in Connecticut: suburban and urban green spaces with deer and rodent populations carry meaningful tick pressure. Residential tick management, combining yard habitat reduction (leaf litter removal, clear brush margins) with spring and fall perimeter treatments, is appropriate for Hartford County properties near wooded or green areas.",
      },
    ],
    prevention: [
      "Seal gaps around windows and utility penetrations before September to limit fall stink bug entry.",
      "Complete mouse exclusion work in September: seal foundation gaps, under-door gaps, and utility penetrations before October.",
      "Remove leaf litter and dense brush from yard margins to reduce deer tick habitat near the home.",
      "Store food in sealed containers and address moisture under sinks to reduce German cockroach foraging conditions.",
    ],
    costNote:
      "Hartford pest control typically starts with a free inspection. Stink bug programs include both exclusion work and perimeter treatment in late summer. Mouse programs include exclusion and trapping. Tick programs are spring and fall yard treatments. General pest programs for ants and cockroaches are quarterly.",
    faqs: [
      {
        question: "Why are stink bugs so bad in Hartford?",
        answer:
          "Hartford's position in the Connecticut River Valley places it downwind and adjacent to some of the most productive stink bug habitat in the northeast. Apple orchards and agricultural land in surrounding communities build large stink bug populations by late summer. When fall arrives and temperatures drop, those populations move into structures throughout the valley. Hartford buildings with older construction and more exterior gaps see the heaviest invasions. The prevention window is before aggregation begins in September.",
      },
      {
        question: "How serious is Lyme disease risk in Hartford?",
        answer:
          "Very serious. Connecticut has one of the highest Lyme disease rates per capita in the United States, and Hartford County is consistently among the highest-incidence counties in the state. The Connecticut Department of Public Health publishes annual case data that confirms the risk is real and persistent. Anyone spending time in wooded or brushy areas in Hartford County should use tick repellent, wear protective clothing, and perform tick checks after outdoor activity.",
      },
      {
        question: "When do mice become a problem in Hartford homes?",
        answer:
          "October is the primary entry month. Connecticut winters are cold enough to make heated buildings essential for house mice, and they begin actively looking for entry points as temperatures drop. Hartford's older housing stock has more entry points than newer construction. September exclusion work, sealing gaps at foundation utility penetrations, under exterior door sills, and around window frames at grade, is more cost-effective than dealing with an established indoor population.",
      },
      {
        question: "Are German cockroaches a problem in Hartford homes or just commercial properties?",
        answer:
          "Both. German cockroaches are primarily encountered in Hartford's multi-family housing and commercial food service, but they do appear in single-family homes when introduced through infested boxes, appliances, or secondhand furniture. Once inside, they breed rapidly in warm, moist environments. They do not come from outdoors in Connecticut's climate. Gel bait treatment in harborage areas is more effective than spray for German cockroaches.",
      },
      {
        question: "What can I do about odorous house ants in my Hartford kitchen?",
        answer:
          "Odorous house ants nest outdoors in mulch and under slabs and forage indoors for sweets. They push inside readily during rain events and cool spring weather. The trail you see in the kitchen is the tip of a colony that originates outside. Treating the exterior perimeter, particularly where the foundation meets the ground, and removing the mulch and debris that gives them harborage near the house, is more effective than spraying the indoor trail. Indoor bait placement can help as well.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "New Haven", slug: "new-haven" },
      { name: "Bridgeport", slug: "bridgeport" },
      { name: "Waterbury", slug: "waterbury" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Hartford, CT | Stink Bugs, Mice & Deer Ticks",
    metaDescription:
      "Hartford pest control for stink bugs, house mice, German cockroaches, odorous house ants and deer ticks. Hartford County Connecticut River Valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
