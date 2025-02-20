import "./Login.css";
import logo from "../../assets/login.svg";
const Register = ({ setHasAccount }) => {
  const loginHandler = () => {
    setHasAccount(true);
  };

  const registerHandler = () => {};

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
        <form onSubmit={registerHandler} className="form-container">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <div className="confirm-pass">
            <p>Password must be atleast 6 characters length</p>
          </div>
          <input type="password" placeholder="Confirm Password" />

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
