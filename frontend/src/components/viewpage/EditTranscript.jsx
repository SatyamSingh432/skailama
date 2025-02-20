import { IoMdArrowBack } from "react-icons/io";

import "./EditTranscript.css";
import { useState } from "react";

const EditTranscript = ({ editingFile, setEditingFile, saveTranscript }) => {
  const [editingTranscript, setEditingTranscript] = useState(false);
  const [text, setText] = useState(editingFile.transcript);
  console.log({ editingFile });
  const fileId = editingFile._id;
  return (
    <>
      <div className="edit-transcript-header">
        <h1 className="page-title edit-title">
          <IoMdArrowBack
            className="back-button"
            onClick={() => setEditingFile(null)}
          />
          <span>Edit Transcript</span>
        </h1>
        {editingTranscript ? (
          <div>
            <button
              className="transcript-button discard-button"
              onClick={() => setEditingTranscript(false)}
            >
              Discard
            </button>
            <button
              onClick={async () => {
                await saveTranscript(fileId, text);
                setEditingTranscript(false);
              }}
              className="transcript-button"
            >
              Save
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditingTranscript(true)}
            className="transcript-button"
          >
            Edit
          </button>
        )}
      </div>

      <div className="transcript-content">
        <div className="transcript-speaker">Speaker</div>
        {!editingTranscript ? (
          editingFile.transcript
        ) : (
          <textarea
            onChange={(evt) => setText(evt.target.value)}
            className="transcript-textarea"
            value={text}
          ></textarea>
        )}
      </div>
    </>
  );
};

export default EditTranscript;
