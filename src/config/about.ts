import { media } from "@/config/media";
import { site } from "@/config/site";

export const aboutContent = {
  meta: {
    title: `About | ${site.fullName}`,
    description:
      "Learn about Mueez Uddin — Hunza-born mountain guide, photographer, and opener of Zindabad on Spantik, pursuing Pakistan's first UIAGM guiding diploma.",
  },
  hero: {
    eyebrow: "About",
    title: "A life shaped by the Karakoram.",
    intro:
      "Born and raised in Hunza, Pakistan, Mueez Uddin is a high-altitude photographer, skier, climber, and mountain guide — working to change who leads in Pakistan's mountains, from local guiding to alpine-style firsts like Zindabad on Spantik.",
    image: media.hero,
    portrait: media.journeyAmbition,
  },
  origins: {
    eyebrow: "Origins",
    title: "Raised where Spantik sits on the horizon.",
    paragraphs: [
      "Surrounded from childhood by the immense ridgelines of the Karakoram, Mueez developed a deep connection with the mountains at an early age. From Hunza he can see Spantik — a peak that would later define a new chapter in his climbing life.",
      "Growing up in a landscape of harsh winters and rugged terrain, he gravitated toward skiing, ice climbing, and rock climbing. His family works in tourism; after his studies he started as a cook’s helper and expedition assistant, then began guiding trek groups through the valleys of the north.",
    ],
    image: media.journeyRoots,
  },
  journey: {
    eyebrow: "Journey",
    title: "From local support roles to shared leadership.",
    paragraphs: [
      "After graduating with a degree in Commerce in 2017, Mueez chose the outdoors. His photography drew international attention, revealing Pakistan's high mountains to a global audience — and inviting adventurers to experience them alongside him.",
      "For years he watched a familiar pattern: major expeditions and first ascents led by foreigners, while Pakistanis were too often kept in supporting roles. That reality pushed him to seek partners, training, and projects where Pakistani climbers could share the sharp end of the rope.",
      "Through collaborations with professional climbers and skiers — including work with French guide Mathieu Maynadier and the Zom Connection network — he refined his craft in demanding alpine environments and stepped further into technical terrain.",
    ],
    image: media.journeyCollaborations,
  },
  zindabad: {
    id: "zindabad",
    eyebrow: "Zindabad",
    title: "An alpine-style first on Spantik.",
    paragraphs: [
      "In June 2025, alongside Mathieu Maynadier, Mueez opened Zindabad — “long life” in Urdu — on the east ridge of Spantik (7,027 m). It was an alpine-style first for a Pakistani climber on that kind of committed line, and a clear signal of where he intends to go next.",
      "The climb is also a film story — premiered in Chamonix — and a personal statement: Pakistan's mountains deserve Pakistani leadership at the highest standard of craft, judgment, and trust.",
    ],
    image: media.guiding,
    cta: {
      label: "Read the Zindabad story",
      href: "/stories/zindabad",
    },
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
        title: "Alpine expeditions",
        body: "Committed projects in the Karakoram — including Zindabad on Spantik — built with partners who share the rope and raise the standard of Pakistani alpinism.",
        href: "/stories/zindabad",
        ctaLabel: "Explore Zindabad",
        external: false,
      },
      {
        title: "Karakoram Ascents",
        body: "Through his mountain tour and trekking company, Mueez organizes guided tours and expeditions across the Karakoram for adventurers exploring Pakistan's high country.",
        href: site.ventures.karakoramAscents.href,
        ctaLabel: "Visit Karakoram Ascents",
        external: true,
      },
    ],
    image: media.guiding,
  },
  ahead: {
    eyebrow: "Looking ahead",
    title: "Toward Pakistan’s first UIAGM guide.",
    paragraphs: [
      "Mueez is pursuing certification through the UIAGM / IFMGA pathway — the highest international qualification for mountain guides — with the long-term goal of becoming Pakistan’s first fully certified high-mountain guide.",
      "For him, the diploma is not only personal. It is about trust: proving that Pakistani guides can meet international standards, lead on their home mountains, and open a clearer path for the next generation in the Karakoram.",
    ],
    image: media.journeyAmbition,
  },
  cta: {
    title: "Work with Mueez.",
    body: "For guided travel, photography partnerships, or alpine projects in Pakistan — get in touch.",
    primary: { label: "Inquire", href: "/contact" },
    secondary: { label: "Read Zindabad", href: "/stories/zindabad" },
  },
} as const;
