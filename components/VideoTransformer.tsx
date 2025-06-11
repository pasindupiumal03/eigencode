"use client"

import type React from "react"

import { useRef, useState } from "react"

export default function VideoTransformer() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setVideoSrc(url)
    }
  }

  const triggerFileInput = () => fileInputRef.current?.click()

  const processVideo = () => {
    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
    }, 3000)
  }

  return (
    <div className="bg-zinc-900/70 p-6 rounded-lg border border-zinc-800/70 backdrop-blur-sm">
      <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <h3 className="text-blue-400 text-lg font-mono mb-2">Upload Video</h3>
          <p className="text-blue-200 text-sm mb-4">Transform your videos with eigencode aura effects</p>
          <div className="relative mb-6">
            <input
              ref={fileInputRef}
              accept="video/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              type="file"
              onChange={handleVideoUpload}
            />
            <button
              onClick={triggerFileInput}
              className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-blue-200 rounded-md font-mono w-full"
            >
              Select a video file
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-blue-400 text-sm font-mono mb-2">Original Video</h4>
            <div className="aspect-video bg-zinc-950 rounded-md overflow-hidden flex items-center justify-center relative">
              {videoSrc ? (
                <video src={videoSrc} controls className="w-full h-full object-cover" />
              ) : (
                <p className="text-gray-500 font-mono text-sm">No video selected</p>
              )}
            </div>
          </div>
          <div>
            <h4 className="text-blue-400 text-sm font-mono mb-2">Transformed Preview</h4>
            <div className="aspect-video bg-zinc-950 rounded-md overflow-hidden flex items-center justify-center relative">
              {isProcessing ? (
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                  <p className="text-blue-400 font-mono text-sm">Processing...</p>
                </div>
              ) : videoSrc ? (
                <video
                  src={videoSrc}
                  controls
                  className="w-full h-full object-cover filter brightness-110 contrast-125 saturate-150"
                  style={{
                    filter: "brightness(1.1) contrast(1.25) saturate(1.5) hue-rotate(200deg)",
                  }}
                />
              ) : (
                <p className="text-gray-500 font-mono text-sm">Select a video to transform</p>
              )}
            </div>
          </div>
        </div>
        {videoSrc && (
          <div className="mt-4 text-center">
            <button
              onClick={processVideo}
              disabled={isProcessing}
              className="px-6 py-2 bg-blue-700 hover:bg-blue-600 disabled:bg-blue-800 text-white rounded-md font-mono transition-colors"
            >
              {isProcessing ? "Processing..." : "Apply Aura Transform"}
            </button>
          </div>
        )}
        <p className="text-gray-400 text-xs mt-2 text-center">
          For full video processing, the video must be under 10 seconds.
        </p>
      </div>
    </div>
  )
}
