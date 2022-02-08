import '../BagModal/BagModal.css'

function BagModal() {

    return (

        <>
        
            <div className="modal-bag_container show">
                
                <div className="modal-bag">
                    
                    <div className="modal-bag_wrapper">

                        <div className="header-bag">
                            <h3>Bag</h3>
                        </div>
                        
                        <div className="wrapper-items-bag">
                            
                            <div className="item-bag">
                                <img src="./assets/images/argi-power.jpg" alt=""/>
                                <h4>Argi Power 1500 Mega Caps</h4>
                                <span className="span-1-bag">Price: $30</span>
                                <span className="span-2-bag">Discounted Price: $24</span>
                                <span className="span-3-bag">Quantity: 1</span>
                                <button>Remove bag item</button>
                            </div>
                            
                        </div>
                        
                        <div className="removing-bag">
                            
                            <button>Pay now .... $24</button>
                            <button>X</button>
                        
                        </div>
                
                     </div>
            
                </div>
        
            </div>
        
        </>
        
    )

}

export default BagModal