import Image from "next/image";
import { Award, Check, Crown } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Heading } from "./Ornament";
import Laurel from "./Laurel";
import AwardPhoto from "./AwardPhoto";
import { achievements, whyUs } from "@/lib/site";

/** Awards: spotlight card for the top honour + laurel medallions + trust strip. */
export default function Honours() {
  const [top, ...rest] = achievements;
  const hasPhotos = achievements.some((a) => a.image);

  return (
    <section
      id="awards"
      className="parchment-sky deep relative scroll-mt-24 overflow-hidden py-24 text-cream md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(233,194,122,0.18),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <Heading
          tone="warm"
          eyebrow="Honoured & awarded"
          title="Recognised for"
          script="trusted guidance"
          sub="State and community honours celebrating Saanvi's work guiding families and businesses across Delhi NCR."
        />

        {/* Spotlight: the top honour */}
        <Reveal className="mt-16">
          <AwardPhoto
            image={top.image}
            title={top.title}
            className="group block w-full"
          >
            <div className="relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-latte/30 bg-gradient-to-br from-[#5a4636] via-[#43372c] to-[#2e2620] p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] sm:p-12 md:grid-cols-[auto_1fr]">
              <div className="relative mx-auto h-52 w-52 sm:h-60 sm:w-60">
                <Laurel className="absolute inset-0 h-full w-full" />
                <div className="absolute inset-[22%] grid place-items-center overflow-hidden rounded-full border-2 border-[#e9c27a] bg-gradient-to-br from-[#f3d999] via-[#c9963f] to-[#8a6a2a] shadow-[0_0_60px_-10px_rgba(233,194,122,0.7)]">
                  {top.image ? (
                    <Image
                      src={top.image}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-center text-mocha">
                      <Crown className="mx-auto h-7 w-7" strokeWidth={1.6} />
                      {top.year && (
                        <span className="mt-1 block font-display text-2xl font-semibold">
                          {top.year}
                        </span>
                      )}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-latte/40 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-latte">
                  <Award className="h-3.5 w-3.5" /> State honour
                </span>
                <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                  {top.title}
                </h3>
                <p className="mt-3 font-serif text-xl italic text-latte">
                  {top.by}
                </p>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/70">
                  Honoured for excellence in Vastu Shastra and for helping homes
                  and businesses find balance without demolition.
                </p>
              </div>
            </div>
          </AwardPhoto>
        </Reveal>

        {/* Medallions */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {rest.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <AwardPhoto
                image={a.image}
                title={a.title}
                className="group block w-full text-center"
              >
                <div className="relative mx-auto h-36 w-36 transition duration-500 group-hover:-translate-y-1">
                  <Laurel className="absolute inset-0 h-full w-full opacity-90" />
                  <div className="absolute inset-[24%] grid place-items-center overflow-hidden rounded-full border border-[#e9c27a]/70 bg-gradient-to-br from-[#5a4636] to-[#2e2620] text-latte">
                    {a.image ? (
                      <Image
                        src={a.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    ) : (
                      <Award className="h-7 w-7" strokeWidth={1.4} />
                    )}
                  </div>
                </div>
                <h3 className="mt-4 text-center font-display text-lg leading-snug text-cream">
                  {a.title}
                </h3>
                <p className="mx-auto mt-1 max-w-[16rem] text-center text-xs leading-relaxed text-cream/60">
                  {a.by}
                </p>
              </AwardPhoto>
            </Reveal>
          ))}
        </div>

        {hasPhotos && (
          <p className="mt-8 text-center text-xs text-cream/50">
            Tap any award to view it full-size
          </p>
        )}

        {/* Why families trust her */}
        <Reveal className="mt-20 rounded-[1.75rem] border border-latte/20 bg-white/[0.04] p-6 sm:p-8">
          <div className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-latte">
            Why families trust her
          </div>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyUs.map((w) => (
              <li key={w.title} className="text-center">
                <span className="mx-auto grid h-9 w-9 place-items-center rounded-full border border-latte/40 text-latte">
                  <Check className="h-4 w-4" />
                </span>
                <h4 className="mt-3 text-sm font-semibold text-cream">
                  {w.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-cream/60">
                  {w.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
