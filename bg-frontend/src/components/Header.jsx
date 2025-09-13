import React from "react";
import { useContext } from "react";
import video from "../assets/video.mp4";
import { AppContext } from "../context/AppContext.jsx";

const Header = () => {
  const { removeBg } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mb-14 mt-10 lg:px-44 sm:mt-20">
      {/*Left Side*/}
      <div>
        <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
          {" "}
          Remove the
          <br className="max-md:hidden" />
          <span className="bg-gradient-to-r font-rubik from-blue-600 to-fuchsia-300 bg-clip-text text-transparent">
            {" "}
            Background{" "}
          </span>
          from <br className="max-md:hidden" /> images for free
        </h1>
        <p className="my-6 text-[15px] bg-gradient-to-r font-rubik from-red-300 to-purple-500 bg-clip-text text-transparent w-[90%]">
          Easily remove the background from any image with just one click.
          <br className="max-md:hidden" />
          Whether you're creating product photos, profile pictures, or social
          media content, our powerful background remover delivers clean,
          professional results in seconds—no design skills needed.
          <br className="max-md:hidden" />
          Simply upload your image, and let our smart tool do the rest. Fast,
          free, and effortless.
        </p>
        <div>
          <input
            onChange={(e) => removeBg(e.target.files[0])}
            type="file"
            id="upload1"
            accept="image/*"
            hidden
          />
          <label
            className="inline-flex gap-3 px-8 py-3.5 md:px-6 md:py-2.5 rounded-full cursor-pointer bg-gradient-to-r from-blue-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 text-white"
            htmlFor="upload1"
          >
            <span>Upload Image</span>
          </label>
        </div>
      </div>
      {/* Right side */}
      <div className="w-full max-w-lg">
        <video className="rounded-3xl bg-transparent" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Header;
