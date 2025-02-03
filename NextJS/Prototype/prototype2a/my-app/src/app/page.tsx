import DottedBackground from "../components/dotted-bg";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden ">
      <DottedBackground />
      <Hero />      
      
    </section>  
  );
}
