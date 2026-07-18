import { Button } from "@/components/ui/Button";
import { FooterBrand } from "@/components/footer/FooterBrand";
import { FooterNav } from "@/components/footer/FooterNav";
import { SocialLinks } from "@/components/footer/SocialLinks";
import { ctaItem } from "@/config/nav";
import { footerLinkGroups } from "@/config/footer";
import { site } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/60 bg-black">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-12 py-16 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:py-20">
          <FooterBrand />
          <FooterNav groups={footerLinkGroups} />
        </div>

        <div className="flex flex-col gap-8 border-t border-border/50 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <SocialLinks />
            <Button href={ctaItem.href} size="sm" className="w-fit">
              {ctaItem.label}
            </Button>
          </div>

          <p className="text-sm text-muted">
            © {year} {site.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
