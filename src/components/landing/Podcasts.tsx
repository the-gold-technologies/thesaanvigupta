import { Mic } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Heading } from "./Ornament";
import { VideoCard } from "./VideoCard";
import { podcasts } from "@/lib/site";

/** Podcast appearances. */
export default function Podcasts() {
  return (
    <section
      id="podcasts"
      className="parchment-sky relative scroll-mt-36 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading
          tone="warm"
          eyebrow="Podcasts"
          title="In conversation"
          script="with Saanvi"
          sub="Long-form conversations on astrology, Vastu and living with clarity."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {podcasts.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="rounded-3xl border border-latte/20 bg-white/[0.05] p-3"
            >
              <VideoCard video={p} />
              <div className="px-2 pb-2 pt-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-latte">
                  <Mic className="h-3.5 w-3.5" /> {p.show}
                </span>
                <h3 className="mt-2 font-display text-lg text-cream">
                  {p.title}
                </h3>
                {p.caption && (
                  <p className="mt-1 text-sm text-cream/70">{p.caption}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
