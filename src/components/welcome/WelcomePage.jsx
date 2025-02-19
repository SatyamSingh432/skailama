import "./WelcomePage.css";
import whiteLogo from "../../assets/QuesLogo.svg";
import Login from "./Login";
const WelcomePage = () => {
  return (
    <>
      <div className="welcome-container">
        <div className="about-container">
          <div className="about-child-container">
            <div className="design"></div>
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
          <Login />
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
