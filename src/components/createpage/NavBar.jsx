import logo from "../../assets/QuesLogoP.svg";
import "./NavBar.css";
import { FiSettings } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-option">
        <div className="setting">
          <FiSettings />
        </div>
        <div className="notification">
          <IoIosNotificationsOutline />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
