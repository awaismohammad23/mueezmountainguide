import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { photographyContent } from "@/config/photography";

export function PhotographyCta() {
  const { eyebrow, title, body, primaryCta, secondaryCta } =
    photographyContent.cta;

  return (
    <Section className="bg-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={body}
            />
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <Button href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
