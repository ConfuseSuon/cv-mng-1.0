import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { openFormFunc } from '../Features/form/formSlice'
import { openDeleteModal } from '../Features/modal/modalSlice'

const InterviewView = ({ id, request }) => {

    const dispatch = useDispatch()
    const interviewData = JSON.parse(localStorage.getItem("Interview"))

    const formEditValue = JSON.parse(localStorage.getItem("interviewEditValue"))

    console.log(formEditValue)
    console.log("hhhhh")


    const handleRequest = (pageName) => {
        if (pageName === "applicant") {
            const filterInterviewApplicant = interviewData.filter((item) => {
                const data = JSON.parse(item.applicantId)
                return data[0].applicantId === parseInt(id)
            })
            const singleInterviewApplicant = filterInterviewApplicant
            return singleInterviewApplicant
        }
        else {
            const filterInterview = interviewData.filter((item) => {
                return item.id === parseInt(id)
            })
            const singleInterview = filterInterview
            return singleInterview
        }
    }


    return (
        <React.Fragment>
            <div className="interview-card">
                <h4 className='card-title-h4'>Interview </h4>
                {
                    handleRequest(request).length > 0 ? (
                        handleRequest(request).map((data) => {
                            const applicantName = JSON.parse(data.applicantId)

                            return (
                                <div className="card" key={data.id}>
                                    <div className="card-content">
                                        <div className="field">
                                            <h5>Title</h5>
                                            <p>{data.title}</p>
                                        </div>
                                        <div className="field">
                                            <h5>Applicant</h5>
                                            <p>{applicantName[0].applicantName}</p>
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
                                        <button className="btn" onClick={() => dispatch(openFormFunc({ data: formEditValue, action: "editInterview" }))} >Edit</button>
                                        <button className="btn cancel" onClick={() => dispatch(openDeleteModal({ data: formEditValue, action: "deleteInterview" }))}>Delete</button>
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