import { useStore } from '../../../Store/store'
import './HomeContainer7.css'

export default function HomeContainer7() {

    const {handleFormNewsletter} = useStore()

    return (

        <>
        
            <section className="home-container-7" id="home-container-7">

                <div className="newsletter-wrapper">

                    <div className="newsletter-header">
                        <h4>Newsletter Signup</h4>
                    </div>

                    <div className="newsletter-search">

                        <form action="" className='form-newsletter-wrapper'
                            onSubmit={function (e) {
                                e.preventDefault()
                                handleFormNewsletter(e)
                            }}
                        >

                            <input name = "newsLetter" type="email" placeholder="abcd@example.com"/>
                            
                            <button>
                                <span>Sign</span>
                                <span>Up</span>
                            </button>

                        </form>
                        
                    </div>

                </div>

            </section>

        </>

    )

}