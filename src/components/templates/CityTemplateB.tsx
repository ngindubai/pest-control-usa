import type { CityLocation } from "@/types";
import { Breadcrumb, CallButton, ServiceLinks, NearbyCities, authorByline } from "./parts";
import { CityLeadForm } from "./CityLeadForm";
import { heading } from "./headings";

// Template B - Visual Journey. Full-bleed hero, quick-answer box, horizontal pest
// cards, right sticky sidebar, expander-grid FAQ. Marketing-led, image-forward.
export default function CityTemplateB({ city }: { city: CityLocation }) {
  return (
    <article className="tpl-city-b">
      {/* Full-bleed hero */}
      <header className="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)] px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <Breadcrumb city={city} />
          <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-extrabold sm:text-5xl">
            Trusted Pest Control in {city.name}, {city.stateAbbr}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-left text-lg text-blue-100">{city.localHook}</p>
          <div className="mt-8 flex justify-center gap-3">
            <CallButton />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_300px]">
        <div>
          {/* Quick-answer box */}
          <div className="grid gap-4 rounded-[var(--radius-card)] bg-[var(--color-muted)] p-6 sm:grid-cols-3">
            <div>
              <div className="text-xs uppercase text-[var(--color-slate-custom)]">Top pest</div>
              <div className="font-semibold">{city.topPests[0]}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-[var(--color-slate-custom)]">Climate</div>
              <div className="font-semibold capitalize">{city.climate.replace("-", " ")}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-[var(--color-slate-custom)]">Population</div>
              <div className="font-semibold">{city.population}</div>
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed">{city.intro}</p>

          {/* Horizontal pest cards */}
          <h2 className="mt-10 font-[family-name:var(--font-heading)] text-2xl font-bold">
            {heading(city, "B.pests")}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {city.pestProfile.map((p) => (
              <div
                key={p.name}
                className="rounded-[var(--radius-card)] border border-[var(--color-navy-100)] bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <div className="font-semibold text-[var(--color-navy)]">{p.name}</div>
                <div className="mt-1 text-xs text-[var(--color-red)]">{p.activeSeason}</div>
                <p className="mt-2 text-sm text-[var(--color-slate-custom)]">{p.note}</p>
              </div>
            ))}
          </div>

          {city.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                {s.heading}
              </h2>
              <p className="mt-3 leading-relaxed">{s.body}</p>
            </section>
          ))}

          <section className="mt-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
              {heading(city, "B.prevention")}
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {city.prevention.map((tip) => (
                <li
                  key={tip}
                  className="rounded-[var(--radius-btn)] bg-[var(--color-cream)] p-3 text-sm"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ expander grid */}
          <section className="mt-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
              {heading(city, "B.faq")}
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {city.faqs.map((f) => (
                <details
                  key={f.question}
                  className="rounded-[var(--radius-card)] border border-[var(--color-navy-100)] p-4"
                >
                  <summary className="cursor-pointer list-none font-medium">
                    {f.question}
                  </summary>
                  <p className="mt-2 text-sm text-[var(--color-slate-custom)]">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="mt-10 text-xs text-[var(--color-slate-custom)]">{authorByline(city)}</p>
        </div>

        {/* Right sticky sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <CityLeadForm city={city} />
          <div className="mt-6 rounded-[var(--radius-card)] bg-[var(--color-navy)] p-6 text-white shadow-[var(--shadow-card)]">
            <div className="font-[family-name:var(--font-heading)] text-lg font-bold">
              Free inspection in {city.name}
            </div>
            <p className="mt-2 text-sm text-blue-100">{city.costNote}</p>
            <div className="mt-4">
              <CallButton className="w-full justify-center" />
            </div>
          </div>
          <div className="mt-6 rounded-[var(--radius-card)] bg-[var(--color-muted)] p-5">
            <div className="text-sm font-semibold">Services here</div>
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
