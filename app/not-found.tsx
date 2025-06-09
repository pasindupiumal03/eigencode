import Link from "next/link"
import { MatrixBackground } from "@/components/matrix-background"
import { GlitchText } from "@/components/glitch-text"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <MatrixBackground />
      <div className="scanline" />

      <div className="text-center z-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-8">
          <GlitchText
            text="404"
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red via-cyber-magenta to-cyber-red cyber-text-glow"
            glitchInterval={2000}
          />
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-cyber-text mb-4">
          <GlitchText text="PAGE NOT FOUND" glitchInterval={4000} />
        </h2>

        <p className="text-cyber-muted mb-8 max-w-md">
          The page you're looking for has been moved, deleted, or doesn't exist in this reality.
        </p>

        <Link href="/" className="cyber-button-primary inline-block px-6 py-3">
          <span className="relative z-10">RETURN HOME</span>
        </Link>
      </div>
    </div>
  )
}
