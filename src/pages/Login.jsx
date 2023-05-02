import React from 'react'
import LoginButton from '../components/LoginButton';

// redux toolkit
import { useSelector } from 'react-redux';

// importing logo, icons, css styles
import logo from '../asset/logo.svg'
import main from '../asset/main.svg'
import '../style/login.css'


const Login = () => {

    const { isLogged } = useSelector((store) => store.login)

    console.log(isLogged)



  return (
    <React.Fragment>
        <nav className='login-nav'>
            <img src={logo} alt="jobio logo" />
        </nav>
        <div className="container page">
            <div className="info">
                <h1>Job tracking App</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui optio, sapiente minima illo deserunt odit inventore mollitia placeat impedit consequuntur adipisci porro similique .</p>
      <LoginButton />
            </div>
            <div className="job-hunt">
            <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Login