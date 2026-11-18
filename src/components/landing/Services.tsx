import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import BronzeWheel from "./BronzeWheel";
import { Heading } from "./Ornament";
import { services } from "@/lib/site";

/** Per-service tint, taken from the ruling graha — like the coloured cards in the reference dashboard. */
const TINT: Record<string, { ring: string; label: string; span: string }> = {
  "astrology-reading": {
    ring: "#e3c9a6",
    label: "Sun · Surya",
    span: "lg:col-span-3 lg:row-span-2",
  },
  "vastu-consultant": {
    ring: "#e3c9a6",
    label: "Earth · Prithvi",
    span: "lg:col-span-3",
  },
  numerology: {
    ring: "#e3c9a6",
    label: "Mercury · Budh",
    span: "lg:col-span-3",
  },
  "prashan-kundali": {
    ring: "#e3c9a6",
    label: "Moon · Chandra",
    span: "lg:col-span-3",
  },
  "tarot-card-reading": {
    ring: "#e3c9a6",
    label: "Venus · Shukra",
    span: "lg:col-span-3",
  },
};

export default function Services({
  showHeading = true,
}: { showHeading?: boolean } = {}) {
  return (
    <section
      id="services"
      className="paper relative scroll-mt-24 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {showHeading && (
          <Heading
            eyebrow="Our services"
            title="Ancient sciences,"
            script="answers for today"
            sub="Five time-tested disciplines, one goal: clear guidance and remedies you can actually follow."
          />
        )}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-[auto_auto_auto]">
          {services.map((s, i) => {
            const t = TINT[s.slug];
            const featured = i === 0;
            return (
              <Reveal
                key={s.slug}
                delay={i * 0.06}
                className={`${t.span} ${featured ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-umber/40 bg-gradient-to-br from-[#93683f] via-[#66513f] to-[#4a3e35] p-7 text-cream shadow-[0_30px_60px_-35px_rgba(62,54,46,0.6)] transition duration-500 hover:-translate-y-1 hover:border-latte/50 sm:p-8"
                >
                  {featured && (
                    <BronzeWheel
                      className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] opacity-40"
                      stroke="#e3c9a6"
                      glyph="#e3c9a6"
                    />
                  )}
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(1px_1px_at_20%_30%,rgba(255,255,255,0.5),transparent),radial-gradient(1px_1px_at_70%_20%,rgba(255,255,255,0.35),transparent),radial-gradient(1px_1px_at_85%_65%,rgba(255,255,255,0.3),transparent)]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={`glyph grid place-items-center rounded-full border ${featured ? "h-20 w-20 text-4xl" : "h-14 w-14 text-2xl"}`}
                      style={{
                        borderColor: `${t.ring}88`,
                        color: t.ring,
                        background: `${t.ring}14`,
                        boxShadow: `0 0 40px -10px ${t.ring}`,
                      }}
                    >
                      {s.glyph}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition group-hover:border-latte group-hover:bg-latte group-hover:text-mocha">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="relative mt-auto pt-10">
                    <div
                      className="text-[11px] font-semibold uppercase tracking-[0.3em]"
                      style={{ color: t.ring }}
                    >
                      {t.label}
                    </div>
                    <h3
                      className={`mt-2 font-display text-cream ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed text-cream/80 ${featured ? "max-w-md text-base" : "text-sm"}`}
                    >
                      {s.short}
                    </p>
                    {featured && (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {s.helpsWith.slice(0, 4).map((h) => (
                          <li
                            key={h}
                            className="rounded-full border border-latte/25 bg-white/10 px-3 py-1 text-xs text-cream/90"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/services"
            className="btn-bronze-line inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
          >
            View all services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
