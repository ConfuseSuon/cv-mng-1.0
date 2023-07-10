import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SidebarToggle from './SidebarToggle'
import { openFormFunc } from '../Features/form/formSlice'
import { BiPlus, BiUndo } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import GlobalSearch from './GlobalSearch'

const Header = ({ action, back }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { closeSideBar } = useSelector((store) => store.sharedFeatures)

    const handleNavigation = (pageName) => {

        switch (pageName) {

            case 'applicant':
                navigate('/applicant')
                break;

            case 'interview':
                navigate('/interview')
                console.log('first')
                break;

            case 'assessmentTest':
                navigate('/assessment-test')
                break;

            case 'offerLetter':
                navigate('/offer-letter')
                break;

            default:
                console.log("Unkonw back page name")
        }

    }

    return (
        <React.Fragment>
            <header className={`${closeSideBar ? 'add-header header-full' : 'add-header'}`}>
                <SidebarToggle />

                <GlobalSearch />

                <button
                    className='btn add-btn'
                    onClick={() => {
                        action ? dispatch(openFormFunc({ action })) : handleNavigation(back)
                    }} >
                    {back ? <span>Back<BiUndo /> </span> : <span>Add<BiPlus /></span>}

                </button>
            </header>
        </React.Fragment >
    )
}

export default Header