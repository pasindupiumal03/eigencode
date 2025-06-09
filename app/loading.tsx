import { MatrixBackground } from "@/components/matrix-background"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <MatrixBackground />
      <div className="scanline" />

      <div className="text-center z-10">
        <div className="cyber-box p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-4 h-4 bg-cyber-green rounded-full animate-blink" />
            <span className="text-cyber-green font-mono">LOADING...</span>
          </div>

          <div className="w-64 h-2 bg-cyber-terminal border border-cyber-green/30 rounded overflow-hidden">
            <div className="h-full bg-cyber-green animate-pulse" style={{ width: "60%" }} />
          </div>

          <p className="text-cyber-muted text-sm mt-4">Initializing quantum matrices...</p>
        </div>
      </div>
    </div>
  )
}
