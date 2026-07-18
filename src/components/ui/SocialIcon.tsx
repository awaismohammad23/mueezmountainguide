import type { ReactElement } from "react";
import type { SocialPlatform } from "@/config/social";

type IconProps = {
  className?: string;
};

function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 12.2s0-3.2-.4-4.7c-.2-.8-.8-1.4-1.6-1.6C18.5 5.5 12 5.5 12 5.5s-6.5 0-8 .4c-.8.2-1.4.8-1.6 1.6C2 9 2 12.2 2 12.2s0 3.2.4 4.7c.2.8.8 1.4 1.6 1.6 1.5.4 8 .4 8 .4s6.5 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.5.4-4.7.4-4.7Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10 9.75v4.5L14.5 12 10 9.75Z" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.5 4c.4 2.2 1.9 3.8 4 4.2v2.5c-1.4 0-2.7-.4-3.8-1.2v5.7a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v2.7a3.1 3.1 0 1 0 2.2 3V4h2.5Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4A1.7 1.7 0 1 0 5.1 7.4 1.7 1.7 0 0 0 5.1 4ZM20.3 20h-2.8v-5.6c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20h-2.8s0-9.3 0-10.5h2.8v1.7c.5-.8 1.5-1.9 3.5-1.9 2.5 0 4.4 1.6 4.4 5.2V20Z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 4h2.4l-5.3 6.1L21 20h-5.2l-3.5-4.6L7.6 20H5.2l5.7-6.5L3.5 4h5.3l3.2 4.2L17.5 4Zm-1 14.4h1.3L8.1 5.5H6.7l9.8 12.9Z" />
    </svg>
  );
}

const icons: Record<SocialPlatform, (props: IconProps) => ReactElement> = {
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
};

type SocialIconProps = {
  platform: SocialPlatform;
  className?: string;
};

export function SocialIcon({
  platform,
  className = "h-5 w-5",
}: SocialIconProps) {
  const Icon = icons[platform];
  return <Icon className={className} />;
}
