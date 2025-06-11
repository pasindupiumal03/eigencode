"use client"
import { X, Copy } from "lucide-react"
import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"

interface Command {
  name: string
  status: string
  description: string
  tags: string[]
  category: string
  usage?: string
  examples?: string[]
  detailedDescription?: string
}

interface CommandDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  command: Command | null
}

export default function CommandDetailsModal({ isOpen, onClose, command }: CommandDetailsModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "text-cyber-green"
      case "planned":
        return "text-cyber-blue"
      case "in progress":
        return "text-cyber-yellow"
      default:
        return "text-cyber-text"
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-cyber-green/20 border-cyber-green/30"
      case "planned":
        return "bg-cyber-blue/20 border-cyber-blue/30"
      case "in progress":
        return "bg-cyber-yellow/20 border-cyber-yellow/30"
      default:
        return "bg-cyber-text/20 border-cyber-text/30"
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  if (!isOpen || !command) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/90 z-[99998]" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-4xl max-h-[90vh] bg-cyber-black border border-cyber-blue/50 rounded-lg overflow-hidden shadow-2xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "#050505",
            boxShadow: "0 0 50px rgba(0, 255, 65, 0.3), 0 0 100px rgba(0, 255, 65, 0.1)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-6 border-b border-cyber-blue/30"
            style={{ backgroundColor: "#0A0A0A" }}
          >
            <h2 className="text-xl font-bold text-cyber-blue font-mono">{">"} Command Details</h2>
            <button
              onClick={onClose}
              className="p-2 text-cyber-text hover:text-cyber-blue transition-colors rounded-md hover:bg-cyber-blue/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div
            className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] text-cyber-text"
            style={{ backgroundColor: "#050505" }}
          >
            <div className="space-y-6">
              {/* Command Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-cyber-blue text-2xl">$</span>
                  <h1 className="text-2xl font-bold text-cyber-blue font-mono">{command.name}</h1>
                </div>
                <Badge className={`text-sm px-3 py-1 ${getStatusBg(command.status)} ${getStatusColor(command.status)}`}>
                  {command.status}
                </Badge>
              </div>

              {/* Description */}
              <div>
                <p className="text-cyber-text text-base leading-relaxed">
                  {command.detailedDescription || command.description}
                </p>
              </div>

              {/* Tags */}
              {command.tags.length > 0 && (
                <div>
                  <div className="flex flex-wrap gap-2">
                    {command.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs px-2 py-1 bg-cyber-terminal/50 border-cyber-blue/30 text-cyber-blue"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Usage */}
              {command.usage && (
                <div>
                  <h3 className="text-lg font-bold text-cyber-green mb-3">Usage</h3>
                  <div className="relative">
                    <div className="bg-cyber-terminal/50 border border-cyber-blue/30 rounded-md p-4 font-mono text-sm">
                      <code className="text-cyber-text">{command.usage}</code>
                    </div>
                    <button
                      onClick={() => copyToClipboard(command.usage!)}
                      className="absolute top-2 right-2 p-2 text-cyber-muted hover:text-cyber-blue transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Examples */}
              {command.examples && command.examples.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-cyber-green mb-3">Examples</h3>
                  <div className="space-y-4">
                    {command.examples.map((example, index) => (
                      <div key={index} className="relative">
                        <div className="bg-cyber-terminal/50 border border-cyber-blue/30 rounded-md p-4 font-mono text-sm">
                          <pre className="text-cyber-text whitespace-pre-wrap">{example}</pre>
                        </div>
                        <button
                          onClick={() => copyToClipboard(example)}
                          className="absolute top-2 right-2 p-2 text-cyber-muted hover:text-cyber-blue transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end p-6 border-t border-cyber-blue/30" style={{ backgroundColor: "#0A0A0A" }}>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-cyber-terminal border border-cyber-blue/30 text-cyber-text rounded hover:border-cyber-blue transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
