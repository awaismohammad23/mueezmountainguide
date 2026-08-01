import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { homeContent } from "@/config/home";

export function Guiding() {
  const { id, eyebrow, title, body, highlights, image, cta } =
    homeContent.guiding;

  return (
    <Section id={id} className="border-t border-border/50 bg-black py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading eyebrow={eyebrow} title={title} />
            </Reveal>
            <Reveal delayMs={80}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {body}
              </p>
            </Reveal>

            <div className="mt-12 space-y-8 border-t border-border/50 pt-10">
              {highlights.map((item, index) => (
                <Reveal key={item.title} delayMs={100 * (index + 1)}>
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-text sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delayMs={280}>
              <div className="mt-10">
                <Button href={cta.href}>{cta.label}</Button>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={120} className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface lg:sticky lg:top-28">
              <SiteImage
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
