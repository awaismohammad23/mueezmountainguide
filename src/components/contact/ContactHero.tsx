import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { contactContent } from "@/config/contact";

export function ContactHero() {
  const { eyebrow, title, support, image } = contactContent.hero;

  return (
    <section className="relative flex min-h-[62dvh] items-end overflow-hidden bg-hero sm:min-h-[70dvh]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%] animate-hero-zoom"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,24,33,0.3)_0%,rgba(12,24,33,0.22)_40%,rgba(12,24,33,0.75)_72%,rgba(12,24,33,0.96)_100%)]"
      />
      <Container className="relative pb-14 pt-32 sm:pb-16 lg:pb-20">
        <div className="max-w-3xl animate-hero-rise">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-on-hero/70">
            {eyebrow}
          </p>
          <h1 className="max-w-2xl font-display text-4xl leading-tight tracking-tight text-on-hero sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-on-hero/75 sm:text-lg">
            {support}
          </p>
        </div>
      </Container>
    </section>
  );
}
