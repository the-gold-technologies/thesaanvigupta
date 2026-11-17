import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, GraduationCap, Mic, Newspaper, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Achievements from "@/components/home/Achievements";
import Reviews from "@/components/home/Reviews";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Aacharya Saanvi Gupta",
  description:
    "Meet Aacharya Saanvi Gupta: award-winning astrologer, Vastu consultant and numerologist in Noida with 20+ years of experience, a Pioneer columnist and a Delhi University alumna.",
};

const JOURNEY = [
  { Icon: GraduationCap, title: "Delhi University", text: "B.Com (first division) from Sri Venkateswara College, after schooling at Mater Dei Convent School, New Delhi." },
  { Icon: BookOpen, title: "Actuarial Science", text: "Cleared nine actuarial exams. Her analytical, data-driven mindset still shapes every chart she reads." },
  { Icon: Sparkles, title: "The calling", text: "After pausing her corporate career for family, she turned to the sacred sciences and earned diplomas in Scientific Vastu and Dynamic Numerology." },
  { Icon: Newspaper, title: "Columnist", text: "Guest columnist for The Pioneer newspaper, writing on Vastu, astrology and festivals." },
  { Icon: Mic, title: "Live shows", text: "Hosted astrology-based live shows with the Amar Ujala group, reaching audiences across North India." },
  { Icon: Users, title: "10,000+ consultations", text: "Two decades of guiding families, professionals, business owners and well-known personalities." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The guide who turns"
        highlight="fear into clarity."
        sub="Commerce graduate, actuarial scholar, mother of two, and one of Delhi NCR's most trusted voices in Vedic astrology and Vastu."
        crumbs={[{ label: "About" }]}
      />

      <section className="relative py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-t-[14rem] ring-1 ring-gold/40 shadow-[0_40px_80px_-30px_rgba(91,50,170,0.8)]">
              <Image src="/images/saanvi.webp" alt="Aacharya Saanvi Gupta" fill sizes="(max-width: 1024px) 90vw, 520px" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -bottom-6 left-6 right-6 grid grid-cols-2 gap-2 rounded-2xl p-4 text-center sm:grid-cols-4">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-xl text-gold">
                    <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="pt-6 lg:pt-0">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl">
                Her <span className="text-gold-gradient">philosophy</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ivory/90">
                Too often, astrology is used to frighten people. Saanvi believes the opposite: the stars exist to
                <span className="text-gold"> guide</span>, and every chart holds a way forward.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Her readings combine the depth of Vedic tradition with the logic of her actuarial training. You won&apos;t hear
                vague predictions or be pushed into expensive rituals. Instead, you get a clear diagnosis, honest timing and
                simple remedies that fit into everyday life. Her Vastu work follows the same principle: corrections without demolition.
              </p>
            </Reveal>

            <h3 className="mt-16 font-display text-2xl text-ivory">The journey</h3>
            <ol className="relative mt-8 space-y-6 border-l border-gold/25 pl-8">
              {JOURNEY.map(({ Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <li className="relative">
                    <span className="absolute -left-[49px] grid h-9 w-9 place-items-center rounded-full border border-gold/50 bg-night text-gold shadow-[0_0_20px_-6px_rgba(233,194,122,0.8)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="glass rounded-2xl p-5">
                      <h4 className="font-display text-lg text-ivory">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Achievements />
      <Reviews />
      <CtaBand title="Ready to talk to Saanvi?" highlight="Your answers are waiting." />
    </>
  );
}
