import {  } from 'react/cjs/react.development'
import { useStore } from '../../../Store/store'
import '../HomeContainer2/HomeContainer2.css'

export default function HomeContainer2() {

    const {formTouch, setFormTouch} = useStore()

    function handleGetSubmit(e) {

        const fullname = e.target.fullname.value
        const phone = e.target.phone.value
        const email = e.target.email.value
        const category = e.target.category.value
        const date = e.target.date.value
        const clock = e.target.clock.value

        const array = [fullname, phone, email, category, date, clock]
        const newArray = [...formTouch, array]

        setFormTouch(array)
        e.reset()

    }

    return (

        <>
        
            <section className="home-container-2" id="home-container-2">

                <div className="box">

                    <div className="box-image">
                        <img src="/assets/images/main/promo-1.jpg" alt=""/>
                    </div>

                    <div className="box-header">
                        <h2>Free 7 days</h2>
                        <h2>Online booking</h2>
                    </div>

                    <form className="box-form" onSubmit={function (e) {
                        e.preventDefault()
                        handleGetSubmit(e)
                    }}>

                        <div className='input-holders'>

                            <input defaultValue = '' name="fullname" type="text" placeholder="Name: " required/>
                            <input defaultValue = '' name="phone" type="tel" placeholder="Phone: " required/>
                            <input defaultValue = '' name="email" type="email" placeholder="Email: " required/>
                            <input defaultValue = '' name="category" type="text" placeholder="Category: " required/>
                            <input defaultValue = '' name="date" type="date" placeholder="" required/>
                            <input defaultValue = '' name="clock" type="time" placeholder="" required/>

                        </div>
                    

                        <div className="box-button">

                            <button>
                                Get in touch
                            </button>
                            
                        </div>

                    </form>

                </div>

            </section>

        </>

    )

}