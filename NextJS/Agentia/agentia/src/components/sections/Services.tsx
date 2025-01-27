import { Brain, Bot, Database, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions for your business needs.",
      price: "$1,999",
      features: [
        "AI Readiness Assessment",
        "Technology Stack Review",
        "Implementation Roadmap",
        "ROI Analysis"
      ]
    },
    {
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "Machine Learning",
      description: "Custom ML models designed to solve your specific business challenges.",
      price: "$2,999",
      features: [
        "Custom Model Development",
        "Model Training & Testing",
        "Performance Optimization",
        "Deployment Support"
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Data Analytics",
      description: "Transform your raw data into actionable business insights.",
      price: "$1,499",
      features: [
        "Data Processing",
        "Predictive Analytics",
        "Visual Dashboards",
        "Regular Reports"
      ]
    }
  ]

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-muted rounded-lg shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">{service.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-auto" size="lg">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
