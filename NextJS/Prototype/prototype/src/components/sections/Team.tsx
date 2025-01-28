import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Team() {
  const team = [
    {
      name: "Sir Zia",
      role: "CEO & Founder",
      bio: "AI Researcher. 25+ years of making future tech leaders",
      linkedin: "#",
      twitter: "#",
      image: "/sir-zia.webp"
    },
    {
      name: "Sir Qasim",
      role: "CTO",
      bio: "5+ years in Machine Learning",
      linkedin: "#",
      twitter: "#",
      image: "/sir-qasim.webp"
    },
    {
      name: "Sir Junaid",
      role: "Head of AI Research",
      bio: "Hackathon Winner. 5+ years in AI Research",
      linkedin: "#",
      twitter: "#",
      image: "/sir-junaid.webp"
    },
    {
      name: "Sir Jahanzaib",
      role: "Head of Web Operations & Cloud infrastructure",
      bio: "Full-stack AI Developer",
      linkedin: "#",
      twitter: "#",
      image: "/sir-jhanzaib.webp"
    }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 bg-[#b8c1ec]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-[#4237d9] sm:text-4xl md:text-5xl">Leaders who made this possible</h2>
          <p className="mt-4 text-[#232946] md:text-xl">
            Meet the Experts behind Market Leading Innovation
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center p-4 bg-[#eff0f3] md:p-6  rounded-lg shadow-lg"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
              <h3 className="text-lg md:text-xl text-[#d9376e] font-bold">{member.name}</h3>
              <p className="text-[#2a2a2a] mb-2">{member.role}</p>
              <p className="text-sm text-[#2a2a2a] mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <Link href={member.linkedin} className="text-gray-500 hover:text-blue-800">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href={member.twitter} className="text-gray-500 hover:text-black">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
