import type React from "react"
import { Button } from "../ui/button"
import { Store, ArrowRightToLine, BotMessageSquare  } from "lucide-react"

const CylindricalNavbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-36 right-36 z-50 p-4 flex justify-between items-center w-auto rounded-full bg-gradient-to-r from-white/10 to-white/30 backdrop-blur-sm backdrop-hue-rotate-0  shadow-2xl">
      <Button variant="ghost" className="text-white/90  hover:bg-white/5 transition-colors">
        <Store className="mr-1" /> Agentia World
      </Button>
      <div className="flex space-x-2">
        <Button variant="ghost" className="text-white/90  hover:bg-white/5 transition-colors">
          <BotMessageSquare className="mr-1" /> Agents
        </Button>
        <Button variant="ghost" className="text-white/90  hover:bg-white/5 transition-colors">
          <ArrowRightToLine className="mr-1" /> Get Started
        </Button>        
      </div>
    </nav>
  )
}

export default CylindricalNavbar

