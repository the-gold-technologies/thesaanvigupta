import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mic,
  MonitorPlay,
  Newspaper,
  Tv,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Divider, PlanetDots, Sparkle } from "./Ornament";
import { media } from "@/lib/site";

/** Per-outlet wordmark styling (plain text, not the outlets' logos). */
const WORDMARK: Record<string, string> = {
  NDTV: "font-sans font-extrabold tracking-tight",
  "Zee TV": "font-display font-semibold tracking-wide",
  "Amar Ujala": "font-serif italic font-semibold",
};

/**
 * "In the media" — TV-frame portrait + editorial list of outlets.
 * `showMore` adds the teaser links to the /media page (used on the home page).
 */
export default function MediaFeatures({
  showMore = false,
}: { showMore?: boolean } = {}) {
  return (
    <section
      id="media"
      className="parchment-sky deep relative scroll-mt-36 overflow-hidden py-24 text-cream md:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(194,98,42,0.35),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* TV-frame portrait */}
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="rounded-[1.75rem] border border-latte/30 bg-gradient-to-b from-[#4d4339] to-[#2b231d] p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/saanvi.webp"
                alt="Aacharya Saanvi Gupta"
                fill
                sizes="(min-width: 1024px) 380px, 85vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-mars px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                On air
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-latte">
                  Featured expert
                </div>
                <div className="mt-1 font-display text-xl">
                  Aacharya Saanvi Gupta
                </div>
                <div className="text-xs text-cream/70">
                  Astrologer · Vastu Consultant · Numerologist
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-3 w-24 rounded-b-xl bg-[#2b231d]" />
        </Reveal>

        {/* Outlets */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <PlanetDots />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-latte">
                In the media
              </span>
            </div>
            <h2 className="mt-5 font-display text-3xl uppercase leading-tight sm:text-4xl">
              As seen on
              <span className="mt-1 block font-script text-[1.45em] normal-case leading-[0.9] text-latte">
                national TV &amp; print
              </span>
            </h2>
            <Divider tone="warm" className="mt-5" />
            <p className="mt-5 max-w-lg text-cream/75">
              Recognised for authentic Vedic guidance and trusted Vastu
              expertise in Noida &amp; Delhi NCR.
            </p>
          </Reveal>

          <ul className="mt-10 divide-y divide-latte/15 border-y border-latte/15">
            {media.map((m, i) => {
              const print = m.kind === "Hindi daily";
              const Icon = print ? Newspaper : Tv;
              const href = m.url ?? (print ? undefined : "/media#tv");
              const row = (
                <>
                  <span className="w-8 font-display text-sm text-latte/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 text-3xl text-cream transition group-hover:text-latte sm:text-4xl ${WORDMARK[m.name] ?? "font-display"}`}
                  >
                    {m.name}
                  </span>
                  <span className="hidden items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-latte/80 sm:flex">
                    <Icon className="h-3.5 w-3.5" /> {m.kind}
                  </span>
                  {href ? (
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-latte/30 text-latte transition group-hover:border-latte group-hover:bg-latte group-hover:text-mocha">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  ) : (
                    <Sparkle className="mx-3 h-3.5 w-3.5 text-latte/60" />
                  )}
                </>
              );
              const cls = "group flex items-center gap-5 py-5";
              return (
                <li key={m.name}>
                  <Reveal delay={i * 0.08}>
                    {href ? (
                      <a
                        href={href}
                        {...(m.url
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={cls}
                        aria-label={`${m.name} — ${print ? "read" : "watch"} the feature`}
                      >
                        {row}
                      </a>
                    ) : (
                      <div className={cls}>{row}</div>
                    )}
                  </Reveal>
                </li>
              );
            })}
          </ul>

          {showMore && (
            <Reveal className="mt-8">
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    icon: MonitorPlay,
                    label: "YouTube videos",
                    href: "/media#videos",
                  },
                  { icon: Tv, label: "TV features", href: "/media#tv" },
                  { icon: Mic, label: "Podcasts", href: "/media#podcasts" },
                ].map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="inline-flex items-center gap-2 rounded-full border border-latte/25 bg-white/5 px-4 py-2 text-sm text-cream/85 transition hover:border-latte hover:text-latte"
                  >
                    <l.icon className="h-4 w-4 text-latte" /> {l.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/media"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-latte px-7 py-3.5 font-semibold text-mocha transition hover:bg-cream"
              >
                Visit the media page <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
