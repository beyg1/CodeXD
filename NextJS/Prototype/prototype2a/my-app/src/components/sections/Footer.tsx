import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import ButtonPrimary from "../ui/button-primary"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-16 md:py-24">
      <div className="container relative mx-auto flex-1 flex flex-col justify-center px-4 mt-16 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg text-white font-bold">Agentia<span className="text-red-600">World</span></h3>
            <p className="text-white font-semibold">
              Transforming businesses with vertical AI solutions.
            </p>
            <div className="flex space-x-4">
<Link href="https://fb.com" className="text-white hover:text-blue-600" target="_blank">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://x.com" className="text-white hover:text-black" target="_blank">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-white hover:text-blue-500" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-red-600" target="_blank">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 md:mb-4 text-red-600">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white hover:text-red-600">About</Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-red-600">Careers</Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-red-600">Press</Link>
              </li>
              <li>
                <Link href="#" className="text-white   hover:text-red-600">News</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-red-600 font-bold mb-3 md:mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white  hover:text-red-600">Blog</Link>
              </li>
              <li>
                <Link href="#" className="text-white  hover:text-red-600">Documentation</Link>
              </li>
              <li>
                <Link href="#" className="text-white  hover:text-red-600">Help Center</Link>
              </li>
              <li>
                <Link href="#" className="text-white  hover:text-red-600">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-red-600 mb-3 md:mb-4">Newsletter</h3>
            <p className="text-white mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <ButtonPrimary>Subscribe</ButtonPrimary>
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
