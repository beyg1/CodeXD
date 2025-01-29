import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Search, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background min-h-screen bg-[#b8c1ec] py-8">
      <div className="container relative z-10 mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            <span className="block py-2  sm:text-5xl md:text-7xl text-[#4237d9]">Agentia World</span>
            <span className="text-[#232946] py-3 sm:py-5 font-semibold sm:text-3xl md:text-4xl">Hub of Vertical AI Agents</span>
          </h1>
          <p className="mx-auto mt-3 text-[#232946] max-w-md text-sm  sm:text-lg md:mt-5 md:max-w-3xl md:text-xl px-4">
          Host your future with Agentia World—where specialized vertical AI agents deploy on-demand to revolutionize global industries.
          From healthcare to logistics, empower your business with precision, speed, and scalable intelligence. Transform operations instantly, 
          the next era of enterprise starts here. Your vision, powered by the world&apos;s most adaptive AI ecosystem.
          </p>
          <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row sm:justify-center md:mt-8 space-y-3 sm:space-y-0 sm:space-x-3 px-4">
            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
                <Link href="#">Explore Agents</Link>
              </Button>
            </div>
            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Button asChild variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                <Link href="#">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="relative bg-[#eff0f3] grid grid-cols-2 gap-4 sm:gap-6 px-4 py-6 sm:px-12 sm:py-12 lg:grid-cols-4">
                {[
                  { icon: Bot, title: "Specialized Agents" },
                  { icon: MessageSquare, title: "Chat Interface" },
                  { icon: Search, title: "Easy Discovery" },
                  { icon: Zap, title: "Instant Deployment" },
                ].map((feature) => (                  
                  <div
                    key={feature.title}
                    className="flex flex-col items-center p-2"
                  >
                    <feature.icon className="h-8 w-8 sm:h-12 sm:w-12 text-[#4237d9]" />
                    <h3 className="mt-2 sm:mt-4 text-base sm:text-lg font-medium text-[#232946] text-center">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 w-full bg-background after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:sm:h-24 after:w-full after:bg-background after:rounded-t-[2rem] after:sm:rounded-t-[4rem] after:border-t after:border-background after:content-['']"></div>
    </section>
  )
}
