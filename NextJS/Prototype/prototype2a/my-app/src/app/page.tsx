import Hero from "@/components/sections/hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Navbar/>
      <section className="snap-start h-screen w-screen flex items-center justify-center">
        <Hero/>
      </section>
      <section className="snap-start h-screen w-screen flex items-center justify-center">
        <Features/>
      </section>
      <section className="snap-start h-screen w-screen flex items-center justify-center">
        <HowItWorks/>
      </section>
      <section className="snap-start h-screen w-screen flex items-center justify-center">
        <Testimonials/>
      </section>
      <section className="snap-start h-screen w-screen flex items-center justify-center">
        <Footer/>
      </section>
    </div>
  );
}
