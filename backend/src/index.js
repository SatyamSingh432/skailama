import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/auth.js";
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.use(authRouter);

app.get("/testauth", authMiddleware, (req, res) => {
  const user = req.user;
  res.json({ msg: "hello world", user });
});
