export default function VideoTransformer() {

  return (
    <div className="bg-zinc-900/70 p-6 rounded-lg border border-zinc-800/70 backdrop-blur-sm">
      <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <h3 className="text-blue-400 text-lg font-mono mb-2">Upload Video</h3>
          <p className="text-blue-200 text-sm mb-4">
            Transform your videos with eigencode aura effects
          </p>
          <div className="relative mb-6">
            <input
              accept="video/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              type="file"
            ></input>
            <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-blue-200 rounded-md font-mono w-full ">
              Select a video file
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-blue-400 text-sm font-mono mb-2">
              Original Video
            </h4>
            <div className="aspect-video bg-zinc-950 rounded-md overflow-hidden flex items-center justify-center relative">
              <p className="text-gray-500 font-mono text-sm">
                No video selected
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-blue-400 text-sm font-mono mb-2">
              Transformed Preview
            </h4>
            <div className="aspect-video bg-zinc-950 rounded-md overflow-hidden flex items-center justify-center relative">
              <p className="text-gray-500 font-mono text-sm">
                Select a video to transform
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-2 text-center">
          For full video processing, the video must be under 10 seconds.
        </p>
      </div>
    </div>
  );
}