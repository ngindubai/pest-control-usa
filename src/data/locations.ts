export interface LocationState {
  slug: string;
  name: string;
  abbr: string;
  region: string;
  cities: string[];
  topPests: string[];
  pestFact: string;
}

export const locationStates: LocationState[] = [
  // ── Northeast ──────────────────────────────────────────────────
  {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    region: "Northeast",
    cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    topPests: ["Bed Bugs", "Cockroaches", "Mice", "Ants", "Termites"],
    pestFact:
      "New York City ranks among the top cities nationally for bed bug complaints, with the dense urban housing stock providing near-ideal conditions for rapid spread between units.",
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbr: "PA",
    region: "Northeast",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"],
    topPests: ["Stink Bugs", "Mice", "Ants", "Termites", "Cockroaches"],
    pestFact:
      "Pennsylvania is at the epicenter of the brown marmorated stink bug invasion — the species was first detected in the USA in Allentown, PA in 1998 and has since spread nationwide.",
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbr: "MA",
    region: "Northeast",
    cities: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"],
    topPests: ["Mice", "Ants", "Termites", "Bed Bugs", "Wasps"],
    pestFact:
      "Massachusetts subterranean termites are active across the eastern half of the state, with Boston-area infestations historically among the most damaging in the Northeast due to older housing stock.",
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    region: "Northeast",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"],
    topPests: ["Cockroaches", "Bed Bugs", "Ants", "Mosquitoes", "Mice"],
    pestFact:
      "New Jersey's dense population and proximity to New York City makes it one of the highest-pressure states for bed bugs and cockroaches in multi-family housing environments.",
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    abbr: "CT",
    region: "Northeast",
    cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"],
    topPests: ["Ticks", "Mice", "Ants", "Termites", "Stink Bugs"],
    pestFact:
      "Connecticut has one of the highest rates of reported Lyme disease in the nation — Lyme, CT is the town the disease is named after — making professional tick control critical for homeowners across the state.",
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    abbr: "RI",
    region: "Northeast",
    cities: ["Providence", "Cranston", "Warwick", "Pawtucket", "East Providence"],
    topPests: ["Mice", "Ants", "Cockroaches", "Bed Bugs", "Ticks"],
    pestFact:
      "Rhode Island's compact geography and older urban housing stock in Providence makes rodent and bed bug pressure some of the highest per capita in New England.",
  },
  {
    slug: "vermont",
    name: "Vermont",
    abbr: "VT",
    region: "Northeast",
    cities: ["Burlington", "South Burlington", "Rutland", "Barre", "Montpelier"],
    topPests: ["Mice", "Ants", "Wasps", "Spiders", "Stink Bugs"],
    pestFact:
      "Vermont's cold winters drive mice, squirrels, and other rodents indoors aggressively in late fall — Vermont homeowners experience some of the highest rates of fall rodent invasions in the country.",
  },
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    abbr: "NH",
    region: "Northeast",
    cities: ["Manchester", "Nashua", "Concord", "Derry", "Dover"],
    topPests: ["Mice", "Ants", "Wasps", "Ticks", "Spiders"],
    pestFact:
      "New Hampshire's heavily forested landscape creates high tick and wildlife pressure — blacklegged deer ticks are present in nearly every county, and squirrel attic invasions peak every fall.",
  },
  {
    slug: "maine",
    name: "Maine",
    abbr: "ME",
    region: "Northeast",
    cities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"],
    topPests: ["Mice", "Ants", "Wasps", "Spiders", "Bed Bugs"],
    pestFact:
      "Maine's long winters and rural landscape mean rodents are the #1 pest issue — field mice seeking warmth are reported in 1 in 3 Maine homes annually according to state extension data.",
  },
  // ── Southeast ──────────────────────────────────────────────────
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    region: "Southeast",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"],
    topPests: ["Termites", "Cockroaches", "Ants", "Mosquitoes", "Rats"],
    pestFact:
      "Florida is home to Formosan termites — the most destructive termite species in the world — alongside 3 other destructive species. Florida homeowners face the highest termite pressure of any state in the continental USA.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    region: "Southeast",
    cities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens"],
    topPests: ["Termites", "Fire Ants", "Cockroaches", "Mosquitoes", "Fleas"],
    pestFact:
      "Georgia's humid subtropical climate and red clay soils support massive subterranean termite colonies — Atlanta-area homes have among the highest documented termite damage rates in the Southeast.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    region: "Southeast",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"],
    topPests: ["Termites", "Ants", "Mosquitoes", "Cockroaches", "Mice"],
    pestFact:
      "North Carolina sits in one of the highest termite-pressure zones in the USA. The Research Triangle's rapid growth means thousands of new homes each year are at risk without proper pre-construction treatment.",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbr: "SC",
    region: "Southeast",
    cities: ["Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill"],
    topPests: ["Termites", "Fire Ants", "Cockroaches", "Mosquitoes", "Spiders"],
    pestFact:
      "South Carolina's coastal and lowcountry regions experience some of the most intense Formosan termite pressure outside Louisiana. Charleston has documented Formosan termite colonies in the historic district dating back decades.",
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    region: "Southeast",
    cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Arlington"],
    topPests: ["Termites", "Ants", "Stink Bugs", "Mosquitoes", "Mice"],
    pestFact:
      "Virginia is one of the primary states for brown marmorated stink bug infestations in the USA, with northern Virginia experiencing mass fall invasions annually due to proximity to the original 1998 introduction point in Pennsylvania.",
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    abbr: "TN",
    region: "Southeast",
    cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"],
    topPests: ["Termites", "Cockroaches", "Ants", "Mosquitoes", "Bed Bugs"],
    pestFact:
      "Tennessee's position at the intersection of humid subtropical and temperate climates creates intense termite pressure across the entire state, with subterranean termites active year-round in the western half.",
  },
  {
    slug: "alabama",
    name: "Alabama",
    abbr: "AL",
    region: "Southeast",
    cities: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"],
    topPests: ["Termites", "Fire Ants", "Cockroaches", "Mosquitoes", "Spiders"],
    pestFact:
      "Alabama has one of the highest concentrations of imported red fire ants in the nation. Fire ant mounds can reach 18 inches in height and cause 100,000+ stings across the state each year, with severe allergic reactions requiring emergency treatment.",
  },
  {
    slug: "mississippi",
    name: "Mississippi",
    abbr: "MS",
    region: "Southeast",
    cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi"],
    topPests: ["Termites", "Fire Ants", "Cockroaches", "Mosquitoes", "Fleas"],
    pestFact:
      "Mississippi's Gulf Coast has one of the highest Formosan termite pressures in the continental USA, second only to Louisiana. Gulfport and Biloxi have documented multi-colony infestations in historic downtown structures.",
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    abbr: "LA",
    region: "Southeast",
    cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"],
    topPests: ["Termites", "Cockroaches", "Fire Ants", "Mosquitoes", "Rats"],
    pestFact:
      "New Orleans has the worst Formosan termite infestation of any city in the United States. Formosan colonies in the French Quarter have caused millions in damage to historic wooden structures and continue to threaten the city's architectural heritage.",
  },
  // ── Midwest ────────────────────────────────────────────────────
  {
    slug: "illinois",
    name: "Illinois",
    abbr: "IL",
    region: "Midwest",
    cities: ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville"],
    topPests: ["Mice", "Cockroaches", "Bed Bugs", "Ants", "Wasps"],
    pestFact:
      "Chicago consistently ranks among the top 5 most bed bug-infested cities in the USA in national pest control surveys. Dense apartment buildings and high tourism provide ideal conditions for rapid spread.",
  },
  {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    region: "Midwest",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    topPests: ["Mice", "Stink Bugs", "Ants", "Termites", "Cockroaches"],
    pestFact:
      "Ohio is a prime stink bug state — the insect spread rapidly through Ohio's agricultural regions after first appearing in neighboring Pennsylvania, and fall home invasions number in the millions statewide.",
  },
  {
    slug: "michigan",
    name: "Michigan",
    abbr: "MI",
    region: "Midwest",
    cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor"],
    topPests: ["Mice", "Ants", "Wasps", "Bed Bugs", "Cockroaches"],
    pestFact:
      "Detroit has one of the highest rodent infestation rates of any major US city, driven by a large stock of aging housing and urban vacancy. Professional exclusion and ongoing baiting programs are essential for Detroit-area homes.",
  },
  {
    slug: "indiana",
    name: "Indiana",
    abbr: "IN",
    region: "Midwest",
    cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"],
    topPests: ["Mice", "Ants", "Wasps", "Termites", "Cockroaches"],
    pestFact:
      "Indiana lies within a moderate termite pressure zone — subterranean termites are active across the southern half of the state, with Indianapolis and Evansville seeing a significant volume of annual termite damage claims.",
  },
  {
    slug: "wisconsin",
    name: "Wisconsin",
    abbr: "WI",
    region: "Midwest",
    cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"],
    topPests: ["Mice", "Ants", "Wasps", "Spiders", "Cockroaches"],
    pestFact:
      "Wisconsin's harsh winters force an unusually high percentage of mice and other small rodents into residential structures each fall. Nearly 1 in 4 Wisconsin homeowners report signs of mouse activity annually.",
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    abbr: "MN",
    region: "Midwest",
    cities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington"],
    topPests: ["Mice", "Ants", "Wasps", "Spiders", "Bed Bugs"],
    pestFact:
      "Minnesota's extreme cold (-30°F possible) drives mice, raccoons, and squirrels to seek indoor warmth aggressively. Minneapolis ranks consistently in top 10 lists for rodent infestations among major US cities.",
  },
  {
    slug: "missouri",
    name: "Missouri",
    abbr: "MO",
    region: "Midwest",
    cities: ["Kansas City", "Saint Louis", "Springfield", "Columbia", "Independence"],
    topPests: ["Ants", "Termites", "Mice", "Cockroaches", "Mosquitoes"],
    pestFact:
      "Missouri sits at the transition zone between northern and southern pest pressure — termites are active across the southern two-thirds of the state, while rodent infestations peak in winter throughout the north.",
  },
  {
    slug: "iowa",
    name: "Iowa",
    abbr: "IA",
    region: "Midwest",
    cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"],
    topPests: ["Mice", "Ants", "Wasps", "Spiders", "Earwigs"],
    pestFact:
      "Iowa's agricultural landscape supports large field mouse populations that migrate into homes en masse each fall. Rural Iowa homes without professional exclusion programs can see dozens of mice entering structures in a single season.",
  },
  {
    slug: "kansas",
    name: "Kansas",
    abbr: "KS",
    region: "Midwest",
    cities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"],
    topPests: ["Ants", "Termites", "Mice", "Cockroaches", "Wasps"],
    pestFact:
      "Kansas falls within a moderate-to-high termite pressure zone, with eastern Kansas and the Kansas City metro area experiencing significant subterranean termite activity annually.",
  },
  // ── South & Southwest ──────────────────────────────────────────
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    region: "South & Southwest",
    cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"],
    topPests: ["Termites", "Fire Ants", "Cockroaches", "Mosquitoes", "Scorpions"],
    pestFact:
      "Texas has the most fire ant-infested land of any state in the USA — over 300 million acres are affected. Houston is also one of America's worst cities for cockroach infestations, with warm, humid conditions supporting year-round American cockroach populations.",
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    region: "South & Southwest",
    cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"],
    topPests: ["Scorpions", "Black Widows", "Termites", "Cockroaches", "Ants"],
    pestFact:
      "Arizona is home to the bark scorpion — the only scorpion in North America with venom dangerous enough to cause severe medical emergencies. Phoenix and Tucson metro areas report thousands of bark scorpion stings annually, with children under 6 at highest risk.",
  },
  {
    slug: "oklahoma",
    name: "Oklahoma",
    abbr: "OK",
    region: "South & Southwest",
    cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton"],
    topPests: ["Termites", "Ants", "Cockroaches", "Mice", "Wasps"],
    pestFact:
      "Oklahoma falls in one of the highest termite pressure zones in the USA. Subterranean termites are active statewide, and Oklahoma City and Tulsa homeowners face year-round termite risk without ongoing protection programs.",
  },
  {
    slug: "arkansas",
    name: "Arkansas",
    abbr: "AR",
    region: "South & Southwest",
    cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"],
    topPests: ["Termites", "Fire Ants", "Cockroaches", "Mosquitoes", "Mice"],
    pestFact:
      "Arkansas sits squarely in the extreme termite pressure zone, with the Mississippi River valley and Ozark region both experiencing year-round subterranean termite activity and occasional Formosan termite pressure in southern counties.",
  },
  {
    slug: "new-mexico",
    name: "New Mexico",
    abbr: "NM",
    region: "South & Southwest",
    cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"],
    topPests: ["Scorpions", "Black Widows", "Ants", "Cockroaches", "Termites"],
    pestFact:
      "New Mexico's desert climate supports the striped bark scorpion and several black widow species. Albuquerque homes adjacent to desert scrub require regular perimeter pest treatment, especially during the summer monsoon season when pest activity surges.",
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbr: "NV",
    region: "South & Southwest",
    cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"],
    topPests: ["Scorpions", "Black Widows", "Cockroaches", "Ants", "Bed Bugs"],
    pestFact:
      "Las Vegas has significant bark scorpion pressure in suburban and desert-edge neighborhoods. The city's high tourism volume and massive hotel industry also make it one of the highest-risk cities in the western USA for bed bug exposure.",
  },
  {
    slug: "utah",
    name: "Utah",
    abbr: "UT",
    region: "South & Southwest",
    cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem"],
    topPests: ["Black Widows", "Ants", "Mice", "Wasps", "Cockroaches"],
    pestFact:
      "Utah has one of the highest concentrations of black widow spiders in the western USA, with the western black widow common in garages, sheds, and desert landscaping throughout the Wasatch Front and St. George area.",
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbr: "CO",
    region: "South & Southwest",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"],
    topPests: ["Ants", "Wasps", "Mice", "Spiders", "Cockroaches"],
    pestFact:
      "Colorado's rapid population growth along the Front Range has increased human-wildlife conflicts, with prairie dogs, raccoons, and skunks regularly invading suburban developments. Denver also consistently ranks in the top 20 cities for bed bug complaints nationally.",
  },
  // ── West & Pacific ─────────────────────────────────────────────
  {
    slug: "california",
    name: "California",
    abbr: "CA",
    region: "West & Pacific",
    cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno"],
    topPests: ["Ants", "Termites", "Cockroaches", "Bed Bugs", "Rats"],
    pestFact:
      "California has 3 destructive termite species — subterranean, drywood, and dampwood — requiring different treatment approaches. Los Angeles County alone accounts for hundreds of millions in termite damage annually, and drywood termite fumigation (tent fumigation) is a common sight in Southern California neighborhoods.",
  },
  {
    slug: "washington",
    name: "Washington",
    abbr: "WA",
    region: "West & Pacific",
    cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"],
    topPests: ["Ants", "Rats", "Wasps", "Spiders", "Silverfish"],
    pestFact:
      "The Pacific Northwest dampwood termite is unique to Washington, Oregon, and Northern California. Seattle's wet climate also supports some of the largest odorous house ant populations in the country — pavement ants and moisture ants thrive in the region's saturated soils.",
  },
  {
    slug: "oregon",
    name: "Oregon",
    abbr: "OR",
    region: "West & Pacific",
    cities: ["Portland", "Salem", "Eugene", "Gresham", "Hillsboro"],
    topPests: ["Ants", "Rats", "Wasps", "Spiders", "Silverfish"],
    pestFact:
      "Oregon's mild, wet winters allow ants and rodents to remain active year-round. Portland has some of the highest reported odorous house ant infestation rates of any western US city, and Norway rats thrive in the city's network of aging sewer infrastructure.",
  },
  {
    slug: "idaho",
    name: "Idaho",
    abbr: "ID",
    region: "West & Pacific",
    cities: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"],
    topPests: ["Ants", "Mice", "Wasps", "Spiders", "Cockroaches"],
    pestFact:
      "Idaho's rapid suburban growth in the Treasure Valley (Boise-Meridian-Nampa) has brought new construction directly into areas where rattlesnakes, black widows, and ground squirrels were previously undisturbed. Professional pest exclusion is increasingly essential for new developments.",
  },
  {
    slug: "montana",
    name: "Montana",
    abbr: "MT",
    region: "West & Pacific",
    cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte"],
    topPests: ["Mice", "Wasps", "Ants", "Spiders", "Boxelder Bugs"],
    pestFact:
      "Montana's vast agricultural landscape and cold winters create extreme rodent pressure — field mice and voles invade homes in enormous numbers each fall, and agricultural operations face significant grain storage pest challenges year-round.",
  },
  {
    slug: "wyoming",
    name: "Wyoming",
    abbr: "WY",
    region: "West & Pacific",
    cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"],
    topPests: ["Mice", "Wasps", "Ants", "Spiders", "Boxelder Bugs"],
    pestFact:
      "Wyoming's high-altitude, arid climate presents unique pest challenges — the deer mouse (a hantavirus carrier) is common throughout the state, and Cheyenne's semi-arid climate supports aggressive yellow jacket and paper wasp populations during summer.",
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    abbr: "HI",
    region: "West & Pacific",
    cities: ["Honolulu", "East Honolulu", "Pearl City", "Hilo", "Kailua"],
    topPests: ["Termites", "Cockroaches", "Ants", "Bed Bugs", "Rats"],
    pestFact:
      "Hawaii has the worst termite problem of any US state by property value damage per square mile. The combination of 3 termite species — Formosan, Asian, and drywood — year-round tropical warmth, and dense housing makes Hawaii a particularly demanding pest control environment.",
  },
  {
    slug: "alaska",
    name: "Alaska",
    abbr: "AK",
    region: "West & Pacific",
    cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"],
    topPests: ["Mice", "Rats", "Wasps", "Spiders", "Ants"],
    pestFact:
      "Alaska's harsh climate eliminates many pest species but creates extreme pressure from those that do thrive — rats and mice in Anchorage and coastal communities are a significant year-round problem, and yellow jacket wasps are aggressively territorial during Alaska's brief, intense summers.",
  },
  // ── State hubs added 2026-07-02 (had city pages but no parent hub) ──
  {
    slug: "delaware",
    name: "Delaware",
    abbr: "DE",
    region: "Northeast",
    cities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna"],
    topPests: ["Termites", "Mosquitoes", "Ants", "Mice", "Ticks"],
    pestFact:
      "Delaware's low coastal plain and tidal salt marshes drive heavy summer mosquito pressure, and the state's mild, humid climate keeps eastern subterranean termites active year after year against Wilmington's older housing stock.",
  },
  {
    slug: "district-of-columbia",
    name: "District of Columbia",
    abbr: "DC",
    region: "Southeast",
    cities: ["Washington"],
    topPests: ["Rats", "Cockroaches", "Bed Bugs", "Mice", "Ants"],
    pestFact:
      "Washington, DC consistently ranks among the worst cities in the country for rats, with the Norway rat thriving in the district's dense restaurant corridors and the alleys behind its older row houses.",
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    abbr: "KY",
    region: "Southeast",
    cities: ["Louisville", "Lexington", "Owensboro", "Bowling Green", "Elizabethtown"],
    topPests: ["Termites", "Spiders", "Ants", "Ticks", "Mosquitoes"],
    pestFact:
      "Kentucky sits in a high-pressure zone for eastern subterranean termites, and the brown recluse spider is established across much of the state, so both structural and spider inspections matter for Kentucky homeowners.",
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    region: "Southeast",
    cities: ["Baltimore", "Frederick", "Annapolis", "Rockville", "Gaithersburg"],
    topPests: ["Stink Bugs", "Termites", "Mosquitoes", "Ants", "Mice"],
    pestFact:
      "Maryland carries some of the heaviest brown marmorated stink bug pressure in the country, and the Asian tiger mosquito is firmly established across the Baltimore and Washington suburbs, biting through the daytime hours all summer.",
  },
  {
    slug: "nebraska",
    name: "Nebraska",
    abbr: "NE",
    region: "Midwest",
    cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"],
    topPests: ["Boxelder Bugs", "Mice", "Ants", "Crickets", "Wasps"],
    pestFact:
      "Nebraska's continental climate drives large fall invasions of boxelder bugs and crickets pushing indoors for warmth, while rural and suburban properties see steady mouse pressure as temperatures drop toward winter.",
  },
  {
    slug: "north-dakota",
    name: "North Dakota",
    abbr: "ND",
    region: "Midwest",
    cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"],
    topPests: ["Mice", "Boxelder Bugs", "Mosquitoes", "Wasps", "Ants"],
    pestFact:
      "North Dakota's long, hard winters push mice and boxelder bugs indoors every fall, and the wet prairie pothole country produces some of the most intense summer mosquito activity anywhere in the United States.",
  },
  {
    slug: "south-dakota",
    name: "South Dakota",
    abbr: "SD",
    region: "Midwest",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"],
    topPests: ["Boxelder Bugs", "Mice", "Wasps", "Mosquitoes", "Ants"],
    pestFact:
      "South Dakota homeowners face heavy fall invasions of boxelder bugs and other overwintering pests seeking shelter, while warm prairie summers bring biting mosquitoes and ground-nesting wasps to yards across the state.",
  },
  {
    slug: "west-virginia",
    name: "West Virginia",
    abbr: "WV",
    region: "Southeast",
    cities: ["Charleston", "Huntington", "Parkersburg", "Morgantown", "Wheeling"],
    topPests: ["Stink Bugs", "Mice", "Termites", "Ants", "Ticks"],
    pestFact:
      "West Virginia's Appalachian valleys see intense fall invasions of brown marmorated stink bugs, which overwinter inside mountain homes in large numbers, so late-season exclusion work is a priority across the state.",
  },
];

export function getStateBySlug(slug: string): LocationState | undefined {
  return locationStates.find((s) => s.slug === slug);
}
