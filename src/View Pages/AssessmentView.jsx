import React from 'react'

const AssessmentView = ({ id, request }) => {

    const assessmentData = JSON.parse(localStorage.getItem("Assessment"))

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
                <h4 className='card-title-h4'>Assessment</h4>
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
                                        <button className="btn"  >Edit</button>
                                        <button className="btn cancel">Delete</button>
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