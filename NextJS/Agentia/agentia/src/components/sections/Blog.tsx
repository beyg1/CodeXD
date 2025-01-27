"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Blog() {
  const posts = [
    {
      title: "The Future of AI in Business",
      excerpt: "Discover how artificial intelligence is transforming modern business operations...",
      date: "March 15, 2024",
      category: "AI Trends"
    },
    {
      title: "Machine Learning Best Practices",
      excerpt: "Learn about the latest best practices in implementing machine learning solutions...",
      date: "March 12, 2024",
      category: "Technical"
    },
    {
      title: "Digital Transformation Guide",
      excerpt: "A comprehensive guide to digital transformation using AI technologies...",
      date: "March 10, 2024",
      category: "Guides"
    }
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Insights</h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Stay updated with our latest articles and insights
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="text-sm text-primary mb-2">{post.category}</div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-500 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Button variant="link" asChild>
                    <Link href="#">Read More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}