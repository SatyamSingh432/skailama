import { useState } from "react";
import "./UploadModal.css";
import { RxCross2 } from "react-icons/rx";
import { createFile } from "../../utils/api";

const UploadModal = ({
  isOpen,
  onClose,
  heading,
  projectId,
  getFilesOfProject,
}) => {
  const [projectName, setProjectName] = useState("");
  const [transcript, setTransscript] = useState("");
  const token = localStorage.getItem("token");
  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(projectName, transcript);
    await createFile(projectName, transcript, projectId, token);
    await getFilesOfProject();
    setTransscript("");
    setProjectName("");
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="upload-modal-overlay">
      <div className="upload-modal-content">
        <form onSubmit={handleCreate}>
          <div className="upload-modal-content-child">
            <div className="header-nav">
              <h2>{heading.heading}</h2>
              <RxCross2
                style={{ fontSize: "40px", cursor: "pointer" }}
                onClick={() => {
                  onClose();
                }}
              />
            </div>
            <label>Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
              required
            />
            <label>Transcript</label>
            <textarea
              className="textarea"
              id="txt"
              required
              onChange={(e) => {
                setTransscript(e.target.value);
              }}
            ></textarea>
            <div className="upload-modal-buttons">
              <button className="create-btn" type="submit">
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
