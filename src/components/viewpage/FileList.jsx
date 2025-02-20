import "./FileList.css";
const FileList = () => {
  const files = [
    {
      id: 1,
      name: "THE SIDEPOD S2 EPISODE 15",
      date: "25 Oct 23",
      time: "09:04",
    },
    {
      id: 2,
      name: "THE SIDEPOD S2 EPISODE 17",
      date: "27 Oct 23",
      time: "11:08",
    },
    {
      id: 3,
      name: "THE SIDEPOD S2 EPISODE 20",
      date: "31 Oct 23",
      time: "20:28",
    },
    {
      id: 4,
      name: "THE SIDEPOD S2 EPISODE 20",
      date: "31 Oct 23",
      time: "20:28",
    },
    {
      id: 5,
      name: "THE SIDEPOD S2 EPISODE 20",
      date: "31 Oct 23",
      time: "20:28",
    },
    {
      id: 6,
      name: "THE SIDEPOD S2 EPISODE 20",
      date: "31 Oct 23",
      time: "20:28",
    },
    {
      id: 7,
      name: "THE SIDEPOD S2 EPISODE 20",
      date: "31 Oct 23",
      time: "20:28",
    },
  ];

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
            <tr key={file.id}>
              <td>{index + 1}</td>
              <td>{file.name}</td>
              <td>
                {file.date} | {file.time}
              </td>
              <td>
                <button className="view-btn">View</button>
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
