import { SiteImage } from "@/components/ui/SiteImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cx } from "@/lib/cx";

type StoryFigure = {
  src: string;
  alt: string;
  caption: string;
};

type StoryQuote = {
  text: string;
  attribution: string;
};

type StorySectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  image?: StoryFigure;
  quote?: StoryQuote;
  closing?: string;
  reverse?: boolean;
  tone?: "bg" | "black";
};

export function StorySection({
  id,
  eyebrow,
  title,
  paragraphs,
  image,
  quote,
  closing,
  reverse = false,
  tone = "bg",
}: StorySectionProps) {
  return (
    <Section
      id={id}
      className={cx(
        "scroll-mt-36 py-20 sm:py-24 lg:py-28",
        tone === "black"
          ? "border-y border-border/50 bg-black"
          : "bg-bg",
      )}
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div
            className={cx(
              "lg:col-span-6",
              reverse && "lg:order-2",
            )}
          >
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                {eyebrow}
              </p>
              <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight text-text sm:text-4xl">
                {title}
              </h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delayMs={70 * (index + 1)}>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            {quote ? (
              <Reveal delayMs={160}>
                <blockquote className="mt-10 border-l border-accent/70 pl-5">
                  <p className="font-display text-2xl leading-snug tracking-tight text-text sm:text-3xl">
                    “{quote.text}”
                  </p>
                  <footer className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    {quote.attribution}
                  </footer>
                </blockquote>
              </Reveal>
            ) : null}

            {closing ? (
              <Reveal delayMs={200}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-text/90 sm:text-lg">
                  {closing}
                </p>
              </Reveal>
            ) : null}
          </div>

          {image ? (
            <Reveal
              delayMs={100}
              className={cx(
                "lg:col-span-6",
                reverse && "lg:order-1",
              )}
            >
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-surface sm:aspect-[5/6]">
                  <SiteImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 text-sm leading-relaxed text-muted">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
