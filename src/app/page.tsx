import { About } from "@/components/home/About";
import { Guiding } from "@/components/home/Guiding";
import { Hero } from "@/components/home/Hero";
import { Inquire } from "@/components/home/Inquire";
import { Journey } from "@/components/home/Journey";
import { Photography } from "@/components/home/Photography";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Journey />
      <Photography />
      <Guiding />
      <Inquire />
    </main>
  );
}
