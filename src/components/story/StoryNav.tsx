"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cx } from "@/lib/cx";

type Chapter = {
  id: string;
  label: string;
};

type StoryNavProps = {
  chapters: readonly Chapter[];
};

export function StoryNav({ chapters }: StoryNavProps) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");

  useEffect(() => {
    const nodes = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <div className="sticky top-[4.75rem] z-30 border-b border-border/50 bg-bg/90 backdrop-blur-md lg:top-20">
      <Container>
        <nav
          aria-label="Story chapters"
          className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {chapters.map((chapter) => {
            const active = chapter.id === activeId;
            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className={cx(
                  "shrink-0 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  active
                    ? "bg-accent text-on-accent"
                    : "text-muted hover:text-text",
                )}
              >
                {chapter.label}
              </a>
            );
          })}
        </nav>
      </Container>
    </div>
  );
}
