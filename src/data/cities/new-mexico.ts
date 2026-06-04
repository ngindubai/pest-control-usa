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
];
