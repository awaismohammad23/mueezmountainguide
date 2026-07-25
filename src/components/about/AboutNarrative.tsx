import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { MediaImage } from "@/config/media";

type AboutNarrativeProps = {
  id?: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  image: MediaImage;
  reverse?: boolean;
  tone?: "bg" | "black";
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export function AboutNarrative({
  id,
  eyebrow,
  title,
  paragraphs,
  image,
  reverse = false,
  tone = "bg",
  cta,
}: AboutNarrativeProps) {
  return (
    <Section
      id={id}
      className={
        tone === "black"
          ? "border-y border-border/50 bg-black py-24 sm:py-28 lg:py-32"
          : "bg-bg py-24 sm:py-28 lg:py-32"
      }
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal
            className={
              reverse ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"
            }
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-surface sm:aspect-[5/6]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <div
            className={
              reverse
                ? "lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:order-1"
                : "lg:col-span-6 lg:col-start-7"
            }
          >
            <Reveal>
              <SectionHeading eyebrow={eyebrow} title={title} />
            </Reveal>
            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delayMs={80 * (index + 1)}>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
            {cta ? (
              <Reveal delayMs={280}>
                <div className="mt-8">
                  <Button
                    href={cta.href}
                    variant="ghost"
                    {...(cta.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {cta.label}
                  </Button>
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
