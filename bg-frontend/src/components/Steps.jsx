import React from "react";
import { assets } from "../assets/assets/assets.js";

const stepsData = [
  {
    icon: assets.upload_icon,
    title: "Upload Image",
    description:
      "Select any image from your device. Supports JPG, PNG and more.",
  },
  {
    icon: assets.remove_bg_icon,
    title: "Remove Background",
    description:
      "Our AI automatically removes the background in seconds with high accuracy.",
  },
  {
    icon: assets.download_icon,
    title: "Download Image",
    description:
      "Download your image in high quality with a transparent background.",
  },
];

const Steps = () => {

  const handleCTAClick = () => {
    const uploadSection = document.getElementById("upload-section");
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="mx-4 lg:mx-44 py-24">
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold text-white">
          Remove background in 3 simple steps
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-400">
          No complexity. No editing skills required. Just upload and download.
        </p>
      </div>

      {/* STEPS FLOW */}
      <div className="relative mt-16 flex flex-col lg:flex-row gap-10 justify-center items-stretch">
        {/* CONNECTING LINE (desktop only UX polish) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/10" />

        {stepsData.map((step, index) => (
          <div
            key={index}
            className="relative flex-1 bg-white/5 border border-white/10 backdrop-blur-md
                       p-6 rounded-2xl hover:bg-white/10 transition-all duration-300
                       hover:scale-[1.02] z-10"
          >
            {/* STEP NUMBER BADGE */}
            <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg">
              {index + 1}
            </div>

            {/* ICON */}
            <div className="mb-4">
              <img
                className="w-10 opacity-90"
                src={step.icon}
                alt={step.title}
              />
            </div>

            {/* TITLE */}
            <p className="text-lg font-semibold text-white">{step.title}</p>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 mb-5 text-sm md:text-base">
          Ready to transform your images instantly?
        </p>

        <button
        onClick={handleCTAClick}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-500
                           text-white font-medium shadow-lg shadow-blue-500/20
                           hover:scale-[1.03] active:scale-[0.98]
                           transition-all duration-300"
        >
          Try It Now →
        </button>
      </div>
    </div>
  );
};

export default Steps;
