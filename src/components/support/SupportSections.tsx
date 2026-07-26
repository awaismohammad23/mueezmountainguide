import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { supportContent } from "@/config/support";

export function SupportIntro() {
  const { eyebrow, title, paragraphs, image, primaryCta, secondaryCta } =
    supportContent.intro;

  return (
    <Section className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading eyebrow={eyebrow} title={title} />
            </Reveal>
            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delayMs={70 * (index + 1)}>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delayMs={220}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCta.label}
                </Button>
                <Button href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={100} className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface sm:aspect-[5/6]">
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export function SupportMeet() {
  const { eyebrow, title, quote, paragraphs, image } = supportContent.meet;

  return (
    <Section className="border-y border-border/50 bg-black py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <SectionHeading eyebrow={eyebrow} title={title} />
            </Reveal>
            <Reveal delayMs={80}>
              <blockquote className="mt-8 border-l border-accent/70 pl-5">
                <p className="font-display text-2xl leading-snug tracking-tight text-text sm:text-3xl">
                  “{quote.text}”
                </p>
                <footer className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {quote.attribution}
                </footer>
              </blockquote>
            </Reveal>
            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delayMs={100 * (index + 1)}>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function SupportWhy() {
  const { eyebrow, title, paragraphs, highlights, image } = supportContent.why;

  return (
    <Section className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading eyebrow={eyebrow} title={title} />
            </Reveal>
            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delayMs={70 * (index + 1)}>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
            <div className="mt-12 space-y-8 border-t border-border/50 pt-10">
              {highlights.map((item, index) => (
                <Reveal key={item.title} delayMs={80 * (index + 1)}>
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-text sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delayMs={120} className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface lg:sticky lg:top-28">
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export function SupportZom() {
  const { eyebrow, title, body, image } = supportContent.zom;

  return (
    <Section className="relative overflow-hidden border-y border-border/50 bg-black py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0">
        <SiteImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.75)_50%,rgba(0,0,0,0.5)_100%)]"
        />
      </div>
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl tracking-tight text-text sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {body}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function SupportCta() {
  const { title, body, primary, secondary } = supportContent.cta;

  return (
    <Section className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-text sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {body}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={primary.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="ghost">
                {secondary.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
