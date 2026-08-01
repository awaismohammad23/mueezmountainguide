import type { Metadata } from "next";
import { GuidingApproach } from "@/components/guiding/GuidingApproach";
import { GuidingCta } from "@/components/guiding/GuidingCta";
import { GuidingDisciplines } from "@/components/guiding/GuidingDisciplines";
import { GuidingForWhom } from "@/components/guiding/GuidingForWhom";
import { GuidingHero } from "@/components/guiding/GuidingHero";
import { GuidingIntro } from "@/components/guiding/GuidingIntro";
import { GuidingPathway } from "@/components/guiding/GuidingPathway";
import { guidingContent } from "@/config/guiding";

export const metadata: Metadata = {
  title: guidingContent.meta.title,
  description: guidingContent.meta.description,
};

export default function GuidingPage() {
  const { hero } = guidingContent;

  return (
    <main className="flex flex-1 flex-col">
      <GuidingHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        support={hero.support}
        image={hero.image}
      />
      <GuidingIntro />
      <GuidingDisciplines />
      <GuidingApproach />
      <GuidingPathway />
      <GuidingForWhom />
      <GuidingCta />
    </main>
  );
}
