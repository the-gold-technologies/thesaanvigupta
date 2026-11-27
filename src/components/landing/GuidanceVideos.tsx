import Reveal from "@/components/Reveal";
import { YouTubeIcon } from "@/components/Icons";
import { Heading } from "./Ornament";
import { VideoCaption, VideoCard } from "./VideoCard";
import { guidanceVideos, shorts, site } from "@/lib/site";

/** YouTube section: long-form guidance videos + a row of Shorts. */
export default function GuidanceVideos() {
  return (
    <section
      id="videos"
      className="relative scroll-mt-36 bg-parchment py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading
          eyebrow="Saanvi's guidance"
          title="Guidance on"
          script="life's problems"
          sub="Watch Saanvi explain practical remedies for home, marriage, career and money. Tap play to watch."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {guidanceVideos.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <VideoCard video={v} />
              <VideoCaption video={v} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex items-center gap-4">
          <span className="hairline-bronze flex-1" />
          <h3 className="font-display text-lg text-midnight">
            Saanvi&apos;s Shorts
          </h3>
          <span className="hairline-bronze flex-1" />
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {shorts.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <VideoCard video={v} vertical />
            </Reveal>
          ))}
        </div>

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
