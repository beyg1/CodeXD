'use client'
import Link from 'next/link';
import { Menu, Signature, Cpu, Plane, LineChart } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/25 backdrop-blur supports-[backdrop-filter]:bg-[#c6b291]">
      <div className="container flex h-16 items-center justify-between p-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-all duration-300 hover:scale-125"
        >
          <Signature className="h-5 w-5" />
          <span className="text-2xl font-semibold">Volk's Personal Blog</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/tech"
            className="flex items-center gap-2 rounded-md px-4 py-2 transition-all hover:bg-accent"
          >
            <Cpu className="h-4 w-4" />
            <span className="font-medium text-xl">Tech Blogs</span>
          </Link>

          <Link
            href="/traveling"
            className="flex items-center gap-2 rounded-md px-4 py-2 transition-all hover:bg-accent"
          >
            <Plane className="h-4 w-4" />
            <span className="font-medium text-xl">Travel Blogs</span>
          </Link>

          <Link
            href="/finance"
            className="flex items-center gap-2 rounded-md px-4 py-2 transition-all hover:bg-accent"
          >
            <LineChart className="h-4 w-4" />
            <span className="font-medium text-xl">Finance</span>
          </Link>
        </div>

        <button
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full hover:bg-accent"
          onClick={handleToggle}
        >
          <Menu className="h-5 w-5" />
        </button>

        {isOpen && (
          <div className="md:hidden absolute top-16 right-8 bg-background p-4 rounded-md shadow-md">
            <ul>
              <li>
                <Link
                  href="/tech"
                  className="flex items-center gap-2 py-2 transition-all hover:bg-accent"
                >
                  <Cpu className="h-4 w-4" />
                  <span className="font-medium text-xl">Tech Blogs</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/traveling"
                  className="flex items-center gap-2 py-2 transition-all hover:bg-accent"
                >
                  <Plane className="h-4 w-4" />
                  <span className="font-medium text-xl">Travel Blogs</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/finance"
                  className="flex items-center gap-2 py-2 transition-all hover:bg-accent"
                >
                  <LineChart className="h-4 w-4" />
                  <span className="font-medium text-xl">Finance</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}