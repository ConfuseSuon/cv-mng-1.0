import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { interviewSchema } from '../Schema'
import { closeFormFunc } from '../Features/form/formSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getInterviewData, postInterviewData, putInterviewData } from '../Features/interview/interviewSlice'

import ReDatePicker from '../Components/ReDatePicker'
import { getApplicantData } from '../Features/applicant/applicantSlice'
import { getInterviewerData } from '../Features/interviewer./interviewerSlice'
import Multiselect from 'multiselect-react-dropdown'
// import "react-datepicker/dist/react-datepicker.module.css"

const InterviewForm = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplicantData())
    dispatch(getInterviewerData())
  }, [dispatch])


  const { interviewEditValue, createViewInterviewValue } = useSelector((store) => store.form)
  const { applicantData } = useSelector((store) => store.applicant)
  const { interviewerData } = useSelector((store) => store.interviewer)


  const initialValues = {
    dateTime: '',
    title: '',
    applicantId: [],
    interviewerId: [],
  }


  const editingId = interviewEditValue.id
  const editingValue = {
    title: interviewEditValue.title,
    dateTime: new Date(interviewEditValue.dateTime),
    applicantId: interviewEditValue.applicantId,
    interviewerId: interviewEditValue.interviewerId,
  }

  const createViewValue = {
    dateTime: '',
    title: '',
    applicantId: JSON.stringify(createViewInterviewValue),
    interviewerId: [],
  }

  // const sending initialValues for formk
  const formValues = editingId ? editingValue : createViewInterviewValue.length > 0 ? createViewValue : initialValues


  const onSubmit = async (values, { resetForm }) => {

    if (!editingId) {
      await dispatch(postInterviewData(values))
      await dispatch(getInterviewData())
      resetForm()
    }
    else {
      await dispatch(putInterviewData({ values, id: editingId }))
      await dispatch(getInterviewData())
      dispatch(closeFormFunc('interview'))
    }

  }

  return (
    <React.Fragment>

      <div className="form-container">
        <header>Interview</header>

        <Formik
          initialValues={formValues}
          validationSchema={interviewSchema} onSubmit={onSubmit}>
          {({ values, errors, touched }) => (

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
                  <label>Title</label>
                  <Field type="text" name='title' />
                  {errors.title && touched.title && (
                    <div className='error-box'>
                      <span className='error'>{errors.title}</span>
                    </div>
                  )}
                </div>

                <div className='input-field ' >
                  <label htmlFor="dateTime">Date Time</label>
                  <ReDatePicker name="dateTime" />

                  {/* <Field type="datetime-local" name="dateTime" /> */}
                  {errors.dateTime && touched.dateTime && (
                    <div className='error-box'>
                      <span className='error'>{errors.dateTime}</span></div>
                  )}
                </div>


                <div className="input-field interviewerSelect " >
                  <label>Interviewer</label>
                  <Field name="interviewerId">
                    {({ field }) => (
                      <Multiselect
                        className='multiselect'
                        options={interviewerData}
                        placeholder='Select Interviewer '
                        showCheckbox='true'
                        displayValue="interviewerName"
                        selectedValues={field.value}
                        onSelect={(selectedList) => {
                          field.onChange({ target: { name: field.name, value: selectedList } });
                        }}
                        onRemove={(selectedList) => {
                          field.onChange({ target: { name: field.name, value: selectedList } });
                        }}
                      />
                    )}
                  </Field>
                  {errors.interviewerId && touched.interviewerId && (
                    <div className='error-box'>
                      <span className='error'>{errors.interviewerId}</span>
                    </div>
                  )}
                </div>


              </div>

              <div className="btn-container multiSelectBtn">
                <button type='submit' className="btn sub-btn">Submit</button>
                <button className="btn cancel-btn" onClick={() => dispatch(closeFormFunc('interview'))} >Cancel</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

    </React.Fragment >
  )
}

export default InterviewForm