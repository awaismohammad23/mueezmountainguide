"use client";

import { useState } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { photographyContent } from "@/config/photography";
import { cx } from "@/lib/cx";

export function PhotographyFeatured() {
  const { eyebrow, title, description, items } = photographyContent.featured;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hero, ...rest] = items;

  return (
    <Section className="border-y border-border/50 bg-black py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-10 sm:mb-12"
          />
        </Reveal>

        <div className="grid gap-4 sm:gap-5 lg:gap-6">
          <Reveal>
            <button
              type="button"
              onClick={() => setActiveIndex(0)}
              className="group relative block w-full overflow-hidden bg-surface text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={`Open ${hero.caption}`}
            >
              <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
                <SiteImage
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-on-hero/55">
                    Featured
                  </p>
                  <p className="mt-2 max-w-xl font-display text-xl text-on-hero sm:text-2xl">
                    {hero.caption}
                  </p>
                </div>
              </div>
            </button>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {rest.map((item, index) => (
              <Reveal key={item.id} delayMs={(index + 1) * 80}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index + 1)}
                  className="group relative block w-full overflow-hidden bg-surface text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label={`Open ${item.caption}`}
                >
                  <div className="relative aspect-[4/5]">
                    <SiteImage
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 to-transparent"
                    />
                    <p
                      className={cx(
                        "absolute inset-x-0 bottom-0 p-5 text-sm leading-relaxed text-on-hero/85 sm:p-6",
                      )}
                    >
                      {item.caption}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>

      {activeIndex != null ? (
        <Lightbox
          images={items}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
          getCaption={(image, index) => items[index]?.caption ?? image.alt}
        />
      ) : null}
    </Section>
  );
}
