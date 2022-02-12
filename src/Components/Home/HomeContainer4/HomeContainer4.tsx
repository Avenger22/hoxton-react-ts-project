import HomeContainer4Card from "./HomeContainer4Card"
import './HomeContainer4.css'
import { useNavigate } from "react-router"
import { useEffect} from "react"
import { useStore } from "../../../zustand/store"

export default function HomeContainer4() {

    const {services, setServices} = useStore()

    function getServicesFromServer () {
        
        fetch(`http://localhost:8000/services`)
          .then(resp => resp.json())
          .then(servicesFromServer => setServices(servicesFromServer))
        
    }
    
    useEffect(getServicesFromServer, [])

    const navigate = useNavigate()

    function handleOurServices() {
        navigate(`/services`)
    }
    
    const newServices = services.slice(0,3)

    return (

        <>
        
            <section className="home-container-4" id="home-container-4">

                <div className="text-box-2">
                    <h4>Our Services</h4>
                    <p>Here are some of the services that we offer in a wide range of things</p>
                </div>

                <div className="cards">

                    {

                        newServices.map(service =>
                            
                            <HomeContainer4Card 
                                key = {service.id}
                                service = {service}
                            />
                            
                        )

                    }

                </div>

                <div className="btn-all-wrapper">
                    <button onClick={handleOurServices} className="all-services-btn">
                        <span>All our services</span>
                    </button>
                </div>

            </section>

        </>

    )

}