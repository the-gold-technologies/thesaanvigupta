import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/landing/Services";
import Problems from "@/components/landing/Problems";
import Journey from "@/components/landing/Journey";
import FinalCta from "@/components/landing/FinalCta";

export const metadata: Metadata = {
  title: "Services: Astrology, Vastu, Numerology & Prashna Kundali",
  description:
    "Astrology readings, Vastu consultancy without demolition, Numerology and Prashna Kundali by Aacharya Saanvi Gupta in Noida & Delhi NCR, in person or online.",
};

export default function ServicesPage() {
  return (
    <div className="bg-cream text-cocoa">
      <PageHero
        eyebrow="Services"
        title="Ancient wisdom,"
        highlight="modern solutions."
        sub="Four sacred sciences, one goal: practical answers for your life, home and business. Available in person in Noida and online worldwide."
        crumbs={[{ label: "Services" }]}
      />
      <Services showHeading={false} />
      <Problems />
      <Journey />
      <FinalCta />
    </div>
  );
}
