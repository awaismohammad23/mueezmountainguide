import { ctaItem, navItems, type NavItem } from "@/config/nav";

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Explore",
    links: navItems,
  },
  {
    title: "Experience",
    links: [
      { label: "Skiing", href: "#guiding" },
      { label: "Climbing", href: "#guiding" },
      { label: "Photography", href: "#photography" },
      { label: "Expeditions", href: "#expeditions" },
    ],
  },
  {
    title: "Connect",
    links: [
      ctaItem,
      { label: "About", href: "#about" },
      { label: "Email", href: "mailto:hello@mueezmountainguide.com" },
    ],
  },
];
