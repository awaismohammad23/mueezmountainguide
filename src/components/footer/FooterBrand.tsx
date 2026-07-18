import { Logo } from "@/components/header/Logo";
import { site } from "@/config/site";

export function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Logo />
      <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
        {site.description}
      </p>
      <p className="mt-4 text-sm text-text/70">{site.location}</p>
    </div>
  );
}
