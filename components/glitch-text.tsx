"use client"

import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
  glitchInterval?: number
}

export function GlitchText({ text, className = "", glitchInterval = 3000 }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchTimer = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, glitchInterval)

    return () => clearInterval(glitchTimer)
  }, [glitchInterval])

  return (
    <span className={`relative inline-block ${isGlitching ? "animate-glitch" : ""} ${className}`}>
      {text}
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-cyber-blue -translate-x-1 translate-y-1 opacity-70">{text}</span>
          <span className="absolute top-0 left-0 text-cyber-magenta translate-x-1 -translate-y-1 opacity-70">
            {text}
          </span>
        </>
      )}
    </span>
  )
}
