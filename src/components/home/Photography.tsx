"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { homeContent } from "@/config/home";
import {
  galleryFilters,
  galleryImages,
  type GalleryCategory,
  type GalleryImage,
} from "@/config/media";
import { cx } from "@/lib/cx";

export function Photography() {
  const { id, eyebrow, title, description } = homeContent.photography;
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const images =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === filter);

  const activeIndex = images.findIndex((image) => image.id === activeId);
  const activeImage = activeIndex >= 0 ? images[activeIndex] : null;

  return (
    <Section id={id} className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>

        <Reveal delayMs={100}>
          <div
            className="mt-10 flex flex-wrap gap-2 sm:mt-12"
            role="tablist"
            aria-label="Photography categories"
          >
            {galleryFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                onClick={() => setFilter(item.id)}
                className={cx(
                  "h-9 px-4 text-sm tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  filter === item.id
                    ? "bg-accent text-on-accent"
                    : "bg-transparent text-muted hover:text-text",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <div className="mt-8 sm:mt-10">
            <ImageCarousel
              key={filter}
              images={images}
              aspectClassName="aspect-[3/4] sm:aspect-[16/10] lg:aspect-[21/10]"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
          {images.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveId(image.id)}
              className="group relative aspect-square overflow-hidden bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={`Open ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Container>

      {activeImage ? (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setActiveId(null)}
          onChange={(nextIndex) => setActiveId(images[nextIndex].id)}
        />
      ) : null}
    </Section>
  );
}

type LightboxProps = {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

function Lightbox({ images, activeIndex, onClose, onChange }: LightboxProps) {
  const titleId = useId();
  const image = images[activeIndex];

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

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <p id={titleId} className="sr-only">
        {image.alt}
      </p>

      <button
        type="button"
        className="absolute right-4 top-4 z-10 h-10 px-3 text-sm tracking-wide text-on-hero/80 transition-colors hover:text-on-hero focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-hero sm:right-8 sm:top-8"
        onClick={onClose}
      >
        Close
      </button>

      <button
        type="button"
        className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-on-hero/70 transition-colors hover:text-on-hero focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-hero sm:left-6 sm:flex"
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
        className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center text-on-hero/70 transition-colors hover:text-on-hero focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-hero sm:right-6 sm:flex"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          onChange((activeIndex + 1) % images.length);
        }}
      >
        ›
      </button>

      <div
        className="relative max-h-[85dvh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1600}
          height={2000}
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="mx-auto max-h-[85dvh] w-auto object-contain"
          priority
        />
        <p className="mt-4 text-center text-sm text-on-hero/65">{image.alt}</p>
      </div>
    </div>
  );
}
