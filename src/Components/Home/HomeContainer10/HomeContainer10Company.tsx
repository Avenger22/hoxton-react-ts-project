export default function HomeContainer10Company({company}) {

    return (

        <>

            <div className="company">
                
                <img src={company.image} alt=""/>
                <span>{company.desc}</span>
                <span className="company-span">{company.name}</span>
            
            </div>

        </>

    )

}