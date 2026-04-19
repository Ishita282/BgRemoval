import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Upload = () => {
  const { removeBg } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image.");
      return;
    }

    setLoading(true);
    await removeBg(file);
    setLoading(false);
  };

  return (
    <section id="upload-section">
      <div className="py-28 px-4 flex flex-col items-center text-center">
        {/* HEADING */}
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
            See the magic. Try it now ✨
          </h1>

          <p className="mt-4 text-sm md:text-base text-gray-400">
            Upload your image and watch AI remove the background instantly in
            seconds.
          </p>
        </div>

        {/* CTA CARD AREA */}
        <div className="mt-12 w-full max-w-xl">
          <div
            className="bg-white/5 border border-white/10 backdrop-blur-md
                        rounded-2xl p-10 shadow-xl hover:bg-white/10 transition-all"
          >
            {/* FILE INPUT */}
            <input
              onChange={(e) => handleFileChange(e.target.files[0])}
              type="file"
              id="upload2"
              accept="image/*"
              hidden
            />

            <label
              htmlFor="upload2"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full cursor-pointer
                       bg-gradient-to-r from-blue-600 to-fuchsia-500
                       hover:scale-[1.03] active:scale-[0.98]
                       transition-all duration-300 text-white font-medium
                       shadow-lg shadow-blue-500/20"
            >
              {loading ? "Processing..." : "Upload Image"}
            </label>

            {/* TRUST LINE */}
            <p className="text-sm text-gray-400 mt-6">
              No signup required • Free preview • Instant results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;
