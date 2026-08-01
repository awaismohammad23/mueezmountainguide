"use client";

import { useMemo, useState } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import {
  galleryImages,
  type GalleryCategory,
  type GalleryImage,
} from "@/config/media";
import { photographyContent } from "@/config/photography";
import { cx } from "@/lib/cx";

export function PhotographyGallery() {
  const { id, eyebrow, title, description, filters } =
    photographyContent.gallery;
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const images = useMemo(
    () =>
      filter === "all"
        ? galleryImages
        : galleryImages.filter((image) => image.category === filter),
    [filter],
  );

  const activeIndex = images.findIndex((image) => image.id === activeId);

  return (
    <Section id={id} className="bg-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>

        <Reveal delayMs={80}>
          <div
            className="sticky top-[4.75rem] z-20 -mx-5 mt-10 border-y border-border/40 bg-bg/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:mt-12 sm:px-8 lg:top-20 lg:mx-0 lg:px-0"
            role="tablist"
            aria-label="Photography categories"
          >
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === item.id}
                  onClick={() => {
                    setFilter(item.id);
                    setActiveId(null);
                  }}
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
          </div>
        </Reveal>

        <p className="mt-6 text-xs tracking-[0.18em] text-muted">
          {String(images.length).padStart(2, "0")} images
        </p>

        <div
          key={filter}
          className="mt-6 columns-2 gap-2 sm:mt-8 sm:columns-3 sm:gap-3 lg:columns-4 lg:gap-4"
        >
          {images.map((image, index) => (
            <GalleryTile
              key={image.id}
              image={image}
              index={index}
              onOpen={() => setActiveId(image.id)}
            />
          ))}
        </div>
      </Container>

      {activeIndex >= 0 ? (
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

type GalleryTileProps = {
  image: GalleryImage;
  index: number;
  onOpen: () => void;
};

function GalleryTile({ image, index, onOpen }: GalleryTileProps) {
  const aspectClassName =
    index % 5 === 0
      ? "aspect-[3/4]"
      : index % 5 === 1
        ? "aspect-[4/5]"
        : index % 5 === 2
          ? "aspect-square"
          : index % 5 === 3
            ? "aspect-[5/6]"
            : "aspect-[4/5]";

  return (
    <Reveal
      delayMs={Math.min(index * 40, 200)}
      className="mb-2 break-inside-avoid sm:mb-3 lg:mb-4"
    >
      <button
        type="button"
        onClick={onOpen}
        className={cx(
          "group relative block w-full overflow-hidden bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          aspectClassName,
        )}
        aria-label={`Open ${image.alt}`}
      >
        <SiteImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:p-4">
          <p className="text-[0.65rem] uppercase tracking-[0.16em] text-on-hero/55">
            {image.category}
          </p>
          <p className="mt-1 line-clamp-2 text-left text-xs leading-snug text-on-hero/90 sm:text-sm">
            {image.alt}
          </p>
        </div>
      </button>
    </Reveal>
  );
}
