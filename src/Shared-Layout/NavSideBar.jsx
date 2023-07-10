import React from "react";
import { NavLink } from "react-router-dom";

// css and icons
import logo from "../asset/logo.svg";
import "../style/nav-sidebar.css";
import {
  BiHome,
  BiLogOut,
  BiMoon,
  BiDetail,
  BiTask,
  BiBriefcase,
  BiGroup,
} from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logoutFunc } from "../Features/auth/authSlice";
import Loading from "../Components/Loading";

const NavSideBar = () => {
  const dispatch = useDispatch();
  const { closeSideBar } = useSelector((store) => store.sharedFeatures);

  return (
    <React.Fragment>
      <nav className={`${closeSideBar ? "nav-sidebar close" : "nav-sidebar"}`}>
        <div className="logo-container">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <div className="menu-items">
          <ul className="nav-links">
            <li>
              <NavLink to="/">
                <BiHome className="bi-icons" />
                <span className="link-name">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/applicant">
                <AiOutlineFileSearch className="bi-icons" />
                <span className="link-name">Applicant</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/experience">
                <BiHardHat className="bi-icons" />
                <span className="link-name">Experience</span>
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/interview">
                <BiBriefcase className="bi-icons" />
                <span className="link-name">Interview</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/assessment-test">
                <BiTask className="bi-icons" />
                <span className="link-name">Assessment Test</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/offer-letter">
                <BiDetail className="bi-icons" />
                <span className="link-name">Offer Letter</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/interviewer">
                <BiGroup className="bi-icons" />
                <span className="link-name">Interviewer</span>
              </NavLink>
            </li>
          </ul>

          <ul className="logout-mode">
            <li>
              {" "}
              <NavLink
                to="login"
                onClick={() => {
                  dispatch(logoutFunc());
                }}
              >
                {" "}
                <BiLogOut className="bi-icons" />{" "}
                <span className="link-name">Logout</span>
              </NavLink>
            </li>
            {/* <li className='mode'>
              <a href='not'> <BiMoon className='bi-icons' /> <span className='link-name'>Dark Mode</span></a>
              <div className="mode-toggle" >
                <span className='switch'></span>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavSideBar;
