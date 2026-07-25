import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SocialLinks } from "@/components/footer/SocialLinks";
import { homeContent } from "@/config/home";

export function Inquire() {
  const { id, eyebrow, title, body, email, secondaryCta } = homeContent.inquire;

  return (
    <Section id={id} className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={body}
              align="center"
            />
            <div className="mt-10 flex flex-col items-center gap-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button href="/contact">Open contact form</Button>
                <Button
                  href={secondaryCta.href}
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {secondaryCta.label}
                </Button>
              </div>
              <a
                href={`mailto:${email}`}
                className="text-sm tracking-wide text-muted transition-colors hover:text-text"
              >
                {email}
              </a>
              <div className="pt-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
