import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Mic,
  MonitorPlay,
  Newspaper,
  PlayCircle,
  Tv,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { media, site, waLink } from "@/lib/site";

/** Plain-text wordmark styling per outlet (not the outlets' logos). */
export const WORDMARK: Record<string, string> = {
  NDTV: "font-sans font-extrabold tracking-tight",
  "Zee TV": "font-display font-semibold tracking-wide",
  "Amar Ujala": "font-serif italic font-semibold",
};

const explore = [
  { icon: Newspaper, label: "Press", href: "#media" },
  { icon: Tv, label: "Television", href: "#tv" },
  { icon: MonitorPlay, label: "YouTube", href: "#videos" },
  { icon: Mic, label: "Podcasts", href: "#podcasts" },
];

export default function MediaHero() {
  return (
    <section className="parchment-sky deep relative flex flex-col overflow-hidden text-cream lg:min-h-[100svh]">
      {/* full-bleed portrait (desktop) */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] lg:block"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 40%), linear-gradient(0deg, transparent 0%, black 22%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 40%), linear-gradient(0deg, transparent 0%, black 22%)",
          WebkitMaskComposite: "source-in",
        }}
      >
        <Image
          src="/images/saanvi.webp"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover object-[50%_18%]"
        />
      </div>
      <div className="pointer-events-none absolute -left-40 top-20 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(194,98,42,0.25),transparent)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-14 pt-32 sm:px-6 lg:pb-16 lg:pt-36">
        <Reveal className="max-w-xl">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-cream/60"
          >
            <Link href="/" className="transition hover:text-latte">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-latte/50" />
            <span className="font-semibold text-latte">Media</span>
          </nav>

          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-latte/35 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-latte">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mars" />
            Media &amp; Press
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] uppercase leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
            Saanvi in
            <span className="mt-1 block font-script text-[1.4em] normal-case leading-[0.9] text-latte">
              the spotlight
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Television features, press coverage, YouTube guidance and podcast
            conversations with {site.name} — all in one place.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#tv"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-latte px-7 py-3.5 font-semibold text-mocha transition hover:bg-cream"
            >
              <PlayCircle className="h-5 w-5" /> Watch the features
            </a>
            <a
              href={waLink(
                "Namaste Saanvi ma'am, I saw you in the media and would like to book a consultation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-latte/40 px-7 py-3.5 font-semibold text-cream transition hover:border-latte hover:bg-white/5"
            >
              <WhatsAppIcon className="h-5 w-5" /> Book a consultation
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream/50">
              Explore
            </span>
            {explore.map((e) => (
              <a
                key={e.href}
                href={e.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-latte/20 bg-white/[0.04] px-3.5 py-1.5 text-sm text-cream/80 transition hover:border-latte/60 hover:text-latte"
              >
                <e.icon className="h-3.5 w-3.5 text-latte" /> {e.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* portrait (mobile / tablet) */}
      <div className="relative mx-5 mb-12 aspect-[4/5] overflow-hidden rounded-3xl border border-latte/20 sm:mx-auto sm:w-[420px] lg:hidden">
        <Image
          src="/images/saanvi.webp"
          alt={site.name}
          fill
          sizes="(min-width: 640px) 420px, 90vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-latte">
            Featured expert
          </div>
          <div className="mt-1 font-display text-xl">{site.name}</div>
        </div>
      </div>

      {/* as-featured-on strip */}
      <div className="relative border-y border-sand bg-[#F5ECDF] text-cocoa">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-6 sm:px-6 lg:flex-row lg:gap-10 lg:px-8">
          <div className="flex shrink-0 items-center gap-3 rounded-full border border-umber/20 bg-cream py-2 pl-2 pr-5 shadow-[0_10px_24px_-18px_rgba(92,67,52,0.7)]">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-umber to-bronze-deep text-cream">
              <Tv className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze">
                As featured on
              </span>
              <span className="block font-display text-sm uppercase tracking-[0.08em] text-mocha">
                National TV &amp; Press
              </span>
            </span>
          </div>

          {/* logo slider: two identical halves, translated -50% in a loop */}
          <div
            className="relative w-full min-w-0 overflow-hidden lg:flex-1"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <ul className="marquee flex w-max py-2 [animation-duration:28s] hover:[animation-play-state:paused]">
              {[0, 1].flatMap((half) =>
                Array.from({ length: 3 }, () => media)
                  .flat()
                  .map((m, i) => (
                    <li
                      key={`${half}-${i}`}
                      aria-hidden={half === 1 || i >= media.length}
                      className="w-32 shrink-0 pr-3 sm:w-44 sm:pr-4"
                    >
                      <a
                        href="#media"
                        tabIndex={half === 1 || i >= media.length ? -1 : 0}
                        aria-label={`${m.name} — ${m.kind}`}
                        className="group flex h-14 items-center justify-center rounded-xl border border-umber/15 bg-white px-4 shadow-[0_12px_26px_-20px_rgba(92,67,52,0.8)] transition duration-500 hover:-translate-y-1 hover:border-umber/40 hover:shadow-[0_18px_32px_-18px_rgba(92,67,52,0.75)] sm:h-16 sm:px-5"
                      >
                        {m.logo ? (
                          <span className="relative block h-6 w-full sm:h-7">
                            <Image
                              src={m.logo}
                              alt={`${m.name} logo`}
                              fill
                              unoptimized
                              className="object-contain transition duration-500 group-hover:scale-105"
                            />
                          </span>
                        ) : (
                          <span
                            className={`text-lg text-midnight sm:text-xl ${WORDMARK[m.name] ?? "font-display"}`}
                          >
                            {m.name}
                          </span>
                        )}
                      </a>
                    </li>
                  ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
