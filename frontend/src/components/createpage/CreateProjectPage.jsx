import NavBar from "./NavBar";
import groupImage from "../../assets/Group16.png";
import { useState } from "react";
import "./CreateProjectPage.css";
import { IoIosAddCircle } from "react-icons/io";
import CreateProjectModal from "./CreatePageModal";
const CreateProjectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <NavBar />
      <div className="create-page-container">
        <div className="create-child-container">
          <h1>Create a New Project</h1>
          <div className="create-image-contaner">
            <img src={groupImage} alt="" />
          </div>
          <div className="create-page-info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in
            </p>
          </div>
          <div className="create-page-button">
            <button onClick={() => setIsModalOpen(true)}>
              <IoIosAddCircle style={{ fontSize: "34.29px" }} />
              <span>Create New Project</span>
            </button>
          </div>
        </div>
      </div>
      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CreateProjectPage;
