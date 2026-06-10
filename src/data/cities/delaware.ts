import type { CityLocation } from "@/types";

// Delaware. Pest data reflects mid-Atlantic Delaware River valley conditions.
// Termite and stink bug data from University of Delaware Cooperative Extension.

export const delawareCities: CityLocation[] = [
  {
    slug: "wilmington",
    name: "Wilmington",
    state: "Delaware",
    stateSlug: "delaware",
    stateAbbr: "DE",
    tier: "T2",
    population: "~70,000",
    county: "New Castle County",
    climate: "hot-humid",
    climateDriver:
      "Wilmington sits in the northern Delaware River valley where mid-Atlantic humidity meets tidal influence from the Chesapeake and Delaware Canal corridor. The city's older housing stock, clay soils along the Brandywine and Christina Rivers, and warm humid summers create sustained termite and moisture-driven pest pressure through the warm season.",
    topPests: [
      "Termites",
      "Stink bugs",
      "Mosquitoes",
      "Mice",
      "German cockroaches",
    ],
    pestProfile: [
      {
        name: "Eastern subterranean termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Swarms March through May, active spring through fall",
        note: "University of Delaware Cooperative Extension confirms that New Castle County has significant eastern subterranean termite pressure. Wilmington's older row homes and brick construction often have crawl spaces and wood near soil that supports colony establishment.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Indoor invasions September through March",
        note: "The stink bug invasion that began in Allentown, PA in the late 1990s swept quickly through the mid-Atlantic corridor. Wilmington is in the core stink bug zone, and fall invasions into buildings are a reliable seasonal event in New Castle County each year.",
      },
      {
        name: "Mosquitoes",
        serviceSlug: "mosquito-control",
        activeSeason: "April through October",
        note: "The Christina River, Brandywine Creek, and the tidal wetlands of the Delaware estuary create extensive breeding habitat close to the city. Wilmington's parks and green corridors along both rivers extend mosquito pressure into established neighborhoods.",
      },
      {
        name: "House mice",
        serviceSlug: "mice-control",
        activeSeason: "Year-round, surge in fall",
        note: "Wilmington's older housing stock has gaps and settling in foundations that give mice easy access in fall. The city's dense urban character means pressure from adjacent properties is a consistent factor that individual homeowners cannot fully control.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round",
        note: "German cockroaches are the dominant indoor cockroach in Wilmington's commercial blocks and older multi-family housing. They spread between units through plumbing and utility chases and require targeted, persistent treatment to eliminate.",
      },
    ],
    localHook:
      "Wilmington's two major waterways, the Brandywine Creek and the Christina River, converge right through the city, shaping both its character and its pest picture. That geography, combined with the stink bug invasions that sweep through the Delaware Valley every fall and the termite pressure documented by University of Delaware Extension, keeps the pest calendar here consistently active.",
    intro:
      "Pest control in Wilmington is shaped by its position in the Delaware River valley. Eastern subterranean termites are a documented concern throughout New Castle County, and Wilmington's older housing stock, including row homes, wood frames, and crawl spaces, provides favorable conditions for colonies to establish. Stink bugs are a major fall and winter nuisance given Wilmington's location in the mid-Atlantic's core stink bug zone. Mosquitoes breed along the Christina and Brandywine waterways, mice push indoors each autumn, and German cockroaches are a year-round concern in the city's denser housing corridors.",
    sections: [
      {
        heading: "Termite pressure in the Delaware River valley",
        body: "University of Delaware Cooperative Extension documents real eastern subterranean termite activity across New Castle County each spring. Wilmington's clay-heavy soils along the Brandywine and Christina Rivers retain the moisture that termite colonies need, and the abundance of older housing in neighborhoods like Trolley Square, Riverside, and the East Side means wood near soil contact is common. Spring swarms of winged termites near windows or foundation walls are the most visible warning sign. Annual inspections are the practical defense, particularly for homes with crawl spaces, older brick construction, or any wood-to-soil contact points around the foundation.",
      },
      {
        heading: "Stink bug season in the mid-Atlantic corridor",
        body: "Wilmington sits squarely in one of the most active stink bug corridors in the country. The brown marmorated stink bug, first documented in Allentown PA just 60 miles north, is fully established throughout the Delaware Valley. Each fall, as temperatures drop in September and October, stink bugs seek warmth inside buildings and push through gaps around windows, doors, and utility penetrations. They do not bite or damage structures, but they cluster in large numbers and release a strong, unpleasant odor when crushed or disturbed. Sealing the building envelope before fall is the most effective prevention. Interior populations that have already entered can be vacuumed out, but treatment of aggregation sites on the south and west building faces is the professional approach.",
      },
    ],
    prevention: [
      "Have an annual termite inspection given New Castle County's documented subterranean termite pressure.",
      "Seal gaps around windows, doors, and utility penetrations before September to reduce stink bug entry.",
      "Eliminate standing water along the Brandywine and Christina River corridors to reduce the spring mosquito season.",
      "Check foundation and utility entry points in fall to intercept mice before the cold-weather surge.",
    ],
    costNote:
      "Wilmington pest control is typically quoted as a recurring general service covering ants, cockroaches, and rodents, with termite protection priced separately after inspection. Stink bug exclusion work is often done as a one-time seasonal service in August or September. A free inspection establishes what is present before any plan is quoted.",
    faqs: [
      {
        question: "How serious is the termite risk in Wilmington, DE?",
        answer:
          "Significant. University of Delaware Extension confirms New Castle County has eastern subterranean termite pressure. Wilmington's older housing and river valley soils make annual inspections worthwhile. Homes with crawl spaces or wood near the foundation carry higher risk.",
      },
      {
        question: "Why are stink bugs such a problem in Wilmington?",
        answer:
          "Wilmington is in the core zone of the mid-Atlantic stink bug invasion. The brown marmorated stink bug first established in the Lehigh Valley just north of Delaware and has been growing across the region. Fall invasions into buildings are reliable and large. Sealing the exterior before September is the most effective defense.",
      },
      {
        question: "Where do mosquitoes breed in Wilmington?",
        answer:
          "The Christina River, Brandywine Creek, and the tidal wetlands of the Delaware estuary provide year-round habitat. Wilmington's parks along both rivers extend the pressure into city neighborhoods. The season runs April through October, peaking in June and July.",
      },
      {
        question: "Are German cockroaches common in Wilmington apartments?",
        answer:
          "Yes. German cockroaches spread between units in older multi-family buildings through plumbing and utility chases. A single treatment does not eliminate an established infestation. Persistent baiting and follow-up over several weeks is required. Professional service is strongly recommended.",
      },
      {
        question: "Do Wilmington homes need year-round pest service?",
        answer:
          "Most do. Mice and cockroaches are year-round concerns, mosquitoes run from April through October, and stink bugs are a fall seasonal issue. A continuous general plan is more cost-effective than reacting to each problem individually.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Newark", slug: "newark-de" },
      { name: "Dover", slug: "dover" },
      { name: "Philadelphia", slug: "philadelphia" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle:
      "Pest Control in Wilmington, DE | Termites, Stink Bugs & Mosquitoes",
    metaDescription:
      "Wilmington pest control for eastern subterranean termites, stink bugs, mosquitoes, mice and German cockroaches. New Castle County Delaware River valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
