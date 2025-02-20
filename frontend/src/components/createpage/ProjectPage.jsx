import NavBar from "./NavBar";
import "./ProjectPage.css";
import { IoIosAddCircle } from "react-icons/io";
const ProjectPage = () => {
  let projectName = "Sample Project";
  const shortName = (str) => {
    let arr = str.split(" ");
    let newStr = [];
    for (let ele of arr) {
      newStr.push(ele[0]);
    }
    return newStr.join("");
  };
  let finalName = shortName(projectName);
  return (
    <div className="project-page">
      <NavBar />
      <div className="projects-container">
        <div className="projects-header-container">
          <h1>Projects</h1>
          <div className="create-page-button">
            <button>
              <IoIosAddCircle style={{ fontSize: "34.29px" }} />
              <span>Create New Project</span>
            </button>
          </div>
        </div>
        <div className="projects-list">
          <div className="project-card">
            <div className="project-icon">{finalName}</div>
            <div className="project-info">
              <div className="project-name">
                <h2>{projectName}</h2>
                <p>4 Files</p>
              </div>
              <p>Last edited a week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
