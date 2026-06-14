import type { CityLocation } from "@/types";

// New Mexico. Pest data reflects semi-arid high desert conditions.
// Hantavirus data from NM Dept of Health and CDC; bark scorpion range from NMSU.

export const newMexicoCities: CityLocation[] = [
  {
    slug: "albuquerque",
    name: "Albuquerque",
    state: "New Mexico",
    stateSlug: "new-mexico",
    stateAbbr: "NM",
    tier: "T1",
    population: "~565,000",
    county: "Bernalillo County",
    climate: "desert",
    climateDriver:
      "Albuquerque sits in the Rio Grande valley at 5,300 feet elevation in the Chihuahuan Desert. Dry, hot summers and cold winters mean most pest activity concentrates in spring and fall. The dry conditions drive scorpions, spiders, and rodents into homes seeking moisture and warmth.",
    topPests: [
      "Scorpions",
      "Black Widows",
      "Cockroaches",
      "Mice",
      "Harvester Ants",
    ],
    pestProfile: [
      {
        name: "Bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Active spring through fall, seek shelter indoors in heat",
        note: "Arizona bark scorpions are present in Albuquerque and the Albuquerque metro area. New Mexico State University Extension confirms bark scorpions are found in Bernalillo County and surrounding areas. Their sting is medically significant, particularly for children, the elderly, and those with compromised immune systems.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Black widows are very common in Albuquerque's desert environment. They prefer undisturbed, dry spots: utility boxes, under patio furniture, wood piles, and storage areas. The female's bite is medically significant and requires attention if envenomation is suspected.",
      },
      {
        name: "American and German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, surge in hot dry periods when they seek moisture indoors",
        note: "American cockroaches enter Albuquerque homes seeking moisture during the dry summer months. German cockroaches establish in kitchens and bathrooms in apartments and commercial settings.",
      },
      {
        name: "Deer mice (hantavirus risk)",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge into homes in fall",
        note: "New Mexico has documented hantavirus cases from deer mice. The NM Department of Health confirms the state has had confirmed hantavirus pulmonary syndrome cases. Deer mouse droppings and nesting material in enclosed spaces (sheds, crawl spaces, vehicles) should be handled with precautions, not dry-swept.",
      },
      {
        name: "Harvester and fire ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Red harvester ants are common across the Albuquerque area and bite aggressively when disturbed. Their mounds are a hazard in yards and around foundations. Red imported fire ants are present but less widespread than in the Gulf states.",
      },
    ],
    localHook:
      "Albuquerque is in New Mexico, which has documented hantavirus cases from deer mice. The New Mexico Department of Health treats deer mouse infestations as a public health matter, not just a nuisance. That changes how rodent control is approached here: it is not just about exclusion and bait, it is about safe handling of infested areas.",
    intro:
      "Pest control in Albuquerque involves risks you will not find in most US cities. Bark scorpions are present and medically significant. Black widows are common. And New Mexico has documented hantavirus cases from deer mice, which makes rodent control here a genuine public health concern and not just a nuisance issue. The high desert climate, which drives pests into homes seeking moisture and warmth, and the elevation, which brings cold winters, shape when and how each of these threats becomes active.",
    sections: [
      {
        heading: "Deer mice and hantavirus: what it means for Albuquerque residents",
        body: "Hantavirus pulmonary syndrome is rare but serious, and New Mexico has had confirmed cases. The primary concern is deer mouse droppings and nesting material in enclosed spaces: sheds, garages, crawl spaces, vacation properties that have been closed up, and vehicles that have been sitting unused. Dry-sweeping or disturbing dried droppings in an enclosed space with poor ventilation creates airborne risk. The NM Department of Health recommends wetting down infested areas with disinfectant before cleaning, wearing gloves and a properly fitted respirator, and sealing entry points to prevent re-entry. A pest control professional handles this more safely than most homeowners can.",
      },
      {
        heading: "Scorpions and black widows in a high desert home",
        body: "Arizona bark scorpions and black widows both prefer dry, sheltered spots that are left undisturbed. This means utility boxes, wood piles, storage areas in garages, shoes left in the garage, and the gap between a fence and a wall. The practical defense is reducing these sheltered spots, keeping storage in sealed bins, and treating the perimeter of the home. Scorpions are most active at night and are drawn toward moisture, so evening checks of outdoor areas before sitting or walking barefoot are sensible in warmer months.",
      },
    ],
    prevention: [
      "Shake out shoes and gloves stored in the garage before putting them on to avoid bark scorpion contact.",
      "Seal all gaps around utilities, foundations, and vents to block scorpion and rodent entry.",
      "Wet down any area with deer mouse droppings with disinfectant before cleaning, and wear gloves.",
      "Remove wood piles, debris, and stored items from against the home's exterior to reduce black widow harborage.",
    ],
    costNote:
      "Albuquerque pest control is typically quoted as a general plan covering scorpions, spiders, cockroaches, and ants, with rodent exclusion quoted separately. Hantavirus-safe rodent cleanup in enclosed spaces may require a separate service. Start with a free inspection.",
    faqs: [
      {
        question: "Are bark scorpions really dangerous in Albuquerque?",
        answer:
          "Yes. Arizona bark scorpions are present in Albuquerque and carry venom that is medically significant, particularly for children, the elderly, and immunocompromised individuals. They are not a rare encounter in yards and homes adjacent to desert. Treating the perimeter and reducing harborage sites significantly lowers the risk of contact.",
      },
      {
        question: "How real is the hantavirus risk from mice in New Mexico?",
        answer:
          "New Mexico has had confirmed hantavirus pulmonary syndrome cases. The New Mexico Department of Health treats deer mouse infestations as a public health concern. The main risk is disturbing dried droppings or nesting material in enclosed spaces with poor ventilation. The safe approach is to wet the area with disinfectant before cleaning and to avoid dry-sweeping.",
      },
      {
        question: "Where do black widows hide in Albuquerque homes?",
        answer:
          "Black widows prefer dry, sheltered, undisturbed spots: utility boxes and meter housings, under patio furniture, in wood piles, behind stored items in garages, and in crawl spaces. They are not aggressive but will bite if pressed against the skin. Checking these spots regularly and wearing gloves when reaching into dark, enclosed spaces is sensible practice.",
      },
      {
        question: "Do cockroaches come inside in Albuquerque because of the dry climate?",
        answer:
          "Yes. American cockroaches enter homes seeking moisture during the dry summer months. They prefer the same plumbing-adjacent locations they favor everywhere but are driven to seek those out more actively when outdoor conditions are very dry. German cockroaches establish indoors in kitchens and bathrooms and are not affected by outdoor conditions.",
      },
      {
        question: "When is pest pressure worst in Albuquerque?",
        answer:
          "Spring and fall are the most active periods for scorpions and spiders. The hot, dry midsummer drives American cockroaches and rodents into homes seeking moisture. Fall brings the mouse and rat surge as temperatures drop. Winter at 5,300 feet elevation does meaningfully reduce outdoor pest activity.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Rio Rancho", slug: "rio-rancho" },
      { name: "Santa Fe", slug: "santa-fe" },
      { name: "Las Cruces", slug: "las-cruces" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle:
      "Pest Control in Albuquerque, NM | Scorpions, Black Widows & Hantavirus",
    metaDescription:
      "Albuquerque pest control for bark scorpions, black widows, deer mice (hantavirus), cockroaches and harvester ants. Desert specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "las-cruces",
    name: "Las Cruces",
    state: "New Mexico",
    stateSlug: "new-mexico",
    stateAbbr: "NM",
    tier: "T2",
    population: "~113,000",
    county: "Dona Ana County",
    climate: "desert",
    climateDriver:
      "Las Cruces sits in the northern Chihuahuan Desert in the Rio Grande valley at approximately 3,900 feet elevation. Hot, dry summers and mild winters create year-round conditions for desert pest species. New Mexico State University is located here, and the city's position in the Rio Grande corridor adds irrigation infrastructure that sustains pest habitat even in a desert climate.",
    topPests: [
      "Arizona Bark Scorpions",
      "Black Widow Spiders",
      "American Cockroaches",
      "Harvester Ants",
      "House Mice",
    ],
    pestProfile: [
      {
        name: "Arizona bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Active spring through fall, seek shelter indoors in extreme heat",
        note: "New Mexico State University Extension confirms bark scorpions are a significant pest concern in Dona Ana County. Las Cruces sits in the northern Chihuahuan Desert where Arizona bark scorpions (Centruroides sculpturatus) are present. Their sting is the only scorpion sting in the United States considered medically significant, particularly for children and older adults.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "Black widows are common throughout southern New Mexico and Las Cruces. They prefer dry, undisturbed spots: block wall cavities, around pool and irrigation equipment, utility boxes, under outdoor storage, and in woodpiles. The female's bite is medically significant.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round, push indoors in dry summer heat",
        note: "American cockroaches shelter in Las Cruces's extensive irrigation infrastructure and sewer connections year-round and enter homes through plumbing penetrations and foundation gaps when outdoor conditions are extremely dry and hot. The Rio Grande valley's agricultural irrigation creates widespread cockroach habitat outdoors.",
      },
      {
        name: "Harvester ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Red harvester ants build large colonies in the Chihuahuan Desert soils around Las Cruces. Their mounds, marked by cleared circular areas of bare ground, are common in yards and along foundations. They are aggressive biters when disturbed and their mound clearing kills surrounding vegetation.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge into structures in fall",
        note: "House mice and deer mice are present in the Las Cruces area. New Mexico has documented hantavirus cases from deer mice, which require careful handling of any rodent activity in enclosed spaces. House mice push into heated structures in fall as temperatures drop.",
      },
    ],
    localHook:
      "Las Cruces is in Dona Ana County, and New Mexico State University Extension is unambiguous: bark scorpions are a significant pest concern here. The northern Chihuahuan Desert setting means the scorpion, black widow, and cockroach pressure that defines southern New Mexico's pest profile is present throughout the city. The Rio Grande valley's irrigation infrastructure adds year-round cockroach habitat that a purely desert city would not have. And New Mexico's documented hantavirus history from deer mice means rodent activity in enclosed spaces warrants proper precautions.",
    intro:
      "Pest control in Las Cruces addresses the full southern New Mexico desert pest suite in a city that straddles the Rio Grande valley and the Chihuahuan Desert. New Mexico State University Extension confirms bark scorpions are a significant pest concern in Dona Ana County: the Arizona bark scorpion, whose sting is the only scorpion sting in the United States with medical significance, is present throughout the Las Cruces area. Black widow spiders are common in block walls, around irrigation equipment, and in undisturbed outdoor storage. American cockroaches live in the city's extensive irrigation and sewer infrastructure and push into homes in extreme summer heat. Red harvester ants build large colonies in the desert soils, and their mounds are a hazard in yards and around foundations. House mice and deer mice are present, and New Mexico's documented hantavirus history means rodent activity in enclosed spaces requires more than a standard cleanup.",
    sections: [
      {
        heading: "Bark scorpions in Dona Ana County: what NMSU Extension says and what to do",
        body: "New Mexico State University Extension's pest management resources are direct about bark scorpions in Dona Ana County: they are a significant concern, and Las Cruces homeowners need to take them seriously. The Arizona bark scorpion, Centruroides sculpturatus, is the only scorpion in the United States whose sting is considered medically significant. Most stings cause severe localized pain and temporary neurological symptoms, but children, elderly individuals, and immunocompromised people face a risk of more serious reactions that may require medical attention. In Las Cruces, bark scorpions are most active from April through October. They are nocturnal climbers: they can scale block walls, travel across ceilings, and squeeze through gaps narrower than a credit card. The practical defense combines physical exclusion with residual perimeter treatment. Sealing weep holes in block walls, caulking gaps around utility penetrations, and installing door sweeps on exterior doors and the garage reduces entry significantly. Monthly perimeter treatment on the exterior foundation and block walls, timed for the spring through fall active season, creates a chemical barrier that scorpions contact when moving along the perimeter. UV flashlight inspections in the yard at night reveal scorpion activity levels because they fluoresce under ultraviolet light.",
      },
      {
        heading: "Irrigation infrastructure and cockroaches: Las Cruces's year-round pest pipeline",
        body: "The Rio Grande valley's agricultural heritage has left Las Cruces with extensive irrigation infrastructure, and that network of pipes, channels, and moist soil creates year-round habitat for American cockroaches that a purely desert city would not have. American cockroaches in Las Cruces live primarily in irrigation lines, sewer connections, and the moist soil around landscaping. They are outdoor insects that enter structures seeking cooler, moister conditions when outdoor temperatures become extreme in July and August. Entry points are typically plumbing penetrations through the foundation, floor drain gaps, and utility conduit openings. A perimeter treatment addressing the foundation and entry points, combined with sealing those transition gaps, is more effective than indoor treatment alone because it addresses the cockroaches where they live rather than where they occasionally visit. Black widow spiders share the irrigation infrastructure habitat: they are routinely found around irrigation valve boxes, hose bibs, and the sheltered gaps near outdoor water connections. Both pests warrant attention when maintaining outdoor irrigation systems, and gloves are appropriate protection when opening valve boxes or reaching into enclosed spaces around the yard.",
      },
    ],
    prevention: [
      "Seal weep holes with fine steel mesh and caulk gaps around utility penetrations to reduce bark scorpion entry, and apply a monthly perimeter treatment from April through October.",
      "Wear gloves when opening irrigation valve boxes or working around outdoor irrigation equipment, where both black widows and cockroaches commonly shelter.",
      "Store items in sealed bins in garages and storage areas to reduce black widow harborage and eliminate the undisturbed corners they prefer.",
      "If you find evidence of rodents in enclosed spaces like outbuildings or crawl spaces, wet the area with disinfectant before cleaning rather than dry-sweeping, given New Mexico's hantavirus history.",
    ],
    costNote:
      "Las Cruces pest control is most cost-effective as a monthly or bimonthly perimeter program covering scorpions, spiders, cockroaches, and ants. Rodent exclusion and any hantavirus-safe cleanup are quoted separately after an assessment. A free inspection identifies current scorpion pressure and entry points on the property.",
    faqs: [
      {
        question: "Are bark scorpions really dangerous in Las Cruces?",
        answer:
          "Yes. New Mexico State University Extension confirms bark scorpions are a significant pest concern in Dona Ana County, where Las Cruces sits. The Arizona bark scorpion carries the only scorpion venom in the United States considered medically significant. Most stings produce severe pain and temporary symptoms, but children, elderly individuals, and immunocompromised people face a higher risk of serious reactions. Monthly perimeter treatment and physical exclusion, sealing weep holes and door gaps, are the most effective management approach.",
      },
      {
        question: "Why do I find cockroaches in my Las Cruces home even though I keep it clean?",
        answer:
          "American cockroaches in Las Cruces are outdoor insects, not a sign of cleanliness issues. They live in the city's irrigation infrastructure, sewer systems, and moist soil and enter homes through plumbing penetrations and foundation gaps when outdoor temperatures become extreme in summer. A clean home does not prevent them from entering through utility gaps in the foundation. Sealing those transition points and maintaining a perimeter treatment at the foundation addresses the problem at its source.",
      },
      {
        question: "Where do black widows hide around Las Cruces properties?",
        answer:
          "In Las Cruces, black widows are most commonly found in the cavities of block walls, around irrigation valve boxes and hose bibs, in utility meter enclosures, under outdoor furniture, in undisturbed garage storage, and in woodpiles. They favor dry, sheltered, undisturbed spots with good harborage. Wearing gloves when reaching into these spaces and keeping outdoor storage areas organized and regularly disturbed reduces encounter risk. The female's bite is medically significant.",
      },
      {
        question: "Is hantavirus a concern with mice in Las Cruces?",
        answer:
          "New Mexico has documented hantavirus pulmonary syndrome cases, primarily linked to deer mice. Las Cruces and Dona Ana County are in an area where deer mice are present alongside house mice. The main risk is disturbing dried rodent droppings or nesting material in enclosed spaces with poor ventilation. Wet the area with disinfectant before cleaning, wear gloves, and avoid dry-sweeping. Professional rodent identification and safe cleanup in enclosed spaces is the recommended approach when activity is found in outbuildings or crawl spaces.",
      },
      {
        question: "Do harvester ants damage my yard in Las Cruces?",
        answer:
          "Yes. Red harvester ants build large colonies in Dona Ana County's desert soils and create bare circular clearing areas around their mounds as they remove vegetation. In yards and gardens this visible clearing can damage lawns and plant beds. Their bite is painful and they react defensively when the mound is disturbed, which makes them a hazard for children and pets. Professional treatment of harvester ant mounds with an appropriate insecticide is more effective and safer than most DIY approaches given their aggressive defensive behavior.",
      },
    ],
    author: "Sandra Whitfield, IPM and Pesticide Safety Specialist",
    nearbyCities: [
      { name: "Albuquerque", slug: "albuquerque" },
      { name: "El Paso", slug: "el-paso" },
      { name: "Tucson", slug: "tucson" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Las Cruces, NM | Bark Scorpions, Black Widows & Cockroaches",
    metaDescription:
      "Las Cruces pest control for Arizona bark scorpions, black widow spiders, American cockroaches, harvester ants and mice. Dona Ana County Chihuahuan Desert Rio Grande valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "rio-rancho",
    name: "Rio Rancho",
    state: "New Mexico",
    stateSlug: "new-mexico",
    stateAbbr: "NM",
    tier: "T2",
    population: "~107,000",
    county: "Sandoval County",
    climate: "semi-arid",
    climateDriver:
      "Rio Rancho is a planned community on the high desert West Mesa north of Albuquerque, at approximately 5,300 feet elevation in Sandoval County. The semi-arid high desert climate brings cold winters, warm summers, and low humidity. New development has rapidly displaced wildlife from the West Mesa's desert scrub habitat, pushing black widows, mice, and scorpions toward the expanding residential edge.",
    topPests: [
      "Black Widow Spiders",
      "House Mice",
      "American Cockroaches",
      "Harvester Ants",
      "Bark Scorpions",
    ],
    pestProfile: [
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active May through September",
        note: "NM State Extension confirms black widows are common across Bernalillo and Sandoval Counties. In Rio Rancho they are found in garages, block walls, outdoor storage, under furniture, and around the desert scrub edges of newer developments. The female's bite is medically significant.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge into heated structures in fall",
        note: "Rio Rancho's cold high-desert winters at 5,300 feet drive house mice firmly into heated buildings each fall. Deer mice are also present on the West Mesa given the adjacent desert scrub habitat, and New Mexico has documented hantavirus cases from deer mice.",
      },
      {
        name: "American cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round in irrigation systems, push indoors in summer",
        note: "American cockroaches shelter in Rio Rancho's irrigation infrastructure and sewer connections year-round and enter homes through plumbing penetrations during the dry, hot summer months. Newer construction with unfinished utility penetrations has higher entry risk.",
      },
      {
        name: "Harvester ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Red harvester ants build large mounds in Rio Rancho's sandy West Mesa soil. Their mounds are common in yards, along foundations, and in undeveloped lots adjacent to residential areas. They are aggressive when disturbed and their sting is painful.",
      },
      {
        name: "Bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Active spring through fall",
        note: "Bark scorpions are present in the Rio Rancho area and throughout Sandoval and Bernalillo Counties per NM State Extension. They are less densely distributed than at lower Sonoran Desert elevations, but are found in newer subdivisions backing onto the West Mesa desert scrub where displacement from development brings them into contact with homes.",
      },
    ],
    localHook:
      "Rio Rancho is one of the fastest-growing cities in New Mexico, and that growth has consequences. Rapid development on the West Mesa has displaced black widows, bark scorpions, and harvester ants from desert scrub habitat directly into new subdivisions. NM State Extension confirms black widows are common across Sandoval and Bernalillo Counties. The cold winters at 5,300 feet push house mice into heated buildings each fall, and deer mice on the West Mesa carry hantavirus risk that is specific to New Mexico. The combination of desert pest displacement and cold-driven rodent pressure defines pest management in this still-expanding city.",
    intro:
      "Pest control in Rio Rancho reflects the specific challenges of rapid growth on New Mexico's high desert West Mesa. NM State Extension confirms black widow spiders are common across Sandoval County, and the West Mesa's desert scrub habitat, which continues to border newer subdivisions as the city expands, provides ongoing black widow harborage near homes. Bark scorpions are present, though less densely distributed than in the lower Sonoran Desert. Harvester ants build large mounds in the sandy West Mesa soil and are common in yards of established and newer neighborhoods alike. House mice push into Rio Rancho's heated structures each fall given the cold winters at 5,300 feet, and deer mice on the adjacent desert scrub carry hantavirus risk that New Mexico's documented case history makes a genuine public health consideration. American cockroaches shelter in irrigation infrastructure year-round and enter homes through plumbing gaps during the dry, hot summer months.",
    sections: [
      {
        heading: "Desert displacement: why new construction in Rio Rancho brings pest pressure",
        body: "Rio Rancho's rapid growth on the West Mesa is not just an infrastructure story. Every new subdivision carved out of high desert scrub displaces black widows, bark scorpions, and harvester ants from their established habitat and pushes them toward the developing edge. NM State Extension confirms this pattern: black widows are common across Sandoval and Bernalillo Counties, and Rio Rancho's expanding western edge consistently borders undisturbed desert scrub that sustains resident populations. New construction itself creates the conditions these pests favor: block walls with hollow cores provide black widow harborage, concrete foundations and sandy fill soils suit harvester ant colony establishment, and the construction debris and loose stone around new homes gives scorpions immediate shelter. The practical implication for Rio Rancho homeowners is that pest pressure tends to be higher in newer neighborhoods near the development edge than in the city's older, more established interior areas. Monthly perimeter treatment during the spring through fall active season is the standard management approach for properties in these higher-pressure areas.",
      },
      {
        heading: "Rodents on the high desert: mice, deer mice, and winter entry in Rio Rancho",
        body: "Rio Rancho's semi-arid elevation brings genuinely cold winters, and that cold is the primary driver of the fall rodent push. House mice move into heated buildings each fall as outdoor temperatures drop in October and November. At 5,300 feet, the seasonal temperature change is more dramatic than in lower Albuquerque, and the timing of mouse entry is predictable enough that exclusion work done in September and October is a genuine preventive investment. The West Mesa's desert scrub habitat adds a dimension that purely urban settings lack: deer mice are present in the adjacent undeveloped land. New Mexico has documented hantavirus pulmonary syndrome cases, and the NM Department of Health treats deer mouse infestations as a public health concern, not just a nuisance. Any rodent activity in enclosed spaces, garages, storage sheds, crawl spaces, and outbuildings near the desert edge warrants professional identification before cleanup begins. If deer mice are involved, proper precautions, wetting dried droppings with disinfectant before cleaning and wearing appropriate respiratory protection, apply.",
      },
    ],
    prevention: [
      "Seal foundation gaps, weep holes, and utility penetrations in September before the cold-weather mouse push into heated structures begins.",
      "Apply monthly perimeter treatment from April through October for properties near the West Mesa desert scrub edge, where black widow and scorpion pressure is highest.",
      "If you find evidence of rodents in a closed outbuilding or storage space, wet the area with disinfectant before cleaning and wear gloves, given New Mexico's hantavirus case history.",
      "Check around irrigation valve boxes and under outdoor storage for black widow webs before reaching in, particularly during warm months.",
    ],
    costNote:
      "Rio Rancho pest control is typically a year-round program with seasonal emphasis: perimeter treatment from April through October for scorpions, black widows, and cockroaches; rodent exclusion in September and October before the fall push. Properties near the West Mesa development edge benefit from monthly treatment through the active season. A free assessment identifies current pressure levels on your property.",
    faqs: [
      {
        question: "Why are there so many black widows in my Rio Rancho neighborhood?",
        answer:
          "NM State Extension confirms black widows are common across Sandoval and Bernalillo Counties. In Rio Rancho, newer subdivisions near the West Mesa desert scrub edge have higher black widow pressure because construction displaces resident populations from their desert habitat directly into the new subdivision's block walls, debris, and outdoor structures. Monthly perimeter treatment from April through October and keeping outdoor storage organized and regularly disturbed are the most effective management tools.",
      },
      {
        question: "Are bark scorpions dangerous in Rio Rancho?",
        answer:
          "Bark scorpions are present in Rio Rancho and carry the only scorpion venom in the United States that is considered medically significant. They are less dense at Rio Rancho's 5,300 foot elevation than in the lower Sonoran Desert, but NM State Extension confirms they are found across Bernalillo and Sandoval Counties. Properties at the development edge nearest the West Mesa desert scrub have higher scorpion pressure. Monthly perimeter treatment and sealing weep holes and door gaps are the standard management approach.",
      },
      {
        question: "Is the hantavirus deer mouse risk real in Rio Rancho?",
        answer:
          "New Mexico has documented hantavirus pulmonary syndrome cases, and the NM Department of Health treats deer mouse infestations in enclosed spaces as a public health concern. Rio Rancho's West Mesa setting with adjacent desert scrub means deer mice may be present, particularly in newer developments near undeveloped land. If you find rodent activity in a shed, crawl space, or garage near the desert edge, have the rodent species professionally identified before cleanup. If deer mice are involved, wet the area with disinfectant before cleaning and wear appropriate protection.",
      },
      {
        question: "Do American cockroaches come from the sewer in Rio Rancho?",
        answer:
          "Yes. American cockroaches in Rio Rancho live primarily in the irrigation infrastructure and sewer system and enter homes through plumbing penetrations, floor drain gaps, and foundation cracks during the dry, hot summer months. They are outdoor insects seeking cooler, moister conditions. Sealing these entry points and applying a perimeter treatment at the foundation is more effective than indoor treatment alone, because it addresses cockroaches where they live rather than where they occasionally appear.",
      },
      {
        question: "When should I start pest control service in Rio Rancho?",
        answer:
          "Spring is the right time to start a perimeter program in Rio Rancho. April is when scorpions, black widows, and harvester ants begin their active season at this elevation. Rodent exclusion work is most valuable in September and October before the fall push. For properties near the West Mesa desert edge, a monthly program from April through October provides the most consistent protection through the full active season for all desert pest species.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Albuquerque", slug: "albuquerque" },
      { name: "Santa Fe", slug: "santa-fe" },
      { name: "Las Cruces", slug: "las-cruces" },
    ],
    contentTemplate: "D",
    contentSoul: "qa",
    metaTitle: "Pest Control in Rio Rancho, NM | Black Widows, Mice & Bark Scorpions",
    metaDescription:
      "Rio Rancho pest control for black widow spiders, house mice, American cockroaches, harvester ants and bark scorpions. Sandoval County West Mesa high desert Albuquerque metro specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "roswell",
    name: "Roswell",
    state: "New Mexico",
    stateSlug: "new-mexico",
    stateAbbr: "NM",
    tier: "T3",
    population: "~47,000",
    county: "Chaves County",
    climate: "semi-arid",
    climateDriver:
      "Roswell is in the Pecos River valley in southeastern New Mexico in Chaves County. The semi-arid desert climate delivers hot summers, mild winters, and low humidity. New Mexico State University Extension confirms scorpions and black widow spiders are present in southeastern New Mexico, with the warm desert climate sustaining activity in protected areas through most of the year. The Pecos River creates an oasis-like corridor through the surrounding desert.",
    topPests: [
      "Scorpions",
      "Black Widow Spiders",
      "German Cockroaches",
      "House Mice",
      "Ants",
    ],
    pestProfile: [
      {
        name: "Striped bark scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Active spring through fall, shelter indoors in extreme heat",
        note: "New Mexico State University Extension confirms scorpions, including the striped bark scorpion (Centruroides vittatus), are present in southeastern New Mexico. The warm semi-arid climate of Chaves County sustains scorpion activity from spring through fall. Their sting is painful and warrants medical attention if symptoms progress.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "NMSU Extension confirms black widow spiders are established in southeastern New Mexico. In Roswell they are found in rock, debris, undisturbed storage, garages, and irrigation infrastructure. The semi-arid Pecos Valley climate suits them well. The female's bite is medically significant.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are the dominant indoor cockroach in Roswell's apartment buildings and commercial settings. They breed entirely indoors and require gel bait with insect growth regulator for effective treatment.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge into structures in fall",
        note: "House mice move into heated structures in Roswell as temperatures drop each fall. Deer mice are also present in the surrounding desert and ranching landscape, and New Mexico has documented hantavirus cases from deer mice, which warrants precautions in any rodent cleanup in enclosed spaces.",
      },
      {
        name: "Ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Harvester ants, pavement ants, and fire ants are all present in Chaves County depending on location and season. Harvester ants are common in the desert scrub areas and build large mounds in undisturbed soils. Fire ants are present in some areas. Both bite aggressively when disturbed.",
      },
    ],
    localHook:
      "Roswell is famous for very different reasons, but the pest picture in Chaves County is serious business. New Mexico State University Extension confirms scorpions and black widow spiders are established in southeastern New Mexico, and the Pecos River valley's semi-arid climate keeps these species active through most of the warm season. The surrounding ranching and agricultural landscape also means deer mouse populations are substantial, and New Mexico's documented hantavirus case history makes rodent management here more consequential than in many cities.",
    intro:
      "Pest control in Roswell is shaped by its position in the semi-arid Pecos River valley in southeastern New Mexico. New Mexico State University Extension confirms scorpions, including the striped bark scorpion, and black widow spiders are present in Chaves County. The warm desert climate keeps these species active from spring through fall and in protected areas year-round. German cockroaches are the dominant indoor cockroach in residential and commercial settings. House mice move indoors each fall, and deer mice in the surrounding desert and ranching landscape carry hantavirus risk that New Mexico's documented case history makes a genuine public health consideration. Harvester ants and fire ants are active in the surrounding desert scrub and developed areas during the warm months.",
    sections: [
      {
        heading: "Scorpions and black widow spiders in southeastern New Mexico: the Roswell homeowner's real-world risk",
        body: "New Mexico State University Extension confirms scorpions and black widow spiders are present in southeastern New Mexico and Chaves County. Roswell's semi-arid desert climate, with its rock outcroppings, adobe and stucco construction, and the debris and material typical of a city with significant ranching and agricultural infrastructure, provides the undisturbed, dry, sheltered spaces that both species favor. The striped bark scorpion, Centruroides vittatus, is the scorpion species most commonly encountered in southeastern New Mexico. It is not the Arizona bark scorpion, which is the most medically dangerous scorpion in the United States, but its sting is still painful and can cause symptoms beyond the sting site in sensitive individuals. Children and adults with allergies or immune sensitivities warrant medical attention after any sting. Scorpions are nocturnal and move toward moisture, which is why bathrooms, kitchens, and laundry areas are common indoor encounter sites in the hot, dry summer months. The western black widow spider is established throughout southeastern New Mexico and is a concurrent concern in the same undisturbed, dry outdoor spaces that scorpions favor: garages, wood piles, block wall cavities, utility enclosures, and the areas around irrigation valve boxes. The practical management approach for both pests combines monthly perimeter treatment during the spring through fall active season with physical exclusion: sealing weep holes and gaps around doors and windows removes the entry pathways that both species use to enter homes.",
      },
      {
        heading: "German cockroaches, mice, and the year-round pest calendar in the Pecos Valley",
        body: "Roswell's year-round pest calendar has two distinct seasons. The warm season, roughly April through October, is when scorpions, black widows, harvester ants, and fire ants are most active. The cool season, October through March, sees these outdoor species become less active while the indoor pests, house mice and German cockroaches, maintain or increase their pressure. House mice move into heated structures in fall as the Pecos Valley temperatures drop from the hot summer highs toward freezing nighttime temperatures in November. The surrounding ranching and agricultural landscape sustains substantial outdoor rodent populations. Deer mice are present in the desert scrub and agricultural edges, and New Mexico has documented hantavirus pulmonary syndrome cases from deer mice. If rodent activity is found in an enclosed space, particularly an outbuilding, shed, or vehicle that has been sitting unused, professional identification of the species before cleanup is appropriate. Deer mouse cleanup requires wetting the area with disinfectant before disturbing any droppings or nesting material, wearing appropriate respiratory protection, and ventilating the space thoroughly. German cockroaches are a steady year-round problem in Roswell's apartment buildings and commercial settings. They breed entirely indoors and are unaffected by the outdoor season. Targeted gel bait treatment at the sites where cockroaches aggregate, particularly the motor voids of refrigerators and the gap behind stove burners, is the effective approach.",
      },
    ],
    prevention: [
      "Apply monthly perimeter treatment from April through October for scorpions and black widow spiders, and seal weep holes and door gaps to reduce entry.",
      "Wear gloves when reaching into garage storage, irrigation valve boxes, and wood piles where both scorpions and black widows commonly shelter.",
      "If you find rodent activity in a shed or outbuilding near desert or agricultural edges, wet the area with disinfectant before cleaning and do not dry-sweep, given New Mexico's hantavirus case history.",
      "Remove debris, loose rock, and undisturbed materials from around the foundation perimeter to reduce scorpion and black widow harborage immediately adjacent to the home.",
    ],
    costNote:
      "Roswell pest control is most cost-effective as a monthly perimeter program from April through October covering scorpions, black widows, and general pests, with rodent exclusion in fall and a year-round German cockroach program for residential and commercial properties. A free inspection identifies the current pressure levels and entry points before a plan is proposed.",
    faqs: [
      {
        question: "Are scorpions really dangerous in Roswell, NM?",
        answer:
          "New Mexico State University Extension confirms scorpions, including the striped bark scorpion, are present in Chaves County. The striped bark scorpion is not the Arizona bark scorpion, which is the most medically dangerous scorpion in the United States, but its sting is painful and can produce localized symptoms and systemic reactions in sensitive individuals, children, and elderly people. Medical attention is appropriate if symptoms extend beyond the sting site. Monthly perimeter treatment from April through October and sealing entry points substantially reduces encounter risk inside the home.",
      },
      {
        question: "How do I find and remove scorpions from my Roswell home?",
        answer:
          "A UV (blacklight) flashlight is your best tool for night-time scorpion detection: scorpions fluoresce under ultraviolet light and are visible in the dark even when they are otherwise hard to spot. Inspect your yard, perimeter walls, and the ground near the foundation after dark. Indoors, check bathrooms, the laundry area, and anywhere moisture is present. The most effective removal combines sealing weep holes and gaps around doors and windows with monthly perimeter treatment during the active season. A professional can identify the entry points and set up a treatment program that keeps scorpion populations around the perimeter at manageable levels.",
      },
      {
        question: "Are black widow spiders common in Chaves County?",
        answer:
          "Yes. NMSU Extension confirms black widow spiders are established in southeastern New Mexico. In Roswell they are found in the dry, undisturbed spaces that are common in a city with significant agricultural and ranching infrastructure: garages, outbuildings, wood piles, irrigation valve boxes, block wall cavities, and utility enclosures. The female's venom is medically significant. Annual professional treatment of these harborage areas and wearing gloves when reaching into them substantially reduces encounter risk.",
      },
      {
        question: "When do mice move inside in the Pecos Valley?",
        answer:
          "October and November are the key months as Chaves County nighttime temperatures drop toward freezing. The surrounding ranching and agricultural landscape sustains large outdoor rodent populations that press toward heated structures in fall. Deer mice in the desert scrub edges carry hantavirus risk documented in New Mexico, which makes professional species identification before any rodent cleanup in an enclosed space, particularly an outbuilding or vehicle that has sat unused, the appropriate first step. House mice are addressed through structural exclusion before the fall cold arrives.",
      },
      {
        question: "What year-round pest control plan makes sense for a Roswell home?",
        answer:
          "The core annual plan for a Roswell home includes: monthly perimeter treatment from April through October for scorpions, black widows, and general pests; fall rodent exclusion inspection and sealing of identified entry points; and year-round German cockroach monitoring for any property with multi-family housing or commercial food service areas. Homes near agricultural or ranching edges warrant additional attention to deer mouse risk in any enclosed outbuilding or storage structure. A free inspection establishes current pressure levels across all these pest categories.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist (BCE)",
    nearbyCities: [
      { name: "Albuquerque", slug: "albuquerque" },
      { name: "Las Cruces", slug: "las-cruces" },
      { name: "Farmington", slug: "farmington" },
    ],
    contentTemplate: "E",
    contentSoul: "brief",
    metaTitle: "Pest Control in Roswell, NM | Scorpions, Black Widow Spiders & Mice",
    metaDescription:
      "Roswell pest control for scorpions, black widow spiders, German cockroaches, house mice and ants. Chaves County Pecos River southeastern New Mexico specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "farmington",
    name: "Farmington",
    state: "New Mexico",
    stateSlug: "new-mexico",
    stateAbbr: "NM",
    tier: "T3",
    population: "~47,000",
    county: "San Juan County",
    climate: "semi-arid",
    climateDriver:
      "Farmington is in the Four Corners region of northwestern New Mexico at the confluence of the San Juan, Animas, and La Plata Rivers in San Juan County. The semi-arid high desert climate at roughly 5,400 feet elevation brings hot summers, cold winters, and low humidity. The river confluence creates an oasis-like setting in an otherwise arid landscape, sustaining moisture-dependent pest species alongside the scorpions and black widows typical of the broader desert region.",
    topPests: [
      "Scorpions",
      "Black Widow Spiders",
      "German Cockroaches",
      "House Mice",
      "Ants",
    ],
    pestProfile: [
      {
        name: "Scorpions",
        serviceSlug: "scorpion-control",
        activeSeason: "Active spring through fall, shelter indoors in extreme heat",
        note: "NMSU Extension confirms scorpions are established in the semi-arid Four Corners desert region of San Juan County. The warm desert conditions around Farmington sustain scorpion populations in rock, debris, and construction materials from spring through fall.",
      },
      {
        name: "Black widow spiders",
        serviceSlug: "spider-control",
        activeSeason: "Year-round in sheltered spots, most active spring through fall",
        note: "NMSU Extension confirms black widow spiders are established in northwestern New Mexico. In Farmington they are found in garages, outbuildings, undisturbed storage, and the river corridor vegetation and debris. The female's bite is medically significant.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note: "German cockroaches are the dominant indoor cockroach in Farmington's apartment buildings and commercial settings. The energy industry workforce creates commercial building pest pressure in hospitality and food service properties.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge into structures in fall",
        note: "House mice move into heated Farmington structures as fall temperatures drop. The river confluence creates moisture conditions that sustain some outdoor rodent activity beyond what the purely desert climate would support. New Mexico's documented hantavirus case history from deer mice warrants precautions in any enclosed space rodent cleanup.",
      },
      {
        name: "Ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Harvester ants and fire ants are active in the San Juan County desert soils during warm months. The river corridor areas also sustain pavement ants and odorous house ants that forage into residential and commercial buildings.",
      },
    ],
    localHook:
      "Farmington sits at the Four Corners, where Colorado, New Mexico, Utah, and Arizona meet, and the river confluence at the heart of the city creates one of the most interesting pest environments in the Southwest: desert species like scorpions and black widows living alongside the moisture-dependent earwigs, cockroaches, and ants that the San Juan River corridor sustains. NMSU Extension confirms scorpions and black widows are established in San Juan County. The energy industry, which drives Farmington's economy, adds commercial pest pressure from the hospitality and food service sectors that support the workforce.",
    intro:
      "Pest control in Farmington reflects the city's unique Four Corners location at the confluence of three rivers in the high desert of northwestern New Mexico. NMSU Extension confirms scorpions and black widow spiders are established in San Juan County's semi-arid desert environment. The San Juan, Animas, and La Plata Rivers create oasis-like conditions at their confluence that sustain moisture-seeking pests alongside the scorpions and black widows of the surrounding desert. German cockroaches maintain year-round indoor populations in apartment buildings and the commercial properties that serve the energy industry workforce. House mice move indoors as fall temperatures drop, and New Mexico's documented hantavirus history means proper precautions apply to any rodent activity in enclosed spaces near desert edges. Desert ants, including harvester ants and fire ants, are active in the surrounding semi-arid soils during warm months.",
    sections: [
      {
        heading: "Scorpions and black widows at the Four Corners: Farmington's desert pest reality",
        body: "The Four Corners desert region is genuine scorpion and black widow country, and NMSU Extension confirms both species are established in San Juan County. Farmington's semi-arid high desert setting at 5,400 feet provides the dry, rocky, undisturbed conditions both species prefer. Scorpions in the Farmington area are most active from April through October, nocturnal in their movements and attracted to moisture, which makes bathrooms, kitchens, and laundry areas the common indoor encounter sites when scorpions enter structures. A UV flashlight used at night reveals scorpion activity because they fluoresce under ultraviolet light, which is the most effective way to assess how much activity exists in and around a property. Black widow spiders in Farmington are found in garages, outbuildings, irrigation valve boxes, wood piles, and the shaded, undisturbed spaces around river corridor vegetation. The female's venom is medically significant and a bite producing symptoms beyond the immediate area warrants medical attention. The combined management approach for both pests is similar: monthly perimeter treatment from April through October, physical exclusion by sealing weep holes, door gaps, and window frame gaps, and wearing gloves when reaching into dark enclosed spaces such as storage areas and valve boxes. The energy industry's presence means Farmington has more workers spending time outdoors in undeveloped terrain adjacent to the city, which increases scorpion encounter frequency.",
      },
      {
        heading: "River confluence moisture and the pest calendar in San Juan County",
        body: "The confluence of three rivers in Farmington's urban core creates a moisture-rich zone in an otherwise semi-arid high desert landscape, and that moisture difference matters for pest species that require it. The river corridor vegetation and the irrigated landscape of the city sustain earwig populations that the purely desert areas would not support. Earwigs breed in moist organic matter along the river banks and in irrigated garden areas, entering homes through foundation gaps in spring and fall. The river confluence also sustains a more diverse ant community than the surrounding desert, including pavement ants and odorous house ants in the irrigated urban areas alongside the harvester ants of the drier desert soils. House mice benefit from the river corridor as well: the vegetation and moisture sustain outdoor rodent populations year-round rather than just seasonally, which means the pressure from surrounding habitat is more consistent than in purely arid desert cities. German cockroaches, which breed entirely indoors, are unaffected by the outdoor environment but benefit from the energy industry's commercial building density: restaurants, hotels, and food service operations that support the workforce create the commercial cockroach pressure that sustains populations in the off-season. The fall transition, when scorpions and outdoor pests become less active and mice press indoors, marks the shift from the warm-season perimeter program to the fall rodent exclusion priority.",
      },
    ],
    prevention: [
      "Apply monthly perimeter treatment from April through October for scorpions and black widow spiders, and seal weep holes, door gaps, and window frame gaps to reduce entry.",
      "Use a UV flashlight for nighttime scorpion inspection of the yard and foundation perimeter to assess activity levels around your Four Corners property.",
      "If rodent activity is found in a shed or enclosed space near desert edges, wet the area with disinfectant before cleaning given New Mexico's hantavirus case history.",
      "Seal foundation gaps and utility penetrations before fall to intercept house mice before San Juan County temperatures drive them into heated structures.",
    ],
    costNote:
      "Farmington pest control is most effective as a monthly perimeter program from April through October for scorpions, black widows, and general desert pests, with fall rodent exclusion and year-round German cockroach monitoring for commercial properties. The river corridor moisture means earwig treatment may be an additional spring and fall service for properties near the river. A free inspection sets the right plan.",
    faqs: [
      {
        question: "What scorpion species are present in the Farmington area?",
        answer:
          "NMSU Extension confirms scorpions are established in San Juan County's semi-arid Four Corners desert region. The striped bark scorpion (Centruroides vittatus) is the most commonly encountered species in eastern and central New Mexico. The Four Corners area is at the western edge of its range and the northern range edge of some desert scorpion species. Any scorpion sting producing symptoms beyond the immediate sting site, particularly in children or elderly individuals, warrants medical attention. Monthly perimeter treatment during the active season substantially reduces indoor encounter frequency.",
      },
      {
        question: "How do I keep scorpions out of my Four Corners home?",
        answer:
          "The most effective combination is monthly perimeter treatment during the spring through fall active season, sealing weep holes and gaps around doors and windows that scorpions use to enter, and a nighttime UV flashlight inspection of the yard and foundation perimeter to assess where scorpion activity is concentrated. Sealing weep holes with fine steel mesh rather than solid caulk maintains the ventilation function while blocking scorpion entry. Removing rock piles, debris, and undisturbed material from near the foundation eliminates the harborage sites that scorpions use adjacent to the structure.",
      },
      {
        question: "Are black widow spiders active year-round in northwestern New Mexico?",
        answer:
          "Black widow spiders in Farmington are most active from spring through fall and shelter in protected spaces year-round. In the mild winters at 5,400 feet, they remain present in garages, outbuildings, and other sheltered structures through the cold months. The year-round presence means annual treatment of harborage areas is appropriate rather than seasonal-only treatment. Wearing gloves when reaching into any dark storage space is a sensible year-round habit in the Four Corners desert environment.",
      },
      {
        question: "When do mice surge in San Juan County?",
        answer:
          "October and November are the primary surge months as Farmington temperatures drop from the hot summer highs toward freezing nighttime temperatures. The river confluence creates more year-round outdoor rodent habitat than purely desert settings, so the pressure from surrounding outdoor populations is more consistent. New Mexico's documented hantavirus case history means any rodent activity in an enclosed space, particularly near desert or agricultural edges, warrants professional species identification before cleanup begins. House mice are addressed with fall structural exclusion.",
      },
      {
        question: "What makes the Four Corners river confluence different for pest control?",
        answer:
          "The confluence of three rivers in Farmington's urban core creates moisture conditions in the middle of a semi-arid desert that sustain pest species requiring humidity: earwigs, pavement ants, and some moisture-dependent cockroach species that the surrounding desert would not support. This means Farmington's pest list is more diverse than comparably sized desert cities further from major water sources. The management approach has to address both the desert species, scorpions and black widows, and the moisture-favoring species that the river corridor sustains. A perimeter program from April through October covers both, but the moisture pests may require additional attention in the irrigated areas near the river.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Albuquerque", slug: "albuquerque" },
      { name: "Rio Rancho", slug: "rio-rancho" },
      { name: "Roswell", slug: "roswell" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle: "Pest Control in Farmington, NM | Scorpions, Black Widow Spiders & Mice",
    metaDescription:
      "Farmington pest control for scorpions, black widow spiders, German cockroaches, house mice and ants. San Juan County Four Corners San Juan River northwestern New Mexico specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
