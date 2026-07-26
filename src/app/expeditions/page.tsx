import type { Metadata } from "next";
import { ExpeditionsHero } from "@/components/expeditions/ExpeditionsHero";
import {
  ExpeditionsCta,
  ExpeditionsFeatured,
  ExpeditionsIntro,
  ExpeditionsPath,
  ExpeditionsPrinciples,
  ExpeditionsTypes,
} from "@/components/expeditions/ExpeditionsSections";
import { expeditionsContent } from "@/config/expeditions";

export const metadata: Metadata = {
  title: expeditionsContent.meta.title,
  description: expeditionsContent.meta.description,
};

export default function ExpeditionsPage() {
  const { hero } = expeditionsContent;

  return (
    <main className="flex flex-1 flex-col">
      <ExpeditionsHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        support={hero.support}
        image={hero.image}
      />
      <ExpeditionsIntro />
      <ExpeditionsTypes />
      <ExpeditionsFeatured />
      <ExpeditionsPrinciples />
      <ExpeditionsPath />
      <ExpeditionsCta />
    </main>
  );
}
