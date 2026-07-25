import { ctaItem, navItems, type NavItem } from "@/config/nav";
import { site } from "@/config/site";

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
      { label: "Skiing", href: "/#guiding" },
      { label: "Climbing", href: "/#guiding" },
      { label: "Photography", href: "/#photography" },
      { label: "Expeditions", href: "/#expeditions" },
      { label: "Zindabad", href: "/stories/zindabad" },
    ],
  },
  {
    title: "Connect",
    links: [
      ctaItem,
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Email", href: `mailto:${site.email}` },
      {
        label: site.ventures.karakoramAscents.name,
        href: site.ventures.karakoramAscents.href,
      },
    ],
  },
];
