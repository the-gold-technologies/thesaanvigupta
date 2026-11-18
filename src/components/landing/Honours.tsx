import { Award, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Heading } from "./Ornament";
import { achievements, whyUs } from "@/lib/site";

export default function Honours() {
  return (
    <section className="relative bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Heading eyebrow="Honours & trust" title="Recognised for" script="excellence" />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* awards as engraved plaques */}
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06} className={i === 0 ? "sm:col-span-2" : ""}>
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border p-6 transition hover:-translate-y-0.5 ${
                    i === 0 ? "border-gold/30 bg-midnight text-cream" : "border-bronze/20 bg-cream"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border ${
                        i === 0 ? "border-gold/60 text-gold" : "border-bronze/40 text-bronze"
                      }`}
                    >
                      <Award className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      {a.year && <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{a.year}</div>}
                      <h3 className={`font-display text-lg ${i === 0 ? "text-cream sm:text-2xl" : "text-midnight"}`}>{a.title}</h3>
                      <p className={`mt-1 text-sm ${i === 0 ? "text-cream/65" : "text-cocoa/65"}`}>{a.by}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* why us */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-[1.75rem] border border-bronze/20 bg-cream p-7 sm:p-9">
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-bronze">Why families trust her</div>
              <ul className="mt-6 divide-y divide-bronze/15">
                {whyUs.map((w) => (
                  <li key={w.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mercury/15 text-mercury">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-midnight">{w.title}</h3>
                      <p className="mt-0.5 text-sm text-cocoa/65">{w.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
