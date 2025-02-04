import Hero from "@/components/sections/hero";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">     
      <Hero/>      
      <Features/>
    </section>  
  );
}
