import ImageGenForm from "@/components/ImageGenForm";
import ImageTransformer from "@/components/ImageTransformer";
import VideoTransformer from "@/components/VideoTransformer";
import BgAnimation from "@/components/BgAnimation";
import "./aura.css"

export default function AuraPage() {
  return (
    <div className="bg-black w-full h-full m-0">
      {/* <BgAnimation /> */}

      <section id="intro" className="mb-16 w-[80%] mx-auto">
        <div className="jsx-dacab4d66063e19 mb-8 binary-rain">
          <div className="jsx-dacab4d66063e19 bg-zinc-900 px-4 py-2 flex items-center justify-between rounded-t-lg border-b border-zinc-800">
            <div className="jsx-dacab4d66063e19 flex items-center space-x-2">
              <div className="jsx-dacab4d66063e19 flex space-x-2">
                <div className="jsx-dacab4d66063e19 w-3 h-3 rounded-full bg-red-500"></div>
                <div className="jsx-dacab4d66063e19 w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="jsx-dacab4d66063e19 w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="jsx-dacab4d66063e19 text-gray-400 text-sm ml-2">
                ~ eigencode aura
              </span>
            </div>
            <div className="jsx-dacab4d66063e19 flex items-center">
              <span className="jsx-dacab4d66063e19 text-blue-400 text-sm mr-2"></span>
              <button
                aria-label="Toggle menu"
                className="jsx-dacab4d66063e19 md:hidden text-gray-400 hover:text-blue-400 transition-colors focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="jsx-dacab4d66063e19 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeinecap-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    className="jsx-dacab4d66063e19"
                  ></path>
                </svg>
              </button>
              <div className="jsx-dacab4d66063e19 hidden md:flex items-center space-x-4 font-mono text-sm">
                <a
                  className="text-green-400 hover:text-green-300 transition-colors"
                  href="/"
                >
                  <span className="jsx-dacab4d66063e19 text-gray-400">$</span>{" "}
                  home
                </a>
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  href="/aura"
                >
                  <span className="jsx-dacab4d66063e19 text-gray-400">$</span>{" "}
                  aura
                </a>
                <a
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  href="/command-registry"
                >
                  <span className="jsx-dacab4d66063e19 text-gray-400">$</span>{" "}
                  cmds
                </a>
                <a
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  href="/docs"
                >
                  <span className="jsx-dacab4d66063e19 text-gray-400">$</span>{" "}
                  docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 w-[80%] mx-auto">
        <div className="py-8">
          <h2 className="text-xl text-blue-400 font-bold mb-6 font-mono">
            Eigencode Mythos
          </h2>
          <div className="text-blue-200 mb-8 max-w-3xl">
            <p>
              The metaphysical foundation and recursive architecture of the
              Eigencode universe.
            </p>
          </div>
          <div
            className="grid grid-cols-1 gap-6 hover:scale-101 transition-transform duration-300"
            style={{ opacity: 1 }}
          >
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="cursor-pointer bg-zinc-900/80 backdrop-blur-sm bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-6 rounded-lg border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center relative mythos-card"
                style={{
                  boxShadow: "rgba(59, 130, 246, 0.3) 0px 0px 0px",
                  transform: "none",
                }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-lg opacity-20 mythos-card-bg"></div>
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
                    className="lucide lucide-box w-12 h-12 text-blue-400 mb-4 mythos-card-icon"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                  <div className="absolute inset-0 blur-lg bg-blue-500/20 rounded-full opacity-70"></div>
                </div>
                <h3 className="font-bold mb-2 font-mono text-center cube-glow">
                  The Cube Mythos Bible
                </h3>
                <p className="text-gray-400 text-center text-sm">
                  The ontological foundation, core laws, and metaphysics of the
                  Cube.
                </p>
                <div className="mt-4 text-xs text-blue-400/70 italic">
                  Click to explore
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 w-[80%] mx-auto">
        <div className="py-8">
          <h2 className="text-xl text-blue-400 font-bold mb-6 font-mono">
            Eigencode AI Image Generator
          </h2>
          <p className="text-blue-200 mb-6 max-w-3xl mx-auto">
            Generate unique AI images with our signature eigencode style. Create
            branded visuals for your projects, social media, or personal use.
          </p>
          <div className="bg-zinc-900/70 p-6 rounded-lg border border-zinc-800/70 backdrop-blur-sm">
            <ImageGenForm />
          </div>
        </div>
      </section>

      <section className="mb-16 w-[80%] mx-auto">
        <div className="py-8">
          <h2 className="text-xl text-blue-400 font-bold mb-6 font-mono">
            Aura Image Transformer
          </h2>
          <div className="text-center mb-8">
            <p className="text-blue-200 mb-6 max-w-3xl mx-auto">
              Transform your images with the eigencode aura. Upload an image and
              apply our signature blue futuristic filters with glitch effects.
            </p>
            <div className="bg-zinc-900/70 p-6 rounded-lg border border-zinc-800/70 backdrop-blur-sm">
              <ImageTransformer />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 w-[80%] mx-auto">
        <div className="py-8">
          <h2 className="text-xl text-blue-400 font-bold mb-6 font-mono">
            Aura Video Transformer
          </h2>
          <div className="text-center mb-8">
            <p className="text-blue-200 mb-6 max-w-3xl mx-auto">
              Transform your videos with the eigencode aura. Upload a video and
              apply our signature blue futuristic filters with glitch effects.
            </p>
            <VideoTransformer />
          </div>
        </div>
      </section>

      <section className="mb-16 w-[80%] mx-auto">
        <div className="py-8">
          <div className="mb-6">
            <h2 className="text-xl text-blue-400 font-bold font-mono">
              Eigencode Video Gallery
            </h2>
            <p className="text-blue-200 mt-2">
              Watch our latest videos showcasing eigencode concepts and
              innovations.
            </p>
          </div>
          <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
            <div>
              <h3 className="text-lg text-blue-300 font-mono">
                Featured Videos
              </h3>
            </div>
            <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="mb-16 w-[80%] mx-auto" id="art-gallery">
        <div className="py-8">
          <div className="mb-6">
            <h2 className="text-xl text-blue-400 font-bold font-mono">
              Eigencode Art Gallery
            </h2>
            <p className="text-blue-200 mt-2">
              Explore our curated collections of eigencode-inspired artwork.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">
                  Sacred Terminal
                </h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">
                  Corporate Propaganda
                </h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">Cube Mythos</h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">Comics</h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">$CODE Bro</h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">$CODE Tunes</h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">
                  Order of the Cube
                </h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">
                  The Occult Terrors of $CODE
                </h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">
                  The Science of the Cube
                </h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 cursor-pointer mb-4 hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-lg text-blue-300 font-mono">
                  Community Artwork
                </h3>
              </div>
              <button className="text-blue-400 hover:text-blue-300 transition-colors hover:cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm py-4">
              ~ Eigencode Art Gallery ~
            </p>
          </div>
        </div>
      </section>

      <section>
        <footer className="pb-8">
          <div className="text-center">
            <span className="text-gray-400">
              © 2025 Polysys Inc. All rights reserved.
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
}
