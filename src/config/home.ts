import { media } from "@/config/media";
import { site } from "@/config/site";

export const homeContent = {
  hero: {
    brand: site.name,
    headline: "High-altitude guiding from the heart of the Karakoram.",
    support:
      "Photographer, skier, climber, and mountain guide from Hunza, Pakistan.",
    primaryCta: { label: "Inquire", href: "#inquire" },
    secondaryCta: { label: "View photography", href: "#photography" },
    image: media.hero,
  },
  about: {
    id: "about",
    eyebrow: "About",
    title: "Born among the peaks of Hunza.",
    paragraphs: [
      "Raised in the snow-covered valley of Hunza — with Spantik on the horizon — Mueez Uddin built his life around the mountains that shaped him. Skiing, ice climbing, and rock climbing became second nature in some of the world's highest country.",
      "After graduating with a degree in Commerce in 2017, he chose the outdoors. His photography drew international attention, and years of collaboration with climbers and skiers pushed him from support roles toward shared leadership on serious alpine ground.",
      "In 2025 he opened Zindabad on Spantik’s east ridge with Mathieu Maynadier — an alpine-style first for a Pakistani climber — while pursuing the path to become Pakistan’s first UIAGM mountain guide.",
    ],
    image: media.about,
    cta: { label: "Read the full story", href: "/about" },
    secondaryCta: { label: "Explore Zindabad", href: "/stories/zindabad" },
  },
  journey: {
    id: "expeditions",
    eyebrow: "The path",
    title: "From Hunza winters to alpine expeditions.",
    steps: [
      {
        label: "01",
        title: "Roots in the Karakoram",
        body: "Growing up beneath towering ridgelines forged an early connection to skiing, ice, and rock — the foundation of a life in the high mountains.",
        image: media.journeyRoots,
      },
      {
        label: "02",
        title: "Collaborations worldwide",
        body: "Years of work with professional climbers and skiers — including partners like Mathieu Maynadier — refined his craft as a guide and high-altitude photographer.",
        image: media.journeyCollaborations,
      },
      {
        label: "03",
        title: "Zindabad & UIAGM path",
        body: "Opening Zindabad on Spantik marked an alpine-style first for a Pakistani climber — while he continues toward Pakistan’s first UIAGM guiding diploma.",
        image: media.journeyAmbition,
      },
    ],
  },
  photography: {
    id: "photography",
    eyebrow: "Photography",
    title: "Stories from Pakistan's high country.",
    description:
      "Images shaped by technical terrain, thin air, and the quiet scale of the Karakoram.",
  },
  guiding: {
    id: "guiding",
    eyebrow: "Guiding",
    title: "Technical expertise. Responsible exploration.",
    body: "Mueez guides across skiing, ice climbing, rock climbing, and high-alpine terrain — helping guests move safely through remote landscapes while promoting respect for the high-altitude world.",
    highlights: [
      {
        title: "Mountain disciplines",
        body: "Skiing, ice climbing, rock climbing, and alpine travel shaped by years in Hunza and the wider Karakoram.",
      },
      {
        title: "High-altitude photography",
        body: "Documenting expeditions with a guide's eye for terrain, weather, and the decisive moment.",
      },
      {
        title: "IFMGA pathway",
        body: "Pursuing certification with the International Federation of Mountain Guides Associations for international practice.",
      },
    ],
    image: media.guiding,
  },
  venture: {
    id: "karakoram-ascents",
    eyebrow: "Also by Mueez",
    title: site.ventures.karakoramAscents.name,
    body: site.ventures.karakoramAscents.description,
    ctaLabel: "Visit Karakoram Ascents",
    href: site.ventures.karakoramAscents.href,
    image: media.journeyCollaborations,
  },
  inquire: {
    id: "inquire",
    eyebrow: "Inquire",
    title: "Plan an expedition or collaboration.",
    body: "Share a few details about your trip, shoot, or project — and I will get back to you.",
    email: site.email,
    ctaLabel: "Send inquiry",
    secondaryCta: {
      label: "Browse Karakoram Ascents trips",
      href: site.ventures.karakoramAscents.href,
    },
  },
} as const;
