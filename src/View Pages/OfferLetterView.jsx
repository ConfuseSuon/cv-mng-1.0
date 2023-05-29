import React from 'react'

const OfferLetterView = ({ id, request }) => {



    return (
        <React.Fragment>

            <div className="offerLetter-card">
                <h4 className='card-title-h4'>Offer Letter</h4>



                <div className="card" >
                    <div className="card-content">
                        <div className="field">
                            <h5>Applicant </h5>
                            <p></p>
                        </div>
                        <div className="field">
                            <h5>Status</h5>
                            <p></p>
                        </div>
                        <div className="field">
                            <h5>Remarks</h5>
                            <p></p>
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

            </div>
        </React.Fragment>
    )
}

export default OfferLetterView