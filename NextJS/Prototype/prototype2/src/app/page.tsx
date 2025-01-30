import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import AIStatusIndicator from "@/components/ui/AiStatus";

export default function Home() {
  return (
    <>
      <AIStatusIndicator />
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
}
