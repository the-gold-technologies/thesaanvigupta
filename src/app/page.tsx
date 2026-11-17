import Hero from "@/components/home/Hero";
import ZodiacMarquee from "@/components/home/ZodiacMarquee";
import ProblemSolver from "@/components/home/ProblemSolver";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutPreview from "@/components/home/AboutPreview";
import Process from "@/components/home/Process";
import NumerologyTool from "@/components/home/NumerologyTool";
import Reviews from "@/components/home/Reviews";
import Achievements from "@/components/home/Achievements";
import Faq from "@/components/home/Faq";
import CtaBand from "@/components/CtaBand";
import { faqs } from "@/lib/site";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Hero />
      <ZodiacMarquee />
      <ProblemSolver />
      <ServicesGrid />
      <AboutPreview />
      <Process />
      <NumerologyTool />
      <Reviews />
      <Achievements />
      <Faq />
      <CtaBand />
    </>
  );
}
