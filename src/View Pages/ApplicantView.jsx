import React from 'react'

const ApplicantView = ({ applicantId }) => {

    const applicantData = JSON.parse(localStorage.getItem("Applicant"))

    const filterApplicant = applicantData.filter((item) => item.id === parseInt(applicantId))
    const singleApplicant = filterApplicant[0]

    return (
        <React.Fragment>
            <div className="applicant-card">
                <h4 className='card-title-h4'>Applicant </h4>
                <div className="card">
                    <div className="card-content">
                        <div className="field">
                            <h5>First Name</h5>
                            <p>{singleApplicant.firstName}</p>
                        </div>
                        <div className="field">
                            <h5>Middle Name</h5>
                            <p>{singleApplicant.middleName}</p>
                        </div>
                        <div className="field">
                            <h5>Last Name</h5>
                            <p>{singleApplicant.lastName}</p>
                        </div>
                        <div className="field">
                            <h5>Email</h5>
                            <p>{singleApplicant.email}</p>
                        </div>
                        <div className="field">
                            <h5>Phone Number</h5>
                            <p>{singleApplicant.mobileNumber}</p>
                        </div>
                    </div>

                </div>

                <hr />

                <div className="card">
                    <div className="card-content">
                        <div className="field">
                            <h5>Technology</h5>
                            <p>{singleApplicant.technology}</p>
                        </div>
                        <div className="field">
                            <h5>Position</h5>
                            <p>{singleApplicant.position}</p>
                        </div>
                        <div className="field">
                            <h5>Experience</h5>
                            <p>{`${singleApplicant.experience}  ${singleApplicant.period}`}</p>
                        </div>
                        <div className="field">
                            <h5>Salary Expectation</h5>
                            <p>Rs.{singleApplicant.salaryExpectation}</p>
                        </div>
                        <div className="field">
                            <h5>References</h5>
                            <p>{singleApplicant.references}</p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default ApplicantView