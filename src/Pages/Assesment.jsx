import React, { useEffect } from 'react'
import Header from '../Shared-Layout/Header'
import { useDispatch, useSelector } from 'react-redux'
import AssessmentForm from '../Form/AssessmentForm'
import ReusableTable from '../Table/ReusableTable'
import { getAssessmentData } from '../Features/assessment/assessmentSlice'
import { assessmentColumn } from '../Table/columns'
import Modal from '../Shared-Layout/Modal'
import { BiTask } from 'react-icons/bi'
import BgImage from '../asset/assessment.svg'

const Assesment = () => {

  const { openAssessmentForm } = useSelector((store) => store.form)
  const { assessmentData } = useSelector((store) => store.assessment)
  const { assessmentDeleteModal } = useSelector((store) => store.modal)
  const { closeSideBar } = useSelector((store) => store.sharedFeatures)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAssessmentData())
  }, [dispatch])

  // console.log(assessmentData, 'first')


  return (
    <React.Fragment>

      <Header action={'createAssessment'} />
      <section className={`${closeSideBar ? 'main-container full-section' : 'main-container'}`}>

        <img src={BgImage} alt='girl-bg' className='bgImage assessmentImage' />

        {openAssessmentForm && (<AssessmentForm />)}
        {assessmentDeleteModal && (<Modal />)}

        <div className="tableContainer assessment-width">
          <div className="main-title">
            <BiTask className='main-icon' />
            <h4> Assessment Test </h4>
          </div>
          {
            (assessmentData) ?
              <ReusableTable
                data={assessmentData} columns={assessmentColumn}
                action={{ edit: "editAssessment", delete: "deleteAssessment", view: "assessmentTestDetails" }} /> : 'Add applicant data to display'
          }
        </div>

      </section>

    </React.Fragment>
  )
}

export default Assesment