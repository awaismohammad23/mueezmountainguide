import { About } from "@/components/home/About";
import { Guiding } from "@/components/home/Guiding";
import { Hero } from "@/components/home/Hero";
import { Inquire } from "@/components/home/Inquire";
import { Journey } from "@/components/home/Journey";
import { Photography } from "@/components/home/Photography";
import { StorySpotlight } from "@/components/home/StorySpotlight";
import { Venture } from "@/components/home/Venture";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <StorySpotlight />
      <Journey />
      <Photography />
      <Guiding />
      <Venture />
      <Inquire />
    </main>
  );
}
