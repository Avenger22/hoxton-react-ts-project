import { useStore } from "../../../../zustand/store"
import "../Form/Form.css"

function Form(props) {

    const {
        searchTerm, handleOnSubmitForm, searchOnCategory,
        handleOnChangeSearchSelect, handleOnChangeSearchTerm
    } = useStore()


    return (

        <>

            <form className="products-form-wrapper" 
            onSubmit={function (e) {
                e.preventDefault()
                handleOnSubmitForm(e.target.searchProduct.value)
            }}>
                                
                 <select defaultValue = {searchOnCategory} name="filter-by-categories" id="filter-by-categories" 
                 onChange={function (e) {
                        console.log(e.target.value)
                        handleOnChangeSearchSelect(e)
                    }}>

                    <option value="Default">Categories</option>
                    <option value="MultiVitamins">MultiVitamins and essentials minerals</option>
                    <option value="PreWorkouts">Pre-Workout</option>
                    <option value="Proteins">Proteins</option>
                    <option value="testosteroneBoosters">Testosterone Boosters</option>
                    <option value="WeightGainers">Weigh Gainers</option>
                    <option value="Aminoacids">Aminoacids</option>
                    <option value="Creatines">Creatines</option>
                    <option value="WeightBurners">Weigh Burners</option>

                </select>
                                
                <input defaultValue = {searchTerm} type="text" name="searchProduct" placeholder="Search for products." 
                onChange={function (e) {
                    handleOnChangeSearchTerm(e)
                }}/>

                <button id="special-button">
                    Search
                </button>
                            
            </form>
        
        </>

    )

}

export default Form