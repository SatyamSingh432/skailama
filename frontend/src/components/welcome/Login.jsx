/* eslint-disable react/prop-types */
import "./Login.css";
import logo from "../../assets/login.svg";
const Login = ({ setHasAccount }) => {
  const registerHandler = () => {
    setHasAccount(false);
  };
  return (
    <div className="login-container">
      <div className="login-child-container">
        <div className="login-header-container">
          <div className="logo-container">
            <img src={logo} alt="" />
          </div>
          <div className="heading-container">
            <p>
              Welcome to <span>Ques.AI</span>
            </p>
          </div>
        </div>
        <div className="form-container">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <div className="rem-for-container">
            <div className="rem-container">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>Forgot password?</p>
          </div>
          <button>Login</button>
          <p>
            Don’t have an account?
            <span onClick={registerHandler}>Create Account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
