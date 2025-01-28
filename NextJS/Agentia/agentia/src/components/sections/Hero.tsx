import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, Search, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background h-screen bg-[#b8c1ec]">
      <div className="container relative z-10 mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            <span className="block py-2 text-6xl text-[#d9376e]">Agentia World</span>
            <span className="block text-[#232946] py-5 font-semibold text-4xl">A Vertical AI Agents Hub</span>
          </h1>
          <p className="mx-auto mt-3 text-[#232946] max-w-md text-base text-muted-foreground sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          Host your future with Agentia World—where specialized vertical AI agents deploy on-demand to revolutionize global industries.
          From healthcare to logistics, empower your business with precision, speed, and scalable intelligence. Transform operations instantly, 
          the next era of enterprise starts here. Your vision, powered by the world&apos;s most adaptive AI ecosystem.
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#">Explore Agents</Link>
              </Button>
            </div>
            <div className="transform hover:scale-105 active:scale-95 transition-transform mt-3 sm:mt-0 sm:ml-3">
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-75"></div>
              <div className="relative bg-[#eff0f3] grid grid-cols-2 gap-6 px-6 py-8 sm:gap-8 sm:px-12 sm:py-12 lg:grid-cols-4">
                {[
                  { icon: Bot, title: "Specialized Agents" },
                  { icon: MessageSquare, title: "Chat Interface" },
                  { icon: Search, title: "Easy Discovery" },
                  { icon: Zap, title: "Instant Deployment" },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="flex flex-col items-center text-center"
                  >
                    <feature.icon className="h-12 w-12 text-background text-[#d9376e]" />
                    <h3 className="mt-4 text-lg font-medium text-background text-[#2a2a2a]">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 w-full bg-background after:absolute after:inset-x-0 after:bottom-0 after:h-24 after:w-full after:bg-background after:rounded-t-[4rem] after:border-t after:border-background after:content-['']"></div>
    </section>
  )
}
