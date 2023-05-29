import React, { useEffect } from 'react'
import HomePageHeader from '../Components/HomePageHeader'
import homeStyle from '../style/home.module.css'
import DashboardContent from '../Components/DashboardContent'
import { useDispatch, useSelector } from 'react-redux'
import BgImage from '../asset/dashboard.svg'
import DropDown from '../Components/DropDown'
import { getApplicantData } from '../Features/applicant/applicantSlice'
import { getAssessmentData } from '../Features/assessment/assessmentSlice'
import { getInterviewData } from '../Features/interview/interviewSlice'
import { getInterviewerData } from '../Features/interviewer./interviewerSlice'
const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApplicantData())
    dispatch(getAssessmentData())
    dispatch(getInterviewData())
    dispatch((getInterviewerData()))
  }, [dispatch])

  const { closeSideBar } = useSelector((store) => store.sharedFeatures)

  return (
    <React.Fragment>
      <HomePageHeader />
      <section className={closeSideBar ? `${homeStyle.dashboardSection} ${homeStyle.fullSection}` : homeStyle.dashboardSection} >
        <img src={BgImage} alt="" className={homeStyle.bgImage} />
        <DashboardContent />
        <DropDown />
      </section>
    </React.Fragment>
  )
}

export default Home