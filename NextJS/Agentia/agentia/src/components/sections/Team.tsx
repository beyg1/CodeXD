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
      image: "/sir-zia.png"
    },
    {
      name: "Sir Qasim",
      role: "CTO",
      bio: "5+ years in Machine Learning",
      linkedin: "#",
      twitter: "#",
      image: "/sir-qasim.png"
    },
    {
      name: "Sir Junaid",
      role: "Head of AI Research",
      bio: "Hackathon Winner. 5+ years in AI Research",
      linkedin: "#",
      twitter: "#",
      image: "/sir-junaid.png"
    },
    {
      name: "Sir Jahanzaib",
      role: "Head of Web Operations & Cloud infrastructure",
      bio: "Full-stack AI Developer",
      linkedin: "#",
      twitter: "#",
      image: "/sir-jhanzaib.png"
    }
  ]

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Meet the experts behind our AI innovations
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-lg shadow-lg"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 128px) 100vw, 128px"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <Link href={member.linkedin} className="text-gray-500 hover:text-blue-800">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href={member.twitter} className="text-gray-500 hover:text-primary">
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
