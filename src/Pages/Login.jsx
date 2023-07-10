import React from 'react'
import LoginButton from '../Components/LoginButton';

// redux toolkit

// importing logo, icons, css styles
import logo from '../asset/logo.svg'
import main from '../asset/loginPageImage.svg'
import '../style/login.css'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Login = () => {

  const { isLogged } = useSelector((store) => store.auth)

  if (isLogged) {
    return <Navigate to="/" />
  }

  return (
    <React.Fragment>
      <div className="login-page-container">

        <nav className='login-nav'>
          <img src={logo} alt="jobio logo" />
        </nav>

        <div className="login-main-content">

          <div className="login-container">
            <div className="info">
              <h1>Job Tracking App </h1>
              <p> Easily manage and track the progress of each application, set reminders for deadlines and interviews, and store important details all in one place. Take control of your job applications and streamline your job search process with the Job Tracking App.</p>
              <LoginButton />
            </div>
          </div>

          <div className="main-img-container">
            <img src={main} alt='job hunt' className=' main-img' />
          </div>

        </div>


      </div>
    </React.Fragment>
  )
}

export default Login