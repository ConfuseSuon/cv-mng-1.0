import React from 'react'
import ApplicantForm from '../Form/ApplicantForm'
import { useSelector } from 'react-redux'


// components and style
import '../style/applicant.css'
import BgImage from '../asset/ff.svg'
import Header from '../Shared-Layout/Header'
import { AiOutlineFileSearch } from 'react-icons/ai'
import ReusableTable from '../Table/ReusableTable'
import { applicantColumns } from '../Table/columns'
import Modal from '../Shared-Layout/Modal'


const Applicant = () => {

  const { openAppForm } = useSelector((store) => store.form)
  const { applicantDeleteModal } = useSelector((store) => store.modal)
  const { closeSideBar } = useSelector((store) => store.sharedFeatures)


  const applicantData = JSON.parse(localStorage.getItem("Applicant"))



  return (
    <React.Fragment>

      <Header action={'createApplicant'} />
      <section className={`${closeSideBar ? 'main-container full-section' : 'main-container '}`}>

        <img src={BgImage} alt='girl-bg' className='bgImage' />

        {openAppForm && (<ApplicantForm />)}
        {applicantDeleteModal && <Modal />}
        <div className="tableContainer applicant-width">
          <div className="main-title">
            <AiOutlineFileSearch className='main-icon' />
            <h4> Applicant </h4>
          </div>

          <ReusableTable data={applicantData} columns={applicantColumns}
            action={{ edit: "editApplicant", delete: "deleteApplicant", view: 'applicantDetails' }} />

        </div>

      </section>

    </React.Fragment>
  )
}

export default Applicant