import React from "react";
import logo from "../assets/logo.png";
import { assets } from "../assets/assets/assets.js";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 mb-4">
      <img src={logo} alt="'logo" className="w-40" />
      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-white max-sm:hidden">
        All Rights Reserved &copy: {new Date().getFullYear()} Background
      </p>
      <div className="flex gap-1">
        <img
          width={40}
          src={assets.google_plus_icon}
          alt="linkedIn"
          className="select-none"
        />
      </div>
    </div>
  );
};

export default Footer;
