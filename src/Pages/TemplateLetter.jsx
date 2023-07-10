import React from 'react'
import '../style/template-letter.css'
import Header from '../Shared-Layout/Header'
import { useSelector } from 'react-redux'
import { BiText } from 'react-icons/bi'
import TemplateLetterForm from '../Form/TemplateLetterForm'

const TemplateLetter = () => {

    const { closeSideBar } = useSelector((store) => store.sharedFeatures)


    return (
        <React.Fragment>
            <Header back={'offerLetter'} />
            <section className={`${closeSideBar ? 'main-container full-section' : 'main-container '}`}>

                <div className="tableContainer ">
                    <div className="main-title ">
                        <div className="template-title">
                            <BiText className='main-icon' />
                            <h4> emplate letter </h4>
                        </div>
                    </div>

                    <TemplateLetterForm />

                </div>
            </section>
        </React.Fragment>
    )
}

export default TemplateLetter