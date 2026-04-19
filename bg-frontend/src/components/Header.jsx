import React, { useContext, useState } from "react";
import video from "../assets/video.mp4";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { removeBg } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    setLoading(true);
    await removeBg(file);
    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-44 mt-16 lg:mt-24 mb-20">

      {/* LEFT CONTENT */}
      <div className="max-w-xl text-center lg:text-left">

        {/* BADGE (NEW UX ELEMENT) */}
        <div className="inline-flex items-center px-3 py-1 mb-5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
          ✨ AI Powered Background Removal
        </div>

        {/* HEADLINE */}
        <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          Remove the{" "}
          <span className="bg-gradient-to-r from-blue-500 to-fuchsia-400 bg-clip-text text-transparent">
            Background
          </span>
          <br />
          from images instantly
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-sm md:text-base text-gray-400 leading-relaxed">
          Upload your image and get a clean, professional background removal in seconds.
          Perfect for products, profile pictures, and social media.
        </p>

        {/* CTA AREA */}
        <div className="mt-8">

          <input
            onChange={(e) => handleFileChange(e.target.files[0])}
            type="file"
            id="upload1"
            accept="image/*"
            hidden
          />

          <label
            htmlFor="upload1"
            className="inline-flex items-center justify-center gap-2 px-10 py-3 rounded-full cursor-pointer
                       bg-gradient-to-r from-blue-600 to-fuchsia-500
                       hover:scale-[1.03] active:scale-[0.98]
                       transition-all duration-300 text-white font-medium shadow-lg shadow-blue-500/20"
          >
            {loading ? "Processing..." : "Upload Image"}
          </label>

          {/* TRUST TEXT */}
          <p className="mt-3 text-xs text-gray-500">
            No signup required • Free preview available
          </p>

        </div>
      </div>

      {/* RIGHT VIDEO */}
      <div className="w-full max-w-lg">

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">

          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>

          {/* SUBTLE OVERLAY FOR PREMIUM FEEL */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        </div>

      </div>

    </div>
  );
};

export default Header;