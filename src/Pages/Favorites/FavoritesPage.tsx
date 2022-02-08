import FavoriteItem from "../../Components/Favorites/FavoriteItem"
import "./Favorites.css"
import ProductsFooter from "../../Components/Products/Footer/ProductsFooter"
import ProductsHeader from "../../Components/Products/Header/ProductsHeader/ProductsHeader"
import { useStore } from "../../Store/store"

export default function FavoritesPage(props) {

    const {items} = useStore()

    const favoriteItemsFiltered = items.filter(item => item?.favorite === true)

    function filterTotalIndividual(productId) {
        const array = favoriteItemsFiltered.filter(item => item.id === productId)
        return array
    }

    return (

        <>

            <div className="fav-menus-wrapper">

                <ProductsHeader />

                <section className="favorites-container">

                    <h2>Your favorites items list</h2>
                    <h2>Your Wishlist</h2>

                    <ul>

                        {

                            favoriteItemsFiltered.map(product =>

                                <FavoriteItem
                                    key={product.id}
                                    product={product}
                                    filterTotalIndividual={filterTotalIndividual}
                                />

                            )

                        }

                    </ul>

                </section>

                <ProductsFooter />

            </div>
        
        </>

    )
    
}