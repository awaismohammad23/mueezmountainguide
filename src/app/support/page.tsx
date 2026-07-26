import type { Metadata } from "next";
import { SupportHero } from "@/components/support/SupportHero";
import {
  SupportCta,
  SupportIntro,
  SupportMeet,
  SupportWhy,
  SupportZom,
} from "@/components/support/SupportSections";
import { supportContent } from "@/config/support";

export const metadata: Metadata = {
  title: supportContent.meta.title,
  description: supportContent.meta.description,
};

export default function SupportPage() {
  const { hero } = supportContent;

  return (
    <main className="flex flex-1 flex-col">
      <SupportHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        support={hero.support}
        image={hero.image}
      />
      <SupportIntro />
      <SupportMeet />
      <SupportWhy />
      <SupportZom />
      <SupportCta />
    </main>
  );
}
