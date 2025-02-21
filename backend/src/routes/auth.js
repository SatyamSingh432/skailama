import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user_id: newUser._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.json({ token, user_id: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Verify Token
router.get("/verify", async (req, res) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ valid: false, message: "No token provided" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, userId: verified.id });
  } catch (err) {
    res.status(401).json({ valid: false, message: "Invalid token" });
  }
});

export default router;
