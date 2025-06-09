"use client"

import { useEffect } from "react"
import { MatrixBackground } from "@/components/matrix-background"
import { GlitchText } from "@/components/glitch-text"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <MatrixBackground />
      <div className="scanline" />

      <div className="text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-8">
          <GlitchText
            text="SYSTEM ERROR"
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red via-cyber-yellow to-cyber-red cyber-text-glow"
            glitchInterval={1500}
          />
        </h1>

        <div className="cyber-box p-6 max-w-md mb-8">
          <p className="text-cyber-red mb-4 font-mono text-sm">
            CRITICAL_FAILURE: {error.message || "Unknown system malfunction"}
          </p>

          <p className="text-cyber-muted text-sm">The quantum matrix has encountered an unexpected anomaly.</p>
        </div>

        <button onClick={reset} className="cyber-button-primary px-6 py-3">
          <span className="relative z-10">RESTART SYSTEM</span>
        </button>
      </div>
    </div>
  )
}
