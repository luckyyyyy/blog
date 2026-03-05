import { useEffect, useRef } from 'react'
import './Background.css'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number; a: number
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let animId: number
    let W = 0, H = 0
    const COUNT = 75
    const DIST = 150
    let particles: Particle[] = []

    function resize() {
      const dpr = window.devicePixelRatio || 1
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.scale(dpr, dpr)
    }

    function spawn(): Particle {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        r: Math.random() * 1.6 + 0.5,
        a: Math.random() * 0.35 + 0.1,
      }
    }

    function init() {
      particles = Array.from({ length: COUNT }, spawn)
    }

    function isDark() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const dark = isDark()
      const rgb = dark ? '90, 170, 255' : '0, 100, 210'

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < DIST * DIST) {
            const alpha = (1 - Math.sqrt(d2) / DIST) * (dark ? 0.2 : 0.1)
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${rgb}, ${alpha})`
            ctx.lineWidth = 0.7
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${p.a})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = W + 20
        else if (p.x > W + 20) p.x = -20
        if (p.y < -20) p.y = H + 20
        else if (p.y > H + 20) p.y = -20
      }

      animId = requestAnimationFrame(draw)
    }

    function start() {
      resize()
      init()
      draw()
    }

    start()
    window.addEventListener('resize', start)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', start)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" />
}
