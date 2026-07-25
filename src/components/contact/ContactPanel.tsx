import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/footer/SocialLinks";
import { contactContent } from "@/config/contact";

export function ContactPanel() {
  const { eyebrow, title, body, email, secondaryCta, images } =
    contactContent.panel;
  const [primary, secondary, tertiary] = images;

  return (
    <Section className="bg-bg py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={body}
              />
            </Reveal>

            <Reveal delayMs={80}>
              <div className="mt-8 space-y-5">
                <a
                  href={`mailto:${email}`}
                  className="inline-block text-sm tracking-wide text-muted transition-colors hover:text-text"
                >
                  {email}
                </a>
                <div>
                  <Button
                    href={secondaryCta.href}
                    variant="ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {secondaryCta.label}
                  </Button>
                </div>
                <SocialLinks />
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="mt-10 hidden gap-3 lg:grid lg:grid-cols-2">
                <div className="relative col-span-2 aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={primary.src}
                    alt={primary.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <Image
                    src={secondary.src}
                    alt={secondary.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <Image
                    src={tertiary.src}
                    alt={tertiary.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={100} className="lg:col-span-7">
            <div className="border border-border/60 bg-black/25 p-5 sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={80}>
          <div className="mt-12 grid grid-cols-3 gap-3 lg:hidden">
            {[primary, secondary, tertiary].map((image) => (
              <div
                key={image.src}
                className="relative aspect-[3/4] overflow-hidden bg-surface"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
