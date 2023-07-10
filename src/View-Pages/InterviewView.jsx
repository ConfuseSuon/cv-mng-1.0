import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { openFormFunc } from '../Features/form/formSlice'
import { openDeleteModal } from '../Features/modal/modalSlice'

const InterviewView = ({ id, request, createFormData }) => {

    const dispatch = useDispatch()
    const { interviewData } = useSelector((store) => store.interview)


    const hanldeCreateForm = () => {
        const value = [];
        value.push(createFormData)
        dispatch(openFormFunc({ data: value, action: 'createViewInterview' }))
    }


    const handleRequest = (pageName) => {
        if (pageName === "applicant") {
            const filterApplicantRequest = interviewData.filter((item) => {
                const data = JSON.parse(item.applicantId)
                return data[0].applicantId === parseInt(id)
            })
            return filterApplicantRequest
        }
        else {
            const filterAssessment = interviewData.filter((item) => {
                return item.id === parseInt(id)
            })
            return filterAssessment
        }
    }


    return (
        <React.Fragment>
            <div className="interview-card">
                <div className="card-header">
                    <h4 className='card-title-h4'>Interview </h4>
                    {request === "applicant" && (
                        <button className='btn' onClick={hanldeCreateForm}> Create </button>
                    )}
                </div>
                {
                    handleRequest(request).length > 0 ? (
                        handleRequest(request).map((data) => {
                            const applicantData = JSON.parse(data.applicantId)
                            const { title, dateTime, applicantId, interviewerId, id } = data
                            const formEditData = { title, dateTime, applicantId, interviewerId, id }
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
                                            <h5>Date Time</h5>
                                            <p>{moment(data.dateTime).format("MMMM Do YYYY, hh:mm a")}</p>
                                        </div>
                                        <div className="field interviewer-data">
                                            <h5 className='interviewer-name '>Interviewer </h5>
                                            <h5 className='email-name'>Email</h5>
                                            <h5 className='position-name'>Positon</h5>
                                        </div>

                                        {
                                            data.interviewerId.map((item) => {
                                                return (
                                                    <div className="field interviewer-data " key={item.id}>
                                                        <p className='interviewer-name'>{item.interviewerName}</p>
                                                        <p className='email-name'>{item.email}</p>
                                                        <p className='position-name'>{item.position}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                        <hr />
                                    </div>
                                    <div className="view-btn-container">
                                        <button className="btn" onClick={() => dispatch(openFormFunc({ data: formEditData, action: "editInterview" }))} >Edit</button>
                                        <button className="btn cancel" onClick={() => dispatch(openDeleteModal({ data: formEditData, action: "deleteInterview" }))}>Delete</button>
                                    </div>
                                </div>


                            )
                        })



                    ) : 'No - Data'
                }

            </div>

        </React.Fragment >
    )
}

export default InterviewView