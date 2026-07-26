import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { zindabadStory } from "@/config/zindabad";

export function StorySpotlight() {
  const { eyebrow, title, body, ctaLabel, href, image } = zindabadStory.spotlight;

  return (
    <Section
      id="story"
      className="relative overflow-hidden border-y border-border/50 bg-black py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0">
        <SiteImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_52%,rgba(0,0,0,0.45)_100%)]"
        />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
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
              <Button href={href}>{ctaLabel}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
