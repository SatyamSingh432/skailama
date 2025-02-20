/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CreatePageModal.css";
const CreateProjectModal = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  const handleCreate = () => {
    if (!projectName.trim()) {
      setError("Project Name Can't be empty");
      return;
    }
    console.log("Project Created:", projectName);
    setProjectName("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-content-child">
          <h2>Create Project</h2>
          <label>Enter Project Name:</label>
          <input
            type="text"
            placeholder="Type here"
            value={projectName}
            onChange={(e) => {
              setProjectName(e.target.value);
              setError("");
            }}
          />
          {error && <p className="error-message">{error}</p>}
          <div className="modal-buttons">
            <button className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button className="create-btn" onClick={handleCreate}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
