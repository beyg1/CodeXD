"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

export default function NeuralBackground() {
const [isDarkMode, setIsDarkMode] = useState(true);
  const containerRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const controls = useAnimation();
  const opacity = useMotionValue(0);
  const hoveredNodeIndex = useRef<number | null>(null);
  const animationTime = useRef(0);

  const initializeNodes = () => {
    const nodes: Node[] = [];
    const nodeCount = Math.floor(window.innerWidth * window.innerHeight / 40000);

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      });
    }

    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          if (distance < 200 && node.connections.length < 3) {
            node.connections.push(j);
          }
        }
      });
    });

    return nodes;
  };

  useEffect(() => {
    nodesRef.current = initializeNodes();

    let animationInterval: NodeJS.Timeout;
    const animate = () => {
      if (!containerRef.current) return;

      const ctx = containerRef.current.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update node positions
      nodesRef.current.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
        if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
ctx.fillStyle = isDarkMode
  ? hoveredNodeIndex.current === i
    ? `rgba(255, 255, 255, ${0.5 + 0.5 * Math.abs(Math.sin(animationTime.current / 1000))})`
    : 'rgba(255, 255, 255, 0.6)'
  : hoveredNodeIndex.current === i
  ? `rgba(0, 0, 0, ${0.5 + 0.5 * Math.abs(Math.sin(animationTime.current / 1000))})`
  : 'rgba(0, 0, 0, 0.6)';
        ctx.fill();

        // Draw connections
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodesRef.current[connectionIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
ctx.strokeStyle = isDarkMode
  ? hoveredNodeIndex.current === i
    ? `rgba(255, 255, 255, ${0.5 + 0.5 * Math.abs(Math.sin(animationTime.current / 1000))})`
    : 'rgba(255, 255, 255, 0.2)'
  : hoveredNodeIndex.current === i
  ? `rgba(0, 0, 0, ${0.5 + 0.5 * Math.abs(Math.sin(animationTime.current / 1000))})`
  : 'rgba(0, 0, 0, 0.2)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });
      });

      // Draw ray of light from the top if a node is hovered
      if (hoveredNodeIndex.current !== null) {
        const hoveredNode = nodesRef.current[hoveredNodeIndex.current];

        // Connect to the nearest node
        let nearestNodeIndex = null;
        let nearestDistance = Infinity;
        nodesRef.current.forEach((node, i) => {
          if (i !== hoveredNodeIndex.current) {
            const distance = Math.hypot(node.x - hoveredNode.x, node.y - hoveredNode.y);
            if (distance < nearestDistance) {
              nearestDistance = distance;
              nearestNodeIndex = i;
            }
          }
        });

        if (nearestNodeIndex !== null) {
          const nearestNode = nodesRef.current[nearestNodeIndex];
          ctx.beginPath();
          ctx.moveTo(hoveredNode.x, hoveredNode.y);
          ctx.lineTo(nearestNode.x, nearestNode.y);
          ctx.strokeStyle = `rgba(0, 0, 0, ${0.5 + 0.5 * Math.abs(Math.sin(animationTime.current / 1000))})`;
          ctx.lineWidth = 2 + 2 * Math.abs(Math.sin(animationTime.current / 1000));
          ctx.stroke();
        }
      }

      animationTime.current += 16; // Update animation time based on frame rate
    };
    // eslint-disable-next-line prefer-const
    animationInterval = setInterval(animate, 16);

    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      let closestNodeIndex: number | null = null;
      let closestDistance = Infinity;

      nodesRef.current.forEach((node, i) => {
        const distance = Math.hypot(node.x - mouseX, node.y - mouseY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestNodeIndex = i;
        }
      });

      if (closestDistance < 20) {
        hoveredNodeIndex.current = closestNodeIndex;
      } else {
        hoveredNodeIndex.current = null;
      }
    };

    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.width = window.innerWidth;
        containerRef.current.height = window.innerHeight;
        nodesRef.current = initializeNodes();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    controls.start({
      opacity: [0, 1],
      transition: { duration: 1.5 }
    });

    return () => {
      clearInterval(animationInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls, isDarkMode]);

  return (
    <>
      <button
        className="absolute top-4 left-4 z-10 p-2 bg-white text-black rounded"
onClick={() => setIsDarkMode(!isDarkMode)}
      >
        Toggle Mode
      </button>
      <motion.div
        className={`fixed inset-0 z-[-1] ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900' : 'bg-white'}`}
        animate={controls}
        style={{ opacity }}
      >
        <canvas
          ref={containerRef}
          className="w-full h-full opacity-50 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
      </motion.div>
    </>
  );
}
