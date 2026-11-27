import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { Sparkle } from "./Ornament";

/** Full-width mid-page consultation band on a light parchment (#F5ECDF) background. */
export default function ConsultBand() {
  return (
    <section className="relative overflow-hidden border-y border-sand bg-[#F5ECDF] px-5 py-14 text-center sm:px-6 md:py-16">
      <Reveal className="relative mx-auto max-w-5xl">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(180,138,74,0.16),transparent)]" />

        <div className="relative">
          <h2 className="font-display text-2xl uppercase leading-tight text-mocha sm:text-4xl">
            Talk to Noida&apos;s{" "}
            <span className="font-script text-4xl normal-case text-umber sm:text-6xl">
              Best Astrologer
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cocoa/75 sm:text-base">
            One honest conversation can bring clarity to your situation.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${site.phonePrimaryRaw}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-umber px-7 py-3.5 font-semibold text-cream transition hover:bg-bronze-deep sm:w-auto"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-umber/40 px-7 py-3.5 font-medium text-mocha transition hover:bg-umber/10 sm:w-auto"
            >
              <CalendarCheck className="h-4 w-4 text-umber" /> Book an
              Appointment
            </Link>
          </div>

          <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-umber/25 bg-cream/70 py-1.5 pl-1.5 pr-4 text-xs text-cocoa/85 sm:text-sm">
            <span className="rounded-full bg-umber px-3 py-1 font-semibold text-cream">
              ₹1,100
            </span>
            <Sparkle className="h-3 w-3 text-antique" />
            Personal consultation with Saanvi Gupta
          </div>
        </div>
      </Reveal>
    </section>
  );
}
