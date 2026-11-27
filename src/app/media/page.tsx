import type { Metadata } from "next";
import MediaHero from "@/components/media/MediaHero";
import {
  PodcastSection,
  PressSection,
  TvSection,
  YouTubeSection,
} from "@/components/media/MediaSections";
import Instagram from "@/components/landing/Instagram";

export const metadata: Metadata = {
  title: "Media — TV, YouTube & Podcasts",
  description:
    "Aacharya Saanvi Gupta in the media: featured on NDTV, Zee TV and Amar Ujala. Watch her TV features, YouTube guidance videos, Shorts and podcast conversations.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  return (
    <div className="bg-cream text-cocoa">
      <MediaHero />
      <PressSection />
      <TvSection />
      <YouTubeSection />
      <PodcastSection />
      <Instagram />
    </div>
  );
}
