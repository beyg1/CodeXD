import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function Hero() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to Agentia World
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Transforming businesses with cutting-edge AI solutions. Discover how we can help your business grow.
          </p>
          <div className="space-x-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}