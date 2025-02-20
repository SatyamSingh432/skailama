import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./components/welcome/WelcomePage";
import CreateProjectPage from "./components/createpage/CreateProjectPage";
import ProjectPage from "./components/createpage/ProjectPage";
import UploadPage from "./components/viewpage/UploadPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route
          path="/createprojectpage"
          element={
            <ProtectedRoute>
              <CreateProjectPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/projectpage"
          elementt={
            <ProtectedRoute>
              <ProjectPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/uploadpage"
          element={
            <ProtectedRoute>
              <UploadPage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
