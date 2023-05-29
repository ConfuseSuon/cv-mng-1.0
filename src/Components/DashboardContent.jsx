import React from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { RxDashboard } from 'react-icons/rx'

import homeStyle from '../style/home.module.css'
import { BiBriefcase, BiUserX } from 'react-icons/bi'

const DashboardContent = () => {
    return (
        <React.Fragment>
            <div className={homeStyle.dashContent}>

                <div className={homeStyle.title}>
                    <RxDashboard className={homeStyle.dashIcon} />
                    <h4>Dashboard</h4>
                </div>


                <div className={homeStyle.boxes}>


                    <div className={`${homeStyle.box}`}>
                        <div className={`${homeStyle.overview} ${homeStyle.overview1}`}>
                            <AiOutlineFileSearch className={homeStyle.boxIcon1} />
                        </div>
                        <div className={homeStyle.details}>
                            <p className={homeStyle.number} >127</p>
                            <p className={homeStyle.info}>Applicant </p>

                        </div>
                    </div>

                    <div className={homeStyle.box}>
                        <div className={`${homeStyle.overview} ${homeStyle.overview2}`}>
                            <BiBriefcase className={homeStyle.boxIcon2} />
                        </div>
                        <div className={homeStyle.details}>
                            <p className={homeStyle.number} >9</p>
                            <p className={homeStyle.info}>Scheduled Interview </p>
                        </div>
                    </div>

                    <div className={homeStyle.box}>
                        <div className={`${homeStyle.overview} ${homeStyle.overview3}`}>
                            <BiUserX className={homeStyle.boxIcon3} />
                        </div>
                        <div className={homeStyle.details}>
                            <p className={homeStyle.number} >50</p>
                            <p className={homeStyle.info}>Rejected </p>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment >
    )
}

export default DashboardContent