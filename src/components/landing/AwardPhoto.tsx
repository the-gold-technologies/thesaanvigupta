"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { X } from "lucide-react";

/** Wraps an award; when it has a photo, tapping opens it full-size. */
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
  if (!image) return <div className={className}>{children}</div>;

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
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
          <Image
            src={image}
            alt={title}
            fill
            sizes="92vw"
            className="object-contain"
          />
        </div>
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label="Close"
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </dialog>
    </>
  );
}
