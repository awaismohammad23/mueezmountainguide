import { media } from "@/config/media";
import { site } from "@/config/site";

export const zindabadStory = {
  meta: {
    title: `Zindabad | ${site.fullName}`,
    description:
      "The story of Zindabad — Mueez Uddin's alpine-style first on Spantik, and his path toward becoming Pakistan's first UIAGM mountain guide.",
  },
  href: "/stories/zindabad",
  hero: {
    eyebrow: "Story",
    title: "Zindabad.",
    subtitle: "Long life — and a new chapter for Pakistani alpinism.",
    lede: "For too long, the biggest lines in Pakistan were opened by outsiders. This is Mueez Uddin's side of the story: growing up in Hunza, climbing Spantik in alpine style, and working toward becoming the country's first UIAGM-certified mountain guide.",
    image: media.guiding,
  },
  spotlight: {
    eyebrow: "Featured story",
    title: "Zindabad — a first for Pakistani alpine climbing.",
    body: "From Hunza to the east ridge of Spantik: how Mueez is rewriting who leads in the Karakoram — and why he is pursuing the world's highest guiding qualification.",
    ctaLabel: "Read the full story",
    href: "/stories/zindabad",
    image: media.guiding,
  },
  video: {
    title: "Watch Zindabad",
    description:
      "The film behind the climb — premiered in Chamonix and told through the partnership between Mueez Uddin and Mathieu Maynadier.",
    youtubeId: "uemfOzTyPCY",
  },
  press: {
    label: "Also covered by Outside.fr",
    href: "https://www.outside.fr/le-long-chemin-de-mueez-ud-din-pour-devenir-le-premier-guide-de-haute-montagne-pakistanais-diplome-uiagm/",
  },
  chapters: [
    { id: "opening", label: "The pattern" },
    { id: "hunza", label: "Hunza" },
    { id: "training", label: "Training gap" },
    { id: "zom", label: "Turning point" },
    { id: "zindabad", label: "Zindabad" },
    { id: "guide", label: "UIAGM path" },
    { id: "legacy", label: "What's next" },
  ],
  opening: {
    id: "opening",
    eyebrow: "The pattern",
    title: "“Always foreigners. Never Pakistanis.”",
    paragraphs: [
      "For a long time, Mueez watched the same scene play out in the mountains of his country. Major expeditions were led by outsiders. First ascents were signed by climbers from Europe and beyond. Pakistanis were too often left in supporting roles — porters, logistics staff, assistants.",
      "That reality became a driving force. Alongside French guide and alpinist Mathieu Maynadier, Mueez opened Zindabad on the east ridge of Spantik (7,027 m) — an alpine-style first for a Pakistani climber, and the beginning of a larger ambition: to become the first Pakistani high-mountain guide certified by the UIAGM, the highest international qualification in the profession.",
    ],
    quote: {
      text: "Always foreigners. Never Pakistanis.",
      attribution: "Mueez Uddin",
    },
    image: {
      ...media.journeyAmbition,
      caption:
        "On steep snow and technical ground — the kind of terrain where leadership, judgment, and trust decide everything.",
    },
  },
  hunza: {
    id: "hunza",
    eyebrow: "Origins",
    title: "Raised where Spantik sits on the horizon.",
    paragraphs: [
      "Mueez was born and raised in Hunza, a valley of roughly 60,000 people in northern Pakistan — a place where mountains shape both the landscape and the path ahead. From home, he can see Spantik.",
      "“My whole family works in tourism,” he says. After his studies, he began with his uncle’s travel agency as a cook’s helper, then as an expedition assistant to Karakoram base camps. Two years later, he was guiding trek groups through the valleys of the region.",
      "Those early seasons taught him the mountains from the ground up — logistics, clients, weather, and the daily reality of high country travel — long before the world started watching.",
    ],
    image: {
      ...media.hero,
      caption:
        "Above the terraces of Hunza — the valley that raised him, and the peaks that keep calling him higher.",
    },
  },
  training: {
    id: "training",
    eyebrow: "The gap",
    title: "A generation without alpine training.",
    paragraphs: [
      "Young Pakistanis can gradually step into mountain tourism. Technical alpinism is harder to reach. Gear is scarce. Formal training is rare. Progression routes are limited.",
      "Part of that gap traces back to the collapse of tourism in Pakistan after September 11, 2001. “I was too young to understand what was happening,” Mueez recalls. “But everyone who lived from tourism lost their work and had to turn to other professions. For years, tourists stopped coming. And so nobody built a school or trained the next generation.”",
      "Pakistan is a country of extreme high mountains — yet it still lacks a true national pathway into the guiding profession. International guides spend years studying avalanches, rescue, risk management, and mixed terrain. “We don’t have a structured training system,” Mueez explains. “Here, almost nobody has access to that kind of teaching.”",
    ],
    image: {
      ...media.journeyRoots,
      caption:
        "High, committing ground — where experience and education matter as much as ambition.",
    },
  },
  zom: {
    id: "zom",
    eyebrow: "Turning point",
    title: "Access, partners, and a new community.",
    paragraphs: [
      "In the early 2020s, things began to shift through local and international initiatives. In 2021, Pakistan’s ski federation hosted a competition in Hunza and invited French athletes linked to Zom Connection — an association founded by snowboarder Julien Henry to open mountain sports to young Pakistanis.",
      "Among them was Mathieu “Mémé” Maynadier, guide and alpinist. Mueez joined as a trainee and met the partner who would later share a rope with him on Spantik.",
      "Through that network he found skiing, ice climbing, and a world few young people from his region could reach. “In Pakistan we had no specialty shops for mountain gear. Skis, ropes, climbing shoes were almost impossible to find,” he says. “Thanks to Zom Connection, we finally got access. Mathieu, then local climbers, started opening routes and growing climbing in the north. The community gets bigger every year — even if finding partners for big projects is still hard.”",
    ],
    image: {
      ...media.about,
      caption:
        "Learning the craft in serious alpine terrain — with partners who treat him as a climber, not only as local support.",
    },
  },
  zindabad: {
    id: "zindabad",
    eyebrow: "The climb",
    title: "Zindabad — long life on Spantik’s east ridge.",
    paragraphs: [
      "Mueez later joined Maynadier on expeditions as a local guide — a title that, in Pakistan, often means logistics more than European-style high-mountain guiding. Maynadier saw something else: drive that lasted.",
      "“I immediately found him effective and motivated,” Maynadier recalls. “Then I wanted to see if that motivation would endure. We wanted the desire to come from him.”",
      "It did. For years Mueez wanted into the most committed alpine projects in his own mountains. When Mathieu proposed Spantik, Mueez already carried deep high-altitude experience. “I had wanted these kinds of projects for a long time,” he says. “But finding partners was difficult — a question of trust, technical level, and experience.”",
      "“He is gifted. He learns fast, he understands fast,” Maynadier says. “I clearly had more experience and kept the lead on some decisions, but we shared that ascent.”",
      "Between 2 and 7 June 2025, they opened Zindabad — “long life” in Urdu — on Spantik’s east ridge (graded M5 A1 80°). It marked a first for a Pakistani alpinist in this kind of alpine-style commitment. And it was only the beginning.",
    ],
    quote: {
      text: "I had wanted these kinds of projects for a long time. But finding partners was difficult.",
      attribution: "Mueez Uddin",
    },
    image: {
      ...media.guiding,
      caption:
        "Exposed ridgelines and glacier country — the arena where Zindabad was forged.",
    },
  },
  guide: {
    id: "guide",
    eyebrow: "Ambition",
    title: "Becoming Pakistan’s first UIAGM guide.",
    paragraphs: [
      "“To get a guiding certification, you have to leave the country, find funding, and carry the cost alone,” Mueez says. “For most Pakistanis, that is nearly impossible.” Local role models are rare — proof that the path exists is scarce.",
      "One figure shaped him early: his cousin Javed Ali, who trained briefly in France in the early 2000s. “He was my model. When I was younger I was afraid to climb with him because I lacked knowledge. But people told stories of the expeditions he led.”",
      "“I wanted to become a guide, and I told Mathieu. He was the first who really tried to help me.”",
      "A pathway opened through EEMGA — the East European Mountain Guides Association — which helps candidates from countries without a UIAGM-recognized national school reach international training. To prepare, Mueez moved to Briançon in autumn 2025. “Here I can ski every day. I can climb every day. In Pakistan, that is not possible.”",
      "He continues looking toward France’s ENSA as well — a route that means learning French, an effort he is ready to make. The goal remains clear: the UIAGM diploma, and the standard of trust that comes with it.",
    ],
    image: {
      ...media.journeyCollaborations,
      caption:
        "Shared rope, shared standards — building the trust international clients expect from professional guides.",
    },
  },
  legacy: {
    id: "legacy",
    eyebrow: "What's next",
    title: "Open the way for the next generation.",
    paragraphs: [
      "For Mueez, this is bigger than one career. The first Pakistani UIAGM guide would widen professional paths for local guides, raise recognition of Pakistani mountain craft internationally, and show young people from Karakoram valleys that the profession is possible.",
      "“People know there is no guide school here,” he explains. “They know we don’t have the same training, or the same level in skiing and alpinism. So they trust us less.” His cousin Javed puts it plainly: “If you don’t approach things with international technical standards, people will never trust you.”",
      "Maynadier sees Pakistan where Nepal stood roughly twenty years ago in structuring mountain professions. Nepalis built a craft so strong that foreign leadership is no longer required to run their industry. The hope is that Pakistanis follow the same path — until expeditions coming to Pakistan hire Pakistanis because the skill, experience, and qualifications are there.",
      "Together they imagine a training structure in northern Pakistan, where future guides and high-altitude porters can learn the foundations without having to leave home first.",
    ],
    quote: {
      text: "My goal, in the end, is that every expedition in Pakistan — especially on the 8000ers — has to hire Pakistanis.",
      attribution: "Mueez Uddin",
    },
    closing:
      "“If I succeed, it will especially be good for the next generation. I want to show that this work can become a real profession in Pakistan. I want young people to learn without facing the same difficulties I did.”",
    image: {
      ...media.journeyAmbition,
      caption:
        "Still moving upward — for himself, and for the climbers who will come after.",
    },
  },
  cta: {
    title: "Follow the journey. Join a project.",
    body: "For guided travel, collaborations, or alpine projects in Pakistan — get in touch. Or explore trips through Karakoram Ascents.",
    primary: { label: "Contact Mueez", href: "/contact" },
    secondary: {
      label: "Karakoram Ascents",
      href: site.ventures.karakoramAscents.href,
      external: true,
    },
  },
} as const;
