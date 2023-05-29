import React from 'react'
import NavSideBar from '../Shared-Layout/NavSideBar'
import Header from '../Shared-Layout/Header'
import { useSelector } from 'react-redux'
import ExperienceForm from '../Form/ExperienceForm'

const Experience = () => {

    const { openExperienceForm } = useSelector((store) => store.form)

    return (
        <React.Fragment>
            <NavSideBar />
            <Header action={'createExperience'} />
            <section className='full-width'>
                {
                    openExperienceForm && (
                        <ExperienceForm />
                    )
                }
            </section>
        </React.Fragment>
    )
}

export default Experience