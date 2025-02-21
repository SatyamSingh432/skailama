import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import File from "../models/File.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, transcript, project } = req.body;
    const file = new File({ name, transcript, project });
    await file.save();
    res.status(201).json(file);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:projectId", authMiddleware, async (req, res) => {
  try {
    const files = await File.find({ project: req.params.projectId });
    res.json(files);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { transcript } = req.body;
    const updatedFile = await File.findByIdAndUpdate(
      req.params.id,
      { transcript },
      { new: true }
    );
    res.json(updatedFile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
