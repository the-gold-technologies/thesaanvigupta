"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PlanetDots } from "./Ornament";
import {
  FactoryIcon,
  HouseIcon,
  OfficeIcon,
  PlotIcon,
  ShopIcon,
} from "@/components/VastuIcons";
import { projects, waLink } from "@/lib/site";

const ICONS = {
  home: HouseIcon,
  office: OfficeIcon,
  shop: ShopIcon,
  factory: FactoryIcon,
  plot: PlotIcon,
};
const STEP_MS = 5000;

/** Project types as an editorial list + a blueprint panel for the active one. */
export default function Projects() {
  const [a, setA] = useState(0);
  const [paused, setPaused] = useState(false);
  const p = projects[a];
  const Icon = ICONS[p.icon];

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(
      () => setA((x) => (x + 1) % projects.length),
      STEP_MS
    );
    return () => clearTimeout(id);
  }, [a, paused]);

  return (
    <section
      id="projects"
      className="paper relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* split header */}
        <Reveal className="grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <PlanetDots />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-bronze">
                Projects
              </span>
            </div>
            <h2 className="mt-5 font-display text-[1.9rem] uppercase leading-[1.12] text-midnight sm:text-4xl md:text-[2.75rem]">
              Spaces we have
              <span className="mt-1 block font-script text-[1.45em] normal-case leading-[0.9] text-bronze">
                brought into balance
              </span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-cocoa/70 lg:pb-3 lg:text-lg">
            From family homes to factories — Vastu corrections that work with
            the existing structure, without demolition.
          </p>
        </Reveal>

        <div
          className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* selector: list on desktop, scrolling chips on mobile */}
          <div
            role="tablist"
            aria-label="Project types"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] lg:mx-0 lg:block lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((x, n) => {
              const on = n === a;
              return (
                <button
                  key={x.title}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setA(n)}
                  className={`group relative shrink-0 text-left transition lg:flex lg:w-full lg:items-baseline lg:gap-6 lg:border-b lg:border-bronze/15 lg:py-6 ${
                    on
                      ? "rounded-full bg-bronze-deep px-4 py-2 text-cream lg:rounded-none lg:bg-transparent lg:px-0 lg:text-midnight"
                      : "rounded-full border border-bronze/25 px-4 py-2 text-cocoa/70 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:px-0 lg:text-cocoa/45 lg:hover:text-midnight"
                  }`}
                >
                  {/* progress bar under the active row (desktop) */}
                  {on && (
                    <span
                      key={`${a}-${paused}`}
                      className="absolute -bottom-px left-0 hidden h-0.5 bg-bronze-deep lg:block"
                      style={{
                        width: paused ? "100%" : undefined,
                        animation: paused
                          ? undefined
                          : `grow ${STEP_MS}ms linear forwards`,
                      }}
                    />
                  )}
                  <span className="hidden font-display text-sm text-antique lg:inline">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap text-sm font-semibold lg:whitespace-normal lg:font-display lg:text-[1.65rem] lg:font-normal lg:leading-tight">
                    {x.title}
                  </span>
                  <span className="ml-auto hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze xl:inline">
                    {x.type}
                  </span>
                </button>
              );
            })}
          </div>

          {/* blueprint panel */}
          <div
            role="tabpanel"
            className="relative overflow-hidden rounded-[2rem] border border-umber/40 bg-[#3a3129] text-cream shadow-[0_40px_80px_-45px_rgba(43,31,24,0.9)]"
          >
            {/* drafting grid */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "linear-gradient(#e3c9a6 1px, transparent 1px), linear-gradient(90deg, #e3c9a6 1px, transparent 1px), linear-gradient(#e3c9a6 0.5px, transparent 0.5px), linear-gradient(90deg, #e3c9a6 0.5px, transparent 0.5px)",
                backgroundSize: "60px 60px, 60px 60px, 12px 12px, 12px 12px",
              }}
            />
            <div className="absolute right-6 top-6 flex flex-col items-center text-latte/70">
              <span className="font-display text-xs">N</span>
              <span className="mt-1 h-8 w-px bg-latte/60" />
            </div>

            <div
              key={a}
              className="rise relative grid gap-6 p-7 sm:p-10 md:grid-cols-[auto_1fr] md:items-center"
            >
              <div className="relative mx-auto grid h-44 w-44 place-items-center rounded-full border border-dashed border-latte/40 sm:h-52 sm:w-52">
                <span className="absolute inset-4 rounded-full border border-latte/15" />
                {p.image ? (
                  <span className="absolute inset-2 overflow-hidden rounded-full">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="208px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <Icon
                    className="h-24 w-24 text-latte sm:h-28 sm:w-28"
                    strokeWidth={1.2}
                  />
                )}
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-latte">
                  {p.type}
                </div>
                <h3 className="mt-2 font-display text-2xl leading-tight sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-cream/75">{p.text}</p>
                {p.location && (
                  <p className="mt-3 flex items-center gap-1.5 text-xs text-cream/60">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </p>
                )}
              </div>
            </div>

            <div
              key={`f-${a}`}
              className="rise relative border-t border-latte/15 px-7 py-6 sm:px-10"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-latte/70">
                What we study
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-latte/30 bg-white/5 px-3 py-1 text-xs text-cream/85"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(
                  `Namaste Saanvi ma'am, I would like a Vastu consultation for my ${p.title.toLowerCase()}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-latte hover:text-cream"
              >
                Get your space analysed
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
