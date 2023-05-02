import React, {  } from 'react'
import logo from '../asset/logo.svg'
import '../style/nav-sidebar.css'
import { BiHome, BiLogOut, BiMoon, BiDetail, BiTask, BiBriefcase, BiGroup} from 'react-icons/bi'
import { AiOutlineFileSearch } from 'react-icons/ai'


import { NavLink } from 'react-router-dom'

const NavSideBar = () => {

  const toggleMode = () =>{

  }

  return (
    <React.Fragment>

    <nav className='nav-sidebar'>
      <div class="logo-container">
          <img src={logo} alt="" />
        </div>

      <div class="menu-items">
        <ul class="nav-links">
          <li>
         <NavLink exact to="/">
            <BiHome className="bi-icons" />
            <span className="link-name">Home</span>
          </NavLink>
          </li>
          <li>
         <NavLink exact to="/applicant">
            <AiOutlineFileSearch className="bi-icons" />
            <span className="link-name">Applicant</span>
          </NavLink>
          </li>
          <li>
         <NavLink exact to="/interview">
            <BiBriefcase className="bi-icons" />
            <span className="link-name">Interview</span>
          </NavLink>
          </li>
          <li>
         <NavLink exact to="/assesment-test">
            <BiTask className="bi-icons" />
            <span className="link-name">Assessment Test</span>
          </NavLink>
          </li>
          <li>
         <NavLink exact to="/offer-letter">
            <BiDetail className="bi-icons" />
            <span className="link-name">Offer Letter</span>
          </NavLink>
          </li>
           <li>
         <NavLink exact to="/interviewer">
            <BiGroup className="bi-icons" />
            <span className="link-name">Interviewer</span>
          </NavLink>
          </li>
        </ul>

        <ul className="logout-mode">
        <li> <a href="../"> <BiLogOut className='bi-icons' /> <span className='link-name'>Logout</span></a></li>
        <li className='mode'> 
        <a href="../"> <BiMoon className='bi-icons' /> <span className='link-name'>Dark Mode</span></a>
        <div className="mode-toggle" onClick={()=>toggleMode()}>
        <span className='switch'></span>
        </div>
        </li>
        </ul>
      </div>
    </nav>
    </React.Fragment>
  )
}

export default NavSideBar