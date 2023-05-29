import React from 'react'
import LoginButton from '../Components/LoginButton';

// redux toolkit

// importing logo, icons, css styles
import logo from '../asset/logo.svg'
import main from '../asset/main.svg'
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
      <nav className='login-nav'>
        <img src={logo} alt="jobio logo" />
      </nav>
      <img src={main} alt='job hunt' className=' main-img' />

      <div className="login-container">
        <div className="info">
          <h1>Job Tracking App</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui optio, sapiente minima illo deserunt odit inventore mollitia placeat impedit consequuntur adipisci porro similique .</p>
          <LoginButton />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login