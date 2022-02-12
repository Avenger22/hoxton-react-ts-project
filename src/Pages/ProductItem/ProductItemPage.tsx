// #region 'Importing'
import "./ProductItem.css"
import ProductsFooter from "../../Components/Products/Footer/ProductsFooter"
import RelatedItem from "../../Components/ProductItem/RelatedItem"
import ProductsHeader from '../../Components/Products/Header/ProductsHeader/ProductsHeader'
import { useStore } from "../../zustand/store";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
// #endregion

const randColour = ["green", "red", "blue", "yellow"][
    Math.floor(Math.random() * 4)
];

export default function ProductItemPage() {

    const params = useParams()
    const navigate = useNavigate()

    const {
        handleButtonAddBasket, handleButtonAddFavorite, initialRelatedItems, 
        productItem, setInitialRelatedItems, setProductItem
    } = useStore()

    function getIndividualProductFromServer () {

        fetch(`http://localhost:8000/items/${params.id}`)
            .then(resp => resp.json())
            .then(productFromServer => setProductItem(productFromServer))
    
    }

    function getInitialRelatedItemsFromServer () {
    
        fetch(`http://localhost:8000/items`)
            .then(resp => resp.json())
            .then(itemsFromServer => setInitialRelatedItems(itemsFromServer))
    }

    useEffect(getIndividualProductFromServer, [])
    useEffect(getInitialRelatedItemsFromServer, [])

    if (productItem === null) {
        return <main>Loading...</main>
    }

    if (productItem.name === undefined) {
        return <main>Item not found</main>
    }

    const type = productItem.type
    const name = productItem.name

    function filterCategory() {
        return initialRelatedItems.filter(item => item.type === type && item.name !== name)
    }
    
    const itemsCategory = filterCategory()

    return (

        <>

            <section className='container-product-item'>

                <ProductsHeader />

                <main className='main-container'>

                    <div className='product-ribbon'>
                        <span className='ribbon-span'>Products / </span>
                        <span className='ribbon-span'>{productItem.type} / </span>
                        <span className='ribbon-span'>{productItem.name}</span>
                    </div>

                    <section className="product-detail main-wrapper">

                        <img
                            src={productItem.image}
                            alt={productItem.description}
                        />

                        <div className="product-detail__side" style={{ borderColor: `var(--${randColour})` }}>

                            <h3>{productItem.name}</h3>

                            <h2><span className='special-product-span'>Product Name</span> : {productItem.name}</h2>

                            <p>
                                <span className='special-product-span'>Description</span> : {productItem.description}
                            </p>

                            <p>
                                <span className='special-product-span'>
                                    Item Price
                                </span> : ${productItem.price}
                            </p>

                            <p>
                                <span className='special-product-span'>
                                    Category : 
                                </span> : {productItem.type}
                            </p>

                            <p>
                                <span className='special-product-span'>
                                    In Stock
                                </span> : {productItem.stock}
                            </p>

                            <div className='button-wish-wrapper'>
                                
                                <button onClick={function (e) {
                                    e.stopPropagation()
                                    handleButtonAddBasket(productItem)
                                    navigate(`/bag`)
                                }}>
                                    Add to Bag
                                </button>

                                <button onClick={function (e) {
                                    e.stopPropagation()
                                    handleButtonAddFavorite(productItem)
                                    navigate(`/favorites`)
                                }}>
                                    Add to Wishlist
                                </button>

                            </div>

                        </div>

                    </section>

                    <section className='product-related-wrapper'>

                        <div className='product-related-images'>

                            <div className='product-related-header'>
                                <h4>Related Products</h4>
                            </div>

                            <div className='related-box-wrapper'>

                                {
                                    
                                    itemsCategory.map(item =>
                                        
                                        <RelatedItem 
                                            key = {item.id}
                                            item = {item}
                                        />
                                        
                                    )

                                }


                            </div>

                        </div>

                    </section>

                </main>

                <ProductsFooter />

            </section>

        </>
        
    )
    
}