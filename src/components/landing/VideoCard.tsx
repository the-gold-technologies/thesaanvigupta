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
export function VideoCard({
  video,
  vertical = false,
  className = "",
}: {
  video: Video;
  vertical?: boolean;
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
    return (
      <a
        href={site.socials.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${video.title} — watch on YouTube`}
        className={`group ${frame} ${className}`}
      >
        <span className="parchment-sky absolute inset-0" />
        <span className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(134,93,54,0.6),transparent)]" />
        <span
          className={`absolute inset-x-0 bottom-0 p-4 text-left font-display leading-snug text-cream ${vertical ? "text-sm" : "text-base sm:text-lg"}`}
        >
          {video.title}
        </span>
        <YouTubeIcon className="absolute right-3 top-3 h-5 w-5 text-latte/80" />
        {playBadge}
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
