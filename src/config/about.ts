import { media } from "@/config/media";
import { site } from "@/config/site";

export const aboutContent = {
  meta: {
    title: `About | ${site.fullName}`,
    description:
      "Learn about Mueez Uddin — high-altitude photographer, skier, climber, and mountain guide from Hunza, Pakistan, and founder of Karakoram Ascents.",
  },
  hero: {
    eyebrow: "About",
    title: "A life shaped by the Karakoram.",
    intro:
      "Born and raised in the snow-covered valley of Hunza, Pakistan, Mueez Uddin has built an extraordinary career as a high-altitude photographer, skier, climber, and mountain guide — combining technical mountain craft with a distinctive visual voice.",
    image: media.hero,
    portrait: media.journeyAmbition,
  },
  origins: {
    eyebrow: "Origins",
    title: "Raised beneath some of the world's highest peaks.",
    paragraphs: [
      "Surrounded from childhood by the immense ridgelines of the Karakoram, Mueez developed a deep connection with the mountains at an early age. Growing up in a landscape defined by harsh winters and rugged terrain, he naturally gravitated toward skiing, ice climbing, and rock climbing.",
      "Those early seasons laid the foundation for a life dedicated to exploration and adventure — not as a distant dream, but as a daily relationship with altitude, weather, and place.",
    ],
    image: media.journeyRoots,
  },
  journey: {
    eyebrow: "Journey",
    title: "From commerce graduate to adventure storyteller.",
    paragraphs: [
      "After graduating with a degree in Commerce in 2017, Mueez chose to follow his passion for the outdoors. His striking photography quickly gained international attention through social media, where his images showcased the raw beauty of Pakistan's mountains to a global audience.",
      "Adventure enthusiasts from around the world were inspired by his work and sought to experience these remote landscapes alongside him. Over the years, he has worked closely with professional climbers and skiers from across the globe, refining his skills as both a mountain guide and high-altitude photographer.",
      "Those collaborations strengthened his ability to operate in demanding alpine environments — and clarified his role as a bridge between Pakistan's high country and the wider adventure community.",
    ],
    image: media.journeyCollaborations,
  },
  photography: {
    id: "photography",
    eyebrow: "Photography",
    title: "Frames from the high mountains.",
    description:
      "Slide through selected images from alpine routes, rock faces, and expeditions across Pakistan.",
    images: [
      media.hero,
      media.about,
      media.guiding,
      media.journeyAmbition,
      media.journeyRoots,
    ],
  },
  work: {
    eyebrow: "Work",
    title: "What he does today.",
    intro:
      "Today, Mueez is recognized as a leading ambassador for adventure sports in Pakistan. Through photography, expeditions, and guiding, he helps others discover the country's extraordinary mountain landscapes while promoting responsible exploration of the high-altitude world.",
    pillars: [
      {
        title: "Mountain guiding",
        body: "Guided travel across skiing, ice climbing, rock climbing, and high-alpine terrain — with a focus on safety, local knowledge, and meaningful experiences in remote landscapes.",
      },
      {
        title: "High-altitude photography",
        body: "Visual storytelling from technical terrain and thin air, documenting expeditions with a guide's eye for weather, route, and the decisive moment.",
      },
      {
        title: "Expeditions & collaboration",
        body: "Partnerships with climbers, skiers, creators, and travelers who want authentic access to Pakistan's alpine world — planned with field-tested judgment.",
      },
      {
        title: "Karakoram Ascents",
        body: "Through his mountain tour and trekking company, Mueez organizes guided tours and expeditions across the Karakoram for adventurers exploring Pakistan's high country.",
        href: site.ventures.karakoramAscents.href,
        ctaLabel: "Visit Karakoram Ascents",
      },
    ],
    image: media.guiding,
  },
  ahead: {
    eyebrow: "Looking ahead",
    title: "Building toward international guiding.",
    paragraphs: [
      "Mueez is currently pursuing certification through the International Federation of Mountain Guides Associations (IFMGA), with the long-term goal of guiding professionally on an international level.",
      "Alongside that pathway, he continues ambitious alpine-style expeditions — pushing his limits in some of the world's most challenging mountain environments while remaining rooted in Hunza and the wider Karakoram.",
    ],
    image: media.journeyAmbition,
  },
  cta: {
    title: "Work with Mueez.",
    body: "For guided travel, photography partnerships, or alpine projects in Pakistan — get in touch.",
    primary: { label: "Inquire", href: "/#inquire" },
    secondary: { label: "View photography", href: "/about#photography" },
  },
} as const;
