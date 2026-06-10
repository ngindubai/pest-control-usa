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
  {
    slug: "lexington",
    name: "Lexington",
    state: "Kentucky",
    stateSlug: "kentucky",
    stateAbbr: "KY",
    tier: "T1",
    population: "~320,000",
    county: "Fayette County",
    climate: "hot-humid",
    climateDriver:
      "Lexington sits in the Bluegrass region of central Kentucky, with humid summers, cold winters, and the rolling farmland and horse country that surrounds the city. The humid climate sustains termite and mosquito activity through the warm season, while the surrounding agriculture brings rodent pressure into the city's edges.",
    topPests: ["Termites", "Mosquitoes", "Mice", "Ants", "Spiders"],
    pestProfile: [
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "University of Kentucky Extension, based in Lexington, identifies central Kentucky as having significant subterranean termite pressure. The humid summers and the mix of older and rural housing stock make regular inspections worthwhile.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The creeks, ponds, and the standing water common across the Bluegrass farmland create mosquito breeding habitat. West Nile virus activity has been recorded in Fayette County.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "Lexington's cold winters drive mice indoors in fall. Homes on the edges of the city near the surrounding horse farms and agricultural land see additional field mouse pressure.",
      },
      {
        name: "Odorous house and carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Odorous house ants are the common nuisance ant indoors, producing a rotten coconut smell when crushed. Carpenter ants nest in moisture-damaged wood in the older housing stock.",
      },
      {
        name: "Spiders, including brown recluse",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, most active spring through fall",
        note: "Kentucky is within the range of the brown recluse, and they turn up in undisturbed storage areas, basements, and garages across central Kentucky. The common house and cellar spiders are also widespread.",
      },
    ],
    localHook:
      "Lexington is home to the University of Kentucky's entomology program, which has studied the region's termites for decades. Their finding is clear: central Kentucky has real subterranean termite pressure, so an annual inspection is a sensible part of owning a home in the Bluegrass.",
    intro:
      "Pest control in Lexington reflects the humid Bluegrass climate and the horse-country landscape around it. University of Kentucky Extension, headquartered here, confirms central Kentucky has significant subterranean termite pressure, which makes annual inspections worthwhile. The creeks and ponds of the surrounding farmland drive a solid mosquito season, the cold winters push mice indoors each fall, and the brown recluse is present in the region's storage areas and basements. The mix of city neighborhoods and rural edges shapes the pest picture.",
    sections: [
      {
        heading: "The Bluegrass and its termite pressure",
        body: "Lexington sits at the center of the Bluegrass region, and the humid summers combined with the mix of older city homes and rural properties give subterranean termites favorable conditions. University of Kentucky Extension, based in Lexington, has long documented this pressure. The first sign of an established colony is usually a spring swarm of winged termites indoors, often near windows or the foundation. Annual inspections are the practical defense, particularly for homes with crawl spaces, wood siding, or any structural wood near soil.",
      },
      {
        heading: "Horse country, farmland, and rodent pressure",
        body: "Lexington's identity is tied to the surrounding horse farms and Bluegrass agriculture, and that rural landscape shapes the pest picture at the city's edges. Homes near farmland and open land see additional field mouse and rodent pressure beyond the standard urban house mouse. When the cold arrives in fall, that surrounding population pushes toward warm buildings. Sealing entry points before fall, particularly on properties bordering open land, is the most effective preventive step.",
      },
    ],
    prevention: [
      "Schedule an annual termite inspection given central Kentucky's documented subterranean termite pressure.",
      "Remove standing water from yard features after rain to reduce the Bluegrass mosquito season.",
      "Seal foundation gaps and utility penetrations before fall, especially on properties near farmland.",
      "Store items in sealed plastic containers to reduce brown recluse harborage in basements and garages.",
    ],
    costNote:
      "Lexington pest control is commonly quoted as a recurring general plan covering ants, spiders, and rodents, with termite protection quoted separately after inspection and mosquito service added seasonally. Start with a free assessment.",
    faqs: [
      {
        question: "How serious is the termite risk in Lexington?",
        answer:
          "Significant. University of Kentucky Extension, based in Lexington, confirms central Kentucky has notable subterranean termite pressure. The humid summers and mix of older and rural housing create favorable conditions. Annual inspections are recommended, particularly for homes with crawl spaces or wood near the foundation.",
      },
      {
        question: "Are brown recluse spiders found in Lexington?",
        answer:
          "Yes. Kentucky is within the range of the brown recluse, and they turn up in undisturbed storage areas, basements, and garages across central Kentucky. They are not aggressive and bites are uncommon, but storing items in sealed plastic containers and checking undisturbed areas reduces contact.",
      },
      {
        question: "Why do mice come into Lexington homes from the farms?",
        answer:
          "Homes on the edges of Lexington near horse farms and agricultural land see field mouse pressure in addition to the standard house mouse. When the cold arrives in fall, that surrounding rodent population moves toward warm buildings. Sealing entry points before fall, especially on properties bordering open land, is the most effective prevention.",
      },
      {
        question: "Is there a mosquito risk in Lexington?",
        answer:
          "Yes. The creeks, ponds, and standing water across the Bluegrass farmland create breeding habitat, and West Nile virus activity has been recorded in Fayette County. The active season runs April through October. Removing standing water and treating shaded resting areas reduces exposure.",
      },
      {
        question: "Do I need year-round pest control in Lexington?",
        answer:
          "Many Lexington homes do well with a recurring general plan plus an annual termite inspection. Ants, spiders, and rodents are year-round or recurring concerns, while mosquitoes are seasonal. A continuous plan is more cost-effective than reacting to each issue separately.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Louisville", slug: "louisville" },
      { name: "Georgetown", slug: "georgetown-ky" },
      { name: "Nicholasville", slug: "nicholasville" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle: "Pest Control in Lexington, KY | Termites, Mosquitoes & Mice",
    metaDescription:
      "Lexington pest control for subterranean termites, mosquitoes, mice, ants and brown recluse spiders. Bluegrass region specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "bowling-green",
    name: "Bowling Green",
    state: "Kentucky",
    stateSlug: "kentucky",
    stateAbbr: "KY",
    tier: "T2",
    population: "~75,000",
    county: "Warren County",
    climate: "temperate",
    climateDriver:
      "Bowling Green sits in Warren County in south-central Kentucky, where the Lost River Cave system and the Barren River drainage create a karst landscape with sinkholes, underground drainage, and the warm, humid conditions that define the upper South pest calendar. The humid subtropical to temperate climate delivers hot summers, mild winters with occasional freezes, and a long pest season that begins in late February and runs through November. Western Kentucky University brings a student population and rental housing market that sustains German cockroach pressure in the older apartment corridors.",
    topPests: [
      "Eastern Subterranean Termites",
      "Mosquitoes",
      "Fire Ants",
      "German Cockroaches",
      "Brown Recluse Spiders",
    ],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms February through April, active spring through fall",
        note:
          "Eastern subterranean termites are well established in Warren County and throughout south-central Kentucky. Bowling Green's older neighborhoods, including the historic homes near WKU and the residential areas flanking the Barren River, carry significant termite risk. University of Kentucky Cooperative Extension confirms subterranean termites are present across the state and are a primary structural pest in south-central Kentucky.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note:
          "The Barren River, Barren River Lake, and the karst drainage system of Warren County create substantial mosquito breeding habitat. Bowling Green's warm summers sustain a long mosquito season. The Asian tiger mosquito is established in Kentucky and extends the daytime biting pressure beyond the traditional evening hours.",
      },
      {
        name: "Fire ants",
        serviceSlug: "fire-ant-control",
        activeSeason: "March through November, most active spring and fall",
        note:
          "Red imported fire ants have established a significant presence in south-central Kentucky, and Warren County is within the fire ant zone. University of Kentucky Extension confirms fire ants are present in the southernmost Kentucky counties including Warren County, with colony activity most visible in spring and fall.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are a year-round concern in Bowling Green's student rental housing near Western Kentucky University, the commercial food service corridor along US-31W, and older multi-family housing throughout the city. The WKU rental market has the same high-turnover cockroach introduction dynamics as other university cities.",
      },
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round, most active spring through fall",
        note:
          "Brown recluse spiders are present in Warren County and throughout south-central Kentucky. University of Kentucky Cooperative Extension confirms brown recluses are common in Kentucky homes, found in undisturbed indoor locations including closets, boxes, and stored items. Their bite causes significant tissue damage and requires medical attention.",
      },
    ],
    localHook:
      "Bowling Green's karst landscape, with the Lost River Cave system running under parts of the city, creates an unusual structural pest environment where termite and moisture-related problems can develop from below-grade conditions that are not visible during a standard surface inspection.",
    intro:
      "Pest control in Bowling Green covers the full south-central Kentucky pest calendar. Eastern subterranean termites are the structural baseline concern, with spring swarms beginning in February and the karst landscape creating favorable soil moisture conditions for colony activity. Mosquitoes from the Barren River and the karst drainage system dominate the summer outdoor calendar. Fire ants are an established Warren County pest that requires year-round management. German cockroaches are year-round in the WKU rental corridor. Brown recluse spiders are present in undisturbed indoor spaces throughout the city. The combination of the university rental market and the karst landscape makes Bowling Green a city where pest management requires both indoor and outdoor attention.",
    sections: [
      {
        heading: "Termites in Bowling Green's karst landscape",
        body: "The Warren County karst landscape, shaped by the dissolution of the underlying limestone into caves, sinkholes, and Lost River Cave, also creates the soil moisture conditions that Eastern subterranean termites favor. Soil above karst drainage tends to retain moisture differently than standard soil, and the underground water movement creates zones of persistent moisture that sustain termite colonies. Bowling Green homes built near sinkholes, over fill soil, or adjacent to the Lost River drainage system may have higher-than-average termite risk from below-grade moisture sources that are not visible from the surface. University of Kentucky Cooperative Extension recommends annual termite inspection for Warren County homeowners. The older residential neighborhoods near WKU campus and the historic downtown district have decades of exposure and carry the highest cumulative risk.",
      },
      {
        heading: "Brown recluse spiders in Bowling Green homes",
        body: "Brown recluse spiders are one of the most frequently asked-about pests in Kentucky, and Warren County is well within their established range. They live in undisturbed indoor spaces: closets, boxes in storage, behind furniture and appliances, and inside wall voids where they are rarely encountered. University of Kentucky Cooperative Extension notes that brown recluses are common in Kentucky and that large numbers can be present in a home without residents being aware of them until a bite occurs. The practical management approach combines interior residual treatment in harborage areas, sticky monitoring traps placed along baseboards and in closet corners, and clutter reduction in storage spaces that would otherwise provide undisturbed habitat. Their bite causes a necrotic skin reaction that typically requires medical treatment: any suspected brown recluse bite warrants a call to a medical professional.",
      },
    ],
    prevention: [
      "Schedule annual termite inspection for Bowling Green homes near the Barren River and the karst drainage system, which creates below-grade moisture conditions favorable for termite colonies.",
      "Reduce undisturbed indoor storage in closets, attics, and boxes to limit brown recluse harborage and use sticky monitoring traps along baseboards.",
      "Apply monthly mosquito barrier spray from April through October near the Barren River and the karst drainage areas of the city.",
      "Apply broadcast fire ant bait in spring and fall for sustained colony reduction across lawns and garden beds.",
    ],
    costNote:
      "Bowling Green pest pricing is standard south-central Kentucky range. Annual termite inspection, year-round general pest coverage, and seasonal mosquito service covers the core pest calendar. Commercial and WKU rental properties require a site-specific proposal. A free inspection starts the process.",
    faqs: [
      {
        question: "Does the Lost River Cave system create unusual pest conditions in Bowling Green?",
        answer:
          "The karst landscape beneath Bowling Green creates soil moisture and drainage conditions that differ from areas without underground cave systems. This affects termite and moisture pest risk for homes built over or adjacent to the karst drainage. Homes near sinkholes, over fill material placed in karst depressions, or adjacent to the Lost River drainage corridor may have higher below-grade moisture than their surface conditions would suggest. An annual termite inspection that includes crawl space or foundation assessment is especially important for properties in karst zones.",
      },
      {
        question: "Are brown recluse spiders dangerous in Bowling Green?",
        answer:
          "Brown recluse spiders are present throughout Warren County and their bite is genuinely medically significant. The venom causes localized tissue necrosis in many cases, resulting in a slow-healing wound that can become serious if not treated. They are not aggressive and only bite when pressed against the skin, typically when someone reaches into an undisturbed storage area and contacts them accidentally. UK Cooperative Extension advises wearing gloves when reaching into undisturbed stored items in areas where brown recluses may be present.",
      },
      {
        question: "When do termites swarm in Bowling Green?",
        answer:
          "Eastern subterranean termites in Warren County typically swarm from February through April, with February swarms possible during warm spells. South-central Kentucky's mild winters mean swarm season begins earlier than in northern states. Finding winged insects or discarded wings near a window indoors in late winter warrants an immediate professional inspection.",
      },
      {
        question: "Are fire ants established in Bowling Green?",
        answer:
          "Yes. Warren County is within the fire ant range that UK Extension confirms for the southernmost Kentucky counties. Fire ants have established colonies in lawns, landscaping, and along foundation edges in Bowling Green. They are more established and aggressive in Warren County than in northern Kentucky counties. Spring and fall are the most visible activity periods, but colonies are never fully dormant in south-central Kentucky's mild winters.",
      },
      {
        question: "Is a year-round pest plan needed in Bowling Green?",
        answer:
          "For most Bowling Green properties, a year-round plan is practical given the mild winters and long pest season. Termites require annual inspection. Brown recluse spiders are year-round. German cockroaches in rental properties are year-round. Mosquitoes run April through October. Fire ants are active most of the year. A sustained general program with seasonal additions is more cost-effective than reactive treatment.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Louisville", slug: "louisville" },
      { name: "Lexington", slug: "lexington" },
      { name: "Nashville", slug: "nashville" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Bowling Green, KY | Termites, Brown Recluse & Mosquitoes",
    metaDescription:
      "Bowling Green pest control for Eastern subterranean termites, brown recluse spiders, mosquitoes, fire ants and German cockroaches. Warren County Lost River Cave karst south-central Kentucky specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
