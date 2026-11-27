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
import { PlanetDots } from "@/components/landing/Ornament";
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
      <div className="relative border-t border-latte/15 bg-black/25 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-5 py-6 sm:flex-row sm:gap-12 sm:px-6">
          <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-latte/80">
            <PlanetDots /> As featured on
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:gap-x-14">
            {media.map((m) => (
              <span
                key={m.name}
                className={`text-2xl text-cream/85 sm:text-3xl ${WORDMARK[m.name] ?? "font-display"}`}
              >
                {m.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
