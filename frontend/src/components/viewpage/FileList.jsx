import "./FileList.css";
const FileList = ({ files, editTranscript }) => {
  return (
    <div className="file-list-container">
      <h2>Your Files</h2>
      <table className="file-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={file._id}>
              <td>{index + 1}</td>
              <td>{file.name}</td>
              <td>
                {new Date(file.updatedAt).toLocaleDateString()}{" "}
                {new Date(file.updatedAt).toLocaleTimeString()}
              </td>
              <td>
                <button
                  onClick={() => editTranscript(file)}
                  className="view-btn"
                >
                  View
                </button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
