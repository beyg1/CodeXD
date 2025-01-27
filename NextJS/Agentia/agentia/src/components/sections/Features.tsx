import { Monitor, Shield, Zap, LineChart, CloudLightning, Code2 } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Monitor className="w-12 h-12 text-[#d9376e]" />,
      title: "Smart Analytics",
      description: "Advanced analytics powered by AI to help you make data-driven decisions."
    },
    {
      icon: <Shield className="w-12 h-12 text-[#d9376e]" />,
      title: "Secure Platform",
      description: "Enterprise-grade security to protect your sensitive data."
    },
    {
      icon: <Zap className="w-12 h-12 text-[#d9376e]" />,
      title: "Fast Processing",
      description: "Lightning-fast processing of complex AI tasks and operations."
    },
    {
      icon: <LineChart className="w-12 h-12 text-[#d9376e]" />,
      title: "Real-time Insights",
      description: "Get instant insights and predictions for your business needs."
    },
    {
      icon: <CloudLightning className="w-12 h-12 text-[#d9376e]" />,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud platforms and services."
    },
    {
      icon: <Code2 className="w-12 h-12 text-[#d9376e]" />,
      title: "API Access",
      description: "Robust API endpoints for custom integration and automation."
    }
  ]

  return (
    <section className="min-h-screen  bg-gradient-to-b from-primary/10 to-background bg-[#b8c1ec] w-full flex items-center justify-center bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#d9376e] tracking-tighter sm:text-4xl md:text-5xl">Our Features</h2>
          <p className="mt-4 text-[#232946] md:text-xl">
            Discover the powerful features that make our AI solutions stand out
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-background bg-[#eff0f3] rounded-lg shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[#232946]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>    
  )
}
