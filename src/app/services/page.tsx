import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProblemSolver from "@/components/home/ProblemSolver";
import Process from "@/components/home/Process";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services: Astrology, Vastu, Numerology, Prashna & Tarot",
  description:
    "Astrology readings, Vastu consultancy without demolition, Numerology, Prashna Kundali and Tarot card reading by Aacharya Saanvi Gupta in Noida & Delhi NCR, in person or online.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ancient wisdom,"
        highlight="modern solutions."
        sub="Five sacred sciences, one goal: practical answers for your life, home and business. Available in person in Noida and online worldwide."
        crumbs={[{ label: "Services" }]}
      />
      <ServicesGrid showHeading={false} />
      <ProblemSolver />
      <Process />
      <CtaBand />
    </>
  );
}
