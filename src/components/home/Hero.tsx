import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/config/home";

export function Hero() {
  const { brand, headline, support, primaryCta, secondaryCta, image } =
    homeContent.hero;

  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden bg-hero">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_22%] animate-hero-zoom sm:object-[center_top]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,24,33,0.65)_0%,rgba(12,24,33,0.35)_28%,rgba(12,24,33,0.3)_48%,rgba(12,24,33,0.78)_74%,rgba(12,24,33,0.96)_100%)]"
      />
      <Container className="relative pb-16 pt-32 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl animate-hero-rise">
          <p className="mb-5 font-display text-5xl leading-none tracking-tight text-on-hero sm:text-6xl lg:text-7xl">
            {brand}
          </p>
          <h1 className="max-w-2xl font-display text-2xl leading-snug tracking-tight text-on-hero/95 sm:text-3xl lg:text-4xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-on-hero/75 sm:text-lg">
            {support}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="ghostOnDark">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
