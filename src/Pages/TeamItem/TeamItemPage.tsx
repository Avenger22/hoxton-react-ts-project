import { useEffect} from "react"
import { useParams } from "react-router-dom"
import "./TeamItem.css"
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon"
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon"
import { useStore } from "../../Store/store"

export default function TeamItemPage() {

    const {teamItem, setTeamItem} = useStore()

    const params = useParams()

    function getIndividualTeamFromServer () {

        fetch(`http://localhost:8000/coaches/${params.id}`)
          .then(resp => resp.json())
          .then(teamFromServer => setTeamItem(teamFromServer))
        
    }

    useEffect(getIndividualTeamFromServer, [])

    if (teamItem === null) {
        return <main>Loading...</main>
    }

    if (teamItem.name === undefined) {
        return <main>This coach is not found</main>
    }
    
    return (

        <>

            <HeaderCommon />

            <section className="coach-bio-wrapper">

                <div className="img-box">
                    <img src = {teamItem.image}></img>
                </div>

                <div className="span-box">
                    <span>{teamItem.longDesc}</span>
                </div>

            </section>

            <FooterCommon />
        
        </>

    )
    
}