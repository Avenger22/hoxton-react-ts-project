import {  } from "react/cjs/react.development"
import { useStore } from "../../../Store/store"
import "../ContactContainer3/ContactContainer3.css"

export default function ContactContainer3() {

    const {nameContactUs, emailContactUs, phoneContactUs,
        handleContactSubmit, subjectContactUs, textAreaContactUs,
        handleTextAreaChange, handleNameChange, handleEmailChange, handlePhoneChange, handleSubjectChange} = useStore()

    return (

        <>
        
            <section className="contact-container-3" id="contact-container-3">

                <div className="contact-group-1">
                    <h2>Contact Information</h2>
                </div>

                <div className="contact-group-2">

                    <div className="form-group-1">
                        <h3>Page Info</h3>
                        <span>Email: info@albfitness.com</span>
                        <span>Contact:+35569 404 6408</span>
                        <span>(405) 379-8024400 Grimes Ave Holdenville, Oklahoma(OK), 74848</span>
                    </div>

                    <form className="form-group-2" onSubmit={function (e) {
                        e.preventDefault()
                        handleContactSubmit(e)
                    }}>

                        <input defaultValue = {nameContactUs} name="fullname" type="text" placeholder="Name: " required onChange={function (e) {
                            e.preventDefault()
                            handleNameChange(e)
                        }}/>

                        <input defaultValue = {emailContactUs} name="email" type="email" placeholder="Email: " required onChange={function (e) {
                            e.preventDefault()
                            handleEmailChange(e)
                        }}/>
                        
                        <input defaultValue = {subjectContactUs} name="subject" type="text" placeholder="Subject: " required onChange={function (e) {
                            e.preventDefault()
                            handleSubjectChange(e)
                        }}/>

                        <input defaultValue = {phoneContactUs} name="phone" type="tel" placeholder="Phone: " required onChange={function (e) {
                            e.preventDefault()
                            handlePhoneChange(e)
                        }}/>
                        
                        <textarea defaultValue = {textAreaContactUs} name="textarea-contact" id="" cols={50} rows={20} placeholder="How can we help ?" onChange={function (e) {
                            e.preventDefault()
                            handleTextAreaChange(e)
                        }}></textarea>
                        
                        <button>
                            Let's Talk
                        </button>
                        
                    </form>

                </div>

            </section>

        </>

    )
    
}