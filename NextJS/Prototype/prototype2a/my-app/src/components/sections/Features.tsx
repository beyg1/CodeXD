import { Monitor, Shield, Zap, LineChart, CloudLightning, Code2, MessageSquare, FolderCode } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Monitor className="w-12 h-12 text-[#168c18]" />,
      title: "Smart Analytics",
      description: "Enable advanced analytics powered by AI agents to help you make data-driven decisions."
    },
    {
      icon: <Zap className="w-12 h-12 text-[#37d9a3]" />,
      title: "Fast Processing",
      description: "Lightning-fast processing of complex Automated workflows and operations."
    },  
    {
      icon: <CloudLightning className="w-12 h-12 text-[#6a37d9]" />,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud platforms and services."
    },
    {
      icon: <Code2 className="w-12 h-12 text-[#d937b6]" />,
      title: "API Access",
      description: "Robust API endpoints for custom integration and automation."
    },
    {
          icon: <MessageSquare className="w-12 h-12 text-red-600" />,
          title: "Tailored Solutions",
          description: "Leverage AI agents according to your niche that understand your unique challenges or simply request a custom Agent from our developers",
    },
    {
              icon: <FolderCode className="w-12 h-12 text-[#4471d3]" />,
              title: "Are you a Developer?",
              description: "Join Agentia and build your profile by developing opensource AI agents and get hired by companies to build custom agents for them.",
        },

  ];

  return (
    <section className="relative overflow-hidden min-h-[800px] lg:min-h-screen flex flex-col ">
     <div className="container relative mx-auto flex-1 flex flex-col justify-center px-4 mt-16 md:mt-24">
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Agentic <span className="text-red-600">Features</span></h1>
          <p className="mt-8 text-white sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8">
            Discover the cloud-based solutions that make our AI services stand out
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
          {features.map((feature) => (
            <div key={feature.title} className="w-full md:w-auto p-4 md:p-6 border-2 border-transparent bg-white bg-opacity-20 backdrop-blur-sm  shadow-2xl hover:animate-pulse font-medium hover:bg-transparent hover:border-white hover:border-2 rounded-lg ">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl text-white font-mono mb-2">{feature.title}</h3>
              <p className="text-white font-light">{feature.description}</p>
            </div>
          ))}
        </div>
     </div>
    </section>
  )
}
