import { useNavigate } from 'react-router-dom'
import './HomeContainer3.css'

export default function HomeContainer3() {

    const navigate = useNavigate()

    function handleAboutUs() {
        navigate('/about-us')
    }

    return (

        <>
        
            <section className="home-container-3" id="home-container-3">

                <div className="box-2">

                    <div className="text-box-1">

                        <h3>WELCOME TO ALBFITNESS</h3>

                        <p>
                            A very well said quote ‘Health is wealth’. The healthy you will be the more active you will be. It is not money that can bring comfort to your body, it is all how to treat your body brings all kind of ease as well as comfort. Health is said to be wealth because ‘if money is lost, something is lost but if health is lost, it is everything you lost’. So, always be healthy and fit first. When we are healthy, we are able of doing anything, we feel energetic and a kind of positivity automatically rules our brain. But when we are sick, we need help and feel powerless. To maintain 
                            our body stamina and strength it is very necessary to be healthy and fit.
                        </p>

                        <p>
                            Always have fresh fruits and vegetables. Instead of sticking to hotels and street food, try to eat homemade food. Although nowadays people are very health conscious, many of us do not take it seriously. 
                            Discipline is very important in our life, either it is education or health. We must follow a proper diet and healthy routines to stay fit. We should include yoga, 
                            an exercise in our daily routine. Yoga is helpful in many ways. 
                            It is good for your body health, mental health, maintains your skin quality, 
                            makes you look young, adds energy, etc. The benefits have a long list. 
                            So, have nutritious food, follow some exercise or yoga, 
                            and live a healthy life.
                        </p>
                        
                        <div className="btn-box">
                            <button onClick={handleAboutUs}>More about us</button>
                        </div>
                        
                    </div>

                    <div className="image-box-1">
                        <img src="/assets/images/main/image-section.jpg" alt=""/>
                    </div>

                </div>

            </section>

        </>

    )

}