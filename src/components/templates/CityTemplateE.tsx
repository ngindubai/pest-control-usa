import type { CityLocation } from "@/types";
import { Breadcrumb, CallButton, ServiceLinks, NearbyCities, authorByline } from "./parts";
import { heading } from "./headings";

// Template E - Data-Forward. Stats strip hero, TL;DR, master data tables,
// right TL;DR sidebar, FAQ plain list at the very bottom. Reads like a brief.
export default function CityTemplateE({ city }: { city: CityLocation }) {
  const peak =
    city.pestProfile.find((p) => /peak/i.test(p.activeSeason))?.activeSeason ??
    city.pestProfile[0]?.activeSeason ??
    "Varies";

  const stats = [
    { label: "Significant pests", value: String(city.pestProfile.length) },
    { label: "Peak activity", value: peak.replace(/^Peaks?\s*/i, "") },
    { label: "Climate", value: city.climate.replace("-", " ") },
    { label: "County", value: city.county },
  ];

  return (
    <article className="tpl-city-e">
      {/* Stats strip hero */}
      <header className="bg-[var(--color-navy)] px-4 py-8 text-white">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb city={city} />
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
            {city.name}, {city.stateAbbr} Pest Control Brief
          </h1>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-navy-light)] sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-[var(--color-navy)] p-4">
                <div className="font-[family-name:var(--font-heading)] text-xl font-bold capitalize">
                  {s.value}
                </div>
                <div className="text-xs text-blue-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 lg:grid-cols-[1fr_280px]">
        <div>
          {/* TL;DR */}
          <div className="rounded-[var(--radius-card)] border-l-4 border-[var(--color-red)] bg-[var(--color-muted)] p-5">
            <div className="text-xs font-bold uppercase tracking-wide text-[var(--color-red)]">
              In short
            </div>
            <p className="mt-2 leading-relaxed">{city.localHook}</p>
          </div>

          <p className="mt-6 leading-relaxed">{city.intro}</p>

          {/* Master pest table */}
          <h2 className="mt-10 font-[family-name:var(--font-heading)] text-2xl font-bold">
            {heading(city, "E.pestTable")}
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[var(--color-navy)] text-left text-white">
                  <th className="p-2">Pest</th>
                  <th className="p-2">Activity window</th>
                  <th className="p-2">Local risk note</th>
                </tr>
              </thead>
              <tbody>
                {city.pestProfile.map((p, i) => (
                  <tr key={p.name} className={i % 2 ? "bg-[var(--color-cream)]" : "bg-white"}>
                    <td className="p-2 font-medium">{p.name}</td>
                    <td className="p-2 whitespace-nowrap">{p.activeSeason}</td>
                    <td className="p-2">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {city.sections.map((s) => (
            <section key={s.heading} className="mt-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {s.heading}
              </h2>
              <p className="mt-2 leading-relaxed">{s.body}</p>
            </section>
          ))}

          {/* Itemised prevention + cost */}
          <section className="mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
              {heading(city, "E.prevention")}
            </h2>
            <ul className="mt-2 list-inside list-decimal space-y-1">
              {city.prevention.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
              {heading(city, "E.cost")}
            </h2>
            <p className="mt-2 leading-relaxed">{city.costNote}</p>
          </section>

          {/* FAQ plain list at the very bottom */}
          <section className="mt-10 border-t border-[var(--color-muted)] pt-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
              {heading(city, "E.faq")}
            </h2>
            <dl className="mt-4 space-y-4">
              {city.faqs.map((f) => (
                <div key={f.question}>
                  <dt className="font-medium">{f.question}</dt>
                  <dd className="mt-1 text-sm text-[var(--color-slate-custom)]">{f.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="mt-10 text-xs text-[var(--color-slate-custom)]">{authorByline(city)}</p>
        </div>

        {/* Right TL;DR sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[var(--radius-card)] bg-[var(--color-muted)] p-5">
            <div className="text-sm font-semibold">Get a {city.name} quote</div>
            <p className="mt-2 text-sm text-[var(--color-slate-custom)]">{city.costNote}</p>
            <div className="mt-3">
              <CallButton className="w-full justify-center" />
            </div>
          </div>
          <div className="mt-6 rounded-[var(--radius-card)] border border-[var(--color-navy-100)] p-5">
            <div className="text-sm font-semibold">Services</div>
            <div className="mt-2">
              <ServiceLinks city={city} />
            </div>
          </div>
          <div className="mt-6">
            <div className="text-sm font-semibold">Nearby</div>
            <div className="mt-2">
              <NearbyCities city={city} />
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
