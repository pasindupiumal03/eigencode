"use client"

import { useState } from "react"
import Link from "next/link"
import { MatrixBackground } from "@/components/matrix-background"
import { GlitchText } from "@/components/glitch-text"
import { TypingEffect } from "@/components/typing-effect"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function CmdsPage() {
  const [activeTab, setActiveTab] = useState("avail")

  const commands = [
    {
      name: "setup",
      status: "complete",
      description: "Setup the AI configuration you want Eigencode to use",
      tags: ["configuration"],
      category: "utility",
    },
    {
      name: "open",
      status: "complete",
      description: "Open the Eigencode in your working directory or a file",
      tags: ["programming", "efficiency", "full-pack"],
      category: "utility",
    },
    {
      name: "init",
      status: "planned",
      description: "Initialize new projects using Eigencode",
      tags: ["injection possibility"],
      category: "utility",
    },
    {
      name: "fix",
      status: "planned",
      description: "Analyze error and codebase to make fixes",
      tags: [],
      category: "analysis",
    },
    {
      name: "explain",
      status: "complete",
      description: "Get AI-powered explanation of code",
      tags: [],
      category: "documentation",
    },
    {
      name: "dependency_graph",
      status: "in progress",
      description: "Generate and visualize module dependencies",
      tags: [],
      category: "analysis",
    },
    {
      name: "chat",
      status: "complete",
      description: "Use Eigencode without supplying additional context",
      tags: [],
      category: "utility",
    },
  ]

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

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <MatrixBackground />
      <div className="scanline" />

      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-16 z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyber-red rounded-full" />
          <div className="w-3 h-3 bg-cyber-yellow rounded-full" />
          <div className="w-3 h-3 bg-cyber-green rounded-full" />
          <span className="text-sm font-mono text-cyber-muted">
            <TypingEffect text="~ eigencode features" speed={80} />
          </span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="text-cyber-green hover:cyber-text-glow transition-colors">
            $ home
          </Link>
          <Link href="/aura" className="text-cyber-blue hover:cyber-text-glow transition-colors">
            $ aura
          </Link>
          <Link
            href="/cmds"
            className="text-cyber-yellow hover:cyber-text-glow transition-colors border-b border-cyber-yellow"
          >
            $ cmds
          </Link>
          <Link href="/docs" className="text-cyber-magenta hover:cyber-text-glow transition-colors">
            $ docs
          </Link>
        </nav>
      </header>

      {/* Terminal Command */}
      <div className="w-full max-w-6xl mb-8 z-10">
        <div className="text-cyber-green font-mono text-sm mb-4">eigencode $ view features</div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-16 z-10 w-full max-w-6xl">
      <h1 className="text-4xl font-bold mb-12 text-cyber-green cyber-text-glow">
          <GlitchText text="> Features" glitchInterval={7000} />
        </h1>

        <p className="text-cyber-muted text-center max-w-2xl mb-12">
          Explore Eigencode's ecosystem of commands, scripts, APIs, and AI integrations.
        </p>

        {/* Tabs */}
        <Tabs defaultValue="avail" className="w-full mb-8" onValueChange={setActiveTab}>
          <TabsList className="bg-transparent border-b border-cyber-green/30 rounded-none h-auto p-0 mb-8">
            <TabsTrigger
              value="avail"
              className="bg-transparent border-b-2 border-transparent data-[state=active]:border-cyber-green data-[state=active]:text-cyber-green rounded-none px-4 py-2"
            >
              <span className="text-cyber-green mr-2">{"<>"}</span> avail
            </TabsTrigger>
            <TabsTrigger
              value="roadmap"
              className="bg-transparent border-b-2 border-transparent data-[state=active]:border-cyber-magenta data-[state=active]:text-cyber-magenta rounded-none px-4 py-2"
            >
              <span className="text-cyber-magenta mr-2">{"🗺"}</span> roadmap
            </TabsTrigger>
          </TabsList>

          <TabsContent value="avail" className="w-full">
            {/* Command Input and Submit */}
            <div className="flex gap-4 mb-8 items-center">
              <div className="cyber-box flex-1 p-3">
                <div className="flex items-center gap-2">
                  <span className="text-cyber-green">{">"}</span>
                  <span className="text-cyber-blue">$</span>
                  <Input
                    className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-cyber-text placeholder:text-cyber-muted"
                    placeholder="commands"
                    defaultValue="commands"
                    readOnly
                  />
                </div>
              </div>
              <button className="cyber-button-primary px-6 py-3">
                <span className="relative z-10">Submit feature</span>
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              <button className="px-4 py-2 bg-cyber-blue text-cyber-dark rounded text-sm font-medium">All</button>
              <button className="px-4 py-2 bg-cyber-terminal border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors">
                Analysis
              </button>
              <button className="px-4 py-2 bg-cyber-terminal border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors">
                Optimization
              </button>
              <button className="px-4 py-2 bg-cyber-terminal border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors">
                Refactoring
              </button>
              <button className="px-4 py-2 bg-cyber-terminal border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors">
                Documentation
              </button>
              <button className="px-4 py-2 bg-cyber-terminal border border-cyber-blue/30 text-cyber-text rounded text-sm hover:border-cyber-blue transition-colors">
                Utility
              </button>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4 mb-8 text-sm">
              <span className="text-cyber-muted">Sort by:</span>
              <button className="text-cyber-text hover:text-cyber-blue transition-colors">Status</button>
              <button className="text-cyber-text hover:text-cyber-blue transition-colors">A-Z</button>
              <button className="text-cyber-text hover:text-cyber-blue transition-colors">Popularity</button>
              <button className="text-cyber-text hover:text-cyber-blue transition-colors">Recent</button>
            </div>

            {/* Commands Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commands.map((command) => (
                <div
                  key={command.name}
                  className="cyber-box p-6 hover:border-cyber-blue/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-cyber-blue">$</span>
                      <span className="text-cyber-blue font-mono font-bold">{command.name}</span>
                    </div>
                    <Badge
                      className={`text-xs px-2 py-1 ${getStatusBg(command.status)} ${getStatusColor(command.status)}`}
                    >
                      {command.status}
                    </Badge>
                  </div>

                  <p className="text-cyber-text text-sm mb-4 leading-relaxed">{command.description}</p>

                  {command.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {command.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs px-2 py-0.5 bg-cyber-terminal/50 border-cyber-blue/30 text-cyber-blue"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roadmap" className="w-full">
            <div className="text-cyber-magenta font-mono text-sm mb-6">{">"} roadmap</div>
            <p className="text-cyber-text mb-8">
              The Eigencode command system is continuously evolving. Below is our development timeline and future plans.
            </p>

            {/* Completed Section */}
            <div className="mb-12 relative">
              <div className="absolute left-2 top-2 w-3 h-3 bg-cyber-green rounded-full"></div>
              <div className="pl-10 border-l border-cyber-green/30">
                <h3 className="text-cyber-green text-xl mb-6">Completed</h3>
                <div className="text-cyber-muted text-xs mb-4 font-mono">
                  <div>Line 78: Perform batch operations with single regex</div>
                  <div>Line 145: Lazy evaluation to avoid recalculation</div>
                  <div>Line 201: Use Map/Set for improved memory allocation</div>
                </div>
                <p className="text-cyber-text mb-6">Core command infrastructure and essential commands completed.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="cyber-box p-4 hover:border-cyber-green/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyber-blue">$</span>
                      <span className="text-cyber-blue font-mono font-bold">open</span>
                    </div>
                    <p className="text-cyber-text text-sm">Open the Eigencode in your working directory or a file</p>
                  </div>
                  <div className="cyber-box p-4 hover:border-cyber-green/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyber-blue">$</span>
                      <span className="text-cyber-blue font-mono font-bold">setup</span>
                    </div>
                    <p className="text-cyber-text text-sm">Setup the AI configuration you want Eigencode to use</p>
                  </div>
                </div>

                <div className="cyber-box p-4 hover:border-cyber-green/50 transition-all duration-300 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyber-blue">$</span>
                    <span className="text-cyber-blue font-mono font-bold">explain</span>
                  </div>
                  <p className="text-cyber-text text-sm">Get AI-powered explanation of code</p>
                </div>

                <div className="cyber-box p-4 hover:border-cyber-green/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyber-blue">$</span>
                    <span className="text-cyber-blue font-mono font-bold">chat</span>
                  </div>
                  <p className="text-cyber-text text-sm">Use Eigencode without supplying additional context</p>
                </div>
              </div>
            </div>

            {/* Current Development Section */}
            <div className="mb-12 relative">
              <div className="absolute left-2 top-2 w-3 h-3 bg-cyber-yellow rounded-full"></div>
              <div className="pl-10 border-l border-cyber-yellow/30">
                <h3 className="text-cyber-yellow text-xl mb-6">Current Development</h3>
                <div className="text-cyber-muted text-xs mb-4 font-mono">
                  <div>Refactoring activity: Safely transform line 45-67 into a new function</div>
                  <div>Generating JS module: Rewrite loop at line 102 to functional style</div>
                </div>

                <div className="cyber-box p-4 hover:border-cyber-yellow/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyber-blue">$</span>
                    <span className="text-cyber-blue font-mono font-bold">dependency_graph</span>
                  </div>
                  <p className="text-cyber-text text-sm">Generate and visualize module dependencies</p>
                </div>
              </div>
            </div>

            {/* Planned Features Section */}
            <div className="mb-12 relative">
              <div className="absolute left-2 top-2 w-3 h-3 bg-cyber-blue rounded-full"></div>
              <div className="pl-10 border-l border-cyber-blue/30">
                <h3 className="text-cyber-blue text-xl mb-6">Planned Features</h3>
                <div className="text-cyber-muted text-xs mb-4 font-mono">
                  <div>Line 78: Perform batch operations with single regex</div>
                  <div>Line 145: Lazy evaluation to avoid recalculation</div>
                  <div>Line 201: Use Map/Set for improved memory allocation</div>
                </div>
                <p className="text-cyber-text mb-6">Features coming in the future:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="cyber-box p-4 hover:border-cyber-blue/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyber-blue">$</span>
                      <span className="text-cyber-blue font-mono font-bold">init</span>
                    </div>
                    <p className="text-cyber-text text-sm">Initialize new projects using Eigencode</p>
                  </div>
                  <div className="cyber-box p-4 hover:border-cyber-blue/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyber-blue">$</span>
                      <span className="text-cyber-blue font-mono font-bold">fix</span>
                    </div>
                    <p className="text-cyber-text text-sm">Analyze error and codebase to make fixes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Feature Ideas Section */}
            <div className="mb-12">
              <h3 className="text-cyber-text text-xl mb-6">Future Feature Ideas</h3>

              <div className="mb-8">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-cyber-magenta mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-cyber-magenta font-bold">Eigencode Pipeline Features</h4>
                    <p className="text-cyber-text text-sm">
                      Features for building and managing automated code transformation pipelines
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-cyber-magenta mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-cyber-magenta font-bold">Language-Specific Analysis Tools</h4>
                    <p className="text-cyber-text text-sm">
                      Deep analysis tools tailored to specific programming languages (Rust, TypeScript, Python, etc.)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-cyber-magenta mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-cyber-magenta font-bold">Integration APIs</h4>
                    <p className="text-cyber-text text-sm">
                      APIs for integrating Eigencode with other development tools and environments
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-4 h-4 rounded-full bg-cyber-magenta mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-cyber-magenta font-bold">Workflow Automation Scripts</h4>
                    <p className="text-cyber-text text-sm">
                      Scripts for automating complex development workflows using Eigencode's capabilities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Contributions Section */}
            <div className="mb-12">
              <h3 className="text-cyber-text text-xl mb-6">Community Contributions</h3>

              <p className="text-cyber-text mb-8">
                Help shape the future of Eigencode by contributing your feature ideas. Community contributions help us
                understand user needs and expand Eigencode's capabilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-cyber-blue font-bold mb-4">Why Contribute?</h4>
                  <ul className="text-cyber-text text-sm space-y-2 list-inside">
                    <li>• Shape the tool to meet your specific needs</li>
                    <li>• Get recognized in the Eigencode community</li>
                    <li>• Help advance AI-assisted coding tools</li>
                    <li>• Gain experience with next development</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-cyber-blue font-bold mb-4">Contribution Process</h4>
                  <ol className="text-cyber-text text-sm space-y-2 list-inside">
                    <li>1. Submit your feature idea through this form</li>
                    <li>2. Our team reviews the submission</li>
                    <li>3. Approved features get added to the roadmap</li>
                    <li>4. Features are implemented and released</li>
                  </ol>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button className="cyber-button-primary px-6 py-3">
                  <span className="relative z-10">Submit Feature</span>
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl text-center text-sm text-cyber-muted py-8 border-t border-cyber-blue/10 z-10">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="inline-block w-2 h-2 bg-cyber-blue animate-blink" />
          <span>COMMANDS STATUS: ONLINE</span>
        </div>
        <p>© {new Date().getFullYear()} Polysys.Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
