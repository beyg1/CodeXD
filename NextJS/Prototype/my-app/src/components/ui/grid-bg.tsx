"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

type Agent = {
  position: [number, number]
  logo: string
}

const NEON_COLORS = [
  "rgba(0, 255, 255, 0.3)", // cyan
  "rgba(255, 0, 255, 0.3)", // magenta
  "rgba(255, 255, 0, 0.3)", // yellow
]

export default function DiagonalGridBackground() {
  const [agents] = useState<Agent[]>([
    { position: [4, 2], logo: "/placeholder.svg?height=80&width=80" }, // Top left
    { position: [6, 2], logo: "/placeholder.svg?height=80&width=80" }, // Top right
    { position: [6, 6], logo: "/placeholder.svg?height=80&width=80" }, // Bottom center
  ])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [illuminatedCell, setIlluminatedCell] = useState<{ x: number; y: number; color: string } | null>(null)
  const [currentAnimationRow, setCurrentAnimationRow] = useState(-4) // Start from the first row

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const updateCanvasSize = () => {
      const scale = window.devicePixelRatio || 1
      const diagonal = Math.ceil(Math.sqrt(2) * Math.max(window.innerWidth, window.innerHeight))
      canvas.width = diagonal * scale
      canvas.height = diagonal * scale
      canvas.style.width = `${diagonal}px`
      canvas.style.height = `${diagonal}px`
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.scale(scale, scale)
      }
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gridSize = Math.max(window.innerWidth, window.innerHeight) / 12
    const diagonal = Math.ceil(Math.sqrt(2) * Math.max(window.innerWidth, window.innerHeight))
    const cols = Math.ceil(diagonal / gridSize) + 4
    const rows = Math.ceil(diagonal / gridSize) + 4

    const illuminateRandomCell = () => {
      const x = Math.floor(Math.random() * cols)
      const y = Math.floor(Math.random() * rows)
      const color = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)]
      setIlluminatedCell({ x, y, color })

      setTimeout(() => {
        setIlluminatedCell(null)
      }, 1000)
    }

    const illuminationInterval = setInterval(illuminateRandomCell, 500)

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.translate(diagonal / 2, diagonal / 2)
      ctx.rotate(Math.PI / 4)
      ctx.translate(-window.innerWidth / 2, -window.innerHeight / 2)

      const offset = -gridSize * 2

      // Only draw rows up to the current animation row
      for (let i = -4; i <= cols; i++) {
        for (let j = -4; j <= currentAnimationRow; j++) {
          const x = i * gridSize + offset
          const y = j * gridSize + offset

          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + gridSize, y)
          ctx.lineTo(x + gridSize, y + gridSize)
          ctx.lineTo(x, y + gridSize)
          ctx.closePath()
          ctx.strokeStyle = "rgba(100, 116, 139, 0.2)"
          ctx.stroke()

          if (illuminatedCell && illuminatedCell.x === i && illuminatedCell.y === j) {
            ctx.fillStyle = illuminatedCell.color
            ctx.fill()
          }
        }
      }

      ctx.restore()
    }

    // Add row animation timing
    const animateRows = () => {
      if (currentAnimationRow < rows) {
        setCurrentAnimationRow(prev => prev + 1)
      }
    }

    // Change the interval timing from 100 to 150
    const rowAnimationInterval = setInterval(animateRows, 250)

    let animationId: number
    const animate = () => {
      drawGrid()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      cancelAnimationFrame(animationId)
      clearInterval(illuminationInterval)
      clearInterval(rowAnimationInterval)
    }
  }, [illuminatedCell, currentAnimationRow])

  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Agent avatars */}
      {agents.map((agent, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${(agent.position[0] * 100) / 8}%`,
            top: `${(agent.position[1] * 100) / 8}%`,
          }}
        >
          <div className="relative w-20 h-20 rounded-full bg-slate-900/80 p-2 shadow-lg backdrop-blur-sm">
            <Image
              src={agent.logo}
              alt={`AI Agent ${index + 1}`}
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
