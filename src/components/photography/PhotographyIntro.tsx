import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { photographyContent } from "@/config/photography";

export function PhotographyIntro() {
  const { eyebrow, title, paragraphs } = photographyContent.intro;

  return (
    <Section className="bg-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                {eyebrow}
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl">
                {title}
              </h2>
            </div>
            <div className="space-y-5 lg:col-span-7 lg:col-start-6">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
