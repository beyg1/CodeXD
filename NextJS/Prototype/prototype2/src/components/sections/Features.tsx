import { Monitor, Shield, Zap, LineChart, CloudLightning, Code2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Monitor className="w-12 h-12 text-[#168c18]" />,
      title: "Smart Analytics",
      description: "Advanced analytics powered by AI to help you make data-driven decisions."
    },
    {
      icon: <Shield className="w-12 h-12 text-[#ff3030]" />,
      title: "Secure Platform",
      description: "Enterprise-grade security to protect your sensitive data."
    },
    {
      icon: <Zap className="w-12 h-12 text-[#37d9a3]" />,
      title: "Fast Processing",
      description: "Lightning-fast processing of complex AI tasks and operations."
    },
    {
      icon: <LineChart className="w-12 h-12 text-[#21818c]" />,
      title: "Real-time Insights",
      description: "Get instant insights and predictions for your business needs."
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
    }
  ];

  return (
    <section className="relative overflow-hidden min-h-[800px] lg:min-h-screen flex flex-col ">
     <div className="container relative mx-auto flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Agentic Features</h1>
          <p className="mt-4 md:text-xl">
            Discover the cloud-based solutions that make our AI services stand out
          </p>
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="w-full md:w-auto p-4 md:p-6 bg-[#eff0f3] rounded-lg shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl text-black font-bold mb-2">{feature.title}</h3>
              <p className="text-[#232946]">{feature.description}</p>
            </div>
          ))}
        </div>
     </div>
    </section>
  )
}
