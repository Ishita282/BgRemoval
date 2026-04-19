import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get(
          `${backendUrl}/images/history`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (data.success) {
          setImages(data.images);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [backendUrl, token]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>

      {images.length === 0 ? (
        <p className="text-gray-400">No images yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img._id}
              className="bg-white/5 border border-white/10 rounded-xl p-3"
            >
              <img
                src={img.resultImage}
                className="rounded-lg mb-2"
              />
              <a
                href={img.resultImage}
                download
                className="text-sm text-blue-400"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;