import { SiteImage } from "@/components/ui/SiteImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { guidingContent } from "@/config/guiding";

export function GuidingDisciplines() {
  const { eyebrow, title, description, items } = guidingContent.disciplines;

  return (
    <Section
      id="disciplines"
      className="border-y border-border/50 bg-black py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-12 lg:mb-16"
          />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
          {items.map((item, index) => (
            <Reveal key={item.id} delayMs={80 * (index % 2)}>
              <article id={item.id} className="group scroll-mt-28">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <SiteImage
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {item.meta}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight text-text sm:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
