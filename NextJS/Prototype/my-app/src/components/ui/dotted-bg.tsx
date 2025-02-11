"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "./ThemeContext"

const DOT_SPACING = 20
const GLOW_RADIUS = 11.34 // Approximately 0.3cm at 96 DPI
const GLOW_DURATION = 1000 // 2 seconds
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

    const drawDots = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let x = 0; x < canvas.width; x += DOT_SPACING) {
        for (let y = 0; y < canvas.height; y += DOT_SPACING) {
          // Set dot color based on theme
          const dotColor = isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
          ctx.fillStyle = dotColor
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
        // Set glow color based on theme
        const glowColor = isDarkMode ? "255, 255, 255" : "0, 0, 0"
        const gradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, GLOW_RADIUS)
        gradient.addColorStop(0, `rgba(${glowColor}, ${0.3 * intensity})`)
        gradient.addColorStop(1, `rgba(${glowColor}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(glow.x, glow.y, GLOW_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const animate = (currentTime: number) => {
      drawDots()
      drawGlows(currentTime)

      while (glows.length < MIN_ACTIVE_GLOWS) {
        addGlow()
      }

      if (glows.length < MAX_ACTIVE_GLOWS && Math.random() < 0.02) {
        addGlow()
      }

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isDarkMode]) // Add isDarkMode as dependency

  const darkModeBackgroundStyle = {
    backgroundImage: `radial-gradient(
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    )`,
    backgroundSize: `${DOT_SPACING}px ${DOT_SPACING}px`,
  }

  const lightModeBackgroundStyle = {
    backgroundImage: `radial-gradient(
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px
    )`,
    backgroundSize: `${DOT_SPACING}px ${DOT_SPACING}px`,
  }

  return (
    <div 
      className={isDarkMode 
        ? "fixed inset-0 bg-gradient-to-r from-[#010012] to-[#1b2e55]" 
        : "fixed inset-0 bg-gradient-to-r from-[#271c19] to-[#55423d]"
      }
    >
      <div 
        className="absolute inset-0" 
        style={isDarkMode ? darkModeBackgroundStyle : lightModeBackgroundStyle}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}

