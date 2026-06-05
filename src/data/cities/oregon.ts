import type { CityLocation } from "@/types";

// Oregon seed cities. Pest data reflects the cool, wet marine Pacific Northwest
// climate (Oregon State University Extension).

export const oregonCities: CityLocation[] = [
  {
    slug: "portland",
    name: "Portland",
    state: "Oregon",
    stateSlug: "oregon",
    stateAbbr: "OR",
    tier: "T1",
    population: "~640,000",
    county: "Multnomah County",
    climate: "temperate",
    climateDriver:
      "Portland's cool, wet marine climate, with long damp winters and dry summers, favors moisture pests. Carpenter ants, rodents, and overwintering insects matter more here than heat-driven species.",
    topPests: ["Ants", "Rats", "Spiders", "Stink Bugs", "Wasps"],
    pestProfile: [
      {
        name: "Carpenter and odorous house ants",
        serviceSlug: "ant-control",
        activeSeason: "Spring through fall",
        note: "Carpenter ants thrive in the damp, tunneling into moist or rotting wood, while odorous house ants trail indoors during wet weather hunting sweets.",
      },
      {
        name: "Norway and roof rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round",
        note: "The mild, wet climate keeps rats active all year. Roof rats climb into attics and Norway rats burrow near foundations and drains.",
      },
      {
        name: "Spiders, including giant house and hobo spiders",
        serviceSlug: "spider-control",
        activeSeason: "Most visible in late summer and fall",
        note: "The damp climate suits spiders well, and males become very visible in fall as they wander indoors looking for mates.",
      },
      {
        name: "Brown marmorated stink bugs",
        serviceSlug: "stink-bug-control",
        activeSeason: "Gather on homes in fall to overwinter",
        note: "This invasive stink bug clusters on warm walls in fall and works into wall voids and attics to overwinter, then reappears in spring.",
      },
      {
        name: "Yellowjackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests peak late summer",
        note: "Wasp nests build through the dry summer and turn aggressive around food and trash by late season.",
      },
    ],
    localHook:
      "Portland's pests are the damp-loving kind. The long wet season is exactly what carpenter ants and rodents want, while every fall the invasive stink bugs line up on the sunny side of the house to move in.",
    intro:
      "Pest control in Portland is shaped by the wet, not the heat. The long damp marine climate favors carpenter ants in soft wood, rodents that the mild winters never knock back, and spiders that appear in force each fall. On top of that, the invasive brown marmorated stink bug now gathers on homes every autumn to overwinter. Compared with a hot southern city, there is little mosquito or scorpion pressure here, but the moisture-driven problems are steady, which changes how you protect a home.",
    sections: [
      {
        heading: "Damp-wood ants versus the fall invaders",
        body: "Through the wet months the problem is moisture: carpenter ants in damp framing and rodents sheltering from the rain. By contrast, fall brings the invaders that want to overwinter indoors, stink bugs and spiders moving to the warm side of the house. The two need different handling. Carpenter ants call for treatment plus fixing the damp, whereas the fall invaders are best stopped with exclusion before they pack into the walls.",
      },
      {
        heading: "What are the shield-shaped bugs on my wall?",
        body: "Those are brown marmorated stink bugs, an invasive species that clusters on warm south and west walls in fall, then works into wall voids and attics to overwinter. They reappear indoors on the first warm spring days. They do not bite or breed inside, but they are a real nuisance in numbers. Sealing gaps before fall and treating sunny walls reduces how many get in.",
      },
    ],
    prevention: [
      "Fix leaks, gutters, and damp framing, which is what draws carpenter ants.",
      "Seal gaps and treat sunny walls in early fall to reduce overwintering stink bugs.",
      "Seal foundation and roofline gaps and trim trees back to keep rats out.",
      "Reduce clutter and improve ventilation to limit spiders and moisture pests.",
    ],
    costNote:
      "Because the damp keeps pests active much of the year and fall brings the overwintering invaders, many Portland homes use a recurring plan with fall exclusion built in. A free inspection sets the plan to your property.",
    faqs: [
      {
        question: "Why does Portland have so many carpenter ants?",
        answer:
          "The cool, wet climate keeps wood damp, and carpenter ants nest in moist or rotting wood. Finding them indoors usually points to a leak or damp framing, so lasting control pairs treatment with fixing the moisture source behind them.",
      },
      {
        question: "What are the brown shield-shaped bugs in my house?",
        answer:
          "Those are brown marmorated stink bugs, an invasive species that clusters on warm walls in fall and moves into wall voids and attics to overwinter. They do not bite or breed indoors but are a nuisance in numbers. Sealing gaps and treating sunny walls before fall reduces them.",
      },
      {
        question: "Is Portland's rat problem year-round?",
        answer:
          "Yes. The mild, wet winters never knock the population back the way a hard freeze would. Roof rats climb into attics and Norway rats burrow near foundations, so sealing entry points and trimming vegetation matter all year.",
      },
      {
        question: "Why do I see more spiders in the fall?",
        answer:
          "In late summer and fall, male spiders such as the giant house spider wander indoors looking for mates, so they become much more visible. The damp climate supports plenty of insect prey that keeps spider numbers up. Reducing clutter and sealing gaps helps.",
      },
      {
        question: "Are mosquitoes a problem in Portland?",
        answer:
          "Far less than in hot, humid cities. The cooler marine climate keeps mosquito pressure relatively low, so Portland pest plans focus on carpenter ants, rodents, spiders, and the fall overwintering pests instead.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Gresham", slug: "gresham" },
      { name: "Beaverton", slug: "beaverton" },
      { name: "Hillsboro", slug: "hillsboro" },
    ],
    contentTemplate: "C",
    contentSoul: "comparison",
    metaTitle: "Pest Control in Portland, OR | Carpenter Ants, Rats & Stink Bugs",
    metaDescription:
      "Portland pest control for carpenter ants, Norway and roof rats, spiders, overwintering stink bugs and wasps. Moisture and exclusion focus, free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "salem",
    name: "Salem",
    state: "Oregon",
    stateSlug: "oregon",
    stateAbbr: "OR",
    tier: "T2",
    population: "~174,000",
    county: "Marion County",
    climate: "temperate",
    climateDriver:
      "Salem sits in the Willamette Valley in Marion County, the agricultural and governmental center of Oregon. The Pacific Northwest temperate climate delivers wet winters and dry summers. Heavy winter rainfall creates the moisture conditions that drive carpenter ant activity in wooden structures throughout the valley. Western subterranean termites are present in western Oregon. Oregon State University Extension identifies carpenter ants as the dominant structural pest in the Willamette Valley. Dampwood termites affect older, moisture-damaged wood in the region. Yellow jackets and paper wasps are significant stinging insect pests through the summer. Roof rats and Norway rats are established throughout the Willamette Valley urban corridor.",
    topPests: [
      "Carpenter Ants",
      "Rats",
      "Yellow Jackets",
      "Dampwood Termites",
      "German Cockroaches",
    ],
    pestProfile: [
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "March through October, peak April to June",
        note:
          "Carpenter ants are the primary structural pest in Salem and throughout the Willamette Valley. Oregon State University Extension identifies them as the dominant wood-destroying insect in western Oregon. Salem's wet winters cause moisture to accumulate in wooden sills, frames, and soffits, and carpenter ants exploit this damp wood to establish nests. Finding carpenter ants indoors in spring reliably indicates a moisture issue in the structure as well as an active nest.",
      },
      {
        name: "Rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round, press indoors in fall and winter",
        note:
          "Both Norway rats and roof rats are established throughout the Willamette Valley urban corridor. Roof rats are the more common indoor species in Salem, nesting in attics and wall voids. Norway rats burrow at the foundation. Oregon State University Extension documents rat pressure as significant in the valley's agricultural and urban areas. Fall and winter drive rats into structures for warmth.",
      },
      {
        name: "Yellow jackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests grow May through September, peak August",
        note:
          "Yellow jacket and paper wasp nests build through Salem's summer and reach peak size and aggressiveness in August. Nests under eaves, in soffits, and in the ground around Salem's residential areas are a consistent summer pest concern. The Willamette Valley's warm, dry summers provide good conditions for wasp colony development.",
      },
      {
        name: "Dampwood termites",
        serviceSlug: "termite-treatment",
        activeSeason: "Year-round in affected wood",
        note:
          "Pacific dampwood termites are present in western Oregon and attack wood with elevated moisture content. Unlike subterranean termites, dampwood termites do not require soil contact: they colonize wood that is damp from leaks, poor ventilation, or direct weather exposure. Oregon State University Extension identifies dampwood termites as a significant risk in western Oregon homes with moisture problems.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are the indoor cockroach of concern in Salem, concentrated in the multi-family housing stock and restaurant kitchens. Salem's population growth and the older apartment inventory in the central city sustain German cockroach pressure in the restaurant and hospitality industry.",
      },
    ],
    localHook:
      "Salem's Willamette Valley location means the same heavy winter rains that keep the valley green are also the engine behind the city's most significant pest problem: the carpenter ants that move into damp wood in homes across Marion County every spring. Oregon State University Extension uses western Oregon as the primary reference region for carpenter ant structural pest management.",
    intro:
      "Pest control in Salem is shaped by the Pacific Northwest's moisture. Carpenter ants are the dominant structural pest and they follow the moisture in Willamette Valley homes, moving into damp sills, frames, and soffits. Rats press indoors in fall and winter. Yellow jackets and wasps are a summer concern. Dampwood termites attack moisture-damaged wood across the valley. German cockroaches are the year-round indoor problem in apartments and commercial kitchens. Managing moisture in the structure is the foundation of effective pest control in Salem.",
    sections: [
      {
        heading: "Carpenter ants in the Willamette Valley: moisture is the driver",
        body: "The carpenter ant pattern in Salem is straightforward: the heavy Pacific Northwest rains of fall and winter introduce moisture into wooden construction, and carpenter ants find that moisture and move in. Oregon State University Extension is clear that carpenter ants do not eat wood for nutrition, they tunnel through it to build nests, and they strongly prefer wood that is already damp or damaged. Finding them indoors in spring tells you two things: there is an active carpenter ant nest somewhere in or near the structure, and there is a moisture issue feeding it. The treatment that produces lasting results addresses both. A treatment that kills the ants but leaves the wet wood untouched will see the problem return the following spring.",
      },
      {
        heading: "Rats in Salem: the fall and winter transition indoors",
        body: "Salem's Willamette Valley location and the extensive agricultural areas surrounding the city sustain large rat populations that press into structures each fall. Roof rats are the attic and wall void species, accessing homes from overhanging trees and roof vents. Norway rats burrow at the foundation. Both are well documented throughout the valley by Oregon State University Extension. The management program combines snap trapping in the attic and along travel routes, exterior bait stations around the foundation perimeter, and exclusion sealing of roof vents, soffits, and foundation gaps. Trimming trees back from the roofline removes the primary access for roof rats.",
      },
    ],
    prevention: [
      "Address moisture in wooden sills, frames, and crawlspaces to remove carpenter ant harborage.",
      "Trim trees back from the roofline and seal roof vents to block roof rat entry.",
      "Knock down wasp nests early in the season before they grow to full size.",
      "Schedule an annual moisture and termite inspection for homes with older wooden construction.",
    ],
    costNote:
      "Salem pest control typically involves moisture assessment as part of any carpenter ant program, since treating ants without addressing the moisture usually means retreating the following year. Rat programs combine trapping, exclusion, and exterior bait stations. Year-round programs for cockroaches and general pest control are available. Free inspections assess the specific pressures for your property.",
    faqs: [
      {
        question: "Why do carpenter ants keep coming back to my Salem home?",
        answer:
          "Carpenter ants return because the moisture that drew them in the first time is still present. Oregon State University Extension is clear that carpenter ants prefer damp or damaged wood. Treating the ants without identifying and addressing the moisture source, a roof leak, a crawlspace with poor ventilation, a failing sill, leaves the conditions in place for recolonization the following year. The lasting treatment combines ant control with a moisture assessment and the remediation steps it identifies.",
      },
      {
        question: "Do I have roof rats or Norway rats in my Salem home?",
        answer:
          "If you are hearing activity in the attic, particularly at night, roof rats are the likely species. If activity is in the basement, crawlspace, or at the foundation, Norway rats are more probable. Roof rats are agile climbers that access homes from the roofline through overhanging trees and vents. Norway rats burrow under slabs and enter at the foundation. Both are present in Salem, and treatment placement differs between species.",
      },
      {
        question: "Are dampwood termites different from regular termites in Salem?",
        answer:
          "Yes. Pacific dampwood termites attack wood with elevated moisture content and do not need soil contact, unlike subterranean termites. They colonize wood that is damp from roof leaks, plumbing failures, or poor ventilation. Oregon State University Extension identifies them as a significant risk in western Oregon homes with moisture problems. The best prevention is maintaining dry conditions in wooden construction rather than chemical treatment.",
      },
      {
        question: "When are yellow jackets worst in Salem?",
        answer:
          "Yellow jacket nests build through summer and are largest and most aggressive in August in Salem. They become more assertive around food and trash as the season peaks and worker populations are highest. Nests under eaves, in soffits, and in the ground around decks and gardens are the most common problem locations. Removing nests in June or July, when they are smaller, is much safer than waiting until August.",
      },
      {
        question: "Do I need pest control year-round in Salem?",
        answer:
          "The core year-round concern in Salem is rats and German cockroaches, both of which are active regardless of season. Carpenter ants require spring and summer treatment. Wasps are a summer issue. A year-round general pest program that adapts to the seasonal pressures is the practical approach for most Salem homeowners, with a moisture inspection as the starting point for any carpenter ant or termite concern.",
      },
    ],
    author: "Marcus Reed, Lead Pest Control Technician",
    nearbyCities: [
      { name: "Keizer", slug: "keizer" },
      { name: "Corvallis", slug: "corvallis" },
      { name: "Albany", slug: "albany-or" },
    ],
    contentTemplate: "A",
    contentSoul: "operator",
    metaTitle:
      "Pest Control in Salem, OR | Carpenter Ants, Rats & Yellow Jackets",
    metaDescription:
      "Salem pest control for carpenter ants, roof and Norway rats, yellow jackets, dampwood termites and German cockroaches. Marion County Willamette Valley specialists. Free inspection. Call 1-800-PEST-USA.",
  },
  {
    slug: "eugene",
    name: "Eugene",
    state: "Oregon",
    stateSlug: "oregon",
    stateAbbr: "OR",
    tier: "T2",
    population: "~172,000",
    county: "Lane County",
    climate: "temperate",
    climateDriver:
      "Eugene sits at the southern end of the Willamette Valley in Lane County, where the valley narrows at the confluence of the Willamette and McKenzie rivers. The Pacific temperate climate delivers very wet winters and warm, dry summers. Oregon State University Extension identifies Lane County as within the highest carpenter ant pressure zone in western Oregon. The heavy rainfall introduces moisture into older wooden structures throughout Eugene, driving the carpenter ant activity that defines the city's pest profile. Dampwood termites affect moisture-damaged wood in the region. Rats are present throughout the valley corridor.",
    topPests: [
      "Carpenter Ants",
      "Rats",
      "Yellow Jackets",
      "Spiders",
      "German Cockroaches",
    ],
    pestProfile: [
      {
        name: "Carpenter ants",
        serviceSlug: "ant-control",
        activeSeason: "March through October, peak April to June",
        note:
          "Carpenter ants are the signature pest in Eugene and the rest of Lane County. Oregon State University Extension uses western Oregon as the primary case region for carpenter ant structural pest management. Eugene's heavy winter rainfall and the high proportion of older wooden construction throughout the city create ideal conditions. Trails of large black ants emerging from walls or wooden structures in spring indicate an active nest.",
      },
      {
        name: "Rats",
        serviceSlug: "rat-control",
        activeSeason: "Year-round, press indoors in fall and winter",
        note:
          "Both roof rats and Norway rats are established throughout the Willamette Valley. Eugene's dense urban canopy and the numerous river corridors along the Willamette and McKenzie provide harborage that sustains large outdoor rat populations. Roof rats access attics via overhanging trees. Norway rats burrow at the foundation. Fall and winter drive both species into structures.",
      },
      {
        name: "Yellow jackets and paper wasps",
        serviceSlug: "wasp-bee-removal",
        activeSeason: "Nests grow May through September, peak August",
        note:
          "Yellow jackets and paper wasps are significant summer pests throughout the Willamette Valley. Eugene's parks and residential neighborhoods see consistent wasp nest pressure under eaves, in soffits, and in ground burrows. Nests are largest and most aggressive in August. Removal before this peak is consistently safer and easier.",
      },
      {
        name: "Spiders",
        serviceSlug: "spider-control",
        activeSeason: "Most visible August through October indoors",
        note:
          "Hobo spiders, giant house spiders, and common house spiders are all present in Eugene. Hobo spiders were previously considered medically significant in Oregon, though Oregon State University Extension has updated its guidance to reflect uncertainty about the extent of their bite risk. Giant house spiders and hobo spiders both move indoors in late summer and fall and are common in Eugene's older homes.",
      },
      {
        name: "German cockroaches",
        serviceSlug: "cockroach-control",
        activeSeason: "Year-round indoors",
        note:
          "German cockroaches are the indoor roach concern in Eugene, concentrated in older apartment buildings, restaurant kitchens, and the university-adjacent rental housing near the University of Oregon campus. They spread between units through shared plumbing and walls and require gel bait plus IGR treatment.",
      },
    ],
    localHook:
      "Eugene gets more annual rainfall than most US cities, and that moisture is the direct driver of the carpenter ant populations that make this one of the most carpenter-ant-active cities in the country. Oregon State University Extension uses Lane County as a key reference area for carpenter ant structural pest management research, and the situation on the ground in Eugene is exactly what the researchers are studying.",
    intro:
      "Pest control in Eugene starts with moisture and carpenter ants. The heavy Pacific rainfall creates the damp-wood conditions that carpenter ants exploit, and finding them in a Eugene home in spring is one of the most common calls pest control companies receive in Lane County. Rats are a year-round concern, pressing indoors in fall. Yellow jackets and wasps peak in August. Spiders including hobo and giant house spiders move indoors in late summer. German cockroaches are the indoor concern in rentals and restaurant kitchens. Managing moisture is the foundation of effective structural pest control in Eugene.",
    sections: [
      {
        heading: "Carpenter ants in Eugene: the Lane County standard",
        body: "Eugene's position at the southern end of the Willamette Valley, with very high rainfall and a high proportion of older wooden construction, makes it one of the most carpenter-ant-active cities in Oregon. Oregon State University Extension's research on carpenter ant structural pest management is conducted right here in western Oregon. The pattern repeats every year: heavy winter rains introduce moisture into wooden sills, frames, and soffits, and carpenter ants find that damp wood and establish nests. The spring emergence is the visible moment, but the colony has been established since the previous year. Effective treatment combines elimination of the active colony with identification and remediation of the moisture source that supports it.",
      },
      {
        heading: "Rats in Eugene's river corridors",
        body: "Eugene's Willamette and McKenzie river corridors, the extensive parks system along both rivers, and the urban tree canopy throughout the city sustain year-round rat populations. Roof rats access attics via the overhanging trees in Eugene's older residential neighborhoods. Norway rats burrow at foundations and in the agricultural areas surrounding the city. Fall is the primary movement period into structures, but Eugene's mild climate means rat activity continues year-round. The rat management program combines snap trapping in the attic and along wall travel routes, exterior bait stations around the foundation, and exclusion sealing of roof vents, soffits, and foundation gaps.",
      },
    ],
    prevention: [
      "Address moisture in wooden sills, frames, and crawlspaces to remove the carpenter ant harborage driving Lane County infestations.",
      "Trim trees back from the roofline and seal roof vents to block roof rat access.",
      "Remove yellow jacket nests early in June or July, before they grow to full size.",
      "Reduce clutter in garages and basements to limit spider harborage in late summer.",
    ],
    costNote:
      "Eugene pest control typically includes a moisture assessment as part of any carpenter ant program. Rat programs combine trapping, exclusion, and exterior bait stations. Year-round programs for cockroaches and general pest control are available. Free inspections provide the starting point for any structural pest concern.",
    faqs: [
      {
        question: "Why are carpenter ants so common in Eugene?",
        answer:
          "Eugene gets very high annual rainfall for a Pacific Northwest city, and that moisture is the direct driver of carpenter ant activity. Oregon State University Extension documents Lane County as within the highest carpenter ant pressure zone in western Oregon. Carpenter ants prefer damp or damaged wood for their nests, and Eugene's older wooden housing stock provides an abundance of it. Managing moisture in the structure reduces carpenter ant pressure more reliably than repeated chemical treatment alone.",
      },
      {
        question: "Are hobo spiders dangerous in Eugene?",
        answer:
          "Hobo spiders are present in Eugene and are common in homes in late summer and fall. Oregon State University Extension has updated its guidance to reflect ongoing scientific uncertainty about the extent of hobo spider bite risk, which was previously overstated. Current evidence suggests their venom is not as medically significant as initially believed. Giant house spiders, which look similar, are more commonly encountered and are not medically significant. Professional treatment reduces populations of both species.",
      },
      {
        question: "Do I have roof rats or Norway rats in my Eugene home?",
        answer:
          "Attic activity at night most commonly points to roof rats, which are agile climbers accessing homes from overhanging trees and roof vents. Foundation and crawlspace activity suggests Norway rats, which burrow at ground level. Eugene's river corridors sustain populations of both species. Treatment placement and exclusion approach differ between them, which is why an inspection is the starting point.",
      },
      {
        question: "When are yellow jackets worst in Eugene?",
        answer:
          "Yellow jacket nests build through summer and are at peak size and aggressiveness in August. The Willamette Valley's warm summer conditions support large nests under eaves, in soffits, and in ground burrows. Early-season removal in June or July is significantly safer and easier than treating a mature August nest. Ground nest yellow jackets are particularly aggressive when the nest is disturbed.",
      },
      {
        question: "Do I need year-round pest control in Eugene?",
        answer:
          "The year-round concerns in Eugene are rats and German cockroaches. Carpenter ants require spring and summer treatment. Wasps are a summer issue. Spiders are most active late summer through fall. A year-round general pest program that adapts to Eugene's seasonal pest calendar, with a moisture assessment as the foundation for any structural pest concern, covers most of what Eugene homes need.",
      },
    ],
    author: "Dr. Lena Ortiz, Board-Certified Entomologist",
    nearbyCities: [
      { name: "Springfield", slug: "springfield-or" },
      { name: "Corvallis", slug: "corvallis" },
      { name: "Roseburg", slug: "roseburg" },
    ],
    contentTemplate: "B",
    contentSoul: "neighbor",
    metaTitle:
      "Pest Control in Eugene, OR | Carpenter Ants, Rats & Yellow Jackets",
    metaDescription:
      "Eugene pest control for carpenter ants, roof and Norway rats, yellow jackets, spiders and German cockroaches. Lane County Willamette Valley moisture specialists. Free inspection. Call 1-800-PEST-USA.",
  },
];
