import React, { useEffect } from 'react'
import Header from '../Shared-Layout/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getInterviewData } from '../Features/interview/interviewSlice'
import { BiCalendarEdit } from 'react-icons/bi'
import InterviewView from './InterviewView'
import InterviewForm from '../Form/InterviewForm'
import Modal from '../Shared-Layout/Modal'

const InterivewDetails = () => {

    const { interviewId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInterviewData())
    }, [dispatch])

    const { interviewData } = useSelector((store) => store.interview)
    const { closeSideBar } = useSelector((store) => store.sharedFeatures)
    const { openInterviewForm } = useSelector((store) => store.form)
    const { interviewDeleteModal } = useSelector((store) => store.modal)


    const filterInterview = interviewData.filter((item) => item.id === parseInt(interviewId))
    const singleInterview = filterInterview[0]


    return (
        <React.Fragment>
            <Header back={'interview'} />
            <section className={`${closeSideBar ? 'main-container full-section' : 'main-container '}`}>
                {openInterviewForm && <InterviewForm />}
                {interviewDeleteModal && <Modal />}

                {
                    singleInterview ? (<div className="tableContainer ">
                        <div className="main-title secondary-title" >
                            <div className="title-detail">
                                <BiCalendarEdit className='main-icon' />
                                <h4> {singleInterview.title} </h4>
                            </div>

                        </div>

                        <div className="card-container">
                            <InterviewView id={interviewId} request={'interview'} />
                        </div>
                    </div>) : 'no - data'
                }

            </section>

        </React.Fragment>)
}

export default InterivewDetails