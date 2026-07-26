import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { homeContent } from "@/config/home";

export function Journey() {
  const { id, eyebrow, title, description, steps, cta } = homeContent.journey;

  return (
    <Section id={id} className="border-y border-border/50 bg-black py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-14 lg:mb-20"
          />
        </Reveal>

        <div className="space-y-20 lg:space-y-28">
          {steps.map((step, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={step.label}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <Reveal
                  className={
                    reverse
                      ? "lg:col-span-6 lg:order-2"
                      : "lg:col-span-6"
                  }
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-surface sm:aspect-[16/11]">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>

                <Reveal
                  delayMs={120}
                  className={
                    reverse
                      ? "lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:order-1"
                      : "lg:col-span-5 lg:col-start-8"
                  }
                >
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                    {step.label}
                  </p>
                  <h3 className="font-display text-2xl tracking-tight text-text sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                    {step.body}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>

        <Reveal delayMs={100}>
          <div className="mt-16 flex justify-start lg:mt-20">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
