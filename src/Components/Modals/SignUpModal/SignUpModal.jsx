import '../SignUpModal/SignUpModal.css'

function SignUpModal() {

    return (

        <>
            <div className="modal-sign_up-container show">
                
                <div className="modal-sign_up">
                    
                    <form className="signUp-form">
                        
                        <label>Name: </label>
                        <input name="name-signUp" type="text" placeholder="Enter name:" required={true}/>
                        
                        <label>Last Name </label>
                        <input name="lastname-signUp" type="text" placeholder="Enter last name:" required={true}/>
                        
                        <label>Email: </label>
                        <input type="email" name="email-signUp" required={true} placeholder="Enter Email:"/>
                            
                        <label>Password: </label>
                        <input type="password" name="password-signUp" required={true} placeholder="Enter password:"/>
                            
                        <button>Sign Up</button>
                        <button>X</button>
                        
                    </form>
                    
                </div>
                
            </div>

        </>

    )

}

export default SignUpModal