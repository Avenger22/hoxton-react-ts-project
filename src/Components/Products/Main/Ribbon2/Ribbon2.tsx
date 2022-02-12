import { useStore } from "../../../../zustand/store"
import "../Ribbon2/Ribbon2.css"
import {Item} from '../../../../zustand/types/typesStore'

type Props = {
    showItems: () => Item[]
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>
}

function Ribbon2({showItems, setItemsPerPage}:Props) {

    const {setSelectType} = useStore()

    function handleOnChangeSelect (selectValue: string):void {
        setSelectType(selectValue)
    }

    function handleOnChangeSelectPerPage(selectValue:string):void {
        setItemsPerPage(Number(selectValue))
    }

    return (

        <>

            <div className="main-ribbon-2">

                <div className="box-wrapper-1">

                    <span className="number-span">{showItems().length}</span>
                    <span>Products found</span>
                    
                </div>

                <form id="filter-by-sort">

                    <label htmlFor="filter-by-type">
                        <h3>Sorting Options:</h3>
                    </label>
                    
                    <select name="filter-by-sort" id="filter-by-sort" 
                    onChange={function (e) {
                        handleOnChangeSelect(e.target.value)
                    }}>

                        <option value="Default">No Sorting (Deffault)</option>
                        <option value="price-asc">Sort by price ascending</option>
                        <option value="price-desc">Sort by price descending</option>
                        <option value="date-asc">Sort by oldest</option>
                        <option value="date-desc">Sort by newest</option>
                        <option value="name-asc">Sort by name ascending</option>
                        <option value="name-desc">Sort by name descending</option>

                    </select>
                    
                </form>

                <form className="new-select-page">

                    <label htmlFor="filter-by-pageNum">
                        <h3>Show items per page :</h3>
                    </label>

                    <select 
                    name="filter-by-pageNum" 
                    id="filter-by-pageNum" 
                    defaultValue= "8"
                    onChange={function (e) {
                        handleOnChangeSelectPerPage(e.target.value)
                    }}>

                        <option value="5">5</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>

                    </select>

                </form>

            </div>
        
        </>

    )

}

export default Ribbon2