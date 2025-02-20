import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../utils/api";
import "./Login.css";
import logo from "../../assets/login.svg";

const Login = ({ setHasAccount }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    setErr(null);
    const res = await loginUser(email, password);
    if (res.token) {
      navigate("/projects");
    }
    setErr("Invalid username or password");
  };

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
        {/* TODO: Make error red and beautiful */}
        {err && <div>{err}</div>}
        <form onSubmit={loginHandler} className="form-container">
          <input
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />
          <div className="rem-for-container">
            <div className="rem-container">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>Forgot password?</p>
          </div>
          <button type="submit">Login</button>
          <p>
            Don’t have an account?
            <span onClick={registerHandler}>Create Account</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
