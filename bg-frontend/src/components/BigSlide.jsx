import React, { useState } from "react";
import womenwithbg from "../assets/womenwithbg.jpg";
import womenwithoutbg from "../assets/womenwithoutbg.jpg";

const BigSlide = () => {
  const [slider, setSlider] = useState(50);

  const reversed = 100 - slider;

  return (
    <div className="py-14 md:py-24 px-4 flex flex-col items-center">

      {/* TITLE SECTION */}
      <div className="text-center mb-10 md:mb-14 max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
          Remove Background with High <br className="hidden md:block" />
          Quality and Accuracy
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-400">
          Drag the slider to compare before and after results instantly
        </p>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="w-full max-w-4xl">

        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[420px] bg-black/20">

          {/* BEFORE IMAGE */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-300 ease-out"
            style={{ width: `${reversed}%` }}
          >
            <img
              src={womenwithbg}
              className="h-full w-full object-cover scale-[1.02]"
              alt="Before"
            />
          </div>

          {/* AFTER IMAGE */}
          <div
            className="absolute top-0 right-0 h-full overflow-hidden transition-all duration-300 ease-out"
            style={{ width: `${slider}%` }}
          >
            <img
              src={womenwithoutbg}
              className="h-full w-full object-cover scale-[1.02]"
              alt="After"
            />
          </div>

          {/* CENTER DIVIDER */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white/80 shadow-lg z-10"
            style={{ left: `${reversed}%` }}
          />

          {/* DRAG AREA */}
          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />

          {/* LABELS */}
          <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
            Before
          </div>

          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
            After
          </div>

        </div>

        {/* BOTTOM SLIDER CONTROL */}
        <div className="mt-8 px-2">

          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="w-full h-1.5 accent-blue-500 cursor-pointer"
          />

          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Original Image</span>
            <span>Processed Result</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BigSlide;