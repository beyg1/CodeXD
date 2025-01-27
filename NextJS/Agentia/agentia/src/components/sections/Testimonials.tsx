import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    role: "CTO, TechCorp",
    content: "Agentia's vertical AI solutions have transformed our business operations. The results exceeded our expectations.",
    rating: 5,
    avatar: "/test1.png"
  },
  {
    name: "Lisa Chen",
    role: "CEO, StartupX",
    content: "Working with Agentia was a game-changer. Their AI expertise helped us scale efficiently. Sometimes I wonder how we managed without them.",
    rating: 5,
    avatar: "/test3.png"
  },
  {
    name: "Mike Johnson",
    role: "Director, InnovateNow",
    content: "The team at Agentia delivers exceptional results. Their AI solutions are cutting-edge, cloud based and chat user interface is amazing.",
    rating: 5,
    avatar: "/test2.png"
  }
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 bg-[#b8c1ec]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-[#d9376e] sm:text-4xl md:text-5xl">Testimonials</h2>
          <p className="mt-4 c md:text-xl">
            See what our clients say about us
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Card>
                <CardContent className="p-4 md:p-6 bg-[#eff0f3]">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#2a2a2a] mb-4 md:mb-6">{testimonial.content}</p>
                  <div className="flex items-center text-[#d9376e] gap-3 md:gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-sm text-[#2a2a2a]">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
