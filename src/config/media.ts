export type GalleryCategory = "all" | "alpine" | "rock" | "expeditions";

export type MediaImage = {
  src: string;
  alt: string;
};

export type GalleryImage = MediaImage & {
  id: string;
  category: Exclude<GalleryCategory, "all">;
};

export const media = {
  logo: {
    src: "/images/mueez-uddin-mark.png",
    alt: "Mueez Uddin mountain guide logo",
  },
  hero: {
    src: "/images/homepage-cover.jpeg",
    alt: "Mueez fitting crampons on a high snowfield before climbing",
  },
  landscape: {
    src: "/images/IMG_3882.JPG",
    alt: "Rock climbing above a Hunza valley with snow-capped Karakoram peaks beyond",
  },
  about: {
    src: "/images/DJI_20250611155841_0133_D.jpg",
    alt: "Mueez on a high alpine ridge overlooking a panorama of snow peaks",
  },
  journeyRoots: {
    src: "/images/IMG_6305.JPG",
    alt: "Looking down a steep snow couloir during a high-altitude climb",
  },
  journeyCollaborations: {
    src: "/images/_DSC9419.jpg",
    alt: "Expedition team gathered at a high-altitude base camp in Pakistan",
  },
  journeyAmbition: {
    src: "/images/fd508708-f735-4792-bac4-94863538a8ad.jpg",
    alt: "Mueez ascending a snow slope in full mountaineering gear",
  },
  guiding: {
    src: "/images/DJI_20250609133743_0023_D.jpg",
    alt: "Mueez on a snow ridge with glacier valleys and peaks below",
  },
  zindabad: {
    cover: {
      src: "/images/zindabad/cover.jpeg",
      alt: "Zindabad Route on Spantik 7,027m — 1800m, M5 A1, shown on the mountain face",
    },
    routeMap: {
      src: "/images/zindabad/route-01.jpeg",
      alt: "Spantik with the Zindabad Route line and camp markers on the east ridge",
    },
    peak: {
      src: "/images/zindabad/route-02.jpeg",
      alt: "Snow-covered Spantik peak rising into a clear blue sky",
    },
    partners: {
      src: "/images/zindabad/route-03.jpeg",
      alt: "Mueez and climbing partner on a snow slope during the Zindabad ascent",
    },
    highCamp: {
      src: "/images/zindabad/route-04.jpeg",
      alt: "High camp tent on a ridge above a sea of clouds in the Karakoram",
    },
    ascent: {
      src: "/images/zindabad/route-05.jpeg",
      alt: "Climber ascending steep snow on Spantik with a rope trailing below",
    },
    ridge: {
      src: "/images/zindabad/route-06.jpeg",
      alt: "Snowy alpine ridge and rock towers along the Zindabad line",
    },
  },
} as const;

export const galleryImages: GalleryImage[] = [
  {
    id: "rock-hunza-valley",
    src: "/images/IMG_3882.JPG",
    alt: "Lead climbing above terraced fields and snow peaks in Hunza",
    category: "rock",
  },
  {
    id: "alpine-ridge-selfie",
    src: "/images/DJI_20250611155841_0133_D.jpg",
    alt: "Alpine ridge selfie with distant Karakoram peaks",
    category: "alpine",
  },
  {
    id: "rock-orange-helmet",
    src: "/images/IMG_1806.JPG",
    alt: "Climbing a golden rock face in an orange helmet",
    category: "rock",
  },
  {
    id: "alpine-ascend",
    src: "/images/fd508708-f735-4792-bac4-94863538a8ad.jpg",
    alt: "Ascending a steep snow slope with crampons and trekking pole",
    category: "alpine",
  },
  {
    id: "rock-vertical-reach",
    src: "/images/IMG_9895.JPG",
    alt: "Vertical rock climb overlooking a green mountain valley",
    category: "rock",
  },
  {
    id: "expedition-basecamp",
    src: "/images/_DSC9419.jpg",
    alt: "Climbing team portrait at snowy base camp",
    category: "expeditions",
  },
  {
    id: "alpine-couloir",
    src: "/images/IMG_6305.JPG",
    alt: "Selfie from a steep alpine couloir above a glacial valley",
    category: "alpine",
  },
  {
    id: "rock-red-rope",
    src: "/images/_DSC7469.jpg",
    alt: "Rock climbing with a red rope above a forested valley",
    category: "rock",
  },
  {
    id: "alpine-yellow-jacket",
    src: "/images/DJI_20250611104235_0115_D.jpg",
    alt: "High-altitude climbing selfie in a yellow technical jacket",
    category: "alpine",
  },
  {
    id: "rock-low-angle",
    src: "/images/_DSC7066.jpg",
    alt: "Low-angle climb on a sunlit cliff with valley haze below",
    category: "rock",
  },
  {
    id: "rock-side-reach",
    src: "/images/IMG_9892.JPG",
    alt: "Side view of a lead climb on ochre rock above green hills",
    category: "rock",
  },
  {
    id: "rock-valley-overlook",
    src: "/images/_DSC7443.jpg",
    alt: "Climbing a pale cliff face above dense valley scrub",
    category: "rock",
  },
  {
    id: "alpine-crampons",
    src: "/images/homepage-cover.jpeg",
    alt: "Fitting crampons on a high snowfield before climbing",
    category: "alpine",
  },
  {
    id: "alpine-yellow-ridge",
    src: "/images/DJI_20250609133743_0023_D.jpg",
    alt: "Climbing a snow ridge with glacier valleys and peaks below",
    category: "alpine",
  },
  {
    id: "expedition-zindabad-partners",
    src: "/images/zindabad/route-03.jpeg",
    alt: "Climbing partners on a snow slope during the Zindabad ascent",
    category: "expeditions",
  },
  {
    id: "expedition-high-camp",
    src: "/images/zindabad/route-04.jpeg",
    alt: "High camp tent on a ridge above a sea of clouds",
    category: "expeditions",
  },
  {
    id: "expedition-ascent",
    src: "/images/zindabad/route-05.jpeg",
    alt: "Climber ascending steep snow with a rope trailing below",
    category: "expeditions",
  },
  {
    id: "expedition-ridge",
    src: "/images/zindabad/route-06.jpeg",
    alt: "Snowy alpine ridge and rock towers along a high line",
    category: "expeditions",
  },
  {
    id: "rock-sunlit-face",
    src: "/images/_DSC7451.jpg",
    alt: "Sunlit rock face climbing above a deep valley",
    category: "rock",
  },
  {
    id: "rock-exposed-wall",
    src: "/images/_DSC7465.jpg",
    alt: "Exposed rock climbing on a steep wall overlooking the valley",
    category: "rock",
  },
  {
    id: "rock-overhang",
    src: "/images/_DSC7470.jpg",
    alt: "Climbing through steep rock with open mountain air below",
    category: "rock",
  },
  {
    id: "alpine-peak-sky",
    src: "/images/zindabad/route-02.jpeg",
    alt: "Snow-covered peak rising into a clear alpine sky",
    category: "alpine",
  },
];

export const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "alpine", label: "Alpine" },
  { id: "rock", label: "Rock" },
  { id: "expeditions", label: "Expeditions" },
];
