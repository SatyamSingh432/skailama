/* eslint-disable react/prop-types */
import { useState } from "react";
import "./UploadModal.css";
import { RxCross2 } from "react-icons/rx";
const UploadModal = ({ isOpen, onClose, heading, setShowList }) => {
  const [projectName, setProjectName] = useState("");
  const [transcript, setTransscript] = useState("");
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(projectName, transcript);
    setTransscript("");
    setProjectName("");
    onClose();
    setShowList(false);
  };
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleCreate}>
          <div className="modal-content-child">
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
            <div className="modal-buttons">
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
