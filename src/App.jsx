import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcome/WelcomePage";
import CreateProjectPage from "./components/createpage/CreateProjectPage";
import ProjectPage from "./components/createpage/ProjectPage";
import UploadPage from "./components/viewpage/UploadPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={WelcomePage}></Route>
        <Route path="/createprojectpage" Component={CreateProjectPage}></Route>
        <Route path="/projectpage" Component={ProjectPage}></Route>
        <Route path="/uploadpage" Component={UploadPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
