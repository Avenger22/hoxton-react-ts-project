import "../../Pages/Servicess/Services.css"
import "../../Components/Servicess/Service"
import Service from "../../Components/Servicess/Service"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import { useEffect } from "react"
import { useStore } from "../../Store/store"

export default function ServicesPage() {

    const {services, setServices} = useStore()

    function getServicesFromServer () {

        fetch(`http://localhost:8000/services`)
          .then(resp => resp.json())
          .then(coachesFromServer => setServices(coachesFromServer))
        
    }

    useEffect(getServicesFromServer, [])

    return (

        <>

            <HeaderCommon />
                
            <section className="boxes-wrapper">

                <div className="header-service">
                    <h2>Our Services</h2>
                </div>

                <div className="services-wrapper">
                    
                    {

                        services.map(service =>
                            
                            <Service 
                                key = {service.id}
                                service = {service}
                            />

                        )

                    }

                </div>

            </section>

            <FooterCommon />

        </>

    )
    
}