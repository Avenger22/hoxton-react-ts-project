import {useNavigate } from "react-router"

export default function HomeContainer4Card({service}) {

    const navigate = useNavigate()

    function handleClickServices() {
        navigate(`/services/${service.id}`)
    }

    return (

        <>

            <div className="card">

                <img src={service.image} alt=""/>
                <h5>{service.name}</h5>
                <p>{service.desc}</p>

                <button onClick={handleClickServices}>
                    More Details
                </button>

            </div>

        </>

    )

}