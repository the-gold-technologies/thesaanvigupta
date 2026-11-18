import {
  CalendarCheck,
  MessageCircle,
  ScrollText,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Heading } from "./Ornament";

const STEPS = [
  {
    Icon: MessageCircle,
    title: "Reach out",
    text: "Message on WhatsApp or call and tell us briefly what's on your mind.",
  },
  {
    Icon: CalendarCheck,
    title: "Share details",
    text: "Birth details, a floor plan or just your question, whichever fits your concern.",
  },
  {
    Icon: ScrollText,
    title: "Deep reading",
    text: "Saanvi studies your Kundali, numbers or space to find the real root cause.",
  },
  {
    Icon: Sparkles,
    title: "Clarity & remedies",
    text: "Clear answers, the right timing and simple remedies, with follow-up support.",
  },
];

/** Four-step path drawn as a gentle wave with planet nodes (as in the "timing note" reference card). */
export default function Journey() {
  return (
    <section className="paper relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Heading
          eyebrow="How it works"
          title="From confusion"
          script="to clarity"
        />

        <div className="relative mt-16">
          <svg
            className="pointer-events-none absolute inset-x-0 top-[34px] hidden h-16 w-full lg:block"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 30 C 125 -10, 250 70, 375 30 S 625 -10, 750 30 S 900 60, 1000 30"
              fill="none"
              stroke="#b48a4a"
              strokeOpacity="0.6"
              strokeWidth="1.2"
              strokeDasharray="3 6"
            />
          </svg>

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map(({ Icon, title, text }, i) => (
              <li key={title} className="relative text-center">
                <Reveal delay={i * 0.12}>
                  <div className="relative mx-auto grid h-[84px] w-[84px] place-items-center">
                    <span className="absolute inset-0 rounded-full bg-cream ring-1 ring-bronze/30" />
                    <span className="absolute inset-[7px] rounded-full bg-midnight" />
                    <Icon
                      className="relative h-8 w-8 text-gold"
                      strokeWidth={1.4}
                    />
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-sun font-display text-xs font-bold text-white ring-4 ring-cream">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg uppercase tracking-[0.08em] text-midnight">
                    {title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-cocoa/70">
                    {text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
