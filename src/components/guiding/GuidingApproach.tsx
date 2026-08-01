import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { guidingContent } from "@/config/guiding";

export function GuidingApproach() {
  const { eyebrow, title, items } = guidingContent.approach;

  return (
    <Section className="bg-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            className="mb-12 sm:mb-14"
          />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
          {items.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 70}>
              <div className="border-t border-border/60 pt-6">
                <p className="text-xs tracking-[0.18em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-text">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
