import Link from "next/link";
import { Button } from "@/components/ui/button";


import React from 'react'

export default function Twobuttons() {
  return (
     <div className="mx-auto mt-5 max-w-md flex flex-col sm:flex-row sm:justify-center md:mt-8 space-y-3 sm:space-y-0 sm:space-x-3 px-4">
            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Button asChild size="lg" className="rounded-full bg-black hover:bg-white w-full sm:w-auto">
                <Link href="#" className="text-white hover:text-black">
                  Explore AI Agents SDK
                </Link>
              </Button>
            </div>
            <div className="transform hover:scale-105 active:scale-95 transition-transform">
              <Button asChild variant="outline" size="lg" className="bg-black hover:bg-white rounded-full w-full sm:w-auto">
                <Link href="#" className="text-white hover:text-black">
                  AI Agents as A Service
                </Link>
              </Button>
            </div>
          </div> 
  )
}
