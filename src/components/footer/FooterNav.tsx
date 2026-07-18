import Link from "next/link";
import type { FooterLinkGroup } from "@/config/footer";

type FooterNavProps = {
  groups: FooterLinkGroup[];
};

export function FooterNav({ groups }: FooterNavProps) {
  return (
    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-12">
      {groups.map((group) => (
        <nav key={group.title} aria-label={group.title}>
          <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            {group.title}
          </p>
          <ul className="flex flex-col gap-3">
            {group.links.map((link) => (
              <li key={`${group.title}-${link.label}`}>
                <Link
                  href={link.href}
                  className="text-[0.9375rem] text-text/80 transition-colors duration-200 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}
