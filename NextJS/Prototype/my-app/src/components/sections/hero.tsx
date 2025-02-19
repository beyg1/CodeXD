import ButtonPrimary from "../ui/button-primary";
import AnimatedGridPatternDemo from "../ui/magic-grid";
import Lottie from "../ui/lottie";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-800">
      <AnimatedGridPatternDemo />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:items-start md:text-left">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Introduce Reasoning & LLMs to your <span className="text-red-600">Automated WorkFlow</span>
        </h1>
        <h2 className="mt-8 text-white sm:text-xl md:text-2xl lg:text-3xl font-medium max-w-2xl">
          Select opensource AI Agents from our library & transform your business. Request custom AI Agents for your unique Automation workflows from developers, who are contributing to the opensource Eco System.
        </h2>
        <ButtonPrimary className="mt-12" href="https://www.youtube.com/watch?v=9PoGWIK9DmE" target="_blank">
          See Demo
        </ButtonPrimary>
        <Lottie />
      </div>
    </section>
  );
}
