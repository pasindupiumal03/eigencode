"use client";

import { useState } from "react";

export default function ImageGenForm() {
  const [description, setDescription] = useState("");
  const [styleMethod, setStyleMethod] = useState<
    "StylePresets" | "CustomFilters"
  >("StylePresets");
  const [stylePreset, setStylePreset] = useState<
    "CodeVisualization" | "TechConcept" | "DigitalAbstract" | "CircuitPattern"
  >("CodeVisualization");
  const [blueIntensity, setBlueIntensity] = useState(50);
  const [glitchLevel, setGlitchLevel] = useState(50);
  const [circuitDensity, setCircuitDensity] = useState(50);
  const [imageSize, setImageSize] = useState<
    "Square" | "Landscape" | "Portrait"
  >("Square");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showExamplePrompts, setShowExamplePrompts] = useState(false);

  const handleGenerateImage = async () => {
    setLoading(true);
    setImageUrl(null);

    const promptParts =
      styleMethod === "StylePresets"
        ? {
            description,
            selectedStylePreset: stylePreset,
            adjustStyleParameters: {
              blueIntensity,
              glitchLevel,
              circuitDensity,
            },
            imageSize,
          }
        : {
            description,
            adjustStyleParameters: {
              blueIntensity,
              glitchLevel,
              circuitDensity,
            },
            imageSize,
          };
    const queryParam =
      styleMethod === "StylePresets"
        ? "?styleMethod=StylePresets"
        : "?styleMethod=CustomFilters";

    try {
      const response = await fetch(
        `/api/generate-image-eigencode${queryParam}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ promptParts }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setImageUrl(data);
      } else {
        console.error("Image generation failed", data);
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-xl text-blue-400 font-bold mb-6 font-mono">
          Polybiuos AI Image Generator
        </h2>
        <p className="text-blue-200 mb-6 max-w-3xl mx-auto">
          Generate unique AI images with our signature polybiuos style. Create
          branded visuals for your projects, social media, or personal use.
        </p>
        <div className="flex justify-center space-x-3 mt-3">
          <button
            className="px-4 py-1 text-sm bg-blue-800/30 hover:bg-blue-700/30 rounded-full text-blue-300 transition-colors hover:cursor-pointer"
            onClick={() => setShowExamplePrompts(!showExamplePrompts)}
          >
            {showExamplePrompts ? "Hide Examples" : "Show Example Prompts"}
          </button>

          <a
            href="/aura#art-gallery"
            className="px-4 py-1 text-sm bg-zinc-800/50 hover:bg-zinc-700/50 rounded-full text-blue-300 transition-colors hover:cursor-pointer"
          >
            See Community Artwork Gallery
          </a>
        </div>

        {showExamplePrompts && (
          <div className="bg-zinc-900/70 p-6 rounded-lg border border-zinc-800/70 backdrop-blur-sm mt-4">
            <h3 className="text-lg text-blue-300 font-semibold mb-4">
              Example Prompts
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Click on any example to use it as a starting point for your own
              generation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div
                className="bg-zinc-800/50 hover:bg-zinc-700/50 p-4 rounded-md cursor-pointer transition-colors border border-zinc-700/50"
                onClick={() => {
                  setStylePreset("CodeVisualization");
                  setShowExamplePrompts(false);
                }}
              >
                <div
                  className="text-blue-300 font-medium mb-1"
                  onClick={() => {
                    setStylePreset("CodeVisualization");
                    setShowExamplePrompts(false);
                  }}
                >
                  A digital brain made of code
                </div>
                <div
                  className="text-zinc-500 text-xs"
                  onClick={() => {
                    setStylePreset("CodeVisualization");
                    setShowExamplePrompts(false);
                  }}
                >
                  Visualizes a brain formed from digital code elements
                </div>
                <div
                  className="mt-2 inline-block px-2 py-1 text-xs rounded bg-zinc-700/70 text-zinc-300"
                  onClick={() => {
                    setStylePreset("CodeVisualization");
                    setShowExamplePrompts(false);
                  }}
                >
                  Code Visualization
                </div>
              </div>
              <div
                className="bg-zinc-800/50 hover:bg-zinc-700/50 p-4 rounded-md cursor-pointer transition-colors border border-zinc-700/50"
                onClick={() => {
                  setStylePreset("TechConcept");
                  setShowExamplePrompts(false);
                }}
              >
                <div
                  className="text-blue-300 font-medium mb-1"
                  onClick={() => {
                    setStylePreset("TechConcept");
                    setShowExamplePrompts(false);
                  }}
                >
                  Quantum computing concept
                </div>
                <div
                  className="text-zinc-500 text-xs"
                  onClick={() => {
                    setStylePreset("TechConcept");
                    setShowExamplePrompts(false);
                  }}
                >
                  A futuristic representation of quantum computing
                </div>
                <div
                  className="mt-2 inline-block px-2 py-1 text-xs rounded bg-zinc-700/70 text-zinc-300"
                  onClick={() => {
                    setStylePreset("TechConcept");
                    setShowExamplePrompts(false);
                  }}
                >
                  Tech Concept
                </div>
              </div>
              <div
                className="bg-zinc-800/50 hover:bg-zinc-700/50 p-4 rounded-md cursor-pointer transition-colors border border-zinc-700/50"
                onClick={() => {
                  setStylePreset("DigitalAbstract");
                  setShowExamplePrompts(false);
                }}
              >
                <div
                  className="text-blue-300 font-medium mb-1"
                  onClick={() => {
                    setStylePreset("DigitalAbstract");
                    setShowExamplePrompts(false);
                  }}
                >
                  Data flowing through neural networks
                </div>
                <div
                  className="text-zinc-500 text-xs"
                  onClick={() => {
                    setStylePreset("DigitalAbstract");
                    setShowExamplePrompts(false);
                  }}
                >
                  Abstract visualization of data in neural networks
                </div>
                <div
                  className="mt-2 inline-block px-2 py-1 text-xs rounded bg-zinc-700/70 text-zinc-300"
                  onClick={() => {
                    setStylePreset("DigitalAbstract");
                    setShowExamplePrompts(false);
                  }}
                >
                  Digital Abstract
                </div>
              </div>
              <div
                className="bg-zinc-800/50 hover:bg-zinc-700/50 p-4 rounded-md cursor-pointer transition-colors border border-zinc-700/50"
                onClick={() => {
                  setStylePreset("CircuitPattern");
                  setShowExamplePrompts(false);
                }}
              >
                <div
                  className="text-blue-300 font-medium mb-1"
                  onClick={() => {
                    setStylePreset("CircuitPattern");
                    setShowExamplePrompts(false);
                  }}
                >
                  Cybernetic organism interface
                </div>
                <div
                  className="text-zinc-500 text-xs"
                  onClick={() => {
                    setStylePreset("CircuitPattern");
                    setShowExamplePrompts(false);
                  }}
                >
                  Circuit patterns forming a cybernetic organism
                </div>
                <div
                  className="mt-2 inline-block px-2 py-1 text-xs rounded bg-zinc-700/70 text-zinc-300"
                  onClick={() => {
                    setStylePreset("CircuitPattern");
                    setShowExamplePrompts(false);
                  }}
                >
                  Circuit Pattern
                </div>
              </div>
              <div
                className="bg-zinc-800/50 hover:bg-zinc-700/50 p-4 rounded-md cursor-pointer transition-colors border border-zinc-700/50"
                onClick={() => {
                  setStylePreset("DigitalAbstract");
                  setShowExamplePrompts(false);
                }}
              >
                <div
                  className="text-blue-300 font-medium mb-1"
                  onClick={() => {
                    setStylePreset("DigitalAbstract");
                    setShowExamplePrompts(false);
                  }}
                >
                  Digital ecosystem
                </div>
                <div
                  className="text-zinc-500 text-xs"
                  onClick={() => {
                    setStylePreset("DigitalAbstract");
                    setShowExamplePrompts(false);
                  }}
                >
                  An abstract ecosystem represented in digital form
                </div>
                <div
                  className="mt-2 inline-block px-2 py-1 text-xs rounded bg-zinc-700/70 text-zinc-300"
                  onClick={() => {
                    setStylePreset("DigitalAbstract");
                    setShowExamplePrompts(false);
                  }}
                >
                  Digital Abstract
                </div>
              </div>
              <div
                className="bg-zinc-800/50 hover:bg-zinc-700/50 p-4 rounded-md cursor-pointer transition-colors border border-zinc-700/50"
                onClick={() => {
                  setStylePreset("CircuitPattern");
                  setShowExamplePrompts(false);
                }}
              >
                <div
                  className="text-blue-300 font-medium mb-1"
                  onClick={() => {
                    setStylePreset("CircuitPattern");
                    setShowExamplePrompts(false);
                  }}
                >
                  AI consciousness awakening
                </div>
                <div
                  className="text-zinc-500 text-xs"
                  onClick={() => {
                    setStylePreset("CircuitPattern");
                    setShowExamplePrompts(false);
                  }}
                >
                  The visualization of an AI becoming conscious
                </div>
                <div
                  className="mt-2 inline-block px-2 py-1 text-xs rounded bg-zinc-700/70 text-zinc-300"
                  onClick={() => {
                    setStylePreset("CircuitPattern");
                    setShowExamplePrompts(false);
                  }}
                >
                  Circuit Pattern
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900/70 p-6 rounded-lg border border-zinc-800/70 backdrop-blur-sm space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-blue-300 mb-1">
                What would you like to generate?
              </label>
              <textarea
                className="w-full px-3 py-2 bg-zinc-800/70 border border-zinc-700 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`Enter your concept (e.g., "quantum computer",\n"neural network", "space station")`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <div className="space-y-3 border-t border-zinc-800 pt-5">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-blue-300">
                Generation Style
              </h3>
              <button className="text-zinc-500 hover:text-blue-300 transition-colors">
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
                  className="lucide lucide-info w-4 h-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className={`flex flex-col items-center justify-center p-3 rounded-md border transition-all hover:cursor-pointer ${
                  styleMethod === "StylePresets"
                    ? "bg-blue-900/30 border-blue-500/60 text-blue-200"
                    : "bg-zinc-800/30 border-zinc-700/40 text-zinc-400 hover:bg-zinc-800/70"
                }`}
                onClick={() => setStyleMethod("StylePresets")}
              >
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
                  className="lucide lucide-palette w-5 h-5 mb-1"
                >
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
                <span className="text-sm font-medium">Style Presets</span>
              </button>

              <button
                type="button"
                className={`flex flex-col items-center justify-center p-3 rounded-md border transition-all hover:cursor-pointer  ${
                  styleMethod === "CustomFilters"
                    ? "bg-blue-900/30 border-blue-500/60 text-blue-200"
                    : "bg-zinc-800/30 border-zinc-700/40 text-zinc-400 hover:bg-zinc-800/70"
                }`}
                onClick={() => setStyleMethod("CustomFilters")}
              >
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
                  className="lucide lucide-sliders-vertical w-5 h-5 mb-1"
                >
                  <line x1="4" x2="4" y1="21" y2="14" />
                  <line x1="4" x2="4" y1="10" y2="3" />
                  <line x1="12" x2="12" y1="21" y2="12" />
                  <line x1="12" x2="12" y1="8" y2="3" />
                  <line x1="20" x2="20" y1="21" y2="16" />
                  <line x1="20" x2="20" y1="12" y2="3" />
                  <line x1="2" x2="6" y1="14" y2="14" />
                  <line x1="10" x2="14" y1="8" y2="8" />
                  <line x1="18" x2="22" y1="16" y2="16" />
                </svg>
                <span className="text-sm font-medium">Custom Filters</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {styleMethod === "StylePresets" && (
              <div>
                <h3 className="text-sm font-medium text-blue-300 mb-2">
                  Select Style Preset
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      name: "CodeVisualization",
                      label: "Code Visualization",
                      icon: (
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
                          className="lucide lucide-code w-5 h-5"
                        >
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      ),
                      description:
                        "Transforms concepts into code-like visual structures with matrix elements and digital patterns",
                    },
                    {
                      name: "TechConcept",
                      label: "Tech Concept",
                      icon: (
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
                          className="lucide lucide-cpu w-5 h-5"
                        >
                          <rect width="16" height="16" x="4" y="4" rx="2" />
                          <rect width="6" height="6" x="9" y="9" rx="1" />
                          <path d="M15 2v2" />
                          <path d="M15 20v2" />
                          <path d="M2 15h2" />
                          <path d="M2 9h2" />
                          <path d="M20 15h2" />
                          <path d="M20 9h2" />
                          <path d="M9 2v2" />
                          <path d="M9 20v2" />
                        </svg>
                      ),
                      description:
                        "Futuristic technology concepts with circuit board aesthetics and holographic elements",
                    },
                    {
                      name: "DigitalAbstract",
                      label: "Digital Abstract",
                      icon: (
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
                          className="lucide lucide-grid3x3 w-5 h-5"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="M3 9h18" />
                          <path d="M3 15h18" />
                          <path d="M9 3v18" />
                          <path d="M15 3v18" />
                        </svg>
                      ),
                      description:
                        "Abstract digital art with intricate data patterns, particle effects, and flowing polybiuos aesthetic",
                    },
                    {
                      name: "CircuitPattern",
                      label: "Circuit Pattern",
                      icon: (
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
                          className="lucide lucide-circuit-board w-5 h-5"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="M11 9h4a2 2 0 0 0 2-2V3" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
                          <circle cx="15" cy="15" r="2" />
                        </svg>
                      ),
                      description:
                        "Concepts formed from glowing blue circuit patterns with intricate microchip-inspired details",
                    },
                  ].map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      className={`px-4 py-3 rounded-md text-sm transition-all flex flex-col items-start justify-between h-28 border relative overflow-hidden hover:cursor-pointer  ${
                        stylePreset === preset.name
                          ? "bg-gradient-to-br border-blue-500 text-blue-100 shadow-lg shadow-blue-900/30"
                          : "bg-zinc-800/40 border-zinc-700/50 text-zinc-300 hover:bg-zinc-800/80"
                      }`}
                      onClick={() =>
                        setStylePreset(
                          preset.name as
                            | "CodeVisualization"
                            | "TechConcept"
                            | "DigitalAbstract"
                            | "CircuitPattern"
                        )
                      }
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-blue-500/40 to-emerald-500/20 opacity-30 z-0 ${
                          stylePreset === preset.name
                            ? "opacity-30"
                            : "opacity-0"
                        }`}
                      />
                      <div className="relative z-10 flex flex-col h-full w-full">
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              stylePreset === preset.name
                                ? "text-blue-300"
                                : "text-zinc-400"
                            }
                          >
                            {preset.icon}
                          </span>
                          <span className="font-medium">{preset.label}</span>
                        </div>
                        <span className="text-xs opacity-80 text-left mt-2 line-clamp-3">
                          {preset.description}
                        </span>
                        {stylePreset === preset.name && (
                          <div className="absolute bottom-0 right-0 bg-blue-500 px-2 py-1 text-xs font-medium rounded-tl-md">
                            Selected
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-blue-300 mb-3">
                  Adjust Style Parameters
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs text-zinc-300">
                        Blue Intensity
                      </label>
                      <span className="text-xs text-blue-400">
                        {blueIntensity}%
                      </span>
                    </div>
                    <input
                      id="blue-intensity"
                      min="0"
                      max="100"
                      className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      type="range"
                      value={blueIntensity}
                      onChange={(e) => setBlueIntensity(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs text-zinc-300">
                        Glitch Level
                      </label>
                      <span className="text-xs text-blue-400">
                        {glitchLevel}%
                      </span>
                    </div>
                    <input
                      id="glitch-level"
                      min="0"
                      max="100"
                      className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      type="range"
                      value={glitchLevel}
                      onChange={(e) => setGlitchLevel(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs text-zinc-300">
                        Circuit Density
                      </label>
                      <span className="text-xs text-blue-400">
                        {circuitDensity}%
                      </span>
                    </div>
                    <input
                      id="circuit-density"
                      min="0"
                      max="100"
                      className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      type="range"
                      value={circuitDensity}
                      onChange={(e) =>
                        setCircuitDensity(Number(e.target.value))
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-blue-300 mb-2">
                  Image Size
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { name: "Square", label: "1:1 Square (1024×1024)" },
                    { name: "Landscape", label: "16:9 Landscape (1792×1024)" },
                    { name: "Portrait", label: "9:16 Portrait (1024×1792)" },
                  ].map((size) => (
                    <button
                      key={size.name}
                      type="button"
                      className={`px-3 py-2 text-sm rounded-md transition-colors border hover:cursor-pointer  ${
                        imageSize === size.name
                          ? "bg-blue-900/40 border-blue-500/70 text-blue-100"
                          : "bg-zinc-800/40 border-zinc-700/50 text-zinc-300 hover:bg-zinc-800/80"
                      }`}
                      onClick={() =>
                        setImageSize(
                          size.name as "Square" | "Landscape" | "Portrait"
                        )
                      }
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  disabled={loading || !description}
                  className={`w-full py-3 rounded-md font-medium text-white transition-colors hover:cursor-pointer  ${
                    loading || !description
                      ? "bg-blue-700/30 cursor-not-allowed"
                      : "bg-blue-700/50 hover:bg-blue-700/70"
                  }`}
                  onClick={handleGenerateImage}
                >
                  {loading ? "Generating..." : "Generate Image"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-zinc-900/70 p-6 rounded-lg border border-zinc-800/70 backdrop-blur-sm h-full flex flex-col">
            <h3 className="text-sm font-medium text-blue-300 mb-4">
              Generated Image
            </h3>
            <div className="flex-grow flex items-center justify-center rounded-md overflow-hidden bg-zinc-800/50 border border-zinc-700/50">
              {imageUrl ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={`${imageUrl}`}
                    alt="Generated Images"
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Generated Image</span>
                    </div>
                    <div className="text-zinc-300">
                      <p>Style: {styleMethod === "StylePresets" ? stylePreset : "Custom Filters"}</p>
                      <p>Size: {imageSize}</p>
                      <p>Blue: {blueIntensity}% • Glitch: {glitchLevel}% • Circuit: {circuitDensity}%</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {loading ? (
                    <div className="text-center py-12 px-4">
                      <div className="w-16 h-16 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin mb-4 mx-auto"></div>
                      <p className="text-blue-300">
                        Generating your image with polybiuos style...
                      </p>
                      <p className="text-zinc-500 text-sm mt-2">
                        This may take up to 30 seconds
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-8 px-6 max-w-md">
                      <div className="text-4xl mb-4">🎨</div>
                      <h4 className="text-blue-300 font-semibold mb-3">
                        Polybiuos AI Image Generator
                      </h4>
                      <div className="space-y-3 text-sm text-zinc-400">
                        <div className="bg-zinc-800/60 p-3 rounded-lg border border-zinc-700/40">
                          <p className="font-medium text-blue-400 mb-1">✨ What you can create:</p>
                          <p>• Code visualizations & tech concepts</p>
                          <p>• Digital abstract art with circuit patterns</p>
                          <p>• Futuristic designs with polybiuos aesthetics</p>
                        </div>
                        <div className="bg-zinc-800/60 p-3 rounded-lg border border-zinc-700/40">
                          <p className="font-medium text-emerald-400 mb-1">🚀 Features:</p>
                          <p>• Multiple style presets available</p>
                          <p>• Customizable parameters (Blue, Glitch, Circuit)</p>
                          <p>• Various aspect ratios supported</p>
                        </div>
                        <div className="bg-zinc-800/60 p-3 rounded-lg border border-zinc-700/40">
                          <p className="font-medium text-purple-400 mb-1">💡 Getting started:</p>
                          <p>1. Enter your concept description</p>
                          <p>2. Choose a style preset or custom filters</p>
                          <p>3. Adjust parameters to your liking</p>
                          <p>4. Click "Generate Image" to create</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {!loading && imageUrl && (
              <div className="mt-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => window.open(imageUrl)}
                    className="flex-1 py-2 px-4 bg-blue-700 hover:bg-blue-600 rounded text-white transition-colors flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Original
                  </button>

                  <button
                    onClick={() => {
                      if (imageUrl) {
                        navigator.clipboard.writeText(imageUrl);
                      }
                    }}
                    className="py-2 px-4 bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 rounded text-white transition-colors flex items-center justify-center relative"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                    Copy URL
                  </button>

                  <div className="relative">
                    <button
                      // onClick={handleShare}
                      className="py-2 px-4 bg-zinc-700 hover:bg-zinc-600 rounded text-white transition-colors flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
