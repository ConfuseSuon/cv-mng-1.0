import React from 'react'
import { Link } from 'react-router-dom'
import errorImage from '../asset/not_found.svg'
import '../style/not-found.css'

const NotFound = () => {
  return (
    <div className='error-container'>
        <img src={errorImage} alt="" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
    </div>
  )
}

export default NotFound