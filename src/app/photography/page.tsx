import type { Metadata } from "next";
import { PhotographyCta } from "@/components/photography/PhotographyCta";
import { PhotographyDisciplines } from "@/components/photography/PhotographyDisciplines";
import { PhotographyFeatured } from "@/components/photography/PhotographyFeatured";
import { PhotographyGallery } from "@/components/photography/PhotographyGallery";
import { PhotographyHero } from "@/components/photography/PhotographyHero";
import { PhotographyIntro } from "@/components/photography/PhotographyIntro";
import { photographyContent } from "@/config/photography";

export const metadata: Metadata = {
  title: photographyContent.meta.title,
  description: photographyContent.meta.description,
};

export default function PhotographyPage() {
  const { hero } = photographyContent;

  return (
    <main className="flex flex-1 flex-col">
      <PhotographyHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        support={hero.support}
        image={hero.image}
      />
      <PhotographyIntro />
      <PhotographyFeatured />
      <PhotographyGallery />
      <PhotographyDisciplines />
      <PhotographyCta />
    </main>
  );
}
