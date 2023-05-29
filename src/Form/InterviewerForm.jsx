import React from 'react'
import { Formik, Field, Form } from 'formik'
import { interviewerSchema } from '../Schema'
import { useDispatch, useSelector } from 'react-redux'
import { closeFormFunc } from '../Features/form/formSlice'
import { getInterviewerData, postInterviewerData, putInterviewerData } from '../Features/interviewer./interviewerSlice'

const InterviewerForm = () => {

    const dispatch = useDispatch()

    const { interviewerEditValue } = useSelector((store) => store.form)

    const initialValues = {
        interviewerName: '',
        email: '',
        position: '',
    }

    const editingValue = {
        interviewerName: interviewerEditValue.interviewerName,
        email: interviewerEditValue.email,
        position: interviewerEditValue.position,
    }

    let editingId = interviewerEditValue.id

    const onSubmit = async (values, { resetForm }) => {


        if (!editingId) {

            await dispatch(postInterviewerData(values))
            await dispatch(getInterviewerData())
            resetForm()
        }
        else {
            await dispatch(putInterviewerData({ values, id: editingId }))
            await dispatch(getInterviewerData())
            dispatch(closeFormFunc("interviewer"))
        }

    }

    return (
        <React.Fragment>

            <div className="form-container">
                <header>Interviewer</header>
                <Formik
                    initialValues={(editingId) ? editingValue : initialValues}
                    validationSchema={interviewerSchema} onSubmit={onSubmit}>
                    {({ values, errors, touched }) => (

                        <Form >
                            <div className="fields">
                                <div className='input-field ' >
                                    <label htmlFor="interviewerName">Interviewer Name</label>
                                    <Field type='text' name='interviewerName' />
                                    {errors.interviewerName && touched.interviewerName && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.interviewerName}</span></div>
                                    )}
                                </div>

                                <div className='input-field '>
                                    <label htmlFor="position">Position</label>
                                    <Field as='select' name='position'>
                                        <option >Select position</option>
                                        <option value='Junior'>Junior</option>
                                        <option value='Mid-Level'>Mid-Level</option>
                                        <option value='Senior'>Senior</option>
                                    </Field>
                                    {errors.position && touched.position && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.position}</span></div>
                                    )}
                                </div>

                                <div className="input-field">
                                    <label>Email</label>
                                    <Field type="email" name='email' />
                                    {errors.email && touched.email && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.email}</span>
                                        </div>
                                    )}
                                </div>


                            </div>

                            <div className="btn-container">
                                <button type='submit' className="btn sub-btn">Submit</button>
                                <button className="btn cancel-btn" onClick={() => dispatch(closeFormFunc('interviewer'))} >Cancel</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </React.Fragment>
    )
}

export default InterviewerForm