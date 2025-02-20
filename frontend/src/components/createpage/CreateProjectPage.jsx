import { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";
import NavBar from "./NavBar";
import CreateProjectModal from "./CreatePageModal";
import ProjectPage from "./ProjectPage";

import "./CreateProjectPage.css";
import groupImage from "../../assets/Group16.png";
import { createProject, getProjects } from "../../utils/api";

const CreateProjectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allProjects, setAllProjects] = useState([]);

  const token = localStorage.getItem("token");
  const getAllProjects = async () => {
    const result = await getProjects(token);
    if (result.length) {
      setAllProjects(result);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  const createNewProject = async (projectName) => {
    try {
      const res = await createProject(projectName, token);
      if (res) {
        await getAllProjects();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <NavBar />
      {allProjects.length ? (
        <ProjectPage
          allProjects={allProjects}
          openModal={openModal}
          createNewProject={createNewProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      ) : (
        <>
          <div className="create-page-container">
            <div className="create-child-container">
              <h1>Create a New Project</h1>
              <div className="create-image-contaner">
                <img src={groupImage} alt="" />
              </div>
              <div className="create-page-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in
                </p>
              </div>
              <div className="create-page-button">
                <button onClick={openModal}>
                  <IoIosAddCircle style={{ fontSize: "34.29px" }} />
                  <span>Create New Project</span>
                </button>
              </div>
            </div>
          </div>
          <CreateProjectModal
            createNewProject={createNewProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default CreateProjectPage;
