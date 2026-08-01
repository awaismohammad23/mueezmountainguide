"use client";

import { useEffect, useId } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import type { MediaImage } from "@/config/media";

type LightboxProps = {
  images: readonly MediaImage[];
  activeIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
  getCaption?: (image: MediaImage, index: number) => string;
};

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onChange,
  getCaption,
}: LightboxProps) {
  const titleId = useId();
  const image = images[activeIndex];
  const caption = getCaption?.(image, activeIndex) ?? image.alt;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        onChange((activeIndex + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        onChange((activeIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length, onChange, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <p id={titleId} className="sr-only">
        {caption}
      </p>

      <button
        type="button"
        className="absolute right-4 top-4 z-10 h-10 px-3 text-sm tracking-wide text-on-hero/80 transition-colors hover:text-on-hero focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-hero sm:right-8 sm:top-8"
        onClick={onClose}
      >
        Close
      </button>

      <p className="absolute left-4 top-4 z-10 text-xs tracking-[0.18em] text-on-hero/55 sm:left-8 sm:top-8">
        {String(activeIndex + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </p>

      <button
        type="button"
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-2xl text-on-hero/70 transition-colors hover:text-on-hero focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-hero sm:left-6"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation();
          onChange((activeIndex - 1 + images.length) % images.length);
        }}
      >
        ‹
      </button>

      <button
        type="button"
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-2xl text-on-hero/70 transition-colors hover:text-on-hero focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-hero sm:right-6"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          onChange((activeIndex + 1) % images.length);
        }}
      >
        ›
      </button>

      <div
        className="relative max-h-[85dvh] w-full max-w-5xl animate-hero-rise"
        onClick={(event) => event.stopPropagation()}
      >
        <SiteImage
          src={image.src}
          alt={image.alt}
          width={1600}
          height={2000}
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="mx-auto max-h-[85dvh] w-auto object-contain"
          priority
        />
        <p className="mt-4 text-center text-sm text-on-hero/65">{caption}</p>
      </div>
    </div>
  );
}
