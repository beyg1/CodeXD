import ButtonPrimary from "../ui/button-primary";
import AnimatedGridPatternDemo from "../ui/magic-grid";
import Lottie from "../ui/lottie";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-800">
      <AnimatedGridPatternDemo />
      <div className="relative z-10 flex min-h-screen px-4 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Introduce Reasoning & LLMs to your <span className="text-red-600">Automated WorkFlow</span>
            </h1>
            <h2 className="mt-8 text-white sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Select opensource AI Agents from our library & transform your business. Request custom AI Agents for your unique Automation workflows from developers, who are contributing to the opensource Eco System.
            </h2>
            <ButtonPrimary className="mt-12 self-start" href="https://www.youtube.com/watch?v=9PoGWIK9DmE" target="_blank">
              See Demo
            </ButtonPrimary>
          </div>
          
          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Lottie />
          </div>
        </div>
      </div>
    </section>
  );
}
