import HeroCards from "./Cards";
import { Brain } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[800px] lg:min-h-screen flex flex-col">
      <div className="container relative mx-auto flex-1 flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl flex flex-col items-center justify-center">
            <div className="flex items-center mr-[6%] mt-8 sm:mt-0">
              <Brain className="w-20 h-20 text-blue-400 animate-pulse mr-4" />
              <span className="block py-2 sm:text-5xl md:text-7xl text-[#4237d9] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 animate-gradient">
                Agentia World
              </span>
            </div>
            <span className="text-white py-3 sm:py-5 font-semibold sm:text-3xl md:text-4xl mt-4">
            Revolutionize Your Business with On-Demand AI Agents
            </span>
          </h1>
          <p className="mx-auto mt-3 text-ellipsis max-w-md text-sm sm:text-lg  md:max-w-3xl md:text-xl px-4">
          Agentify Precision, Speed, and Scalability with Agentia World&apos;s Vertical AI Agents.
          Whether you&apos;re in healthcare, logistics, finance, or beyond, our innovative agents transform operations instantly.
          </p>  
          <HeroCards />
        </div>
      </div>
    </section>
  );
}
