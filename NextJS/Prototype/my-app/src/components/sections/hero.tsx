import ButtonPrimary from "../ui/button-primary";
import AnimatedGridPatternDemo from "../ui/magic-grid";
import Lottie from "../ui/lottie";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-800">
      <AnimatedGridPatternDemo />
      <div className="relative z-10 flex min-h-screen px-4 py-8">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center items-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/5 md:-translate-y-1/2 ">
            <Lottie />
          </div>
          {/* Text Content */}
          <div className="flex flex-col w-full md:w-1/2 md:absolute md:bottom-0 md:left-0 md:mt-auto md:ml-auto md:mb-auto md:mr-8 order-1 md:order-1">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:pl-8">
              Introduce Reasoning & LLMs to your <span className="text-red-600">Automated WorkFlow</span>
            </h1>
            <h2 className="mt-8 text-white sm:text-xl md:text-2xl lg:text-3xl font-medium md:pl-8">
              Select opensource AI Agents from our library & transform your business. Request custom AI Agents for your unique Automation workflows from developers, who are contributing to the opensource Eco System.
            </h2>
            <ButtonPrimary className="mt-12 mx-8 self-start md:pl-8" href="https://www.youtube.com/watch?v=9PoGWIK9DmE" target="_blank">
              See Demo
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}
