import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Code, Zap, FileText, Puzzle } from "lucide-react"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalWindow } from "@/components/terminal-window"
import { GlitchText } from "@/components/glitch-text"
import { TypingEffect } from "@/components/typing-effect"
import { FaXTwitter } from "react-icons/fa6"
import { FaChartLine } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa6"
import { FaTelegramPlane } from "react-icons/fa"

export default function Component() {
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
            <TypingEffect text="~ polybiuos home" speed={80} />
          </span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="#" className="text-cyber-green hover:cyber-text-glow transition-colors">
            $ home
          </Link>
          <Link href="/aura" className="text-cyber-blue hover:cyber-text-glow transition-colors">
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
        {/* ASCII Art POLYBIUOS */}
        <div className="relative mb-8 w-full max-w-6xl overflow-hidden">
          <pre
            className="absolute inset-0 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] leading-[1.1] font-bold tracking-wider text-blue-500/40 whitespace-pre"
            style={{
              filter: "blur(1.2px)",
              transform: "translateX(0.5px) translateY(-0.5px)",
            }}
          >
            {`██████╗  ██████╗ ██╗  ██╗   ██╗██████╗ ██╗██╗   ██╗ ██████╗ ███████╗
██╔══██╗██╔═══██╗██║  ╚██╗ ██╔╝██╔══██╗██║██║   ██║██╔═══██╗██╔════╝
██████╔╝██║   ██║██║   ╚████╔╝ ██████╔╝██║██║   ██║██║   ██║███████╗
██╔═══╝ ██║   ██║██║    ╚██╔╝  ██╔══██╗██║██║   ██║██║   ██║╚════██║
██║     ╚██████╔╝███████╗██║   ██████╔╝██║╚██████╔╝╚██████╔╝███████║
╚═╝      ╚═════╝ ╚══════╝╚═╝   ╚═════╝ ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝`}
          </pre>
          <pre
            className="absolute inset-0 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] leading-[1.1] font-bold tracking-wider text-sky-400/40 whitespace-pre"
            style={{
              filter: "blur(1.2px)",
              transform: "translateX(-0.5px) translateY(0.5px)",
            }}
          >
            {`██████╗  ██████╗ ██╗  ██╗   ██╗██████╗ ██╗██╗   ██╗ ██████╗ ███████╗
██╔══██╗██╔═══██╗██║  ╚██╗ ██╔╝██╔══██╗██║██║   ██║██╔═══██╗██╔════╝
██████╔╝██║   ██║██║   ╚████╔╝ ██████╔╝██║██║   ██║██║   ██║███████╗
██╔═══╝ ██║   ██║██║    ╚██╔╝  ██╔══██╗██║██║   ██║██║   ██║╚════██║
██║     ╚██████╔╝███████╗██║   ██████╔╝██║╚██████╔╝╚██████╔╝███████║
╚═╝      ╚═════╝ ╚══════╝╚═╝   ╚═════╝ ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝`}
          </pre>
          <pre className="relative text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[22px] leading-[1.1] font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-green cyber-text-glow whitespace-pre">
            {`██████╗  ██████╗ ██╗  ██╗   ██╗██████╗ ██╗██╗   ██╗ ██████╗ ███████╗
██╔══██╗██╔═══██╗██║  ╚██╗ ██╔╝██╔══██╗██║██║   ██║██╔═══██╗██╔════╝
██████╔╝██║   ██║██║   ╚████╔╝ ██████╔╝██║██║   ██║██║   ██║███████╗
██╔═══╝ ██║   ██║██║    ╚██╔╝  ██╔══██╗██║██║   ██║██║   ██║╚════██║
██║     ╚██████╔╝███████╗██║   ██████╔╝██║╚██████╔╝╚██████╔╝███████║
╚═╝      ╚═════╝ ╚══════╝╚═╝   ╚═════╝ ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝`}
          </pre>
        </div>

        {/* Terminal Input Card */}
        <TerminalWindow title="polybiuos - terminal" className="w-full max-w-2xl mb-8">
          <div className="relative flex items-center gap-2 w-full">
            <span className="text-cyber-green">CA:</span>
            <div className="relative flex-1 flex items-center">
              <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center pointer-events-none">
                <div className="relative flex-1 h-full flex items-center pl-3 pr-4">
                  <span className="relative bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-cyber-blue">
                    Coming Soon....
                    <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-5 bg-cyber-green animate-blink" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="cyber-button-primary">
            <Link href="/docs" passHref legacyBehavior>
              <span className="relative z-10">GET_STARTED</span>
            </Link>
          </button>
          <button className="cyber-button-secondary">
            <Link href="/docs/getting-started/installation" passHref legacyBehavior>
              <span className="relative z-10">DOWNLOAD</span>
            </Link>
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-16">
          <Link
            href="#"
            aria-label="FaChartLine"
            className="group"
          >
            <FaChartLine className="w-7 h-7 text-cyber-text group-hover:text-cyber-green transition-colors duration-300" />
          </Link>
          <Link href="#" aria-label="FaXTwitter" className="group">
            <FaXTwitter className="w-7 h-7 text-cyber-text group-hover:text-cyber-blue transition-colors duration-300" />
          </Link>
          <Link href="#" aria-label="FaDiscord" className="group">
            <FaDiscord className="w-7 h-7 text-cyber-text group-hover:text-cyber-magenta transition-colors duration-300" />
          </Link>
          <Link href="#" aria-label="FaTelegramPlane" className="group">
            <FaTelegramPlane className="w-7 h-7 text-cyber-text group-hover:text-cyber-yellow transition-colors duration-300" />
          </Link>
        </div>
      </section>

      {/* Terminal Output Card */}
      <section className="w-full max-w-4xl mb-16 z-10">
        <TerminalWindow title="polybiuos">
          <div className="text-sm">
            <TypingEffect text="$ polybiuos open" className="text-cyber-green" speed={30} showCursor={false} />
            <br />
            <TypingEffect
              text="✓ Project initialized successfully!"
              className="text-cyber-green"
              speed={20}
              delay={1000}
              showCursor={false}
            />
            <br />
            <TypingEffect
              text="$ polybiuos optimize src/utils/parser.js"
              className="text-cyber-green"
              speed={30}
              delay={2000}
              showCursor={false}
            />
            <br />
            <TypingEffect
              text="Analyzing code..."
              className="text-cyber-text"
              speed={50}
              delay={3500}
              showCursor={false}
            />
            <br />
            <TypingEffect
              text="found 3 potential optimizations:"
              className="text-cyber-yellow"
              speed={40}
              delay={5000}
              showCursor={false}
            />
            <br />
            <TypingEffect
              text="1. Replace nested for-loops with map/reduce (line 24-42)"
              className="text-cyber-text"
              speed={20}
              delay={6000}
              showCursor={false}
            />
            <br />
            <TypingEffect
              text="2. Memoize expensive computation (line 87)"
              className="text-cyber-text"
              speed={20}
              delay={7000}
              showCursor={false}
            />
            <br />
            <TypingEffect
              text="3. Use destructuring for cleaner parameter handling"
              className="text-cyber-text"
              speed={20}
              delay={8000}
              showCursor={false}
            />
            <br />
            <TypingEffect
              text="$ polybiuos implement 1"
              className="text-cyber-green"
              speed={30}
              delay={9000}
              showCursor={false}
            />
            <br />
            <TypingEffect
              text="Implementing optimization #1..."
              className="text-cyber-text"
              speed={40}
              delay={10000}
              showCursor={false}
            />
            <br />
            <TypingEffect
              text="✓ Code updated successfully!"
              className="text-cyber-green"
              speed={30}
              delay={11500}
              showCursor={true}
            />
          </div>
        </TerminalWindow>
      </section>

      {/* Key Features Section */}
      <section className="w-full max-w-4xl text-center mb-16 z-10">
        <h2 className="text-4xl font-bold mb-12 text-cyber-green cyber-text-glow">
          <GlitchText text="KEY_FEATURES" glitchInterval={7000} />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-box p-6 text-left hover:border-cyber-green transition-colors duration-300">
            <Code className="w-8 h-8 text-cyber-green mb-4" />
            <h3 className="text-xl font-semibold text-cyber-green mb-2">Codebase Understanding</h3>
            <p className="text-cyber-text">
              Analyzes and understands your entire project structure, dependencies, and coding patterns to provide
              contextual assistance.
            </p>
          </div>
          <div className="cyber-box p-6 text-left hover:border-cyber-blue transition-colors duration-300">
            <Zap className="w-8 h-8 text-cyber-blue mb-4" />
            <h3 className="text-xl font-semibold text-cyber-blue mb-2">Native CLI Experience</h3>
            <p className="text-cyber-text">
              Works directly in your terminal - no context switching or additional editors required.
            </p>
          </div>
          <div className="cyber-box p-6 text-left hover:border-cyber-magenta transition-colors duration-300">
            <FileText className="w-8 h-8 text-cyber-magenta mb-4" />
            <h3 className="text-xl font-semibold text-cyber-magenta mb-2">File Interaction</h3>
            <p className="text-cyber-text">
              Reads and writes to project files, making intelligent modifications based on your codebase analysis.
            </p>
          </div>
          <div className="cyber-box p-6 text-left hover:border-cyber-yellow transition-colors duration-300">
            <Puzzle className="w-8 h-8 text-cyber-yellow mb-4" />
            <h3 className="text-xl font-semibold text-cyber-yellow mb-2">API Integration & Local Models</h3>
            <p className="text-cyber-text">
              Support for using your own API keys and running local models for enhanced privacy and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="w-full max-w-4xl mb-16 z-10">
        <TerminalWindow title="code-sample.js">
          <pre className="text-xs sm:text-sm overflow-x-auto">
            <code>
              <span className="text-cyber-green">// Before optimization</span>
              <br />
              <span className="text-cyber-text">function</span> <span className="text-cyber-blue">processData</span>
              <span className="text-cyber-text">(</span>
              <span className="text-cyber-yellow">data</span>
              <span className="text-cyber-text">) {"{"}</span>
              <br />
              <span className="text-cyber-text"> let result = [];</span>
              <br />
              <span className="text-cyber-text">
                {" "}
                for (let i = 0; i {"<"} data.length; i++) {"{"}
              </span>
              <br />
              <span className="text-cyber-text">
                {" "}
                for (let j = 0; j {"<"} data[i].items.length; j++) {"{"}
              </span>
              <br />
              <span className="text-cyber-text"> result.push(data[i].items[j]);</span>
              <br />
              <span className="text-cyber-text"> {"}"}</span>
              <br />
              <span className="text-cyber-text"> {"}"}</span>
              <br />
              <span className="text-cyber-text"> return result;</span>
              <br />
              <span className="text-cyber-text">{"}"}</span>
              <br />
              <br />
              <span className="text-cyber-green">// After polybiuos optimization</span>
              <br />
              <span className="text-cyber-text">function</span> <span className="text-cyber-blue">processData</span>
              <span className="text-cyber-text">(</span>
              <span className="text-cyber-yellow">data</span>
              <span className="text-cyber-text">) {"{"}</span>
              <br />
              <span className="text-cyber-text"> return data</span>
              <br />
              <span className="text-cyber-text"> .flatMap(</span>
              <span className="text-cyber-yellow">item</span>{" "}
              <span className="text-cyber-text">=&gt; item.items);</span>
              <br />
              <span className="text-cyber-text">{"}"}</span>
            </code>
          </pre>
        </TerminalWindow>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-sm text-cyber-muted py-8 border-t border-cyber-green/10 z-10">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="inline-block w-2 h-2 bg-cyber-green animate-blink" />
          <span>SYSTEM STATUS: ONLINE</span>
        </div>
        <p>© {new Date().getFullYear()} Polysys.Inc. All rights reserved.</p>
        <p className="mt-2 text-xs">
          <span className="text-cyber-green">{">"}</span> Optimizing code since 2023
        </p>
      </footer>
    </div>
  )
}
