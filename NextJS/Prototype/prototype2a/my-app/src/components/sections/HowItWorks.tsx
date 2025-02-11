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
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-screen flex flex-col">
      <div className="container relative mx-auto flex-1 flex flex-col justify-center px-4 mt-16 md:mt-24  ">
        <div className="text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">How It <span className="text-red-600">Works</span></h1>
          <p className="mt-8 text-white sm:text-xl md:text-2xl lg:text-3xl font-medium mb-10">
            Our proven process for delivering successful AI solutions
          </p>
        </div>
        <div className="grid gap-6 md:gap-8  md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-4 md:p-6 bg-[#eff0f3] rounded-lg shadow-lg"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-2 transform translate-x-1/2">
                   <div className="h-0.5 w-full bg-black"></div>
                </div>
              )}
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
              <p className="text-[#232946]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
