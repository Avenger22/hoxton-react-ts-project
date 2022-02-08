import HomeContainer6Card from "./HomeContainer6Card"
import './HomeContainer6.css'
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useStore } from "../../../Store/store"

export default function HomeContainer6() {

    const {coaches, setCoaches} = useStore()

    function getCoachesFromServer() {

        fetch(`http://localhost:8000/coaches`)
          .then(resp => resp.json())
          .then(coachesFromServer => setCoaches(coachesFromServer))
        
    }

    useEffect(getCoachesFromServer, [])
    
    const navigate = useNavigate()

    function handleOurTeam() {
        navigate(`/teams`)
    }

    const newCoaches = coaches.slice(0,4)

    return (
        
        <>
        
            <section className="home-container-6" id="home-container-6">

                <div className="text-box-3">
                    <h4>Our Team</h4>
                    <p>Meet our amazing staff wich you will work with everyday to achieve your goals</p>
                </div>

                <div className="cards-2">

                    {

                        newCoaches.map(card =>
                            
                            <HomeContainer6Card 
                                key = {card.id}
                                card = {card}
                            />
                            
                        )

                    }

                </div>

                <div className="btn-all-wrapper">
                    <button onClick={handleOurTeam} className="all-team-btn">
                        <span>All our team</span>
                    </button>
                </div>

            </section>

        </>

    )

}