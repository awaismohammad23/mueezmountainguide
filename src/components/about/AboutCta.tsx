import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/config/about";

export function AboutCta() {
  const { title, body, primary, secondary } = aboutContent.cta;

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
