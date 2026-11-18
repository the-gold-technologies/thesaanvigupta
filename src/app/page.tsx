import Hero from "@/components/landing/Hero";
import Ribbon from "@/components/landing/Ribbon";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Problems from "@/components/landing/Problems";
import Journey from "@/components/landing/Journey";
import Numerology from "@/components/landing/Numerology";
import Testimonials from "@/components/landing/Testimonials";
import Honours from "@/components/landing/Honours";
import FaqSection from "@/components/landing/FaqSection";
import FinalCta from "@/components/landing/FinalCta";
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

/** Home page: light "logo" theme (ivory + bronze) with midnight-sky accent bands. */
export default function Home() {
  return (
    <div className="bg-cream text-cocoa">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Hero />
      <Ribbon />
      <About />
      <Services />
      <Problems />
      <Journey />
      <Numerology />
      <Testimonials />
      <Honours />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
