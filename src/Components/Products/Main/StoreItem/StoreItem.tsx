import { useNavigate } from "react-router"
import "../StoreItem/StoreItem.css"
import { useStore } from "../../../../zustand/store"

function StoreItem({item}) {

    const {handleButtonAddBasket, handleButtonAddFavorite} = useStore()

    const navigate = useNavigate()

    function handleLiClickItem(e) {
        e.preventDefault()
        e.stopPropagation()
        navigate(`/products/${item.id}`)
    }

    const date1 = Date.parse('2021/10/1')
    const date2 = Date.parse(item.date)
    const checkingDate = date2 > date1

    return (

        <>
        
            <li 
                className = {checkingDate ? "store-item" : "store-item-no-date"} 
                onClick={function (e) {
                    handleLiClickItem(e)}}
            >

                {checkingDate ? (

                    <span className = "new-item-date">
                        New Item
                    </span>

                ) :null}

                <img src={item.image} alt=""/>
                <h2>{item.name}</h2>

                <div className="span-wrapper-item">

                    <span className = {item.discountPrice === undefined ? "span-1" : "span-1-special" }>
                        Price: {item.price}
                    </span>

                    {item.discountPrice ? (
                    
                        <span className="span-2">
                            Discount Price: {item.discountPrice}
                        </span>
                    
                    ) :null}

                    <span className="span-3-item">
                        Stock: {item.stock}
                    </span>

                    <span className="span-4-item">
                        Type: {item.type}
                    </span>
                
                </div>

                <button onClick={function (e) {
                    e.stopPropagation()
                    handleButtonAddBasket(item)
                }}>

                    <i className="fas fa-shopping-bag"></i>
                    <span>Add to cart</span>
                </button>

                <button onClick={function (e) {
                    e.stopPropagation()
                    handleButtonAddFavorite(item)
                }}>

                    <i className="far fa-heart"></i>
                    <span>Add to Wishlist</span>
                </button>
                
            </li>
            
        </>

    )

}

export default StoreItem