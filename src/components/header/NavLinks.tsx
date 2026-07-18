import Link from "next/link";
import { navItems } from "@/config/nav";

type NavLinksProps = {
  onNavigate?: () => void;
  className?: string;
};

export function NavLinks({ onNavigate, className = "" }: NavLinksProps) {
  return (
    <ul className={`flex items-center gap-8 ${className}`}>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onNavigate}
            className="relative text-[0.9375rem] font-medium tracking-wide text-text/85 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-text hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
