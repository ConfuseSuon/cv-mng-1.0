import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { offerLetterSchema } from '../Schema'
import { useDispatch, useSelector } from 'react-redux'
import { closeFormFunc } from '../Features/form/formSlice'
import { getOfferLetterData, postOfferLetterData, putOfferLetterData } from '../Features/offerLetter/offerLetterSlice'
import { getApplicantData } from '../Features/applicant/applicantSlice'


const OfferLetterForm = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApplicantData())
    }, [dispatch])


    const { offerLetterEditValue, createViewOfferLetterValue } = useSelector((store) => store.form)
    const { applicantData } = useSelector((store) => store.applicant)


    const initialValues = {
        applicantId: [],
        status: '',
        letterFile: null,
        remarks: '',
    }


    let editingId = offerLetterEditValue.id
    const editingValue = {
        applicantId: offerLetterEditValue.applicantId,
        status: offerLetterEditValue.status,
        letterFile: null,
        remarks: offerLetterEditValue.remarks,
    }


    const createViewValue = {
        applicantId: JSON.stringify(createViewOfferLetterValue),
        status: '',
        letterFile: null,
        remarks: '',
    }


    // const sending initialValues for formk
    const formValues = editingId ? editingValue : createViewOfferLetterValue.length > 0 ? createViewValue : initialValues


    const onSubmit = async (values, { resetForm }) => {

        if (!editingId) {

            await dispatch(postOfferLetterData(values))
            await dispatch(getOfferLetterData())
            resetForm()
        }
        else {
            await dispatch(putOfferLetterData({ values, id: editingId }))
            await dispatch(getOfferLetterData())
            dispatch(closeFormFunc("offerLetter"))
        }
    }

    return (
        <React.Fragment>
            <div className="form-container">
                <header>Offer Letter</header>
                <Formik
                    initialValues={formValues}
                    validationSchema={offerLetterSchema} onSubmit={onSubmit}>
                    {({ values, errors, touched, setFieldValue }) => (

                        <Form >
                            <div className="fields">
                                <div className="input-field">
                                    <label>Applicant</label>
                                    <Field as='select' name='applicantId'>
                                        <option value=''>Select Applicant Name</option>
                                        {
                                            applicantData.map((applicant) => {
                                                const data = [{ applicantId: applicant.id, applicantName: applicant.fullName }]
                                                return (
                                                    <option key={applicant.id} value={JSON.stringify(data)} >

                                                        {applicant.fullName}</option>

                                                )
                                            })
                                        }
                                    </Field>
                                    {errors.applicantId && touched.applicantId && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.applicantId}</span>
                                        </div>
                                    )}
                                </div>


                                <div className="input-field">
                                    <label htmlFor='status'>Status</label>
                                    <Field as='select' name='status'>
                                        <option value='Short Listed'>Short Listed</option>
                                        <option value='Interviewing '>Interviewing</option>
                                        <option value='Hired'>Hired</option>
                                        <option value='Rejected'>Rejected</option>
                                    </Field>
                                    {errors.status && touched.status && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.status}</span>
                                        </div>
                                    )}
                                </div>

                                <div className='input-field '>
                                    <label>Letter File</label>
                                    <input type='file' name='letterFile' accept='.pdf, .docx, .doc' className="file-box"
                                        onChange={(event) => {
                                            const file = event.target.files[0];
                                            setFieldValue('letterFile', file)
                                        }}
                                    />
                                    {errors.letterFile && touched.letterFile && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.letterFile}</span></div>
                                    )}
                                </div>

                                <div className='input-field '>
                                    <label htmlFor="remarks">Remarks</label>
                                    <Field type='text' name='remarks' />
                                    {errors.remarks && touched.remarks && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.remarks}</span></div>
                                    )}
                                </div>
                            </div>

                            <div className="btn-container">
                                <button type='submit' className="btn sub-btn">Submit</button>
                                <button type='button' className="btn cancel-btn" onClick={() => dispatch(closeFormFunc('offerLetter'))} >Cancel</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>


        </React.Fragment>
    )
}

export default OfferLetterForm