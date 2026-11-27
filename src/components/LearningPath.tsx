"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PlanetDots, Sparkle } from "@/components/landing/Ornament";
import {
  DirectionsIcon,
  FloorPlanIcon,
  HouseIcon,
  KalashIcon,
  MandalaIcon,
  ShopIcon,
} from "@/components/VastuIcons";

export const MODULES = [
  {
    icon: MandalaIcon,
    t: "Foundations",
    d: "Directions, the Vastu Purusha Mandala and how energy moves through a space.",
    tags: ["Core principles", "Vastu Purusha"],
  },
  {
    icon: DirectionsIcon,
    t: "Zones & Elements",
    d: "What each of the 16 zones governs, its element, colours and the activities that belong there.",
    tags: ["16 zones", "5 elements"],
  },
  {
    icon: FloorPlanIcon,
    t: "Floor Plans",
    d: "Find the centre, map the zones and spot imbalances on any layout.",
    tags: ["Plan reading", "Zone mapping"],
  },
  {
    icon: KalashIcon,
    t: "Remedies",
    d: "Colour, metal, placement and element-based corrections — no demolition needed.",
    tags: ["No demolition", "Element remedies"],
  },
  {
    icon: HouseIcon,
    t: "Residential",
    d: "Entrances, kitchens, bedrooms, toilets and lockers in homes, flats and villas.",
    tags: ["Homes", "Case studies"],
  },
  {
    icon: ShopIcon,
    t: "Commercial",
    d: "Offices, shops, showrooms, factories and plot selection — practise like a consultant.",
    tags: ["Business Vastu", "Plot selection"],
  },
];

// node positions in % of the 1200×640 stage
const NODES = [
  [8, 84],
  [27, 64],
  [46, 78],
  [63, 50],
  [80, 60],
  [92, 16],
];
const STEP_MS = 4500;
const PTS = NODES.map(([x, y]) => [x * 12, y * 6.4]);
const seg = (i: number) => {
  const [px, py] = PTS[i - 1];
  const [x, y] = PTS[i];
  const mx = (px + x) / 2;
  return ` C${mx} ${py} ${mx} ${y} ${x} ${y}`;
};
const FULL =
  `M${PTS[0][0]} ${PTS[0][1]}` +
  PTS.slice(1)
    .map((_, i) => seg(i + 1))
    .join("");

/** Vastu Coaching curriculum as a winding path, stepping upward stage by stage. */
export default function LearningPath({ enquireHref }: { enquireHref: string }) {
  const [a, setA] = useState(0);
  const [hover, setHover] = useState(false);
  const [hold, setHold] = useState(false);
  const [fracs, setFracs] = useState([0, 0.2, 0.4, 0.6, 0.8, 1]);
  const segRefs = useRef<(SVGPathElement | null)[]>([]);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const paused = hover || hold;
  const m = MODULES[a];

  // measure real segment lengths so the progress line stops exactly on each node
  useEffect(() => {
    const lens = segRefs.current.map((el) => el?.getTotalLength() ?? 0);
    const total = lens.reduce((x, y) => x + y, 0);
    if (!total) return;
    let acc = 0;
    setFracs([0, ...lens.map((l) => (acc += l) / total)]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setA((x) => (x + 1) % MODULES.length), STEP_MS);
    return () => clearTimeout(id);
  }, [a, paused]);

  useEffect(
    () => () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
    },
    []
  );

  const pick = (n: number) => {
    setA(n);
    setHold(true);
    if (holdTimer.current) clearTimeout(holdTimer.current);
    holdTimer.current = setTimeout(() => setHold(false), 12000);
  };

  return (
    <section className="relative overflow-hidden bg-parchment py-20 lg:py-24">
      {/* Vedic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[12rem] leading-none text-bronze/[0.07] sm:text-[18rem] lg:text-[22rem]">
          वास्तु
        </span>
        <Sparkle className="twinkle absolute left-[38%] top-[30%] h-4 w-4 text-antique" />
        <Sparkle className="twinkle absolute right-[12%] top-[48%] h-3 w-3 text-bronze [animation-delay:1.3s]" />
        <Sparkle className="twinkle absolute left-[18%] top-[55%] h-3 w-3 text-antique [animation-delay:2.1s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <PlanetDots />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-bronze">
              Your learning journey
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl uppercase leading-tight text-midnight sm:text-4xl md:text-[2.75rem]">
            Six modules,
            <span className="mt-1 block font-script text-[1.5em] normal-case leading-[0.9] text-bronze">
              one path upward
            </span>
          </h2>
        </Reveal>

        {/* desktop: winding path */}
        <div
          className="relative mt-6 hidden aspect-[1200/640] md:block"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <svg
            viewBox="0 0 1200 640"
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden
          >
            <defs>
              <radialGradient id="lp-sun" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e3c9a6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e3c9a6" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="lp-gold" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#865d36" />
                <stop offset="100%" stopColor="#c9963f" />
              </linearGradient>
            </defs>
            <circle cx={PTS[5][0]} cy={PTS[5][1]} r="170" fill="url(#lp-sun)" />
            {/* measuring segments (invisible) */}
            {PTS.slice(1).map((_, i) => (
              <path
                key={i}
                ref={(el) => {
                  segRefs.current[i] = el;
                }}
                d={`M${PTS[i][0]} ${PTS[i][1]}${seg(i + 1)}`}
                fill="none"
                stroke="none"
              />
            ))}
            <path
              d={FULL}
              fill="none"
              stroke="#e8dbc6"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d={FULL}
              pathLength={1}
              fill="none"
              stroke="#8a6a54"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeDasharray="0.006 0.012"
              strokeLinecap="round"
            />
            {/* progress travelling along the path */}
            <path
              d={FULL}
              pathLength={1}
              fill="none"
              stroke="url(#lp-gold)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                strokeDasharray: `${fracs[a]} 1`,
                transition:
                  "stroke-dasharray 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </svg>

          {MODULES.map((st, n) => {
            const on = a === n;
            const done = n < a;
            return (
              <button
                key={st.t}
                onClick={() => pick(n)}
                aria-pressed={on}
                aria-label={`Module ${n + 1}: ${st.t}`}
                className="group absolute h-0 w-0"
                style={{ left: `${NODES[n][0]}%`, top: `${NODES[n][1]}%` }}
              >
                {on && (
                  <span className="absolute left-0 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-antique/50" />
                )}
                <span
                  className={`absolute left-0 top-0 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ring-1 transition-all duration-500 ${
                    on
                      ? "h-24 w-24 bg-bronze-deep text-cream ring-antique shadow-[0_0_0_8px_rgba(180,138,74,0.18)]"
                      : done
                        ? "h-16 w-16 bg-cream text-bronze-deep ring-antique/70"
                        : "h-16 w-16 bg-cream text-cocoa/40 ring-sand group-hover:text-bronze group-hover:ring-antique/60"
                  }`}
                >
                  <st.icon
                    className={on ? "h-12 w-12" : "h-9 w-9"}
                    strokeWidth={on ? 1.6 : 1.8}
                  />
                  <span
                    className={`absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full font-display text-sm transition ${
                      on ? "bg-jupiter text-cocoa" : "bg-antique text-cream"
                    }`}
                  >
                    {n + 1}
                  </span>
                </span>
                <span
                  className={`absolute left-0 -translate-x-1/2 whitespace-nowrap font-display text-lg transition-all duration-500 ${
                    on
                      ? "top-[3.6rem] text-midnight"
                      : "top-[2.6rem] text-cocoa/55"
                  }`}
                >
                  {st.t}
                </span>
              </button>
            );
          })}

          {/* detail card in the open space top-left */}
          <div key={a} className="rise absolute left-0 top-0 w-[38%]">
            <p className="font-display text-7xl text-antique/50">
              {String(a + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 font-display text-3xl text-midnight lg:text-4xl">
              {m.t}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-cocoa/75">{m.d}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {m.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-antique/40 bg-cream/70 px-3 py-1 text-xs text-cocoa/75"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* mobile: stacked stops */}
        <ol className="ml-4 mt-10 space-y-8 border-l border-dashed border-antique/60 pl-8 md:hidden">
          {MODULES.map((st, n) => (
            <li key={st.t} className="relative">
              <span className="absolute -left-[3.15rem] top-0 grid h-9 w-9 place-items-center rounded-full bg-antique font-display text-cream">
                {n + 1}
              </span>
              <h3 className="font-display text-2xl text-midnight">{st.t}</h3>
              <p className="mt-1 text-cocoa/70">{st.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center md:-mt-4">
          <a
            href={enquireHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-midnight group flex items-center gap-2 rounded-full px-7 py-4 font-semibold"
          >
            Begin the journey
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
