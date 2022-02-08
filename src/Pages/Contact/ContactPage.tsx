import "./Contact.css"

import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import ContactContainer1 from "../../Components/Contact/ContactContainer1/ContactContainer1"
import ContactContainer2 from "../../Components/Contact/ContactContainer2/ContactContainer2"
import ContactContainer3 from "../../Components/Contact/ContactContainer3/ContactContainer3"
import ButtonTop from '../../Components/Common/ButtonTop/ButtonTop'

function Contact() {

    return (

        <>

            <ButtonTop />
            
            <ContactContainer1 />

            <ContactContainer2 />
        
            <ContactContainer3 />

            <FooterCommon />

        </>

    )

}

export default Contact