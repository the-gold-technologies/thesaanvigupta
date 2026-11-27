import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  Briefcase,
  Building2,
  Compass,
  GraduationCap,
  Home,
  Landmark,
  LayoutGrid,
  MonitorPlay,
  Palette,
  Phone,
  Sparkles,
  Star,
  User,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { Heading, Sparkle } from "@/components/landing/Ornament";
import BronzeWheel from "@/components/landing/BronzeWheel";
import Testimonials from "@/components/landing/Testimonials";
import { achievements, site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vastu Coaching in Noida & Online — Learn Vastu Shastra",
  description:
    "Learn Vastu Shastra from award-winning Aacharya Saanvi Gupta. Practical Vastu coaching for homeowners, interior designers, architects and aspiring consultants — in Noida and online.",
  alternates: { canonical: "/vastu-coaching" },
};

const enquire = waLink(
  "Namaste Saanvi ma'am, I would like to know more about Vastu Coaching."
);

const audience = [
  {
    icon: Home,
    title: "Homeowners",
    text: "Correct and care for your own space.",
  },
  {
    icon: Palette,
    title: "Interior designers",
    text: "Design layouts that feel right and work right.",
  },
  {
    icon: Landmark,
    title: "Architects",
    text: "Plan Vastu-aligned buildings from the start.",
  },
  {
    icon: Briefcase,
    title: "Property professionals",
    text: "Advise buyers with confidence.",
  },
  {
    icon: GraduationCap,
    title: "Aspiring consultants",
    text: "Build a strong base for professional practice.",
  },
  {
    icon: Sparkles,
    title: "Astrology practitioners",
    text: "Add Vastu to your guidance.",
  },
];

const modules = [
  {
    icon: Compass,
    title: "Foundations of Vastu",
    text: "Directions, the Vastu Purusha Mandala and how energy moves through a space.",
  },
  {
    icon: LayoutGrid,
    title: "16 Zones & 5 Elements",
    text: "What each zone governs, its element, colours and the activities that belong there.",
  },
  {
    icon: BookOpen,
    title: "Reading Floor Plans",
    text: "Find the centre, map the zones and spot imbalances on any layout.",
  },
  {
    icon: Sparkles,
    title: "Remedies Without Demolition",
    text: "Colour, metal, placement and element-based corrections that work with existing structures.",
  },
  {
    icon: Home,
    title: "Residential Vastu",
    text: "Entrances, kitchens, bedrooms, toilets and lockers — homes, flats and villas.",
  },
  {
    icon: Building2,
    title: "Commercial & Industrial Vastu",
    text: "Offices, shops, showrooms, factories and plot selection.",
  },
];

const method = [
  {
    title: "Understand",
    text: "Core principles of directions, zones and elements, explained simply.",
  },
  {
    title: "Practise",
    text: "Analyse real floor plans and case studies with guidance.",
  },
  {
    title: "Apply",
    text: "Confidently suggest corrections for homes, offices and plots.",
  },
];

const formats = [
  {
    icon: User,
    title: "One-on-one",
    text: "Personal mentoring at your pace, focused on your goals and questions.",
  },
  {
    icon: Users,
    title: "Group batch",
    text: "Learn alongside others, discuss case studies and grow together.",
  },
  {
    icon: MonitorPlay,
    title: "Online",
    text: "Join live from anywhere in India or abroad.",
  },
];

export default function VastuCoachingPage() {
  return (
    <div className="bg-cream text-cocoa">
      {/* ── Hero ── */}
      <section className="parchment-sky relative overflow-hidden pb-20 pt-32 text-cream sm:pt-36 lg:pb-28 lg:pt-40">
        <BronzeWheel
          className="pointer-events-none absolute -left-52 -top-40 h-[620px] w-[620px] opacity-25"
          stroke="#e3c9a6"
          glyph="#e3c9a6"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-latte/40 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-latte">
              <GraduationCap className="h-3.5 w-3.5" /> Vastu Coaching · Noida
              &amp; Online
            </span>
            <h1 className="mt-6 font-display text-4xl uppercase leading-[1.05] sm:text-6xl">
              Learn Vastu Shastra
              <span className="mt-1 block font-script text-[1.3em] normal-case leading-[0.9] text-latte">
                from an Aacharya
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Practical, structured coaching from award-winning Vastu consultant
              Saanvi Gupta. Understand the 16 zones and five elements, read
              floor plans and suggest remedies without demolition — with
              confidence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={enquire}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-latte px-8 py-4 font-semibold text-mocha transition hover:bg-cream"
              >
                <WhatsAppIcon className="h-5 w-5" /> Enquire about coaching
              </a>
              <a
                href={`tel:${site.phonePrimaryRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-latte/40 px-8 py-4 font-medium text-cream transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-latte" /> {site.phonePrimary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full border-4 border-latte/40 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
              <Image
                src="/images/saanvi.webp"
                alt="Aacharya Saanvi Gupta"
                fill
                sizes="(min-width: 1024px) 380px, 80vw"
                className="object-cover object-top"
                preload
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha/70 via-transparent to-transparent" />
            </div>
            <figure className="absolute -bottom-6 left-3 max-w-[15rem] rounded-2xl border border-latte/40 bg-cream/95 px-5 py-4 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur sm:-left-10">
              <p className="font-serif text-lg italic leading-snug text-midnight">
                &ldquo;20+ years of guiding homes, families and
                businesses.&rdquo;
              </p>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="paper py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Heading
            align="left"
            eyebrow="Who it's for"
            title="Made for"
            script="curious minds"
            sub="No prior knowledge needed — coaching starts from first principles and builds to real-world analysis."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {audience.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 0.05}
                className="flex items-start gap-4 rounded-2xl border border-bronze/20 bg-white/80 p-5 transition hover:-translate-y-0.5 hover:border-bronze/45"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-parchment text-bronze-deep">
                  <a.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-semibold text-midnight">{a.title}</h3>
                  <p className="mt-0.5 text-sm text-cocoa/65">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum timeline ── */}
      <section className="bg-parchment py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <Heading
            eyebrow="Curriculum"
            title="Your learning"
            script="journey"
            sub="Six modules, from first principles to confident, practical Vastu analysis."
          />
          <ol className="relative mt-16">
            <span className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-transparent via-bronze/40 to-transparent md:left-1/2" />
            {modules.map((m, i) => {
              const right = i % 2 === 1;
              return (
                <li
                  key={m.title}
                  className="relative grid gap-6 pb-10 last:pb-0 md:grid-cols-2 md:gap-16"
                >
                  <span className="absolute left-6 top-4 z-10 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border-4 border-parchment bg-bronze-deep font-display text-sm text-cream md:left-1/2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Reveal
                    delay={0.05}
                    className={`ml-16 md:ml-0 ${right ? "md:col-start-2" : "md:text-right"}`}
                  >
                    <div className="rounded-2xl border border-bronze/20 bg-cream p-6 shadow-[0_24px_50px_-35px_rgba(43,31,24,0.5)]">
                      <div
                        className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-bronze ${right ? "" : "md:justify-end"}`}
                      >
                        <m.icon className="h-4 w-4" /> Module {i + 1}
                      </div>
                      <h3 className="mt-2 font-display text-xl text-midnight">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cocoa/70">
                        {m.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Method ── */}
      <section className="parchment-sky deep py-24 text-cream">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Heading
            tone="warm"
            eyebrow="How you learn"
            title="Understand. Practise."
            script="Apply."
          />
          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <span className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-latte/0 via-latte/50 to-latte/0 md:block" />
            {method.map((m, i) => (
              <Reveal
                key={m.title}
                delay={i * 0.1}
                className="relative text-center"
              >
                <span className="relative mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border border-latte/50 bg-mocha font-display text-2xl text-latte shadow-[0_0_40px_-10px_rgba(227,201,166,0.6)]">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl">{m.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-cream/75">
                  {m.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formats ── */}
      <section className="paper py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Heading
            eyebrow="Formats"
            title="Learn the way"
            script="that suits you"
            sub="Ask us for upcoming dates, duration and fees."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {formats.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.08}
                className={`flex flex-col rounded-[1.75rem] p-8 ${
                  i === 1
                    ? "bg-gradient-to-br from-umber to-mocha text-cream shadow-[0_30px_60px_-30px_rgba(62,54,46,0.8)] md:-translate-y-4"
                    : "border border-bronze/20 bg-white/80"
                }`}
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${i === 1 ? "bg-white/10 text-latte" : "bg-parchment text-bronze-deep"}`}
                >
                  <f.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3
                  className={`mt-6 font-display text-2xl ${i === 1 ? "text-cream" : "text-midnight"}`}
                >
                  {f.title}
                </h3>
                <p
                  className={`mt-2 flex-1 text-sm leading-relaxed ${i === 1 ? "text-cream/80" : "text-cocoa/70"}`}
                >
                  {f.text}
                </p>
                <a
                  href={waLink(
                    `Namaste Saanvi ma'am, I'm interested in ${f.title.toLowerCase()} Vastu Coaching.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                    i === 1
                      ? "bg-latte text-mocha hover:bg-cream"
                      : "btn-bronze-line"
                  }`}
                >
                  Ask for details
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Your teacher ── */}
      <section className="bg-parchment py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-bronze">
              Your teacher
            </span>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight text-midnight sm:text-4xl">
              Aacharya
              <span className="block font-script text-[1.4em] normal-case leading-[0.9] text-bronze">
                Saanvi Gupta
              </span>
            </h2>
            <blockquote className="mt-6 border-l-2 border-antique pl-5 font-serif text-xl italic leading-relaxed text-cocoa/80">
              Vastu is not about fear or breaking walls. It is about
              understanding your space — and once you understand it, you can
              bring it into balance.
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-6">
              {site.stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl text-bronze-deep">
                    {s.value.toLocaleString("en-IN")}
                    {s.suffix}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-cocoa/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li
                  key={a.title}
                  className="flex items-start gap-4 rounded-2xl border border-bronze/20 bg-cream p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-jupiter/15 text-antique">
                    <Star className="h-4 w-4 fill-current" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-midnight">{a.title}</h3>
                    <p className="text-sm text-cocoa/60">{a.by}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* ── Enquiry ── */}
      <section className="paper px-5 pb-24 sm:px-6">
        <Reveal className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-umber/40 shadow-[0_40px_90px_-50px_rgba(62,54,46,0.8)] md:grid-cols-[1.2fr_0.8fr]">
          <div className="parchment-sky p-8 text-cream sm:p-12">
            <h2 className="font-display text-3xl uppercase leading-tight sm:text-4xl">
              Start your
              <span className="block font-script text-[1.4em] normal-case leading-[0.9] text-latte">
                Vastu journey
              </span>
            </h2>
            <p className="mt-5 max-w-md text-cream/80">
              Message us and we&apos;ll share the next batch dates, format and
              fees.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={enquire}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-latte px-7 py-3.5 font-semibold text-mocha transition hover:bg-cream"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
              </a>
              <a
                href={`tel:${site.phonePrimaryRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-latte/40 px-7 py-3.5 font-medium text-cream transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-latte" /> Call now
              </a>
            </div>
          </div>
          <div className="bg-cream p-8 sm:p-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-bronze">
              Tell us
            </div>
            <ul className="mt-5 space-y-4">
              {[
                "Your current knowledge level",
                "Your goal — personal or professional",
                "Preferred mode — online or in person",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-sm text-cocoa"
                >
                  <Sparkle className="mt-1 h-3 w-3 shrink-0 text-antique" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
