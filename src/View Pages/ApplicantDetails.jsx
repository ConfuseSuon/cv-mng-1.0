import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getApplicantData } from '../Features/applicant/applicantSlice'
import Header from '../Shared-Layout/Header'
import '../style/details.css'
import { BiUser } from 'react-icons/bi'
import Stepper from 'react-stepper-horizontal'
import { getInterviewData } from '../Features/interview/interviewSlice'
import { getAssessmentData } from '../Features/assessment/assessmentSlice'
import AssessmentView from './AssessmentView'
import InterviewView from './InterviewView'
import ApplicantView from './ApplicantView'
import InterviewForm from '../Form/InterviewForm'
import Modal from '../Shared-Layout/Modal'

const ApplicantDetails = () => {

    const { applicantId } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getApplicantData())
        dispatch(getAssessmentData())
        dispatch(getInterviewData())
    }, [dispatch])


    const { applicantData } = useSelector((store) => store.applicant)
    const { closeSideBar } = useSelector((store) => store.sharedFeatures)
    const { openInterviewForm } = useSelector((store) => store.form)
    const { interviewDeleteModal } = useSelector((store) => store.modal)

    const filterApplicant = applicantData.filter((item) => item.id === parseInt(applicantId))
    const singleApplicant = filterApplicant[0]





    // const handleStepperNum = () => {
    //     let value;
    //     switch (singleApplicant.status) {
    //         case "Short Listed":
    //             value = 1;
    //             break;
    //         case "I Interview Completed":
    //             value = 2;
    //             break;
    //         case "II Interview Completed":
    //             value = 3;
    //             break;
    //         case "III Interview Completed":
    //             value = 4;
    //             break;
    //         case "Rejected":
    //             value = 5;
    //             break;
    //         case "Hired":
    //             value = 6;
    //             break;
    //         default:
    //             console.log("unknown")
    //     }
    //     return value

    // }

    return (
        <React.Fragment>
            <Header back={'applicant'} />

            <section className={`${closeSideBar ? 'main-container full-section' : 'main-container '}`}>
                {openInterviewForm && (<InterviewForm />)}
                {interviewDeleteModal && <Modal />}

                {
                    singleApplicant ? (<div className="tableContainer ">
                        <div className="main-title secondary-title" >
                            <div className="title-detail">
                                <BiUser className='main-icon' />
                                <h4> {singleApplicant.fullName} </h4>
                            </div>
                            <div className="stepper-container">
                                <Stepper steps={[{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }, { title: 'Step Four' }]} activeStep={1}
                                    className="applicant-stepper" />
                            </div>
                        </div>

                        <div className="card-container">
                            <ApplicantView applicantId={applicantId} />
                            <InterviewView id={applicantId} request={'applicant'} />
                            <AssessmentView id={applicantId} request={'applicant'} />

                        </div>
                    </div>) : 'no - data'
                }
            </section>

        </React.Fragment>
    )
}

export default ApplicantDetails