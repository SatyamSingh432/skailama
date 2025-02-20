import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import { verifyToken } from "../../utils/api";

import "./WelcomePage.css";
import whiteLogo from "../../assets/QuesLogo.svg";

const WelcomePage = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        return;
      }
      try {
        const data = await verifyToken(token);
        if (data.valid) {
          navigate("/projects");
        }
      } catch (err) {
        console.error(err);
      }
    };
    verify();
  }, [token]);

  return (
    <>
      <div className="welcome-container">
        <div className="about-container">
          <div className="design"></div>
          <div className="about-child-container">
            <div className="about-container-logo">
              <img src={whiteLogo} alt="" style={{ color: "green" }} />
            </div>
            <div className="about-title">
              <h1>Your podcast will no longer be just a hobby.</h1>
            </div>
            <div className="about-info">
              <p>Supercharge Your Distribution using our AI assistant!</p>
            </div>
          </div>
        </div>
        <div className="login-register-container">
          {hasAccount ? (
            <Login setHasAccount={setHasAccount} />
          ) : (
            <Register setHasAccount={setHasAccount} />
          )}
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
