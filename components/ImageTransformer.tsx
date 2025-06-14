"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";

export default function ImageTransformer() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [finalImage, setFinalImage] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blueOverlay: 0,
    matrixEffect: false,
  });
  const [previewFilters, setPreviewFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blueOverlay: 0,
    matrixEffect: false,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setFinalImage(null);
        setPreviewFilters({
          brightness: 100,
          contrast: 100,
          saturation: 100,
          blueOverlay: 0,
          matrixEffect: false,
        });
        setFilters({
          brightness: 100,
          contrast: 100,
          saturation: 100,
          blueOverlay: 0,
          matrixEffect: false,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  const resetAll = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setImageSrc(null);
    setFinalImage(null);
    setPreviewFilters({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      blueOverlay: 0,
      matrixEffect: false,
    });
    setFilters({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      blueOverlay: 0,
      matrixEffect: false,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const applyFilters = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!imageSrc || !canvasRef.current) {
      console.error("No image source or canvas available");
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas context not available");
      return;
    }

    const img = new Image();
    img.onload = () => {
      try {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.filter = `brightness(${previewFilters.brightness}%) contrast(${previewFilters.contrast}%) saturate(${previewFilters.saturation}%)`;
        ctx.drawImage(img, 0, 0);

        ctx.globalAlpha = previewFilters.blueOverlay / 100;
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;

        if (previewFilters.matrixEffect) {
          ctx.font = "12px monospace";
          ctx.fillStyle = "rgba(0, 255, 0, 0.4)";
          const text = "01001000\n11001001\n10010110\n00101100\n11010001";
          const lines = text.split("\n");
          const lineHeight = 14;
          for (let i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], 10, 10 + i * lineHeight);
          }
        }

        setFinalImage(canvas.toDataURL("image/png"));
        setFilters(previewFilters);
      } catch (error) {
        console.error("Error applying filters:", error);
      }
    };
    img.onerror = () => {
      console.error("Error loading image");
    };
    img.src = imageSrc;
  };

  const downloadImage = () => {
    if (!finalImage) return;
    const link = document.createElement("a");
    link.href = finalImage;
    link.download = "transformed-image.png";
    link.click();
  };

  const previewFilterStyle = {
    filter: `brightness(${previewFilters.brightness}%) contrast(${previewFilters.contrast}%) saturate(${previewFilters.saturation}%)`,
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-zinc-900 backdrop-blur-lg p-6 rounded-lg transition-all duration-300 animated-border">
          <div
            className="border-2 border-dashed border-blue-500/30 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/60 transition-all min-h-[300px] relative"
            onClick={triggerFileInput}
          >
            <input
              className="hidden"
              accept="image/*"
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            {imageSrc ? (
              <>
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={imageSrc || "/placeholder.svg"}
                    alt="Uploaded"
                    className="max-w-full max-h-full rounded"
                    style={previewFilterStyle}
                  />
                  <div
                    className="absolute inset-0 bg-blue-500 rounded opacity-50 pointer-events-none"
                    style={{ opacity: previewFilters.blueOverlay / 100 }}
                  ></div>
                  {previewFilters.matrixEffect && (
                    <div className="absolute inset-0 text-green-500 text-xs font-mono opacity-40 pointer-events-none animate-pulse">
                      <div className="p-2 whitespace-pre-wrap">
                        {"01001000\n11001001\n10010110\n00101100\n11010001"}
                      </div>
                    </div>
                  )}
                  <button
                    className="absolute text-gray-400 hover:text-white top-2 right-2 p-1 rounded-full transition"
                    onClick={resetAll}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-circle-x w-5 h-5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m15 9-6 6"></path>
                      <path d="m9 9 6 6"></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 m-2 mt-4 rounded shadow-lg transform hover:scale-105 transition duration-300 flex items-center gap-2"
                    onClick={applyFilters}
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
                      className="lucide lucide-cpu w-4 h-4"
                    >
                      <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                      <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                      <path d="M15 2v2"></path>
                      <path d="M15 20v2"></path>
                      <path d="M2 15h2"></path>
                      <path d="M2 9h2"></path>
                      <path d="M20 15h2"></path>
                      <path d="M20 9h2"></path>
                      <path d="M9 2v2"></path>
                      <path d="M9 20v2"></path>
                    </svg>
                    Apply Polybiuos Filter
                  </button>
                </div>
              </>
            ) : (
              <>
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
                  className="lucide lucide-upload w-16 h-16 text-blue-400 mb-4 animate-float"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" x2="12" y1="3" y2="15"></line>
                </svg>
                <h3 className="font-bold mb-2 text-center text-blue-400">
                  Upload Image
                </h3>
                <p className="text-gray-400 text-center text-sm">
                  Click or drag an image here
                </p>
              </>
            )}
          </div>
        </div>

        <div className="bg-zinc-900 backdrop-blur-lg p-6 rounded-lg transition-all duration-300 animated-border">
          <div className="border-2 border-blue-500/30 rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px] relative">
            {finalImage ? (
              <>
                <img
                  src={finalImage || "/placeholder.svg"}
                  alt="Transformed"
                  className="max-w-full max-h-full rounded"
                />
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow-lg transform hover:scale-105 transition duration-300 flex items-center gap-2"
                    onClick={downloadImage}
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
                      className="lucide lucide-download w-4 h-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    Download Image
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-blue-400/50 mb-4 text-6xl">⟁</div>
                <h3 className="font-bold mb-2 text-center text-blue-400/50">
                  Transformed Result
                </h3>
                <p className="text-gray-400 text-center text-sm">
                  Apply filter to see the result
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {imageSrc && (
        <div className="mt-8 bg-zinc-900/50 p-4 rounded-lg border border-blue-500/20">
          <button
            className="w-full bg-zinc-900/50 p-3 rounded-lg border border-blue-500/20 flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <div className="flex items-center gap-2">
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
                className="lucide lucide-sliders-vertical w-4 h-4 text-blue-400"
              >
                <line x1="4" x2="4" y1="21" y2="14"></line>
                <line x1="4" x2="4" y1="10" y2="3"></line>
                <line x1="12" x2="12" y1="21" y2="12"></line>
                <line x1="12" x2="14" y1="12" y2="12"></line>
                <line x1="20" x2="20" y1="21" y2="16"></line>
                <line x1="20" x2="20" y1="12" y2="3"></line>
                <line x1="6" x2="10" y1="14" y2="14"></line>
                <line x1="10" x2="14" y1="8" y2="8"></line>
                <line x1="18" x2="22" y1="16" y2="16"></line>
              </svg>
              <span className="font-bold">Filter Settings</span>
            </div>
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
              className={`lucide lucide-chevron-${
                isFilterOpen ? "down" : "up"
              } w-4 h-4 text-blue-400 transition-transform duration-200`}
            >
              <path d={isFilterOpen ? "m18 15-6-6-6 6" : "m6 9 6 6 6-6"}></path>
            </svg>
          </button>
          {isFilterOpen && (
            <div className="mt-2 bg-zinc-900/50 p-4 rounded-lg border border-blue-500/20 space-y-4 transition-all">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Brightness: {previewFilters.brightness}%
                </label>
                <input
                  min="50"
                  max="150"
                  className="w-full h-2 bg-blue-900/30 rounded-lg appearance-none cursor-pointer"
                  type="range"
                  value={previewFilters.brightness}
                  onChange={(e) =>
                    setPreviewFilters({
                      ...previewFilters,
                      brightness: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Contrast: {previewFilters.contrast}%
                </label>
                <input
                  min="50"
                  max="150"
                  className="w-full h-2 bg-blue-900/30 rounded-lg appearance-none cursor-pointer"
                  type="range"
                  value={previewFilters.contrast}
                  onChange={(e) =>
                    setPreviewFilters({
                      ...previewFilters,
                      contrast: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Saturation: {previewFilters.saturation}%
                </label>
                <input
                  min="0"
                  max="200"
                  className="w-full h-2 bg-blue-900/30 rounded-lg appearance-none cursor-pointer"
                  type="range"
                  value={previewFilters.saturation}
                  onChange={(e) =>
                    setPreviewFilters({
                      ...previewFilters,
                      saturation: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Blue Overlay: {previewFilters.blueOverlay}%
                </label>
                <input
                  min="0"
                  max="100"
                  className="w-full h-2 bg-blue-900/30 rounded-lg appearance-none cursor-pointer"
                  type="range"
                  value={previewFilters.blueOverlay}
                  onChange={(e) =>
                    setPreviewFilters({
                      ...previewFilters,
                      blueOverlay: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={previewFilters.matrixEffect}
                  onChange={(e) =>
                    setPreviewFilters({
                      ...previewFilters,
                      matrixEffect: e.target.checked,
                    })
                  }
                />
                <label className="text-white">Matrix Effect</label>
              </div>
            </div>
          )}
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
