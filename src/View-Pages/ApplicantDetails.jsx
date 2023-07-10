import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getApplicantData, handelActiveStepper } from '../Features/applicant/applicantSlice'
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

import Loading from '../Components/Loading'
import AssessmentForm from '../Form/AssessmentForm'
import OfferLetterView from './OfferLetterView'
import OfferLetterForm from '../Form/OfferLetterForm'

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
    const { openInterviewForm, openAssessmentForm, openOfferLetterForm } = useSelector((store) => store.form)
    const { interviewDeleteModal, assessmentDeleteModal, offerLetterDeleteModal } = useSelector((store) => store.modal)

    const filterApplicant = applicantData.filter((item) => item.id === parseInt(applicantId))
    const singleApplicant = filterApplicant[0]


    if (!singleApplicant) {
        return <Loading />
    }


    const handleStepperNum = (applicant) => {
        let value;
        switch (applicant.status) {
            case "Short Listed":
                value = 0;
                break;
            case "Interviewing":
                value = 1;
                break;

            case "Hired":
                value = 2;
                break;
            case "Rejected":
                value = 3;
                break;
            default:
                console.log("unknown")
        }
        return value

    }

    return (
        <React.Fragment>
            <Header back={'applicant'} />

            <section className={`${closeSideBar ? 'main-container full-section' : 'main-container '}`}>
                {openInterviewForm && (<InterviewForm />)}
                {openAssessmentForm && (<AssessmentForm />)}
                {openOfferLetterForm && (<OfferLetterForm />)}
                {interviewDeleteModal && <Modal />}
                {assessmentDeleteModal && <Modal />}
                {offerLetterDeleteModal && <Modal />}

                {
                    singleApplicant ? (<div className="tableContainer ">
                        <div className="main-title status-title" >
                            <div className="title-detail">
                                <BiUser className='main-icon' />
                                <h4> {singleApplicant.fullName} </h4>
                            </div>
                            <div className="stepper-container">
                                <Stepper steps={[{ title: 'Short Listed' }, { title: 'Interviewing' }, { title: 'Hired' }, { title: 'Rejected' }]}
                                    activeStep={handleStepperNum(singleApplicant)}
                                    className="applicant-stepper" completeColor="#645cff"
                                    activeColor="#3c3799"
                                    defaultColor="#e2e8f0" />
                            </div>
                        </div>

                        <div className="card-container">
                            <ApplicantView applicantId={applicantId} />
                            <InterviewView id={applicantId} request={'applicant'} createFormData={{ applicantId: singleApplicant.id, applicantName: singleApplicant.fullName }} />
                            <AssessmentView id={applicantId} request={'applicant'} createFormData={{ applicantId: singleApplicant.id, applicantName: singleApplicant.fullName }} />
                            <OfferLetterView id={applicantId} request={'applicant'} createFormData={{ applicantId: singleApplicant.id, applicantName: singleApplicant.fullName }} />
                        </div>
                    </div>) : 'no - data'
                }
            </section>

        </React.Fragment>
    )
}

export default ApplicantDetails    