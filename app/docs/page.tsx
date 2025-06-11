import Link from "next/link"
import { TerminalWindow } from "@/components/terminal-window"
import { Button } from "@/components/ui/button"
import { FileText, Zap, Download, Code2 } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-cyber-black">
      <div className="scanline" />

      {/* Header */}
      <header className="w-full border-b border-cyber-blue/20 bg-cyber-dark/80 backdrop-blur-sm z-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-cyber-blue">{">"}</span>
            <span className="text-cyber-blue font-mono font-bold">Eigencode Docs</span>
          </div>
          <Link href="/" className="text-cyber-text hover:text-cyber-blue transition-colors">
            Home
          </Link>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-80 min-h-screen border-r border-cyber-blue/20 bg-cyber-dark/50 backdrop-blur-sm p-6 z-10 relative">
          {/* Terminal Window in Sidebar */}
          <TerminalWindow title="eigencode" className="mb-8">
            <div className="text-xs">
              <div className="text-cyber-green mb-2">$ eigencode</div>
              <div className="text-cyber-text mb-1">Eigencode CLI v0.9.0</div>
              <div className="text-cyber-text mb-1">Intelligent code generation and</div>
              <div className="text-cyber-text mb-3">analysis</div>
              <div className="text-cyber-green mb-2">$ eigencode open .</div>
              <div className="text-cyber-text mb-1">Analyzing project structure...</div>
              <div className="text-cyber-text mb-1">Found 127 files across 14</div>
              <div className="text-cyber-text mb-1">directories</div>
              <div className="text-cyber-green mb-3">Analysis complete ✓</div>
              <div className="text-cyber-blue">$ eigencode help</div>
            </div>
          </TerminalWindow>

          {/* Documentation Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-cyber-blue" />
              <h3 className="text-cyber-blue font-bold">Documentation</h3>
            </div>
            <nav className="space-y-2">
              <Link
                href="#getting-started"
                className="block text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
              >
                Getting Started
              </Link>
              <Link
                href="#installation"
                className="block text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
              >
                Installation Guide
              </Link>
              <Link
                href="#quick-start"
                className="block text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
              >
                Quick Start
              </Link>
              <Link
                href="#usage"
                className="block text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
              >
                Open
              </Link>
            </nav>
          </div>

          {/* Quick Links Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-cyber-magenta" />
              <h3 className="text-cyber-magenta font-bold">Quick Links</h3>
            </div>
            <nav className="space-y-2">
              <Link
                href="/cmds"
                className="flex items-center gap-2 text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
              >
                <span className="text-cyber-magenta">⚡</span>
                Command Registry
              </Link>
              <Link
                href="/aura"
                className="flex items-center gap-2 text-cyber-text hover:text-cyber-blue transition-colors text-sm py-1"
              >
                <span className="text-cyber-blue">🔮</span>
                Aura Components
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 z-10 relative">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-6 text-cyber-blue">
              <span className="text-cyber-blue">{">"}</span> Eigencode
            </h1>

            <p className="text-cyber-text text-lg mb-8 max-w-2xl mx-auto">
              An intelligent CLI tool for code generation, analysis, and optimization powered by advanced machine
              learning models.
            </p>

            <div className="flex gap-4 justify-center mb-8">
              <Button className="cyber-button-primary flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span className="relative z-10">Get Started</span>
              </Button>
              <Button variant="outline" className="cyber-button-secondary flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span className="relative z-10">Commands</span>
              </Button>
            </div>
          </section>

          {/* Content Cards */}
          <div className="grid gap-8">
            {/* Getting Started Card */}
            <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4 flex items-center gap-2">
                <span className="text-cyber-blue">{">"}</span>
                Getting Started
              </h2>

              <p className="text-cyber-text mb-4">
                Eigencode is an intelligent code generation CLI that helps developers analyze and optimize their
                codebases. With powerful AI-driven features, Eigencode can assist with code analysis, refactoring, and
                optimization.
              </p>

              <p className="text-cyber-text mb-6">
                This documentation will guide you through installation, configuration, and usage of the Eigencode CLI.
              </p>

              <Link href="#installation" className="text-cyber-blue hover:text-cyber-green transition-colors">
                Learn more →
              </Link>
            </div>

            {/* Installation Card */}
            <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-cyber-blue" />
                Installation
              </h2>

              <p className="text-cyber-text mb-6">
                Paste following command in your terminal to install Eigencode on UNIX-like systems:
              </p>

              <div className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 mb-4">
                <div className="text-sm font-mono">
                  <span className="text-cyber-green">
                    curl -fsSL https://www.eigencode.dev/stable/latest/installer.sh | sudo bash
                  </span>
                </div>
                <div className="w-full h-2 bg-cyber-terminal">
                </div>
              </div>

              <p className="text-cyber-text mb-4">And as for Windows users:</p>

              <div className="bg-cyber-terminal border border-cyber-blue/30 rounded p-4 mb-6">
                <div className="text-sm font-mono">
                  <span className="text-cyber-blue">
                    powershell -ExecutionPolicy Bypass -Command "iex (New-Object Net.WebClient).DownloadString('https://www.eigencode.dev/stable/latest/installer.ps1')"
                  </span>
                </div>
                <div className="w-full h-2 bg-cyber-terminal">
                </div>
              </div>

              <Link href="#usage" className="text-cyber-blue hover:text-cyber-green transition-colors">
                View installation guide →
              </Link>
            </div>

            {/* Usage Card */}
            <div className="bg-cyber-dark/50 border border-cyber-blue/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-cyber-blue mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyber-blue" />
                Usage
              </h2>

              <p className="text-cyber-text mb-6">
                To get started with Eigencode, initialize it in your project directory:
              </p>

              <div className="bg-cyber-terminal border border-cyber-green/30 rounded p-4 mb-6">
                <div className="text-sm font-mono">
                  <span className="text-cyber-green">eigencode open .</span>
                </div>
              </div>

              <p className="text-cyber-text mb-6">
                This will analyze your project and set up the necessary context for Eigencode to work effectively. You
                can then run various commands to analyze, optimize, and transform your code.
              </p>

              <Link href="/cmds" className="text-cyber-blue hover:text-cyber-green transition-colors">
                View all commands →
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full text-center text-sm text-cyber-muted py-8 border-t border-cyber-blue/10 z-10 relative">
        <p className="mb-2">Eigencode Documentation</p>
        <p>© {new Date().getFullYear()} Polysys Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
