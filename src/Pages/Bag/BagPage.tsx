import {useNavigate } from "react-router"
import BagItem from "../../Components/Bag/BagItem"
import ProductsFooter from "../../Components/Products/Footer/ProductsFooter"
import ProductsHeader from "../../Components/Products/Header/ProductsHeader/ProductsHeader"
import { useStore } from "../../Store/store"
import "./Bag.css"

export default function BagPage() {

    const {
        items
    } = useStore()
    
    const navigate = useNavigate()
    const bagItemsFiltered = items.filter(item => item?.quantity > 0)

    function calculateTotalBasket(baskedProductsParam) {

        let total = 0

        for (const product of baskedProductsParam) {
            total += Number(product.price) * Number(product.quantity)
        }

        return total.toFixed(2)

    }

    function handlePaymentRedirect() {
        navigate('/payment')
    }

    function filterTotalIndividual(productId) {

        const array = bagItemsFiltered.filter(item => item.id === productId)
        return array
        
    }

    console.log("Items", items)
    console.log("BagItems:", bagItemsFiltered)

    return (

        <>

            <div className="bag-menus-wrapper">

                <ProductsHeader />

                <section className="basket-container">

                    <h2>Your Shopping Bag</h2>

                    <ul>

                        {

                            bagItemsFiltered.map(product =>

                                <BagItem
                                    key={product.id}
                                    product={product}
                                    calculateTotalBasket={calculateTotalBasket}
                                    filterTotalIndividual={filterTotalIndividual}
                                />

                            )

                        }

                    </ul>

                    <h3>Your total: {calculateTotalBasket(bagItemsFiltered)}</h3>

                    <button className="button-proceed-payment" 
                        onClick={handlePaymentRedirect}>
                            Proceed to payment
                    </button>

                </section>

                <ProductsFooter />

            </div>
      
        </>

    )
    
}