"use client"

import { motion } from "framer-motion"
import { Search, FileCode, Settings, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "1. Analyze",
      description: "We analyze your business needs and identify opportunities for AI integration."
    },
    {
      icon: <FileCode className="w-12 h-12 text-primary" />,
      title: "2. Develop",
      description: "Our experts develop customized AI solutions tailored to your requirements."
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "3. Implement",
      description: "We implement the solution seamlessly into your existing systems."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
      title: "4. Monitor",
      description: "Continuous monitoring and optimization to ensure optimal performance."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Our proven process for delivering successful AI solutions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-muted rounded-lg shadow-lg"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-2 transform translate-x-1/2">
                  <div className="h-0.5 w-full bg-gray-200"></div>
                </div>
              )}
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}