import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import Project from "../models/Project.js";
import File from "../models/File.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name } = req.body;
    const project = new Project({ name, user: req.user.id });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id }).lean();
    const projectsWithFileCount = await Promise.all(
      projects.map(async (project) => {
        const fileCount = await File.countDocuments({ project: project._id });
        return { ...project, fileCount };
      })
    );
    res.json(projectsWithFileCount);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:projectId", authMiddleware, async (req, res) => {
  try {
    const project = await Project.findById({
      _id: req.params.projectId,
    });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
