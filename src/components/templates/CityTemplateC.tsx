import type { CityLocation } from "@/types";
import { Breadcrumb, CallButton, ServiceLinks, NearbyCities, authorByline } from "./parts";
import { heading } from "./headings";

// Template C - Comparison Brief. Split hero, side-by-side comparisons, Q-then-A
// FAQ blocks (no accordion). Heavy two-column layouts.
export default function CityTemplateC({ city }: { city: CityLocation }) {
  const half = Math.ceil(city.pestProfile.length / 2);
  const leftPests = city.pestProfile.slice(0, half);
  const rightPests = city.pestProfile.slice(half);

  return (
    <article className="tpl-city-c">
      {/* Split hero */}
      <header className="bg-[var(--color-navy-dark)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <Breadcrumb city={city} />
        </div>
        <div className="mx-auto grid max-w-5xl gap-px md:grid-cols-2">
          <div className="bg-[var(--color-navy)] px-6 py-10">
            <div className="text-xs uppercase tracking-wide text-blue-300">The challenge</div>
            <div className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-bold">
              {city.topPests.slice(0, 2).join(" and ")}
            </div>
            <p className="mt-2 text-sm text-blue-100">{city.climateDriver}</p>
          </div>
          <div className="bg-[var(--color-navy-light)] px-6 py-10">
            <div className="text-xs uppercase tracking-wide text-blue-200">The response</div>
            <div className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-bold">
              Local, licensed treatment
            </div>
            <p className="mt-2 text-sm text-blue-100">{city.costNote}</p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-6 py-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
            Pest Control in {city.name}, {city.stateAbbr}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">{city.localHook}</p>
          <div className="mt-5 flex justify-center">
            <CallButton />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 md:grid-cols-[180px_1fr]">
        {/* Left step rail */}
        <aside className="hidden md:block">
          <ol className="sticky top-24 space-y-3 text-sm text-[var(--color-slate-custom)]">
            <li>1. The pests, compared</li>
            <li>2. Season by season</li>
            <li>3. Treatment by pest</li>
            <li>4. Costs compared</li>
            <li>5. Questions</li>
          </ol>
        </aside>

        <div>
          <p className="text-lg leading-relaxed">{city.intro}</p>

          {/* Side-by-side pest comparison */}
          <h2 className="mt-10 font-[family-name:var(--font-heading)] text-2xl font-bold">
            {heading(city, "C.pests")}
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {[leftPests, rightPests].map((col, i) => (
              <div key={i} className="space-y-4">
                {col.map((p) => (
                  <div
                    key={p.name}
                    className="border-l-4 border-[var(--color-red)] bg-[var(--color-muted)] p-4"
                  >
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-[var(--color-slate-custom)]">{p.activeSeason}</div>
                    <p className="mt-1 text-sm">{p.note}</p>
                  </div>
                ))}
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
              {heading(city, "C.prevention")}
            </h2>
            <ul className="mt-3 space-y-1">
              {city.prevention.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span className="text-[var(--color-navy-light)]">vs</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Q-then-A blocks, no accordion */}
          <section className="mt-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
              {heading(city, "C.faq")}
            </h2>
            <div className="mt-4 space-y-6">
              {city.faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="font-semibold text-[var(--color-navy)]">{f.question}</h3>
                  <p className="mt-1 text-[var(--color-slate-custom)]">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <div className="text-sm font-semibold">Services in {city.name}</div>
            <div className="mt-2">
              <ServiceLinks city={city} />
            </div>
            <div className="mt-6 text-sm font-semibold">Compare nearby areas</div>
            <div className="mt-2">
              <NearbyCities city={city} />
            </div>
          </section>

          <p className="mt-10 text-xs text-[var(--color-slate-custom)]">{authorByline(city)}</p>
        </div>
      </div>
    </article>
  );
}
