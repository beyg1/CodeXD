import { Brain, Bot, Database, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-[#c637d9]" />,
      title: "Agentic Consulting",
      description: "Pre-defined Strategic guidance on implementing Agentic solutions for your business needs.",
      price: "$999",
      features: [
        "AI Readiness Assessment",
        "Technology Stack Review",
        "Implementation Roadmap",
        "ROI Analysis"
      ]
    },
    {
      icon: <Bot className="w-12 h-12 text-[#4237d9]" />,
      title: "Deep Agentic",
      description: "Custom Agentic Solutions tailered specifically to solve your business challenges.",
      price: "$1499",
      features: [
        "Custom Model Development",
        "Model Training & Testing",
        "Performance Optimization",
        "Deployment Support"
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-[#c5bc47]" />,
      title: "Agentic Enterprise",
      description: "Transform your business empire with a swarm of thousands of Agentia agents.",
      price: "$2,499",
      features: [
        "Data Processing",
        "Predictive Analytics",
        "Visual Dashboards",
        "Specialized Reports"
      ]
    }
  ]

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-screen bg-[#c7d1e9] flex flex-col">
      <div className="container relative mx-auto flex-1 flex flex-col justify-center px-4 mt-16 md:mt-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-[#4237d9] sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-[#232946] md:text-xl">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-4 md:p-6 bg-muted rounded-lg bg-[#eff0f3] shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#232946]">{service.title}</h3>
              <p className="text-[#232946] mb-4">{service.description}</p>
              <div className="mb-4 md:mb-6">
                <span className="text-3xl text-[#d9376e] font-bold">{service.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-4 md:mb-6 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-auto w-full" size="lg">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
