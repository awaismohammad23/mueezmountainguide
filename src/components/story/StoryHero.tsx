import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { MediaImage } from "@/config/media";

type StoryHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lede: string;
  image: MediaImage;
};

export function StoryHero({
  eyebrow,
  title,
  subtitle,
  lede,
  image,
}: StoryHeroProps) {
  return (
    <section className="relative flex min-h-[88dvh] items-end overflow-hidden bg-hero">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%] animate-hero-zoom"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,24,33,0.25)_0%,rgba(12,24,33,0.2)_35%,rgba(12,24,33,0.78)_72%,rgba(12,24,33,0.97)_100%)]"
      />
      <Container className="relative pb-16 pt-32 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl animate-hero-rise">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-on-hero/70">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-none tracking-tight text-on-hero sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl font-display text-xl leading-snug text-on-hero/90 sm:text-2xl">
            {subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-hero/75 sm:text-lg">
            {lede}
          </p>
        </div>
      </Container>
    </section>
  );
}
