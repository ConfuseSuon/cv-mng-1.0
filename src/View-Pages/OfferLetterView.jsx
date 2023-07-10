import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openFormFunc } from '../Features/form/formSlice'
import { openDeleteModal } from '../Features/modal/modalSlice'

const OfferLetterView = ({ id, request, createFormData }) => {

    const dispatch = useDispatch()
    const { offerLetterData } = useSelector((store) => store.offerLetter)


    const hanldeCreateForm = () => {
        const value = [];
        value.push(createFormData)
        dispatch(openFormFunc({ data: value, action: 'createViewOfferLetter' }))
    }


    const handleRequest = (pageName) => {
        if (pageName === "applicant") {
            const filterApplicantRequest = offerLetterData.filter((item) => {
                const data = JSON.parse(item.applicantId)
                return data[0].applicantId === parseInt(id)
            })
            return filterApplicantRequest
        }
        else {
            const filterOfferLetter = offerLetterData.filter((item) => {
                return item.id === parseInt(id)
            })
            return filterOfferLetter
        }
    }


    return (
        <React.Fragment>

            <div className="offerLetter-card">
                <div className="card-header">
                    <h4 className='card-title-h4'>Offer Letter </h4>
                    {request === "applicant" && (
                        <button className='btn' onClick={hanldeCreateForm}> Create </button>
                    )}
                </div>

                {
                    handleRequest(request).length > 0 ? (
                        handleRequest(request).map((data) => {
                            const applicantData = JSON.parse(data.applicantId)
                            const { applicantId, status, letterFile, remarks, id } = data
                            const formEditData = { applicantId, status, letterFile, remarks, id }
                            return (
                                <div className="card" key={data.id} >
                                    <div className="card-content">
                                        <div className="field">
                                            <h5>Applicant </h5>
                                            <p>{applicantData[0].applicantName}</p>
                                        </div>
                                        <div className="field">
                                            <h5>Status</h5>
                                            <p>{data.status}</p>
                                        </div>
                                        <div className="field">
                                            <h5>Remarks</h5>
                                            <p>{data.remarks}</p>
                                        </div>
                                        <div className="field">
                                            <h5>File</h5>
                                            <p></p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="view-btn-container">
                                        <button className="btn" onClick={() => dispatch(openFormFunc({ data: formEditData, action: 'editOfferLetter' }))} >Edit</button>
                                        <button className="btn cancel"
                                            onClick={() => dispatch(openDeleteModal({ data: formEditData, action: 'deleteOfferLetter' }))}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    ) : 'No - Data'
                }

            </div>
        </React.Fragment>
    )
}

export default OfferLetterView