import React, { useEffect } from 'react'
import Header from '../Shared-Layout/Header'
import { useDispatch, useSelector } from 'react-redux'
import OfferLetterForm from '../Form/OfferLetterForm'
import { offerLetterColumn } from '../Table/columns'
import ReusableTable from '../Table/ReusableTable'
import { getOfferLetterData } from '../Features/offerLetter/offerLetterSlice'
import Modal from '../Shared-Layout/Modal'
import { BiDetail } from 'react-icons/bi'
import BgImage from '../asset/offerLetter1.svg'
import { useNavigate } from 'react-router-dom'

const OfferLetter = () => {

  const navigate = useNavigate()

  const { openOfferLetterForm } = useSelector((store) => store.form)
  const { offerLetterData } = useSelector((store) => store.offerLetter)
  const { offerLetterDeleteModal } = useSelector((store) => store.modal)
  const { closeSideBar } = useSelector((store) => store.sharedFeatures)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOfferLetterData())
  }, [dispatch])


  return (
    <React.Fragment>

      <Header action={'createOfferLetter'} />
      <section className={`${closeSideBar ? 'main-container full-section' : 'main-container'}`}>

        <img src={BgImage} alt='girl-bg' className='bgImage ' />

        {openOfferLetterForm && (<OfferLetterForm />)}
        {offerLetterDeleteModal && (<Modal />)}

        <div className="tableContainer offerLetter-width">
          <div className="main-title secondary-title">
            <div className="title-detail">
              <BiDetail className='main-icon' />
              <h4> Offer Letter </h4>
            </div>
            <button className='btn' onClick={() => navigate("/offer-letter/add-template")} > Add Letter</button>
          </div>
          {
            offerLetterData ? <ReusableTable data={offerLetterData} columns={offerLetterColumn} action={{ edit: "editOfferLetter", delete: "deleteOfferLetter", view: "offerLetterDetails" }} /> : "No - Data Found"
          }
        </div>
      </section>
    </React.Fragment>
  )
}

export default OfferLetter