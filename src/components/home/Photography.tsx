"use client";

import { useState } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { homeContent } from "@/config/home";
import {
  galleryFilters,
  galleryImages,
  type GalleryCategory,
} from "@/config/media";
import { cx } from "@/lib/cx";

export function Photography() {
  const { id, eyebrow, title, description, cta } = homeContent.photography;
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const images =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === filter);

  const previewImages = images.slice(0, 6);
  const activeIndex = images.findIndex((image) => image.id === activeId);

  return (
    <Section id={id} className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
            <Button href={cta.href} variant="ghost" className="shrink-0 self-start sm:self-auto">
              {cta.label}
            </Button>
          </div>
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

        <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:grid-cols-6 sm:gap-3">
          {previewImages.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveId(image.id)}
              className="group relative aspect-square overflow-hidden bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={`Open ${image.alt}`}
            >
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-10 flex justify-center sm:mt-12">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </Reveal>
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
