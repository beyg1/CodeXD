import type React from "react"
import { Button } from "../ui/button"
import { Store, User, Settings, HelpCircle,  } from "lucide-react"

const CylindricalNavbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-36 right-36 z-50 p-4 flex justify-between items-center w-auto rounded-full bg-gradient-to-r from-white/10 to-white/30 backdrop-blur-sm backdrop-hue-rotate-0  shadow-2xl">
      <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-white/5 transition-colors">
        <Store className="mr-2 h-4 w-4" /> Agentia World
      </Button>
      <div className="flex space-x-2">
        {[User, Settings, HelpCircle].map((Icon, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="text-white/90 hover:text-white hover:bg-white/5transition-colors"
          >
            <Icon className="h-4 w-4" />
          </Button>
        ))}
      </div>
    </nav>
  )
}

export default CylindricalNavbar

