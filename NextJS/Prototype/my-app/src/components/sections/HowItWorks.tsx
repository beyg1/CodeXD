import { Search, FileCode, Settings, CheckCircle } from "lucide-react"
import AIWorkflow from "../ui/aiworkflow"
export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-violet-600" />,
      title: "1. Analyze",
      description: "Analyze opensource AI Agents library and identify opportunities for AI integration."
    },
    {
      icon: <FileCode className="w-12 h-12 text-amber-500" />,
      title: "2. Shortlist",
      description: "Shortlist the Agents best suited for your custom Workflow or simply hire the developer of your choice."
    },
    {
      icon: <Settings className="w-12 h-12 text-lime-600" />,
      title: "3. Implement",
      description: "Implement the AI solution seamlessly into your existing systems."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
      title: "4. Monitor",
      description: "Let Agents continuously monitor, reason and optimize performance."
    }
  ]

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-screen flex flex-col">
      <div className="container relative mx-auto flex-1 flex flex-col justify-center px-4 mt-24  ">
        <div className="text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">How It <span className="text-red-600">Works</span></h1>
          <p className="mt-8 text-white sm:text-xl md:text-2xl lg:text-3xl font-medium mb-10">
            Get familiar with our carefully curated open-source AI Agents library and start integrating AI into your workflows today.
          </p>
        </div>
        <div className="grid gap-6 md:gap-8  md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-4 md:p-6  border-2 border-transparent bg-white bg-opacity-20 backdrop-blur-sm  shadow-2xl hover:animate-pulse font-medium hover:bg-transparent hover:border-white hover:border-2 rounded-lg "
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-2 transform translate-x-1/2">
                   <div className="h-0.5 w-full bg-black"></div>
                </div>
              )}
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl text-white font-mono mb-2">{step.title}</h3>
              <p className="text-white font-light">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 ">
          <AIWorkflow />
        </div>
      </div>
    </section>
  )
}
