import React, { useEffect } from 'react'
import InterviewForm from '../Form/InterviewForm'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Shared-Layout/Header'
import { BiBriefcase } from 'react-icons/bi'
import BgImage from '../asset/interview1.svg'
import ReusableTable from '../Table/ReusableTable'
import { interviewColumn } from '../Table/columns'
import { getInterviewData, showCalendarFunc } from '../Features/interview/interviewSlice'
import Modal from '../Shared-Layout/Modal'
import InterviewCalendar from '../Calendar/InterviewCalendar'

const Interview = () => {

  const dispatch = useDispatch()
  const { openInterviewForm } = useSelector((store) => store.form)
  const { closeSideBar } = useSelector((store) => store.sharedFeatures)
  const { interviewDeleteModal } = useSelector((store) => store.modal)
  const { interviewData, showCalendar } = useSelector((store) => store.interview)


  useEffect(() => {
    dispatch(getInterviewData())
  }, [dispatch])


  return (
    <React.Fragment>
      <Header action={'createInterview'} />
      <section className={`${closeSideBar ? 'main-container full-section ' : 'main-container'}`}>

        {openInterviewForm && (<InterviewForm />)}
        {interviewDeleteModal && (<Modal />)}
        {showCalendar && (<InterviewCalendar />)}

        <img src={BgImage} alt='girl-bg' className='bgImage' />

        <div className="tableContainer interview-width">
          <div className="main-title secondary-title">
            <div className="title-detail">

              <BiBriefcase className='main-icon interview-icon' />
              <h4 className='interview-heading'> Interview</h4>
            </div>
            <button className='btn calendar-btn' onClick={() => dispatch(showCalendarFunc())} >Calendar</button>
          </div>

          {
            (interviewData) ? <ReusableTable data={interviewData}
              columns={interviewColumn} action={{ edit: "editInterview", delete: "deleteInterview", view: "interviewDetails" }} /> : 'No - data found'
          }
        </div>
      </section>

    </React.Fragment>
  )
}

export default Interview