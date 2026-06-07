import type { CityLocation } from "@/types";

// Kansas. Pest data reflects humid continental/semi-arid Great Plains conditions.
// Brown recluse range and termite pressure from Kansas State University Extension.

export const kansasCities: CityLocation[] = [
  {
    slug: "wichita",
    name: "Wichita",
    state: "Kansas",
    stateSlug: "kansas",
    stateAbbr: "KS",
    tier: "T1",
    population: "~395,000",
    county: "Sedgwick County",
    climate: "hot-humid",
    climateDriver:
      "Wichita sits in the Arkansas River valley on the Great Plains, with hot humid summers, cold winters, and significant spring storm activity. The river valley and the numerous lakes and wetlands of the Chisholm Creek corridor create sustained mosquito habitat, and the Great Plains location places the city squarely in brown recluse territory.",
    topPests: [
      "Termites",
      "Brown Recluse Spiders",
      "Mice",
      "Cockroaches",
      "Ants",
    ],
    pestProfile: [
      {
        name: "Subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms April through June, active spring through fall",
        note: "Kansas State University Extension identifies the Arkansas River valley and the Wichita area as having elevated subterranean termite pressure. The river valley soils and the humid summers support active colonies that can cause significant structural damage before they are detected.",
      },
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, most active spring through fall",
        note: "Wichita is well within the core geographic range of the brown recluse. Kansas State University Extension confirms they are common household pests throughout the state. Garages, storage areas, attics, and closets are the most common locations for established populations.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "Kansas winters are cold enough to drive mice firmly into heated buildings. Older neighborhoods and agricultural areas on the city's outskirts have higher mouse pressure from the surrounding field mouse population.",
      },
      {
        name: "German and American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor species in Wichita's commercial and multi-family settings. American cockroaches are common in basements and around drainage in the older neighborhoods.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall, most active May through August",
        note: "Odorous house ants are widespread in Wichita and a common nuisance indoors, producing a rotten coconut smell when crushed. Pavement ants and harvester ants are also present.",
      },
    ],
    localHook:
      "Wichita sits in the Arkansas River valley in the heart of brown recluse country. Kansas State University Extension confirms these spiders are a common household pest throughout the state. Combined with the river valley's elevated termite pressure, pest control here addresses real structural and safety risks that not all cities face.",
    intro:
      "Pest control in Wichita puts two significant risks front and center. The city sits in the core geographic range of the brown recluse, a spider that Kansas State University Extension confirms is a common household pest across the state. And the Arkansas River valley gives Wichita above-average subterranean termite pressure for a city on the Great Plains. Cold winters drive mice into buildings every fall, German cockroaches are year-round indoors, and the river corridor feeds a solid mosquito season in spring and summer.",
    sections: [
      {
        heading: "Brown recluses in Wichita: what to expect",
        body: "Wichita is in brown recluse range, which means these spiders are a common find in garages, storage rooms, closets, and attics, not a rare or dramatic event. Kansas State University Extension has published this clearly. The spider is not aggressive and bites are uncommon, but in some cases a bite can cause a significant wound. The practical response is regular perimeter treatment, storing items in sealed plastic containers rather than open cardboard boxes, and checking undisturbed areas periodically. Living sensibly with this common regional pest is more useful than alarm.",
      },
      {
        heading: "Termite pressure in the Arkansas River valley",
        body: "Kansas is often assumed to be low termite pressure because of its central Great Plains location. That assumption is wrong for the Arkansas River valley where Wichita sits. KSU Extension identifies the region as having elevated termite activity, driven by the river valley's moisture and soil composition. The first sign of an established colony is usually a spring swarm of winged termites indoors, often around window frames or near the foundation. Annual inspections are the practical defense.",
      },
    ],
    prevention: [
      "Store items in sealed plastic containers in storage areas to reduce brown recluse harborage.",
      "Shake out shoes, gloves, and clothing stored in undisturbed areas before using them.",
      "Schedule an annual termite inspection given the Arkansas River valley pressure.",
      "Seal foundation gaps and pipe penetrations in September before the fall mouse surge.",
    ],
    costNote:
      "Wichita pest control is typically quoted as a general plan covering spiders, roaches, ants, and rodents, with termite protection quoted separately after inspection. Start with a free assessment to identify which issues are active.",
    faqs: [
      {
        question: "Are brown recluse spiders common in Wichita?",
        answer:
          "Yes. Wichita is within the core geographic range of the brown recluse, and Kansas State University Extension confirms they are a common household pest throughout Kansas. Finding them in garages, closets, and storage areas is not unusual. Regular treatment and keeping storage in sealed containers reduces contact significantly.",
      },
      {
        question: "How serious is the termite risk in Wichita?",
        answer:
          "Above average for a Great Plains city. Kansas State University Extension identifies the Arkansas River valley, where Wichita sits, as having elevated subterranean termite pressure. Annual inspections are recommended, particularly for homes with crawl spaces or older wood-frame construction.",
      },
      {
        question: "When do mice become a problem in Wichita?",
        answer:
          "The surge typically arrives in October and November as Kansas temperatures drop. Homes on the outskirts near agricultural areas also see field mouse pressure in addition to the standard house mouse. Sealing foundation gaps and utility penetrations in September prevents them from getting established.",
      },
      {
        question: "Do cockroaches survive Wichita winters?",
        answer:
          "German cockroaches do, because they live entirely indoors in heated spaces and are not affected by outdoor temperatures. American cockroaches can survive in basements and warm infrastructure year-round. The cold winters do not reduce indoor cockroach pressure.",
      },
      {
        question: "Is year-round pest control necessary in Wichita?",
        answer:
          "For homes with brown recluse pressure, recurring mice activity, or cockroach activity, yes. These are year-round concerns. Outdoor pests like ants and wasps are seasonal. An annual termite inspection is also a sensible addition given the river valley's elevated pressure.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Kansas City", slug: "kansas-city" },
      { name: "Derby", slug: "derby" },
      { name: "Andover", slug: "andover" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Wichita, KS | Brown Recluse, Termites & Mice",
    metaDescription:
      "Wichita pest control for brown recluse spiders, subterranean termites, house mice, cockroaches and ants. Arkansas River valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "overland-park",
    name: "Overland Park",
    state: "Kansas",
    stateSlug: "kansas",
    stateAbbr: "KS",
    tier: "T2",
    population: "~197,000",
    county: "Johnson County",
    climate: "temperate",
    climateDriver:
      "Overland Park sits in the eastern edge of the Great Plains in Johnson County, the most affluent and densely suburbanized county in Kansas. The temperate continental climate brings hot, humid summers and cold winters. Eastern subterranean termites are present throughout Johnson County and the Kansas City metro. Brown recluse spiders are very common across eastern Kansas, and Johnson County falls squarely within their core range. Moisture from the metro's extensive irrigation and mature tree canopy sustains high mosquito pressure through the summer.",
    topPests: [
      "Brown Recluse Spiders",
      "Subterranean Termites",
      "House Mice",
      "Mosquitoes",
      "German Cockroaches",
    ],
    pestProfile: [
      {
        name: "Brown recluse spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round indoors, most active April through October",
        note:
          "Brown recluse spiders are common throughout eastern Kansas and Overland Park falls within the densest part of their range. Johnson County's older homes and the abundant cardboard, clutter, and stored goods in suburban garages and basements provide ideal habitat. Kansas State University Research Extension identifies eastern Kansas as core brown recluse territory. Their bite causes necrotic tissue damage that can be serious, particularly for individuals who do not notice the initial bite.",
      },
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Active year-round, swarm March through May",
        note:
          "Eastern subterranean termites are present throughout Johnson County and the greater Kansas City metro. Kansas State University Research Extension identifies the eastern two-thirds of Kansas as within the significant termite pressure zone. Swarmer activity in March through May is the most visible sign of an active colony. Overland Park's mature suburban neighborhoods, many with decades-old landscaping in ground contact with structures, carry steady termite risk.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Move indoors September through March",
        note:
          "House mice move into Overland Park homes in fall as temperatures drop. Johnson County's suburban density means mice in adjacent properties and green spaces have many entry points to test. Exclusion sealing of foundation gaps and utility penetrations before October is the practical prevention window.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note:
          "Overland Park's extensive parks, retention ponds, and mature residential landscaping provide mosquito breeding habitat through the warm season. Johnson County's suburban density means breeding pressure from neighboring properties contributes significantly to yard-level mosquito populations. Barrier spray programs from May through October are the standard residential control approach.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are concentrated in Overland Park's multi-family housing and commercial kitchen environments. They spread between units through shared walls and plumbing and require gel bait plus insect growth regulator treatment to stop the breeding cycle rather than just reduce adult numbers.",
      },
    ],
    localHook:
      "Johnson County is in the core of the brown recluse spider's range in the United States, and Overland Park's suburban homes, with their garages, finished basements, and storage-heavy households, provide exactly the kind of dark, cluttered harborage that brown recluse populations depend on. Kansas State University Research Extension regularly uses the Kansas City metro as a primary reference area for brown recluse distribution and prevalence.",
    intro:
      "Pest control in Overland Park has two headline concerns: brown recluse spiders and subterranean termites. Both are common, both can cause real harm, and both require professional management. Beyond those two, mice push in from Johnson County's suburban green spaces each fall, mosquitoes are active through the long warm season, and German cockroaches are the steady indoor problem in rentals and commercial kitchens. Overland Park is a well-maintained city, and its mature landscaping and older housing stock create the specific conditions that sustain all of these pest pressures.",
    sections: [
      {
        heading: "Brown recluse spiders in Overland Park: understanding the real risk",
        body: "Eastern Kansas is prime brown recluse territory. Johnson County is in the heart of their US range, and Overland Park's mix of older homes, finished basements, attached garages, and storage-heavy suburban households provides exactly the habitat they prefer: dark, undisturbed, and full of cardboard and clutter to hide in. Brown recluse bites often go unnoticed because the initial sting is not always painful. The wound develops over 24 to 72 hours into a necrotic lesion that can be serious. Regular perimeter treatment, reducing clutter in storage areas, and dewebbing garage corners and basement edges are the practical management steps. Killing every spider in a Johnson County home is not realistic, but keeping populations well below the threshold where encounters become frequent is the working goal.",
      },
      {
        heading: "Termite pressure in Johnson County: the mature neighborhood risk",
        body: "Eastern subterranean termites are active throughout Johnson County and become more likely to cause structural damage the longer they go undetected. Overland Park's older suburban neighborhoods, many with landscaping in direct ground contact with siding or framing, with wood mulch against the foundation, and with older wooden deck and fence posts, provide steady access points. Annual inspections are the standard recommendation. Liquid barrier treatment with Termidor or a bait station program are both effective in Johnson County. The choice depends on the property's construction and the extent of any active infestation.",
      },
    ],
    prevention: [
      "Reduce cardboard clutter in garages, basements, and storage areas to remove brown recluse harborage.",
      "Schedule an annual termite inspection: Johnson County is in the active termite zone.",
      "Seal foundation and utility gaps in September before mice enter for the winter.",
      "Manage mulch and wood debris at the foundation to reduce both termite and spider harborage.",
    ],
    costNote:
      "Overland Park pest control typically involves a year-round general pest program covering brown recluse, ants, and roaches, with a separate annual termite inspection and protection plan. Seasonal mosquito programs run April through October. Fall exclusion visits address mouse entry points.",
    faqs: [
      {
        question: "Are brown recluse spiders really dangerous in Overland Park?",
        answer:
          "Yes. Johnson County is in the core of the brown recluse's US range, and encounters in homes here are more common than in most of the country. Their bite causes necrotic tissue damage that develops over days and can require medical treatment. The practical approach is not to try to achieve zero spiders but to keep populations in the home well below the level where encounters become regular. Quarterly perimeter treatment and reducing clutter in storage areas are the primary tools.",
      },
      {
        question: "Do I need a termite inspection in Overland Park?",
        answer:
          "Annual inspections are the standard recommendation for Johnson County homeowners. Eastern subterranean termites are present throughout the area, and damage is silent until it is significant. Homes with wood mulch against the foundation, wood-to-soil contact at decks or fences, or moisture issues in crawlspaces have higher exposure. Most termite programs include an annual inspection with retreatment covered under warranty.",
      },
      {
        question: "When do mice come into Overland Park homes?",
        answer:
          "Typically September through November as temperatures drop. Johnson County's suburban green spaces, parks, and the Missouri River floodplain all sustain field mice populations that press into residential structures each fall. Exclusion sealing in August or September, ahead of the pressure, is the most cost-effective approach. Snap traps plus exterior bait stations handle any mice that get through.",
      },
      {
        question: "How bad is mosquito season in Overland Park?",
        answer:
          "Johnson County's retention ponds, parks, and irrigated landscaping sustain meaningful mosquito populations from late April through October. This is not as intense as Gulf Coast mosquito pressure, but it is consistent enough that outdoor entertaining becomes significantly more comfortable with a seasonal barrier program. Monthly service from May through September is the standard residential program.",
      },
      {
        question: "Can I treat brown recluse spiders myself in Overland Park?",
        answer:
          "Over-the-counter insecticides kill brown recluse spiders on direct contact but provide limited residual effect in the dark, cluttered areas where they live. Professional treatment uses residual products applied in the specific voids and edges where brown recluse populations concentrate, combined with systematic dewebbing and physical removal of egg sacs. For an established population in a suburban home, professional treatment is consistently more effective than DIY sprays.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Olathe", slug: "olathe" },
      { name: "Lenexa", slug: "lenexa" },
      { name: "Shawnee", slug: "shawnee-ks" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Overland Park, KS | Brown Recluse Spiders & Termites",
    metaDescription:
      "Overland Park pest control for brown recluse spiders, subterranean termites, house mice, mosquitoes and German cockroaches. Johnson County specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "topeka",
    name: "Topeka",
    state: "Kansas",
    stateSlug: "kansas",
    stateAbbr: "KS",
    tier: "T2",
    population: "~127,000",
    county: "Shawnee County",
    climate: "temperate",
    climateDriver:
      "Topeka sits in Shawnee County in the Kansas River (Kaw) valley at the transition between the tallgrass prairie and the eastern Kansas woodland edge. The continental temperate climate swings between genuinely cold winters and hot, humid summers. The Kansas River provides an important moisture corridor through the city, sustaining mosquito breeding habitat and a riverside rodent population. The surrounding Shawnee County farmland contributes to the fall mouse push as harvest removes field cover. Kansas has one of the higher termite pressure ratings in the central United States, and Topeka's position in the Kansas River valley creates the moisture conditions that sustain large subterranean termite colonies.",
    topPests: ["Termites", "House Mice", "Mosquitoes", "German Cockroaches", "Odorous House Ants"],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Year-round activity, swarms in spring",
        note: "Eastern subterranean termites are active across Shawnee County and throughout Topeka. Kansas State University Extension identifies Kansas as a high termite pressure state, and the Kansas River valley's moist soils create especially favorable colony conditions throughout Topeka's residential areas. The USDA's termite probability map places central Kansas, including Shawnee County, in a moderate-to-high-pressure zone.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Push indoors October through March, active year-round once inside",
        note: "House mice are a consistent fall and winter pest in Topeka. Kansas winters drive mice firmly into heated structures, and the Shawnee County agricultural fringe contributes a fall push as harvest removes field cover. Topeka's older residential neighborhoods along the Kansas River bottom and the established neighborhoods west of downtown have the aging foundations and utility penetrations that provide mice with reliable entry.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "May through September, peak June and July",
        note: "The Kansas River and its tributaries running through Topeka create significant mosquito breeding habitat. The standing water in the river bottoms, the city's detention basins, and the low-lying residential areas along the Soldier Creek and Shunganunga Creek corridors sustain summer mosquito populations. Kansas Department of Health monitors West Nile virus statewide, and Shawnee County has had confirmed detections.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are a consistent concern in Topeka's apartment buildings and the commercial food service operations near the downtown and along major commercial corridors. Topeka's status as the state capital brings a density of government and commercial food service that sustains cockroach pressure in the surrounding multi-family housing.",
      },
      {
        name: "Odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Active April through October, push indoors in dry weather and after rain",
        note: "Odorous house ants are the most common ant species in Topeka's residential neighborhoods. They nest in wall voids and under slab edges and forage in kitchens for sweets. They move indoors during dry summer periods and after heavy rain events when outdoor foraging conditions change. Their distinctive rotten-coconut odor when crushed identifies them.",
      },
    ],
    localHook:
      "Topeka's position in the Kansas River valley puts it in one of Kansas's most termite-favorable environments: the river provides year-round soil moisture that keeps subterranean termite colonies viable through the state's variable winters. Kansas State University Extension's pest management data consistently ranks the Kansas River corridor cities among the highest termite pressure areas in the state. An annual termite inspection is the baseline for responsible homeownership in Topeka.",
    intro:
      "Pest control in Topeka deals with the pest pressures of a Kansas River valley capital city. Eastern subterranean termites are a year-round structural threat, sustained by the moist soils of the Kansas River corridor that Kansas State University Extension identifies as high-pressure termite territory. House mice push in from the surrounding Shawnee County agricultural land each fall. Mosquitoes breed along the Kansas River and its creek tributaries through the summer. German cockroaches are a year-round concern in the commercial and multi-family stock near downtown. Odorous house ants are the persistent warm-season kitchen pest.",
    sections: [
      {
        heading: "Termites in the Kansas River valley: Topeka's structural risk",
        body: "Kansas State University Extension's pest management resources identify Kansas as a state with high subterranean termite pressure, particularly in the eastern half of the state where moisture conditions are more favorable. Topeka's position in the Kansas River valley gives it some of the most consistently moist soil conditions in the state, which directly supports larger and more active termite colonies. Eastern subterranean termites swarm in Topeka in April and May on warm, calm days after rain, and homeowners who see swarmers inside or near the home should treat this as an indicator of an active colony nearby rather than a temporary seasonal event. A liquid soil barrier treatment around the foundation perimeter, combined with monitoring stations, is the standard termite protection program for Topeka homes. Annual inspection verifies that the barrier remains intact and that no new activity has penetrated the treated zone.",
      },
      {
        heading: "Mouse control in Topeka's agricultural fringe neighborhoods",
        body: "Topeka's outer residential neighborhoods, particularly those near the Shawnee County agricultural areas to the north, east, and south of the city, face a fall mouse push driven by two simultaneous events: Kansas's cold winter temperatures making heated buildings attractive, and the corn and soybean harvest across surrounding fields stripping the field-edge cover that outdoor mouse populations rely on. Iowa State University Extension has documented this agricultural driver across the Midwest, and the pattern is similar in Shawnee County. Homes at the rural-urban transition are the first affected as mice move from stripped fields toward any available heated structure. The practical response is a professional exclusion inspection completed in September, before harvest begins, to identify and seal every entry point with metal-based materials that hold through Kansas's temperature extremes. Trapping handles the mice that have already entered; exclusion stops the entry.",
      },
    ],
    prevention: [
      "Maintain an active termite protection program with annual inspection, given Topeka's position in the Kansas River valley high-pressure zone.",
      "Schedule mouse exclusion work in September before Kansas corn harvest displaces field mice toward residential areas.",
      "Eliminate standing water along Soldier Creek and Shunganunga Creek corridors and in low yard areas to reduce mosquito breeding.",
      "Apply odorous house ant bait along foraging trails during dry summer periods rather than spraying visible ants.",
    ],
    costNote:
      "Topeka pest services start with a free inspection. Termite programs include annual inspection plus monitoring and liquid treatment, priced after a structure assessment. Mouse programs cover exclusion and trapping. Mosquito barrier programs run May through September. German cockroach programs use gel bait with follow-up visits. Ant programs are quarterly.",
    faqs: [
      {
        question: "How serious is termite risk in Topeka?",
        answer:
          "Very serious. Kansas State University Extension identifies Kansas as a high termite pressure state, and the Kansas River valley, where Topeka sits, provides the consistent soil moisture that supports large, active subterranean termite colonies. An annual termite inspection is the baseline for Topeka homeowners. If your home does not have an active termite protection agreement, getting one is a sound investment in Topeka's termite environment.",
      },
      {
        question: "When do mice push into Topeka homes?",
        answer:
          "October is the main push month, driven by both Kansas winter temperatures making heated structures attractive and the corn and soybean harvest removing field-edge cover from the surrounding Shawnee County agricultural land. Homes near the rural-urban fringe to the north, east, and south of Topeka see the heaviest pressure. A professional exclusion inspection in September identifies and seals entry points before the October push begins.",
      },
      {
        question: "Is West Nile virus a risk in Topeka?",
        answer:
          "Kansas Department of Health monitors West Nile virus statewide each summer, and Shawnee County has had confirmed detections in multiple years. The Kansas River and the Soldier Creek and Shunganunga Creek corridors provide standing water breeding habitat. Most infected people have no symptoms, but the risk is real during peak mosquito season from June through August. Eliminating standing water on the property and maintaining a mosquito barrier treatment during those months are sensible protective steps.",
      },
      {
        question: "Why are odorous house ants so common in Topeka kitchens?",
        answer:
          "Odorous house ants nest in wall voids and under slab edges throughout Topeka's residential neighborhoods and forage for sweets and moisture in kitchens and bathrooms. During Kansas's dry summer periods, indoor moisture sources become more attractive than the outdoor environment. They move indoors in large numbers during dry spells and after heavy rain events. Slow-acting bait placed along foraging trails reduces the colony more effectively than spray, which kills visible foragers without addressing the nest.",
      },
      {
        question: "Are German cockroaches a problem in Topeka single-family homes?",
        answer:
          "German cockroaches are primarily a concern in Topeka's apartment buildings and commercial food service operations near downtown. Single-family homes occasionally encounter them when cockroaches are introduced in boxes or bags from an infested source. Once introduced, they breed rapidly in warm kitchen and bathroom areas. Gel bait treatment in harborage areas is significantly more effective than spray. Single-family home infestations caught early are straightforward to resolve.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Kansas City", slug: "kansas-city" },
      { name: "Overland Park", slug: "overland-park" },
      { name: "Lawrence", slug: "lawrence" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Topeka, KS | Termites, Mice & Mosquitoes",
    metaDescription:
      "Topeka pest control for eastern subterranean termites, house mice, mosquitoes, German cockroaches and odorous house ants. Shawnee County Kansas River valley state capital specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
