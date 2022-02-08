import { useNavigate } from "react-router"

export default function RelatedItem({item}) {

    const navigate = useNavigate()

    function handleDivRedirectRelated() {
        navigate(`/products/${item.id}`)
        window.location.reload()
    }

    return (

        <>

            <div className="related-box" onClick={handleDivRedirectRelated}>

                <img src = {item.image}/>
                <span>{item.name}</span>
                <span>${item.price}</span>
                
            </div>
        
        </>

    )

}