export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Temporary preview plane so the transparent header can be reviewed.
          Hero content will replace this in a later step. */}
      <section className="relative flex min-h-[100dvh] items-end bg-hero px-5 pb-16 sm:px-8 lg:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(50,74,95,0.55),transparent_50%),radial-gradient(ellipse_at_80%_60%,rgba(27,42,65,0.7),transparent_45%),linear-gradient(180deg,rgba(12,24,33,0.2)_0%,rgba(12,24,33,0.65)_50%,rgba(12,24,33,0.95)_100%)]"
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Hunza · Pakistan
          </p>
          <h1 className="max-w-2xl font-display text-4xl leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
            High-altitude guiding from the heart of the Karakoram.
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
        <p className="max-w-xl leading-relaxed text-muted">
          Scroll to preview the header solid state. Full page sections come next.
        </p>
      </section>
    </main>
  );
}
