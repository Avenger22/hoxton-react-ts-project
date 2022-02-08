import '../PopUpModal/PopUpModal.css'

function PopUpModal() {

    return (

        <>
        
            <div className="modal-pop_up-container show">
                
                <div className="modal-pop_up">
                    
                    <div className="wrapper-subs">
                        <span className="span-pop-up">If you want latest news about our shop please subscribe below</span>
                        <input name="pop-input" required={true} type="email"/>
                        <button>Subscribe</button>
                    </div>
                    
                    <button>X</button>
                    
                </div>
                    
             </div>
        
        </>

    )

}

export default PopUpModal