import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <Team />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
