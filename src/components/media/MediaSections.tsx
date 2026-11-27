import Image from "next/image";
import { ArrowUpRight, Mic, Newspaper, Tv } from "lucide-react";
import Reveal from "@/components/Reveal";
import { YouTubeIcon } from "@/components/Icons";
import { Divider, Heading, PlanetDots } from "@/components/landing/Ornament";
import { VideoCaption, VideoCard } from "@/components/landing/VideoCard";
import {
  guidanceVideos,
  media,
  podcasts,
  shorts,
  site,
  tvFeatures,
  tvVideos,
} from "@/lib/site";
import { WORDMARK } from "./MediaHero";

/* ───────────────────────── Press / outlets ───────────────────────── */

/** One-line description of what each outlet featured. */
function pressNote(name: string, print: boolean) {
  const stills = tvFeatures.filter((t) => t.channel === name);
  if (stills.length) return stills.map((t) => t.caption).join(" · ");
  const video = tvVideos.find((v) => v.highlight === name);
  if (video?.caption) return video.caption;
  return print ? "Featured in print" : "Featured on television";
}

export function PressSection() {
  return (
    <section
      id="media"
      className="paper relative scroll-mt-28 overflow-hidden py-24 md:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(180,138,74,0.14),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        {/* Left: heading */}
        <Reveal className="text-center lg:text-left">
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <PlanetDots />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-bronze">
              Featured in
            </span>
          </div>
          <h2 className="mt-5 font-display text-[1.9rem] uppercase leading-[1.12] text-midnight sm:text-4xl md:text-[2.75rem]">
            Trusted by
            <span className="mt-1 block font-script text-[3.2rem] normal-case leading-[0.9] text-bronze sm:text-[4.2rem]">
              national media
            </span>
          </h2>
          <Divider className="mt-5 justify-center lg:justify-start" />
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cocoa/70 md:text-lg lg:mx-0">
            Recognised for authentic Vedic guidance and trusted Vastu expertise
            in Noida &amp; Delhi NCR.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            <a
              href="#tv"
              className="inline-flex items-center gap-2 rounded-full bg-mocha px-6 py-3 text-sm font-semibold text-cream shadow-[0_14px_30px_-14px_rgba(62,54,46,0.8)] transition hover:-translate-y-0.5 hover:bg-bronze-deep"
            >
              <Tv className="h-4 w-4 text-latte" /> Watch TV features
            </a>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cocoa/50">
              {media.length} national outlets
            </span>
          </div>
        </Reveal>

        {/* Right: outlet cards */}
        <ul className="space-y-4">
          {media.map((m, i) => {
            const print = m.kind === "Hindi daily";
            const Icon = print ? Newspaper : Tv;
            const still = tvFeatures.find((t) => t.channel === m.name);
            const href = m.url ?? (still ? "#tv" : undefined);
            const inner = (
              <>
                {/* logo tile */}
                <span className="grid h-20 w-24 shrink-0 place-items-center rounded-xl border border-bronze/15 bg-white px-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_-14px_rgba(43,31,24,0.5)] transition duration-500 group-hover:border-bronze/30 sm:h-24 sm:w-32 sm:px-4">
                  {m.logo ? (
                    <span className="relative block h-12 w-full sm:h-14">
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
                      className={`text-xl leading-none text-midnight sm:text-2xl ${WORDMARK[m.name] ?? "font-display"}`}
                    >
                      {m.name}
                    </span>
                  )}
                </span>

                {/* text */}
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-bronze">
                    <Icon className="h-3.5 w-3.5" />
                    {m.kind}
                  </span>
                  <span className="mt-1.5 block font-display text-lg leading-snug text-midnight sm:text-xl">
                    Featured {print ? "in" : "on"} {m.name}
                  </span>
                  <span className="mt-1 line-clamp-2 block text-sm text-cocoa/65">
                    {pressNote(m.name, print)}
                  </span>
                </span>

                {/* still / arrow */}
                {still ? (
                  <span className="relative hidden h-24 w-36 shrink-0 overflow-hidden rounded-xl sm:block">
                    <Image
                      src={still.image}
                      alt={still.alt}
                      fill
                      sizes="144px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </span>
                ) : null}
                {href && (
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-bronze/25 text-bronze-deep transition group-hover:border-mocha group-hover:bg-mocha group-hover:text-latte">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </>
            );
            const cls =
              "group flex items-center gap-4 rounded-2xl border border-bronze/15 bg-white/80 p-3 pr-4 shadow-[0_24px_50px_-36px_rgba(43,31,24,0.6)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-bronze/35 hover:shadow-[0_30px_60px_-34px_rgba(43,31,24,0.7)] sm:gap-5 sm:p-4 sm:pr-5";
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
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Television ───────────────────────── */

export function TvSection() {
  return (
    <section
      id="tv"
      className="parchment-sky deep relative scroll-mt-28 overflow-hidden py-24 text-cream md:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(194,98,42,0.25),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <Heading
          tone="warm"
          eyebrow="On television"
          title="See Saanvi on"
          script="national TV"
          sub="Saanvi shares astrology and numerology guidance with viewers across India on national television."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {tvFeatures.map((t, i) => (
            <Reveal key={t.image} delay={i * 0.08}>
              <figure>
                <div className="rounded-[1.6rem] border border-latte/20 bg-gradient-to-b from-[#4d4339] to-[#221c17] p-2.5 shadow-[0_40px_80px_-45px_rgba(0,0,0,0.95)]">
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                    <Image
                      src={t.image}
                      alt={t.alt}
                      fill
                      sizes="(min-width: 768px) 540px, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mx-auto h-2.5 w-24 rounded-b-lg bg-[#221c17]" />
                <figcaption className="mt-5 text-center">
                  <span
                    className={`text-xl text-latte ${WORDMARK[t.channel] ?? "font-display"}`}
                  >
                    {t.channel}
                  </span>
                  <p className="mt-1 font-display text-lg text-cream">
                    {t.title}
                  </p>
                  <p className="mt-1 text-sm text-cream/65">{t.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── YouTube ───────────────────────── */

export function YouTubeSection() {
  return (
    <section
      id="videos"
      className="relative scroll-mt-28 overflow-hidden bg-[#F5ECDF] py-20 md:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/3 bg-[radial-gradient(closest-side,rgba(180,138,74,0.14),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-antique/60 bg-cream px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-bronze-deep shadow-[0_6px_16px_-10px_rgba(134,93,54,0.6)] sm:text-[11px]">
            <YouTubeIcon className="h-3.5 w-3.5 text-[#c4302b]" />
            Saanvi&apos;s Guidance
          </span>
          <h2 className="mt-5 font-display text-3xl uppercase leading-[1.15] text-mocha sm:text-4xl md:text-[2.6rem]">
            Saanvi&apos;s Guidance
            <span className="mt-1 block font-script text-5xl normal-case leading-[0.95] text-umber sm:text-6xl">
              on life&apos;s problems
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cocoa/70 sm:text-base">
            Watch Saanvi explain practical remedies for home, marriage, career
            and money. Tap play to watch.
          </p>
        </Reveal>

        {/* Long-form videos */}
        <div className="mx-auto mt-12 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {guidanceVideos.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="rounded-2xl ring-1 ring-umber/10 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_50px_-30px_rgba(92,67,52,0.65)]">
                <VideoCard video={v} />
              </div>
              <VideoCaption video={v} />
            </Reveal>
          ))}
        </div>

        {/* Shorts */}
        {shorts.length > 0 && (
          <>
            <Reveal className="mx-auto mt-16 flex max-w-5xl items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-umber/35" />
              <h3 className="font-display text-base text-mocha sm:text-lg">
                Saanvi&apos;s Shorts
              </h3>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-umber/35" />
            </Reveal>
            <div className="-mx-5 mt-8 flex snap-x gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-auto sm:grid sm:max-w-5xl sm:grid-cols-4 sm:gap-6 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
              {shorts.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={i * 0.06}
                  className="w-[44%] shrink-0 snap-start sm:w-auto"
                >
                  <div className="rounded-2xl transition duration-500 hover:-translate-y-1">
                    <VideoCard video={v} vertical />
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}

        <Reveal className="mt-12 text-center">
          <a
            href={site.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#c4302b] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(196,48,43,0.7)] transition hover:bg-[#a52722]"
          >
            <YouTubeIcon className="h-5 w-5" /> Subscribe on YouTube
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Podcasts ───────────────────────── */

export function PodcastSection() {
  return (
    <section
      id="podcasts"
      className="parchment-sky relative scroll-mt-28 py-24 text-cream md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Heading
          tone="warm"
          eyebrow="Podcasts"
          title="In conversation"
          script="with Saanvi"
          sub="Long-form conversations on astrology, Vastu and living with clarity."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {podcasts.map((p, i) => {
            const ep = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <article className="group/card flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream text-cocoa shadow-[0_35px_70px_-40px_rgba(0,0,0,0.9)] ring-1 ring-latte/30 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_45px_80px_-40px_rgba(0,0,0,0.95)]">
                  {/* video */}
                  <div className="p-2.5 pb-0">
                    <VideoCard video={p} />
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-umber to-bronze-deep text-cream shadow-[0_8px_18px_-8px_rgba(92,67,52,0.8)]">
                        <Mic className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 leading-tight">
                        <span className="block truncate text-sm font-semibold text-mocha">
                          {p.show}
                        </span>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-bronze">
                          Episode {ep}
                        </span>
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg leading-snug text-midnight">
                      {p.title}
                    </h3>
                    {p.caption && (
                      <p className="mt-1.5 text-sm leading-relaxed text-cocoa/65">
                        {p.caption}
                      </p>
                    )}

                    {/* waveform footer */}
                    <div className="mt-auto flex items-end gap-[3px] border-t border-sand pt-4">
                      {[
                        5, 9, 6, 12, 8, 14, 7, 10, 5, 11, 8, 13, 6, 9, 4, 10, 7,
                        12, 5, 8,
                      ].map((h, j) => (
                        <span
                          key={j}
                          style={{ height: h * 1.4 }}
                          className={`w-[3px] rounded-full transition-colors duration-500 ${
                            j < 7
                              ? "bg-umber"
                              : "bg-sand group-hover/card:bg-tan"
                          }`}
                        />
                      ))}
                      <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.2em] text-cocoa/45">
                        Tap play
                      </span>
                    </div>
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
