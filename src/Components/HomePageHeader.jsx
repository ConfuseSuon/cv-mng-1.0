import React from 'react'
import SidebarToggle from '../Shared-Layout/SidebarToggle'
import { useSelector } from 'react-redux'

import userImg from '../asset/pp1.jpg'
import { BiSearchAlt } from 'react-icons/bi'
import homeStyles from '../style/home.module.css'

const HomePageHeader = () => {

    const getUserInfo = JSON.parse(localStorage.getItem("key"))

    const { closeSideBar } = useSelector((store) => store.sharedFeatures)
    return (
        <React.Fragment>
            <header className={`${closeSideBar ? 'add-header header-full' : 'add-header'}`}>
                <SidebarToggle className={homeStyles.homeSearchbox} />

                <div className={homeStyles.homeSearchbox}>
                    <BiSearchAlt className={homeStyles.searchIcon} />
                    <input type="text" placeholder='search here...' />
                </div>

                <div className={homeStyles.userImgContainer}>
                    <img src={userImg} alt="" />
                    <div className={homeStyles.userText}>
                        <span>{getUserInfo.name}</span>
                        <span className={homeStyles.email}>{getUserInfo.email}</span>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default HomePageHeader