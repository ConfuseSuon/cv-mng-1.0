import React, { Suspense, useEffect } from 'react'
import Header from '../Shared-Layout/Header'
import { useDispatch, useSelector } from 'react-redux'
import InterviewerForm from '../Form/InterviewerForm'
import { getInterviewerData } from '../Features/interviewer./interviewerSlice'
import ReusableTable from '../Table/ReusableTable'
import { interviewerColumn } from '../Table/columns'
import Modal from '../Shared-Layout/Modal'
import { BiGroup } from 'react-icons/bi'
import BgImage from '../asset/interviewer.svg'
import Loading from '../Components/Loading'


const Interviewer = () => {

  const dispatch = useDispatch()
  const { openInterviewerForm } = useSelector((store) => store.form)
  const { interviewerData } = useSelector((store) => store.interviewer)
  const { interviewerDeleteModal } = useSelector((store) => store.modal)
  const { closeSideBar } = useSelector((store) => store.sharedFeatures)

  useEffect(() => {
    dispatch(getInterviewerData())
  }, [dispatch])

  return (
    <React.Fragment>

      <Header action={'createInterviewer'} />
      <section className={`${closeSideBar ? 'main-container full-section' : 'main-container'}`}>

        <img src={BgImage} alt='girl-bg' className='bgImage assessmentImage' />


        {openInterviewerForm && (<InterviewerForm />)}
        {interviewerDeleteModal && (<Modal />)}

        <div className="tableContainer interviewer-width">
          <div className="main-title">
            <BiGroup className='main-icon' />
            <h4> Interviewer </h4>
          </div>
          {/* {
            (interviewerData) ? <ReusableTable data={interviewerData}
              columns={interviewerColumn} action={{ edit: "editInterviewer", delete: "deleteInterviewer" }} request={"interviewer"} /> : 'No - data found'
          } */}

          <Suspense fallback={<Loading />}>
            <ReusableTable data={interviewerData}
              columns={interviewerColumn} action={{ edit: "editInterviewer", delete: "deleteInterviewer" }} request={"interviewer"} />
          </Suspense>

        </div>
      </section>

    </React.Fragment>
  )
}

export default Interviewer