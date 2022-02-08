import '../PayModal/PayModal.css'

function PayModal() {

    return (

        <>

            <div className="modal-pay-container show">
                
                <div className="modal-pay">
                    
                    <form className="form-pay">

                        <h4>Payment plan: 24$ per month</h4>
                        <span>Free trial you will not be charged for 30 days</span>
                        <input type="text" id="input-pay-1" name="name-pay" required={true} placeholder="Name on card:"/>
                        <input type="text" id="input-pay-2" name="number-pay" required={true} placeholder="Number:"/>
                        <input type="date" id="input-pay-3" name="date-pay" required={true} placeholder="Date:"/>
                        <input type="text" id="input-pay-4" name="cvv-pay" required={true} placeholder="CVV:"/>
                                        
                        <div className="btn-pay-wrapper">
                            <button id="button-pay-1">Pay Now</button>
                            <button id="button-pay-2">X</button>
                        </div>
                                        
                    </form>
                                    
                </div>
                            
            </div>
        
        </>

    )

}

export default PayModal