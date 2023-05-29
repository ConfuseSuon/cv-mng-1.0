import React from 'react'
import { Formik, Form, Field } from 'formik'
import { applicantSchema } from '../Schema'
import { useDispatch, useSelector } from 'react-redux'
import { closeFormFunc } from '../Features/form/formSlice'
import { getApplicantData, postApplicantData, putApplicantData } from '../Features/applicant/applicantSlice'


const ApplicantForm = () => {

    const { applicantEditValue } = useSelector((store) => store.form)

    const dispatch = useDispatch()

    const initialValues = {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        status: 'Short Listed',
        technology: '',
        position: '',
        references: '',
        salaryExpectation: 20000,
        experience: '',
        period: 'year',
        resume: null,
    }

    const editingValue = {
        firstName: applicantEditValue.firstName,
        middleName: applicantEditValue.middleName,
        lastName: applicantEditValue.lastName,
        email: applicantEditValue.email,
        mobileNumber: applicantEditValue.mobileNumber,
        status: applicantEditValue.status,
        technology: applicantEditValue.technology,
        position: applicantEditValue.position,
        references: applicantEditValue.references,
        salaryExpectation: applicantEditValue.salaryExpectation,
        experience: applicantEditValue.experience,
        period: applicantEditValue.period,
        resume: null,

    }

    let editingId = applicantEditValue.id

    const onSubmit = async (values, { resetForm }) => {

        let fullName;
        if (!values.middleName) {
            fullName = `${values.firstName} ${values.lastName}`
        }
        else {
            fullName = `${values.firstName} ${values.middleName} ${values.lastName}`
        }


        if (!editingId) {
            values = { fullName, ...values }
            await dispatch(postApplicantData(values))
            await dispatch(getApplicantData())
        }
        else {
            values = { fullName, ...values }
            await dispatch(putApplicantData({ values, id: editingId }))
            await dispatch(getApplicantData())
            dispatch(closeFormFunc('applicant'))
        }
        resetForm()
    }


    return (
        <React.Fragment>
            <div className='form-container'>
                <header>Applicant</header>

                <Formik
                    initialValues={(editingId) ? editingValue : initialValues}
                    validationSchema={applicantSchema} onSubmit={onSubmit}>

                    {({ values, errors, touched, setFieldValue }) => (
                        <Form>
                            <div className="personal">
                                <span className="title">Personal Details</span>
                                <div className="fields">

                                    <div className="input-field">
                                        <label>First Name</label>
                                        <Field type="text" name='firstName' placeholder="First Name" />
                                        {errors.firstName && touched.firstName && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.firstName}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="input-field">
                                        <label>Middle Name</label>
                                        <Field type="text" name='middleName' placeholder="Middle Name" />
                                        {errors.middleName && touched.middleName && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.middleName}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="input-field">
                                        <label>Last Name</label>
                                        <Field type="text" name='lastName' placeholder="Last name" />
                                        {errors.lastName && touched.lastName && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.lastName}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="input-field">
                                        <label>Email</label>
                                        <Field type="email" name='email' placeholder="Email" />
                                        {errors.email && touched.email && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.email}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="input-field">
                                        <label>Mobile Number</label>
                                        <Field type="text" name='mobileNumber' placeholder="Mobile number" />
                                        {errors.mobileNumber && touched.mobileNumber && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.mobileNumber}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="input-field">
                                        <label>Status</label>
                                        <Field as='select' name='status'>
                                            <option value='Short Listed'>Short Listed</option>
                                            <option value='I Interview Completed'>I Interview Completed</option>
                                            <option value='II Interview Completed'>II Interview Completed</option>
                                            <option value='Hired'>Hired</option>
                                            <option value='Rejected'>Rejected</option>
                                        </Field>
                                        {errors.status && touched.status && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.status}</span>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>

                            <div className="details ID">
                                <span className="title">Job Details</span>
                                <div className="fields">

                                    <div className="input-field">
                                        <label>Technology</label>
                                        <Field as='select' name='technology'  >
                                            <option experivalue=''>Select Technology</option>
                                            <option value='Dot Net'>Dot Net</option>
                                            <option value='React JS'>React JS</option>
                                            <option value='DevOps'>DevOps</option>
                                            <option value='QA'>QA</option>
                                        </Field>
                                        {errors.technology && touched.technology && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.technology}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="input-field">
                                        <label>Position</label>
                                        <div className='radio-btn'>
                                            <span>Junior</span>
                                            <Field type="radio" name="position" value="Junior" />
                                            <span>Mid-Level</span>
                                            <Field type="radio" name="position" value="Mid-level" />
                                            <span>Senior</span>
                                            <Field type="radio" name="position" value="Senior" />
                                        </div>
                                        {errors.position && touched.position && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.position}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="input-field">
                                        <label>Experience</label>
                                        <Field type="number" name='experience' placeholder="Experience" />
                                        <Field as='select' name='period'
                                            className={`${errors.experience ? 'err' : 'period-field'}`}
                                        >
                                            <option value='year'>year</option>
                                            <option value='month'>month</option>
                                        </Field>
                                        {errors.experience && touched.experience && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.experience}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="input-field" >
                                        <label>Salary Expectation</label>
                                        <div className='salaryExpt'>
                                            <Field as='input' type='range' name="salaryExpectation" min="10000" max="100000" step="1000" /> <p>{values.salaryExpectation}</p>
                                        </div>
                                        {errors.salaryExpectation && touched.salaryExpectation && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.salaryExpectation}</span>
                                            </div>
                                        )}
                                    </div>


                                    <div className="input-field">
                                        <label>References</label>
                                        <Field type="text" name='references' placeholder="References" />
                                        {errors.references && touched.references && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.references}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className='input-field '>
                                        <label>Resume</label>
                                        <input type='file' name='resume' accept='.pdf, .docx, .doc' className="file-box"
                                            onChange={(event) => {
                                                const file = event.target.files[0];
                                                setFieldValue('resume', file)
                                            }}
                                        />
                                        {errors.resume && touched.resume && (
                                            <div className='error-box'>
                                                <span className='error'>{errors.resume}</span></div>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div className="btn-container">
                                <button type='submit' className="btn sub-btn ">Submit</button>
                                <button className="btn cancel-btn " onClick={() => dispatch(closeFormFunc('applicant'))} >Cancel</button>
                            </div>

                        </Form>
                    )
                    }
                </Formik>
            </div>

        </React.Fragment>
    )
}

export default ApplicantForm