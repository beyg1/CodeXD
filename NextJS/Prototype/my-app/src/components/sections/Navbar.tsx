'use client'
import type React from "react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger  } from "@radix-ui/react-dropdown-menu"
import { Store, ArrowRightToLine, BotMessageSquare, ChevronDown } from "lucide-react"
import ThemeToggleButton from "../ui/ThemeToggleButton"

const CylindricalNavbar: React.FC = () => {
  return (
<nav className="fixed top-4 left-0 right-0 w-auto z-50 p-4 md:mx-20 flex justify-between items-center rounded-full bg-gradient-to-r from-white/10 to-white/30 dark:from-white/5 dark:to-white/10 backdrop-blur-sm backdrop-hue-rotate-0  shadow-2xl md:left-0 md:right-0 md:justify-between">
<Button variant="ghost" className="text-gray-800 dark:text-white/90 hover:bg-white/5 transition-colors">
  <Store className="mr-1 text-orange-400" />
  <span className="text-gray-800 dark:text-white-600 font-serif text-xl">
    Agentia
  <span className="text-red-600 font-serif text-xl">World</span>
  </span>
</Button>
      <div className="flex space-x-2 md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-gray-800 dark:text-white/90 hover:bg-white/5 transition-colors">
              <ChevronDown className="mr-1 text-gray-800 dark:text-white" /> Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white/80 dark:bg-black/80 backdrop-blur-sm backdrop-hue-rotate-0 shadow-2xl">
            <DropdownMenuItem>
              <Button variant="ghost" className="text-gray-800 dark:text-white/90 hover:bg-white/5 transition-colors w-full justify-start">
                <BotMessageSquare className="mr-1 text-indigo-800" /> Agents
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="ghost" className="text-gray-800 dark:text-white/90 hover:bg-white/5 transition-colors w-full justify-start">
                <ArrowRightToLine className="mr-1 text-green-400" /> Get Started
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden space-x-2 md:flex items-center">
        <Button variant="ghost" className="text-gray-800 dark:text-white/90 hover:bg-white/5 transition-colors">
          <BotMessageSquare className="mr-1 text-indigo-800" /> Agents
        </Button>
        <Button variant="ghost" className="text-gray-800 dark:text-white/90 hover:bg-white/5 transition-colors">
          <ArrowRightToLine className="mr-1 text-green-400" /> Get Started
        </Button>        
        <ThemeToggleButton />
      </div>
      <div className="ml-auto">
        <ThemeToggleButton />
      </div>
    </nav>
  )
}

export default CylindricalNavbar
