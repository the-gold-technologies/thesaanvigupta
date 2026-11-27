"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { achievements } from "@/lib/site";

/** Wraps an award; when it has a photo, tapping opens it full-size with next/prev arrows. */
export default function AwardPhoto({
  image,
  title,
  className = "",
  children,
}: {
  image?: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const items = achievements.filter((a) => Boolean(a.image));
  const [currentIndex, setCurrentIndex] = useState(() => {
    const idx = items.findIndex((a) => a.image === image || a.title === title);
    return idx >= 0 ? idx : 0;
  });

  const current = items[currentIndex] || { image, title };

  const openModal = () => {
    const idx = items.findIndex((a) => a.image === image || a.title === title);
    if (idx >= 0) setCurrentIndex(idx);
    dialog.current?.showModal();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!dialog.current?.open) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items.length]);

  if (!image) return <div className={className}>{children}</div>;

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        aria-label={`View ${title} full-size`}
        className={`text-left ${className}`}
      >
        {children}
      </button>
      <dialog
        ref={dialog}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto w-[min(92vw,960px)] rounded-2xl bg-transparent p-0 backdrop:bg-black/80"
      >
        <div className="relative aspect-[4/3] w-full">
          {current.image && (
            <Image
              key={current.image}
              src={current.image}
              alt={current.title}
              fill
              sizes="92vw"
              className="object-contain"
            />
          )}

          {/* Left Arrow Button (styled just like cross button) */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(
                  (prev) => (prev - 1 + items.length) % items.length
                );
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-black/90"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Right Arrow Button (styled just like cross button) */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev + 1) % items.length);
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-black/90"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          {/* Close Button */}
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Close"
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-black/90"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </dialog>
    </>
  );
}
