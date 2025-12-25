"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const codeSnippets = [
    { text: "const structure = new Structure();", color: "text-blue-500" },
    { text: "<ZenMode />", color: "text-purple-500" },
    { text: "interface Universe { chaos: boolean }", color: "text-yellow-500 dark:text-yellow-300" },
    { text: "return null;", color: "text-red-500 dark:text-red-400" },
    { text: "01001001", color: "text-green-500 font-mono" },
    { text: "await future;", color: "text-indigo-500" },
    { text: "git commit -m 'epiphany'", color: "text-gray-500 dark:text-gray-400" },
    { text: "opacity: 1;", color: "text-pink-500" },
    { text: "function createArt() { ... }", color: "text-blue-600 dark:text-blue-400" },
    { text: "import { Life } from '@universe';", color: "text-emerald-600 dark:text-emerald-400" },
]

function getRandomPosition(max: number) {
    return Math.floor(Math.random() * max)
}

function getRandomDuration() {
    return 20 + Math.random() * 20
}

export function CodeBackground() {
    const { theme } = useTheme()
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [mounted, setMounted] = useState(false)
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        setMounted(true)
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (!mounted || !canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: any[] = []
        let mouseX = -1000
        let mouseY = -1000

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseX = e.clientX - rect.left
            mouseY = e.clientY - rect.top
        }
        window.addEventListener("mousemove", handleMouseMove)

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        const initParticles = () => {
            particles = []
            const count = Math.floor(window.innerWidth * window.innerHeight / 20000) // Density based on screen size
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1
                })
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Set styles based on theme (resolved via simple check or defaults)
            // Note: 'theme' variable from hook might be delayed, but we can check class or just use defaults
            const isDark = document.documentElement.classList.contains("dark")
            const color = isDark ? "rgba(255, 255, 255, " : "rgba(0, 0, 0, "

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                // Bounce
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // Mouse interaction
                const dx = mouseX - p.x
                const dy = mouseY - p.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < 150) {
                    p.x -= dx * 0.02
                    p.y -= dy * 0.02
                }

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = color + "0.3)" // Base opacity
                ctx.fill()

                // Connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const ddx = p.x - p2.x
                    const ddy = p.y - p2.y
                    const distance = Math.sqrt(ddx * ddx + ddy * ddy)

                    if (distance < 100) {
                        ctx.beginPath()
                        ctx.strokeStyle = color + (0.15 - distance / 1000) + ")"
                        ctx.lineWidth = 0.5
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        resize()
        animate()
        window.addEventListener("resize", resize)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resize)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [mounted, theme])

    if (!mounted) return null

    return (
        <div className="absolute inset-0 overflow-hidden -z-10 select-none pointer-events-none">
            {/* Generative Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 block w-full h-full opacity-60 pointer-events-auto"
            />

            {/* Floating Code Snippets with Higher Visibility */}
            {codeSnippets.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        x: getRandomPosition(windowSize.width),
                        y: getRandomPosition(windowSize.height),
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: [0, 0.8, 1, 0.8, 0], // Higher max opacity
                        y: ["-=50", "+=50"],
                        x: ["-=30", "+=30"],
                        scale: [0.9, 1, 1.05, 1, 0.9],
                    }}
                    transition={{
                        duration: getRandomDuration(),
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear",
                        times: [0, 0.2, 0.5, 0.8, 1],
                    }}
                    className={cn(
                        "absolute font-mono text-sm md:text-base whitespace-nowrap font-medium",
                        item.color // Apply specific colors
                    )}
                >
                    {item.text}
                </motion.div>
            ))}

            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
    )
}
