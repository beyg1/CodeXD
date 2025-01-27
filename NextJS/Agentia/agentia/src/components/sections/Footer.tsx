import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Agentia World</h3>
            <p className="text-sm text-gray-500">
              Transforming businesses with vertical AI solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">About</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Press</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">News</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Documentation</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Help Center</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-gray-500">
          <p>© 2024 Agentia World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}