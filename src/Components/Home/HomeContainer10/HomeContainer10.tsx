import HomeContainer10Company from "./HomeContainer10Company"
import './HomeContainer10.css'
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useStore } from "../../../zustand/store"

export default function HomeContainer10() {

    const {companies, setCompanies} = useStore()

    function getCompaniesFromServer() {
    
        fetch(`http://localhost:8000/companies`)
          .then(resp => resp.json())
          .then(companiesFromServer => setCompanies(companiesFromServer))
        
    }

    useEffect(getCompaniesFromServer, [])

    const navigate = useNavigate()

    function handleMoreOffersClick() {
        navigate('/products')
    }
    
    return (

        <>
        
            <section className="home-container-10" id="home-container-10">

                <div className="companies-header">
                    <h3>Our Partners and their review</h3>
                </div>

                <div className="companies"> 

                    {

                        companies.map(company =>
                            
                            <HomeContainer10Company 
                                key={company.id}
                                company = {company}
                            />

                        )

                    }

                </div>

                <div className="offer">

                    <h4>This month we offer 20% discount offer for those who register in our gym in these month, so hurry up and register !</h4>
                    
                    <button onClick={handleMoreOffersClick}>
                        <span>More</span>
                        <span>Offers</span>
                    </button>
                    
                </div>

            </section>

        </>

    )

}