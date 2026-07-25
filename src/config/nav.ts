export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Expeditions", href: "/#expeditions" },
  { label: "Photography", href: "/#photography" },
  { label: "Guiding", href: "/#guiding" },
  { label: "Contact", href: "/contact" },
];

export const ctaItem = {
  label: "Inquire",
  href: "/contact",
} as const;
