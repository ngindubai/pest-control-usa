import type { CityLocation } from "@/types";
import { Breadcrumb, CallButton, ServiceLinks, NearbyCities, authorByline } from "./parts";
import { heading } from "./headings";

// Template A - Field Manual. Dense, tabular, full width, no sidebar.
// Pest-by-pest table, numbered process, accordion FAQ. Reads like an ops manual.
export default function CityTemplateA({ city }: { city: CityLocation }) {
  return (
    <article className="tpl-city-a">
      {/* Slim banner hero */}
      <header className="bg-[var(--color-navy)] px-4 py-10 text-white">
        <div className="mx-auto max-w-4xl">
          <Breadcrumb city={city} />
          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
            Pest Control in {city.name}, {city.stateAbbr}
          </h1>
          <p className="mt-3 max-w-2xl text-blue-100">{city.localHook}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {city.topPests.slice(0, 5).map((p) => (
              <span key={p} className="rounded bg-[var(--color-navy-light)] px-2 py-1">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <CallButton />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-lg leading-relaxed text-[var(--foreground)]">{city.intro}</p>

        {/* Pest table */}
        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-2xl font-bold">
          {heading(city, "A.pests")}
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-[var(--color-navy)] text-left">
                <th className="py-2 pr-4 font-semibold">Pest</th>
                <th className="py-2 pr-4 font-semibold">When active</th>
                <th className="py-2 font-semibold">Local notes</th>
              </tr>
            </thead>
            <tbody>
              {city.pestProfile.map((p) => (
                <tr key={p.name} className="border-b border-[var(--color-muted)]">
                  <td className="py-3 pr-4 font-medium">{p.name}</td>
                  <td className="py-3 pr-4 whitespace-nowrap text-[var(--color-slate-custom)]">
                    {p.activeSeason}
                  </td>
                  <td className="py-3">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Body sections rendered as a tight stack */}
        {city.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
              {s.heading}
            </h2>
            <p className="mt-3 leading-relaxed">{s.body}</p>
          </section>
        ))}

        {/* Prevention as a checklist */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            {heading(city, "A.prevention")}
          </h2>
          <ul className="mt-3 space-y-1">
            {city.prevention.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-[var(--color-red)]">▪</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Cost */}
        <section className="mt-10 rounded-[var(--radius-card)] bg-[var(--color-muted)] p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            {heading(city, "A.cost")}
          </h2>
          <p className="mt-3 leading-relaxed">{city.costNote}</p>
        </section>

        {/* FAQ accordion */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            {heading(city, "A.faq")}
          </h2>
          <div className="mt-4 divide-y divide-[var(--color-muted)] border-y border-[var(--color-muted)]">
            {city.faqs.map((f) => (
              <details key={f.question} className="group py-3">
                <summary className="cursor-pointer list-none font-medium">
                  {f.question}
                </summary>
                <p className="mt-2 text-[var(--color-slate-custom)]">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
            {heading(city, "A.services")}
          </h2>
          <div className="mt-3">
            <ServiceLinks city={city} />
          </div>
          <h2 className="mt-8 font-[family-name:var(--font-heading)] text-xl font-bold">
            {heading(city, "A.nearby")}
          </h2>
          <div className="mt-3">
            <NearbyCities city={city} />
          </div>
        </section>

        <p className="mt-10 text-xs text-[var(--color-slate-custom)]">{authorByline(city)}</p>
      </div>
    </article>
  );
}
