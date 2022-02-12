import { useEffect} from "react";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import Coach from "../../Components/Teams/Coach";
import { useStore } from "../../zustand/store";
import "./Teams.css"

export default function TeamsPage() {

    const {coaches, setCoaches} = useStore()

    function getCoachesFromServer() {
    
        fetch(`http://localhost:8000/coaches`)
          .then(resp => resp.json())
          .then(coachesFromServer => setCoaches(coachesFromServer))
        
    }

    useEffect(getCoachesFromServer, [])

    return (

        <>

            <HeaderCommon />

            <section className="coaches-wrapper">

                <div className="header-team">
                    <h2>Our Team</h2>
                </div>

                <div className="team-wrapper">

                    {

                        coaches.map(coach =>
                            
                            <Coach
                                key = {coach.id}
                                coach = {coach}
                            />

                        )

                    }

                </div>

            </section>

            <FooterCommon />

        </>

    )
    
}