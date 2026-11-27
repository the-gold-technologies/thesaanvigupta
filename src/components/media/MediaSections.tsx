import Image from "next/image";
import { ArrowUpRight, Mic, Newspaper, Tv } from "lucide-react";
import Reveal from "@/components/Reveal";
import { YouTubeIcon } from "@/components/Icons";
import { Heading } from "@/components/landing/Ornament";
import { VideoCard } from "@/components/landing/VideoCard";
import {
  guidanceVideos,
  media,
  podcasts,
  shorts,
  site,
  tvFeatures,
  type Video,
} from "@/lib/site";
import { WORDMARK } from "./MediaHero";

/* ───────────────────────── Press / outlets ───────────────────────── */

export function PressSection() {
  return (
    <section id="media" className="paper relative scroll-mt-28 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading
          eyebrow="Featured in"
          title="Trusted by"
          script="national media"
          sub="Recognised for authentic Vedic guidance and trusted Vastu expertise in Noida & Delhi NCR."
        />

        <Reveal className="mt-14 overflow-hidden rounded-[2rem] border border-bronze/15 bg-white shadow-[0_40px_80px_-50px_rgba(43,31,24,0.55)]">
          <div className="grid divide-y divide-bronze/12 md:grid-cols-3 md:divide-x md:divide-y-0">
            {media.map((m) => {
              const print = m.kind === "Hindi daily";
              const Icon = print ? Newspaper : Tv;
              const href =
                m.url ??
                (tvFeatures.some((t) => t.channel === m.name)
                  ? "#tv"
                  : undefined);
              const inner = (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-parchment text-bronze-deep transition group-hover:bg-mocha group-hover:text-latte">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`mt-6 block text-4xl text-midnight sm:text-[2.75rem] ${WORDMARK[m.name] ?? "font-display"}`}
                  >
                    {m.name}
                  </span>
                  <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-bronze">
                    {m.kind}
                  </span>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-bronze-deep">
                    {href ? (
                      <>
                        {print ? "Read the feature" : "See the feature"}
                        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </>
                    ) : (
                      <span className="text-cocoa/55">
                        {print ? "Featured in print" : "Featured on television"}
                      </span>
                    )}
                  </span>
                </>
              );
              const cls =
                "group flex flex-col items-center px-8 py-12 text-center transition hover:bg-parchment/50";
              return href ? (
                <a
                  key={m.name}
                  href={href}
                  {...(m.url
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <div key={m.name} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>
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
  const [lead, ...rest] = guidanceVideos;
  return (
    <section id="videos" className="paper relative scroll-mt-28 py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading
          eyebrow="On YouTube"
          title="Guidance on"
          script="life's problems"
          sub="Practical remedies for home, marriage, career and money — explained simply."
        />

        {lead && (
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
            <Reveal>
              <VideoCard video={lead} />
              <Caption video={lead} />
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {rest.map((v, i) => (
                <Reveal key={v.title} delay={(i + 1) * 0.08}>
                  <VideoCard video={v} />
                  <Caption video={v} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {shorts.length > 0 && (
          <>
            <Reveal className="mt-20 flex items-center gap-4">
              <span className="hairline-bronze flex-1" />
              <span className="inline-flex items-center gap-2 font-display text-lg text-midnight">
                <YouTubeIcon className="h-5 w-5 text-[#c4302b]" />
                Saanvi&apos;s Shorts
              </span>
              <span className="hairline-bronze flex-1" />
            </Reveal>
            <div className="-mx-5 mt-8 flex snap-x gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-auto sm:grid sm:max-w-4xl sm:grid-cols-4 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
              {shorts.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={i * 0.06}
                  className="w-[44%] shrink-0 snap-start sm:w-auto"
                >
                  <VideoCard video={v} vertical />
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

function Caption({ video }: { video: Video }) {
  return (
    <div className="mt-4">
      {video.highlight && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze">
          {video.highlight}
        </span>
      )}
      <h3 className="mt-1 font-display text-lg leading-snug text-midnight">
        {video.title}
      </h3>
      {video.caption && (
        <p className="mt-1 text-sm text-cocoa/65">{video.caption}</p>
      )}
    </div>
  );
}

/* ───────────────────────── Podcasts ───────────────────────── */

export function PodcastSection() {
  return (
    <section
      id="podcasts"
      className="parchment-sky relative scroll-mt-28 py-24 text-cream md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading
          tone="warm"
          eyebrow="Podcasts"
          title="In conversation"
          script="with Saanvi"
          sub="Long-form conversations on astrology, Vastu and living with clarity."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {podcasts.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="rounded-3xl border border-latte/20 bg-white/[0.05] p-3 transition hover:border-latte/40"
            >
              <VideoCard
                video={p}
                badge={`Episode ${String(i + 1).padStart(2, "0")}`}
              />
              <div className="px-2 pb-2 pt-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-latte">
                    <Mic className="h-3.5 w-3.5" /> {p.show}
                  </span>
                  <h3 className="mt-1 font-display text-lg leading-snug text-cream">
                    {p.title}
                  </h3>
                  {p.caption && (
                    <p className="mt-1 text-sm text-cream/70">{p.caption}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
