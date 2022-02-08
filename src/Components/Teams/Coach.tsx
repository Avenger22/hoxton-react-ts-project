import { useNavigate } from "react-router-dom"

export default function Coach({coach}) {

    const navigate = useNavigate()

    function handleDivClick() {
        navigate(`/teams/${coach.id}`)
    }
    
    return (

        <>

            <div className="box" onClick={handleDivClick}>

                <img src = {coach.image}></img>
                <h3>{coach.name}</h3>
                <span>{coach.desc}</span>
                
            </div>

        </>

    )

}