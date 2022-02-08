import {  } from "react"
import { useNavigate } from "react-router"
import { useStore } from "../../Store/store"

function BagItem({product, calculateTotalBasket, filterTotalIndividual}) {

    const {
       handleOnChangeBasketSelect, handleButtonRemoveBasket
    } = useStore()

    const totalIndividualArray = filterTotalIndividual(product.id)
    const navigate = useNavigate()

    function handleRedirectBack() {
        navigate(`/products/${product.id}`)
    }

    return (

        <li>

            <article className="basket-container__item">

                <img
                    src = {product.image}
                    alt = {product.description}
                    width="90"
                />

                <p>{product.name}</p>

                <p>
                    <span>Quantity: </span>

                    <select 
                    name = "total-options" 
                    defaultValue = {product.quantity} 
                    onChange={function(e) {
                        handleOnChangeBasketSelect(e.target.value, product)
                    }}>
                            

                        <option value="0">
                            0
                        </option>

                        <option value="1">
                            1
                        </option>
                            
                        <option value="2">
                            2
                        </option>

                        <option value="3">
                            3
                        </option>

                        <option value="4">
                            4
                        </option>

                        <option value="5">
                            5
                        </option>

                        <option value="6">
                            6
                        </option>

                        <option value="7">
                            7
                        </option>

                        <option value="8">
                            8
                        </option>

                        <option value="9">
                            9
                        </option>

                        <option value="10">
                            10
                        </option>

                    </select>

                </p>
                
                <span>Stock: {product.stock}</span>
                <p>Item total: {calculateTotalBasket(totalIndividualArray)}</p>
                
                <button 
                onClick={handleRedirectBack}>
                    Go to product
                </button>
                
                <button onClick={function () {
                    handleButtonRemoveBasket(product)
                }}>X</button>

            </article>

        </li>

    )

}

export default BagItem