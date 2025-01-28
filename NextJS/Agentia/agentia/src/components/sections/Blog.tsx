import { Button } from "@/components/ui/button"
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
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 bg-[#b8c1ec]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl font-bold text-[#d9376e] tracking-tighter sm:text-4xl md:text-5xl">Latest Insights</h2>
          <p className="mt-4 text-[#232946] md:text-xl">
            Stay updated with our latest articles and blogs on artificial intelligence and it&apos;s impact on businesses around the world.
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-lg bg-[#eff0f3] overflow-hidden"
            >
              <div className="p-4 md:p-6">
                <div className="text-sm text-[#232946] mb-2">{post.category}</div>
                <h3 className="text-lg md:text-xl text-[#d9376e] font-bold mb-2">{post.title}</h3>
                <p className="text-[#232946] mb-4 text-sm md:text-base">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-sm text-gray-500">{post.date}</span>
                  <Button variant="link" asChild className="text-sm md:text-base">
                    <Link href="#">Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}