import Link from "next/link"
import { MatrixBackground } from "@/components/matrix-background"
import { TypingEffect } from "@/components/typing-effect"
import { GlitchText } from "@/components/glitch-text"
import ImageGenForm from "@/components/ImageGenForm"
import ImageTransformer from "@/components/ImageTransformer"
import VideoTransformer from "@/components/VideoTransformer"
import CubeMythosBibleModal from "@/components/CubeMythosBibleModal"
import "./aura.css"

export default function AuraPage() {
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
            <TypingEffect text="~ eigencode aura" speed={80} />
          </span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="text-cyber-green hover:cyber-text-glow transition-colors">
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

      {/* Hero Section with ASCII Art */}
      <section className="flex flex-col items-center text-center mb-16 z-10 w-full max-w-6xl">
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

        <p className="text-cyber-muted text-center max-w-2xl mb-12">
          The metaphysical foundation and recursive architecture of the Eigencode universe.
        </p>
      </section>

      {/* Eigencode Mythos Section */}
      <section className="w-full max-w-6xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText text="Eigencode Mythos" className="text-cyber-blue" glitchInterval={7000} />
        </h2>
        <p className="text-cyber-text mb-8 max-w-3xl">
          The metaphysical foundation and recursive architecture of the Eigencode universe.
        </p>

        <CubeMythosBibleModal />
      </section>

      {/* AI Image Generator Section */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText text="AI Image Generator" className="text-cyber-blue" glitchInterval={8000} />
        </h2>
        <p className="text-cyber-text mb-6 max-w-3xl">
          Generate unique AI images with our signature eigencode style. Create branded visuals for your projects, social
          media, or personal use.
        </p>
        <div className="cyber-box p-6">
          <ImageGenForm />
        </div>
      </section>

      {/* Aura Image Transformer Section */}
      <section className="w-full max-w-6xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText text="Aura Image Transformer" className="text-cyber-blue" glitchInterval={6000} />
        </h2>
        <p className="text-cyber-text mb-6 max-w-3xl">
          Transform your images with the eigencode aura. Upload an image and apply our signature blue futuristic filters
          with glitch effects.
        </p>
        <div className="cyber-box p-6">
          <ImageTransformer />
        </div>
      </section>

      {/* Aura Video Transformer Section */}
      <section className="w-full max-w-6xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText text="Aura Video Transformer" className="text-cyber-blue" glitchInterval={9000} />
        </h2>
        <p className="text-cyber-text mb-6 max-w-3xl">
          Transform your videos with the eigencode aura. Upload a video and apply our signature blue futuristic filters
          with glitch effects.
        </p>
        <VideoTransformer />
      </section>

      {/* Video Gallery Section */}
      <section className="w-full max-w-6xl mb-16 z-10">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText text="Eigencode Video Gallery" className="text-cyber-blue" glitchInterval={5000} />
        </h2>
        <p className="text-cyber-text mb-6">Watch our latest videos showcasing eigencode concepts and innovations.</p>

        <div className="cyber-box p-4 hover:border-cyber-blue/50 transition-colors cursor-pointer group">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg text-cyber-blue font-mono group-hover:cyber-text-glow transition-colors">
                Featured Videos
              </h3>
            </div>
            <button className="text-cyber-blue hover:text-cyber-green transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Art Gallery Section */}
      <section className="w-full max-w-6xl mb-16 z-10" id="art-gallery">
        <h2 className="text-2xl font-bold text-cyber-blue mb-6 flex items-center gap-2">
          <span className="text-cyber-blue">{">"}</span>
          <GlitchText text="Eigencode Art Gallery" className="text-cyber-blue" glitchInterval={4000} />
        </h2>
        <p className="text-cyber-text mb-8">Explore our curated collections of eigencode-inspired artwork.</p>

        <div className="grid grid-cols-1 gap-6">
          {[
            "Sacred Terminal",
            "Corporate Propaganda",
            "Cube Mythos",
            "Comics",
            "$CODE Bro",
            "$CODE Tunes",
            "Order of the Cube",
            "The Occult Terrors of $CODE",
            "The Science of the Cube",
            "Community Artwork",
          ].map((title) => (
            <div
              key={title}
              className="cyber-box p-4 hover:border-cyber-blue/50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-cyber-blue font-mono group-hover:cyber-text-glow transition-colors">
                  {title}
                </h3>
                <button className="text-cyber-blue hover:text-cyber-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-cyber-muted text-sm py-4 font-mono">~ Eigencode Art Gallery ~</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl text-center text-sm text-cyber-muted py-8 border-t border-cyber-blue/10 z-10">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="inline-block w-2 h-2 bg-cyber-blue animate-blink" />
          <span>AURA STATUS: ONLINE</span>
        </div>
        <p>© {new Date().getFullYear()} Polysys.Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
