
import { Bot, MessageSquare, Search, Zap, Brain } from "lucide-react";


export default function Hero() {
  const options = [
    {
      icon: <Bot className="w-12 h-12 text-[#4237d9]" />,
      title: "Flexible Options",
      description: "Choose from OpenSource AI Agent SDK's or opt for fully specialized vertical agents from our curated inventory.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-[#d34457]" />,
      title: "Tailored Solutions",
      description: "Leverage industry-specific AI agents that understand your unique challenges or simply request a custom Agent",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#37d9a3]" />,
      title: "Agents As a Service",
      description: "Get cutting-edge agents as React components for the web or simply access API in dashboard.",
    },
    {
      icon: <Search className="w-12 h-12 text-[#1c9251]" />,
      title: "Get Started Today",
      description: "Join the ranks of industry leaders who are already accelerating innovation and boosting efficiency worldwide with Agentia World.",
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
            <span className="text-white py-3 sm:py-5 font-semibold sm:text-3xl md:text-4xl mt-4">
            Revolutionize Your Business with On-Demand AI Agents
            </span>
          </h1>
          <p className="mx-auto mt-3 text-justify max-w-md text-sm sm:text-lg  md:max-w-3xl md:text-xl px-4">
          Agentify Precision, Speed, and Scalability with Agentia World&apos;s Vertical AI Agents.
          Whether you&apos;re in healthcare, logistics, finance, or beyond, our innovative agents transform operations instantly.
          </p>          
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6"> 
                {options.map((feature) => (
                  <div key={feature.title} className="bg-[#eff0f3] rounded-lg  p-6 sm:p-8 transition-all hover:shadow-2xl flex flex-col items-center space-y-2">
                    <div>{feature.icon}</div>
                    <div className="relative w-full">
                      <h2 className="text-black sm:text-lg font-bold text-center">
                        {feature.title}
                      </h2>
                      <p className="mt-2 text-sm text-[#232946] text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
             
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
}
