import "../ContactContainer2/ContactContainer2.css"

export default function ContactContainer2() {

    return (

        <>
        
            <section className="contact-container-2" id="contact-container-2">

                <div className="location">
                    <h2>Our Location</h2>
                </div>

                <div className="map-contact">
                    <iframe width="100%" height={600} frameBorder={0} scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2%20Grafton%20Street,%20Dublin,%20Ireland+(AlbFitness)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="http://www.gps.ie/">gps devices</a></iframe>
                </div>

            </section>

        </>

    )
    
}