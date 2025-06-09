import type { ReactNode } from "react"

interface TerminalWindowProps {
  title?: string
  children: ReactNode
  className?: string
}

export function TerminalWindow({ title = "terminal", children, className = "" }: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-circle bg-cyber-red" />
        <div className="terminal-circle bg-cyber-yellow" />
        <div className="terminal-circle bg-cyber-green" />
        <span className="text-xs text-cyber-muted ml-2">~ {title}</span>
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  )
}
