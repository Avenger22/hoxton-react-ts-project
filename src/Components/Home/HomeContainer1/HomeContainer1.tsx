import HeaderCommon from "../../Common/HeaderCommon/HeaderCommon"
import '../HomeContainer1/HomeContainer1.css'
import { Navigate, useNavigate } from "react-router"

export default function HomeContainer1() {

    const navigate = useNavigate()

    function handleGetInTouch() {
        navigate('/contact')
    }

    return (

        <>
        
            <section className="home-container-1" id="home-container-1">

                <HeaderCommon />

                <main className="main">

                    <div className="main-post">

                        <h1>The Price of Excellence</h1>
                        <h2>is discipline</h2>

                        <p>
                            Sweat in the gym is the guarantee stamp for your health.
                        </p>
                        
                        <button onClick={handleGetInTouch}>
                            Contact Us
                        </button>
                        
                    </div>

                </main>

            </section>

        </>

    )

}