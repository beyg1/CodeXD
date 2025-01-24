import Link from 'next/link'
import React from 'react'

export default function TopNav() {
    return (
        <div>
            <nav className="bg-emerald-500 shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white  hover:bg-slate-300 px-3 py-2 rounded-md text-xl font-bold">LOGO</Link>
                        </div>
                         {/* Navigation Links  */}
                        <div>
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/About" className="text-white hover:bg-green-500 px-3 py-2 rounded-md text-xl font-sans">
                                    About
                                </Link>
                                <Link href="/Blog" className="text-white hover:bg-green-500 px-3 py-2 rounded-md text-xl font-sans">
                                    Blogs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}