import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
//importing pages
import Home from '../pages/Home'
import Login from '../pages/Login'
import Interview from '../pages/Interview'
import Applicant from '../pages/Applicant'
import Assesment from '../pages/Assesment'
import OfferLetter from '../pages/OfferLetter'
import Interviewer from '../pages/Interviewer'
import NotFound from '../pages/NotFound'


const Routing = () => {
  const user = true;
  return (
    <React.Fragment>
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={user? <Home/> : <Navigate to='/login' /> }>
        <Route path='/applicant' element={<Applicant/> }/>
        <Route path='/interview' element={<Interview/> }/>
        <Route path='/assesment-test' element={<Assesment/> }/>
        <Route path='/offer-letter' element={<OfferLetter /> }/>
        <Route path='/interviewer' element={<Interviewer/> }/>
    </Route>
    <Route path='*' element={<NotFound/> }/>
    </Routes>

    </React.Fragment>
  )
}

export default Routing