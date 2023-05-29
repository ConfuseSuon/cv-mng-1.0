import React from 'react'
import { Formik, Form, Field } from 'formik'
import { experienceSchema } from '../Schema'
import { useDispatch } from 'react-redux'
import { closeFormFunc } from '../Features/form/formSlice'

const ExperienceForm = () => {

    const dispatch = useDispatch()

    const initialValues = {
        applicantId: '',
        companyName: '',
        startedDate: '',
        endDate: '',
        position: '',
        responsbilities: '',
        certificate: null,
    }

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <React.Fragment>

            <div className="form-container">
                <header>Experience</header>
                <Formik initialValues={initialValues} validationSchema={experienceSchema} onSubmit={onSubmit}>
                    {({ values, errors, touched, setFieldValue }) => (

                        <Form >
                            <div className="fields">

                                <div className='input-field '>
                                    <label htmlFor="applicantId">Applicant Id</label>
                                    <Field type='number' name='applicantId' />
                                    {errors.applicantId && touched.applicantId && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.applicantId}</span></div>
                                    )}
                                </div>

                                <div className='input-field '>
                                    <label htmlFor="companyName"> Company Name</label>
                                    <Field type='text' name='companyName' />
                                    {errors.companyName && touched.companyName && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.companyName}</span></div>
                                    )}
                                </div>

                                <div className='input-field ' >
                                    <label htmlFor="startedDate">Started Date</label>
                                    <Field type='date' name='startedDate' />
                                    {errors.startedDate && touched.startedDate && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.startedDate}</span></div>
                                    )}
                                </div>

                                <div className='input-field ' >
                                    <label htmlFor="endDate">End Date</label>
                                    <Field type='date' name='endDate' />
                                    {errors.endDate && touched.endDate && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.endDate}</span></div>
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

                                <div className='input-field '>
                                    <label htmlFor="responsbilities"> Responsibilities</label>
                                    <Field type='text' name='responsbilities' />
                                    {errors.responsbilities && touched.responsbilities && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.responsbilities}</span></div>
                                    )}
                                </div>

                                <div className='input-field '>
                                    <label>Certificate</label>
                                    <input type='file' name='certificate' accept='.jpeg, .jpg, .png, .pdf' className="file-box"
                                        onChange={(event) => {
                                            const file = event.target.files[0];
                                            setFieldValue('certificate', file)
                                        }}
                                    />
                                    {errors.certificate && touched.certificate && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.certificate}</span></div>
                                    )}
                                </div>

                            </div>

                            <div className="btn-container">
                                <button type='submit' className="btn sub-btn">Submit</button>
                                <button className="btn cancel-btn" onClick={() => dispatch(closeFormFunc('experience'))} >Cancel</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </React.Fragment>
    )
}

export default ExperienceForm