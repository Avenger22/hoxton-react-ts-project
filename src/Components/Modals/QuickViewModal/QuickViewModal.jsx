import '../QuickViewModal/QuickViewModal.css'

function QuickViewModal() {

    return (

        <>

            <div className="modal-quick_view-container show">
                
                <div className="modal-quick_view">
                    
                    <div className="items-container-quick">
                        
                        <div className="store-items-wrapper-quick">
                            
                            <div className="store-item">
                                
                                <img src="./assets/images/gain-bolic.jpg" alt=""/>
                                    <h2>Gain Bolic 6000G</h2>
                                    
                                    <div className="span-wrapper-item">
                                        <span className="span-1">price: $19</span>
                                        <span className="span-3-item">Stock: 10</span>
                                        <span className="span-4-item">Type: weight-gainers</span>
                                    </div>
                                    
                                    <button>Add to cart</button>
                                    <button>X</button>
                                    <span className="span-description">It is a mixture of carbohydrates with different glycemic index with protein complexes that help increase muscle mass, enriched with carefully selected portions of creatine monohydrate and taurine. Creatine use helps increase physical capacity during short,high-intensity workouts. </span>
                                    
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        
        </>

    )

}

export default QuickViewModal