import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { guidingContent } from "@/config/guiding";

export function GuidingCta() {
  const { eyebrow, title, body, primaryCta, secondaryCta } =
    guidingContent.cta;

  return (
    <Section className="border-t border-border/50 bg-black py-20 sm:py-24 lg:py-28">
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
