"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "./ThemeContext"

const DOT_SPACING = 20
const GLOW_RADIUS = 11.34 // Approximately 0.3cm at 96 DPI
const GLOW_DURATION = 2000 // 2 seconds
const MIN_ACTIVE_GLOWS = 3
const MAX_ACTIVE_GLOWS = 5

interface Glow {
  x: number
  y: number
  startTime: number
}

export default function DottedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isDarkMode } = useTheme()
  const [globalGlowIntensity, setGlobalGlowIntensity] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const glows: Glow[] = []

    const addGlow = () => {
      const columns = Math.floor(canvas.width / DOT_SPACING)
      const rows = Math.floor(canvas.height / DOT_SPACING)
      const randomColumn = Math.floor(Math.random() * columns)
      const randomRow = Math.floor(Math.random() * rows)
      const x = randomColumn * DOT_SPACING
      const y = randomRow * DOT_SPACING
      glows.push({ x, y, startTime: performance.now() })
    }

    // Initialize with MIN_ACTIVE_GLOWS
    for (let i = 0; i < MIN_ACTIVE_GLOWS; i++) {
      addGlow()
    }

    const drawDots = (globalIntensity: number) => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let x = 0; x < canvas.width; x += DOT_SPACING) {
        for (let y = 0; y < canvas.height; y += DOT_SPACING) {
          const baseOpacity = 0.05 + globalIntensity * 0.1
          ctx.fillStyle = `rgba(255, 255, 255, ${baseOpacity})`
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const drawGlows = (currentTime: number) => {
      if (!ctx) return

      glows.forEach((glow, index) => {
        const elapsed = currentTime - glow.startTime
        const progress = elapsed / GLOW_DURATION

        if (progress >= 1) {
          glows.splice(index, 1)
          return
        }

        const intensity = Math.sin(progress * Math.PI)

        const gradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, GLOW_RADIUS)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.5 * intensity})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(glow.x, glow.y, GLOW_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const animate = (currentTime: number) => {
      const globalIntensity = (Math.sin(currentTime / 2000) + 1) / 2
      setGlobalGlowIntensity(globalIntensity)

      drawDots(globalIntensity)
      drawGlows(currentTime)

      // Ensure at least MIN_ACTIVE_GLOWS are always present
      while (glows.length < MIN_ACTIVE_GLOWS) {
        addGlow()
      }

      // Randomly add more glows up to MAX_ACTIVE_GLOWS
      if (glows.length < MAX_ACTIVE_GLOWS && Math.random() < 0.02) {
        addGlow()
      }

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isDarkMode])

  const darkModeBackgroundStyle = {
    backgroundImage: `radial-gradient(
      rgba(255, 255, 255, ${0.05 + globalGlowIntensity * 0.1}) 1px,
      transparent 1px
    )`,
    backgroundSize: `${DOT_SPACING}px ${DOT_SPACING}px`,
  }

  // Updated light mode background style to use white dots instead of black ones
  const lightModeBackgroundStyle = {
    backgroundImage: `radial-gradient(
      rgba(255, 255, 255, ${0.05 + globalGlowIntensity * 0.1}) 1px,
      transparent 1px
    )`,
    backgroundSize: `${DOT_SPACING}px ${DOT_SPACING}px`,
  }

  return (
    <div 
      className={isDarkMode 
        ? "fixed inset-0 bg-gradient-to-r from-[#010012] to-[#1b2e55]" 
        : "fixed inset-0 bg-gradient-to-r from-[#2c2727] to-[#404247]"
      }
    >
      {/* Global illuminating dotted background */}
      <div className="absolute inset-0" style={isDarkMode ? darkModeBackgroundStyle : lightModeBackgroundStyle}></div>

      {/* Canvas for individual glowing dots */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

