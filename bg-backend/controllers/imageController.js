import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import user from "../models/UserModel.js";
import Image from "../models/ImageModel.js";
import dotenv from "dotenv";

dotenv.config();

// ===============================
// REMOVE BACKGROUND
// ===============================
const removeBgImage = async (req, res) => {
  try {
    const userId = req.user?.userId || null;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    const imagePath = req.file.path;
    const imageFile = fs.createReadStream(imagePath);

    const formData = new FormData();
    formData.append("image_file", imageFile);

    let data;

    try {
      const response = await axios.post(
        "https://clipdrop-api.co/remove-background/v1",
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            "X-Api-Key": process.env.CLIPDROP_API,
          },
          responseType: "arraybuffer",
        }
      );

      data = response.data;
    } catch (err) {
      console.log("ClipDrop error:", err.message);
      return res.status(500).json({
        success: false,
        message: "Image processing failed",
      });
    }

    const base64Image = Buffer.from(data, "binary").toString("base64");

    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    // SAFE DB SAVE (guest supported)
    if (userId) {
      await Image.create({
        userId,
        originalImage: req.file.path,
        resultImage,
      });
    }

    return res.json({
      success: true,
      resultImage,
      isGuest: !userId,
    });

  } catch (error) {
    console.error("Error removing background:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
// ===============================
// GET USER HISTORY
// ===============================
const getUserImages = async (req, res) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.json({
        success: true,
        images: [],
        message: "Guest users have no history",
      });
    }

    const images = await Image.find({ userId }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      images,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch images",
    });
  }
};

export { removeBgImage, getUserImages };
