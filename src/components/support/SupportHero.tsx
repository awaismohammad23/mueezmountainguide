import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { MediaImage } from "@/config/media";

type SupportHeroProps = {
  eyebrow: string;
  title: string;
  support: string;
  image: MediaImage;
};

export function SupportHero({
  eyebrow,
  title,
  support,
  image,
}: SupportHeroProps) {
  return (
    <section className="relative flex min-h-[78dvh] items-end overflow-hidden bg-hero sm:min-h-[85dvh]">
      <SiteImage
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] animate-hero-zoom lg:object-[center_40%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,24,33,0.7)_0%,rgba(12,24,33,0.4)_22%,rgba(12,24,33,0.28)_45%,rgba(12,24,33,0.8)_76%,rgba(12,24,33,0.97)_100%)]"
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
