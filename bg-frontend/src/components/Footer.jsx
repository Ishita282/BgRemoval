import React from "react";
import logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram.jpg";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com", "_blank");
  };

  return (
    <footer className="w-full border-t border-white/10 mt-16 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-300">
        {/* LEFT: BRAND */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <img
            src={logo}
            alt="Background Remover Logo"
            className="w-36 opacity-90 hover:opacity-100 transition"
          />

          <p className="text-xs text-gray-500 max-w-xs text-center md:text-left leading-relaxed">
            Remove image backgrounds instantly with AI precision. Fast, simple,
            and free to try.
          </p>
        </div>

        {/* CENTER: COPYRIGHT */}
        <div className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Background Remover. All rights reserved.
        </div>

        {/* RIGHT: SOCIAL */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-xs text-gray-500">Connect</span>

          <div className="flex gap-3">
            <img
              onClick={handleInstagramClick}
              width={34}
              src={instagram_icon}
              alt="Social link"
              className="cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
