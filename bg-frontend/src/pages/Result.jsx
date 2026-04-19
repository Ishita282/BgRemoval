import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const { image, resultImage, loading, resetImage } = useContext(AppContext);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (!image) return;

    const url = URL.createObjectURL(image);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [image]);

  return (
    <div className="min-h-[75vh] px-4 lg:px-44 py-10 bg-gradient-to-b from-black via-[#070A12] to-black text-white">
      {/* MAIN CARD */}
      <div
        className="bg-white/5 border border-white/10 backdrop-blur-xl
                      rounded-2xl p-6 lg:p-10 shadow-2xl"
      >
        {/* TITLE */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Your Result is Ready ✨
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            AI has removed the background in seconds
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* ORIGINAL */}
          <div className="space-y-2">
            <p className="text-sm text-gray-400">Original Image</p>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20 min-h-[250px] flex items-center justify-center">
              {previewUrl ? (
                <img
                  className="w-full h-full object-contain"
                  src={previewUrl}
                  alt="original"
                />
              ) : (
                <p className="text-gray-500 text-sm">No image selected</p>
              )}
            </div>
          </div>

          {/* RESULT */}
          <div className="space-y-2">
            <p className="text-sm text-gray-400">Background Removed</p>

            <div className="rounded-xl overflow-hidden border border-fuchsia-500/20 bg-gradient-to-br from-white/5 to-white/0 min-h-[250px] flex items-center justify-center relative">
              {resultImage ? (
                <img
                  className="w-full h-full object-contain"
                  src={resultImage}
                  alt="result"
                />
              ) : loading ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-10 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-gray-400">
                    Processing AI magic...
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Result will appear here</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* DOWNLOAD CTA */}
      {resultImage && (
        <div className="flex justify-center sm:justify-end mt-8">
          <a
            href={resultImage}
            download
            className="px-10 py-3 rounded-full text-white font-medium
                       bg-gradient-to-r from-blue-600 to-fuchsia-500
                       hover:scale-[1.03] active:scale-[0.98]
                       transition-all duration-300 shadow-lg shadow-fuchsia-500/20"
          >
            Download Image
          </a>
        </div>
      )}

      {resultImage && (
        <div className="flex justify-center mt-4">
          <button
            onClick={resetImage}
            className="px-8 py-3 rounded-full text-white font-medium
                 bg-white/10 border border-white/20
                 hover:bg-white/20 transition-all duration-300"
          >
            Try Another Image
          </button>
        </div>
      )}
    </div>
  );
};

export default Result;
