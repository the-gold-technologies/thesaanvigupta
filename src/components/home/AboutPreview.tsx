import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { site } from "@/lib/site";

export default function AboutPreview() {
  return (
    <section className="relative overflow-x-clip py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md">
          {/* orbit rings */}
          <div className="spin-slow absolute -inset-10 rounded-full border border-dashed border-gold/20">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron shadow-[0_0_20px_#f07a3a]" />
          </div>
          <div className="spin-slower absolute -inset-4 rounded-full border border-gold/10">
            <span className="absolute bottom-[12%] right-[6%] h-2 w-2 rounded-full bg-gold shadow-[0_0_14px_#e9c27a]" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-t-[12rem] ring-1 ring-gold/40 shadow-[0_40px_80px_-30px_rgba(91,50,170,0.8)]">
            <Image
              src="/images/saanvi.webp"
              alt="Aacharya Saanvi Gupta holding Samarangana Sutradhara, an ancient treatise on Vastu architecture"
              fill
              sizes="(max-width: 1024px) 90vw, 450px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <div className="font-display text-2xl text-ivory">
                Aacharya Saanvi Gupta
              </div>
              <div className="text-sm text-gold">
                Astrologer · Vastu Expert · Numerologist
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              ✦ Meet your guide
            </div>
            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
              Astrology should{" "}
              <span className="text-gold-gradient">guide you,</span> never
              frighten you.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 leading-relaxed text-muted">
              Saanvi&apos;s journey began far from astrology. She studied
              commerce at Sri Venkateswara College, Delhi University, and went
              on to clear nine Actuarial Science exams. That analytical training
              shapes every reading she gives today: logical, structured and
              practical.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              With a diploma in Scientific Vastu and Dynamic Numerology, two
              decades of practice, a column in
              <span className="text-ivory"> The Pioneer</span> and live
              astrology shows with the
              <span className="text-ivory"> Amar Ujala</span> group, she has one
              mission: to replace fear with clarity and give people remedies
              that actually fit their lives.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {site.stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <div className="font-display text-2xl text-gold sm:text-3xl">
                    <Counter
                      value={s.value}
                      decimals={s.decimals}
                      suffix={s.suffix}
                    />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="btn-ghost mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Read her full story <ArrowRight className="h-4 w-4 text-gold" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
