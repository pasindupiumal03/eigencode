import Link from "next/link"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalWindow } from "@/components/terminal-window"
import { GlitchText } from "@/components/glitch-text"
import { TypingEffect } from "@/components/typing-effect"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, AlertTriangle } from "lucide-react"

export default function AuraPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <MatrixBackground />
      <div className="scanline" />

      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center mb-16 z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyber-red rounded-full" />
          <div className="w-3 h-3 bg-cyber-yellow rounded-full" />
          <div className="w-3 h-3 bg-cyber-green rounded-full" />
          <span className="text-sm font-mono text-cyber-muted">
            <TypingEffect text="~ eigencode aura" speed={80} />
          </span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="text-cyber-green hover:cyber-text-glow transition-colors">
            $ home
          </Link>
          <Link
            href="/aura"
            className="text-cyber-blue hover:cyber-text-glow transition-colors border-b border-cyber-blue"
          >
            $ aura
          </Link>
          <Link href="/cmds" className="text-cyber-yellow hover:cyber-text-glow transition-colors">
            $ cmds
          </Link>
          <Link href="/docs" className="text-cyber-magenta hover:cyber-text-glow transition-colors">
            $ docs
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-16 z-10">
        {/* ASCII Art AURA */}
        <div className="relative mb-8 w-full max-w-6xl overflow-hidden">
          <pre
            className="absolute inset-0 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] leading-[1.1] font-bold tracking-wider text-blue-500/40 whitespace-pre"
            style={{
              filter: "blur(1.2px)",
              transform: "translateX(0.5px) translateY(-0.5px)",
            }}
          >
            {`  █████╗ ██╗   ██╗██████╗  █████╗ 
 ██╔══██╗██║   ██║██╔══██╗██╔══██╗
 ███████║██║   ██║██████╔╝███████║
 ██╔══██║██║   ██║██╔══██╗██╔══██║
 ██║  ██║╚██████╔╝██║  ██║██║  ██║
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝`}
          </pre>
          <pre
            className="absolute inset-0 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] leading-[1.1] font-bold tracking-wider text-sky-400/40 whitespace-pre"
            style={{
              filter: "blur(1.2px)",
              transform: "translateX(-0.5px) translateY(0.5px)",
            }}
          >
            {`  █████╗ ██╗   ██╗██████╗  █████╗ 
 ██╔══██╗██║   ██║██╔══██╗██╔══██╗
 ███████║██║   ██║██████╔╝███████║
 ██╔══██║██║   ██║██╔══██╗██╔══██║
 ██║  ██║╚██████╔╝██║  ██║██║  ██║
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝`}
          </pre>
          <pre className="relative text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] leading-[1.1] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-blue cyber-text-glow whitespace-pre">
            {`  █████╗ ██╗   ██╗██████╗  █████╗ 
 ██╔══██╗██║   ██║██╔══██╗██╔══██╗
 ███████║██║   ██║██████╔╝███████║
 ██╔══██║██║   ██║██╔══██╗██╔══██║
 ██║  ██║╚██████╔╝██║  ██║██║  ██║
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝`}
          </pre>
        </div>

        <div className="cyber-box p-6 max-w-2xl mb-8 text-center">
          <p className="text-cyber-blue mb-4">
            The intelligent assistant that works with your codebase to help you code faster
          </p>
        </div>
      </section>

      {/* Episode 01: Syntax */}
      <section className="w-full max-w-4xl mb-16 z-10">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold text-cyber-blue mr-2">Episode 01:</h2>
          <GlitchText text="Code Interpreter" className="text-xl text-cyber-blue" glitchInterval={7000} />
        </div>

        <div className="cyber-box p-6 mb-8">
          <p className="text-cyber-text mb-4">
            AURA is a language model that is designed specifically for code. It understands your project structure and
            can help you write better code.
          </p>

          <TerminalWindow title="code-sample.js" className="mt-6">
            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code>
                <span className="text-cyber-green">// Ask AURA to explain this code</span>
                <br />
                <span className="text-cyber-text">function</span> <span className="text-cyber-blue">processData</span>
                <span className="text-cyber-text">(</span>
                <span className="text-cyber-yellow">data</span>
                <span className="text-cyber-text">) {"{"}</span>
                <br />
                <span className="text-cyber-text"> return data</span>
                <br />
                <span className="text-cyber-text"> .filter(</span>
                <span className="text-cyber-yellow">item</span>{" "}
                <span className="text-cyber-text">=&gt; item.active)</span>
                <br />
                <span className="text-cyber-text"> .map(</span>
                <span className="text-cyber-yellow">item</span>{" "}
                <span className="text-cyber-text">
                  =&gt; ({"{"}
                  id: item.id, value: item.value * 2{"}"}))
                </span>
                <br />
                <span className="text-cyber-text">{"}"}</span>
              </code>
            </pre>
          </TerminalWindow>
        </div>
      </section>

      {/* Episode 02: Model Selection */}
      <section className="w-full max-w-4xl mb-16 z-10">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold text-cyber-blue mr-2">Episode 02:</h2>
          <GlitchText text="Model Selection" className="text-xl text-cyber-blue" glitchInterval={8000} />
        </div>

        <div className="cyber-box p-6 mb-8">
          <p className="text-cyber-text mb-6">
            Select the model that works best for your specific needs. AURA adapts to your coding style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="cyber-box p-4 hover:border-cyber-blue transition-colors duration-300">
              <h3 className="text-cyber-blue mb-2 font-bold">Default Model</h3>
              <p className="text-cyber-text text-sm mb-4">Fast & efficient for most coding tasks</p>
              <div className="flex justify-center">
                <button className="cyber-button-primary text-sm px-4 py-1">
                  <span className="relative z-10">SELECT</span>
                </button>
              </div>
            </div>
            <div className="cyber-box p-4 hover:border-cyber-blue transition-colors duration-300">
              <h3 className="text-cyber-blue mb-2 font-bold">Advanced Model</h3>
              <p className="text-cyber-text text-sm mb-4">For complex code understanding & generation</p>
              <div className="flex justify-center">
                <button className="cyber-button-secondary text-sm px-4 py-1">
                  <span className="relative z-10">SELECT</span>
                </button>
              </div>
            </div>
          </div>

          <div className="cyber-box p-4 bg-cyber-terminal/50">
            <h3 className="text-cyber-blue mb-2 text-sm font-bold">Model Parameters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-cyber-text text-xs block mb-1">Temperature</label>
                <Slider defaultValue={[0.7]} max={1} step={0.1} className="mb-4" />
              </div>
              <div>
                <label className="text-cyber-text text-xs block mb-1">Max Tokens</label>
                <Slider defaultValue={[2048]} max={4096} step={256} className="mb-4" />
              </div>
            </div>
            <button className="cyber-button-primary text-xs px-3 py-1 mt-2">
              <span className="relative z-10">SAVE SETTINGS</span>
            </button>
          </div>
        </div>
      </section>

      {/* Upload/Download Section */}
      <section className="w-full max-w-4xl mb-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="cyber-box p-6 hover:border-cyber-blue transition-colors duration-300">
            <div className="flex justify-center mb-4">
              <Download className="w-10 h-10 text-cyber-blue" />
            </div>
            <h3 className="text-cyber-blue text-center mb-2 font-bold">Upload Project</h3>
            <p className="text-cyber-text text-sm text-center">Share a file to analyze with AURA</p>
          </div>
          <div className="cyber-box p-6 hover:border-cyber-yellow transition-colors duration-300">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-10 h-10 text-cyber-yellow" />
            </div>
            <h3 className="text-cyber-yellow text-center mb-2 font-bold">Security Focused</h3>
            <p className="text-cyber-text text-sm text-center">Your code stays private and secure</p>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="w-full max-w-4xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6">Integration Options</h2>

        <Tabs defaultValue="cli" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-cyber-terminal border border-cyber-blue/30">
            <TabsTrigger
              value="cli"
              className="data-[state=active]:text-cyber-blue data-[state=active]:border-b data-[state=active]:border-cyber-blue"
            >
              Terminal / CLI
            </TabsTrigger>
            <TabsTrigger
              value="editor"
              className="data-[state=active]:text-cyber-blue data-[state=active]:border-b data-[state=active]:border-cyber-blue"
            >
              Code Editor Plugins
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cli" className="cyber-box p-6">
            <TerminalWindow title="bash">
              <pre className="text-xs sm:text-sm">
                <code>
                  <span className="text-cyber-green">$ </span>
                  <span className="text-cyber-text">npm install -g eigencode-aura</span>
                  <br />
                  <span className="text-cyber-green">$ </span>
                  <span className="text-cyber-text">aura init</span>
                  <br />
                  <span className="text-cyber-blue">Initializing AURA in current directory...</span>
                  <br />
                  <span className="text-cyber-green">✓ AURA initialized successfully!</span>
                </code>
              </pre>
            </TerminalWindow>
          </TabsContent>
          <TabsContent value="editor" className="cyber-box p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="cyber-box p-4 hover:border-cyber-blue transition-colors duration-300">
                <h3 className="text-cyber-blue mb-2 text-sm font-bold">VS Code Extension</h3>
                <p className="text-cyber-text text-xs mb-2">Integrate AURA directly into your VS Code workflow</p>
                <button className="cyber-button-primary text-xs px-3 py-1">
                  <span className="relative z-10">INSTALL</span>
                </button>
              </div>
              <div className="cyber-box p-4 hover:border-cyber-blue transition-colors duration-300">
                <h3 className="text-cyber-blue mb-2 text-sm font-bold">JetBrains Plugin</h3>
                <p className="text-cyber-text text-xs mb-2">
                  Use AURA with IntelliJ, WebStorm, and other JetBrains IDEs
                </p>
                <button className="cyber-button-primary text-xs px-3 py-1">
                  <span className="relative z-10">INSTALL</span>
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Gallery Section */}
      <section className="w-full max-w-4xl mb-16 z-10">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-cyber-blue mr-2">Episode 03:</h2>
          <GlitchText text="Gallery" className="text-xl text-cyber-blue" glitchInterval={6000} />
        </div>

        <p className="text-cyber-text mb-6">
          AURA can visualize complex algorithms and data structures to help you understand your code better.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Cube */}
          <div className="cyber-box p-4 aspect-square flex flex-col items-center justify-center hover:border-cyber-blue transition-colors duration-300">
            <div className="w-32 h-32 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <g fill="none" stroke="#0AFFFF" strokeWidth="2">
                  <rect x="20" y="20" width="60" height="60" />
                  <rect x="30" y="30" width="40" height="40" />
                  <line x1="20" y1="20" x2="30" y2="30" />
                  <line x1="80" y1="20" x2="70" y2="30" />
                  <line x1="20" y1="80" x2="30" y2="70" />
                  <line x1="80" y1="80" x2="70" y2="70" />
                </g>
              </svg>
            </div>
            <span className="text-cyber-blue text-xs mt-4">OBJECT</span>
          </div>

          {/* Infinity */}
          <div className="cyber-box p-4 aspect-square flex flex-col items-center justify-center hover:border-cyber-blue transition-colors duration-300">
            <div className="w-32 h-32 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M30,50 C30,30 45,30 50,50 C55,70 70,70 70,50 C70,30 55,30 50,50 C45,70 30,70 30,50 Z"
                  stroke="#0AFFFF"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-cyber-blue text-xs mt-4">INFINITY LOOP</span>
          </div>

          {/* Target */}
          <div className="cyber-box p-4 aspect-square flex flex-col items-center justify-center hover:border-cyber-blue transition-colors duration-300">
            <div className="w-32 h-32 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <g fill="none" stroke="#0AFFFF" strokeWidth="2">
                  <circle cx="50" cy="50" r="40" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="20" />
                  <circle cx="50" cy="50" r="10" />
                  <line x1="10" y1="50" x2="90" y2="50" />
                  <line x1="50" y1="10" x2="50" y2="90" />
                </g>
              </svg>
            </div>
            <span className="text-cyber-blue text-xs mt-4">TARGET</span>
          </div>

          {/* Cube 3D */}
          <div className="cyber-box p-4 aspect-square flex flex-col items-center justify-center hover:border-cyber-blue transition-colors duration-300">
            <div className="w-32 h-32 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <g fill="none" stroke="#0AFFFF" strokeWidth="2">
                  <polygon points="50,20 80,35 50,50 20,35" />
                  <polygon points="50,50 80,35 80,65 50,80" />
                  <polygon points="50,50 50,80 20,65 20,35" />
                  <line x1="50" y1="20" x2="50" y2="50" />
                </g>
              </svg>
            </div>
            <span className="text-cyber-blue text-xs mt-4">CUBE</span>
          </div>

          {/* Hologram */}
          <div className="cyber-box p-4 aspect-square flex flex-col items-center justify-center hover:border-cyber-blue transition-colors duration-300">
            <div className="w-32 h-32 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <g fill="none" stroke="#0AFFFF" strokeWidth="1">
                  <line x1="50" y1="10" x2="50" y2="90" />
                  {Array.from({ length: 10 }).map((_, i) => (
                    <circle key={i} cx="50" cy="50" r={5 + i * 4} opacity={1 - i / 10} strokeDasharray="3,3" />
                  ))}
                </g>
              </svg>
            </div>
            <span className="text-cyber-blue text-xs mt-4">HOLOGRAM</span>
          </div>

          {/* Network */}
          <div className="cyber-box p-4 aspect-square flex flex-col items-center justify-center hover:border-cyber-blue transition-colors duration-300">
            <div className="w-32 h-32 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <g fill="#0AFFFF" stroke="#0AFFFF" strokeWidth="1">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <circle key={i} cx={20 + Math.random() * 60} cy={20 + Math.random() * 60} r="1.5" />
                  ))}
                  <line x1="30" y1="30" x2="70" y2="40" />
                  <line x1="30" y1="30" x2="40" y2="70" />
                  <line x1="70" y1="40" x2="40" y2="70" />
                  <line x1="70" y1="40" x2="60" y2="20" />
                  <line x1="60" y1="20" x2="30" y2="30" />
                </g>
              </svg>
            </div>
            <span className="text-cyber-blue text-xs mt-4">NETWORK</span>
          </div>
        </div>
      </section>

      {/* Parameters Section */}
      <section className="w-full max-w-4xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6">Configuration Parameters</h2>

        <div className="cyber-box p-6 mb-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-cyber-text text-sm block mb-1">Context Length</label>
              <div className="cyber-box p-2 bg-cyber-terminal/50">
                <input
                  type="text"
                  className="w-full bg-transparent border-none text-cyber-blue focus:outline-none"
                  defaultValue="8192"
                />
              </div>
            </div>
            <div>
              <label className="text-cyber-text text-sm block mb-1">Model</label>
              <div className="cyber-box p-2 bg-cyber-terminal/50">
                <input
                  type="text"
                  className="w-full bg-transparent border-none text-cyber-blue focus:outline-none"
                  defaultValue="aura-v2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-sm text-cyber-muted py-8 border-t border-cyber-blue/10 z-10">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="inline-block w-2 h-2 bg-cyber-blue animate-blink" />
          <span>AURA STATUS: ONLINE</span>
        </div>
        <p>© {new Date().getFullYear()} Polysys.Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
