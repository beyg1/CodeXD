import ButtonPrimary from "../ui/button-primary";
import AnimatedGridPatternDemo from "../ui/magic-grid";
import AnimatedBeamDemo from "../ui/animated-beam";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-800">
      <AnimatedGridPatternDemo />
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Side Structure */}
        <div className="flex flex-col w-full md:w-1/2 h-full">
          {/* Empty Top Left Container */}
          <div className="flex-1" />
          
          {/* Text Content Container - Bottom Left */}
          <div className="flex flex-col">
            <h1 className="text-white text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight md:pl-8">
              AI Agents - Discover, Deploy &
              <span className="text-red-600"> Build the Future.</span>
            </h1>
            <h2 className="mt-8 text-white sm:text-xl md:text-2xl lg:text-2xl font-medium md:pl-8">
              Introduce Reasoning & Add Artificial Intelligence to your Automated Work Flows.
              Select opensource AI Agents from our library or simply request custom AI Agents for your
              unique Automation Work Flow.
            </h2>
            <ButtonPrimary
              className="mt-12 mb-4 mx-8 self-start md:pl-8"
              href="https://www.youtube.com/"
              target="_blank"
            >
              See Demo
            </ButtonPrimary>
          </div>
        </div>

        {/* Right Side Container */}
        <div className="w-full md:w-1/2 h-screen ">
          <div className="flex h-full items-center justify-center">
            <AnimatedBeamDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
