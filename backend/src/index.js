import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/auth.js";
import projectRoutes from "./routes/project.js";
import fileRoutes from "./routes/file.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/projects", projectRoutes);
app.use("/api/files", fileRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
