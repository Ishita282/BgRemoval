import express from "express";
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";
import { removeBgImage, getUserImages } from "../controllers/imageController.js";

const imageRouter = express.Router();

imageRouter.post(
  "/removeBg",
  upload.single("image"),
  auth("optional"),
  removeBgImage
);

imageRouter.get(
  "/history",
  auth("strict"),
  getUserImages
);

export default imageRouter;