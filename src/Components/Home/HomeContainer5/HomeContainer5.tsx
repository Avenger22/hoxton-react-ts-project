import { useNavigate } from 'react-router'
import './HomeContainer5.css'

export default function HomeContainer5() {

    const navigate = useNavigate()

    function handleRedirectTeam() {
        navigate('/teams')
    }

    return (

        <>
        
            <section className="home-container-5" id="home-container-5">

                <div className="header-wrapper">

                    <h4>You will train with a</h4>
                    <h5>personal trainer from our team</h5>
                    
                    <button onClick={handleRedirectTeam}>
                        Try It
                    </button>

                </div>

            </section>

        </>

    )

}