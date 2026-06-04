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
];
