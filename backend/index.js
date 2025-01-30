import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";


import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config();
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// ++++++++++++++++
const PORT=3000;
const db =PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("connected to mongodb");
} catch (error) {
  console.log("Error:", error);
}
// app.use("api/auth",authRoutes)
app.use("/user", userRoute);




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});