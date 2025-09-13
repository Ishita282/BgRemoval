import React from "react";
import { assets } from "../assets/assets/assets.js";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20">
      <h1 className="text-center text-2xl md:text-3xl pb-1 lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 md:space-x-5 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 bg-white border p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} alt="Upload Icon" />
          <div>
            <p className="text-xl font-medium">Upload Image</p>
            <p className="text-sm text-black mt-1">
              Click the upload button to select an image from your device.
              Supported formats include JPEG, PNG, and more.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500">
          <img
            className="max-w-9"
            src={assets.remove_bg_icon}
            alt="Remove Icon"
          />
          <div>
            <p className="text-xl font-medium">Remove Background</p>
            <p className="text-sm text-black mt-1">
              Our AI-powered tool automatically detects and removes the
              background from your image, leaving you with a clean subject.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border p-7 pb-10 rounded-lg hover:scale-105 transition-all duration-500">
          <img
            className="max-w-9"
            src={assets.download_icon}
            alt="Download Icon"
          />
          <div>
            <p className="text-xl font-medium">Download Image</p>
            <p className="text-sm text-black mt-1">
              Once the background is removed, you can download the new image in
              high resolution with a transparent background.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg text-white">
          Experience the magic of effortless background removal. Try it now and
          transform your images in seconds!
        </p>
      </div>
    </div>
  );
};

export default Steps;
