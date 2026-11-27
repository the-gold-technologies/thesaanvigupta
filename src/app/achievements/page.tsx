import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Expand, Mic, Newspaper, Tv } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import AwardPhoto from "@/components/landing/AwardPhoto";
import Instagram from "@/components/landing/Instagram";
import BlogSection from "@/components/BlogSection";
import { Heading } from "@/components/landing/Ornament";
import { achievements } from "@/lib/site";

export const metadata: Metadata = {
  title: "Achievements & Awards",
  description:
    "Awards and honours received by Aacharya Saanvi Gupta — including the Vastu Excellence Award from the Chief Minister of Uttar Pradesh (2021), Excellence in Vastu, Excellence in Astrology and the title of Aacharya.",
  alternates: { canonical: "/achievements" },
};

const press = [
  {
    icon: Tv,
    name: "NDTV",
    text: "Numerology and horoscope guidance on NDTV, including the Bhagyoday 2026 predictions.",
    href: "/media#tv",
    cta: "See the features",
  },
  {
    icon: Mic,
    name: "Amar Ujala",
    text: "Regular astrology-based LIVE shows with the Amar Ujala group.",
  },
  {
    icon: Newspaper,
    name: "The Pioneer",
    text: "Guest columnist for The Pioneer newspaper on astrology and Vastu.",
  },
];

export default function AchievementsPage() {
  return (
    <div className="bg-cream text-cocoa">
      <PageHero
        eyebrow="Achievements"
        title="Honoured for"
        highlight="trusted guidance."
        sub="From the Chief Minister of Uttar Pradesh to leading astrology conferences — recognition for Saanvi's work in Vastu, astrology and numerology."
        crumbs={[{ label: "Achievements" }]}
        tone="dark"
      />

      {/* ── Gallery ── */}
      <section id="awards" className="paper relative py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Heading
            eyebrow="Wall of honour"
            title="Every award"
            script="tells a story"
            sub="Recognitions from scholars, conferences and communities across India. Tap any photo to view it full-size."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:auto-rows-[420px] lg:grid-cols-4">
            {achievements.map((a, i) => (
              <Reveal
                key={a.title}
                delay={(i % 4) * 0.08}
                className={i === 0 ? "sm:col-span-2" : ""}
              >
                <AwardPhoto
                  image={a.image}
                  title={a.title}
                  className="group block h-full w-full overflow-hidden rounded-3xl shadow-[0_30px_60px_-40px_rgba(43,31,24,0.8)] transition hover:-translate-y-1"
                >
                  <div
                    className={`relative w-full overflow-hidden bg-mocha lg:aspect-auto lg:h-full ${i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}
                  >
                    {a.image ? (
                      <Image
                        src={a.image}
                        alt={`${a.title} — ${a.by}`}
                        fill
                        sizes={
                          i === 0
                            ? "(min-width: 640px) 600px, 90vw"
                            : "(min-width: 1024px) 290px, (min-width: 640px) 45vw, 90vw"
                        }
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Award className="absolute inset-0 m-auto h-10 w-10 text-latte" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 via-45% to-transparent" />
                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                      <Expand className="h-4 w-4" />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-latte">
                        <Award className="h-3.5 w-3.5" />
                        {a.title}
                      </span>
                      <p className="mt-2 font-display text-lg leading-snug text-cream">
                        {a.by}
                      </p>
                      {a.event && (
                        <p className="mt-1 text-xs italic text-cream/65">
                          {a.event}
                        </p>
                      )}
                    </div>
                  </div>
                </AwardPhoto>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media & press ── */}
      <section className="bg-parchment py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Heading
            eyebrow="Media & press"
            title="A trusted voice"
            script="in the media"
            sub="Beyond awards, Saanvi shares her knowledge with audiences on television, live shows and in print."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {press.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 0.08}
                className="flex flex-col rounded-3xl border border-bronze/15 bg-cream p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-mocha text-latte">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-midnight">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cocoa/70">
                  {p.text}
                </p>
                {p.href && (
                  <Link
                    href={p.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-bronze-deep transition hover:text-cocoa"
                  >
                    {p.cta} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BlogSection />

      <Instagram />
    </div>
  );
}
