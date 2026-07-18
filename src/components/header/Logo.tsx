import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex flex-col gap-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      aria-label="Mueez Mountain Guide — Home"
    >
      <span className="font-display text-[1.65rem] leading-none tracking-tight text-text transition-colors duration-300 group-hover:text-accent-hover">
        Mueez
      </span>
      <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted transition-colors duration-300">
        Mountain Guide · Hunza
      </span>
    </Link>
  );
}
