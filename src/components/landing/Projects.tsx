import Image from "next/image";
import {
  Building2,
  Factory,
  Home,
  LandPlot,
  MapPin,
  Store,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Heading } from "./Ornament";
import { projects } from "@/lib/site";

const ICONS = [Home, Building2, Store, Factory, LandPlot];

/** Vastu project showcase. */
export default function Projects() {
  return (
    <section
      id="projects"
      className="paper relative scroll-mt-24 py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Heading
          eyebrow="Projects"
          title="Spaces we have"
          script="brought into balance"
          sub="From family homes to factories — Vastu corrections that work with the existing structure, without demolition."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal
                key={p.title}
                delay={i * 0.06}
                className={i === 0 ? "lg:row-span-2" : ""}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-bronze/20 bg-white/80 shadow-[0_24px_50px_-35px_rgba(43,31,24,0.5)] transition hover:-translate-y-1 hover:border-bronze/45">
                  {p.image && (
                    <div
                      className={`relative ${i === 0 ? "aspect-[4/5]" : "aspect-video"}`}
                    >
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-bronze/35 bg-parchment text-bronze-deep">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-bronze">
                      {p.type}
                    </div>
                    <h3 className="mt-2 font-display text-xl text-midnight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cocoa/70">
                      {p.text}
                    </p>
                    {p.location && (
                      <p className="mt-auto flex items-center gap-1.5 pt-5 text-xs text-cocoa/55">
                        <MapPin className="h-3.5 w-3.5" /> {p.location}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
