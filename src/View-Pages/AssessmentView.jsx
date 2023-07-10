import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openFormFunc } from '../Features/form/formSlice'
import { openDeleteModal } from '../Features/modal/modalSlice'

const AssessmentView = ({ id, request, createFormData }) => {

    const dispatch = useDispatch()
    const { assessmentData } = useSelector((store) => store.assessment)

    const hanldeCreateForm = () => {
        const value = [];
        value.push(createFormData)
        dispatch(openFormFunc({ data: value, action: 'createViewAssessment' }))
    }


    const handleRequest = (pageName) => {
        if (pageName === "applicant") {
            const filterAssessmentApplicant = assessmentData.filter((item) => {
                const data = JSON.parse(item.applicantId)
                return data[0].applicantId === parseInt(id)
            })
            return filterAssessmentApplicant
        }
        else {
            const filterAssessment = assessmentData.filter((item) => {
                return item.id === parseInt(id)
            })
            return filterAssessment
        }
    }


    return (
        <React.Fragment>
            <div className="assessment-card">
                <div className="card-header">
                    <h4 className='card-title-h4'>Assessment </h4>
                    {request === "applicant" && (
                        <button className='btn' onClick={hanldeCreateForm}> Create </button>
                    )}
                </div>
                {
                    handleRequest(request).length > 0 ? (

                        handleRequest(request).map((data) => {
                            const applicantData = JSON.parse(data.applicantId)
                            const { applicantId, title, evaluation, document, applicantFile, id } = data
                            const formEditData = { applicantId, title, evaluation, document, applicantFile, id }
                            return (
                                <div className="card" key={data.id}>
                                    <div className="card-content">
                                        <div className="field">
                                            <h5>Title</h5>
                                            <p>{data.title}</p>
                                        </div>
                                        <div className="field">
                                            <h5>Applicant</h5>
                                            <p>{applicantData[0].applicantName}</p>
                                        </div>
                                        <div className="field">
                                            <h5>Evaluation</h5>
                                            <p>{data.evaluation}</p>
                                        </div>
                                        <div className="field">
                                            <h5>File</h5>
                                            <p></p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="view-btn-container">
                                        <button className="btn"
                                            onClick={() => dispatch(openFormFunc({ data: formEditData, action: "editAssessment" }))}  >Edit</button>
                                        <button className="btn cancel"
                                            onClick={() => dispatch(openDeleteModal({ data: formEditData, action: "deleteAssessment" }))}>Delete</button>
                                    </div>
                                </div>
                            )
                        })


                    ) : "No - Data"
                }
            </div>


        </React.Fragment>
    )
}

export default AssessmentView