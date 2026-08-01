import { SiteImage } from "@/components/ui/SiteImage";
import { Container } from "@/components/ui/Container";
import type { MediaImage } from "@/config/media";

type PhotographyHeroProps = {
  eyebrow: string;
  title: string;
  support: string;
  image: MediaImage;
};

export function PhotographyHero({
  eyebrow,
  title,
  support,
  image,
}: PhotographyHeroProps) {
  return (
    <section className="relative flex min-h-[78dvh] items-end overflow-hidden bg-hero sm:min-h-[88dvh]">
      <SiteImage
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%] animate-hero-zoom sm:object-[center_30%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,24,33,0.68)_0%,rgba(12,24,33,0.35)_24%,rgba(12,24,33,0.25)_48%,rgba(12,24,33,0.78)_76%,rgba(12,24,33,0.97)_100%)]"
      />
      <Container className="relative pb-16 pt-32 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl animate-hero-rise">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-on-hero/70">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-on-hero sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-hero/75 sm:text-lg">
            {support}
          </p>
        </div>
      </Container>
    </section>
  );
}
