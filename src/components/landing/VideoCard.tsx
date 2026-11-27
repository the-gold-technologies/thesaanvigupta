"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { YouTubeIcon } from "@/components/Icons";
import { site, type Video } from "@/lib/site";

/**
 * Lightweight YouTube player: shows the thumbnail and only loads the
 * iframe after a tap. Without an ID it shows a branded poster that
 * links to the channel.
 */
const TINTS = [
  {
    h: "bg-[linear-gradient(90deg,#2b1f18_0%,#2b1f18_38%,rgba(43,31,24,0.35)_70%,rgba(43,31,24,0.1))]",
    v: "bg-[linear-gradient(180deg,rgba(43,31,24,0.15)_30%,#2b1f18_95%)]",
  },
  {
    h: "bg-[linear-gradient(90deg,#5a2e17_0%,#5a2e17_38%,rgba(90,46,23,0.35)_70%,rgba(90,46,23,0.1))]",
    v: "bg-[linear-gradient(180deg,rgba(90,46,23,0.15)_30%,#4a2513_95%)]",
  },
  {
    h: "bg-[linear-gradient(90deg,#3e362e_0%,#3e362e_38%,rgba(62,54,46,0.35)_70%,rgba(62,54,46,0.1))]",
    v: "bg-[linear-gradient(180deg,rgba(62,54,46,0.15)_30%,#3e362e_95%)]",
  },
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export function VideoCard({
  video,
  vertical = false,
  badge,
  className = "",
}: {
  video: Video;
  vertical?: boolean;
  /** Label for the poster's top-left tag (e.g. a channel name) */
  badge?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const aspect = vertical ? "aspect-[9/16]" : "aspect-video";
  const frame = `relative block w-full overflow-hidden rounded-2xl bg-mocha shadow-[0_24px_50px_-30px_rgba(43,31,24,0.7)] ${aspect}`;

  const playBadge = (
    <span
      className={`absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-[#c2622a] text-white shadow-lg transition group-hover:scale-110 group-hover:bg-mars ${
        vertical ? "h-9 w-12" : "h-12 w-16"
      }`}
    >
      <Play className="h-5 w-5 fill-current" />
    </span>
  );

  if (!video.id) {
    // Branded poster until a real YouTube ID is added in site.ts
    const tint = TINTS[hash(video.title) % TINTS.length];
    const label =
      badge ?? video.highlight ?? (vertical ? "Short" : "Watch on YouTube");
    return (
      <a
        href={site.socials.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${video.title} — watch on YouTube`}
        className={`group ${frame} ${className}`}
      >
        <span
          className={`absolute inset-y-0 right-0 ${vertical ? "left-0" : "left-[30%]"}`}
        >
          <Image
            src="/images/saanvi.webp"
            alt=""
            fill
            sizes={vertical ? "240px" : "(min-width: 1024px) 480px, 70vw"}
            className={`object-cover transition duration-700 group-hover:scale-105 ${
              vertical ? "object-[50%_15%]" : "object-[50%_20%]"
            }`}
          />
        </span>
        <span className={`absolute inset-0 ${vertical ? tint.v : tint.h}`} />

        {/* top row */}
        <span className="absolute inset-x-3 top-3 flex items-center justify-between sm:inset-x-4 sm:top-4">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-black/35 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-latte backdrop-blur-sm sm:text-[10px]">
            {badge && <span className="h-1.5 w-1.5 rounded-full bg-mars" />}
            {label}
          </span>
          <YouTubeIcon className="h-5 w-5 text-white/85" />
        </span>

        {/* title */}
        <span
          className={`absolute bottom-0 left-0 p-4 text-left font-display uppercase leading-[1.15] text-cream sm:p-5 ${
            vertical
              ? "right-0 text-[13px]"
              : "right-[38%] text-base sm:text-xl"
          }`}
        >
          {video.title}
          <span className="mt-3 flex items-center gap-2 font-sans text-[10px] font-semibold normal-case tracking-[0.15em] text-latte sm:text-[11px]">
            <span
              className={`grid place-items-center rounded-full bg-[#c2622a] text-white shadow-lg transition group-hover:scale-110 group-hover:bg-mars ${vertical ? "h-7 w-7" : "h-9 w-9"}`}
            >
              <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
            </span>
            {vertical ? "Watch" : "Watch now"}
          </span>
        </span>
      </a>
    );
  }

  if (playing) {
    return (
      <div className={`${frame} ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play: ${video.title}`}
      className={`group ${frame} ${className}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt=""
        fill
        sizes={vertical ? "200px" : "(min-width: 1024px) 400px, 90vw"}
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      {playBadge}
    </button>
  );
}

/** Caption under a video: "<b>Highlight</b> · caption" */
export function VideoCaption({ video }: { video: Video }) {
  return (
    <p className="mt-3 text-center text-sm text-cocoa/65">
      {video.highlight && (
        <strong className="font-semibold text-bronze-deep">
          {video.highlight}
        </strong>
      )}
      {video.highlight && video.caption && " · "}
      {video.caption}
    </p>
  );
}
