import Reveal from "@/components/Reveal";
import { Heading } from "./Ornament";
import { VideoCard } from "./VideoCard";
import { tvVideos } from "@/lib/site";

/** Separate section for television appearances. */
export default function TvVideos() {
  return (
    <section id="tv" className="paper relative scroll-mt-36 py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Heading
          eyebrow="Watch Saanvi"
          title="See Saanvi on"
          script="television"
          sub="Real features from leading national news channels. Tap play to watch."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {tvVideos.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <VideoCard video={v} />
              <p className="mt-3 text-center text-sm text-cocoa/65">
                Featured on{" "}
                <strong className="font-semibold text-bronze-deep">
                  {v.highlight}
                </strong>
                {v.caption && ` · ${v.caption}`}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
