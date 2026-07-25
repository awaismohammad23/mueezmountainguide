import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/config/home";

export function Venture() {
  const { id, eyebrow, title, body, ctaLabel, href, image } =
    homeContent.venture;

  return (
    <Section id={id} className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_48%,rgba(0,0,0,0.55)_100%)]"
        />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {body}
            </p>
            <div className="mt-9">
              <Button
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
