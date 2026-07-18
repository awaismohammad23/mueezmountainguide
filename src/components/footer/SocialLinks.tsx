import { SocialIcon } from "@/components/ui/SocialIcon";
import { socialLinks } from "@/config/social";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {socialLinks.map((item) => (
        <li key={item.platform}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="group flex h-10 w-10 items-center justify-center text-muted transition-colors duration-200 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <SocialIcon
              platform={item.platform}
              className="h-[1.15rem] w-[1.15rem] transition-transform duration-200 group-hover:scale-110"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
