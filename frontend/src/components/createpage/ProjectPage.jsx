import CreateProjectModal from "./CreatePageModal";

import "./ProjectPage.css";
import { IoIosAddCircle } from "react-icons/io";

const ProjectPage = ({
  allProjects,
  openModal,
  createNewProject,
  isOpen,
  onClose,
}) => {
  const getProjectIcon = (str) => {
    let arr = str.split(" ");
    let newStr = [];
    for (let ele of arr) {
      newStr.push(ele[0]);
    }
    return newStr.slice(0, 2).join("");
  };

  return (
    <>
      <div className="project-page">
        <div className="projects-container">
          <div className="projects-header-container">
            <h1>Projects</h1>
            <div className="create-page-button">
              <button onClick={() => openModal()}>
                <IoIosAddCircle style={{ fontSize: "34.29px" }} />
                <span>Create New Project</span>
              </button>
            </div>
          </div>
          <div className="projects-list">
            {allProjects.map((project) => {
              const projectName = project.name;
              return (
                <div key={project._id} className="project-card">
                  <div className="project-icon">
                    {getProjectIcon(projectName)}
                  </div>
                  <div className="project-info">
                    <div className="project-name">
                      <h2>{projectName}</h2>
                      <p>{project.fileCount} Files</p>
                    </div>
                    <p>
                      Lat Edited On:{" "}
                      {new Date(project.updatedAt).toLocaleDateString()}{" "}
                      {new Date(project.updatedAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CreateProjectModal
        createNewProject={createNewProject}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ProjectPage;
