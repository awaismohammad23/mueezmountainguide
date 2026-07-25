import { Container } from "@/components/ui/Container";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { aboutContent } from "@/config/about";

export function AboutPhotography() {
  const { id, eyebrow, title, description, images } = aboutContent.photography;

  return (
    <Section id={id} className="border-y border-border/50 bg-black py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-10 sm:mb-12"
          />
        </Reveal>
        <Reveal delayMs={100}>
          <ImageCarousel images={images} />
        </Reveal>
      </Container>
    </Section>
  );
}
