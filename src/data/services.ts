export interface ServiceTreatment {
  name: string;
  desc: string;
}

export interface ServiceFAQItem {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  emoji: string;
  category: "insects" | "rodents" | "wildlife";
  urgency: "low" | "medium" | "high" | "critical";
  tagline: string;
  heroDesc: string;
  priceRange: string;
  signs: string[];
  treatments: ServiceTreatment[];
  prevention: string[];
  faqs: ServiceFAQItem[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "ant-control",
    name: "Ant Control",
    emoji: "🐜",
    category: "insects",
    urgency: "medium",
    tagline: "Eliminate ant colonies at the source — not just the workers",
    heroDesc:
      "Ants are the #1 pest complaint in America. From tiny sugar ants to destructive carpenter ants, a visible ant trail means thousands more are hidden in your walls and foundation. Our targeted colony elimination treatment finds and destroys the queen, stopping the infestation permanently.",
    priceRange: "$149 – $299",
    signs: [
      "Ant trails along walls, countertops, or windows",
      "Small piles of sawdust (carpenter ants tunneling in wood)",
      "Ant nests or mounds near the home's foundation",
      "Food packaging with tiny holes or ant activity inside",
      "Flying ants (swarmers) indoors — often mistaken for termites",
    ],
    treatments: [
      {
        name: "Gel Bait Treatment",
        desc: "Worker ants carry slow-acting bait back to the colony, killing the queen and all nestmates within days. Highly effective for most species.",
      },
      {
        name: "Perimeter Spray",
        desc: "Exterior residual treatment forms a barrier around your foundation, preventing new ants from entering the structure.",
      },
      {
        name: "Direct Colony Treatment",
        desc: "For outdoor mounds and carpenter ant nests, direct dust or liquid application eliminates the colony at the source.",
      },
      {
        name: "Exclusion & Caulking",
        desc: "We seal cracks, gaps, and utility penetrations to eliminate ant entry points and reduce future infestations.",
      },
    ],
    prevention: [
      "Store all food in sealed containers — including pet food",
      "Fix leaky pipes and eliminate moisture sources that attract carpenter ants",
      "Trim tree branches and shrubs that touch the exterior of your home",
      "Remove woodpiles, debris, and mulch from direct contact with your foundation",
      "Clean up food spills and crumbs promptly, especially in the kitchen",
    ],
    faqs: [
      {
        q: "How long does ant treatment take to work?",
        a: "Gel bait treatments typically show significant reduction within 3–5 days as workers carry bait back to the colony. Full colony elimination usually takes 1–2 weeks. Perimeter sprays work within hours for contact kill.",
      },
      {
        q: "Are carpenter ants dangerous to my home?",
        a: "Yes. Unlike termites, carpenter ants do not eat wood — but they excavate galleries to nest, which can cause structural damage over time if untreated. An active infestation should be treated as soon as possible.",
      },
      {
        q: "Why do I still see ants after treatment?",
        a: "With bait treatments, seeing ants for 3–7 days post-treatment is normal — they are actively feeding on and transporting the bait to the colony. Increased activity is actually a sign the treatment is working.",
      },
      {
        q: "Can ants come back after treatment?",
        a: "Without an ongoing prevention program, new ant colonies can establish. Our quarterly protection plans include retreatment at no extra charge if ants return between scheduled visits.",
      },
    ],
    relatedSlugs: ["cockroach-control", "silverfish-control", "cricket-control"],
  },
  {
    slug: "bed-bug-treatment",
    name: "Bed Bug Treatment",
    emoji: "🛏️",
    category: "insects",
    urgency: "critical",
    tagline: "Complete bed bug elimination — guaranteed",
    heroDesc:
      "Bed bugs are among the most difficult pests to eliminate without professional help. They hide in mattress seams, electrical outlets, picture frames, and even inside walls. PestRemovalUSA uses a combination of heat treatment and EPA-registered chemical protocols to achieve complete elimination in a single treatment.",
    priceRange: "$499 – $1,499",
    signs: [
      "Small red or brown spots (fecal stains) on mattress or bedding",
      "Waking up with itchy, red welts in a line or cluster",
      "Tiny shed skins or eggshells around bed frames and seams",
      "Sweet, musty odor in heavily infested rooms",
      "Live bugs — apple-seed size, flat, reddish-brown — in mattress seams",
    ],
    treatments: [
      {
        name: "Whole-Room Heat Treatment",
        desc: "The gold standard. We raise the entire room temperature to 120°F+ for several hours, killing all bugs and eggs with no chemicals. Single treatment, extremely effective.",
      },
      {
        name: "Chemical Protocol",
        desc: "Multi-product chemical treatment using pyrethroid, neonicotinoid, and IGR (insect growth regulator) combinations to kill bugs at all life stages.",
      },
      {
        name: "Mattress & Furniture Encasements",
        desc: "Professional-grade mattress encasements trap any surviving bugs and protect your investment long-term.",
      },
      {
        name: "Follow-Up Inspection",
        desc: "We schedule a follow-up visit 14 days post-treatment to confirm elimination and provide re-treatment if needed at no charge.",
      },
    ],
    prevention: [
      "Inspect hotel rooms before staying — check mattress seams and headboard",
      "Never place luggage on hotel beds; use luggage racks",
      "Wash and dry clothing on high heat after travel",
      "Inspect secondhand furniture thoroughly before bringing it indoors",
      "Use mattress encasements as a preventive measure",
    ],
    faqs: [
      {
        q: "Does one heat treatment really kill all bed bugs?",
        a: "Yes, when performed properly. Heat penetrates all hiding spots — inside furniture, inside walls, inside outlets — that chemical sprays miss. Our heat treatments achieve 98%+ elimination rates in a single session.",
      },
      {
        q: "Do I need to throw away my mattress?",
        a: "Usually not. Our heat treatment kills all bugs in the mattress. Following treatment, a professional-grade mattress encasement protects against re-infestation. Mattress replacement is rarely necessary.",
      },
      {
        q: "How do I prepare for bed bug heat treatment?",
        a: "Remove all items that cannot withstand heat (candles, plants, aerosols) and wash/dry all clothing on high heat before treatment. Your technician will provide a detailed preparation checklist.",
      },
      {
        q: "How did I get bed bugs?",
        a: "Bed bugs are excellent hitchhikers. Common sources include hotels, public transportation, movie theaters, secondhand furniture, and visitors to your home. They can travel on luggage, clothing, and bags — no level of cleanliness prevents them.",
      },
    ],
    relatedSlugs: ["spider-control", "flea-tick-treatment", "cockroach-control"],
  },
  {
    slug: "cockroach-control",
    name: "Cockroach Control",
    emoji: "🪳",
    category: "insects",
    urgency: "high",
    tagline: "Eliminate cockroach infestations fast — before they multiply",
    heroDesc:
      "A single female cockroach can produce up to 300 offspring in a year. German cockroaches — the most common indoor species — reproduce so fast that a small problem becomes a severe infestation within weeks. Our gel bait and IGR (insect growth regulator) program stops breeding and eliminates colonies within days.",
    priceRange: "$179 – $399",
    signs: [
      "Cockroach droppings — small, dark, resembling coffee grounds",
      "Egg cases (oothecae) — small, brown, capsule-shaped — behind appliances",
      "Musty, oily odor in the kitchen or bathrooms",
      "Seeing live roaches during the day (indicates heavy infestation)",
      "Grease smear marks along walls and baseboards",
    ],
    treatments: [
      {
        name: "Gel Bait Application",
        desc: "High-efficacy gel bait placed in harborage areas kills roaches within hours of feeding, with secondary kill through bait transfer within the colony.",
      },
      {
        name: "Insect Growth Regulator (IGR)",
        desc: "IGR prevents juveniles from reaching reproductive maturity, stopping population growth and breaking the breeding cycle.",
      },
      {
        name: "Crack & Crevice Treatment",
        desc: "Residual insecticide applied to voids, behind appliances, and in wall gaps targets roaches in their harborage areas.",
      },
      {
        name: "Glue Board Monitoring",
        desc: "Strategically placed monitor boards track activity levels and verify treatment effectiveness over follow-up visits.",
      },
    ],
    prevention: [
      "Fix all water leaks — cockroaches need moisture to survive",
      "Keep kitchen clean — wash dishes daily, wipe down counters every night",
      "Store food in sealed containers; never leave food out overnight",
      "Seal gaps around pipes, drains, and under sinks",
      "Remove cardboard boxes — roaches love to nest in them",
    ],
    faqs: [
      {
        q: "How fast can cockroaches multiply?",
        a: "Extremely fast. A German cockroach reaches breeding maturity in 45 days and produces an egg case every 6 weeks with 30–40 eggs per case. A pair of roaches can become thousands within a year.",
      },
      {
        q: "Are cockroaches dangerous to my health?",
        a: "Yes. Cockroaches carry and spread over 33 kinds of bacteria, including Salmonella and E. coli. Their shed skins and feces are major triggers for asthma and allergies, especially in children.",
      },
      {
        q: "How long until roaches are gone after treatment?",
        a: "Gel bait works fast — significant reduction within 3–5 days. Full elimination of a moderate infestation typically takes 1–2 treatments over 2–4 weeks.",
      },
      {
        q: "I only see them at night — is my infestation bad?",
        a: "Cockroaches are nocturnal, so seeing them only at night is normal. Seeing them during the day signals a heavy infestation where competition for harborage is forcing them out of hiding.",
      },
    ],
    relatedSlugs: ["ant-control", "fly-control", "silverfish-control"],
  },
  {
    slug: "flea-tick-treatment",
    name: "Flea & Tick Treatment",
    emoji: "🐾",
    category: "insects",
    urgency: "high",
    tagline: "Protect your family and pets from fleas and ticks year-round",
    heroDesc:
      "Fleas can survive for months without a host and jump 150 times their own length. A few fleas on your pet can turn into a full home infestation within weeks. Ticks are a serious health risk, transmitting Lyme disease, Rocky Mountain spotted fever, and more. Our combined interior and yard treatment eliminates both at all life stages.",
    priceRange: "$199 – $449",
    signs: [
      "Pets scratching, biting, or grooming excessively",
      "Finding small, fast-moving dark dots on pet fur or bedding",
      "Tiny red bites around ankles and lower legs",
      "Flea dirt (dark specks) on pet skin or white paper test",
      "Ticks found on family members or pets after being outdoors",
    ],
    treatments: [
      {
        name: "Interior Flea Treatment",
        desc: "Full-room treatment with adulticide and IGR targets adult fleas on floors, furniture, and pet areas, plus breaks the egg-to-adult breeding cycle.",
      },
      {
        name: "Yard Spray Program",
        desc: "Targeted yard treatment focusing on shaded, moist areas, leaf litter, and fence lines where fleas and ticks concentrate.",
      },
      {
        name: "Pet Coordination Guidance",
        desc: "We coordinate with your vet's on-pet treatment — professional pest control combined with on-pet products is essential for full eradication.",
      },
      {
        name: "Perimeter Tick Control",
        desc: "Residual barrier spray along yard edges, wooded areas, and tall grass significantly reduces tick populations throughout the season.",
      },
    ],
    prevention: [
      "Keep pets on year-round flea and tick prevention prescribed by your vet",
      "Vacuum frequently and empty vacuum bags outdoors immediately",
      "Wash pet bedding weekly in hot water",
      "Mow lawn regularly and keep grass short, especially at yard edges",
      "Check all family members and pets after spending time outdoors",
    ],
    faqs: [
      {
        q: "Why do I have fleas even though I don't have pets?",
        a: "Fleas can enter your home through previous pet owners, wild animals passing through your yard (raccoons, opossums, stray cats), or on clothing and shoes. Vacant homes can have dormant flea pupae that hatch when movement is detected.",
      },
      {
        q: "How many treatments are needed for fleas?",
        a: "Most infestations require 2–3 treatments 2–3 weeks apart, due to the pupal stage which is immune to insecticides. The IGR in our treatment prevents new pupae from developing, breaking the cycle.",
      },
      {
        q: "What tick species are most dangerous in the USA?",
        a: "The blacklegged tick (deer tick) transmits Lyme disease in the Northeast and Midwest. The lone star tick is prevalent in the South. The American dog tick transmits Rocky Mountain spotted fever. All species require professional yard treatment programs.",
      },
      {
        q: "Do I need to treat indoors for ticks?",
        a: "Ticks don't typically infest homes, but can be brought in on pets or clothing. Our primary tick control focus is outdoor yard treatment, supplemented by on-pet prevention from your veterinarian.",
      },
    ],
    relatedSlugs: ["mosquito-control", "ant-control", "wildlife-removal"],
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    emoji: "🦟",
    category: "insects",
    urgency: "medium",
    tagline: "Take back your yard with seasonal mosquito reduction programs",
    heroDesc:
      "Mosquitoes breed in as little as a bottle cap of water and can travel up to 3 miles from their breeding site. Beyond the discomfort, mosquitoes transmit West Nile virus, Zika, Eastern Equine Encephalitis, and heartworm to pets. Our targeted yard spray programs reduce mosquito populations by up to 90% and protect your outdoor spaces all season.",
    priceRange: "$89 – $199 per treatment",
    signs: [
      "Mosquito bites during and after outdoor time in your yard",
      "Visible mosquitoes at dusk and dawn near vegetation",
      "Standing water in gutters, pots, tarps, birdbaths, or low areas",
      "Increased mosquito activity after rainfall",
      "Mosquitoes present indoors through gaps in screens",
    ],
    treatments: [
      {
        name: "Residual Barrier Spray",
        desc: "Targeted application to mosquito resting sites — foliage, shrubs, tree canopies, and shaded areas — using pyrethrin or permethrin. Effective for 21–30 days.",
      },
      {
        name: "Larvicide Treatment",
        desc: "BTi (Bacillus thuringiensis israelensis) dunks placed in standing water kill larvae before they become adults. Non-toxic to humans, pets, and beneficial insects.",
      },
      {
        name: "Seasonal Protection Plan",
        desc: "Monthly or every-3-week service from April through October provides continuous protection throughout mosquito season.",
      },
      {
        name: "Source Reduction Audit",
        desc: "We identify and help eliminate breeding sites on your property — clogged gutters, low-lying areas, and hidden water collection points.",
      },
    ],
    prevention: [
      "Eliminate all standing water on your property every 5–7 days",
      "Clean and change birdbath water weekly",
      "Keep gutters clean and flowing freely",
      "Maintain pools with proper chlorine and circulation",
      "Install or repair window and door screens",
    ],
    faqs: [
      {
        q: "How effective is mosquito barrier spray?",
        a: "Our barrier spray program typically reduces yard mosquito populations by 85–95% on treatment day and maintains a 60–80% reduction through the full 21–30 day residual period. Results vary based on breeding pressure from surrounding areas.",
      },
      {
        q: "Is the treatment safe for bees and butterflies?",
        a: "We apply treatments early morning or late evening when pollinators are least active. We avoid treating flowering plants. BTi larvicide is completely safe for beneficial insects, fish, and wildlife.",
      },
      {
        q: "When should I start mosquito treatments?",
        a: "We recommend starting treatments when temperatures consistently exceed 50°F — typically March/April in the South and May in northern states. Early season treatment prevents populations from building up.",
      },
      {
        q: "Can you get rid of mosquitoes permanently?",
        a: "Complete elimination is not possible since new mosquitoes migrate from neighboring properties. Our goal is significant reduction — enough to comfortably enjoy your yard. Seasonal programs provide continuous protection.",
      },
    ],
    relatedSlugs: ["flea-tick-treatment", "fly-control", "wildlife-removal"],
  },
  {
    slug: "termite-treatment",
    name: "Termite Treatment",
    emoji: "🪲",
    category: "insects",
    urgency: "critical",
    tagline: "Protect your home's structure with proven termite solutions",
    heroDesc:
      "Termites cause over $5 billion in property damage annually in the United States — more than fires and floods combined. Most homeowner insurance policies do not cover termite damage. Subterranean termites, the most destructive species, can destroy a floor joist in as few as 3 years of undetected activity. Early detection and treatment is critical.",
    priceRange: "$499 – $2,999",
    signs: [
      "Mud tubes on foundation walls, piers, or crawlspace beams",
      "Hollow-sounding wood when tapped",
      "Blistering or bubbling wood floors or paint",
      "Discarded wings from termite swarmers near windows",
      "Small piles of frass (wood-colored droppings) near baseboards",
    ],
    treatments: [
      {
        name: "Termidor Liquid Barrier",
        desc: "Industry's most effective liquid termiticide. Applied around the foundation perimeter, it creates a continuous treated zone that termites pass through and transfer to colony members. Up to 10-year effectiveness.",
      },
      {
        name: "Sentricon Bait System",
        desc: "In-ground bait stations placed around your property contain cellulose bait that termites prefer over wood. Slow-acting active ingredient spreads through the colony, eliminating it completely.",
      },
      {
        name: "Wood Treatment (Borate)",
        desc: "Boracare or Tim-bor applied directly to wood framing kills active termites and prevents future infestations. Ideal for new construction and exposed wood in crawlspaces.",
      },
      {
        name: "Localized Treatment",
        desc: "For isolated infestations, direct foam or liquid injection into infested wood and galleries provides targeted elimination without full perimeter treatment.",
      },
    ],
    prevention: [
      "Maintain a gap between soil and wood framing — never let wood contact the ground",
      "Fix all plumbing leaks and moisture problems under the home",
      "Keep mulch and wood debris away from the foundation",
      "Store firewood at least 20 feet from the home",
      "Schedule annual termite inspections — early detection dramatically reduces damage",
    ],
    faqs: [
      {
        q: "What's the difference between termite swarmers and flying ants?",
        a: "Termite swarmers have equal-length wings, a straight waist, and straight antennae. Flying ants have unequal wings, a pinched waist, and elbowed antennae. Finding swarmers indoors is a serious warning sign of an active colony.",
      },
      {
        q: "How long does Termidor last?",
        a: "Termidor SC applied as a liquid barrier has been proven effective for up to 10 years in real-world conditions. We back our Termidor treatments with a renewable 1-year warranty and annual inspection.",
      },
      {
        q: "Is termite treatment safe for my family and pets?",
        a: "Yes. Termidor is applied to soil around the exterior foundation and is not accessible to humans or pets once applied. Bait station systems are completely enclosed and child and pet safe.",
      },
      {
        q: "Do I need to leave my home during termite treatment?",
        a: "For liquid perimeter treatments and bait stations, no evacuation is required. For any localized injection work in living spaces, we may ask you to vacate for 4–6 hours. Full tent fumigation (for drywood termites) requires a 24–72 hour evacuation.",
      },
    ],
    relatedSlugs: ["ant-control", "wildlife-removal", "mice-control"],
  },
  {
    slug: "spider-control",
    name: "Spider Control",
    emoji: "🕷️",
    category: "insects",
    urgency: "medium",
    tagline: "Eliminate dangerous spiders and web infestations throughout your home",
    heroDesc:
      "Most spiders are harmless — but black widows and brown recluse spiders pose genuine medical risks, particularly to children and the elderly. Beyond safety, spider populations in and around your home signal a broader pest issue — spiders only live where other insects do. Our web removal and residual treatment eliminates spiders and reduces the food supply that draws them in.",
    priceRange: "$149 – $299",
    signs: [
      "Webs in corners, along walls, in garages, and under furniture",
      "Red hourglass marking (black widow) under windowsills and in dark corners",
      "Violin-shaped marking (brown recluse) in closets, stored boxes, and crawlspaces",
      "Egg sacs attached to webs or hidden surfaces",
      "Spider sightings increasing in frequency",
    ],
    treatments: [
      {
        name: "Web Removal & Exterior Dewebbing",
        desc: "Physical removal of all accessible webs and egg sacs from eaves, windows, garage doors, and exterior walls, immediately reducing the active spider population.",
      },
      {
        name: "Residual Barrier Spray",
        desc: "Pyrethroid-based residual applied to the exterior foundation, entry points, and crawlspace creates a kill zone that eliminates spiders on contact for 60–90 days.",
      },
      {
        name: "Interior Treatment",
        desc: "Targeted crack and crevice treatment in garages, basements, attics, and closets eliminates hiding spiders and targets egg sacs.",
      },
      {
        name: "General Pest Reduction",
        desc: "Reducing the general insect population around your home removes the food source that sustains spider populations long-term.",
      },
    ],
    prevention: [
      "Shake out shoes, gloves, and clothing stored in closets or garages",
      "Reduce exterior lighting — light attracts insects, which attract spiders",
      "Seal cracks around doors, windows, and utility penetrations",
      "Declutter storage areas — cardboard boxes are prime brown recluse habitat",
      "Inspect firewood before bringing it indoors",
    ],
    faqs: [
      {
        q: "How do I identify a brown recluse vs. a harmless spider?",
        a: "Brown recluse spiders have a distinctive violin-shaped marking on their back and 6 eyes (rather than 8) arranged in three pairs. They are typically 6–20mm, tan to brown, with no distinctive markings on the abdomen. When in doubt, do not handle any spider — call us for identification.",
      },
      {
        q: "Are spider bites dangerous?",
        a: "Most spider bites cause only minor irritation. However, black widow and brown recluse bites can cause serious symptoms. Black widow venom is neurotoxic; brown recluse venom causes necrotic tissue damage. Both require prompt medical attention.",
      },
      {
        q: "Will killing spiders help with other pest problems?",
        a: "Spiders actually reduce other insect populations by hunting them. However, a spider infestation indicates a high insect population. Addressing the underlying insect issue will ultimately reduce both.",
      },
      {
        q: "How often should I treat for spiders?",
        a: "Quarterly exterior treatments maintain effective spider control year-round. Our Home Shield plan includes spider control as part of a comprehensive 25+ pest program.",
      },
    ],
    relatedSlugs: ["ant-control", "cockroach-control", "silverfish-control"],
  },
  {
    slug: "wasp-bee-removal",
    name: "Wasp & Bee Removal",
    emoji: "🐝",
    category: "insects",
    urgency: "critical",
    tagline: "Safe, fast removal of stinging insect nests from your property",
    heroDesc:
      "Wasp and bee stings kill approximately 100 Americans annually through anaphylactic shock. A disturbed yellowjacket or paper wasp colony can sting hundreds of times in seconds. Active nests on or near your home are an immediate safety risk that require professional removal — DIY attempts often trigger dangerous mass stinging events.",
    priceRange: "$149 – $399",
    signs: [
      "Visible nest under eaves, in soffits, or attached to the exterior",
      "Increased wasp/bee activity near a specific area of your home",
      "Hearing buzzing sounds inside walls or ceilings",
      "Honey or wax staining on walls or ceilings (honey bee colony inside wall)",
      "Bald-faced hornets' large gray football-shaped nests in trees or shrubs",
    ],
    treatments: [
      {
        name: "Direct Nest Treatment & Removal",
        desc: "Night treatment when most workers are in the nest. Insecticide dust or spray applied directly to nest entrance, followed by physical removal and sealing of the nesting void.",
      },
      {
        name: "Bee Swarm Removal",
        desc: "For honey bee swarms, we work with local beekeepers to relocate bees rather than destroy them wherever possible — protecting pollinators while removing the hazard.",
      },
      {
        name: "Wall Void Treatment",
        desc: "For colonies established inside wall cavities, insecticide foam or dust injected through small drill holes eliminates the colony. Structural access may be needed for honey bee colonies.",
      },
      {
        name: "Perimeter Prevention",
        desc: "Residual treatment to eaves, soffits, and previous nesting sites discourages re-establishment during nesting season.",
      },
    ],
    prevention: [
      "Seal all gaps, cracks, and openings in your home's exterior before spring",
      "Check eaves, gutters, and vents regularly during April–August",
      "Keep garbage cans tightly sealed — yellowjackets are attracted to food waste",
      "Avoid wearing sweet-smelling perfumes and bright floral colors when outdoors",
      "Fill rodent burrows that could be used by ground-nesting yellowjackets",
    ],
    faqs: [
      {
        q: "Should I try to remove a nest myself?",
        a: "We strongly advise against DIY nest removal. Disturbing a yellowjacket, wasp, or hornet nest without proper protective equipment can provoke a mass attack. Stings can be life-threatening for people with allergies. Our technicians have full PPE and professional-grade products.",
      },
      {
        q: "What's the difference between wasps, yellowjackets, and hornets?",
        a: "Yellowjackets are a type of wasp known for aggressive behavior, especially in late summer. Paper wasps build open-cell paper nests. Bald-faced hornets are large black and white wasps. Honey bees are beneficial pollinators. Each requires a different removal approach.",
      },
      {
        q: "Will the wasps come back after nest removal?",
        a: "After complete nest removal and void sealing, the same colony cannot return. However, new queens may attempt to establish new nests in the same areas the following spring. A preventive spray in early spring discourages re-establishment.",
      },
      {
        q: "Is it safe to remove nests during the day?",
        a: "It is safer to treat nests at night when foraging workers have returned and temperatures are cooler, making wasps less active and aggressive. Our technicians are trained in night treatment protocols.",
      },
    ],
    relatedSlugs: ["spider-control", "ant-control", "mosquito-control"],
  },
  {
    slug: "fly-control",
    name: "Fly Control",
    emoji: "🪰",
    category: "insects",
    urgency: "medium",
    tagline: "Eliminate fly infestations and identify breeding sources",
    heroDesc:
      "Flies can spread over 65 diseases including Salmonella, E. coli, typhoid fever, and cholera by landing on food and surfaces. A single house fly can lay up to 500 eggs in her short lifetime. A successful fly control program requires both killing adult flies and eliminating the organic breeding sources — without source elimination, fly populations will continue indefinitely.",
    priceRange: "$149 – $349",
    signs: [
      "Cluster of flies around food preparation areas or garbage",
      "Small dark drain flies emerging from sink or floor drains",
      "Fruit flies hovering around ripe fruit, garbage, or wine bottles",
      "Dead flies accumulating on windowsills — indicator of cluster fly activity",
      "Maggots found in garbage, compost, or under decks",
    ],
    treatments: [
      {
        name: "Source Identification & Elimination",
        desc: "Finding and eliminating breeding sites is essential. We inspect drains, garbage areas, standing water, decomposing organic matter, and structural voids.",
      },
      {
        name: "Fly Light Traps (ILTs)",
        desc: "Commercial-grade insect light traps capture adults continuously without chemicals. Essential for food service environments and kitchens.",
      },
      {
        name: "Drain Treatment",
        desc: "For drain flies and phorid flies, bio-enzyme drain treatment destroys the organic film they breed in, eliminating the source rather than just the adults.",
      },
      {
        name: "Residual & Space Spray",
        desc: "For heavy infestations, residual contact treatment and space spray provide immediate knockdown of adult fly populations.",
      },
    ],
    prevention: [
      "Empty and clean garbage cans regularly — never let organic waste build up",
      "Clean floor drains monthly with bio-enzyme drain cleaner",
      "Store ripe fruit in the refrigerator",
      "Fix window and door screen damage immediately",
      "Clean up pet waste daily from yards",
    ],
    faqs: [
      {
        q: "Why do I have tiny flies coming from my drains?",
        a: "Drain flies (moth flies) and phorid flies breed in the organic slime film that accumulates in sink drains, floor drains, and garbage disposals. They cannot be eliminated by killing adults alone — the drain slime must be removed with enzyme treatment.",
      },
      {
        q: "Are fruit flies and drain flies the same thing?",
        a: "No. Fruit flies are slightly larger, yellow-brown with red eyes, and breed in fermenting fruit, sugary liquids, and moist garbage. Drain flies are small, moth-like, and breed exclusively in drain organic matter. Both require source elimination.",
      },
      {
        q: "What are cluster flies and why are they in my attic?",
        a: "Cluster flies are larger than house flies and overwinter in large numbers in wall voids and attics. They emerge in late winter/early spring when temperatures warm. Treatment involves attic treatments in early fall before they enter.",
      },
      {
        q: "How do I prevent maggots in my garbage?",
        a: "Maggots are fly larvae developing in garbage. Prevention: double-bag meat and fish scraps, keep garbage cans tightly lidded, rinse cans with bleach water weekly, and take garbage out frequently during warm months.",
      },
    ],
    relatedSlugs: ["cockroach-control", "ant-control", "mosquito-control"],
  },
  {
    slug: "moth-control",
    name: "Moth Control",
    emoji: "🦋",
    category: "insects",
    urgency: "medium",
    tagline: "Protect your pantry and clothing from destructive moth infestations",
    heroDesc:
      "There are two very different moth pest problems: pantry moths (Indian meal moths) that infest dried foods and grains, and clothes moths that destroy wool, silk, cashmere, and other natural fiber clothing. Both require specific identification and targeted treatment — the same approach does not work for both species.",
    priceRange: "$149 – $299",
    signs: [
      "Webbing inside dried food packages — cereals, flour, pasta, pet food",
      "Small larvae or caterpillars in pantry food containers",
      "Holes in wool, cashmere, silk, or fur clothing or rugs",
      "Adult moths flying near kitchen or bedroom closets",
      "Silken threads or cocoons in wardrobe corners or pantry shelves",
    ],
    treatments: [
      {
        name: "Pantry Inspection & Disposal",
        desc: "Complete pantry audit to identify and dispose of all infested products — the only way to eliminate the food source and break the breeding cycle.",
      },
      {
        name: "Pheromone Traps",
        desc: "Species-specific pheromone traps capture adult males, reducing breeding and confirming successful elimination.",
      },
      {
        name: "Residual Treatment",
        desc: "Crack and crevice spray in pantry shelves, closet baseboards, and stored clothing areas kills larvae in hiding.",
      },
      {
        name: "Freezing Protocol",
        desc: "Suspect clothing and natural fiber items can be sealed and frozen at 0°F for 72 hours to kill all moth life stages without chemical exposure.",
      },
    ],
    prevention: [
      "Store all dried goods in airtight glass or hard plastic containers",
      "Regularly rotate pantry stock — use oldest products first",
      "Store wool and natural fiber clothing in sealed garment bags",
      "Cedar blocks repel adult clothes moths but don't kill larvae or eggs",
      "Vacuum closets, carpet edges, and under furniture regularly",
    ],
    faqs: [
      {
        q: "How did moths get into my sealed food packages?",
        a: "Indian meal moths can be present in packaging from the grocery store or distribution warehouse. They often enter homes through infested products. Always inspect dried goods at purchase and transfer to sealed containers.",
      },
      {
        q: "Can moths damage synthetic clothing?",
        a: "No. Clothes moths specifically target natural animal fibers — wool, cashmere, silk, mohair, fur, and feathers. Synthetic fabrics are immune. However, blended fabrics with natural fiber content can be attacked.",
      },
      {
        q: "Do moth balls work?",
        a: "Mothballs (naphthalene or paradichlorobenzene) can kill moths and larvae when used in sealed containers with clothing. However, they are toxic to humans and pets and should not be used in living spaces. We recommend sealed garment bags and professional treatment over mothballs.",
      },
      {
        q: "How long does it take to get rid of a moth infestation?",
        a: "After disposal of infested food and treatment, pantry moth infestations typically clear within 2–4 weeks. Clothes moth infestations may take multiple treatments over 6–8 weeks due to pupae in difficult-to-reach areas.",
      },
    ],
    relatedSlugs: ["silverfish-control", "cockroach-control", "ant-control"],
  },
  {
    slug: "silverfish-control",
    name: "Silverfish Control",
    emoji: "🐠",
    category: "insects",
    urgency: "low",
    tagline: "Eliminate silverfish and protect books, wallpaper, and clothing",
    heroDesc:
      "Silverfish are moisture-loving, nocturnal insects that feed on starchy materials — paper, book bindings, wallpaper paste, clothing, and cotton fabrics. While they pose no direct health risk, a silverfish infestation indicates excessive moisture in your home and will cause progressive damage to documents and personal property. They are also notoriously difficult to eliminate without professional treatment due to their secretive habits.",
    priceRange: "$129 – $249",
    signs: [
      "Yellowish stains or small holes in books, wallpaper, or clothing",
      "Tiny pepper-like black feces near bookshelves, closets, or baseboards",
      "Silver, fish-shaped insects visible at night in bathrooms or basements",
      "Shed skin scales found near harborage areas",
      "Irregular feeding marks on paper and fabric items",
    ],
    treatments: [
      {
        name: "Perimeter Residual Treatment",
        desc: "Insecticide applied to baseboards, closet edges, and wall voids creates a contact kill zone for silverfish moving between harborage and feeding areas.",
      },
      {
        name: "Diatomaceous Earth Application",
        desc: "Food-grade DE dusted into wall voids, attics, and crawlspaces provides long-lasting residual control in difficult-to-reach areas.",
      },
      {
        name: "Moisture Reduction Assessment",
        desc: "We identify and document the moisture sources driving the infestation — plumbing leaks, poor ventilation, condensation — and provide remediation recommendations.",
      },
      {
        name: "Bait Stations",
        desc: "Silverfish boric acid bait stations placed in closets and bathrooms provide ongoing control between service visits.",
      },
    ],
    prevention: [
      "Use a dehumidifier in basements, bathrooms, and attics to keep humidity below 50%",
      "Fix all plumbing leaks and improve ventilation",
      "Store books, photos, and documents in sealed plastic containers",
      "Seal cracks in foundation walls and around pipes",
      "Reduce cardboard clutter — silverfish use it for both food and harborage",
    ],
    faqs: [
      {
        q: "Are silverfish harmful to humans?",
        a: "No. Silverfish do not bite humans and do not transmit diseases. Their shed scales can trigger allergic reactions in some sensitive individuals. Their primary damage is to property — paper, books, wallpaper, and clothing.",
      },
      {
        q: "Why do I keep finding silverfish in my bathtub?",
        a: "Bathtubs are a classic silverfish trap — silverfish enter in search of moisture and cannot climb the slick porcelain surface. Finding them in your tub indicates an active population in your bathroom walls or under the floor.",
      },
      {
        q: "Can silverfish infest a whole house?",
        a: "Yes. While they concentrate in moist areas initially, an established infestation can spread throughout the home as population pressure pushes them into new areas. Whole-home treatment is more effective than spot treatment.",
      },
      {
        q: "How do I know if I have silverfish or firebrats?",
        a: "Both are similar small, wingless insects. Silverfish prefer cool, moist conditions and are silver-gray. Firebrats are mottled gray and prefer hot, dry environments — furnace rooms, hot water heater closets, and attics near roof vents.",
      },
    ],
    relatedSlugs: ["ant-control", "spider-control", "moth-control"],
  },
  {
    slug: "earwig-control",
    name: "Earwig Control",
    emoji: "🦂",
    category: "insects",
    urgency: "low",
    tagline: "Remove earwig invasions from gardens and living spaces",
    heroDesc:
      "Earwigs are moisture-seeking insects that invade homes during hot, dry weather or heavy rain. Despite the frightening pincers (cerci), earwigs are mostly harmless to humans — but they can damage seedlings and soft garden plants, and their mass invasions indoors are disturbing and hard to stop without professional perimeter treatment.",
    priceRange: "$129 – $249",
    signs: [
      "Earwigs found in moist areas — bathrooms, kitchens, basements, laundry rooms",
      "Damage to seedlings, soft flowers, and garden vegetables",
      "Large numbers hiding under mulch, leaf litter, stones, or patio furniture",
      "Finding earwigs indoors, especially near entry points and moisture",
      "Earwigs attracted to exterior lighting at night",
    ],
    treatments: [
      {
        name: "Exterior Perimeter Treatment",
        desc: "Residual insecticide band applied around the foundation, entry points, and mulched areas stops earwigs before they enter.",
      },
      {
        name: "Granular Bait Application",
        desc: "Perimeter granular bait in garden beds and around the foundation provides ongoing control of outdoor populations.",
      },
      {
        name: "Habitat Modification",
        desc: "We identify and recommend removal of mulch, leaf litter, woodpiles, and debris against the foundation that provide earwig harborage.",
      },
      {
        name: "Interior Crack & Crevice",
        desc: "For established interior populations, targeted interior treatment in moist areas and entry points eliminates existing indoor earwigs.",
      },
    ],
    prevention: [
      "Keep mulch pulled back at least 6 inches from the foundation",
      "Remove leaf litter, woodpiles, and dense ground cover near the home",
      "Reduce exterior lighting or switch to yellow bug lights that attract fewer insects",
      "Fix moisture issues and improve drainage along the foundation",
      "Seal gaps around doors, windows, and utility penetrations",
    ],
    faqs: [
      {
        q: "Do earwigs actually crawl into ears?",
        a: "No — this is a myth. The name comes from an old European folk tale. Earwigs do not seek out ears or burrow into humans. They are completely harmless to people.",
      },
      {
        q: "Why do I suddenly have hundreds of earwigs?",
        a: "Earwig populations build up outdoors during spring and summer. When conditions become too hot, dry, or wet, large numbers migrate into homes simultaneously. This typically happens in late summer and early fall.",
      },
      {
        q: "Can earwigs damage my home structure?",
        a: "No. Earwigs do not eat wood or cause structural damage. They may damage soft garden plants but pose no structural risk to your home.",
      },
      {
        q: "How do I stop earwigs from getting into my garden?",
        a: "Earwigs are actually partly beneficial as they eat aphids and decaying matter. However, if they are damaging plants, we can apply targeted perimeter granular treatment and recommend habitat modification away from garden beds.",
      },
    ],
    relatedSlugs: ["ant-control", "silverfish-control", "cricket-control"],
  },
  {
    slug: "cricket-control",
    name: "Cricket Control",
    emoji: "🦗",
    category: "insects",
    urgency: "low",
    tagline: "Stop cricket invasions and the relentless nighttime noise",
    heroDesc:
      "Cricket infestations are most common in late summer and fall when outdoor populations peak and crickets seek warmth indoors. Beyond the maddening nighttime chirping, crickets can damage clothing, paper, rubber items, and even silk. Large invasions can also attract spiders, lizards, and other predators into your home.",
    priceRange: "$129 – $249",
    signs: [
      "Loud chirping at night from inside walls or under appliances",
      "Crickets visible in garages, basements, and around exterior doors",
      "Damage to wool, silk, or cotton fabrics with holes or surface feeding",
      "Large outdoor cricket populations near the foundation in summer",
      "Black, cylinder-shaped cricket frass near harborage areas",
    ],
    treatments: [
      {
        name: "Exterior Perimeter Spray",
        desc: "Residual spray around the foundation, under utility areas, and across entry points eliminates migrating crickets before they enter.",
      },
      {
        name: "Granular Bait Treatment",
        desc: "Perimeter granular cricket bait provides ongoing control throughout the season, particularly effective near heavy vegetation and mulched areas.",
      },
      {
        name: "Interior Treatment",
        desc: "For established indoor populations, treatment in garages, basements, utility rooms, and wall voids eliminates crickets already inside.",
      },
      {
        name: "Light Management",
        desc: "We advise on switching exterior lighting to yellow or sodium vapor bulbs, which attract far fewer crickets than standard white light.",
      },
    ],
    prevention: [
      "Seal all gaps around doors, windows, and the foundation",
      "Switch exterior lights to yellow LED or sodium vapor bulbs",
      "Keep grass and vegetation trimmed and away from the foundation",
      "Reduce mulch and leaf litter adjacent to the home",
      "Store clothing in sealed containers or bags in closets",
    ],
    faqs: [
      {
        q: "Why are crickets suddenly everywhere in fall?",
        a: "In late summer, field cricket populations peak outdoors. As temperatures drop in fall, they migrate en masse seeking warmth — often entering homes through any available gap. This is a predictable seasonal event that perimeter treatment in late summer can significantly reduce.",
      },
      {
        q: "Can crickets damage my clothes?",
        a: "Yes. Crickets can chew holes in wool, silk, synthetic fabrics, and rubber. They are particularly attracted to items soiled with sweat. Stored clothing in garages and basements is at highest risk.",
      },
      {
        q: "Are camel crickets (spider crickets) the same as regular crickets?",
        a: "Camel crickets (also called cave crickets or spider crickets) are large, hump-backed insects common in basements and crawlspaces. They don't chirp but can chew fabrics and become alarming in large numbers. Treatment is similar to field crickets.",
      },
      {
        q: "How do I find where the chirping is coming from?",
        a: "Crickets chirp by rubbing their wings and stop when they sense vibration. Approach slowly without footsteps to locate them. Common hiding spots: inside walls, under appliances, in storage areas, and along basement walls.",
      },
    ],
    relatedSlugs: ["ant-control", "spider-control", "earwig-control"],
  },
  {
    slug: "stink-bug-control",
    name: "Stink Bug Control",
    emoji: "🛡️",
    category: "insects",
    urgency: "low",
    tagline: "Prevent stink bug invasions before they overwinter in your walls",
    heroDesc:
      "Brown marmorated stink bugs have spread to all 50 states and become one of the most problematic fall invaders. They don't bite, sting, or cause structural damage — but they emit a powerful, unpleasant odor when crushed or threatened, and can invade homes by the hundreds. The key is fall exclusion treatment before they enter.",
    priceRange: "$129 – $249",
    signs: [
      "Stink bugs gathering on sunny exterior walls in early fall",
      "Finding large numbers of stink bugs inside attics or wall voids",
      "Adults emerging from walls in late winter/early spring as temperatures warm",
      "Shield-shaped brown bugs near windows, doors, and utility penetrations",
      "Foul odor when bugs are disturbed or crushed",
    ],
    treatments: [
      {
        name: "Fall Perimeter Exclusion Treatment",
        desc: "The most critical treatment — exterior residual spray applied in September/October before stink bugs enter. Creates a barrier that prevents mass overwintering.",
      },
      {
        name: "Structural Exclusion",
        desc: "Sealing gaps in the home's exterior — utility penetrations, window frames, soffit vents, and pipe openings — eliminates entry points permanently.",
      },
      {
        name: "Vacuum Removal",
        desc: "For bugs already inside, we use industrial vacuums equipped with odor filters to collect and remove large numbers without releasing their defensive chemicals.",
      },
      {
        name: "Attic & Wall Treatment",
        desc: "Insecticide dust applied to attic spaces and accessible wall voids kills bugs that have already entered before they emerge into living areas.",
      },
    ],
    prevention: [
      "Schedule perimeter treatment in September — before stink bugs enter",
      "Seal all exterior gaps, vents, and utility penetrations with weather stripping and caulk",
      "Never crush stink bugs indoors — vacuum them instead to avoid the odor",
      "Install door sweeps on all exterior doors",
      "Use caution opening items stored in attics in spring",
    ],
    faqs: [
      {
        q: "When is the best time to treat for stink bugs?",
        a: "Late August through October is the critical window for prevention. Stink bugs aggregate on sun-warmed exterior walls before entering. A perimeter spray during this period is far more effective than trying to remove them after they're inside.",
      },
      {
        q: "Do stink bugs damage my home?",
        a: "No. Stink bugs do not eat wood, damage wiring, or cause structural harm. Their only damage is to garden and agricultural plants. Inside your home, they are a nuisance pest only.",
      },
      {
        q: "Why do stink bugs come back every year?",
        a: "Stink bugs are native to Asia and have no natural predators in the USA. Populations grow each year. Annual fall treatment is needed to maintain effective exclusion as new populations develop outdoors.",
      },
      {
        q: "Are stink bugs harmful to pets?",
        a: "Stink bugs are not toxic to pets, but the defensive chemical they release can cause drooling, vomiting, or mouth irritation if a pet eats one. Keep pets away from collected stink bugs.",
      },
    ],
    relatedSlugs: ["earwig-control", "cricket-control", "boxelder-bug-control"],
  },
  {
    slug: "scorpion-control",
    name: "Scorpion Control",
    emoji: "🦂",
    category: "insects",
    urgency: "critical",
    tagline: "Protect your family from dangerous scorpion stings",
    heroDesc:
      "The bark scorpion — found throughout the desert Southwest — is the only scorpion in the USA with venom dangerous enough to cause severe symptoms, and potentially fatal reactions in young children. Arizona, New Mexico, Nevada, Texas, and California see thousands of stings annually. Scorpions are nocturnal and expert hiders — professional treatment and exclusion is essential for homes in endemic areas.",
    priceRange: "$179 – $399",
    signs: [
      "Seeing scorpions at night, especially in the bathroom or bedroom",
      "UV flashlight reveals scorpions (they fluoresce bright blue-green under UV light)",
      "Scorpions in shoes, clothing, or bedding",
      "Living near desert landscaping, rock walls, or natural desert areas",
      "Crickets or other insects present (scorpions follow their food source)",
    ],
    treatments: [
      {
        name: "Perimeter Residual Treatment",
        desc: "Specialized insecticide formulations with wettable powder or microencapsulated products provide longer-lasting residuals on the porous surfaces scorpions travel on.",
      },
      {
        name: "Bark Treatment",
        desc: "Tree bark, mulch areas, and rock features are treated as primary scorpion harborage sites adjacent to the home.",
      },
      {
        name: "Interior Crack & Crevice",
        desc: "Treatment of baseboards, closets, bathroom cabinets, and utility areas eliminates scorpions that have already entered the home.",
      },
      {
        name: "Exclusion Service",
        desc: "Sealing entry points — particularly around the foundation, plumbing penetrations, and door thresholds — is essential since scorpions can enter through gaps as thin as a credit card.",
      },
    ],
    prevention: [
      "Shake out shoes, gloves, and clothing before wearing — especially in the morning",
      "Check under towels, bedding, and loose items on the floor",
      "Remove rock piles, woodpiles, and debris adjacent to the home",
      "Install door sweeps and seal all foundation gaps",
      "Keep your home free of crickets and other insects that scorpions prey on",
    ],
    faqs: [
      {
        q: "How do I check my home for scorpions at night?",
        a: "Use a UV (black light) flashlight — scorpions fluoresce bright blue-green under UV light, making them easy to spot even when they're camouflaged. Check along baseboards, in closets, under furniture, and around the exterior foundation.",
      },
      {
        q: "What should I do if I'm stung by a bark scorpion?",
        a: "Seek medical attention immediately for bark scorpion stings, especially if the victim is a child, elderly, or has a health condition. Symptoms can include numbness, pain, frothing, trouble swallowing, and breathing difficulty. Anti-venom (Anascorp) is available at most Arizona hospitals.",
      },
      {
        q: "Why can't I just use over-the-counter sprays for scorpions?",
        a: "Scorpions are not killed by many standard insecticides. Their thick cuticle prevents absorption, and they groom themselves less than other insects. Specialized formulations and application to specific harborage areas are required for effective control.",
      },
      {
        q: "How often do I need scorpion treatment?",
        a: "Monthly service is strongly recommended in endemic areas of Arizona, New Mexico, and Nevada. Quarterly service may be sufficient for less severe infestations in Texas and California. Consistency is key.",
      },
    ],
    relatedSlugs: ["spider-control", "cricket-control", "wasp-bee-removal"],
  },
  {
    slug: "boxelder-bug-control",
    name: "Boxelder Bug Control",
    emoji: "🔴",
    category: "insects",
    urgency: "low",
    tagline: "Stop mass boxelder bug invasions from overwintering in your home",
    heroDesc:
      "Boxelder bugs are black and red insects that live outdoors feeding on boxelder, maple, and ash trees. In fall, they aggregate in enormous numbers on sunny surfaces and seek entry into homes to overwinter. While harmless to humans and pets, their sheer numbers and the staining they cause make infestations extremely unpleasant without professional treatment.",
    priceRange: "$129 – $229",
    signs: [
      "Large aggregations of red and black bugs on south-facing walls in fall",
      "Bugs gathering around windows, door frames, and utility penetrations",
      "Finding groups of bugs inside near windows on warm winter days",
      "Red and black insects on or under boxelder, maple, or ash trees",
      "Reddish staining on walls and fabrics from boxelder bug feces",
    ],
    treatments: [
      {
        name: "Exterior Aggregation Treatment",
        desc: "Residual spray applied to exterior aggregation areas in fall kills active adults and discourages new arrivals from nearby trees.",
      },
      {
        name: "Exclusion Treatment",
        desc: "Sealing all gaps in the exterior envelope — utility penetrations, attic vents, window frames — prevents overwintering entry.",
      },
      {
        name: "Indoor Vacuum Removal",
        desc: "For bugs already inside, vacuum removal is recommended over spraying to prevent odor and staining from crushed bugs.",
      },
      {
        name: "Tree-to-Home Perimeter",
        desc: "Treating the zone between host trees and the home breaks the migration path and significantly reduces numbers reaching the exterior.",
      },
    ],
    prevention: [
      "Treat exterior surfaces in September before aggregations form",
      "Seal all entry points before fall",
      "If possible, remove female boxelder trees from your property — they host boxelder bugs",
      "Vacuum aggregations on exterior walls before they enter",
      "Avoid crushing bugs — the liquid they release stains surfaces and fabric",
    ],
    faqs: [
      {
        q: "Are boxelder bugs dangerous?",
        a: "No. Boxelder bugs do not bite humans or pets, do not carry diseases, and do not cause structural damage. Their only harm is aesthetic — staining from feces and the nuisance of large numbers indoors.",
      },
      {
        q: "What trees attract boxelder bugs?",
        a: "Boxelder bugs primarily breed on female boxelder trees (Acer negundo), but also feed on silver and red maple and ash trees. Removing or replacing female boxelder trees can significantly reduce long-term pressure.",
      },
      {
        q: "Why do they come inside in fall?",
        a: "Like stink bugs, boxelder bugs seek warmth to overwinter. They congregate in wall voids, attics, and under siding in fall and emerge in spring. Treatment must be done in early fall — once inside the walls, control is very difficult.",
      },
      {
        q: "Can I spray them with soapy water?",
        a: "Soapy water kills boxelder bugs on contact and is a low-toxicity option for small numbers. However, it has no residual effect and won't address the large populations or prevent entry. Professional residual treatment is needed for significant infestations.",
      },
    ],
    relatedSlugs: ["stink-bug-control", "earwig-control", "cricket-control"],
  },
  {
    slug: "mice-control",
    name: "Mice Control",
    emoji: "🐭",
    category: "rodents",
    urgency: "high",
    tagline: "Eliminate mice and seal every entry point they use",
    heroDesc:
      "Mice can squeeze through a gap the size of a dime, contaminate 10 times more food than they eat, and gnaw through electrical wiring — causing house fires. A single pair can produce up to 60 offspring annually. Our mice control program combines snap trapping, exclusion sealing, and sanitation to eliminate active infestations and prevent all future entry.",
    priceRange: "$249 – $599",
    signs: [
      "Droppings — small, dark, rod-shaped — along walls, behind appliances, in cabinets",
      "Gnaw marks on food packaging, wood, wiring, or furniture",
      "Scratching sounds in walls and ceilings at night",
      "Nesting material — shredded paper, fabric, insulation — in hidden areas",
      "Grease rub marks along walls from oily mouse fur",
    ],
    treatments: [
      {
        name: "Snap Trap Program",
        desc: "High-efficiency snap traps placed in harborage areas, along travel paths, and in wall voids. The safest and most effective trapping method — no poison in living spaces.",
      },
      {
        name: "Full Exclusion Service",
        desc: "Every gap, crack, and opening mice use to enter is identified and sealed using steel wool, hardware cloth, foam, and caulk. This is the only permanent solution.",
      },
      {
        name: "Exterior Bait Station Program",
        desc: "Tamper-resistant rodenticide stations placed around the exterior foundation intercept mice before they enter the structure. Child and pet safe design.",
      },
      {
        name: "Sanitation Consultation",
        desc: "We identify conditions attracting mice — food storage issues, clutter, vegetation contact — and provide a written remediation guide.",
      },
    ],
    prevention: [
      "Store all food (including pet food) in hard, sealed containers",
      "Seal every gap larger than 1/4 inch on your home's exterior with steel wool and caulk",
      "Keep grass trimmed and eliminate brush piles near the foundation",
      "Inspect groceries and delivery boxes before bringing them inside",
      "Keep the garage door closed — the gap at the bottom is a primary entry point",
    ],
    faqs: [
      {
        q: "How do I know if I have mice or rats?",
        a: "Mice droppings are small (3–6mm), dark, and pointed. Rat droppings are much larger (12–20mm). Mice gnaw marks are small and irregular; rat gnaw marks are larger with incisor ridges. Mice are smaller (15–20g) and more common in homes. Rats are larger (150–500g) and more often in basements, garages, and commercial areas.",
      },
      {
        q: "Is rodenticide (poison) safe to use inside my home?",
        a: "We strongly prefer snap traps over interior rodenticide because poisoned mice die inside walls, causing odor problems. Rodenticide is used in exterior, tamper-resistant stations only. Children and pets cannot access the bait in these stations.",
      },
      {
        q: "How many mice do I likely have?",
        a: "If you see one mouse, assume there are many more. Mice are nocturnal and avoid humans — a daytime sighting or frequent evidence means a significant population. Our technician will assess activity levels through feces quantity, gnaw marks, and trap placement.",
      },
      {
        q: "How long does exclusion take?",
        a: "A thorough exclusion of a typical home takes 2–4 hours. We seal all identified entry points and provide a written report. Combined with trapping, exclusion eliminates the active infestation and permanently prevents reentry.",
      },
    ],
    relatedSlugs: ["rat-control", "wildlife-removal", "squirrel-removal"],
  },
  {
    slug: "rat-control",
    name: "Rat Control",
    emoji: "🐀",
    category: "rodents",
    urgency: "critical",
    tagline: "Eliminate rats and protect your home from structural and health risks",
    heroDesc:
      "Rats are among the most dangerous pests in the world, spreading plague, leptospirosis, hantavirus, and Salmonella. Norway rats burrow under foundations and gnaw through structural wood and electrical wiring. Roof rats colonize attics and wall voids. A rat infestation is a serious health and safety emergency requiring immediate professional response.",
    priceRange: "$299 – $799",
    signs: [
      "Large droppings (12–20mm) along walls, in crawlspaces, or in attics",
      "Burrows in soil near the foundation, under slabs, or in garden areas",
      "Gnawed holes in walls, floors, or doors — rats need teeth worn down constantly",
      "Rub marks (dark grease stains) along wall junctions where rats travel",
      "Scratching, rolling sounds in the attic at night (roof rats)",
    ],
    treatments: [
      {
        name: "Large Snap Trap & Live Trap Program",
        desc: "Heavy-duty snap traps in all active areas with daily checking and trap movement to increase catch rates.",
      },
      {
        name: "Exterior Bait Station Circuit",
        desc: "Tamper-resistant, weather-proof bait stations with EPA-registered rodenticide placed around the exterior intercept rats approaching the structure.",
      },
      {
        name: "Full Exclusion & Burrow Sealing",
        desc: "Steel, hardware cloth, and concrete used to seal all entry points. Burrows are treated and filled to prevent re-establishment.",
      },
      {
        name: "Attic Cleanup & Decontamination",
        desc: "For roof rat infestations in attics, we offer feces removal, insulation replacement, and biocide decontamination to eliminate health hazards and odor.",
      },
    ],
    prevention: [
      "Remove all ground-level food sources — fallen fruit, pet food, bird seed on the ground",
      "Secure garbage cans with locking lids",
      "Keep compost bins away from the home in sealed containers",
      "Seal all gaps larger than 1/2 inch on the home's exterior",
      "Maintain a clear zone of at least 2 feet around the foundation",
    ],
    faqs: [
      {
        q: "Norway rats vs. roof rats — what's the difference?",
        a: "Norway (brown) rats are large, heavy-bodied burrowers that live at ground level and in basements/crawlspaces. Roof rats are slender, agile climbers that prefer attics, wall voids, and elevated areas. Treatment placement and exclusion points differ significantly between species.",
      },
      {
        q: "Can rats chew through steel and concrete?",
        a: "Rats cannot chew through heavy-gauge steel (hardware cloth 1/4\" or thicker) or concrete. However, they can chew through wood, plastic, caulk, aluminum, and thin sheet metal. All exclusion materials must be rodent-grade.",
      },
      {
        q: "How do I decontaminate after a rat infestation?",
        a: "Rat urine and feces can harbor hantavirus (airborne when dried waste is disturbed). Always use N95 respirator and gloves when cleaning. Wet feces with bleach solution before disposal. For heavy contamination, we offer professional decontamination services.",
      },
      {
        q: "Will rats come back after treatment?",
        a: "Without comprehensive exclusion, new rats will enter the same entry points within weeks. Our program combines elimination AND exclusion — the only combination that produces lasting results.",
      },
    ],
    relatedSlugs: ["mice-control", "wildlife-removal", "cockroach-control"],
  },
  {
    slug: "wildlife-removal",
    name: "Wildlife Removal",
    emoji: "🦝",
    category: "wildlife",
    urgency: "high",
    tagline: "Humane removal of wildlife from your home and property",
    heroDesc:
      "Wild animals in your home — raccoons, squirrels, opossums, skunks, foxes, and snakes — are not just a nuisance. They can cause thousands of dollars in structural damage, contaminate insulation with disease-carrying feces, and pose direct safety risks to your family. Our licensed wildlife removal specialists provide humane trapping, exclusion, and damage repair.",
    priceRange: "$299 – $1,499",
    signs: [
      "Scratching, thumping, or rolling sounds in attic or walls",
      "Entry holes chewed or torn in roof vents, soffits, or siding",
      "Animal droppings in the attic, crawlspace, or around the exterior",
      "Damaged garden, overturned garbage cans, or displaced landscaping",
      "Skunk odor under the deck or near the foundation",
    ],
    treatments: [
      {
        name: "Live Trap Removal",
        desc: "Humane cage trapping with species-appropriate bait. Animals are relocated per state wildlife regulations to appropriate habitat away from your property.",
      },
      {
        name: "One-Way Exclusion Devices",
        desc: "For some species, a one-way door allows animals to exit the structure but not re-enter — particularly effective for squirrels and raccoons.",
      },
      {
        name: "Structural Exclusion",
        desc: "After removal, all entry points are sealed using heavy-gauge hardware cloth, metal flashing, and appropriate sealants to prevent re-entry.",
      },
      {
        name: "Attic Decontamination",
        desc: "We offer removal of contaminated insulation, feces, and nesting material, followed by antimicrobial fogging to eliminate odor and pathogens.",
      },
    ],
    prevention: [
      "Secure all garbage cans with wildlife-resistant locking lids",
      "Do not leave pet food or water outside overnight",
      "Trim tree branches that overhang or touch the roof",
      "Cap chimney with a commercial-grade chimney cap",
      "Inspect the attic, roof vents, and soffits annually for damage",
    ],
    faqs: [
      {
        q: "Can I remove wildlife myself?",
        a: "Most wildlife is protected by state and federal laws. Trapping, relocating, or killing many species without a license is illegal. Handling wildlife directly risks bites, scratches, and disease exposure. Professional, licensed removal is the correct approach.",
      },
      {
        q: "What diseases can wildlife carry?",
        a: "Raccoons carry raccoon roundworm and leptospirosis. Bats can carry rabies. Skunks carry rabies and distemper. Rodents carry hantavirus. Any animal bite or scratch should be treated as a potential rabies exposure — seek medical attention immediately.",
      },
      {
        q: "Will animals keep coming back after removal?",
        a: "Without exclusion, yes. Removing the animal but leaving entry points open invites new animals immediately. Our program combines removal AND thorough exclusion — this is the only approach that prevents recurrence.",
      },
      {
        q: "Is relocation humane?",
        a: "We follow all state wildlife regulations regarding relocation distances and appropriate habitat. Our goal is always humane treatment — we never recommend lethal control when live trapping and relocation is a viable option.",
      },
    ],
    relatedSlugs: ["squirrel-removal", "raccoon-removal", "bat-removal"],
  },
  {
    slug: "squirrel-removal",
    name: "Squirrel Removal",
    emoji: "🐿️",
    category: "wildlife",
    urgency: "high",
    tagline: "Remove squirrels from your attic before they cause serious damage",
    heroDesc:
      "Squirrels in the attic are one of the most common wildlife complaints in America. They gnaw relentlessly to keep their teeth worn — chewing through electrical wiring, HVAC ductwork, and structural wood. A squirrel entering your attic can cause thousands in damage within weeks. Early removal and tight exclusion stops the problem before it escalates.",
    priceRange: "$299 – $799",
    signs: [
      "Scratching and rapid movement sounds in the attic in the morning and late afternoon",
      "Round or irregular holes (2–4 inch) chewed in fascia, soffits, or roof returns",
      "Squirrel droppings — small, dark, oval — in the attic",
      "Seeing squirrels entering a specific area of the roof or soffit",
      "Damaged wiring or chewed wood in the attic",
    ],
    treatments: [
      {
        name: "Live Trap Removal",
        desc: "Cage traps baited with peanut butter or seeds placed on the roof and at entry points. Animals are removed and relocated per state regulations.",
      },
      {
        name: "One-Way Exclusion Device",
        desc: "A one-way door installed at the primary entry point allows squirrels to exit but not re-enter, clearing the attic without trapping.",
      },
      {
        name: "Full Exclusion Sealing",
        desc: "After confirmed removal, all entry points sealed with 16-gauge hardware cloth, metal flashing, and sealant. Squirrels can chew through wood and foam — only metal exclusion works.",
      },
      {
        name: "Damage Assessment",
        desc: "We inspect attic wiring, insulation, and structural components for squirrel damage and provide a written report for insurance or contractor use.",
      },
    ],
    prevention: [
      "Trim all tree branches to at least 6–8 feet from the roofline",
      "Install metal roof vent covers and chimney caps",
      "Seal all gaps larger than 1 inch on the home's exterior",
      "Install squirrel guards on utility lines near the home",
      "Remove bird feeders that attract squirrels near the home",
    ],
    faqs: [
      {
        q: "How do squirrels get into attics?",
        a: "Squirrels enter through gaps in the roofline — at roof returns, soffits, gable vents, ridge cap gaps, and where dormer roofs meet siding. They also chew new entry points through wood fascia and soffits, especially where there's an existing gap to start from.",
      },
      {
        q: "How long does squirrel removal take?",
        a: "Trapping typically takes 3–7 days to catch all animals. We use one-way devices to speed the process. After confirmed removal, exclusion sealing is completed in one service visit.",
      },
      {
        q: "What happens to squirrel babies in the attic?",
        a: "Squirrels have two litters per year — late winter and mid-summer. If removal is done during the nesting season, we take care not to separate mothers from young. We may adjust the timeline slightly to allow juveniles to become mobile before removal.",
      },
      {
        q: "Can squirrels chew through steel mesh?",
        a: "Squirrels can chew through hardware cloth lighter than 16-gauge. We use 16-gauge (minimum) hardware cloth for all exclusion work. Standard wire mesh and screen are not adequate to exclude squirrels.",
      },
    ],
    relatedSlugs: ["raccoon-removal", "bat-removal", "wildlife-removal"],
  },
  {
    slug: "raccoon-removal",
    name: "Raccoon Removal",
    emoji: "🦝",
    category: "wildlife",
    urgency: "critical",
    tagline: "Safe raccoon removal and attic decontamination by licensed specialists",
    heroDesc:
      "Raccoons are the #1 source of wildlife-related rabies cases in the eastern USA. Beyond the disease risk, a raccoon in your attic can destroy insulation, contaminate your home with roundworm-laden feces, and cause serious structural damage in a matter of weeks. Raccoon roundworm (Baylisascaris procyonis) is a severe health hazard requiring professional decontamination after removal.",
    priceRange: "$499 – $1,499",
    signs: [
      "Heavy thumping and rolling sounds in the attic at night",
      "Large entry holes (4–6 inch+) torn in roof vents or soffits",
      "Raccoon latrines — large piles of feces — in the attic (serious health hazard)",
      "Overturned garbage cans, damaged gardens, or torn lawn (grub hunting)",
      "Raccoon tracks or handprints near the home",
    ],
    treatments: [
      {
        name: "Live Cage Trapping",
        desc: "Large cage traps baited with appropriate attractants. Handled by licensed wildlife specialists with proper protective equipment. Relocated per state regulations.",
      },
      {
        name: "Mother & Young Assessment",
        desc: "During nesting season (spring), we assess for kits. Mother and kits are removed together to prevent family separation and abandoned young.",
      },
      {
        name: "Full Structural Exclusion",
        desc: "Heavy-gauge hardware cloth, metal flashing, and steel screening installed at all entry points. Raccoons can force entry — all materials must be appropriately heavy.",
      },
      {
        name: "Attic Decontamination",
        desc: "Raccoon feces harbor Baylisascaris roundworm — serious risk of human infection through inhalation of dried feces. Professional decontamination, insulation removal, and antimicrobial fogging are essential.",
      },
    ],
    prevention: [
      "Use wildlife-resistant garbage cans with locking lids",
      "Remove outdoor pet food and water at night",
      "Cap your chimney with a heavy-gauge chimney cap",
      "Trim overhanging tree branches",
      "Secure crawlspace vents and foundation openings with heavy-gauge mesh",
    ],
    faqs: [
      {
        q: "Is raccoon feces dangerous?",
        a: "Yes — extremely. Raccoon feces can contain Baylisascaris procyonis roundworm eggs that are highly infectious when inhaled. They also spread leptospirosis. Never clean up raccoon feces without proper respiratory protection. Professional decontamination is strongly recommended.",
      },
      {
        q: "Are raccoons dangerous to my pets?",
        a: "Yes. Raccoons are a primary carrier of rabies, distemper, and parasites. They will attack dogs and cats that threaten them. Keep pets indoors at night if raccoon activity is present in your area.",
      },
      {
        q: "Do raccoons live alone or in groups?",
        a: "Adult raccoons are generally solitary. However, a female with kits will inhabit a space with her young. Groups of raccoons sometimes form in areas with abundant food sources. Each animal must be individually trapped and removed.",
      },
      {
        q: "How much attic damage can raccoons cause?",
        a: "Raccoons can flatten and contaminate 30+ linear feet of attic insulation, tear open HVAC ductwork, and damage wiring in just a few weeks. Average attic restoration costs run $3,000–$8,000. Early removal and decontamination is significantly less expensive.",
      },
    ],
    relatedSlugs: ["squirrel-removal", "bat-removal", "wildlife-removal"],
  },
  {
    slug: "bat-removal",
    name: "Bat Removal",
    emoji: "🦇",
    category: "wildlife",
    urgency: "critical",
    tagline: "Licensed bat exclusion — the only legal method for bat removal",
    heroDesc:
      "Bats are federally protected under the Endangered Species Act and cannot be killed or trapped — they can only be excluded. They are the primary reservoir for rabies in the USA, and their guano (feces) accumulates rapidly and supports the growth of Histoplasma capsulatum fungus, which can cause serious lung disease. Only licensed bat exclusion specialists can legally and safely resolve bat infestations.",
    priceRange: "$799 – $2,999",
    signs: [
      "Bats exiting from gaps in the roofline at dusk",
      "Dark brown staining (guano and urine) on exterior walls below gaps",
      "Strong ammonia odor in the attic (guano accumulation)",
      "Bat droppings — small, dark, crumbly — accumulating below roost",
      "Finding bats inside living spaces (entered through gaps in ceiling fixtures)",
    ],
    treatments: [
      {
        name: "Exclusion Device Installation",
        desc: "One-way exclusion devices (tubes or netting) installed at all entry points allow bats to exit but not re-enter. This is the only legal method and must be done outside maternity season (June–August in most states).",
      },
      {
        name: "Full Perimeter Sealing",
        desc: "After confirmed departure (7–10 days after device installation), all entry points are permanently sealed. Bats can enter through a gap as small as 3/8 inch — thorough inspection is critical.",
      },
      {
        name: "Guano Removal & Decontamination",
        desc: "Professional removal of accumulated bat guano with N95 respiratory protection, followed by antimicrobial fogging to neutralize Histoplasma and eliminate odor.",
      },
      {
        name: "Rabies Exposure Assessment",
        desc: "If a bat has been found in a living space with sleeping individuals, we provide documentation and recommend rabies post-exposure prophylaxis evaluation with your physician.",
      },
    ],
    prevention: [
      "Seal all gaps 3/8 inch or larger on your home's exterior in fall (September–October)",
      "Install chimney caps and vent covers as permanent exclusion",
      "Never attempt to handle a bat — always call a professional",
      "Check attic and eave spaces in spring for early signs of colonization",
      "Leave bats that remain outdoors alone — they are beneficial insect predators",
    ],
    faqs: [
      {
        q: "When can bats legally be excluded?",
        a: "Most states prohibit bat exclusion from June 1 through August 15 (maternity season), when pups cannot fly. Exclusion during this period would trap young inside. We perform exclusion in fall (August 16–October) and spring (April–May). Timing varies by state.",
      },
      {
        q: "What if I find a bat inside my home?",
        a: "Do not touch the bat with bare hands. Confine it to one room, open a window, and call us. If anyone in the home may have been exposed while sleeping (bats can bite without waking people), consult a physician about rabies post-exposure prophylaxis.",
      },
      {
        q: "Is bat guano really dangerous?",
        a: "Yes. Bat guano can harbor Histoplasma capsulatum — a fungus that causes histoplasmosis, a serious lung infection. Dried guano becomes airborne when disturbed. Cleaning requires respiratory protection, and large accumulations require professional decontamination.",
      },
      {
        q: "How many bats can live in a home?",
        a: "Little brown bat colonies in attics commonly range from 20–200 individuals, though colonies of 1,000+ have been documented. Big brown bats typically form smaller colonies. Even 20 bats can produce significant guano accumulation over a season.",
      },
    ],
    relatedSlugs: ["wildlife-removal", "raccoon-removal", "squirrel-removal"],
  },
  {
    slug: "bird-control",
    name: "Bird Control",
    emoji: "🐦",
    category: "wildlife",
    urgency: "medium",
    tagline: "Protect your property from bird damage with humane deterrent solutions",
    heroDesc:
      "Pest birds — pigeons, starlings, house sparrows, and Canada geese — cause over $1 billion in damage annually in the USA. Bird droppings are highly acidic and corrode concrete, metal, and painted surfaces. Nests in HVAC systems and roof vents cause fires and equipment failures. Bird mites from abandoned nests infest homes. We provide humane, effective bird deterrent systems for residential and commercial properties.",
    priceRange: "$299 – $2,499",
    signs: [
      "Heavy bird droppings accumulation on ledges, roofs, HVAC equipment, or vehicles",
      "Birds roosting on rooflines, parapet walls, solar panels, or AC units",
      "Nests in gutters, roof vents, HVAC intakes, or building gaps",
      "Bird mites (tiny crawling insects) near windows and vents after nesting season",
      "Noise and odor from large roosting or nesting populations",
    ],
    treatments: [
      {
        name: "Bird Spike Installation",
        desc: "Stainless steel or polycarbonate spikes installed on ledges, rooflines, and parapet walls prevent landing and roosting without harming birds.",
      },
      {
        name: "Bird Netting Systems",
        desc: "Commercial-grade UV-stabilized netting installed to exclude birds from large areas — building facades, courtyards, loading docks, and agricultural facilities.",
      },
      {
        name: "Visual & Audio Deterrents",
        desc: "Reflective tape, predator silhouettes, and ultrasonic devices supplement physical deterrents for lighter-pressure situations.",
      },
      {
        name: "Nest Removal & Surface Sanitation",
        desc: "Licensed nest and egg removal (under federal migratory bird permits where required) plus pressure washing and antimicrobial treatment of contaminated surfaces.",
      },
    ],
    prevention: [
      "Install bird spikes on all flat ledges and rooflines proactively",
      "Clean gutters regularly to prevent nesting material accumulation",
      "Cap all roof vents and HVAC openings with bird-proof mesh",
      "Remove food sources — secure dumpsters and eliminate standing water",
      "Address light roofing for any bird nesting areas before full colonies establish",
    ],
    faqs: [
      {
        q: "Are bird spikes cruel?",
        a: "No. Bird spikes are specifically designed to be humane. They do not harm birds — they simply make ledges and surfaces uncomfortable to land on, redirecting birds to more suitable locations. They are endorsed by major bird protection organizations as a humane deterrent.",
      },
      {
        q: "Are birds protected by law?",
        a: "Yes. The Migratory Bird Treaty Act protects most bird species. Removing active nests with eggs or hatchlings generally requires a federal permit. Some nuisance species (pigeons, house sparrows, European starlings) are not protected and may be managed more freely.",
      },
      {
        q: "What are bird mites and how do they get in my home?",
        a: "Bird mites are tiny arachnids that feed on bird blood. When birds abandon nests in or near your home (especially in gutters, vents, or soffits), mites migrate indoors seeking a new host. They cause skin irritation but do not reproduce on humans. Removing the nest and treating the area eliminates them.",
      },
      {
        q: "How do I get rid of pigeons specifically?",
        a: "Pigeons require a combination of physical exclusion (spikes, netting) on all roosting and nesting surfaces, plus site modification to eliminate food and water sources. Trapping is available as a supplement but is ineffective long-term without habitat modification.",
      },
    ],
    relatedSlugs: ["wildlife-removal", "squirrel-removal", "bat-removal"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => !!s);
}
