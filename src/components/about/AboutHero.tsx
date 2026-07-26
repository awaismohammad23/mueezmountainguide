import { SiteImage } from "@/components/ui/SiteImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { aboutContent } from "@/config/about";

export function AboutHero() {
  const { eyebrow, title, intro, image, portrait } = aboutContent.hero;

  return (
    <>
      <section className="relative flex min-h-[78dvh] items-end overflow-hidden bg-hero sm:min-h-[85dvh]">
        <SiteImage
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] animate-hero-zoom"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,24,33,0.65)_0%,rgba(12,24,33,0.35)_22%,rgba(12,24,33,0.25)_45%,rgba(12,24,33,0.75)_72%,rgba(12,24,33,0.96)_100%)]"
        />
        <Container className="relative pb-16 pt-32 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl animate-hero-rise">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-on-hero/70">
              {eyebrow}
            </p>
            <h1 className="max-w-2xl font-display text-4xl leading-tight tracking-tight text-on-hero sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-bg py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                <SiteImage
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </Reveal>

            <Reveal delayMs={100} className="lg:col-span-6 lg:col-start-7">
              <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {intro}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
