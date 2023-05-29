import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteModal } from '../Features/modal/modalSlice'

import { deleteApplicantData, getApplicantData } from '../Features/applicant/applicantSlice'
import { deleteAssessmentData } from '../Features/assessment/assessmentSlice'
import { deleteOfferLetterData } from '../Features/offerLetter/offerLetterSlice'
import { deleteInterviewerData } from '../Features/interviewer./interviewerSlice'
import { deleteInterviewData } from '../Features/interview/interviewSlice'

const Modal = () => {

    const { deleteId, deleteApiName } = useSelector((store) => store.modal)
    const dispatch = useDispatch()

    const handleDeletion = async () => {

        switch (deleteApiName) {


            case "deleteApplicant":
                await dispatch(deleteApplicantData(deleteId))
                await dispatch(getApplicantData())
                break;

            case "deleteAssessment":
                dispatch(deleteAssessmentData(deleteId))
                break;

            case "deleteOfferLetter":
                dispatch(deleteOfferLetterData(deleteId))
                break;

            case "deleteInterviewer":
                dispatch(deleteInterviewerData(deleteId))
                break;

            case "deleteInterview":
                dispatch(deleteInterviewData(deleteId))
                break;

            default:
                console.log("Unknown Api Name")
        }

        dispatch(closeDeleteModal())


    }


    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h5>Are you sure want to remove?</h5>
                <div className='btn-container modal-btn-container'>
                    <button type='button' className='btn sub-btn' onClick={handleDeletion} >
                        confirm
                    </button>
                    <button
                        type='button'
                        className='btn cancel-btn'
                        onClick={() => dispatch(closeDeleteModal())}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal