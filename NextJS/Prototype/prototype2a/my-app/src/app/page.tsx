import Hero from "@/components/sections/hero";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start h-screen w-screen flex items-center justify-center">
        <Hero/>
      </section>
      <section className="snap-start h-screen w-screen flex items-center justify-center">
        <Features/>
      </section>
      <section className="snap-start h-screen w-screen flex items-center justify-center">
        <Hero/>
      </section>
      <section className="snap-start h-screen w-screen flex items-center justify-center">
        <Features/>
      </section>
    </div>
  );
}
