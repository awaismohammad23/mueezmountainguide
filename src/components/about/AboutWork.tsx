import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { aboutContent } from "@/config/about";

export function AboutWork() {
  const { eyebrow, title, intro, pillars, image } = aboutContent.work;

  return (
    <Section className="bg-bg py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={intro}
              />
            </Reveal>

            <div className="mt-12 space-y-10 border-t border-border/50 pt-10">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delayMs={80 * (index + 1)}>
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-text sm:text-2xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                      {pillar.body}
                    </p>
                    {"href" in pillar && pillar.href ? (
                      <div className="mt-5">
                        <Button
                          href={pillar.href}
                          variant="ghost"
                          size="sm"
                          {...("external" in pillar && pillar.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {pillar.ctaLabel}
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delayMs={120} className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface lg:sticky lg:top-28">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
