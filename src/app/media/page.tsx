import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Mic, MonitorPlay, Newspaper, Tv } from "lucide-react";
import PageHero from "@/components/PageHero";
import MediaFeatures from "@/components/landing/MediaFeatures";
import TvVideos from "@/components/landing/TvVideos";
import GuidanceVideos from "@/components/landing/GuidanceVideos";
import Podcasts from "@/components/landing/Podcasts";
import Instagram from "@/components/landing/Instagram";

export const metadata: Metadata = {
  title: "Media — TV, YouTube & Podcasts",
  description:
    "Aacharya Saanvi Gupta in the media: featured on NDTV, Zee TV and Amar Ujala. Watch her TV features, YouTube guidance videos, Shorts and podcast conversations.",
  alternates: { canonical: "/media" },
};

const jump = [
  { icon: Newspaper, label: "Featured in", href: "#media" },
  { icon: Tv, label: "On television", href: "#tv" },
  { icon: MonitorPlay, label: "YouTube", href: "#videos" },
  { icon: Mic, label: "Podcasts", href: "#podcasts" },
  { icon: Camera, label: "Instagram", href: "#instagram" },
];

export default function MediaPage() {
  return (
    <div className="bg-cream text-cocoa">
      <PageHero
        eyebrow="Media"
        title="Saanvi in"
        highlight="the spotlight"
        sub="Television features, press coverage, YouTube guidance and podcast conversations — all in one place."
        crumbs={[{ label: "Media" }]}
      />

      {/* jump bar */}
      <nav
        aria-label="Media sections"
        className="sticky top-[72px] z-30 border-y border-bronze/15 bg-cream/95 backdrop-blur sm:top-[80px]"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:justify-center sm:px-6 [&::-webkit-scrollbar]:hidden">
          {jump.map((j) => (
            <Link
              key={j.href}
              href={j.href}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-bronze/25 px-4 py-2 text-sm text-bronze-deep transition hover:border-bronze hover:bg-parchment"
            >
              <j.icon className="h-4 w-4" /> {j.label}
            </Link>
          ))}
        </div>
      </nav>

      <MediaFeatures />
      <TvVideos />
      <GuidanceVideos />
      <Podcasts />
      <Instagram />
    </div>
  );
}
