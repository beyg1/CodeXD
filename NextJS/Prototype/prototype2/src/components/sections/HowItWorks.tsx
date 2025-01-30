import { Search, FileCode, Settings, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-[#d9376e]" />,
      title: "1. Analyze",
      description: "We analyze your business needs and identify opportunities for AI integration."
    },
    {
      icon: <FileCode className="w-12 h-12 text-[#d9376e]" />,
      title: "2. Develop",
      description: "Our experts develop customized AI solutions tailored to your requirements."
    },
    {
      icon: <Settings className="w-12 h-12 text-[#d9376e]" />,
      title: "3. Implement",
      description: "We implement the solution seamlessly into your existing systems."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#d9376e]" />,
      title: "4. Monitor",
      description: "Continuous monitoring and optimization to ensure optimal performance."
    }
  ]

  return (
    <section className="relative overflow-hidden h-screen bg-[#b8c1ec] flex flex-col">
      <div className="container relative  mx-auto flex-1 flex flex-col justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-[#4237d9] sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mt-4 text-[#232946] md:text-xl">
            Our proven process for delivering successful AI solutions
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-4 md:p-6 bg-muted bg-[#eff0f3] rounded-lg shadow-lg"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-2 transform translate-x-1/2">
                   <div className="h-0.5 w-full bg-black"></div>
                </div>
              )}
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-[#232946] mb-2">{step.title}</h3>
              <p className="text-[#232946]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
