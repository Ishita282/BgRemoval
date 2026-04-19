import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    originalImage: {
      type: String,
      required: true,
    },
    resultImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Image", imageSchema);