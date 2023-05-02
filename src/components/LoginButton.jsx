import React from 'react'
import { LoginSocialGoogle } from "reactjs-social-login";
import { FcGoogle } from 'react-icons/fc'
import '../style/login.css'


const LoginButton = () => {
  return (
    <LoginSocialGoogle 
    client_id={
      "787452012575-mfob1gvogbn19figqkn8neiej0b78mfp.apps.googleusercontent.com"
    }
    scope="openid profile email"
    discoveryDocs="claims_supported"
    access_type="offline"
    onResolve={({ provider, data }) => {
      console.log(provider,data)
    }}
    onReject={(err) => {
      console.log(err);
    }}
  >
  <button className='btn login-btn'> <FcGoogle/>
                <span>Sign with Google</span>
        </button>
  </LoginSocialGoogle>
  )
}

export default LoginButton