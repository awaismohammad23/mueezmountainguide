import { media } from "@/config/media";
import { site } from "@/config/site";

export const expeditionsContent = {
  meta: {
    title: `Expeditions | ${site.fullName}`,
    description:
      "Alpine expeditions, high-country travel, and guided mountain projects with Mueez Uddin across Pakistan's Karakoram — from Spantik to Hunza valleys.",
  },
  hero: {
    eyebrow: "Expeditions",
    title: "High country. Shared rope. Clear judgment.",
    support:
      "Alpine-style climbs, guided mountain travel, and field partnerships across the Karakoram — led with local knowledge and international ambition.",
    image: media.journeyAmbition,
  },
  intro: {
    eyebrow: "Approach",
    title: "Expeditions shaped by place — and by trust.",
    paragraphs: [
      "Mueez builds mountain projects the way he learned the Karakoram: from the ground up. Logistics, weather windows, client pacing, and technical terrain are not separate problems — they are one continuous decision on the hill.",
      "Whether the objective is an alpine line, a photography collaboration, or a guided journey through Hunza and the wider high country, the standard is the same: move carefully, communicate clearly, and leave guests confident in remote terrain.",
      "That standard is also personal. For years, the sharp end of Pakistan’s biggest mountains was too often reserved for outsiders. Expeditions with Mueez are part of changing that — Pakistani leadership at the level the mountains demand.",
    ],
    image: media.guiding,
  },
  types: {
    eyebrow: "What we do",
    title: "Forms of mountain travel.",
    description:
      "Different objectives. The same field craft — safety, pacing, and respect for high-altitude conditions.",
    items: [
      {
        title: "Alpine expeditions",
        body: "Committed lines and high-altitude objectives where experience, partners, and decision-making matter as much as fitness — including landmark projects like Zindabad on Spantik.",
        image: media.guiding,
        meta: "Alpine · Technical",
      },
      {
        title: "Guided mountain journeys",
        body: "Skiing, ice climbing, rock climbing, and alpine travel planned around real conditions in Hunza and the wider Karakoram — with local insight and careful risk management.",
        image: media.journeyRoots,
        meta: "Guiding · Multi-discipline",
      },
      {
        title: "Trekking & cultural routes",
        body: "Through Karakoram Ascents, structured treks and regional journeys — from Hunza and Fairy Meadows to approaches toward iconic base camps — with on-ground support.",
        image: media.journeyCollaborations,
        meta: "Trekking · Logistics",
        href: site.ventures.karakoramAscents.href,
        ctaLabel: "Browse trips",
        external: true,
      },
      {
        title: "Photography & media projects",
        body: "High-altitude storytelling for climbers, creators, and brands who need terrain access, timing, and a guide’s eye for the decisive frame.",
        image: media.about,
        meta: "Photography · Collaboration",
      },
    ],
  },
  featured: {
    eyebrow: "Featured",
    title: "Zindabad — Spantik’s east ridge.",
    paragraphs: [
      "In June 2025, Mueez and French guide Mathieu Maynadier opened Zindabad on the east ridge of Spantik (7,027 m) — an alpine-style first for a Pakistani climber on that kind of committed line.",
      "The ascent is more than a route name. It is proof of shared leadership on serious ground, and a chapter in the longer path toward Pakistan’s first UIAGM mountain guide.",
    ],
    image: media.guiding,
    cta: {
      label: "Read the Zindabad story",
      href: "/stories/zindabad",
    },
  },
  principles: {
    eyebrow: "Field craft",
    title: "How expeditions are run.",
    items: [
      {
        title: "Local-first knowledge",
        body: "Routes, seasons, and logistics grounded in Hunza roots and years of Karakoram travel — not abstract itineraries.",
      },
      {
        title: "Safety with ambition",
        body: "Objectives chosen for meaning and challenge, paced with honest risk assessment, weather judgment, and clear communication.",
      },
      {
        title: "Partners who share the rope",
        body: "Collaborations with climbers, skiers, and creators who want authentic access — and respect for the people who live these mountains.",
      },
      {
        title: "Standards that travel",
        body: "Work aligned with the UIAGM / IFMGA pathway: building trust so Pakistani guides lead at the level international clients expect.",
      },
    ],
  },
  path: {
    eyebrow: "The arc",
    title: "From valley guiding to alpine firsts.",
    steps: [
      {
        label: "01",
        title: "Learning the mountains from home",
        body: "Raised in Hunza with Spantik on the horizon, Mueez moved from tourism support roles into guiding trek groups and high-country logistics — the foundation of every later expedition.",
        image: media.hero,
      },
      {
        label: "02",
        title: "Partners and technical terrain",
        body: "Collaborations with professional climbers and skiers — including Mathieu Maynadier and networks around Zom Connection — opened skiing, ice, rock, and more demanding alpine projects.",
        image: media.journeyCollaborations,
      },
      {
        label: "03",
        title: "Landmark lines and what comes next",
        body: "Zindabad on Spantik marked a new chapter. Ahead lies continued alpine work and the long road to UIAGM certification — so the next generation inherits a clearer professional path.",
        image: media.journeyAmbition,
      },
    ],
  },
  cta: {
    title: "Plan an expedition.",
    body: "Tell me about your objective, dates, and experience level — or browse structured journeys through Karakoram Ascents.",
    primary: { label: "Contact Mueez", href: "/contact" },
    secondary: {
      label: "Karakoram Ascents trips",
      href: site.ventures.karakoramAscents.href,
      external: true,
    },
  },
} as const;
