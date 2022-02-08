// #region 'Importing'
import Aside from "../Aside/Aside"
import StoreItem from "../StoreItem/StoreItem"
import Ribbon1 from '../Ribbon1/Ribbon1'
import Ribbon2 from '../Ribbon2/Ribbon2'
import ReactPaginate from 'react-paginate'
import "../ProductsMain/ProductsMain.css"
import "../Pagination/Pagination.css"
import { useStore } from "../../../../Store/store"
// #endregion

function ProductsMain({showItems, pagesVisited, pageCount, changePage}) {

    const {itemsPerPage} = useStore()

    // #region 'Returning Html'
    return (

        <>
        
            <main className="main-menu">

                <Ribbon1 />
                
                <Ribbon2 
                    showItems={showItems}
                />
                
                <div className="items-container">
                            
                        <ul className="store-items-wrapper">

                            {
                                
                                showItems().slice(pagesVisited, pagesVisited + itemsPerPage).map(item => 
                                    
                                    <StoreItem 
                                        key = {item.id}
                                        item = {item}
                                    />
                                    
                                )
                                
                            }

                        </ul>
                        
                </div>
                    
                {/* React paginate custom components from npm, also has hooks and props custom*/}
                <ReactPaginate
                    previousLabel={"< Previous"}
                    nextLabel={"Next >"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
                    
                <div className="aside-wrapper">
                        
                    <Aside />
                        
                </div>
                    
            </main>
        
        </>

    )
    // #endregion

}

export default ProductsMain