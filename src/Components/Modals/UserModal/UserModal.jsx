import '../UserModal/UserModal.css'

function UserModal() {

    return (

        <>
            <div className="modal-user_container show">
                
                <div className="modal-user">
                    
                    <div className="header-user-modal">
                        <h3>Sign In</h3>
                    </div>
                    
                    <form className="form-user">
                        
                        <div className="input-user-modal">

                            <span className="span-user-1">Email:</span>
                            <input className="email-input-user" name="email" required={true} type="email" placeholder="Enter Email"/>
                            <span className="span-user-2">Password:</span>
                            <input className="password-input-user" name="password" required={true} type="password" placeholder="Enter Password"/>
                                
                        </div>
                        
                        <div className="button-user-modal">
                            <button>Sign In</button>
                            <button>X</button>
                        </div>
                        
                    </form>
                    
                    <div className="sign-up-div">
                        
                        <span className="span-sign-up">If you have not an account please Sign Up</span><button>Sign Up</button>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </>

    )

}

export default UserModal