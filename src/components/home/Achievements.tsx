import { Award, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { achievements, whyUs } from "@/lib/site";

export default function Achievements() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">✦ Honours</div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Recognised for <span className="text-gold-gradient">excellence</span>
          </h2>
          <ol className="relative mt-10 space-y-7 border-l border-gold/25 pl-8">
            {achievements.map((a) => (
              <li key={a.title} className="relative">
                <span className="absolute -left-[45px] grid h-7 w-7 place-items-center rounded-full border border-gold/50 bg-night text-gold">
                  <Award className="h-3.5 w-3.5" />
                </span>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-lg text-ivory">{a.title}</h3>
                  {a.year && <span className="rounded-full bg-saffron/15 px-2 py-0.5 text-xs text-saffron">{a.year}</span>}
                </div>
                <p className="mt-1 text-sm text-muted">{a.by}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1} className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-violet/30 via-night-2/95 to-night/95 p-8 sm:p-10">
          <div className="spin-slow pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full border border-dashed border-gold/15" />
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">✦ Why families trust her</div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Guidance that is <span className="text-gold-gradient">honest & practical</span>
          </h2>
          <ul className="mt-10 space-y-5">
            {whyUs.map((w) => (
              <li key={w.title} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <h3 className="font-semibold text-ivory">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted">{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
