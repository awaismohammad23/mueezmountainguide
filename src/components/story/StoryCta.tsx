import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

type StoryCtaProps = {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string; external?: boolean };
  press?: { label: string; href: string };
};

export function StoryCta({
  title,
  body,
  primary,
  secondary,
  press,
}: StoryCtaProps) {
  return (
    <Section className="bg-bg py-20 sm:py-24 lg:py-28">
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
            {press ? (
              <a
                href={press.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-sm tracking-wide text-muted transition-colors hover:text-text"
              >
                {press.label}
              </a>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
