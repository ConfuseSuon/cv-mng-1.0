import React from 'react'
import { Formik, Field, Form } from 'formik'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { templateLetterSchema } from '../Schema';


const TemplateLetterForm = () => {



    const initialValues = {
        name: '',
        quillLetter:
            "<p>Amnil Technologies P.Ltd</p><p>Jhamsikhel, Lalitpur</p><p><br></p><p>[Date]</p><p>[Candidate's Name]</p><p>[Candidate's Technology]</p><p><br></p><p>Dear [Candidate's Name],</p><p><br></p><p><br></p><p><br></p><p>Sincerely,</p><p>[Your Name]</p><p>[Your Position]</p><p>[Your Contact Information]</p><p><br></p>",

    }


    const onSubmit = async (values, { resetForm }) => {
        console.log(values)
        resetForm()

    }


    return (
        <React.Fragment>

            <div className="temp-form-container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={templateLetterSchema}
                    onSubmit={onSubmit}>
                    {({ values, errors, touched, setFieldValue }) => (

                        <Form >
                            <div className="fields temp-fields">
                                <div className='input-field ' >
                                    <label htmlFor="name">Name</label>
                                    <Field type='text' name='name' />
                                    {errors.name && touched.name && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.name}</span></div>
                                    )}
                                </div>

                                <label htmlFor="quillLetter" className='ll'>Letter</label>
                                <div className="input-field quill-container" >
                                    <ReactQuill
                                        className='quill-field'
                                        theme='snow'
                                        name='quillLetter'
                                        value={values.quillLetter}
                                        onChange={(content) => setFieldValue('quillLetter', content)}
                                    />
                                    {errors.quillLetter && touched.quillLetter && (
                                        <div className='error-box'>
                                            <span className='error'>{errors.quillLetter}</span></div>
                                    )}
                                </div>

                            </div>
                            <div className="btn-container temp-button">
                                <button type='submit' className="btn sub-btn">Submit</button>
                                <button type='reset' className="btn cancel-btn"  >Cancel</button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </React.Fragment>
    )
}

export default TemplateLetterForm