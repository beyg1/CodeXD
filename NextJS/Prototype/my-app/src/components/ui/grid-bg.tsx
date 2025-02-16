"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

type Agent = {
  position: [number, number]
  logo: string
}

type GridPoint = {
  x: number
  y: number
}

const NEON_COLORS = [
  "rgba(0, 255, 255, 0.3)", // cyan
  "rgba(255, 0, 255, 0.3)", // magenta
  "rgba(255, 255, 0, 0.3)", // yellow
]

export default function DiagonalGridBackground() {
  const [agents] = useState<Agent[]>([
    { position: [2, 1], logo: "/placeholder.svg?height=80&width=80" },
    { position: [4, 3], logo: "/placeholder.svg?height=80&width=80" },
    { position: [6, 1], logo: "/placeholder.svg?height=80&width=80" },
  ])

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [illuminatedCell, setIlluminatedCell] = useState<{ x: number; y: number; color: string } | null>(null)

  // Find path along grid borders
  const findGridPath = (start: GridPoint, end: GridPoint): GridPoint[] => {
    const path: GridPoint[] = []
    const [x1, y1] = [start.x, start.y]
    const [x2, y2] = [end.x, end.y]

    // First move horizontally
    if (x1 !== x2) {
      for (let x = x1; x !== x2; x += Math.sign(x2 - x1)) {
        path.push({ x, y: y1 })
      }
    }

    // Then move vertically
    if (y1 !== y2) {
      for (let y = y1; y !== y2; y += Math.sign(y2 - y1)) {
        path.push({ x: x2, y })
      }
    }

    // Add end point
    path.push({ x: x2, y: y2 })

    return path
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas size to match window size with extra padding for rotation
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

    // Updated illumination timing
    const illuminateRandomCell = () => {
      const x = Math.floor(Math.random() * cols)
      const y = Math.floor(Math.random() * rows)
      const color = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)]
      setIlluminatedCell({ x, y, color })

      setTimeout(() => {
        setIlluminatedCell(null)
      }, 1000) // Illuminate for 1000ms
    }

    const illuminationInterval = setInterval(illuminateRandomCell, 500) // New cell every 500ms

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.translate(diagonal / 2, diagonal / 2)
      ctx.rotate(Math.PI / 4)
      ctx.translate(-window.innerWidth / 2, -window.innerHeight / 2)

      // Draw expanded grid
      const offset = -gridSize * 2
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
          ctx.strokeStyle = "rgba(100, 116, 139, 0.2)"
          ctx.stroke()

          if (illuminatedCell && illuminatedCell.x === i && illuminatedCell.y === j) {
            ctx.fillStyle = illuminatedCell.color
            ctx.fill()
          }
        }
      }

      // Draw grid-aligned connections between agents
      ctx.strokeStyle = "rgba(56, 189, 248, 0.4)"
      ctx.lineWidth = 2

      agents.forEach((agent, i) => {
        const nextAgent = agents[(i + 1) % agents.length]
        const start = {
          x: agent.position[0] * gridSize,
          y: agent.position[1] * gridSize,
        }
        const end = {
          x: nextAgent.position[0] * gridSize,
          y: nextAgent.position[1] * gridSize,
        }

        // Get path along grid borders
        const path = findGridPath(
          { x: Math.floor(start.x / gridSize), y: Math.floor(start.y / gridSize) },
          { x: Math.floor(end.x / gridSize), y: Math.floor(end.y / gridSize) },
        )

        // Draw path
        if (path.length > 0) {
          ctx.beginPath()
          ctx.moveTo(path[0].x * gridSize, path[0].y * gridSize)
          for (let j = 1; j < path.length; j++) {
            ctx.lineTo(path[j].x * gridSize, path[j].y * gridSize)
          }
          ctx.stroke()

          // Animated particles along the path
          const time = performance.now() * 0.001
          const particleCount = 3

          for (let j = 0; j < particleCount; j++) {
            const t = (time + j / particleCount) % 1
            const segmentIndex = Math.floor(t * (path.length - 1))
            const segmentT = (t * (path.length - 1)) % 1

            const current = path[segmentIndex]
            const next = path[Math.min(segmentIndex + 1, path.length - 1)]

            const x = current.x * gridSize + (next.x - current.x) * gridSize * segmentT
            const y = current.y * gridSize + (next.y - current.y) * gridSize * segmentT

            ctx.beginPath()
            ctx.arc(x, y, 3, 0, Math.PI * 2)
            ctx.fillStyle = "rgba(56, 189, 248, 0.8)"
            ctx.fill()
          }
        }
      })

      ctx.restore()
    }

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
    }
  }, [agents, illuminatedCell])

  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      {agents.map((agent, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${(agent.position[0] * 100) / 8}%`,
            top: `${(agent.position[1] * 100) / 4}%`,
          }}
        >
          <div className="relative w-20 h-20 rounded-full bg-slate-900/80 p-2 shadow-lg backdrop-blur-sm">
            <Image
              src={agent.logo || "/placeholder.svg"}
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

