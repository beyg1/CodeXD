import DottedBackground from "../components/dotted-bg";
import Hero from "@/components/sections/hero";
export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#010012] to-[#1b2e55]">
      <DottedBackground />
      <Hero />
    </section>  
  );
}
