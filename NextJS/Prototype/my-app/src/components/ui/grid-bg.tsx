"use client"

import { useRef, useEffect } from "react"

export default function DiagonalGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)  // Create a reference to the canvas element

  useEffect(() => {      // Use the useEffect hook to run the grid drawing logic
    const canvas = canvasRef.current
    if (!canvas) return

    // CONFIGURATION VALUES
    // Adjust these values to customize the grid appearance
    const MOBILE_BREAKPOINT = 768 // Breakpoint for mobile devices in pixels
    const BASE_GRID_DIVISIONS = 12 // Number of grid divisions for desktop
    const MOBILE_GRID_DIVISIONS = 8 // Number of grid divisions for mobile
    const GRID_OPACITY = 0.2 // Grid line opacity (0-1)
    const GRID_COLOR = "100, 116, 139" // RGB values for grid color

    const updateCanvasSize = () => {
      // Get the device's pixel ratio for sharp rendering on high-DPI displays
      const scale = window.devicePixelRatio || 1
      const diagonal = Math.ceil(Math.sqrt(2) * Math.max(window.innerWidth, window.innerHeight))
      
      // Set physical canvas size accounting for device pixel ratio
      canvas.width = diagonal * scale
      canvas.height = diagonal * scale
      // Set display size
      canvas.style.width = `${diagonal}px`
      canvas.style.height = `${diagonal}px`
      
      const ctx = canvas.getContext("2d")  // Get the canvas context
      if (ctx) ctx.scale(scale, scale)   // Scale the context to match the device's pixel ratio
    }

    updateCanvasSize()  // Call the function to set the initial canvas size
    window.addEventListener("resize", updateCanvasSize) // Add a resize event listener to update the canvas size

    const ctx = canvas.getContext("2d") // Get the canvas context
    if (!ctx) return // Return if the context is not available

    // Calculate responsive grid size based on screen width
    const getResponsiveGridSize = () => {
      const divisions = window.innerWidth < MOBILE_BREAKPOINT 
        ? MOBILE_GRID_DIVISIONS 
        : BASE_GRID_DIVISIONS
      return Math.max(window.innerWidth, window.innerHeight) / divisions 
    }

    const drawGrid = () => {   // Function to draw the grid
      const gridSize = getResponsiveGridSize()  // Get the grid size based on the screen width
      const diagonal = Math.ceil(Math.sqrt(2) * Math.max(window.innerWidth, window.innerHeight)) // Calculate the diagonal length of the screen
      const cols = Math.ceil(diagonal / gridSize) + 4 // Calculate the number of columns
      const rows = Math.ceil(diagonal / gridSize) + 4 // Calculate the number of rows

      ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear the canvas

      ctx.save() // Save the current context state
      // Center and rotate grid
      ctx.translate(diagonal / 2, diagonal / 2)  // Translate the grid to the center of the screen
      ctx.rotate(Math.PI / 4) // Rotate the grid by 45 degrees
      ctx.translate(-window.innerWidth / 2, -window.innerHeight / 2)

      const offset = -gridSize * 2  // Offset for drawing grid lines

      // Draw grid cells
      for (let i = -4; i <= cols; i++) {  // Loop through columns
        for (let j = -4; j <= rows; j++) { // Loop through rows
          const x = i * gridSize + offset  // Calculate the x position
          const y = j * gridSize + offset  // Calculate the y position

          ctx.beginPath()      // Begin a new path
          ctx.moveTo(x, y)        // Move to the starting point
          ctx.lineTo(x + gridSize, y)  // Draw a line to the next point
          ctx.lineTo(x + gridSize, y + gridSize)  // Draw a line to the next point
          ctx.lineTo(x, y + gridSize)  // Draw a line to the next point
          ctx.closePath() // Close the path
          ctx.strokeStyle = `rgba(${GRID_COLOR}, ${GRID_OPACITY})` // Set the stroke style
          ctx.stroke() // Stroke the path
        }
      }

      ctx.restore()
    }

    // Initial draw
    drawGrid() // Call the drawGrid function to draw the grid

    // Redraw grid on resize for responsive behavior
    const handleResize = () => {    // Function to handle resize events
      updateCanvasSize()
      drawGrid()
    }
    window.addEventListener("resize", handleResize)   // Add a resize event listener to redraw the grid

    return () => {
      window.removeEventListener("resize", updateCanvasSize)   // Remove the resize event listener
      window.removeEventListener("resize", handleResize)  // Remove the resize event listener
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
           {/* Add the canvas element to the DOM */}
      <canvas ref={canvasRef} className="absolute inset-0" /> 
    </div>
  )
}
