import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAssessmentData } from '../Features/assessment/assessmentSlice'
import Header from '../Shared-Layout/Header'
import Modal from '../Shared-Layout/Modal'
import AssessmentForm from '../Form/AssessmentForm'
import AssessmentView from './AssessmentView'
import { BiCollection } from 'react-icons/bi'

const AssessmentDetails = () => {

    const { assessmentTestId } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAssessmentData())
    }, [dispatch])


    const { assessmentData } = useSelector((store) => store.assessment)
    const { closeSideBar } = useSelector((store) => store.sharedFeatures)
    const { openInterviewForm } = useSelector((store) => store.form)
    const { interviewDeleteModal } = useSelector((store) => store.modal)


    const filterAssessmentTest = assessmentData.filter((item) => item.id === parseInt(assessmentTestId))
    const singleAssessmentTest = filterAssessmentTest[0]



    return (
        <React.Fragment>
            <Header back={'assessmentTest'} />
            <section className={`${closeSideBar ? 'main-container full-section' : 'main-container '}`}>
                {openInterviewForm && (<AssessmentForm />)}
                {interviewDeleteModal && <Modal />}

                {
                    singleAssessmentTest ? (<div className="tableContainer ">
                        <div className="main-title secondary-title" >
                            <div className="title-detail">
                                <BiCollection className='main-icon' />
                                <h4> {singleAssessmentTest.title} </h4>
                            </div>

                        </div>

                        <div className="card-container">
                            <AssessmentView id={assessmentTestId} request={'assessmentTest'} />

                        </div>
                    </div>) : 'No - Data'
                }
            </section>
        </React.Fragment>
    )
}

export default AssessmentDetails