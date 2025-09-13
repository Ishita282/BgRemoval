import React, { useContext } from "react";

const Result = () => {
  const { image, resultImage } = useContext(AppContext);

  return (
    <div className="mx-4 my-3 lg:mx-44 min-h-[75vh]">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        {/* Image Container */}
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
