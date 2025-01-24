import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <div className="h-screen overflow-y-auto scroll-smooth">
        <Hero />
        <Services />
        <Features />
        <CTA />
      </div>
    </main>
  );
}