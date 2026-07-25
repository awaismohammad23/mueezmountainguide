import { media } from "@/config/media";
import { site } from "@/config/site";

export const contactContent = {
  meta: {
    title: `Contact | ${site.fullName}`,
    description:
      "Inquire about guided mountain travel, photography collaborations, or alpine projects with Mueez Uddin in Pakistan.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Start the conversation.",
    support:
      "Guided travel, photography partnerships, and alpine projects across the Karakoram.",
    image: media.guiding,
  },
  panel: {
    eyebrow: "Inquire",
    title: "Tell me about your plans.",
    body: "Share a few details and I will follow up with next steps. For trip calendars and group departures, you can also explore Karakoram Ascents.",
    email: site.email,
    secondaryCta: {
      label: "Browse Karakoram Ascents trips",
      href: site.ventures.karakoramAscents.href,
    },
    images: [media.journeyAmbition, media.hero, media.about],
  },
} as const;
