import "../Home/HomeModalPop.css"

export default function HomeModalPop() {

    return (

        <>
        
            <input type="checkbox" name="" id="over"/>

            <div className="box-modal">

                <h2>Join our Newsletter</h2>

                <input type="email" name="" placeholder="Email Address" id="input-modal"/>
                
                <button id="button-modal" type="submit">
                    Submit
                </button>

            </div>

            <label className="close-button" htmlFor="over">
                X
            </label>

            <label htmlFor="over" id="label-modal">

                <div className="background">

                </div>
                
            </label>

        </>

    )

}