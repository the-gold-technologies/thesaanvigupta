import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ZodiacWheel from "./ZodiacWheel";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  sub,
  crumbs,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub?: string;
  crumbs: { label: string; href?: string }[];
  /** "dark" renders the hero on the mocha starfield background. */
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={`${dark ? "parchment-sky deep text-cream" : "paper"} relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 lg:min-h-[640px] flex flex-col justify-center`}
    >
      <ZodiacWheel
        tone={tone}
        className="pointer-events-none absolute z-0 right-[-6%] sm:right-2 lg:right-10 top-24 sm:top-24 lg:top-20 h-[420px] w-[420px] sm:h-[480px] sm:w-[480px] lg:h-[520px] lg:w-[520px] opacity-85"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className={`flex flex-wrap items-center gap-1.5 text-xs ${dark ? "text-cream/60" : "text-cocoa/60"}`}
          >
            <Link
              href="/"
              className={`transition ${dark ? "hover:text-latte" : "hover:text-bronze-deep"}`}
            >
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight
                  className={`h-3 w-3 ${dark ? "text-latte/50" : "text-bronze/50"}`}
                />
                {c.href ? (
                  <Link
                    href={c.href}
                    className={`transition ${dark ? "hover:text-latte" : "hover:text-bronze-deep"}`}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    className={`font-semibold ${dark ? "text-latte" : "text-bronze-deep"}`}
                  >
                    {c.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
          <div
            className={`mt-8 text-xs font-semibold uppercase tracking-[0.35em] ${dark ? "text-latte" : "text-bronze"}`}
          >
            ✦ {eyebrow}
          </div>
          <h1
            className={`mt-4 max-w-4xl font-display text-3xl uppercase leading-[1.08] sm:text-5xl md:text-[3.5rem] ${dark ? "text-cream" : "text-midnight"}`}
          >
            <span className="block">{title}</span>
            {highlight && (
              <span
                className={`mt-[1px] block font-script normal-case leading-[0.88] text-[1.25em] sm:-mt-[5px] sm:text-[1.35em] ${dark ? "text-latte" : "text-bronze"}`}
              >
                {highlight}
              </span>
            )}
          </h1>
          {sub && (
            <p
              className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-cream/80" : "text-cocoa/75"}`}
            >
              {sub}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
