import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Search, Zap, Brain } from "lucide-react";
import Link from "next/link";


export default function Hero() {
  const options = [
    {
      icon: <Bot className="w-12 h-12 text-[#4237d9]" />,
      title: "AI AGENTS SDK",
      description: "Download the SDK's for open-source agents and start building.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-[#d34457]" />,
      title: "CUI",
      description: "Hit those goals with Chat User Interface for your business needs.",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#37d9a3]" />,
      title: "Agents As a Service",
      description: "Get cutting-edge agents as React components for the web.",
    },
    {
      icon: <Search className="w-12 h-12 text-[#1c9251]" />,
      title: "Search Agents",
      description: "Search for agents that can help you with your business needs.",
    },
  ];

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
            <span className=" py-3 sm:py-5 font-semibold sm:text-3xl md:text-4xl mt-4">
              Hub of Vertical AI Agents
            </span>
          </h1>
          <p className="mx-auto mt-3  max-w-md text-sm sm:text-lg md:mt-5 md:max-w-3xl md:text-xl px-4">
Agentify your business with Agentia World—where specialized vertical AI agents deploy on-demand to revolutionize global industries.
From healthcare to logistics, empower your business with precision, speed, and scalable intelligence. Transform operations instantly,
be it OpenSource AI Agents or AI Agents as a Service. It will be Your vision, powered by the world&#39;s most adaptive AI ecosystem.
          </p>
          <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row sm:justify-center md:mt-8 space-y-3 sm:space-y-0 sm:space-x-3 px-4">
            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Button asChild size="lg" className="rounded-full bg-black hover:bg-white w-full sm:w-auto">
               <Link href="#" className="text-white hover:text-black">Explore AI Agents SDK</Link>
              </Button>
            </div>
            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Button asChild variant="outline" size="lg" className="bg-black hover:bg-white rounded-full w-full sm:w-auto">
               <Link href="#" className="text-white hover:text-black">AI Agents as A Service</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6">
                {options.map((feature) => (
<div key={feature.title} className="bg-[#eff0f3] rounded-lg shadow-xl p-6 sm:p-8 transition-all hover:shadow-2xl flex flex-col items-center space-y-2">
  <div>{feature.icon}</div>
  <div className="relative w-full">
    <h2 className="text-base sm:text-lg font-medium text-[#232946] text-center">
      {feature.title}
    </h2>
    <p className="mt-2 text-sm text-gray-600 text-center">
      {feature.description}
    </p>
  </div>
</div>
))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
