import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { homeContent } from "@/config/home";

export function About() {
  const { id, eyebrow, title, paragraphs, image, cta, secondaryCta } =
    homeContent.about;

  return (
    <Section id={id} className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading eyebrow={eyebrow} title={title} />
            </Reveal>
            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delayMs={80 * (index + 1)}>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delayMs={320}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={cta.href} variant="ghost">
                  {cta.label}
                </Button>
                <Button href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
