import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/login.svg";
import { registerUser } from "../../utils/api";

const Register = ({ setHasAccount }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState(null);

  const loginHandler = () => {
    setHasAccount(true);
  };

  const registerHandler = async (evt) => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      setErr("Password don't match");
    }
    const res = await registerUser(email, password);
    if (res.error) {
      setErr('Registration failed. Please try again later."');
    } else {
      navigate("/projects");
    }
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
        {err && <div>{err}</div>}
        <form onSubmit={registerHandler} className="form-container">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <div className="confirm-pass">
            <p>Password must be atleast 6 characters length</p>
          </div>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">Register Now</button>
          <p>
            Already have an account?{" "}
            <span onClick={loginHandler}>Login here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
