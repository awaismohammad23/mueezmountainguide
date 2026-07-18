export type SocialPlatform =
  | "instagram"
  | "youtube"
  | "facebook"
  | "tiktok"
  | "linkedin"
  | "x";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

/** Update YouTube, Facebook, TikTok, and X with real profile URLs when available. */
export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/muizz.din/",
  },
  {
    platform: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/",
  },
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    platform: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muizz-din-678a20165/",
  },
  {
    platform: "x",
    label: "X",
    href: "https://x.com/",
  },
];
