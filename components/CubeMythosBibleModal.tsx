"use client"

import { useState } from "react"
import CubeMythosBible from "./CubeMythosBible"

export default function CubeMythosBibleModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="cyber-box p-6 hover:border-cyber-blue/50 transition-all duration-300 group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-cyber-blue"
            >
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
            <div className="absolute inset-0 blur-lg bg-cyber-blue/20 rounded-full opacity-70"></div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold mb-2 font-mono cube-glow text-xl">The Cube Mythos Bible</h3>
            <p className="text-cyber-muted">The ontological foundation, core laws, and metaphysics of the Cube.</p>
            <div className="mt-4 text-xs text-cyber-blue/70 italic">Click to explore</div>
          </div>
        </div>
      </div>

      <CubeMythosBible isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
