import { media } from "@/config/media";
import { site } from "@/config/site";

export const guidingContent = {
  meta: {
    title: `Guiding | ${site.fullName}`,
    description:
      "Guided skiing, ice climbing, rock climbing, and alpine travel in Hunza and the Karakoram with mountain guide Mueez Uddin — local knowledge, careful pacing, and responsible high-country travel.",
  },
  hero: {
    eyebrow: "Guiding",
    title: "Move well in high country.",
    support:
      "Skiing, ice, rock, and alpine travel from Hunza — guided with local judgment, clear communication, and respect for remote terrain.",
    image: media.guiding,
  },
  intro: {
    eyebrow: "Philosophy",
    title: "Guidance shaped by the place you stand in.",
    paragraphs: [
      "Mueez guides the way he learned the Karakoram: from the ground up. Terrain reading, weather windows, guest pacing, and technical decisions are not separate checklists — they are one continuous judgment on the mountain.",
      "Raised in Hunza with Spantik on the horizon, he brings a local’s sense of place to every trip — whether the day is a rock face above the valley, a ski line after fresh snow, or a committed alpine approach.",
      "The aim is simple: help guests move safely and confidently through Pakistan’s high country, while treating the mountains with the care they demand.",
    ],
    image: media.journeyAmbition,
  },
  disciplines: {
    eyebrow: "Disciplines",
    title: "Four ways into the mountains.",
    description:
      "Each discipline asks for different craft. All of them share the same standard — careful planning, honest conditions assessment, and clear leadership on the hill.",
    items: [
      {
        id: "skiing",
        title: "Skiing",
        meta: "Snow · Winter lines",
        body: "Ski travel and guided days shaped by Hunza winters and high-country snow — reading slope, weather, and avalanche context with the same care as any alpine objective.",
        image: media.journeyRoots,
        objectPosition: "center 22%",
      },
      {
        id: "ice",
        title: "Ice climbing",
        meta: "Ice · Technical",
        body: "Frozen lines and winter climbing where tool placement, belay craft, and cold-weather judgment matter as much as fitness — taught and led with patience.",
        image: media.hero,
        objectPosition: "center 12%",
      },
      {
        id: "rock",
        title: "Rock climbing",
        meta: "Rock · Multi-pitch",
        body: "Lead climbing and multi-pitch days above Hunza’s valleys — movement, rope systems, and exposure managed so guests can focus on the climb.",
        image: media.landscape,
        objectPosition: "center 30%",
      },
      {
        id: "alpine",
        title: "Alpine travel",
        meta: "Alpine · High terrain",
        body: "Ridges, snow slopes, and high approaches where pacing, altitude, and partner communication decide the day — the foundation of serious Karakoram travel.",
        image: media.about,
        objectPosition: "center 20%",
      },
    ],
  },
  approach: {
    eyebrow: "How guiding works",
    title: "What you can expect in the field.",
    items: [
      {
        title: "Local-first knowledge",
        body: "Routes, seasons, and logistics grounded in Hunza and the wider Karakoram — not a template copied from somewhere else.",
      },
      {
        title: "Clear communication",
        body: "Objectives, hazards, and turnaround criteria discussed before and during the day, so guests always know the plan and the why.",
      },
      {
        title: "Responsible pacing",
        body: "Days built around real fitness, altitude, and conditions — progress without forcing the mountain into a schedule.",
      },
      {
        title: "A photographer’s eye",
        body: "High-altitude imagery woven into the experience when it fits — documenting terrain and decisive moments without compromising safety.",
      },
    ],
  },
  pathway: {
    eyebrow: "Standards",
    title: "On the path to IFMGA.",
    paragraphs: [
      "Mueez is pursuing certification with the International Federation of Mountain Guides Associations (IFMGA / UIAGM) — working toward becoming Pakistan’s first internationally certified mountain guide.",
      "That ambition sits beside years of field experience: guiding guests, collaborating with professional climbers and skiers, and opening alpine-style lines like Zindabad on Spantik.",
      "Guests get the benefit of both — local depth and an international standard of mountain craft.",
    ],
    image: media.zindabad.partners,
    cta: {
      label: "Support the training path",
      href: "/support",
    },
    secondaryCta: {
      label: "Read the Zindabad story",
      href: "/stories/zindabad",
    },
  },
  forWhom: {
    eyebrow: "Who it’s for",
    title: "Built for serious curiosity.",
    items: [
      {
        title: "Active travelers",
        body: "People who want guided ski, rock, ice, or alpine days with a local mountain professional — not a checklist tour.",
      },
      {
        title: "Climbing partners & teams",
        body: "Groups looking for shared leadership, logistics insight, and technical partnership on Karakoram objectives.",
      },
      {
        title: "Creators & media",
        body: "Photographers, filmmakers, and brands who need terrain access, timing, and a guide who understands the frame.",
      },
    ],
  },
  cta: {
    eyebrow: "Plan a trip",
    title: "Tell me what you want to climb, ski, or explore.",
    body: "Share your experience level, preferred season, and objective — and we will shape a realistic plan for Hunza and the wider Karakoram.",
    primaryCta: { label: "Inquire", href: "/contact" },
    secondaryCta: { label: "Explore expeditions", href: "/expeditions" },
  },
} as const;
