import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { expeditionsContent } from "@/config/expeditions";

export function ExpeditionsIntro() {
  const { eyebrow, title, paragraphs, image } = expeditionsContent.intro;

  return (
    <Section className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeading eyebrow={eyebrow} title={title} />
            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delayMs={70 * (index + 1)}>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={100} className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface sm:aspect-[5/6]">
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export function ExpeditionsTypes() {
  const { eyebrow, title, description, items } = expeditionsContent.types;

  return (
    <Section className="border-y border-border/50 bg-black py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-12 lg:mb-16"
          />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
          {items.map((item, index) => (
            <Reveal key={item.title} delayMs={80 * (index % 2)}>
              <article className="group">
                <div className="relative aspect-[16/11] overflow-hidden bg-surface">
                  <SiteImage
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {item.meta}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight text-text">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {item.body}
                </p>
                {"href" in item && item.href ? (
                  <div className="mt-5">
                    <Button
                      href={item.href}
                      variant="ghost"
                      size="sm"
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.ctaLabel}
                    </Button>
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ExpeditionsFeatured() {
  const { eyebrow, title, paragraphs, image, cta } = expeditionsContent.featured;

  return (
    <Section className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6 lg:order-2">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface">
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:order-1">
            <SectionHeading eyebrow={eyebrow} title={title} />
            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Button href={cta.href} variant="ghost">
                {cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export function ExpeditionsPrinciples() {
  const { eyebrow, title, items } = expeditionsContent.principles;

  return (
    <Section className="border-y border-border/50 bg-black py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} className="mb-12 lg:mb-16" />
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
          {items.map((item, index) => (
            <Reveal key={item.title} delayMs={70 * index}>
              <div className="border-t border-border/60 pt-6">
                <h3 className="font-display text-xl tracking-tight text-text sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ExpeditionsPath() {
  const { eyebrow, title, steps } = expeditionsContent.path;

  return (
    <Section className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} className="mb-14 lg:mb-20" />
        </Reveal>

        <div className="space-y-20 lg:space-y-28">
          {steps.map((step, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={step.label}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <Reveal
                  className={
                    reverse ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"
                  }
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface sm:aspect-[5/6]">
                    <SiteImage
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                      style={{ objectPosition: step.objectPosition }}
                    />
                  </div>
                </Reveal>

                <Reveal
                  delayMs={120}
                  className={
                    reverse
                      ? "lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:order-1"
                      : "lg:col-span-5 lg:col-start-8"
                  }
                >
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                    {step.label}
                  </p>
                  <h3 className="font-display text-2xl tracking-tight text-text sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                    {step.body}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export function ExpeditionsCta() {
  const { title, body, primary, secondary } = expeditionsContent.cta;

  return (
    <Section className="border-t border-border/50 bg-black py-24 sm:py-28 lg:py-32">
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
              <Button href={primary.href}>{primary.label}</Button>
              <Button
                href={secondary.href}
                variant="ghost"
                {...(secondary.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {secondary.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
