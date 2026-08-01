import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { guidingContent } from "@/config/guiding";

export function GuidingPathway() {
  const { eyebrow, title, paragraphs, image, cta, secondaryCta } =
    guidingContent.pathway;

  return (
    <Section className="border-y border-border/50 bg-black py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
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

          <Reveal delayMs={80} className="order-1 lg:order-2 lg:col-span-6">
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
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={cta.href}>{cta.label}</Button>
              <Button href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
