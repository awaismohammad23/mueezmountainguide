import { SiteImage } from "@/components/ui/SiteImage";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

type StoryGalleryProps = {
  eyebrow: string;
  title: string;
  description: string;
  images: readonly GalleryItem[];
};

export function StoryGallery({
  eyebrow,
  title,
  description,
  images,
}: StoryGalleryProps) {
  return (
    <Section className="border-y border-border/50 bg-black py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-10 sm:mb-12"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {images.map((image, index) => (
            <Reveal key={image.src} delayMs={(index % 3) * 70}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <SiteImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-muted">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
