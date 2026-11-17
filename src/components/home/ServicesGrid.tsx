import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

export default function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {showHeading && (
          <SectionHeading
            eyebrow="Sacred Sciences"
            title="Five ancient sciences,"
            highlight="one clear path forward."
            sub="Every consultation combines the right tools for your situation. Choose a service, or simply share your problem and Saanvi will guide you."
          />
        )}

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 0.08}
              className={i < 2 ? "md:col-span-3" : "md:col-span-2"}
            >
              <Link
                href={`/services/${s.slug}`}
                className="gold-border group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-ink/95 to-night-2/95 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(233,194,122,0.5)] sm:p-8"
              >
                {/* orbit decoration */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-gold/10 transition-transform duration-[1.5s] group-hover:rotate-90">
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_12px_#e9c27a]" />
                </div>
                <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-gold/10" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/0 to-violet/0 transition-colors duration-500 group-hover:from-violet/20 group-hover:to-gold/5" />

                <span className="glyph relative grid h-16 w-16 place-items-center rounded-2xl border border-gold/30 bg-night/60 text-3xl text-gold shadow-[0_0_30px_-10px_rgba(233,194,122,0.7)] transition group-hover:scale-110 group-hover:bg-gold group-hover:text-night">
                  {s.glyph}
                </span>
                <div className="relative mt-auto pt-10">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-muted">Ruled by {s.planet}</div>
                  <h3 className="mt-2 font-display text-2xl text-ivory">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Explore <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
