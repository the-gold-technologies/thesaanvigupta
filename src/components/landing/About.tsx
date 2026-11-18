import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  Flame,
  Mountain,
  Sparkles,
  Wind,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { Divider, PlanetDots } from "./Ornament";
import { site } from "@/lib/site";

/** Pancha Tattva — the five elements shown around the logo mark. */
const ELEMENTS = [
  { Icon: Flame, label: "Agni", color: "#c23a2c", deg: -90 },
  { Icon: Droplet, label: "Jal", color: "#3b78b8", deg: -18 },
  { Icon: Wind, label: "Vayu", color: "#6b9aa8", deg: 54 },
  { Icon: Mountain, label: "Prithvi", color: "#8a6a54", deg: 126 },
  { Icon: Sparkles, label: "Akash", color: "#b48a4a", deg: 198 },
];

const CREDENTIALS = [
  "B.Com, Sri Venkateswara College (DU)",
  "9 Actuarial Science exams cleared",
  "Diploma in Scientific Vastu",
  "Diploma in Dynamic Numerology",
  "Columnist, The Pioneer",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-x-clip bg-parchment py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* ── Logo seal with the five elements ── */}
        <Reveal className="relative mx-auto aspect-square w-full max-w-[460px]">
          {/* offset bronze ring (as in the reference) */}
          <div className="absolute inset-[4%] translate-x-[4%] rounded-full border-[3px] border-bronze/70" />
          <div className="absolute inset-[4%] rounded-full bg-cream shadow-[0_40px_80px_-40px_rgba(43,31,24,0.45)]" />
          <div className="spin-slower absolute inset-[11%] rounded-full border border-dashed border-bronze/35" />
          <div className="absolute inset-[22%] grid place-items-center">
            <Image
              src="/images/logo.png"
              alt="Aacharya Saanvi Gupta logo"
              width={456}
              height={441}
              className="h-full w-full object-contain"
            />
          </div>
          {ELEMENTS.map(({ Icon, label, color, deg }) => {
            const a = (deg * Math.PI) / 180;
            const x = 50 + 39 * Math.cos(a);
            const y = 50 + 39 * Math.sin(a);
            return (
              <div
                key={label}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-full border-2 border-cream bg-white shadow-md sm:h-12 sm:w-12"
                  style={{ color }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cocoa/60">
                  {label}
                </span>
              </div>
            );
          })}
        </Reveal>

        {/* ── Story ── */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <PlanetDots />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-bronze">
                Meet your guide
              </span>
            </div>
            <h2 className="mt-5 font-display text-[1.9rem] uppercase leading-[1.12] text-midnight sm:text-4xl md:text-[2.6rem]">
              Astrology should guide you,
              <span className="mt-1 block font-script text-[3.2rem] normal-case leading-[0.95] text-bronze sm:text-[4rem]">
                never frighten you.
              </span>
            </h2>
            <Divider className="mt-4" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-cocoa/75">
              Saanvi&apos;s path began in numbers, not stars. She studied
              commerce at Delhi University and cleared nine Actuarial Science
              exams. That analytical mind shapes every reading she gives:
              logical, structured and practical.
            </p>
            <p className="mt-4 leading-relaxed text-cocoa/75">
              Two decades, 10,000+ consultations, a column in{" "}
              <span className="font-semibold text-cocoa">The Pioneer</span> and
              live shows with the{" "}
              <span className="font-semibold text-cocoa">Amar Ujala</span> group
              later, her mission is the same: replace fear with clarity, and
              give remedies that actually fit your life.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {CREDENTIALS.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-bronze/25 bg-cream px-3 py-1.5 text-xs text-bronze-deep"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-bronze/20 bg-cream sm:grid-cols-4">
              {site.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-5 text-center ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""} ${
                    i === 2 ? "sm:border-l" : ""
                  } border-bronze/15`}
                >
                  <div className="font-display text-2xl text-bronze-deep sm:text-3xl">
                    <Counter
                      value={s.value}
                      decimals={s.decimals}
                      suffix={s.suffix}
                    />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-cocoa/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="btn-bronze-line mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Read her full story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
