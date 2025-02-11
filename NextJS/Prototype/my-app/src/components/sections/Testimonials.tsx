import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Tom Preston",
    role: "CEO, Co-Founder Github// Early investor in Langbase",
    content: "If I were building Github for software of today with LLMs, Langbase is what it would look like. --Testimonials like these from developers/Founders ",
    rating: 5,
    avatar: "/test1.webp"
  },
  {
    name: "Iddo Gino",
    role: "Founder . RapidAI",
    content: "No one does it like Ahmad. Been playing with Langbase recently and if you want to get cooking with AI, this is it. 10/10 platform, 100/10 landing page.",
    rating: 5,
    avatar: "/test3.webp"
  },
  {
    name: "Logan Kilpatrick",
    role: "Google · OpenAI · Harvard",
    content: "Ahmad is uniquely positioned to dramatically improve the AI developer experience. He has done exactly that with Langbase, building on his deep expertise creating products for developers",
    rating: 5,
    avatar: "/test2.webp"
  }
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-screen flex flex-col">
      <div className="container relative mx-auto flex-1 flex flex-col justify-center px-4 mt-16 md:mt-24">
        <div className="text-center">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-tight">Perspectives from <span className="text-red-600">Experts</span></h2>
          <p className="mt-8 text-white sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8">
            See what AI Founders and Market Leaders have to say about Agentia<span className="text-red-600">World</span>.<br/> <span className="mt-4 text-xl text-red-500"> Disclamer - These are real testimonials from Langbase.com a Ai startup found by Ahmed Awais. I believe testimonials like these from Sir Zia's Students from Prestigious IT background can help the landing page.</span>
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-auto p-4 md:p-12 border-2 border-transparent bg-white bg-opacity-20 backdrop-blur-sm shadow-2xl hover:animate-pulse font-medium hover:bg-transparent hover:border-white hover:border-2 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white font-normal mb-4 md:mb-6">{testimonial.content}</p>
              <div className="flex items-center text-white gap-3 md:gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                </Avatar>
                <div>
                  <h3 className="text-xl text-white">{testimonial.name}</h3>
                  <p className="text-md text-white font-normal ">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
