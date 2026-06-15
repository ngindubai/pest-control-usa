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
  {
    slug: "huntington-wv",
    name: "Huntington",
    state: "West Virginia",
    stateSlug: "west-virginia",
    stateAbbr: "WV",
    tier: "T3",
    population: "~46,000",
    county: "Cabell County",
    climate: "temperate",
    climateDriver:
      "Huntington sits on the Ohio River in Cabell County at the western edge of the Appalachian Plateau, where the river valley's temperate climate supports active termite colonies and a long mosquito season. The Ohio River and surrounding Appalachian hill woodland create diverse deer tick habitat, with Lyme disease documented as a growing concern in Cabell County. Marshall University's campus and the city's older Ohio River corridor housing stock create favorable conditions for brown marmorated stink bugs each fall and for German cockroaches in older academic and residential buildings.",
    topPests: [
      "Eastern Subterranean Termites",
      "Brown Marmorated Stink Bugs",
      "Deer Ticks",
      "Mosquitoes",
      "American Cockroaches",
    ],
    pestProfile: [
      {
        name: "Eastern Subterranean Termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note:
          "West Virginia University Extension confirms eastern subterranean termite activity throughout the Ohio Valley, including Cabell County. Huntington's temperate Ohio River valley setting and the city's older wood-frame housing stock create favorable conditions for colony establishment. Spring swarms near foundations and windowsills are the typical first visible sign.",
      },
      {
        name: "Brown Marmorated Stink Bugs",
        activeSeason: "Indoor invasions September through March",
        note:
          "Brown marmorated stink bugs spread through the Appalachian states in the 2010s and are now well established in Cabell County. Huntington homeowners experience significant fall invasions each year as bugs move off wooded slopes and through the Ohio River corridor seeking warm winter shelter in buildings.",
      },
      {
        name: "Deer Ticks",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November",
        note:
          "The Ohio River corridor and surrounding Appalachian hill woodland create diverse deer tick habitat in Cabell County. West Virginia Division of Natural Resources tracks Lyme disease as an established concern in WV, and Cabell County is within the established risk zone. The wooded parks and natural areas around Huntington bring residents into tick habitat close to the city.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note:
          "The Ohio River floodplain, the Guyandotte River confluence in Huntington, and the low-lying areas of Cabell County create productive mosquito breeding habitat. The river valley's sheltered position extends the season and concentrates populations in low-lying neighborhoods after rain events.",
      },
      {
        name: "American Cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round in structures, more active in warm months",
        note:
          "American cockroaches are common in the older commercial and residential buildings along Huntington's Ohio River corridor, particularly in buildings with basement spaces, utility rooms, and drainage infrastructure where this large cockroach species thrives.",
      },
    ],
    localHook:
      "Marshall University is the heart of Huntington's identity, and the campus's mix of older academic buildings and student housing is one of the city's most consistent German cockroach and stink bug locations each year. The Ohio River corridor also puts Huntington at the western entry point for the brown marmorated stink bug's annual Appalachian migration into buildings each fall.",
    intro:
      "Pest control in Huntington reflects the Ohio River valley's Appalachian position. Eastern subterranean termites are active throughout Cabell County, confirmed by WVU Extension, and Huntington's older housing stock gives them the wood and moisture conditions they need. Brown marmorated stink bugs have become one of the most common fall pest calls across the city since the species established in the Appalachian region. Deer ticks and Lyme disease are a documented concern in the wooded Cabell County hills. Mosquitoes have a long season along the Ohio and Guyandotte River corridors. American cockroaches are a steady concern in the city's older buildings.",
    sections: [
      {
        heading: "Termites and stink bugs in Huntington's Ohio River corridor housing",
        body: "Huntington's older housing stock, much of it built along the Ohio River corridor in the early to mid-20th century, creates real termite exposure. Eastern subterranean termites are documented throughout the Ohio Valley by WVU Extension, and the combination of the city's temperate climate, older wood-frame construction, and the moisture that comes with proximity to the Ohio River creates favorable conditions for colony establishment. Spring swarms in March through May are the most visible sign. Annual termite inspections are a practical precaution for any Huntington homeowner, particularly those with crawl spaces, wood near soil contact, or older foundations that may have settlement cracks. Brown marmorated stink bugs have moved from a curiosity to a major fall pest across Cabell County over the last decade. They emerge from the wooded Appalachian slopes each fall seeking warm overwintering sites, and the Ohio River valley's corridor position concentrates their movement into the city. The bugs aggregate on warm exterior surfaces and enter through any gap around windows, doors, utilities, and siding. WVU Extension identifies this as one of the primary nuisance pest issues across West Virginia. Sealing building gaps in August and early September reduces entry before the main fall invasion.",
      },
      {
        heading: "Deer ticks and Lyme disease in Cabell County",
        body: "Deer ticks are an established health concern in Cabell County, not a distant risk. The West Virginia Division of Natural Resources documents Lyme disease as a growing concern across the state, and Cabell County falls within the established risk zone. The wooded hillsides and natural areas surrounding Huntington, combined with the Ohio River bottomland habitat, support the deer populations that sustain tick numbers. Huntington's geography means that outdoor activity in parks, wooded suburban lots, and natural areas around the city brings residents into regular contact with tick habitat. The active season runs from early spring through late fall, with the highest risk in spring and early summer when nymphal ticks are active and small enough to be easily missed. Tick checks after outdoor time in wooded or brushy areas are the most important personal protection step. Professional tick barrier spray programs create a treated buffer zone in the yard and garden areas where ticks are most likely to be encountered close to the home.",
      },
    ],
    prevention: [
      "Schedule an annual termite inspection given WVU Extension's documented eastern subterranean termite activity throughout the Ohio Valley and Cabell County.",
      "Seal exterior building gaps around windows, doors, utilities, and siding in August before the fall stink bug invasion from surrounding Appalachian slopes.",
      "Do tick checks after any outdoor time in wooded areas, hillside parks, or natural areas surrounding Huntington from March through November.",
      "Address standing water near the property and drainage areas along the Ohio River corridor from April through October to reduce mosquito breeding habitat.",
    ],
    costNote:
      "Huntington pest control is typically structured with termite protection as a separate contract, stink bug exclusion work done in August and September, and tick programs quoted per seasonal treatment or as ongoing yard barrier spray. General pest plans covering cockroaches, ants, and spiders are priced as recurring quarterly or bi-monthly programs. A free inspection determines what is present before any service is recommended.",
    faqs: [
      {
        question: "Are termites a real risk for Huntington homes?",
        answer:
          "Yes. WVU Extension confirms eastern subterranean termite activity throughout the Ohio Valley, including Cabell County. Huntington's older wood-frame housing stock and the moisture associated with the Ohio River valley setting create favorable conditions. Spring swarms near foundations and windows are the typical first sign. Annual inspections are a practical precaution for any Huntington homeowner, particularly those with crawl spaces or older construction with wood near soil contact.",
      },
      {
        question: "Why are stink bugs so bad in Huntington in the fall?",
        answer:
          "The Appalachian corridor concentrates brown marmorated stink bug movement each fall, and Huntington's position at the western edge of the West Virginia Appalachians puts it in the main path. The bugs move off wooded slopes as temperatures cool, looking for warm overwintering sites in buildings. WVU Extension identifies stink bugs as one of the primary nuisance pest concerns across WV. Sealing exterior gaps in August before the main fall invasion, combined with a perimeter spray, reduces the number that get inside.",
      },
      {
        question: "Is Lyme disease a concern in Cabell County, WV?",
        answer:
          "Yes. The West Virginia Division of Natural Resources documents Lyme disease as a growing concern across the state, and Cabell County is within the established risk zone. Deer ticks, which transmit Lyme disease, are present in the wooded hillsides and river corridor habitats around Huntington. Full body tick checks after outdoor time in wooded or brushy areas are the most effective personal protection. Fever, rash, or flu-like symptoms following a tick bite warrant prompt medical attention.",
      },
      {
        question: "When is mosquito season in Huntington, WV?",
        answer:
          "The practical mosquito season in Huntington runs from April through October, extended by the Ohio River valley's sheltered position and mild climate. The Guyandotte River confluence in the city and the Ohio River floodplain create breeding habitat close to residential areas. Monthly barrier spray from May through September covers the peak season for most properties.",
      },
      {
        question: "Are American cockroaches different from German cockroaches in Huntington?",
        answer:
          "They are different species requiring different approaches. American cockroaches are large (up to 1.5 inches), reddish-brown, and prefer basement spaces, utility rooms, and drainage systems in older buildings. German cockroaches are small, tan, and concentrate in kitchens and bathrooms. American cockroaches are common in Huntington's older commercial and Ohio River corridor residential buildings. German cockroaches are the dominant species in food service settings and student housing. An inspection identifies which species is present, and the treatment approach differs between them.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Charleston", slug: "charleston" },
      { name: "Parkersburg", slug: "parkersburg" },
      { name: "Morgantown", slug: "morgantown" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle:
      "Pest Control in Huntington, WV | Termites, Stink Bugs & Ticks",
    metaDescription:
      "Huntington WV pest control for termites, stink bugs, deer ticks, mosquitoes and cockroaches. Cabell County Marshall University area specialists. Call 1-800-PEST-USA.",
  },
  {
    slug: "parkersburg",
    name: "Parkersburg",
    state: "West Virginia",
    stateSlug: "west-virginia",
    stateAbbr: "WV",
    tier: "T3",
    population: "~30,000",
    county: "Wood County",
    climate: "temperate",
    climateDriver:
      "Parkersburg sits on the Ohio River in Wood County at the confluence of the Little Kanawha River, near the Ohio border. The temperate Ohio Valley climate is warm enough for active termite colonies and a long mosquito season. The wooded Appalachian corridors east of the city provide deer tick habitat, with Wood County in the established Lyme disease risk zone for West Virginia. Brown marmorated stink bugs are extremely common in the fall Parkersburg area, moving through the Ohio River corridor and Appalachian ridges into city buildings.",
    topPests: [
      "Eastern Subterranean Termites",
      "Brown Marmorated Stink Bugs",
      "Deer Ticks",
      "American Cockroaches",
      "Mice",
    ],
    pestProfile: [
      {
        name: "Eastern Subterranean Termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note:
          "Eastern subterranean termites are documented throughout Wood County, consistent with WVU Extension's confirmation of termite pressure across the Ohio Valley and West Virginia. Parkersburg's older industrial and commercial building stock and the moisture from its river location create favorable conditions.",
      },
      {
        name: "Brown Marmorated Stink Bugs",
        activeSeason: "Indoor invasions September through March",
        note:
          "Stink bugs are extremely common in the Parkersburg area each fall. The Ohio River corridor and the Appalachian ridges east of the city channel their movement into structures, and Wood County homeowners experience some of the state's most consistent stink bug invasions in September and October.",
      },
      {
        name: "Deer Ticks",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November",
        note:
          "The wooded Appalachian corridors east of Parkersburg and the Little Kanawha River riparian habitat provide deer tick habitat in Wood County. West Virginia Division of Natural Resources confirms Wood County is in the established Lyme disease zone for WV.",
      },
      {
        name: "American Cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round in structures",
        note:
          "American cockroaches are a consistent concern in Parkersburg's older commercial buildings, industrial sites, and the drainage infrastructure along the Ohio River waterfront. The species favors the basement and utility spaces common to Parkersburg's heritage building stock.",
      },
      {
        name: "Mice",
        serviceSlug: "rodent-control",
        activeSeason: "October through March",
        note:
          "Mice enter Parkersburg structures in fall and winter, with older buildings and those near the Ohio River bottomlands experiencing the most consistent pressure. The city's older commercial district has characteristic building-to-building gaps that mice use to move between structures.",
      },
    ],
    localHook:
      "Parkersburg sits at the confluence of the Ohio and Little Kanawha Rivers, a location that made it a commercial and industrial hub throughout the 19th and early 20th centuries. That history left a substantial stock of older buildings along the waterfront that are prime territory for American cockroaches, mice, and the moisture-driven conditions that termites favor.",
    intro:
      "Pest control in Parkersburg reflects the Ohio River valley's temperate position and the city's industrial heritage. Eastern subterranean termites are active throughout Wood County, and Parkersburg's older building stock gives them the wood, moisture, and ground contact they need. Stink bugs are a major fall nuisance: the Ohio River corridor concentrates their movement into city buildings each September. Deer ticks in the wooded Appalachian areas east of the city keep Lyme disease a relevant concern in Wood County. American cockroaches are a steady presence in the older downtown and waterfront buildings. Mice round out the fall and winter pest picture.",
    sections: [
      {
        heading: "Termites and cockroaches in Parkersburg's older building stock",
        body: "Parkersburg's industrial and commercial history produced a substantial stock of older buildings along the Ohio River waterfront and the Little Kanawha corridor. These buildings share characteristics that create favorable conditions for two different but persistent structural pests. Eastern subterranean termites find wood-to-soil contact, moisture accumulation, and aging wood in older foundations and crawl spaces. WVU Extension confirms termite activity throughout the Ohio Valley and Wood County. Spring swarms near windows and foundation walls in March through May are the typical first sign. Annual termite inspections are a practical precaution for any Parkersburg property with older construction. American cockroaches occupy the same building stock from a different angle. They favor the basement spaces, utility tunnels, drainage infrastructure, and the warm, moist conditions around building mechanical systems in older commercial and industrial buildings. American cockroaches are not the kitchen cockroach of restaurant kitchens: they are the building-infrastructure cockroach that moves through drains and utility chases. They are common in Parkersburg's waterfront commercial district and in older multi-story buildings with basement mechanical rooms.",
      },
      {
        heading: "Stink bugs and deer ticks: Wood County's seasonal pair",
        body: "Two seasonal pests define autumn in Parkersburg for different reasons. Brown marmorated stink bugs arrive in September as temperatures cool, moving through the Ohio River corridor and off the Appalachian ridges east of the city. Wood County experiences some of the most consistent stink bug invasions in West Virginia each fall. The bugs aggregate on warm exterior building surfaces and push through gaps around windows, doors, siding, and utility entries. Sealing those gaps in August and applying a perimeter spray in early September reduces the number that get inside. Once they are in the wall voids, physical removal and gap sealing become the main tools. Deer ticks are an outdoor concern rather than a structural one, but Wood County is in the established Lyme disease risk zone for WV. The Little Kanawha River riparian corridor and the wooded Appalachian ridges accessible from the eastern part of the county bring residents into tick habitat during hiking, outdoor work, and recreational activities. Tick checks after any time in wooded or brushy areas from March through November are the most effective personal protection step.",
      },
    ],
    prevention: [
      "Schedule an annual termite inspection given WVU Extension's documented termite activity in Wood County and the Ohio Valley, particularly for older buildings with crawl spaces.",
      "Seal exterior gaps around windows, doors, siding, and utilities in August before the fall stink bug migration through the Ohio River corridor.",
      "Do tick checks after any outdoor time in the wooded Appalachian areas east of Parkersburg or along the Little Kanawha River corridor from March through November.",
      "Address any moisture accumulation in basement spaces and utility rooms in older downtown buildings to reduce American cockroach harborage conditions.",
    ],
    costNote:
      "Parkersburg pest control typically includes termite protection as a standalone contract for older properties, stink bug exclusion work in August and September, and general pest programs covering cockroaches, mice, and spiders as recurring services. Commercial properties in the older waterfront district often carry quarterly contracts covering both structural pests and the American cockroach pressure common to that building type.",
    faqs: [
      {
        question: "Are termites active in Parkersburg and Wood County?",
        answer:
          "Yes. WVU Extension confirms eastern subterranean termite activity throughout the Ohio Valley, and Wood County is within the established termite range. Parkersburg's older building stock and the moisture from its Ohio River location create favorable conditions. Spring swarms near foundations and windows in March through May are the typical first visible sign. Annual inspections are a practical precaution for properties with crawl spaces or older construction.",
      },
      {
        question: "Why are stink bugs so common in Parkersburg in the fall?",
        answer:
          "Parkersburg's position in the Ohio River valley and its proximity to the Appalachian ridges east of the city put it in the main movement corridor for brown marmorated stink bugs each fall. They move toward the warmest available surfaces as temperatures cool, and the Ohio River valley's west-facing position makes Parkersburg buildings prime aggregation sites. Wood County experiences consistent, heavy stink bug pressure each September and October.",
      },
      {
        question: "Is Lyme disease a concern in Wood County, WV?",
        answer:
          "Wood County is in the established Lyme disease risk zone for West Virginia, confirmed by the WV Division of Natural Resources. Deer ticks are present in the wooded Appalachian corridors accessible from the eastern part of the county and along the Little Kanawha River riparian habitat. Tick checks after outdoor time in these areas are the most important personal protection step. Any rash, fever, or flu-like symptoms following a tick bite warrant prompt medical attention.",
      },
      {
        question: "What is the difference between American cockroaches and German cockroaches in Parkersburg?",
        answer:
          "American cockroaches are large (up to 1.5 inches), reddish-brown, and live in basement spaces, utility rooms, and drains in older buildings. German cockroaches are small, tan, and concentrate in kitchens and bathrooms. In Parkersburg, American cockroaches are the dominant concern in the older downtown and waterfront buildings with basement infrastructure. German cockroaches are more common in food service settings and multi-family residential buildings. An inspection identifies which species is present and guides the appropriate treatment.",
      },
      {
        question: "Do mice come inside in Parkersburg in winter?",
        answer:
          "Yes. Mice enter Parkersburg structures from October through March, with older buildings near the Ohio River bottomlands and the downtown commercial district experiencing the most consistent pressure. Older buildings with gaps between adjacent structures, around utility entries, and in foundation joints give mice multiple access routes. Exclusion sealing in September and October, combined with exterior bait stations, is the most effective approach for properties with repeated mouse problems.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Charleston", slug: "charleston" },
      { name: "Huntington", slug: "huntington-wv" },
      { name: "Wheeling", slug: "wheeling" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle:
      "Pest Control in Parkersburg, WV | Termites, Stink Bugs & Ticks",
    metaDescription:
      "Parkersburg pest control for termites, stink bugs, deer ticks, cockroaches and mice. Wood County Ohio River specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "morgantown",
    name: "Morgantown",
    state: "West Virginia",
    stateSlug: "west-virginia",
    stateAbbr: "WV",
    tier: "T3",
    population: "~32,000",
    county: "Monongalia County",
    climate: "temperate",
    climateDriver:
      "Morgantown sits on the Monongahela River in Monongalia County in northern West Virginia, where the Appalachian Plateau's wooded terrain creates favorable conditions for both deer ticks and the brown marmorated stink bug populations that overwinter in buildings each fall. West Virginia University is the dominant presence in the city, and the large student population in older housing creates German cockroach pressure in academic and residential buildings. WVU Extension confirms termite activity across Monongalia County and northern West Virginia.",
    topPests: [
      "Eastern Subterranean Termites",
      "Deer Ticks",
      "Brown Marmorated Stink Bugs",
      "German Cockroaches",
      "Mice",
    ],
    pestProfile: [
      {
        name: "Eastern Subterranean Termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note:
          "WVU Extension confirms eastern subterranean termite activity in Monongalia County and across northern West Virginia. The Monongahela River valley's temperate climate and the older building stock in Morgantown's established neighborhoods create conditions that support colony establishment.",
      },
      {
        name: "Deer Ticks",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November",
        note:
          "WVU research has documented Lyme disease risk in the Morgantown region, and the wooded hills and natural areas surrounding the city are prime deer tick habitat. The WVU campus borders significant natural areas, and outdoor recreation in the Appalachian hills near Morgantown brings residents and students into direct tick contact.",
      },
      {
        name: "Brown Marmorated Stink Bugs",
        activeSeason: "Indoor invasions September through March",
        note:
          "Brown marmorated stink bugs are heavy in fall in Morgantown, with WVU buildings and the city's student housing stock reporting significant fall invasions. The wooded Appalachian slopes surrounding the city generate stink bug pressure as temperatures cool each September.",
      },
      {
        name: "German Cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are the primary structural pest concern in Morgantown's student housing and older academic buildings. WVU's large student population in older apartments and dormitories creates recurring infestation pressure, with cockroaches spreading between units through shared walls and plumbing.",
      },
      {
        name: "Mice",
        serviceSlug: "rodent-control",
        activeSeason: "October through March",
        note:
          "Mice enter Morgantown structures in fall and winter from the surrounding wooded Appalachian hillsides, with older student housing and commercial buildings near the WVU campus experiencing consistent pressure.",
      },
    ],
    localHook:
      "West Virginia University is one of Morgantown's most important pest control factors. The university's large student population, concentrated in a mix of older apartments, dormitories, and commercial buildings, creates the density and building-stock conditions that sustain German cockroach populations year-round. WVU's own research programs have also documented Lyme disease risk in the region, making tick prevention a genuinely local public health concern.",
    intro:
      "Pest control in Morgantown is shaped by two intersecting forces: the WVU campus environment and the Appalachian hill setting. The university's older housing stock and dense student population drive recurring German cockroach problems in a way unique among WV cities. The wooded hills surrounding the campus are prime deer tick habitat, and WVU research documents Lyme disease risk in the area. Eastern subterranean termites are documented throughout Monongalia County by WVU Extension. Stink bugs are heavy in fall from the surrounding Appalachian slopes. Mice enter from the wooded hillsides each winter. This is a city where the pest picture requires both structural and outdoor awareness.",
    sections: [
      {
        heading: "German cockroaches in WVU student housing: the year-round structural pest",
        body: "German cockroaches are Morgantown's most persistent structural pest, and the reason is straightforward: the city's economy revolves around West Virginia University, which means a large, rotating student population concentrated in a mix of older apartments, dormitories, and off-campus housing. German cockroaches thrive in this environment. They do not come in from outside: they live entirely indoors, breeding continuously year-round, and spread between units through shared walls and plumbing. When a student moves into an apartment that had an established cockroach colony in the previous tenancy, or into a building where adjacent units have untreated infestations, they inherit the problem. The challenge in WVU student housing is that treating a single unit in isolation rarely resolves the problem. Cockroaches from adjacent units recolonize within weeks. Effective treatment requires coordinated gel bait and IGR programs across adjacent units and ideally across the building. Landlords managing multiple units near WVU are best served by building-wide quarterly programs that prevent the buildup that makes individual unit infestations so persistent.",
      },
      {
        heading: "Deer ticks and termites: Morgantown's outdoor and structural health risks",
        body: "The wooded Appalachian hills surrounding Morgantown are prime deer tick habitat, and WVU's own research has documented Lyme disease risk in the region. The WVU campus borders natural and semi-natural areas on its hillside and rail trail corridors, bringing students and residents into regular contact with tick habitat during outdoor recreation, commuting by trail, and activities in campus greenspaces. The active season runs March through November, with the highest risk in spring and early summer when nymphal ticks are small and active. Tick checks after outdoor time in wooded or brushy areas are the most practical personal protection step. Eastern subterranean termites present a different kind of risk: structural rather than health-related. WVU Extension confirms termite activity across Monongalia County, and the combination of the Monongahela River valley's temperate climate and older housing stock in Morgantown's established neighborhoods creates conditions that support colony establishment. Annual inspections are particularly important for older homes with crawl spaces or wood near soil contact.",
      },
    ],
    prevention: [
      "Coordinate German cockroach treatment across all affected units in student housing rather than treating individual apartments in isolation.",
      "Do tick checks after any outdoor time on wooded hillsides, rail trails, or natural areas surrounding the WVU campus from March through November.",
      "Schedule an annual termite inspection given WVU Extension's documented termite activity in Monongalia County, particularly for older housing with crawl spaces.",
      "Seal exterior building gaps around windows, doors, and utilities in August before the fall stink bug invasion from surrounding Appalachian slopes.",
    ],
    costNote:
      "Morgantown pest control for student housing and rental properties is most effectively structured as building-wide quarterly programs covering German cockroaches, mice, and ants. Individual unit treatment programs are less cost-effective given the recolonization pressure from adjacent units. Termite protection, tick barrier spray, and stink bug exclusion are separate services quoted per property.",
    faqs: [
      {
        question: "Why do German cockroaches keep coming back in Morgantown student housing?",
        answer:
          "German cockroaches live entirely indoors and spread between units through shared walls and plumbing. In WVU-area student housing, a treated unit adjacent to an untreated unit will be recolonized within weeks. The only effective long-term approach is coordinated treatment across adjacent units and, where possible, building-wide programs. Gel bait combined with insect growth regulator (IGR) breaks the breeding cycle. Single-unit spray treatments without gel bait and IGR are consistently less effective and short-lived.",
      },
      {
        question: "Are deer ticks a problem near WVU and the Morgantown hills?",
        answer:
          "Yes. WVU research has documented Lyme disease risk in the Morgantown region, and the wooded hills surrounding the campus are prime deer tick habitat. The rail trail system, wooded hillside paths, and natural areas bordering the campus bring students and residents into regular tick contact. Tick checks after outdoor time in these areas are the most important personal protection step. The active season runs March through November.",
      },
      {
        question: "Do termites affect homes in Monongalia County?",
        answer:
          "WVU Extension confirms eastern subterranean termite activity in Monongalia County and across northern West Virginia. The temperate Monongahela River valley climate and the older housing stock in Morgantown's established neighborhoods create conditions that support termite colonies. Annual inspections are a practical precaution for any Morgantown homeowner, particularly those with older homes or properties with crawl spaces and wood near soil contact.",
      },
      {
        question: "Are stink bugs bad in Morgantown in the fall?",
        answer:
          "Stink bugs are a significant fall nuisance across Morgantown, including WVU buildings and the surrounding student housing stock. The wooded Appalachian slopes surrounding the city generate strong fall stink bug movement as temperatures cool each September. Buildings with gaps around windows, siding, utilities, and rooflines are most vulnerable. Sealing those gaps in August and applying a perimeter spray in early September reduces entry before the main fall invasion.",
      },
      {
        question: "When do mice become a problem in Morgantown?",
        answer:
          "Mice typically begin entering Morgantown structures in October as temperatures drop. Older student housing and commercial buildings near the WVU campus experience the most consistent pressure, with gaps in aging construction providing multiple entry routes. Exclusion sealing in September combined with exterior bait stations is the most effective prevention approach. Buildings that experience mice repeatedly year after year typically have persistent entry gaps that trapping alone does not address.",
      },
    ],
    author: "Sandra Whitfield, IPM & Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Charleston", slug: "charleston" },
      { name: "Huntington", slug: "huntington-wv" },
      { name: "Parkersburg", slug: "parkersburg" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle:
      "Pest Control in Morgantown, WV | Termites, Ticks & WVU Campus Pests",
    metaDescription:
      "Morgantown pest control for termites, deer ticks, stink bugs, cockroaches and mice. Monongalia County WVU city specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "wheeling",
    name: "Wheeling",
    state: "West Virginia",
    stateSlug: "west-virginia",
    stateAbbr: "WV",
    tier: "T3",
    population: "~27,000",
    county: "Ohio County",
    climate: "temperate",
    climateDriver:
      "Wheeling sits in the northern panhandle of West Virginia on the Ohio River, in Ohio County at the Pennsylvania-WV border. The temperate Ohio Valley climate supports active termite colonies and a long mosquito season. Brown marmorated stink bug populations are particularly dense in the northern WV panhandle, one of the regions where the species established most strongly after its arrival in the Appalachian states. The wooded areas of Ohio County and the surrounding Pennsylvania-WV border zone provide deer tick habitat. Old industrial and commercial buildings in Wheeling create favorable conditions for mice and cockroaches.",
    topPests: [
      "Eastern Subterranean Termites",
      "Brown Marmorated Stink Bugs",
      "Deer Ticks",
      "Mice",
      "American Cockroaches",
    ],
    pestProfile: [
      {
        name: "Eastern Subterranean Termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note:
          "Eastern subterranean termites are active throughout Ohio County, consistent with WVU Extension's documented termite presence across West Virginia and the Ohio Valley. Wheeling's older building stock and the moisture from its Ohio River position create favorable conditions for colony establishment.",
      },
      {
        name: "Brown Marmorated Stink Bugs",
        activeSeason: "Indoor invasions September through March",
        note:
          "The northern WV panhandle is one of the regions where brown marmorated stink bug populations are most dense in West Virginia. Wheeling homeowners experience some of the state's heaviest fall stink bug invasions, driven by the bug's density in the Pennsylvania-WV border region where it established strongly.",
      },
      {
        name: "Deer Ticks",
        serviceSlug: "flea-tick-treatment",
        activeSeason: "Active March through November",
        note:
          "Deer ticks are present in the wooded areas of Ohio County and in the Pennsylvania-WV border woodlands accessible from Wheeling. West Virginia Division of Natural Resources confirms Lyme disease risk across northern WV. The wooded ravines and hills within Ohio County provide tick habitat close to residential neighborhoods.",
      },
      {
        name: "Mice",
        serviceSlug: "rodent-control",
        activeSeason: "October through March",
        note:
          "Mice are a consistent fall and winter pest in Wheeling's older commercial and industrial building stock along the Ohio River. Older buildings with settling foundations and multiple utility entry points provide mice with abundant access to warm interior spaces.",
      },
      {
        name: "American Cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round in structures",
        note:
          "American cockroaches are a steady concern in Wheeling's older downtown and Ohio River waterfront buildings, favoring the basement spaces, utility tunnels, and drainage infrastructure common to heritage industrial and commercial structures.",
      },
    ],
    localHook:
      "Wheeling is one of the older cities in West Virginia, with a rich industrial and commercial heritage along the Ohio River. That heritage left a concentrated stock of older buildings in the downtown and waterfront district that are prime territory for termites, mice, and cockroaches. The northern panhandle's position also makes it one of the densest stink bug zones in the state each fall.",
    intro:
      "Pest control in Wheeling reflects both the Ohio River valley's temperate pest climate and the city's long industrial history. Eastern subterranean termites are active throughout Ohio County, and Wheeling's older building stock provides the conditions they need. Brown marmorated stink bugs are particularly dense in the northern WV panhandle: Wheeling homeowners tend to experience heavier fall stink bug invasions than those in other parts of the state. Deer ticks are a concern in the wooded areas of Ohio County and the Pennsylvania-WV border zone. Mice and cockroaches are steady concerns in the older downtown buildings. This is a city where both structural and seasonal pest awareness matter.",
    sections: [
      {
        heading: "Stink bugs in the northern WV panhandle: why Wheeling gets it worse",
        body: "Brown marmorated stink bugs are a statewide nuisance in West Virginia, but the northern panhandle where Wheeling sits experiences particularly dense populations. The bug established strongly in the Pennsylvania-WV border region after arriving from Asia in the late 1990s, and the northern panhandle's proximity to the Pennsylvania stink bug population center means Wheeling draws from a larger regional reservoir than cities in central or southern WV. The Ohio River valley's position also channels stink bug movement as bugs seek overwintering sites in September and October. Buildings with gaps around windows, doors, siding, and rooflines in Wheeling are magnets for aggregating bugs. The effective prevention window is August, when building gap sealing and perimeter spray applied ahead of the fall aggregation reduce the number that get inside. Once stink bugs are in wall voids and attics, physical removal and persistent gap sealing become the main approaches. The bugs do not breed indoors and do not feed on household materials, but their odor when disturbed and their tendency to emerge from walls on warm winter days make them a persistent quality-of-life issue through the entire overwintering period.",
      },
      {
        heading: "Termites, mice, and cockroaches in Wheeling's older building stock",
        body: "Wheeling's industrial and commercial heritage produced a significant concentration of older buildings along the Ohio River waterfront and in the downtown district. These buildings share characteristics that create favorable conditions for three different structural pests. Eastern subterranean termites find the wood-to-soil contact, moisture accumulation, and aging structural wood common in Wheeling's older foundations and crawl spaces. WVU Extension confirms termite activity across Ohio County and the northern WV panhandle. Annual termite inspections are a practical precaution for any Wheeling property with older construction or crawl space foundations. Mice use the gaps in aging foundations, settling walls, and the spaces between adjacent buildings to move between structures in Wheeling's dense older commercial and residential districts. The Ohio River bottomlands also provide outdoor harborage before mice transition to indoor shelter in fall. American cockroaches favor the basement utilities, drain lines, and mechanical room spaces in older downtown Wheeling buildings. These are not the kitchen cockroach species: they move through building infrastructure and are common in the heritage commercial and industrial stock along the waterfront.",
      },
    ],
    prevention: [
      "Seal exterior building gaps around windows, doors, siding, and rooflines in August before the fall stink bug aggregation, which is heavier in the northern WV panhandle than in most of the state.",
      "Schedule an annual termite inspection for Ohio County properties, particularly older buildings with crawl spaces or wood near soil contact, given WVU Extension's documented termite activity.",
      "Do tick checks after any outdoor time in the wooded areas of Ohio County or the Pennsylvania-WV border zone from March through November.",
      "Address foundation gaps, drain line entries, and basement utility spaces in older Wheeling buildings to reduce American cockroach and mouse harborage conditions.",
    ],
    costNote:
      "Wheeling pest control typically includes termite protection as a separate standalone contract for older properties, stink bug exclusion work in August and September, and recurring pest programs covering cockroaches, mice, and ants. Commercial properties in the older downtown and waterfront district tend to carry quarterly contracts reflecting the American cockroach and mouse pressure common to that building type.",
    faqs: [
      {
        question: "Are stink bugs really worse in Wheeling than in other parts of WV?",
        answer:
          "The northern panhandle consistently experiences heavier stink bug pressure than central or southern WV, because the bug established strongly in the Pennsylvania-WV border region and the Wheeling area draws from that dense regional population. The Ohio River valley's position channels fall stink bug movement into the city. Sealing building gaps in August, before aggregation begins, is the highest-impact prevention step for Wheeling homeowners.",
      },
      {
        question: "Are termites a risk for properties in Ohio County, WV?",
        answer:
          "Yes. WVU Extension confirms eastern subterranean termite activity throughout West Virginia and the Ohio Valley, including Ohio County. Wheeling's older building stock and the moisture from its Ohio River location create favorable conditions. Spring swarms near foundations and windows in March through May are the typical first sign. Annual inspections are particularly important for older properties with crawl spaces or wood near soil contact.",
      },
      {
        question: "Do deer ticks occur in the Ohio County area?",
        answer:
          "Deer ticks are present in the wooded areas of Ohio County and in the Pennsylvania-WV border woodlands near Wheeling. West Virginia Division of Natural Resources confirms Lyme disease risk across northern WV. The wooded ravines and hillside parks within the county provide tick habitat close to residential neighborhoods. Tick checks after outdoor time in wooded or brushy areas from March through November are the most effective personal protection step.",
      },
      {
        question: "Why are American cockroaches common in older Wheeling buildings?",
        answer:
          "American cockroaches favor basement spaces, utility tunnels, and drain line infrastructure in older commercial and industrial buildings. Wheeling's heritage building stock along the Ohio River waterfront and downtown district has exactly these characteristics: older construction with basement mechanical rooms, aging drain lines, and the accumulated gaps in foundations and utility entries that this cockroach species uses to move through a building. They are not the small German cockroach of kitchens: they are large, reddish-brown, and live in the building's infrastructure rather than its food-preparation areas.",
      },
      {
        question: "When should I schedule pest control in Wheeling for the fall season?",
        answer:
          "August is the critical window for stink bug prevention in Wheeling given the northern panhandle's density of fall invasions. Building gap sealing and perimeter spray applied in August address the aggregation before it reaches peak pressure in September. October is when the mouse push typically begins, so exclusion sealing for rodents is best done in September. Combining the stink bug exclusion work in August with a mouse exclusion inspection in September covers both fall pressures before they peak.",
      },
    ],
    author: "James Cole, Service Operations Manager",
    nearbyCities: [
      { name: "Charleston", slug: "charleston" },
      { name: "Parkersburg", slug: "parkersburg" },
      { name: "Morgantown", slug: "morgantown" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle:
      "Pest Control in Wheeling, WV | Termites, Stink Bugs & Tick Control",
    metaDescription:
      "Wheeling pest control for termites, stink bugs, deer ticks, mice and cockroaches. Ohio County northern WV panhandle specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
