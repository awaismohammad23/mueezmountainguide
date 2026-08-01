import { media, galleryFilters } from "@/config/media";
import { site } from "@/config/site";

export const photographyContent = {
  meta: {
    title: `Photography | ${site.fullName}`,
    description:
      "High-altitude photography from the Karakoram — alpine ridges, rock faces, and expedition life documented by Hunza mountain guide Mueez Uddin.",
  },
  hero: {
    eyebrow: "Photography",
    title: "The Karakoram, frame by frame.",
    support:
      "Images made on technical ground — where light, weather, and thin air shape every exposure.",
    image: media.landscape,
  },
  intro: {
    eyebrow: "Approach",
    title: "A guide’s eye for decisive terrain.",
    paragraphs: [
      "Photography sits at the center of how Mueez moves through the mountains. Each frame is made from the rope, the ridge, or the valley floor — not as a visitor looking in, but as someone who reads the terrain for travel and for story.",
      "From Hunza’s rock walls to high alpine lines and expedition camps, the work holds the scale of Pakistan’s high country and the quiet moments between moves.",
    ],
  },
  featured: {
    eyebrow: "Selected",
    title: "Frames that hold the mountain.",
    description:
      "A short edit of images that define the work — rock above Hunza, alpine travel, and life on expedition.",
    items: [
      {
        id: "rock-hunza-valley",
        src: "/images/IMG_3882.JPG",
        alt: "Lead climbing above terraced fields and snow peaks in Hunza",
        category: "rock" as const,
        caption: "Lead climbing above terraced fields, Hunza",
      },
      {
        id: "alpine-ridge-selfie",
        src: "/images/DJI_20250611155841_0133_D.jpg",
        alt: "Alpine ridge selfie with distant Karakoram peaks",
        category: "alpine" as const,
        caption: "Alpine ridge, Karakoram skyline beyond",
      },
      {
        id: "expedition-basecamp",
        src: "/images/_DSC9419.jpg",
        alt: "Climbing team portrait at snowy base camp",
        category: "expeditions" as const,
        caption: "Team portrait at high base camp",
      },
    ],
  },
  gallery: {
    id: "gallery",
    eyebrow: "Gallery",
    title: "Browse the collection.",
    description:
      "Filter by alpine, rock, or expedition — open any image for a closer look.",
    filters: galleryFilters,
  },
  disciplines: {
    eyebrow: "Subjects",
    title: "What the work covers.",
    items: [
      {
        title: "Alpine",
        body: "Ridges, couloirs, and high snow — images from technical alpine travel in the Karakoram.",
      },
      {
        title: "Rock",
        body: "Lead climbing and steep faces above Hunza’s valleys, terraces, and forested slopes.",
      },
      {
        title: "Expeditions",
        body: "Base camps, partners, and the long approach — life around serious mountain objectives.",
      },
    ],
  },
  cta: {
    eyebrow: "Collaborate",
    title: "Commission a shoot or join an expedition.",
    body: "Whether you need high-altitude imagery, documentation of a trip, or a guided experience with a photographer’s eye — start with a short inquiry.",
    primaryCta: { label: "Inquire", href: "/contact" },
    secondaryCta: { label: "Explore expeditions", href: "/expeditions" },
  },
} as const;
