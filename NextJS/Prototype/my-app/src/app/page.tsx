import Hero from "@/components/sections/hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
<div>
      <Navbar/>
<section>
        <Hero/>
      </section>
{/* <section>
        <Features/>
      </section>
<section>
        <HowItWorks/>
      </section>
<section>
        <Testimonials/>
      </section>
<section>
        <Footer/>
      </section> */}
    </div>
  );
}
