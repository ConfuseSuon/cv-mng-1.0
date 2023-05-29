import React from 'react'

import { useDispatch } from 'react-redux';
import { setEmailPassword } from '../Features/auth/authSlice';

import { LoginSocialGoogle } from "reactjs-social-login";
import { FcGoogle } from 'react-icons/fc'
import '../style/login.css'


const LoginButton = () => {

  const dispatch = useDispatch()

  return (
    <LoginSocialGoogle
      client_id={
        "787452012575-mfob1gvogbn19figqkn8neiej0b78mfp.apps.googleusercontent.com"
      }
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      onResolve={({ provider, data }) => {
        const { email, access_token, name } = data
        console.log(data)
        console.log(email, access_token, name)
        dispatch(setEmailPassword({ email, access_token, name }))

      }}
      onReject={(err) => {
        console.log(err);
      }}
    >
      <button className='btn login-btn'> <FcGoogle />
        <span>Sign with Google</span>
      </button>
    </LoginSocialGoogle>
  )
}

export default LoginButton