import ButtonPrimary from "../ui/button-primary";
import AnimatedGridPatternDemo from "../ui/magic-grid";


export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-800">
      <AnimatedGridPatternDemo />
      
       
          
          {/* Text Content */}
          <div className="flex bg-black flex-col w-full md:w-1/2 md:absolute md:bottom-0 md:left-0 md:mt-auto md:ml-auto md:mb-auto md:mr-8 order-1 md:order-1">
            <h1 className="text-white text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight md:pl-8">
            AI Agents – Discover, Buy & 
            <span className="text-red-600"> Build the Future.</span>
            </h1>
            <h2 className="mt-8 text-white sm:text-xl md:text-2xl lg:text-2xl font-medium md:pl-8">
            Introduce Reasoning & Add Artificial Intelligence to your Automated Work Flows. Select opensource AI Agents from our library or simply request custom AI Agents for your unique Automation Work Flow.
            </h2>
            <ButtonPrimary className="mt-12 mb-4 mx-8 self-start md:pl-8" href="https://www.youtube.com/watch?v=9PoGWIK9DmE" target="_blank">
              See Demo
            </ButtonPrimary>
          </div>
        
     
    </section>
  );
}
