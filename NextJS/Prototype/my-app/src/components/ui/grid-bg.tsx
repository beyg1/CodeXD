"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

type Agent = {
  position: [number, number]
  logo: string
}

// Colors for the random cell illumination effect
// Modify these colors or add more for different illumination effects
const NEON_COLORS = [
  "rgba(0, 255, 255, 0.3)", // cyan
  "rgba(255, 0, 255, 0.3)", // magenta
  "rgba(255, 255, 0, 0.3)", // yellow
]

export default function DiagonalGridBackground() {
  // Agent positions in grid coordinates
  // Modify these positions to change the triangle formation
  // Format: [x, y] where x and y are grid cell coordinates
  const [agents] = useState<Agent[]>([
    { position: [4, 2], logo: "/placeholder.svg?height=80&width=80" }, // Top left
    { position: [6, 2], logo: "/placeholder.svg?height=80&width=80" }, // Top right
    { position: [6, 6], logo: "/placeholder.svg?height=80&width=80" }, // Bottom center
  ])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  // State for tracking which grid cell is currently illuminated
  const [illuminatedCell, setIlluminatedCell] = useState<{ x: number; y: number; color: string } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Canvas size and resolution handling
    const updateCanvasSize = () => {
      // Handle high DPI displays
      const scale = window.devicePixelRatio || 1
      // Calculate canvas size to cover rotated viewport
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

    // Grid configuration
    // Modify gridSize to change the size of grid cells
    const gridSize = Math.max(window.innerWidth, window.innerHeight) / 12 // Decrease divisor for larger cells
    const diagonal = Math.ceil(Math.sqrt(2) * Math.max(window.innerWidth, window.innerHeight))
    // Add more cells to ensure grid covers rotated viewport
    const cols = Math.ceil(diagonal / gridSize) + 4
    const rows = Math.ceil(diagonal / gridSize) + 4

    // Random cell illumination effect
    // Modify timing values to change illumination frequency and duration
    const illuminateRandomCell = () => {
      const x = Math.floor(Math.random() * cols)
      const y = Math.floor(Math.random() * rows)
      const color = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)]
      setIlluminatedCell({ x, y, color })

      // How long each cell stays illuminated (in milliseconds)
      setTimeout(() => {
        setIlluminatedCell(null)
      }, 1000) // Increase for longer illumination
    }

    // How often a new cell is illuminated (in milliseconds)
    const illuminationInterval = setInterval(illuminateRandomCell, 500) // Decrease for more frequent illumination

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Transform setup for diagonal grid
      ctx.save()
      ctx.translate(diagonal / 2, diagonal / 2)
      ctx.rotate(Math.PI / 4) // 45-degree rotation
      ctx.translate(-window.innerWidth / 2, -window.innerHeight / 2)

      // Grid offset to ensure full coverage after rotation
      const offset = -gridSize * 2 // Modify multiplier to adjust grid position

      // Draw grid cells
      for (let i = -4; i <= cols; i++) {
        for (let j = -4; j <= rows; j++) {
          const x = i * gridSize + offset
          const y = j * gridSize + offset

          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + gridSize, y)
          ctx.lineTo(x + gridSize, y + gridSize)
          ctx.lineTo(x, y + gridSize)
          ctx.closePath()
          // Modify alpha value to change grid line visibility
          ctx.strokeStyle = "rgba(100, 116, 139, 0.2)" // Increase alpha for more visible grid
          ctx.stroke()

          // Illuminate random cells
          if (illuminatedCell && illuminatedCell.x === i && illuminatedCell.y === j) {
            ctx.fillStyle = illuminatedCell.color
            ctx.fill()
          }
        }
      }

      // Connection line configuration
      // Modify alpha value for connection line visibility
      ctx.strokeStyle = "rgba(56, 189, 248, 0.4)" // Increase alpha for more visible lines
      ctx.lineWidth = 2 // Increase for thicker lines

      // Define the triangle connections between agents
      const connections = [
        [0, 1], // Top left to top right
        [1, 2], // Top right to bottom
        [2, 0], // Bottom to top left
      ]

      // Calculate actual pixel positions for agents in canvas space with rotation compensation
      const agentPositions = agents.map((agent) => {
        // Apply rotation transformation to grid coordinates
        const x = (agent.position[0] * gridSize * Math.cos(Math.PI/4)) + offset
        const y = (agent.position[1] * gridSize * Math.sin(Math.PI/4)) + offset
        return [x, y]
      })

      // Draw connections and animate particles
      connections.forEach(([fromIndex, toIndex]) => {
        const [startX, startY] = agentPositions[fromIndex]
        const [endX, endY] = agentPositions[toIndex]

        // Draw connection line
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Particle animation configuration
        const time = performance.now() * 0.001
        const particleCount = 3 // Increase for more particles

        // Draw animated particles
        for (let j = 0; j < particleCount; j++) {
          // Calculate particle position along the line
          const t = (time + j / particleCount) % 1
          const x = startX + (endX - startX) * t
          const y = startY + (endY - startY) * t

          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2) // Increase radius for larger particles
          // Modify alpha value for particle visibility
          ctx.fillStyle = "rgba(56, 189, 248, 0.8)" // Increase alpha for more visible particles
          ctx.fill()
        }
      })

      ctx.restore()
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      drawGrid()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      cancelAnimationFrame(animationId)
      clearInterval(illuminationInterval)
    }
  }, [agents, illuminatedCell])

  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Canvas for grid and animations */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Agent avatars */}
      {agents.map((agent, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            // Position agents using percentage-based coordinates
            // Modify the divisors to adjust the spread of agents
            left: `${(agent.position[0] * 100) / 8}%`,
            top: `${(agent.position[1] * 100) / 8}%`,
          }}
        >
          {/* Agent avatar container */}
          <div className="relative w-20 h-20 rounded-full bg-slate-900/80 p-2 shadow-lg backdrop-blur-sm">
            <Image
              src={agent.logo || "/placeholder.svg"}
              alt={`AI Agent ${index + 1}`}
              width={80} // Increase for larger avatars
              height={80} // Increase for larger avatars
              className="rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
