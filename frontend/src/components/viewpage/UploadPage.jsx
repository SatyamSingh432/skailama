import SideBar from "./SideBar";
import "./UploadPage.css";
import { useState } from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/cloud_upload.png";
import UploadModal from "./UploadModal";
import FileList from "./FileList";
const UploadPage = () => {
  const [showList, setShowList] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalHeading, setIsModalHeading] = useState({
    heading: "",
    image: "",
  });

  return (
    <>
      <div className="upload-container">
        <SideBar />
        <div className="add-podcast-container">
          <nav className="breadcrumb">
            <span>Home Page</span> / <span>Sample Project</span> /
            <span className="active">Add your podcast</span>
          </nav>
          <h1 className="page-title">Add Podcast</h1>
          <div className="upload-options">
            <div
              className="upload-card"
              onClick={() => {
                setIsModalHeading({
                  heading: "Upload from RSS",
                  image: { image1 },
                });
                setIsModalOpen(true);
              }}
            >
              <div className="upload-card-info">
                <h2>RSS Feed</h2>
                <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
              </div>
              <img src={image1} alt="RSS Feed" className="upload-icon" />
            </div>
            <div
              className="upload-card"
              onClick={() => {
                setIsModalHeading({
                  heading: "Upload from Youtube",
                  image: { image2 },
                });
                setIsModalOpen(true);
              }}
            >
              <div className="upload-card-info">
                <h2>Youtube Video</h2>
                <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
              </div>
              <img src={image2} alt="RSS Feed" className="upload-icon" />
            </div>
            <div
              className="upload-card"
              onClick={() => {
                setIsModalHeading({
                  heading: "Upload Files",
                  image: { image3 },
                });
                setIsModalOpen(true);
              }}
            >
              <div className="upload-card-info">
                <h2>Upload Files</h2>
                <p>Lorem ipsum dolor sit. Dolor lorem sit.</p>
              </div>
              <img src={image3} alt="RSS Feed" className="upload-icon" />
            </div>
          </div>

          <div className="file-upload">
            {showList ? (
              <>
                <img src={image4} alt="" className="cloud-icon" />
                <p className="upload-text">
                  Select a file or drag and drop here (Podcast Media or
                  Transcription Text)
                </p>
                <p className="file-formats">
                  MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
                </p>
                <button className="upload-btn">Select File</button>
              </>
            ) : (
              <FileList />
            )}
          </div>
        </div>
      </div>
      <UploadModal
        isOpen={isModalOpen}
        heading={isModalHeading}
        setShowList={setShowList}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default UploadPage;
