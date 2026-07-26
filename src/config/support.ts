import { media } from "@/config/media";
import { site } from "@/config/site";

export const supportContent = {
  meta: {
    title: `Crowd Fund | ${site.fullName}`,
    description:
      "Support Mueez Uddin's journey to become Pakistan's first IFMGA mountain guide through the Zom Connection fundraising campaign.",
  },
  hero: {
    eyebrow: "Crowd Fund",
    title: "Back Pakistan’s first IFMGA mountain guide.",
    support:
      "Help train Mueez Uddin toward the world’s highest guiding qualification — opening doors for future Pakistani mountaineers.",
    image: media.zindabad.ascent,
  },
  intro: {
    eyebrow: "The campaign",
    title: "One climber. A historic first. A lasting impact.",
    paragraphs: [
      "Zom Connection is raising funds to support Mueez Uddin — a climber and local mountain guide from Hunza — on his path to IFMGA certification, the highest global qualification for mountain guiding.",
      "If successful, he would become the first Pakistani to hold this diploma: a milestone that can open professional pathways for local guides, raise international recognition of Pakistan’s mountain craft, and inspire young people in remote valleys where opportunities remain scarce.",
    ],
    image: media.zindabad.partners,
    primaryCta: {
      label: "Visit the fundraising page",
      href: site.fundraiser.href,
      external: true,
    },
    secondaryCta: {
      label: "Read the Zindabad story",
      href: "/stories/zindabad",
    },
  },
  meet: {
    eyebrow: "Meet Mueez",
    title: "Eight years guiding. A bigger ambition ahead.",
    quote: {
      text: "Climbing mountains is not only my job, but also my passion: it gives me immense joy.",
      attribution: "Mueez Uddin",
    },
    paragraphs: [
      "Mueez has worked as a local mountain guide for eight years while sharing Pakistan’s high country through photography and outdoor storytelling.",
      "He joined Zom Connection in 2020 and took part in its first expedition in 2021. Since then he has trained and climbed with internationally renowned mountaineers, helped grow the local guiding ecosystem, and opened new routes.",
      "In 2025 he opened Zindabad on Spantik with Mathieu Maynadier — a major alpine-style first for a Pakistani climber — and led the first all-Pakistani expedition to Thalo Zom.",
    ],
    image: media.hero,
  },
  why: {
    eyebrow: "Why it matters",
    title: "Pakistan has the mountains. It needs the certification.",
    paragraphs: [
      "Even with some of the world’s greatest ranges, Pakistan still lacks internationally certified mountain guides. Mueez’s aim is to be the first — not only for his own craft, but to inspire the next generation and give the country the visibility it deserves.",
      "Supporting his training through Zom Connection means backing food and accommodation, professional instruction, European travel for multi-discipline training, return trips to Pakistan for field practice, ski seasons, lift access, and specialized equipment.",
    ],
    highlights: [
      {
        title: "Open doors for future guides",
        body: "A first IFMGA diploma creates a visible path for young climbers from Karakoram valleys.",
      },
      {
        title: "Safer professional leadership",
        body: "International standards strengthen trust for expeditions and guests traveling in Pakistan.",
      },
      {
        title: "Local economic opportunity",
        body: "Qualified Pakistani guides keep mountain work and income closer to the communities that host it.",
      },
    ],
    image: media.zindabad.highCamp,
  },
  zom: {
    eyebrow: "Zom Connection",
    title: "Support through a proven mountain network.",
    body: "Since 2019, Zom Connection has empowered grassroots mountain initiatives in northern Pakistan with gear, training access, and international partnerships — from equipment shipments to instructor pathways and inclusive expeditions.",
    image: media.zindabad.peak,
  },
  spotlight: {
    eyebrow: "Crowd Fund",
    title: "Help fund Pakistan’s first IFMGA guide.",
    body: "Contribute through Zom Connection’s HelloAsso campaign and be part of a historic step for Pakistani mountain guiding.",
    ctaLabel: "Open the campaign",
    href: site.fundraiser.href,
    image: media.zindabad.ridge,
  },
  cta: {
    title: "Be part of this first.",
    body: "Every contribution brings the IFMGA training path closer — and helps turn a personal journey into opportunity for mountain communities across Pakistan.",
    primary: {
      label: "Support on HelloAsso",
      href: site.fundraiser.href,
      external: true,
    },
    secondary: {
      label: "Contact Mueez",
      href: "/contact",
    },
  },
} as const;
