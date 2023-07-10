import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { assessmentSchema } from '../Schema'
import { useDispatch, useSelector } from 'react-redux'
import { closeFormFunc } from '../Features/form/formSlice'
import { getAssessmentData, postAssessmentData, putAssessmentData } from '../Features/assessment/assessmentSlice'
import { getApplicantData } from '../Features/applicant/applicantSlice'

const AssessmentForm = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApplicantData())
    }, [dispatch])

    const { assessmentEditValue, createViewAssessmentValue } = useSelector((store) => store.form)
    const { applicantData } = useSelector((store) => store.applicant)


    const initialValues = {
        applicantId: '',
        title: '',
        evaluation: '',
        document: '',
        applicantFile: null,
    }

    let editingId = assessmentEditValue.id
    const editingValue = {
        applicantId: assessmentEditValue.applicantId,
        title: assessmentEditValue.title,
        evaluation: assessmentEditValue.evaluation,
        document: null,
        applicantFile: null,
    }

    const createViewValue = {
        applicantId: JSON.stringify(createViewAssessmentValue),
        title: '',
        evaluation: '',
        document: '',
        applicantFile: null,
    }

    // const sending initialValues for formk
    const formValues = editingId ? editingValue : createViewAssessmentValue.length > 0 ? createViewValue : initialValues




    const onSubmit = async (values, { resetForm }) => {

        if (!editingId) {
            await dispatch(postAssessmentData(values))
            await dispatch(getAssessmentData())
            resetForm()
        }
        else {
            await dispatch(putAssessmentData({ values, id: editingId }))
            await dispatch(getAssessmentData())
            dispatch(closeFormFunc('assessment'))
        }

    }

    return (
        <React.Fragment>
            <div className="form-container">
                <header>Assessment</header>
                <Formik
                    initialValues={formValues}
                    validationSchema={assessmentSchema} onSubmit={onSubmit}>
                    {({ values, errors, touched, setFieldValue }) => (

                        <Form >
                            <div className="fields">
                                <div className='input-field ' >
                                    <label htmlFor="applicantId">Applicant Id</label>
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
                                            <span className='error'>{errors.applicantId}</span></div>
                                    )}
                                </div>

                                <div className='input-field '>
                                    <label htmlFor="title">Title</label>
                                    <Field type='text' name='title' />
                                    {errors.title && touched.title && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.title}</span></div>
                                    )}
                                </div>

                                <div className='input-field '>
                                    <label htmlFor="evaluation">Evaluation</label>
                                    <Field type='text' name='evaluation' />
                                    {errors.evaluation && touched.evaluation && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.evaluation}</span></div>
                                    )}
                                </div>

                                <div className='input-field '>
                                    <label htmlFor="document">Document</label>
                                    <input type='file' name='document' accept='.pdf, .docx, .doc' className="file-box"
                                        onChange={(event) => {
                                            const file = event.target.files[0];
                                            setFieldValue('document', file)
                                        }}
                                    />
                                    {errors.document && touched.document && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.document}</span></div>
                                    )}
                                </div>

                                <div className='input-field '>
                                    <label htmlFor="applicantFile">Applicant File</label>
                                    <input type='file' name='applicantFile' accept='.pdf, .docx, .doc' className="file-box"
                                        onChange={(event) => {
                                            const file = event.target.files[0];
                                            setFieldValue('applicantFile', file)
                                        }}
                                    />
                                    {errors.applicantFile && touched.applicantFile && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.applicantFile}</span></div>
                                    )}
                                </div>

                            </div>

                            <div className="btn-container">
                                <button type='submit' className="btn sub-btn">Submit</button>
                                <button className="btn cancel-btn" onClick={() => dispatch(closeFormFunc('assessment'))} >Cancel</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </React.Fragment>
    )
}

export default AssessmentForm