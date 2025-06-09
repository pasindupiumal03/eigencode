import Link from "next/link"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalWindow } from "@/components/terminal-window"
import { GlitchText } from "@/components/glitch-text"
import { Button } from "@/components/ui/button"
import { FileText, Zap } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-cyber-black">
      <MatrixBackground />
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
              <div className="text-cyber-green mb-2">$ eigencode --help</div>
              <div className="text-cyber-text mb-1">Eigencode CLI v0.5.0</div>
              <div className="text-cyber-text mb-1">Intelligent code generation and</div>
              <div className="text-cyber-text mb-3">analysis</div>
              <div className="text-cyber-green mb-2">$ eigencode open</div>
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
                href="#commands"
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
          <section className="mb-12">
          <h2 className="text-4xl font-bold mb-12 text-cyber-green cyber-text-glow">
          <GlitchText text="> Eigencode" glitchInterval={7000} />
        </h2>

            <p className="text-cyber-text text-lg mb-8 max-w-2xl">
              An intelligent CLI tool for code generation, analysis, and optimization powered by advanced machine
              learning models.
            </p>

            <div className="flex gap-4 mb-8">
              <Button className="cyber-button-primary">
                <span className="relative z-10">Get Started</span>
              </Button>
              <Button variant="outline" className="cyber-button-secondary">
                <span className="relative z-10">Commands</span>
              </Button>
            </div>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started" className="mb-12">
            <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
              <span className="text-cyber-blue">{">"}</span>
              <GlitchText text="Getting Started" className="text-cyber-blue" glitchInterval={7000} />
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
          </section>

          {/* Installation Section */}
          <section id="installation" className="mb-12">
            <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
              <span className="text-cyber-blue">{">"}</span>
              <GlitchText text="Installation" className="text-cyber-blue" glitchInterval={8000} />
            </h2>

            <p className="text-cyber-text mb-6">
              Paste following command in your terminal to install Eigencode on UNIX-like systems:
            </p>

            <TerminalWindow title="bash" className="mb-6">
              <div className="text-sm">
                <span className="text-cyber-green">
                  curl -fsSL https://www.eigencode.dev/stable/latest/installer.sh
                </span>
                <div className="w-full h-2 bg-cyber-terminal border border-cyber-green/30 rounded mt-2">
                  <div className="w-3/4 h-full bg-cyber-green rounded"></div>
                </div>
              </div>
            </TerminalWindow>

            <p className="text-cyber-text mb-4">And as for Windows users:</p>

            <TerminalWindow title="powershell" className="mb-6">
              <div className="text-sm">
                <span className="text-cyber-blue">
                  powershell -ExecutionPolicy Bypass -Command "iex (New-Object
                  Net.WebClient).DownloadString('https://www.eigencode.dev/install.ps1')"
                </span>
                <div className="w-full h-2 bg-cyber-terminal border border-cyber-blue/30 rounded mt-2">
                  <div className="w-1/2 h-full bg-cyber-blue rounded"></div>
                </div>
              </div>
            </TerminalWindow>

            <Link href="#usage" className="text-cyber-blue hover:text-cyber-green transition-colors">
              View installation guide →
            </Link>
          </section>

          {/* Usage Section */}
          <section id="usage" className="mb-12">
            <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
              <span className="text-cyber-blue">{">"}</span>
              <GlitchText text="Usage" className="text-cyber-blue" glitchInterval={6000} />
            </h2>

            <p className="text-cyber-text mb-6">
              To get started with Eigencode, initialize it in your project directory:
            </p>

            <TerminalWindow title="terminal" className="mb-6">
              <div className="text-sm">
                <span className="text-cyber-green">eigencode open .</span>
              </div>
            </TerminalWindow>

            <p className="text-cyber-text mb-6">
              This will analyze your project and set up the necessary context for Eigencode to work effectively. You can
              then run various commands to analyze, optimize, and transform your code.
            </p>

            <Link href="#commands" className="text-cyber-blue hover:text-cyber-green transition-colors">
              View quick start guide →
            </Link>
          </section>

          {/* Commands Section */}
          <section id="commands" className="mb-12">
            <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
              <span className="text-cyber-blue">{">"}</span>
              <GlitchText text="Commands" className="text-cyber-blue" glitchInterval={9000} />
            </h2>

            <p className="text-cyber-text mb-6">
              Eigencode provides a variety of commands for analyzing and modifying your code:
            </p>

            <TerminalWindow title="commands" className="mb-6">
              <div className="text-sm space-y-2">
                <div>
                  <span className="text-cyber-blue">$ eigencode open [path]</span>
                  <span className="text-cyber-text ml-4">Initialize project context and scan files</span>
                </div>
                <div>
                  <span className="text-cyber-blue">$ eigencode setup</span>
                  <span className="text-cyber-text ml-4">Start configuring the Eigencode environment</span>
                </div>
                <div>
                  <span className="text-cyber-blue">$ --help</span>
                  <span className="text-cyber-text ml-4">Display list of sub-commands in the 'open' mode</span>
                </div>
                <div>
                  <span className="text-cyber-blue">$ :split</span>
                  <span className="text-cyber-text ml-4">Run multiple tasks simultaneously</span>
                </div>
              </div>
            </TerminalWindow>

            <Link href="/cmds" className="text-cyber-blue hover:text-cyber-green transition-colors">
              View all commands →
            </Link>
          </section>
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
