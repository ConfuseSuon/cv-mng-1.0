import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSideBar from '../components/NavSideBar'
import MainSection from '../components/MainSection'

const Home = () => {
  return (
    <React.Fragment>
       <NavSideBar/>
       <MainSection/>
       <Outlet />
    </React.Fragment>
  )
}

export default Home