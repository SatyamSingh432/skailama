import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./components/welcome/WelcomePage";
import CreateProjectPage from "./components/createpage/CreateProjectPage";
import UploadPage from "./components/viewpage/UploadPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <CreateProjectPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <ProtectedRoute>
              <UploadPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
