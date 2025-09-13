import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongoDB.js";
import userRouter from "./routes/userRoute.js";
import imageRouter from "./routes/imageRoute.js";

dotenv.config();

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/images", imageRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
