import mongoose from "mongoose";

const FileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    transcript: { type: String, required: true },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
  },
  { timestamps: true }
);

const File = mongoose.model("File", FileSchema);
export default File;
