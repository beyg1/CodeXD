import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import AIStatusIndicator from "@/components/ui/AiStatus";
import TerminalFeed from "@/components/ui/TerminalFeed";
import NeuralBackground from "@/components/ui/animatedBackground";

export default function Home() {
  return (
    <> 
      <NeuralBackground/>        
      <AIStatusIndicator/>
      <Hero />
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Footer />
      <TerminalFeed />
    </>
  );
}
