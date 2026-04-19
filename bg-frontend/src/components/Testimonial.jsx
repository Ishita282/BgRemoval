import React from "react";
import { testimonialsData } from "../assets/assets/assets.js";

const Testimonial = () => {
  return (
    <div className="py-24 px-4">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold text-white">
          What our users say
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-400">
          Loved by designers, students, and creators worldwide
        </p>
      </div>

      {/* TESTIMONIAL GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-14">

        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/5 border border-white/10 backdrop-blur-md
                       rounded-2xl p-7 shadow-lg hover:bg-white/10
                       hover:scale-[1.02] transition-all duration-300"
          >

            {/* QUOTE ICON */}
            <div className="text-5xl text-white/10 absolute top-4 left-4 font-serif">
              “
            </div>

            {/* TESTIMONIAL TEXT */}
            <p className="text-sm md:text-base text-gray-300 leading-relaxed relative z-10">
              {item.text}
            </p>

            {/* USER INFO */}
            <div className="flex items-center gap-4 mt-8">

              <div>
                <p className="text-sm font-semibold text-white">
                  {item.author}
                </p>
                <p className="text-xs text-gray-400">
                  {item.jobTitle}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Testimonial;