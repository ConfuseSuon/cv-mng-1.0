import React from 'react'
import { Routes, Route, } from 'react-router-dom'
//importing pages
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Interview from '../Pages/Interview'
import Applicant from '../Pages/Applicant'
import Assesment from '../Pages/Assesment'
import OfferLetter from '../Pages/OfferLetter'
import Interviewer from '../Pages/Interviewer'
import NotFound from '../Pages/NotFound'
import Experience from '../Pages/Experience'
import ProtectedRoute from './ProtectedRoute'
import SharedLayout from './SharedLayout'
import TemplateLetter from '../Pages/TemplateLetter'
import ApplicantDetails from '../View-Pages/ApplicantDetails'
import InterivewDetails from '../View-Pages/InterivewDetails'
import AssessmentDetails from '../View-Pages/AssessmentDetails'
import OfferLetterDetails from '../View-Pages/OfferLetterDetails'



const Routing = () => {

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        } >
          <Route index element={<Home />} />
          <Route path='/applicant' element={<Applicant />} />
          <Route path='/applicant/applicant-details/:applicantId' element={<ApplicantDetails />} />
          <Route path='/interview' element={<Interview />} />
          <Route path='/interview/interview-details/:interviewId' element={<InterivewDetails />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/assessment-test' element={<Assesment />} />
          <Route path='/assessment-test/assessment-test-details/:assessmentTestId' element={<AssessmentDetails />} />
          <Route path='/offer-letter' element={<OfferLetter />} />
          <Route path='/offer-letter/offer-letter-details/:offerLetterId' element={<OfferLetterDetails />} />
          <Route path='/offer-letter/add-template' element={<TemplateLetter />} />
          <Route path='/interviewer' element={<Interviewer />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='login' element={<Login />} />

      </Routes>

    </React.Fragment>
  )
}

export default Routing