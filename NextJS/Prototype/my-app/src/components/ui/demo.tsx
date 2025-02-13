'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"

 
export  function SplineSceneBasic() {
  return (
    <Card className="w-full h-full bg-transparent border-transparent relative overflow-hidden">      
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      
    </Card>
  )
}