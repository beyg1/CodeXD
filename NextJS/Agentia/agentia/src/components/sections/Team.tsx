"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former AI Research Lead at Tech Giants",
      linkedin: "#",
      twitter: "#",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "15+ years in Machine Learning",
      linkedin: "#",
      twitter: "#",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Emily Brown",
      role: "Head of AI Research",
      bio: "PhD in Computer Science",
      linkedin: "#",
      twitter: "#",
      image: "https://images.pexels.com/photos/3799986/pexels-photo-3799986.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack AI Developer",
      linkedin: "#",
      twitter: "#",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Meet the experts behind our AI innovations
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <Link href={member.linkedin} className="text-gray-500 hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href={member.twitter} className="text-gray-500 hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}