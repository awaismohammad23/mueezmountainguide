import type { Metadata } from "next";
import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutNarrative } from "@/components/about/AboutNarrative";
import { AboutPhotography } from "@/components/about/AboutPhotography";
import { AboutWork } from "@/components/about/AboutWork";
import { aboutContent } from "@/config/about";

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  const { origins, journey, zindabad, ahead } = aboutContent;

  return (
    <main className="flex flex-1 flex-col">
      <AboutHero />
      <AboutNarrative
        eyebrow={origins.eyebrow}
        title={origins.title}
        paragraphs={origins.paragraphs}
        image={origins.image}
      />
      <AboutNarrative
        eyebrow={journey.eyebrow}
        title={journey.title}
        paragraphs={journey.paragraphs}
        image={journey.image}
        reverse
        tone="black"
      />
      <AboutNarrative
        id={zindabad.id}
        eyebrow={zindabad.eyebrow}
        title={zindabad.title}
        paragraphs={zindabad.paragraphs}
        image={zindabad.image}
        cta={zindabad.cta}
      />
      <AboutPhotography />
      <AboutWork />
      <AboutNarrative
        eyebrow={ahead.eyebrow}
        title={ahead.title}
        paragraphs={ahead.paragraphs}
        image={ahead.image}
        tone="black"
      />
      <AboutCta />
    </main>
  );
}
