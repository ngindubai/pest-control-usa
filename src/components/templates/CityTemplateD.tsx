import type { CityLocation } from "@/types";
import { Breadcrumb, CallButton, ServiceLinks, NearbyCities, authorByline } from "./parts";
import { heading } from "./headings";

// Template D - Conversational Q&A. Minimal hero, every section is a question.
// No noun-phrase H2s. Eliminates the templated heading fingerprint.
export default function CityTemplateD({ city }: { city: CityLocation }) {
  return (
    <article className="tpl-city-d bg-white">
      {/* Minimal hero */}
      <header className="mx-auto max-w-3xl px-4 pt-10">
        <Breadcrumb city={city} />
        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold sm:text-4xl">
          Dealing with pests in {city.name}, {city.stateAbbr}?
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-slate-custom)]">
          {city.intro}
        </p>
        <div className="mt-6">
          <CallButton />
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Question: which pests */}
        <section className="border-t border-[var(--color-muted)] pt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
            {heading(city, "D.whichPests")}
          </h2>
          <p className="mt-2 leading-relaxed">{city.localHook}</p>
          <ul className="mt-3 space-y-2">
            {city.pestProfile.map((p) => (
              <li key={p.name}>
                <span className="font-medium">{p.name}.</span>{" "}
                <span className="text-[var(--color-slate-custom)]">
                  {p.activeSeason}. {p.note}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Folded body sections under a question, no noun H2s */}
        {city.sections.length > 0 && (
          <section className="border-t border-[var(--color-muted)] pt-8 mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
              {heading(city, "D.moreInfo")}
            </h2>
            {city.sections.map((s) => (
              <p key={s.heading} className="mt-3 leading-relaxed">
                {s.body}
              </p>
            ))}
          </section>
        )}

        {/* Question: prevention */}
        <section className="border-t border-[var(--color-muted)] pt-8 mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
            {heading(city, "D.prevention")}
          </h2>
          <ul className="mt-3 space-y-1">
            {city.prevention.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-[var(--color-red)]">→</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Question: cost */}
        <section className="border-t border-[var(--color-muted)] pt-8 mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
            {heading(city, "D.cost")}
          </h2>
          <p className="mt-2 leading-relaxed">{city.costNote}</p>
        </section>

        {/* The rest of the city-specific questions */}
        {city.faqs.map((f) => (
          <section key={f.question} className="border-t border-[var(--color-muted)] pt-8 mt-8">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
              {f.question}
            </h2>
            <p className="mt-2 leading-relaxed">{f.answer}</p>
          </section>
        ))}

        {/* Question: next step */}
        <section className="border-t border-[var(--color-muted)] pt-8 mt-8">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
            {heading(city, "D.next")}
          </h2>
          <p className="mt-2 leading-relaxed">
            Book a free inspection and a local technician will confirm what you are dealing with.
          </p>
          <div className="mt-4">
            <ServiceLinks city={city} />
          </div>
          <div className="mt-6">
            <NearbyCities city={city} />
          </div>
        </section>

        <p className="mt-10 text-xs text-[var(--color-slate-custom)]">{authorByline(city)}</p>
      </div>

      {/* Floating mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-[var(--color-muted)] bg-white p-3 text-center shadow-[var(--shadow-nav)] sm:hidden">
        <CallButton className="w-full justify-center" />
      </div>
    </article>
  );
}
