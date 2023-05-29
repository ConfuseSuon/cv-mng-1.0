import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOfferLetterData } from '../Features/offerLetter/offerLetterSlice'
import Header from '../Shared-Layout/Header'
import { BiMessageAltDetail } from 'react-icons/bi'
import OfferLetterView from '../View Pages/OfferLetterView'

const OfferLetterDetails = () => {

    const { offerLetterId } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getOfferLetterData())
    }, [dispatch])


    const { offerLetterData } = useSelector((store) => store.offerLetter)
    const { closeSideBar } = useSelector((store) => store.sharedFeatures)


    const filterOfferLetter = offerLetterData.filter((item) => item.id === parseInt(offerLetterId))
    const singleOfferLetter = filterOfferLetter[0]


    return (
        <React.Fragment>
            <Header back={'offerLetter'} />
            <section className={`${closeSideBar ? 'main-container full-section' : 'main-container '}`}>

                {
                    singleOfferLetter ? (<div className="tableContainer ">
                        <div className="main-title secondary-title" >
                            <div className="title-detail">
                                <BiMessageAltDetail className='main-icon' />
                                <h4> {singleOfferLetter.status} </h4>
                            </div>

                        </div>

                        <div className="card-container">
                            <OfferLetterView />
                        </div>
                    </div>) : 'no - data'
                }
            </section>

        </React.Fragment>
    )
}

export default OfferLetterDetails