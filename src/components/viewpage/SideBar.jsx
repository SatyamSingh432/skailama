import "./SideBar.css";
import logo from "../../assets/QuesLogoP.SVG";
import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { GoCopy } from "react-icons/go";
import { RiVipDiamondLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="sidebar-child-container">
        <nav className="sidebar-menu">
          <a href="#" className="sidebar-option active">
            <FaPlus style={{ fontSize: "16px", paddingRight: "0.8rem" }} /> Add
            your Podcast(s)
          </a>
          <a href="#" className="sidebar-option">
            <GoPencil style={{ fontSize: "16px", paddingRight: "0.8rem" }} />{" "}
            Create & Repurpose
          </a>
          <a href="#" className="sidebar-option">
            <GoCopy style={{ fontSize: "16px", paddingRight: "0.8rem" }} />{" "}
            Podcast Widget
          </a>
          <a href="#" className="sidebar-option">
            <RiVipDiamondLine
              style={{ fontSize: "1rem", paddingRight: "1rem" }}
            />
            Upgrade
          </a>
        </nav>
        <hr className="hr" />
        <div className="sidebar-setting">
          <IoSettingsOutline style={{ fontSize: "16px" }} />
          <span>Help</span>
        </div>
        <hr className="hr" />
        <div className="user-profile">
          <div className="profile-pic">
            <img
              src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
              alt=""
            />
          </div>
          <div className="user-info">
            <p className="user-name">Username</p>
            <p className="user-email">username@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
