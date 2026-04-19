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

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.use("/users", userRouter);
app.use("/images", imageRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
