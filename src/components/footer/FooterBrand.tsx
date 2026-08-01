import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/media";
import { site } from "@/config/site";

export function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Link
        href="/"
        className="group inline-flex items-center gap-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:gap-4"
        aria-label={`${site.name} — Home`}
      >
        <Image
          src={media.logo.src}
          alt=""
          width={293}
          height={256}
          sizes="(max-width: 640px) 48px, 56px"
          className="h-12 w-auto shrink-0 object-contain sm:h-14"
        />
        <span className="flex flex-col gap-0.5">
          <span className="font-display text-[1.65rem] leading-none tracking-tight text-text transition-colors duration-300 group-hover:text-accent-hover">
            Mueez
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted transition-colors duration-300">
            Mountain Guide · Pakistan
          </span>
        </span>
      </Link>
      <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
        {site.description}
      </p>
      <p className="mt-4 text-sm text-text/70">{site.location}</p>
    </div>
  );
}
