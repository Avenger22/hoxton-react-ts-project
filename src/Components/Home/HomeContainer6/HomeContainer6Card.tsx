import { useNavigate } from "react-router"

export default function HomeContainer6Card({card}) {

    const navigate = useNavigate()

    function handleClickMore() {
        navigate(`/teams/${card.id}`)
    }

    return (

        <>

            <div className="card-2">

                <img src={card.image} alt=""/>
                <h5>{card.name}</h5>
                <p>{card.desc}</p>

                <button className="button-cards-2" onClick={handleClickMore}>
                    More details
                </button>

            </div>

        </>

    )

}