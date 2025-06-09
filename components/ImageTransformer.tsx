"use client";

import { useRef, useState } from "react";

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

  const resetAll = () => {
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

  const applyFilters = () => {
    if (!imageSrc || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
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
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={imageSrc}
                  alt="Uploaded"
                  className="max-w-full max-h-full rounded"
                  style={finalImage ? {} : previewFilterStyle}
                />
                {!finalImage && (
                  <>
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
                  </>
                )}
                <button
                  className="absolute top-2 right-2 p-1 bg-red-500 rounded-full hover:bg-red-600 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    resetAll();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
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
              <img
                src={finalImage}
                alt="Transformed"
                className="max-w-full max-h-full rounded"
              />
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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(previewFilters).map((key) =>
            key !== "matrixEffect" ? (
              <div key={key} className="flex flex-col">
                <label className="text-sm capitalize text-white mb-1">
                  {key}
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={
                    previewFilters[key as keyof typeof previewFilters] as number
                  }
                  onChange={(e) =>
                    setPreviewFilters({
                      ...previewFilters,
                      [key]: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            ) : null
          )}

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

          <div className="flex justify-end">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              onClick={applyFilters}
            >
              Apply Filter
            </button>
          </div>

          {finalImage && (
            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                onClick={downloadImage}
              >
                Download Image
              </button>
            </div>
          )}
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
