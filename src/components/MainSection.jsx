import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineBars } from 'react-icons/ai'
import '../style/main-section.css'
import profile from '../asset/pp1.jpg'

const MainSection = () => {
  return (
    <React.Fragment>
        <section className='main-section'>
            <div className="top">
                <AiOutlineBars className='sidebar-toggle' />
                <div className="searchbox">
                    <BiSearch className='search-icon' />
                    <input className='form-input' type="text" placeholder='search here...' />
                </div>
                <div className="user-info">
                  <img src={profile} alt="user pic" className='user-img' />
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default MainSection