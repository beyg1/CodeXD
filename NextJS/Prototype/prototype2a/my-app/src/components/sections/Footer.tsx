import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-16 md:py-24">
      <div className="container relative mx-auto flex-1 flex flex-col justify-center px-4 mt-16 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Agentia World</h3>
            <p className="text-black font-semibold">
              Transforming businesses with vertical AI solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="fb.com" className="text-gray-500 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="x.com" className="text-gray-500 hover:text-black">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="linkedin.com" className="text-gray-500 hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="instagram.com" className="text-gray-500 hover:text-red-600">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 md:mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-black hover:text-primary">About</Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-primary">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-primary">Press</Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-primary">News</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-black font-bold mb-3 md:mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-black hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-primary">Documentation</Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-primary">Help Center</Link>
              </li>
              <li>
                <Link href="#" className="text-black hover:text-primary">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#d9376e] mb-3 md:mb-4">Newsletter</h3>
            <p className="text-white mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="mt-12 bg-blue-500 text-white py-4 px-8 rounded-full hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 text-lg font-semibold">
          Subscribe
        </button>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t text-center text-sm text-white">
          <p>© 2024 Agentia World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}