import { MessageCircle, ScrollText, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    Icon: MessageCircle,
    title: "Share your concern",
    text: "Message on WhatsApp or call. Share your birth details, floor plan or simply your question, whatever fits your problem.",
  },
  {
    Icon: ScrollText,
    title: "Your chart is decoded",
    text: "Saanvi studies your Kundali, numbers or space in depth and finds the real root of the problem, not just the symptoms.",
  },
  {
    Icon: Sparkles,
    title: "Clarity & remedies",
    text: "You leave with clear answers, the right timing and simple, affordable remedies. Follow-up support is included.",
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From confusion to clarity"
          highlight="in three steps."
        />
        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* constellation connector */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-20 w-full md:block"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M160 40 C 330 -10, 500 90, 500 40 S 700 -10, 840 40"
              fill="none"
              stroke="#e9c27a"
              strokeOpacity="0.35"
              strokeDasharray="4 8"
            />
          </svg>
          {STEPS.map(({ Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 0.15}
              className="relative text-center"
            >
              <div className="relative mx-auto grid h-20 w-20 place-items-center">
                <span className="absolute inset-0 rounded-full bg-gold/15 blur-xl" />
                <span className="relative grid h-20 w-20 place-items-center rounded-full border border-gold/50 bg-night text-gold shadow-[0_0_40px_-10px_rgba(233,194,122,0.8)]">
                  <Icon className="h-8 w-8" />
                </span>
                <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-saffron font-display text-xs font-bold text-night">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl text-ivory">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
