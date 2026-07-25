import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

type StoryVideoProps = {
  title: string;
  description: string;
  youtubeId: string;
};

export function StoryVideo({ title, description, youtubeId }: StoryVideoProps) {
  return (
    <Section className="border-y border-border/50 bg-black py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Film
            </p>
            <h2 className="font-display text-3xl tracking-tight text-text sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="relative mx-auto mt-10 aspect-video w-full max-w-5xl overflow-hidden bg-surface">
            <iframe
              title={title}
              src={`https://www.youtube.com/embed/${youtubeId}`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
