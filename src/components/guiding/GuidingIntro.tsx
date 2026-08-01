import { SiteImage } from "@/components/ui/SiteImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { guidingContent } from "@/config/guiding";

export function GuidingIntro() {
  const { eyebrow, title, paragraphs, image } = guidingContent.intro;

  return (
    <Section className="bg-bg py-20 sm:py-24 lg:py-28">
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
                className="object-cover object-[center_20%] transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
