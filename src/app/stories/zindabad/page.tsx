import type { Metadata } from "next";
import { StoryCta } from "@/components/story/StoryCta";
import { StoryGallery } from "@/components/story/StoryGallery";
import { StoryHero } from "@/components/story/StoryHero";
import { StoryNav } from "@/components/story/StoryNav";
import { StorySection } from "@/components/story/StorySection";
import { StoryVideo } from "@/components/story/StoryVideo";
import { zindabadStory } from "@/config/zindabad";

export const metadata: Metadata = {
  title: zindabadStory.meta.title,
  description: zindabadStory.meta.description,
};

export default function ZindabadStoryPage() {
  const {
    hero,
    chapters,
    opening,
    hunza,
    training,
    zom,
    zindabad,
    guide,
    legacy,
    gallery,
    video,
    cta,
    press,
  } = zindabadStory;

  return (
    <main className="flex flex-1 flex-col">
      <StoryHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        lede={hero.lede}
        image={hero.image}
      />
      <StoryNav chapters={chapters} />
      <StorySection
        id={opening.id}
        eyebrow={opening.eyebrow}
        title={opening.title}
        paragraphs={opening.paragraphs}
        quote={opening.quote}
        image={opening.image}
      />
      <StorySection
        id={hunza.id}
        eyebrow={hunza.eyebrow}
        title={hunza.title}
        paragraphs={hunza.paragraphs}
        image={hunza.image}
        reverse
        tone="black"
      />
      <StorySection
        id={training.id}
        eyebrow={training.eyebrow}
        title={training.title}
        paragraphs={training.paragraphs}
        image={training.image}
      />
      <StorySection
        id={zom.id}
        eyebrow={zom.eyebrow}
        title={zom.title}
        paragraphs={zom.paragraphs}
        image={zom.image}
        reverse
        tone="black"
      />
      <StorySection
        id={zindabad.id}
        eyebrow={zindabad.eyebrow}
        title={zindabad.title}
        paragraphs={zindabad.paragraphs}
        quote={zindabad.quote}
        image={zindabad.image}
      />
      <StoryGallery
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        description={gallery.description}
        images={gallery.images}
      />
      <StoryVideo
        title={video.title}
        description={video.description}
        youtubeId={video.youtubeId}
      />
      <StorySection
        id={guide.id}
        eyebrow={guide.eyebrow}
        title={guide.title}
        paragraphs={guide.paragraphs}
        image={guide.image}
        reverse
        tone="black"
      />
      <StorySection
        id={legacy.id}
        eyebrow={legacy.eyebrow}
        title={legacy.title}
        paragraphs={legacy.paragraphs}
        quote={legacy.quote}
        closing={legacy.closing}
        image={legacy.image}
      />
      <StoryCta
        title={cta.title}
        body={cta.body}
        primary={cta.primary}
        secondary={cta.secondary}
        press={press}
      />
    </main>
  );
}
