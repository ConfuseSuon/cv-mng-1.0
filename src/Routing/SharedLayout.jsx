import React from 'react'
import NavSideBar from '../Shared-Layout/NavSideBar'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
    return (
        <React.Fragment>
            <NavSideBar />
            <Outlet />
        </React.Fragment>
    )
}

export default SharedLayout