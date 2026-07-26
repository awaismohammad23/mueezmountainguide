"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MediaImage } from "@/config/media";
import { cx } from "@/lib/cx";

type ImageCarouselProps = {
  images: readonly MediaImage[];
  className?: string;
  aspectClassName?: string;
  showCaptions?: boolean;
};

export function ImageCarousel({
  images,
  className,
  aspectClassName = "aspect-[4/5] sm:aspect-[16/10]",
  showCaptions = true,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = images.length;
  const safeIndex = total > 0 ? index % total : 0;
  const current = total > 0 ? images[safeIndex] : null;

  useEffect(() => {
    setIndex((value) => (total === 0 ? 0 : Math.min(value, total - 1)));
  }, [total]);

  useEffect(() => {
    if (total === 0) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setIndex((value) => (value - 1 + total) % total);
      }
      if (event.key === "ArrowRight") {
        setIndex((value) => (value + 1) % total);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  if (!current) return null;

  const previous = () => setIndex((value) => (value - 1 + total) % total);
  const next = () => setIndex((value) => (value + 1) % total);

  return (
    <div className={cx("w-full", className)}>
      <div
        className={cx("relative overflow-hidden bg-surface", aspectClassName)}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current == null) return;
          const delta = event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(delta) < 40) return;
          if (delta > 0) previous();
          else next();
        }}
      >
        {images.map((image, imageIndex) => (
          <div
            key={`${image.src}-${imageIndex}`}
            className={cx(
              "absolute inset-0 transition-opacity duration-500 ease-out",
              imageIndex === safeIndex ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={imageIndex !== safeIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
              priority={imageIndex === 0}
            />
          </div>
        ))}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-4 sm:p-5">
          {showCaptions ? (
            <p className="max-w-xl text-sm leading-relaxed text-on-hero/85">
              {current.alt}
            </p>
          ) : (
            <span />
          )}
          <p className="shrink-0 text-xs tracking-[0.18em] text-on-hero/70">
            {String(safeIndex + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <CarouselArrow direction="previous" onClick={previous} />
        <div
          className="flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Carousel slides"
        >
          {images.map((image, imageIndex) => {
            const selected = imageIndex === safeIndex;
            return (
              <button
                key={`${image.src}-dot-${imageIndex}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`Show image ${imageIndex + 1}`}
                onClick={() => setIndex(imageIndex)}
                className={cx(
                  "h-1.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  selected ? "w-8 bg-accent" : "w-1.5 bg-border hover:bg-muted",
                )}
              />
            );
          })}
        </div>
        <CarouselArrow direction="next" onClick={next} />
      </div>
    </div>
  );
}

type CarouselArrowProps = {
  direction: "previous" | "next";
  onClick: () => void;
  className?: string;
};

function CarouselArrow({ direction, onClick, className }: CarouselArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "previous" ? "Previous image" : "Next image"}
      className={cx(
        "inline-flex h-11 w-11 items-center justify-center border border-border/80 text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <span aria-hidden className="text-xl leading-none">
        {direction === "previous" ? "‹" : "›"}
      </span>
    </button>
  );
}
